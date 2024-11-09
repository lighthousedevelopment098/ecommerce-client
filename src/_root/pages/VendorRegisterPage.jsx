// import WhySellWithUs from '../../components/Seller/WhyWithUs'
// import SellingSteps from '../../components/Seller/SellingSteps'
// import VandorApp from '../../components/Seller/VandorApp'
// import FAQSection from './../../components/Seller/FAQSection'
import MultiStepForm from '../../_auth/Forms/MultiStepForm'

const VendorRegisterPage = () => {
    return (
        <>
            <div className="p-4">
                <div className="flex-grow ">
                    <MultiStepForm />
                </div>
            </div>
            {/* <div>
                <WhySellWithUs />
                <SellingSteps />
                <VandorApp />
                <FAQSection />
            </div> */}
        </>
    )
}

export default VendorRegisterPage
