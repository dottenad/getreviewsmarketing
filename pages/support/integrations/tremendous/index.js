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
                                <span className="ml-4 text-sm font-medium text-gray-500">Tremendous</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                    <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Tremendous</span>
                                </h1>
                                <p className="mt-8 text-xl leading-8 mb-8">Offer your customers gift cards &amp; eGifts with the Tremendous.com integration. Tremendous.com is a reward redemption platform that allows your customers to select from a wide range of gift card &amp; eGift offerings, including popular redemption options like Amazon.com gift cards, Visa gift cards, and direct cash payments via PayPal. To begin offering gift cards &amp; eGifts, follow the instructions below.</p>
                            </div>
                            <div className="mt-6 prose prose-lg prose-sky mx-auto text-gray-900">
                                <h3 className="mb-6">On Tremendous.com:</h3>
                                <h4 className="underline">Sign Up &amp; Create Campaign</h4>
                                <ol>
                                    <li><a href="https://www.tremendous.com/refer/2berr" target="_blank" className="underline">Create</a> a Tremendous.com account</li>
                                    <li>Once logged in, <strong>(1)</strong> click "Campaign Templates" in the left navigation, then <strong>(2)</strong> click "Create"
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_1.jpg" alt="" />
                                        <figcaption>Create a Campaign Template</figcaption>
                                    </figure>
                                    </li>
                                    <li>Select which gift cards/eGifts you would like to make eligible for your customer to claim from your GetReviews survey.
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_2.jpg" alt="" />
                                        <figcaption>Select gift card/eGifts</figcaption>
                                    </figure>
                                    </li>
                                    <li>When your customer selects a gift card/eGift that is fulfilled by Tremendous as their giveaway from your GetReviews survey, they are sent an email immediately after survey completion with a link to Tremendous to redeem their gift card/eGift. When your customer clicks the link in the email, they are sent to a landing page hosted by Tremendous that contains a number of brandable elements, including logo, background color, and more. This step in the Tremendous campaign setup allows you to customize these brandable elements. <strong>(1)</strong> allows you to customize your landing page, and <strong>(2)</strong> allows you to continue with your Tremendous campaign setup.
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_3.jpg" alt="" />
                                        <figcaption>Customize landing page</figcaption>
                                    </figure>
                                    </li>
                                    <li>Once you have completed customizing your landing page, you can also customize the automated email that your customer receives from Tremendous linking them to your landing page. Similar to the landing page editor, the email editor allows you to customize the look and feel of the email that your customer will receive. When satisfied with your email template, <strong>(1)</strong> click "Done."
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_5.jpg" alt="" />
                                        <figcaption>Customize email</figcaption>
                                    </figure>
                                    </li>
                                    <li>Once you click "Done," you are asked to name your campaign. Name your campaign, select which sharing settings you would like (either setting works with GetReviews,) and click "Save Campaign."
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_6.jpg" alt="" />
                                        <figcaption>Name and save campaign</figcaption>
                                    </figure>
                                    </li>
                                </ol>
                                <h4 className="underline">Enable ShipHero Integration on GetReviews</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/integration/manage" target="_blank" className="underline">Integrations Library</a></li>
                                    <li>Locate the Shiphero integration and click "Configure"</li>
                                    <li>Tick the "Enabled" checkbox</li>
                                    <li>Paste the Access Token and Refresh Token generated on Shiphero</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <h4 className="underline">Enable Shiphero Integration on Survey</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/survey" target="_blank" className="underline">Surveys</a> page</li>
                                    <li>Next to the survey you would like to Shiphero to fulfill products from, click “Edit”</li>
                                    <li>Scroll down to the "Integrations" section</li>
                                    <li>Enable Shiphero as an integration</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <p>Once all of the above steps are complete, when a customer completes your survey, Their shipping data along with the free gift they selected, will be sent to Shiphero for automated fulfillment.</p>
                                <h4 className="underline">Notes</h4>
                                <ol>
                                    <li>Your GetReviews Giveaway SKU value must match your Shiphero Product SKU value. If the SKU values do not match, the automation will fail and an order will not be created.</li>
                                    <li>All Shiphero orders created by GetReviews are tagged with the word "GetReviews"</li>
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

