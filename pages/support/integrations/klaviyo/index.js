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
                                <span className="ml-4 text-sm font-medium text-gray-500">Klaviyo</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                    <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Klaviyo</span>
                                </h1>
                                <p className="mt-8 text-xl leading-8 mb-8">Automatically export all GetReviews respondents to Klaviyo. Follow along with the instructions below to learn how.</p>
                            </div>
                            <div className="mt-6 prose prose-lg prose-sky mx-auto text-gray-900">
                                <h3 className="mb-6">On Klaviyo:</h3>
                                <h4 className="underline">Copy your Klaviyo API key</h4>
                                <p className="mb-0">The API key is what allows GetReviews to send data to your Klaviyo account.</p>
                                <ol>
                                    <li><a href="https://www.klaviyo.com/login" target="_blank" className="underline">Log in</a> to your Klaviyo account</li>
                                    <li>Once logged in, visit <a href="https://www.klaviyo.com/account#api-keys-tab" target="_blank" className="underline">https://www.klaviyo.com/account#api-keys-tab</a></li>
                                    <li>Locate your private API key - this should look like: <strong>pk_257d2eeaeb5284daceba5211270a81e451</strong> (if you do not see your private API key, click the blue "Create Private API Key" button.)</li>
                                    <li>Copy your API key</li>
                                </ol>
                                <h4 className="underline">Copy your Klaviyo List ID</h4>
                                <p className="mb-0">The List ID is where you would like GetReviews to send your respondent data to.</p>
                                <ol>
                                    <li>View your <a href="https://www.klaviyo.com/lists" target="_blank" className="underline">Lists</a></li>
                                    <li>Locate the list you would like to send respondent data to</li>
                                    <li>Click the&nbsp;&nbsp;<strong>&#8942;</strong>&nbsp;&nbsp;icon on the right side of the list and then click "List Settings"</li>
                                    <li>Your list's ID will be near the top of this screen (see image below)
                                        <figure className="mt-4">
                                            <img class="w-full rounded-lg border border-gray-200" src="../../../klaviyo_1.jpg" alt="" />
                                            <figcaption>List ID</figcaption>
                                        </figure>
                                    </li>
                                </ol>
                                <h3 className="mb-6">On GetReviews:</h3>
                                <h4 className="underline">Paste Klaviyo API Key</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/integration/manage" target="_blank" className="underline">Integrations Library</a></li>
                                    <li>Locate the Klaviyo integration and click "Configure"</li>
                                    <li>Tick the "Enabled" checkbox</li>
                                    <li>In the API Key text box, paste the API key generated from Klaviyo</li>
                                    <li>Leave "Rows to include" text box empty.</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <h4 className="underline">Paste Klaviyo List ID</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/survey" target="_blank" className="underline">Surveys</a> page</li>
                                    <li>Next to the survey you would like to export respondent data to Klaviyo from, click “Edit”</li>
                                    <li>Scroll down to the "Integrations" section</li>
                                    <li>Enable Klaviyo as an integration</li>
                                    <li>Paste the List ID</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <p>Once all of the above steps are complete, when a customer completes your survey, their data will be automatically sent to the Klaviyo list you've defined above.</p>
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

