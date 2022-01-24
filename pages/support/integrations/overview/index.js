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
                            <div className="text-lg max-w-prose mx-auto">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Overview</span>
                                </h1>
                                <p className="mt-8 text-xl leading-8 mb-8">It is important to understand how integrations work within GetReviews in order to use them effectively. Follow along with the diagrams below to learn more about how to configure integrations within GetReviews.</p>
                            </div>
                            <hr />
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <h3>1.) Integrations are disabled by default</h3>
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../integrations_1.jpg" alt="" />
                                    <figcaption>Marketplace Library</figcaption>
                                </figure>
                                <p>Each giveaway type has unique properties. For example, if the customer claims a giveaway with the type of &quot;product,&quot; they will be prompted to input their shipping address on the survey, whereas if the customer claims a giveaway with the type of coupon, they will not be prompted to input their shipping address since their shipping address is not required to deliver a coupon (which is sent by email.) Let&apos;s go over the different types of giveaways and how to create them in GetReviews.</p>
                            </div>
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                
                                <ol>
                                    <li><strong>Enabled</strong>: Tick this checkbox to enable the integration</li>
                                    <li><strong>Host</strong>: Enter the host name for the server you would like to upload your survey responses to</li>
                                    <li><strong>Username</strong>: Enter the username for the server you would like to upload your survey responses to</li>
                                    <li><strong>Password</strong>: Enter the password for the server you would like to upload your survey responses to</li>
                                    <li><strong>Directory</strong>: Enter the directory you would like to upload survey responses to. This is relative to the root of the server (i.e. "/" would indicate that you would like to upload survey responses to the root of the server.)</li>
                                </ol>
                            </div>
                            <div className="text-lg max-w-prose mx-auto">
                                <p className="mt-8 text-xl leading-8">Each giveaway type has unique properties. For example, if the customer claims a giveaway with the type of &quot;product,&quot; they will be prompted to input their shipping address on the survey, whereas if the customer claims a giveaway with the type of coupon, they will not be prompted to input their shipping address since their shipping address is not required to deliver a coupon (which is sent by email.) Let&apos;s go over the different types of giveaways and how to create them in GetReviews.</p>
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

