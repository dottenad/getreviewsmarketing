import Link from "next/link"
import SupportLayout from '../../../../components/SupportLayout'


const SupportIndex = () => (
        <div>
            <div className="bg-gray-200 pt-10 pb-14">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex pb-10" aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-4">
                        <li>
                                <div>
                                    <Link passHref href="/support"><a>
                                        <svg className="flex-shrink-0 h-5 w-5 text-gray-700 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg>
                                        <span className="sr-only">Home</span>
                                    </a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <Link passHref href="/support/getting-started"><a className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Getting Started</a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Concept</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="relative py-16 bg-white overflow-hidden">
                        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                            <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                                <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs>
                                        <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                                </svg>
                                <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs>
                                        <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                                </svg>
                                <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs>
                                        <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="text-lg max-w-prose mx-auto">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Concept</span>
                                </h1>
                            </div>
                            <div className="mt-10 prose prose-sky prose-lg mx-auto">
                                <p>GetReviews is a survey technology that gives businesses the ability to offer customers a free gift in exchange for their customer&apos;s review posted on the marketplace or platform of the business&apos; choosing. For example, if you sell shoes on Amazon, and you would like the customer who purchased your shoes to leave you a review on Amazon, you would offer your customer a $5 Amazon gift card in order to participate in your survey (powered by GetReviews,) where the outcome of that survey is a verified customer review on your product on Amazon, in addition to the customer&apos;s marketing information (first name, last name, email, phone, etc.) All the while your customer gets a free $5 Amazon gift card. It&apos;s a win-win!</p>
                                <p>However, this likely raises some questions:
                                <ol>
                                    <li><strong>How does my customer get to my survey?</strong> This is probably the most difficult question to answer. The answer is, it depends. Every business interacts with their customers in different ways. Some by email, some face-to-face, some with packing inserts. It all depends on your type of business. The most important things to remember with regards to getting your customer to your GetReviews survey are:
                                        <ol>
                                            <li><strong>Communicate your free gift offering</strong>: Your customer won&apos;t have any incentive to visit your GetReviews survey if they do not know that they can get a free gift. So be sure to let them know that they have a free gift waiting for them at your survey URL.</li>
                                            <li><strong>Communicate your survey URL</strong>: Share with your customer a link to your survey. </li>
                                        </ol>
                                    </li>
                                    <li><strong>Who gives the free gift?</strong>: In short, you do. GetReviews serves as the technology that allows you to build the survey that your customer participates in, but does not provide your customer with their free gift. For example, if you were to create a $5 Amazon gift card giveaway on GetReviews, and make this an item that your customer could select as their free gift, you would be on the hook to fulfill this $5 Amazon gift card, not GetReviews.</li>
                                    <li><strong>Isn&apos;t this against terms of service?</strong>: GetReviews promotes honesty, candidness, and truthfulness in the review collection process. We do not (nor should you) encourage only customers who have had a positive experience with your product or service to complete your GetReviews survey. Our goal is to collect reviews from customers on both ends of the spectrum, as both positive and negative reviews serve to improve your business. As such, GetReviews does not fall outside of terms of service since it does not exist to manipulate your ratings or reviews, but only to collect more of them.</li>
                                </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


    SupportIndex.getLayout = page => (
        <SupportLayout>{page}</SupportLayout>
    )
    
    export default SupportIndex
