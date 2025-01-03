import { useState, useEffect, Suspense, lazy } from 'react'

// import FlashDeal from '../../components/Deals/FlashDeal'
// import FeaturedDeal from '../../components/Deals/FeaturedDeal'
// Lazy loading components
const FeatureProducts = lazy(() =>
    import('../../components/Product/FeatureProducts')
)
const Categories = lazy(() => import('../../components/Categories'))
const LatestProducts = lazy(() =>
    import('../../components/Product/LatestProducts')
)
const DealOfTheDay = lazy(() => import('../../components/Deals/DealOfTheDay'))
const ProductsCategory = lazy(() =>
    import('../../components/Product/ProductsCategory')
)
const ServicesList = lazy(() =>
    import('../../components/Services/ServicesList')
)
const Loader = lazy(() => import('./../../components/Loader'))
const TopSeller = lazy(() => import('../../components/Seller/TopSeller'))
const HeroSection = lazy(() => import('./../../components/Home/HeroSection'))
const Brands = lazy(() => import('../../components/Brands'))
const TopProducts = lazy(() => import('../../components/Home/TopProducts'))

// images
import PromoSaleImage from './../../assets/banner/headphone-add.webp'
import MegaSaleBanner1 from './../../assets/banner/mega-sale.webp'
import MegaSaleBanner2 from './../../assets/banner/super-sale.webp'

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500) // .5 seconds delay

        return () => clearTimeout(timer)
    }, [])

    return isLoading ? (
        <Loader />
    ) : (
        <main>
            <Suspense fallback={<Loader />}>
                <HeroSection />

                <section>
                    <Categories />
                </section>

                {/* <section className="py-2 mb-4">
                    <FlashDeal />
                </section> */}

                <section className="py-4 mb-4">
                    <FeatureProducts />
                </section>

                <section className="py-4 mb-4">
                    <img
                        src={PromoSaleImage}
                        alt="Promo Sale Banner"
                        className="rounded-lg"
                        loading="lazy"
                    />
                </section>

                <TopSeller />

                <section className="py-4 mb-4 flex flex-col items-center w-full lg:flex-row lg:items-start justify-around gap-4">
                    <DealOfTheDay />
                    <LatestProducts />
                </section>

                <section className="py-4">
                    <div className="flex justify-between items-center lg:flex-row flex-col gap-4 w-full">
                        <img
                            src={MegaSaleBanner1}
                            alt="Mega Sale 1"
                            className="lg:w-1/2 w-full rounded-lg"
                            loading="lazy"
                        />
                        <img
                            src={MegaSaleBanner2}
                            alt="Mega Sale 2"
                            className="lg:w-1/2 w-full rounded-lg"
                            loading="lazy"
                        />
                    </div>
                </section>

                <TopProducts />

                <section>
                    <Brands />
                </section>
                <section className="py-4">
                    <ProductsCategory />
                </section>
                <section>
                    <ServicesList />
                </section>
            </Suspense>
        </main>
    )
}

export default HomePage
