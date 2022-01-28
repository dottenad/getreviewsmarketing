import CallToAction from '/components/CallToAction.js';
import CalendlyEmbed from '/components/CalendlyEmbed.js';
import Link from "next/link";
import SiteLayout from '../components/SiteLayout'
import Head from "next/head";

const SiteIndex = () => (
    <div>
        <Head>
            <title>Demo - GetReviews.ai</title>
            <meta name="description" content="Book a demo with GetReviews today to learn more about our cutting edge suite of review generation features." />
        </Head>
        <div className="relative bg-white overflow-hidden">
            <div className="relative bg-sky-900">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" src="demo.jpg" alt="" />
                    <div className="absolute inset-0 bg-sky-900 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl tracking-widest">DEMO</p>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Book a Demo Today to Learn More</h1>
                </div>
            </div>

            <div className="overflow-hidden">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                    </svg>

                    <div className="relative lg:grid lg:items-center">
                        <div className="relative">
                            <CalendlyEmbed />
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction />
        </div>
    </div>
    )

SiteIndex.getLayout = page => (
  <SiteLayout>{page}</SiteLayout>
)

export default SiteIndex
