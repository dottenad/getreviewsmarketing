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
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <Link passHref href="/support/validation"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Review Validation</a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Order Center</span>
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
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Order Center</span>
                                </h1>
                                <p className="mt-8 text-xl leading-8">Automatically validate or invalidate customer-submitted order numbers with the Order Center. The order center in GetReviews allows you to maintain a database of customer order numbers that is referenced against when customers submit order numbers. By maintaining a database of customer order numbers, you are ensuring that only customers with valid order numbers are entering your survey flow.</p>
                            </div>
                            <div className="mt-10 prose prose-sky prose-lg mx-auto">
                                <h2>Enabling a Marketplace</h2>
                                <p>The first thing you will need to do to be able to upload order numbers to a marketplace, is enable the marketplace you would like to upload order numbers to. This is done in the <a href="https://app.getreviews.ai/marketplace/manage" target="_blank" className="underline">Marketplace Library</a>. 
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../marketplaces.jpg" alt="" />
                                    <figcaption>Marketplace Library</figcaption>
                                </figure>
                                Once on the marketplace library, click "Configure" on the marketplace that you would like to enable. To validate customer-submitted order numbers against your order number database, ensure that you select "Upload Orders" as the validation method. This will enable you to be able to upload order numbers to this marketplace's order number database in the order center.
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg" src="../../../marketplace_upload.jpg" alt="" />
                                    <figcaption>Ensure "Upload Orders" is selected as the validation method</figcaption>
                                </figure>
                                </p>
                                <h2>Uploading Order Numbers</h2>
                                <p>Now that we've enabled a marketplace, let's learn how to upload order numbers to this marketplace's database</p>
                                <p>From any page, click the "Orders" item in the left navigation</p>
                                <img class="w-full rounded-lg border border-gray-200" src="../../../../orders_left_nav.jpg" alt="" />
                                <h3>"Upload Orders" section</h3>
                                <img className="w-full mt-0 rounded-lg border border-gray-200" src="../../../upload_orders.jpg" alt="" />
                                <ol role="list">
                                    <li><strong>Order Source</strong>: First, you will need to select which marketplace's database you would like to upload order numbers to. Each marketplace has different order number formats, so be sure to select the right marketplace for your upload.</li>
                                    <li><strong>Marketplace Instructions</strong>: GetReviews provides a dummy .CSV file for you to download to ensure you are uploading marketplace data in the correct format</li>
                                    <li><strong>Order Report File (.csv)</strong>: To upload your order number file, click "Choose File" and navigate to where the order number file is located on your computer and select it. Then click the "Upload" button.</li>
                                </ol>
                                <p><mark><strong>Note:</strong></mark> If you switched your marketplace validation method from "Manual Validation" to "Upload Orders," your account may have pending, unvalidated reviews that, if the order number exists in one of your order number uploads, will automatically validate. Be sure to double check that you are not approving any reviews that you would not like to validate by uploading a file containing one of these order numbers.</p>
                                <h3>"Lookup Order Number" section</h3>
                                <p>Beneath the order number upload section is the "Lookup Order Number" section. The lookup order number section allows you to search your order number database to see if you have uploaded an order number or not. If you have uploaded an order number, that order number's details will show.</p>
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../../order_number.png" alt="" />
                                    <figcaption>Order Number Lookup</figcaption>
                                </figure>
                                <h3>"Recent Uploads" section</h3>
                                <p>The "Recent Uploads" section displays a list of recent uploads, including a link to the file, the marketplace it was uploaded to, who uploaded it, and how many order numbers were processed.</p>
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../../recent_uploads.jpg" alt="" />
                                    <figcaption>Order Number Lookup</figcaption>
                                </figure>
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
