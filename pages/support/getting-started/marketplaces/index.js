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
                                    <span className="ml-4 text-sm font-medium text-gray-500">Marketplaces</span>
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
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Platforms &amp; Marketplaces</span>
                                </h1>
                                <figure>
                                    <img className="w-full my-8" src="../../../features_marketplaces_email.svg" alt="" width="1310" height="873" />
                                </figure>
                                <p className="mt-8 text-xl leading-8">Marketplaces in GetReviews are the places where you would like to collect reviews. For example, if you sell products on Amazon and Walmart and wanted to collect reviews on Amazon and Walmart, you would enable both of these marketplaces on GetReviews.</p>
                                {/* If you sell your services such as real estate brokering or plumbing services and wanted to collect reviews on Google or Facebook, you would enable these platforms on GetReviews. */}
                            </div>
                            <div className="mt-6 prose prose-sky prose-lg mx-auto">
                                <h2>Enabling a Platform/Marketplace</h2>
                                <p>To begin collecting reviews on a marketplace, you will first need to enable the marketplace on GetReviews. Follow along with the instructions below to learn how to enable a marketplace on GetReviews</p>
                                <ol role="list">
                                    <li>Visit the <a href="https://app.getreviews.ai/marketplace/manage" target="_blank" rel="noreferrer" className="underline">Marketplace Library</a>
                                    </li>
                                    <li>Click &quot;Configure&quot; on the marketplace that you would like to collect reviews on</li>
                                    <li>Once on the marketplace configuration screen, tick the checkbox next to the word &quot;Enabled&quot; to enable this marketplace<br />
                                    <img className="w-full rounded-lg mt-4" src="../../marketplace_enable.jpg" alt="" width="1310" height="873" />
                                    </li>
                                    <li>Select your validation method<br />
                                    <img className="w-full rounded-lg mt-4" src="../../marketplace_validation.jpg" alt="" width="1310" height="873" />
                                        <ul>
                                            <li><strong>What is a validation method?</strong>: A validation method is how you would like to validate customer-submitted order numbers. Customer-submitted order numbers need to be validated to ensure that only legitimate customers are leaving reviews and claiming giveaways. GetReviews has two validation methods:</li>
                                            <li><strong>Manual Validation</strong>: Manual validation puts customer-submitted order numbers into a pending state on GetReviews for you to &quot;manually&quot; review their order details and approve or deny their giveaway redemption based on the legitimacy of their order number in your systems. If the order number exists in your systems, you will &quot;validate&quot; their redemption request in GetReviews, meaning if you have any integrations setup to automatically fulfill giveaways, these integrations will fire once you have validated their redemption request. If their order number does not exist, you will &quot;invalidate&quot; their redemption request.</li>
                                            <li><strong>Automatic Validation</strong>: Automatic validation automatically validates any customer-submitted order number so long as the customer-submitted order number exists in your order number database on GetReviews. The order number database allows you to upload and maintain a database of order numbers for your surveys to validate against. If a customer submits an order number that exists in your order number database, they will be automatically validated, and any integrations that exist on your survey will automatically fire once they have completed your survey.
                                            <ul>
                                                <li><strong>Upload Schedule</strong>: When automatic validation is enabled, an additional setting appears called &quot;Upload Schedule.&quot;
                                                <img className="w-full rounded-lg border border-gray-200 mt-4" src="../../../upload_schedule.jpg" alt="" />
                                                Upload schedule is the number of days you plan to lapse between order number uploads. For example, if a customer purchases an item on day 1, and receives it on day 3, but your upload schedule is set to 7 days, this means that this customer will be shown an error message alerting them to come back in at least 7 days since this is how much time you have alotted yourself between order number CSV uploads. Setting an upload schedule does not mean that you cannot upload an order number .CSV <i>before</i> 7 days, this is just the maximum amount of time that you expect to lapse between order number .CSV uploads.</li>
                                            </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Click &quot;Save&quot;</li>
                                </ol>
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