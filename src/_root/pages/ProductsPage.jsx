import { BrandHeader } from '../../components/Brands/BrandHeader'
import FilterSidebar from '../../components/Sort/FilterSidebar'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import { useGetProductsQuery } from '../../redux/slices/productsApiSlice'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import img from '../../assets/no-product-found.png'
import { TablePagination } from '@mui/material'

export const ProductsPage = () => {
    const [searchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(12)

    const [loading, setLoading] = useState(false)

    // Construct filters from search parameters
    const filters = Array.from(searchParams.entries()).reduce(
        (acc, [param, value]) => {
            acc[param] = value
            return acc
        },
        {}
    )

    // const filters = Array.from(searchParams.entries()).reduce(
    //     (acc, [param, value]) => {
    //         // Handle filtering logic
    //         if (param.includes('[') && param.includes(']')) {
    //             // Extract field and operator from the parameter
    //             const [field, operator] = param.split(/[[\]]/).filter(Boolean)

    //             // Map query operators to MongoDB operators
    //             const mongoOperatorMap = {
    //                 gt: '$gt',
    //                 gte: '$gte',
    //                 lt: '$lt',
    //                 lte: '$lte',
    //                 ne: '$ne',
    //             }

    //             if (mongoOperatorMap[operator]) {
    //                 acc[field] = {
    //                     ...acc[field],
    //                     [mongoOperatorMap[operator]]: Number(value),
    //                 }
    //             }
    //         } else if (param === 'featured') {
    //             acc.isFeatured = true // Example for specific filters
    //         } else {
    //             acc[param] = value // Default case
    //         }

    //         return acc
    //     },
    //     {}
    // )

    // Fetch all products without pagination (modify the query to fetch all)
    const { data: products, isFetching } = useGetProductsQuery(filters)

    // Trigger loader on filter change or fetching status
    useEffect(() => {
        if (isFetching) {
            setLoading(true) // Show loader when fetching starts
        } else {
            setLoading(false) // Hide loader when fetching completes
        }
    }, [isFetching]) // Depend only on `isFetching` for reliable loader behavior

    // Calculate total products and pagination
    const totalProducts = products?.results || 0 // Get total number of products from the fetched data

    // Calculate the starting index of the products to display on the current page
    const startIndex = currentPage * rowsPerPage
    const currentProducts =
        products?.doc?.slice(startIndex, startIndex + rowsPerPage) || [] // Slice products based on current page

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage)
    }

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setCurrentPage(0) // Reset to the first page when changing rows per page
    }

    return loading ? (
        <Loader />
    ) : !loading && products ? (
        <>
            <div className="mt-4 w-full mx-auto py-4">
                <BrandHeader
                    filters={filters}
                    title={'Products'}
                    products={products}
                />
                <div className="flex justify-between items-start gap-4 my-4">
                    <FilterSidebar filters={filters} />
                    {currentProducts?.length ? (
                        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 transition-all py-2 ease-in duration-300">
                            {currentProducts.map((product, index) => (
                                <ProductCard key={index} data={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-lg flex mt-20 justify-center items-center w-full text-center">
                            <img
                                src={img}
                                alt="NO Product Found"
                                className="w-[60%] mx-auto"
                            />
                        </div>
                    )}
                </div>
                {/* Pagination Controls using MUI TablePagination */}
                {totalProducts > rowsPerPage && (
                    <TablePagination
                        component="div"
                        count={totalProducts}
                        page={currentPage}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )}
            </div>
        </>
    ) : (
        <p className="text-center p-12">Products not found!</p>
    )
}
export default ProductsPage
