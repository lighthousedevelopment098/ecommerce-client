import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaUserCircle, FaCamera } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
    useGetCustomerDetailsQuery,
    useUpdateCustomerMutation,
} from '../../redux/slices/customersApiSlice'
import toast from 'react-hot-toast'
import keys from '../../config/keys'
import Loader from '../Loader'
import { getUploadUrl, uploadImageToS3 } from '../../utils/helpers'

// Zod schema for form validation
const profileSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phoneNumber: z.string().optional(),
    image: z.any().optional(),
})

const ProfileInfo = () => {
    const { userInfo } = useSelector((state) => state.auth)

    const {
        data: user,
        isLoading: customerLoading,
        refetch,
    } = useGetCustomerDetailsQuery(userInfo.user._id, {
        skip: !userInfo?.user?._id,
    })

    const [selectedImage, setSelectedImage] = useState(null)

    const [updateCustomer, { isLoading: customerUpdating }] =
        useUpdateCustomerMutation()

    useEffect(() => {
        if (userInfo && user?.doc && user?.doc?.image) {
            setSelectedImage(`${keys.BUCKET_URL}${user?.doc?.image}`)
        }
    }, [setSelectedImage, user, userInfo])

    console.log(user)

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            firstName: user?.doc?.firstName || '',
            lastName: user?.doc?.lastName || '',
            email: user?.doc?.email || '',
            phoneNumber: user?.doc?.phoneNumber || '',
        },
    })

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imageURL = URL.createObjectURL(e.target.files[0])
            setSelectedImage(imageURL)
            setValue('image', e.target.files[0])
        }
    }

    async function uploadImage(uploadConfig, file) {
        try {
            await uploadImageToS3(uploadConfig.url, file)
            return uploadConfig.key // Return the key if successful
        } catch (error) {
            console.error(`Failed to upload ${file.name}:`, error)
            return null // Return null on failure
        }
    }

    const onSubmit = async (data) => {
        try {
            let imageConfig
            if (data.image[0]) {
                console.log('first')
                imageConfig = await getUploadUrl(data?.image.type, 'customers')

                await uploadImage(imageConfig, data.image)
            }

            const userData = {
                customerId: userInfo?.user?._id,
                firstName: data.firstName,
                lastName: data.lastName,
                image: imageConfig?.key || user?.doc?.image,
                phoneNumber: data.phoneNumber,
            }

            await updateCustomer(userData).unwrap()
            toast.success('Customer Update successfully')
            refetch()
        } catch (error) {
            console.log(error)
            toast.error(error?.data?.message || 'Customer not updated!')
        }
    }

    return (
        <div className="p-8 xl:w-full xl:mx-auto bg-white rounded-lg shadow-sm shadow-primary-100">
            <h2 className="text-2xl font-bold mb-6">Profile Info</h2>
            {customerLoading ? (
                <Loader />
            ) : user && user?.doc ? (
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative h-full flex items-center justify-center mb-6">
                        <div className="relative">
                            {selectedImage ? (
                                <img
                                    src={selectedImage}
                                    alt="Uploaded"
                                    className="w-36 h-36 object-cover rounded-full border border-gray-300"
                                />
                            ) : (
                                <FaUserCircle className="text-9xl text-primary-100" />
                            )}

                            {/* Image Upload Section */}
                            <div className="absolute bottom-0 right-0 w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                                <input
                                    type="file"
                                    id="imageUpload"
                                    hidden
                                    {...register('image')}
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="imageUpload"
                                    className="cursor-pointer"
                                >
                                    <FaCamera className="w-6 h-6 text-primary-400" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="input-label">First Name</label>
                            <input
                                type="text"
                                className={`input ${
                                    errors.firstName ? 'input-error' : ''
                                }`}
                                {...register('firstName')}
                            />
                            {errors.firstName && (
                                <p className="text-red-500">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="input-label">Last Name</label>
                            <input
                                type="text"
                                className={`input ${
                                    errors.lastName ? 'input-error' : ''
                                }`}
                                {...register('lastName')}
                            />
                            {errors.lastName && (
                                <p className="text-red-500">
                                    {errors.lastName.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="input-label">Phone Number</label>
                        <input
                            type="text"
                            className={`input ${
                                errors.phoneNumber ? 'input-error' : ''
                            }`}
                            {...register('phoneNumber')}
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-500">
                                {errors.phoneNumber.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="input-label">Email</label>
                        <input
                            type="email"
                            className={`input ${
                                errors.email ? 'input-error' : ''
                            }`}
                            {...register('email')}
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="btn primary-btn">
                            {customerUpdating ? 'is Updating...' : 'Update'}
                        </button>
                    </div>
                </form>
            ) : (
                <p>User details not found!</p>
            )}
        </div>
    )
}

export default ProfileInfo
