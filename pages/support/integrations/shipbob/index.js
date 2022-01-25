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
                                <Link passHref href="/support/integrations"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Integrations</a></Link>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center">
                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-4 text-sm font-medium text-gray-500">MailChimp</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                    <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">ShipBob</span>
                                </h1>
                                <p className="mt-8 text-xl leading-8 mb-8">Automatically fulfill product giveaways from your inventory in ShipBob with the ShipBob integration. Learn how to configure this below.</p>
                            </div>
                            <div className="mt-6 prose prose-lg prose-sky mx-auto text-gray-900">
                                <h4 className="underline">Configure the ShipBob integration</h4>
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../shipbob.jpg" alt="" />
                                    <figcaption>ShipBob Settings</figcaption>
                                </figure>
                                <ol>
                                    <li><strong>Enabled</strong>: Tick this checkbox to enable the integration</li>
                                    <li><strong>Access Token (PAT)</strong>: PAT tokens must be requested directly from ShipBob. You can request a PAT Token <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRyS39zBhQfdC-AV4Yf1Oi0BNDExCZPSw0QAvYm4eaURsZ8g/viewform" target="_blank" className="underline">here</a></li>
                                    <li><strong>Channel ID</strong>: Once your request for a PAT Token has been granted by ShipBob, please <a href="mailto:info@getreviews.ai">email GetReviews</a> your PAT Token so that we may grab your Channel ID.</li>
                                    <li><strong>Shipping Method</strong>: This is the shipping method you would like to use to send your customer's giveaway.</li>
                                    <li><strong>Shipping Type:</strong> There are three shipping types in ShipBob - DTC, DropShip, or B2B. Select the shipping type that best represents your situation (contact ShipBob before using B2B.)</li>
                                    <li><strong>Order Endpoint</strong>: There are two order endpoints. If you are testing this integration with ShipBob's sandbox environment, use https://sandbox-api.shipbob.com/1.0/order in this text box. Otherwise, if you are ready to go live, use https://api.shipbob.com/1.0/order in this text box.</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <h4 className="underline">Enable ShipBob Integration on Survey</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/survey" target="_blank" className="underline">Surveys</a> page</li>
                                    <li>Next to the survey you would like to export respondent data to ShipBob from, click “Edit”</li>
                                    <li>Scroll down to the "Integrations" section</li>
                                    <li>Enable ShipBob as an integration</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <p>Once all of the above steps are complete, when a customer completes your survey, Their shipping data along with the free gift they selected, will be sent to ShipBob for automated fulfillment.</p>
                                <h4 className="underline">Notes</h4>
                                <ol>
                                    <li>Your GetReviews Giveaway SKU value must match your ShipBob Product SKU value. If the SKU values do not match, the automation will fail and an order will not be created.</li>
                                    <li>All ShipBob orders created by GetReviews are tagged with the word "GetReviews"</li>
                                </ol>
                            </div>
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

