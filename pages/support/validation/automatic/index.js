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
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <Link passHref href="/support/validation"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Review Validation</a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Automatic Validation</span>
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
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Automatic Validation</span>
                                </h1>
                            </div>
                            <div className="mt-10 prose prose-sky prose-lg mx-auto">
                                <p>When your customer purchases something from you, they generate an order number. The order number is typically a long string of numbers that is unique to their purchase. Contained in this order number are the product(s) that your customer purchased from you. If your customer's purchase contains a product that you have made eligible for your GetReviews survey, then the order number that is generated from your customer's purchase is your customer's ticket into your GetReviews survey. When your customer visits your GetReviews survey, they will be asked to enter their order number. It is the order number that they generated from their purchase of your eligible product that enables them to enter your survey. Automatic validation enables you to maintain a database of eligible order numbers for customer-submitted order numbers to validate against. If a customer-submitted order number matches an order number that you have uploaded to your order number database, then your customer is allowed into your survey. If a customer-submitted order number does not match an order number that you have uploaded to your database, then the customer is shown an error. Let's go over how to enable automatic validation and maintain our order number database below.</p>
                                <h2>Enable a Marketplace</h2>
                                <p>The first thing you will need to do to enable automatic validation is to enable a marketplace. A "Marketplace" is where your customer's order number was generated. For example, if your customer purchased your product on Amazon, then an Amazon order number (with all of it's unique formats and characteristics) was generated. To enable a marketplace, visit your <a href="https://app.getreviews.ai/marketplace/manage" target="_blank" className="underline">Marketplace Library</a>. 
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../marketplaces.jpg" alt="" />
                                    <figcaption>Marketplace Library</figcaption>
                                </figure>
                                Once in the marketplace library, click "Configure" on the marketplace that you would like to enable. Once on the Marketplace configuration page, tick the "Enabled" checkbox, and then select "Upload Orders" to enable automatic order number validation. 
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg" src="../../../marketplace_upload.jpg" alt="" />
                                    <figcaption>Ensure "Upload Orders" is selected as the validation method</figcaption>
                                </figure>
                                <strong>Note:</strong> When upload orders is selected as the validation method, an additional setting appears called "Upload Schedule." Upload Schedule is the number of days you plan to lapse between uploading order numbers. For example, if you upload a .CSV of your order numbers on day 1, and on that same day a customer purchases a product from you, that customer will get their product on day 3. However, since you have set your upload schedule to 7, this means that it will be another 4 days until this customer's order number is uploaded. In the meantime, if they try to enter your survey, they will be shown an error saying to come back in the number of days left since last .CSV upload. While the upload schedule serves as a messaging opportunity to your customer, this upload schedule does not inhibit you from uploading more frequently. You may upload as frequently as you'd like.
                                </p>
                                <h2>Uploading Order Numbers</h2>
                                <p>Now that we've enabled a marketplace, let's learn how to upload order numbers to this marketplace's database</p>
                                <p>From any page, click the "Orders" item in the left navigation</p>
                                <img class="w-full rounded-lg border border-gray-200" src="../../../../orders_left_nav.jpg" alt="" />
                                <p>Once on the "Orders" page, you are greeted with a section titled "Upload orders." There are three parts to this section, <strong>(1)</strong> Order Source, <strong>(2)</strong> Marketplace Instructions, and <strong>(3)</strong> Order Report File. The Order Source is the marketplace you are wanting to upload your order numbers to, the Marketplace Instructions provides a dummy .CSV for you to download to ensure you are formatting your order data properly before uploading to GetReviews, and the Order Report File is where you will upload the .CSV containing your order numbers.</p>
                                <img className="w-full mt-0 rounded-lg border border-gray-200" src="../../../upload_orders.jpg" alt="" />
                                <p>Once you have selected your marketplace and located your .CSV, click the "Upload" button. Once the upload process is finished, any customer who selects a product with this marketplace will have their submitted order number validated against the order numbers in this marketplace's database.</p>
                                <h2>Integrations</h2>
                                <p>GetReviews is able to automate the fulfillment of your customer's giveaway using integrations with 3rd party providers. For example, if you'd like to automate the fulfillment of a free t-shirt once your customer finishes their survey, you can do this with integrations. If you have an integration enabled on your survey, and your customer submits a valid order number, then their review is automatically validated, and all integrations enabled on the survey that this customer completes will fire upon survey completion.</p>
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
