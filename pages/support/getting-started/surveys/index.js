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
                                    <Link passHref href="/support" className="text-black hover:text-gray-700"><a>
                                        <svg className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
                                    <Link passHref href="/support/getting-started" className="text-black hover:text-gray-700"><a class="ml-4 text-sm font-medium text-gray-500">Getting Started</a></Link>
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
                                <p>A survey is what your customer completes in order to provide their review and claim their giveaway. A survey is made up of 5 sections: Survey Settings, Branding, Page Layout, Analytics, and Integrations. Let's go over the details of each section below.</p>
                                <h2 className="mt-0">Survey Settings</h2>
                                <img className="w-full rounded-lg mt-4" src="../../create_survey.jpg" alt="" width="1310" />
                                <ol role="list">
                                        <li><strong>Survey Name</strong>: The survey name is a way for you and you customer to identify this survey. The survey name shows on the "Surveys" page on GetReviews, as well as in the browser tab (seen below.)<br /><img className="rounded-lg mt-4" src="../../survey_name.jpg" alt="" /></li>
                                        <li><strong>Product Eligibility</strong>: Making a product eligible on a survey allows anyone who has purchased the product you are enabling to provide their review and claim their giveaway <i>on this survey</i>. Here's what this looks like. Say for example, you've enabled our two demo products, "Energize" and "Hydrate," from the image above. When they arrive at the survey, the will be asked the question "Which product did you purchase?" along with a dropdown. <br /><img className="rounded-lg mt-4" src="../../survey_blank.png" alt="" />
                                        This dropdown contains the two products that we made eligible for this survey, Energize and Hydrate.
                                        <br /><img className="rounded-lg mt-4" src="../../product_select.png" alt="" />
                                        Once we select a product, we are then shown an image of the product, and, if the product is sold on multiple marketplaces, a question that asks "Where did you purchase?" in order to populate the survey with the correct values.
                                        <br /><img className="rounded-lg mt-4" src="../../survey_single.png" alt="" />
                                        If in your product eligibility section you only enable one product, then the survey will remove the section asking your customer which product they purchased. Instead, the survey will tell them that they purchased the single eligible product as a reinforcing factor that they are in the right place (as seen in the below image.)<br /><img className="rounded-lg mt-4" src="../../survey_single_multi.png" alt="" /></li>
                                        <li><strong>Star Rating Limit</strong>: Star Rating Limit allows you to set a minimum star rating that you would like to allow to leave a review. For example, if you set the star rating limit to 4, then only 4 &amp; 5 star reviews will be prompted to copy and paste their review, while 1-3 star reviews will not be prompted. Typically we find that bad reviews are bad for reasons unrelated to the merchant, i.e. a package was damaged in shipping or the product was not used as intended. The Star Rating Limit is a great way to catch and remedy these unrelated issues before they become permanent record on the platform or marketplace you are collecting reviews on.</li>
                                        <li><strong>Rating/Review Requirement</strong>: The rating and review requirement allows you to require or not require a rating and/or review from your customer during the GetReviews survey flow. There are four options to choose from for rating/review requirement:
                                        <ul>
                                            <li><strong>Require Rating &amp; Review</strong>: Requiring a rating and review means your customer must provide a rating and a review in order to proceed to claim their giveaway (notice the "Next" button is not enabled because a rating and review has not been provided).<br /><img className="rounded-lg mt-4" src="../../survey_require_rating_review.png" alt="" /></li>
                                            <li><strong>Require Rating</strong>: Require rating only requires the customer to provide a rating in order to claim their giveaway. Providing a review is optional.<br /><img className="rounded-lg mt-4" src="../../survey_require_rating.png" alt="" /></li>
                                            <li><strong>Do Not Require Rating or Review</strong>: You also have the ability to not require a rating or review. Both rating and review are optional, and the customer will not have to complete either in order to claim their giveaway.<br /><img className="rounded-lg mt-4" src="../../survey_do_not_require.png" alt="" /></li>
                                            <li><strong>Do Not Collect Ratings or Reviews</strong>: In some use cases, collecting a rating and review is not important. If this option is selected, the page that contains the rating and review controls will not be shown at all, and the customer will skip directly to the giveaway selection page from the first step of the survey.<br /></li>
                                        </ul>
                                        </li>
                                        <li><strong>Prompt to Leave Review?</strong>: Adjust when/if you wish to prompt your customer to leave their review on the platform that you would like to collect their review on. There are 4 options:
                                        <ul>
                                            <li><strong>Require Customer Visit Marketplace Before Giveaway Selection</strong>: Requiring the customer to visit the marketplace before selecting their giveaway means that the customer must click the "Copy Text" and "Paste on [marketplace]" buttons to activate the "Next" button on the survey. Once the customer has clicked the "Copy Text" and "Paste on [marketplace]" buttons, the "Next" button will activate and they will be allowed to proceed to the giveaway selection step.<br /><img className="rounded-lg mt-4" src="../../survey_require_copy_paste.png" alt="" /></li>
                                            <li><strong>Do Not Require Customer Visit Marketplace Before Giveaway Selection</strong>: By not requiring the customer visit the marketplace before selecting their giveaway, this means that the customer is not required to click the "Copy Text" or "Paste on [marketplace]" buttons in order to activate the "Next" button. The "Next" button is enabled right when they land on this step from the previous step. So while they can still copy/paste their review to the marketplace if they so desire, it is not required in order to proceed to the giveaway selection step.<br /><img className="rounded-lg mt-4" src="../../survey_do_not_require_copy_paste.png" alt="" /></li>
                                            <li><strong>Show Prompt At End Of Survey</strong>: You can also show the prompt at the very end of the survey, after the customer has already claimed their giveaway.<br /><img className="rounded-lg mt-4" src="../../survey_show_at_end.png" alt="" /></li>
                                            <li><strong>Do Not Prompt At All</strong>: This option does not show the copy/paste prompt at all.</li>
                                        </ul>
                                        </li>
                                        <li><strong>Time Delay</strong>: <mark><strong>Note:</strong> This option only applies if you have selected </mark><a href="/support/getting-started/marketplaces#:~:text=their%20redemption%20request.-,Automatic%20Validation,-%3A%20Automatic%20validation%20automatically" target="_blank" className="underline"><mark>Automatic Validation</mark></a><mark> for your marketplace.</mark> Time delay allows you to set a time delay for when customers can enter your survey flow. For example, if you set your time delay to 15 days, this means that someone who tries to enter your survey flow 14 days after their purchase date will not be allowed in. Only once 15 days have elapsed since their purchase date will they be allowed into the survey flow. This option only works if you have uploaded the customers order number and purchase date into your order number database on GetReviews. Once the customer inputs their order number on your survey, we lookup this order number, then do a comparison between your time delay value and their purchase date to determine if they are eligible.</li>
                                        <li><strong>Collect Cell Phone Number?</strong>: You have the option to collect customer cell phone numbers as part of your survey. You can also require this value by ticking "Make a required field?"</li>
                                        <li><strong>Redirect on Finish?</strong>: You have the option to direct your customer to a custom domain immediately upon survey completion. Tick the box, then input the URL you would like to redirect your customer to (be sure to include http:// or https://)</li>
                                </ol>
                                <h2>Embed Survey</h2>
                                <ul>
                                    <li>Once you have saved your survey, an option will appear beneath the survey settings that gives you your survey's embed code. Embed codes give you the ability to paste your GetReviews survey on custom domains. This can be your business website or a dedicated domain name specifically for your survey.<br /><img className="rounded-lg mt-4" src="../../survey_embed.jpg" alt="" /></li>
                                </ul>
                                <h2>Branding</h2>
                                <ul>
                                    <li>Branding allows you to customize the look and feel of your survey. GetReviews gives you two options for branding
                                    <br /><img className="rounded-lg mt-4" src="../../branding.jpg" alt="" /></li>
                                    <ol>
                                        <li><strong>Logo Image</strong>: Upload your company logo. Ideal upload dimensions are 250 pixels in width by 100 pixels in height.</li>
                                        <li><strong>Background Image</strong>: Upload your background image. Ideal upload dimensions are 1920 pixels in width by 1080 pixels in height.</li>
                                    </ol>
                                    <li>The below image is a representation of where the logo and background images will go on your survey</li>
                                    <li className="list-none"><img className="rounded-lg border border-gray-500 mt-4" src="../../branding_explainer.jpg" alt="" /></li>
                                </ul>
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
