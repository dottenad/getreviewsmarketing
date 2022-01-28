import Link from "next/link";
import SupportLayout from '../../../../components/SupportLayout';
import Head from "next/head";

const SupportIndex = () => (
  <div>
    <Head>
      <title>Surveys - GetReviews.ai</title>
      <meta name="description" content="A survey is what your customer completes in order to leave their review and claim their free gift. Read more about configuring your survey here" />
    </Head>
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
                                    <Link passHref href="/support/getting-started"><a className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Getting Started</a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Surveys</span>
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
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Surveys</span>
                                </h1>
                            </div>
                            <div className="mt-10 prose prose-sky prose-lg mx-auto">
                                <p>A survey is what your customer completes in order to provide their review and claim their giveaway. A survey is made up of 5 sections: Survey Settings, Branding, Page Layout, Analytics, and Integrations. Let&apos;s go over the details of each section below.</p>
                                <h2 className="mt-0">Survey Settings</h2>
                                <img className="w-full rounded-lg mt-4" src="../../create_survey.jpg" alt="" width="1310" />
                                <ol role="list">
                                        <li><strong>Survey Name</strong>: The survey name is a way for you and you customer to identify this survey. The survey name shows on the &quot;Surveys&quot; page on GetReviews, as well as in the browser tab (seen below.)<br /><img className="rounded-lg mt-4" src="../../survey_name.jpg" alt="" /></li>
                                        <li><strong>Product Eligibility</strong>: Making a product eligible on a survey allows anyone who has purchased the product you are enabling to provide their review and claim their giveaway <i>on this survey</i>. Here&apos;s what this looks like. Say for example, you&apos;ve enabled our two demo products, &quot;Energize&quot; and &quot;Hydrate,&quot; from the image above. When your customer arrives at the survey, they will be asked the question &quot;Which product did you purchase?&quot;<br /><img className="rounded-lg mt-4" src="../../survey_blank.png" alt="" />
                                        This dropdown contains the two products that we made eligible for this survey, Energize and Hydrate.
                                        <br /><img className="rounded-lg mt-4" src="../../product_select.png" alt="" />
                                        Once we select a product, we are then shown an image of the product, and, if the product is sold on multiple marketplaces, a question that asks &quot;Where did you purchase?&quot; in order to populate the survey with the correct values.
                                        <br /><img className="rounded-lg mt-4" src="../../survey_single.png" alt="" />
                                        If in your product eligibility section you only enable <strong>one</strong> product, then the survey will remove the section asking your customer which product they purchased since the assumption is the customer could have only purchased the single eligible product on the survey.<br /><img className="rounded-lg mt-4" src="../../survey_single_multi.png" alt="" /></li>
                                        <li><strong>Star Rating Limit</strong>: Star Rating Limit allows you to set a minimum star rating that you would like to allow to leave a review. For example, if you set the star rating limit to 4, then only 4 &amp; 5 star reviews will be prompted to copy and paste their review, while 1-3 star reviews will not be prompted. Typically we find that bad reviews are bad for reasons unrelated to the merchant, i.e. a package was damaged in shipping or the product was not used as intended. The Star Rating Limit is a great way to catch and remedy these unrelated issues before they become permanent record on the platform or marketplace you are collecting reviews on.</li>
                                        <li><strong>Rating/Review Requirement</strong>: The rating and review requirement allows you to require or not require a rating and/or review from your customer during the GetReviews survey flow. There are four options to choose from for rating/review requirement:
                                        <ul>
                                            <li><strong>Require Rating &amp; Review</strong>: Requiring a rating and review means your customer must provide a rating and a review in order to proceed to claim their giveaway (notice the &quot;Next&quot; button is not enabled because a rating and review has not been provided).<br /><img className="rounded-lg mt-4" src="../../survey_require_rating_review.png" alt="" /></li>
                                            <li><strong>Require Rating</strong>: Require rating only requires the customer to provide a rating in order to claim their giveaway. Providing a review is optional.<br /><img className="rounded-lg mt-4" src="../../survey_require_rating.png" alt="" /></li>
                                            <li><strong>Do Not Require Rating or Review</strong>: You also have the ability to not require a rating or review. Both rating and review are optional, and the customer will not have to complete either in order to claim their giveaway.<br /><img className="rounded-lg mt-4" src="../../survey_do_not_require.png" alt="" /></li>
                                            <li><strong>Do Not Collect Ratings or Reviews</strong>: In some use cases, collecting a rating and review is not important. If this option is selected, the page that contains the rating and review controls will not be shown at all, and the customer will skip directly to the giveaway selection page from the first step of the survey.<br /></li>
                                        </ul>
                                        </li>
                                        <li><strong>Prompt to Leave Review?</strong>: Adjust when/if you wish to prompt your customer to leave their review on the platform that you would like to collect their review on. There are 4 options:
                                        <ul>
                                            <li><strong>Require Customer Visit Marketplace Before Giveaway Selection</strong>: Requiring the customer to visit the marketplace before selecting their giveaway means that the customer must click the &quot;Copy Text&quot; and &quot;Paste on [marketplace]&quot; buttons to activate the &quot;Next&quot; button on the survey. Once the customer has clicked the &quot;Copy Text&quot; and &quot;Paste on [marketplace]&quot; buttons, the &quot;Next&quot; button will activate and they will be allowed to proceed to the giveaway selection step.<br /><img className="rounded-lg mt-4" src="../../survey_require_copy_paste.png" alt="" /></li>
                                            <li><strong>Do Not Require Customer Visit Marketplace Before Giveaway Selection</strong>: By not requiring the customer visit the marketplace before selecting their giveaway, this means that the customer is not required to click the &quot;Copy Text&quot; or &quot;Paste on [marketplace]&quot; buttons in order to activate the &quot;Next&quot; button. The &quot;Next&quot; button is enabled right when they land on this step from the previous step. So while they can still copy/paste their review to the marketplace if they so desire, it is not required in order to proceed to the giveaway selection step.<br /><img className="rounded-lg mt-4" src="../../survey_do_not_require_copy_paste.png" alt="" /></li>
                                            <li><strong>Show Prompt At End Of Survey</strong>: You can also show the prompt at the very end of the survey, after the customer has already claimed their giveaway.<br /><img className="rounded-lg mt-4" src="../../survey_show_at_end.png" alt="" /></li>
                                            <li><strong>Do Not Prompt At All</strong>: This option does not show the copy/paste prompt at all.</li>
                                        </ul>
                                        </li>
                                        <li><strong>Time Delay</strong>: <mark><strong>Note:</strong> This option only applies if you have selected </mark><Link passHref href="/support/getting-started/marketplaces#:~:text=their%20redemption%20request.-,Automatic%20Validation,-%3A%20Automatic%20validation%20automatically"><a target="_blank" rel="noreferrer" className="underline"><mark>Automatic Validation</mark></a></Link><mark> for your marketplace.</mark> Time delay allows you to delay when customers can enter your survey flow. For example, if you set your time delay to 15 days, this means that someone who tries to enter your survey flow 14 days after their purchase date will not be allowed in. Only once 15 days have elapsed since their purchase date will they be allowed into the survey flow. This option only works if you have uploaded the customers order number and purchase date into your order number database on GetReviews.</li>
                                        <li><strong>Collect Cell Phone Number?</strong>: You have the option to collect customer cell phone numbers as part of your survey. You can also require this value by ticking &quot;Make a required field?&quot;</li>
                                        <li><strong>Redirect on Finish?</strong>: You have the option to direct your customer to a custom domain immediately upon survey completion. Tick the box, then input the URL you would like to redirect your customer to (be sure to include http:// or https://)</li>
                                </ol>
                                <h2>Embed Survey</h2>
                                Once you have saved your survey, an option will appear beneath the survey settings that gives you your survey&apos;s embed code. Embed codes give you the ability to paste your GetReviews survey on custom domains. This can be your business website or a dedicated domain name specifically for your survey.<br /><img className="rounded-lg mt-4" src="../../survey_embed.jpg" alt="" />
                                <h2>Page Layout</h2>
                                Page layout allows you to edit the look and feel of your survey.
                                <br /><img className="rounded-lg mt-4" src="../../survey_page_layout.jpg" alt="" />
                                <ol>
                                    <li><strong>Display Template</strong>: Display template allows you to toggle between two different page layout options: standard and extended.</li>
                                    <li><strong>Fine Print</strong>: Fine print allows you to display any fine print that you would like your customer to know about your survey.</li>
                                </ol>
                                <h2>Analytics</h2>
                                Analytics allows you to insert tracking pixels into your survey. This is great to analyze traffic coming into your survey, as well as to build dynamic marketing audiences for platforms like Google &amp; Facebook. There are four areas where you can place tracking pixels:
                                <br /><img className="rounded-lg mt-4" src="../../survey_analytics.jpg" alt="" />
                                <ol>
                                    <li><strong>Code Slot 1</strong>: Code Slot 1 injects the contents of this text box immediately <strong>after</strong> the opening <strong>&lt;head&gt;</strong> tag on your survey.</li>
                                    <li><strong>Code Slot 2</strong>: Code Slot 2 injects the contents of this text box immediately <strong>before</strong> the closing <strong>&lt;/head&gt;</strong> tag on your survey.</li>
                                    <li><strong>Code Slot 3</strong>: Code Slot 3 injects the contents of this text box immediately after the opening <strong>&lt;body&gt;</strong> tag on your survey.</li>
                                    <li><strong>Code Slot 4</strong>: Code Slot 4 injects the contents of this text box immediately <strong>before</strong> the closing <strong>&lt;/body&gt;</strong> tag on your survey.</li>
                                </ol>
                                <img className="rounded-lg mt-4" src="../../survey_code.jpg" alt="" />
                                <h2>Integrations</h2>
                                Integrations is a two-part process. First, you will need to enable the integrations you would like to utilize on this survey in your <Link passHref href="https://app.getreviews.ai/integration/manage"><a target="_blank" rel="noreferrer" className="underline">integrations library</a></Link>. Once you have enabled the integrations you would like to utilize, return to your survey and you will notice an option has appeared for the integration(s) that you enabled. To enable an integration on your survey, you will need to tick the box next to the integration you would like to enable, and, if there are additional settings required by the integration, then you will need to fill these out as well. <mark><strong>Note:</strong></mark> Integrations fire conditionally based on the <Link passHref href="/support/getting-started/marketplaces#:~:text=What%20is%20a%20validation%20method%3F"><a target="_blank" rel="noreferrer" className="underline">validation method</a></Link> you have set for the marketplace of the completed survey. For example, if the customer is completing your survey for their Amazon purchase, and you have set Amazon to <strong>manual validation</strong>, then the integrations enabled on this survey will not fire until you have validated the customer&apos;s review. However, if Amazon is set to automatic validation and the customer enters an order number that exists in your order number database, then they are automatically validated and your integrations will fire immediately once the customer finishes the survey.
                                <br /><img className="rounded-lg mt-4" src="../../survey_integrations.jpg" alt="" />
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
