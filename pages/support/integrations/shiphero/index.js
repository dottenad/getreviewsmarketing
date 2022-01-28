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
                                <Link passHref href="/support/integrations"><a className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Integrations</a></Link>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center">
                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-4 text-sm font-medium text-gray-500">Shiphero</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                    <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shiphero</span>
                                </h1>
                                <p className="mt-8 text-xl leading-8 mb-8">Automatically fulfill product giveaways from your inventory in Shiphero with the Shiphero integration. Learn how to configure this below.</p>
                            </div>
                            <div className="mt-6 prose prose-lg prose-sky mx-auto text-gray-900">
                                <h3 className="mb-6">On Shiphero:</h3>
                                <h4 className="underline">Create a Shiphero Access Token</h4>
                                <ol>
                                    <li><a href="https://app.shiphero.com/account/login" target="_blank" rel="noreferrer" className="underline">Login</a> to Shiphero</li>
                                    <li>Once logged in, hover over “My Account” in the navigation and select “Users”</li>
                                    <li>In the top right corner, click the “+ Add Third-Party Developer” button</li>
                                    <li>Enter “GetReviews” for the first name, “Integration” for the last name, and &quot;app@getreviews.ai&quot; as the email</li>
                                    <li>Click the “Add Developer” button</li>
                                    <li>On the resulting page, you will see an Access Token and Refresh Token value. Copy both of these values to a word processor, you will need these later. (<strong>Note</strong>: you will only see the access token value once, so please be sure to copy it correctly.)</li>
                                    <li>Click “Update Developer” to save this token.</li>
                                </ol>
                                <h4 className="underline">Enable ShipHero Integration on GetReviews</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/integration/manage" target="_blank" rel="noreferrer" className="underline">Integrations Library</a></li>
                                    <li>Locate the Shiphero integration and click &quot;Configure&quot;</li>
                                    <li>Tick the &quot;Enabled&quot; checkbox</li>
                                    <li>Paste the Access Token and Refresh Token generated on Shiphero</li>
                                    <li>Click &quot;Save&quot;</li>
                                </ol>
                                <h4 className="underline">Enable Shiphero Integration on Survey</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/survey" target="_blank" rel="noreferrer" className="underline">Surveys</a> page</li>
                                    <li>Next to the survey you would like to Shiphero to fulfill products from, click “Edit”</li>
                                    <li>Scroll down to the &quot;Integrations&quot; section</li>
                                    <li>Enable Shiphero as an integration</li>
                                    <li>Click &quot;Save&quot;</li>
                                </ol>
                                <p>Once all of the above steps are complete, when a customer completes your survey, Their shipping data along with the free gift they selected, will be sent to Shiphero for automated fulfillment.</p>
                                <h4 className="underline">Notes</h4>
                                <ol>
                                    <li>Your GetReviews Giveaway SKU value must match your Shiphero Product SKU value. If the SKU values do not match, the automation will fail and an order will not be created.</li>
                                    <li>All Shiphero orders created by GetReviews are tagged with the word &quot;GetReviews&quot;</li>
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

