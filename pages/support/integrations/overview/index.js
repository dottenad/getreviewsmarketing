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
                                    <span className="ml-4 text-sm font-medium text-gray-500">Overview</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                        <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Overview</span>
                                </h1>
                                <p className="mt-8 text-xl leading-8 mb-8">It is important to understand how integrations work within GetReviews in order to use them effectively. Follow along with the diagrams below to learn more about how to configure integrations within GetReviews.</p>
                            </div>
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <h3>1.) Surveys are Children of Integrations</h3>
                                <p>If you look at file structure of GetReviews, you'll find that integrations are located above surveys.</p>
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../integrations_1.jpg" alt="" />
                                    <figcaption>Surveys are Children of Integrations</figcaption>
                                </figure>
                                <h3>2.) Integrations are Disabled by Default</h3>
                                <p>Integrations need to be enabled in order to use them.</p>
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../integrations_2.jpg" alt="" />
                                    <figcaption>Integrations are Disabled by Default</figcaption>
                                </figure>
                                <h3>3.) Enabling an Integration on the Account Does Not Enable the Integration on the Survey</h3>
                                <p>When you enable an integration on your account, this does not enable the integration on your survey(s). Once an integration is enabled on your account, you must also enable the same integration on your survey(s). This is because you may want survey completions to direct customer data to different email lists/fulfillment centers/etc. The image below shows what happens when you enable the MailChimp integration on your account. Notice that enabling the MailChimp integration on your account does not enable the MailChimp integration on your survey. In this example, if someone were to complete your survey, the respondent's information would not be sent to MailChimp.</p>
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../integrations_3.jpg" alt="" />
                                    <figcaption>Enabling an Integration on the Account Does Not Enable the Integration on the Survey</figcaption>
                                </figure>
                                <h3>4.) Enabling an Integration on the Survey Enables Respondent Data to be Sent to Integration</h3>
                                <p>Once you enable the integration on your survey, your respondent information will begin to send to the integration you just activated. You may activate as many or as few integrations as you'd like per survey.</p>
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../integrations_4.jpg" alt="" />
                                    <figcaption>Enabling an Integration on the Survey Enables Respondent Data to be Sent to Integration</figcaption>
                                </figure>
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

