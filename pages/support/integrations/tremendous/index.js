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
                                <h4 className="underline">Sign Up &amp; Create a Campaign</h4>
                                <ol>
                                    <li><a href="https://www.tremendous.com/refer/2berr" target="_blank" className="underline">Sign up</a> for a Tremendous.com account</li>
                                    <li>Once signed up, <strong>(1)</strong> click "Campaign Templates" in the left navigation, then <strong>(2)</strong> click "Create"
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
                                    <li>Once you've created your campaign, visit your "Campaign templates" page, and locate the campaign you just created. Take note of the campaign ID (seen below,) we will be using this in the future.
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_10.jpg" alt="" />
                                        <figcaption>Take note of campaign ID</figcaption>
                                    </figure>
                                    </li>
                                </ol>
                                <h4 className="underline">Configure Billing on Tremendous.com</h4>
                                <ol>
                                    <li>Once you have created a campaign, you will need to tell Tremendous where you would to fund the gift card/eGifts purchases from. To do this, <strong>(1)</strong> click "Billing" in the left navigation, and then <strong>(2)</strong> click "Saved Accounts." The "Saved Accounts" page is where you will designate your funding source. For payment, you can either pre-fund your Tremendous account and draw down from that amount for each gift card/eGift redemption, or you can pay for each individual gift card/eGift redemption at the time of redemption.
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_7.jpg" alt="" />
                                        <figcaption>Set funding source</figcaption>
                                    </figure>
                                    </li>
                                </ol>
                                <h4 className="underline">Generate API Key</h4>
                                <ol>
                                    <li>To allow GetReviews to communicate with Tremendous to place gift card/eGift orders on your customer's behalf, GetReviews needs API access to this account. To do this, <strong>(1)</strong> click "Team settings" in the left navigation, <strong>(2)</strong> click "Developers," then <strong>(3)</strong> click "Add API Key"
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_8.jpg" alt="" />
                                        <figcaption>Generate API Key</figcaption>
                                    </figure>
                                    </li>
                                    <li>Copy API Key
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_9.jpg" alt="" />
                                        <figcaption>Copy API Key</figcaption>
                                    </figure>
                                    </li>
                                </ol>
                                <h3 className="mb-6">On GetReviews:</h3>
                                <h4 className="underline">Locate Funding Source ID</h4>
                                <ol>
                                    <li>On GetReviews, visit your funding source utility page at https://app.getreviews.ai/integration/utils/tremendous/prod/<strong>ACCESSTOKEN</strong> Replace ACCESSTOKEN with the API Key that was generated in step 2 above.</li>
                                    <li>Once on this page, take note of the funding source ID you would like to use to fund your customers gift card/eGift redemptions. You will use this soon.
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_11.jpg" alt="" />
                                        <figcaption>Choose a funding source</figcaption>
                                    </figure>
                                    </li>
                                </ol>
                                <h4 className="underline">Enable Tremendous Integration on GetReviews</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/integration/manage" target="_blank" className="underline">Integrations Library</a></li>
                                    <li>Locate the Tremendous integration and click "Configure"</li>
                                    <li>Tick the "Enabled" checkbox</li>
                                    <li>In the "Access Token" text box, paste the API Key you generated on Tremendous (Step 2 of "Generate API Key" instructions above).</li>
                                    <li>In the "Funding Source ID" text box, paste the funding source ID you located on GetReviews (Step 2 of "Locate Funding Source ID" instructions above.)</li>
                                    <li>For the "Order Endpoint" text box, set this to https://testflight.tremendous.com/api/v2/ for testing purposes or https://www.tremendous.com/api/v2/ to go live.</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <h4 className="underline">Enable Tremendous Integration on Survey</h4>
                                <ol>
                                    <li>Visit the <a href="https://app.getreviews.ai/survey" target="_blank" className="underline">Surveys</a> page</li>
                                    <li>Next to the survey you would like to automatically fulfill gift card/eGifts with Tremendous from, click “Edit”</li>
                                    <li>Scroll down to the "Integrations" section</li>
                                    <li>Enable Tremendous as an integration</li>
                                    <li>Click "Save"</li>
                                </ol>
                                <h4 className="underline">Create an Gift Card/eGift Giveaway</h4>
                                <ol>
                                    <li>Enabling Tremendous unlocks the eGift giveaway type. Take a look at the image below:
                                    <figure className="mt-4">
                                        <img class="w-full rounded-lg border border-gray-200" src="../../../tremendous_13.jpg" alt="" />
                                        <figcaption>Before &amp; After Enabling Tremendous</figcaption>
                                    </figure>
                                    Notice how the "eGift" giveaway type does not appear until <i>after</i> you enable the Tremendous integration? This is because if someone was able to choose an eGift without a way to fulfill it, it would cause problems for both the customer and the merchant. So we make sure that you are able to fulfill the eGift <i>before</i> a customer chooses it by requiring you to sign up and configure your Tremendous.com account. Click the button below to learn more about how to create an eGift giveaway on GetReviews.<br />
                                    <Link passHref href="/support/getting-started/giveaways/giftcard"><a><button type="button" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                        Create an eGift Giveaway
                                        </button></a></Link>
                                    </li>
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

