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
                                <Link passHref href="/support/integrations"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Integrations</a></Link>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center">
                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="ml-4 text-sm font-medium text-gray-500">Google Sheets</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                    <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Google Sheets</span>
                                </h1>
                                <p className="mt-8 text-xl leading-8 mb-8">Export each survey response as a new row in a Google Sheet with the Google Sheets integration.</p>
                            </div>
                            <div className="mt-6 prose prose-lg prose-sky mx-auto text-gray-900">
                                <h3>On Google Sheets:</h3>
                                <ol>
                                    <li>Visit <a href="https://www.google.com/sheets/about/" target="_blank" className="underline">Google Sheets</a></li>
                                    <li>Create new Sheet (<strong>important</strong>: Leave sheet blank. Adding any content to sheet will break functionality)</li>
                                    <li>In the top right corner of your sheet, click the green "Share" button</li>
                                    <li>Paste this email address into the "Share with people and groups" textbox: getreviews@getreviews-sheets-integration.iam.gserviceaccount.com</li>
                                    <li>Make sure "Editor" privileges are selected</li>
                                    <li>Uncheck "Notify People"</li>
                                    <li>Leave message area blank</li>
                                    <li>Click Share</li>
                                    <li>In the URL bar, locate the Sheet ID. This should look something like the bolded text docs.google.com/spreadsheets/d/<strong>1KbpKS_kImmTOc2Xr1x3vXlssjqtXLTs_kaUV8L3CkyI</strong>/</li>
                                    <li>Copy Sheet ID</li>
                                </ol>
                                <h3>On GetReviews:</h3>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/integration/manage" target="_blank" className="underline">Integrations Library</a></li>
                                    <li>Locate the Google Sheets integration and click "Configure"</li>
                                    <li>Tick the "Enabled" checkbox</li>
                                    <li>Click "Save"</li>
                                    <li>Visit the <a href="https://app.getreviews.ai/survey" target="_blank" className="underline">Surveys</a> page</li>
                                    <li>Click “Edit” next to the survey you would like to export data to Google Sheets from</li>
                                    <li>Scroll down to the "Integrations" section</li>
                                    <li>Tick the “Google Sheets” checkbox</li>
                                    <li>Paste the Sheet ID into the textbox</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <p><strong>Note:</strong> The Google Sheet you've created to export respondent information to is <strong><mark>read-only</mark></strong>. Do not add/edit/delete data from the Google Sheet you've linked to GetReviews. GetReviews exports customer data to pre-defined column letters (i.e. first name goes into column A, last name goes into column B, etc.) If you delete Column A, GetReviews would still print first name to Column A even though Column A is now last name. If you would like to modify data, either mirror the data to a new sheet, or export and modify.</p>
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

