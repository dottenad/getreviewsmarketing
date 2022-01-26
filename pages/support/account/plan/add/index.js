import Link from "next/link"
import SupportLayout from '../../../../../components/SupportLayout'


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
                                    <Link passHref href="/support/getting-started"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Account Settings</a></Link>
                                </div>
                            </li>

                            <li>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <Link passHref href="/support/getting-started/giveaways"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Plan</a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Select Plan</span>
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
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Coupon Code</span>
                                </h1>
                            </div>
                            <figure className="mt-4">
                                    <img class="w-full rounded-lg" src="../../../account_select_plan.jpg" alt="" />
                                    <figcaption>Ensure "Upload Orders" is selected as the validation method</figcaption>
                                </figure>
                            <div className="mt-6 prose prose-sky prose-lg mx-auto">
                                <p>The &quot;coupon&quot; giveaway type is a digital coupon that is emailed to your customer upon survey completion. Follow along with the steps below to learn how to create a giveaway with the type of "Coupon"</p>
                                <ol role="list">
                                    <li>On the <a href="https://app.getreviews.ai/giveaway" target="_blank" className="underline">giveaway</a> page, click &quot;Add Giveaway&quot; and then select &quot;Coupon.&quot;<br />
                                    <img className="w-full rounded-lg mt-4" src="../../../create_giveaway_page.jpg" alt="" width="1310" />
                                    </li>
                                    <li>Complete the fields to create a coupon giveaway<br /><img className="w-full rounded-lg mt-4" src="../../../create_coupon.jpg" alt="" width="1310" /></li>
                                    <ol>
                                        <li><strong>Giveaway Name</strong>: The giveaway name serves as an identifier for your customer. When your customer comes to the step in the survey that asks them which giveaway they would like, the name that you put into this text box will be displayed to them.</li>
                                        <li><strong>Giveaway Image</strong>: This is an image of your giveaway. Once your customer selects this giveaway on your survey, this image will show and will serve as a visual representation of the giveaway they are selecting.</li>
                                        <li><strong>Coupon Codes</strong>: Upload your coupon code values here. Coupon codes should be comma separated. Coupon codes are distributed from first to last. For example, if your coupon codes were &quot;coupon1, coupon2, coupon3&quot;, coupon1 would be sent first, then coupon2, then coupon3. GetReviews sends automatic alerts when your coupon codes are running low.</li>
                                        <li><strong>Email Template</strong>: The email template is the raw HTML of the email that will be sent to your customer that contains their coupon code. GetReviews provides a pre-made template, but you can upload anything you&apos;d like here.</li>
                                        <li><strong>SKU</strong>: SKU is included on all giveaway types as a way for you to analyze which giveaways customers are selecting. Input a unique value here as a way to identify this giveaway in your reporting.</li>
                                        <li><strong>Description</strong>: The description serves as an area to describe your giveaway. For products that have multiple giveaways to choose from, the description serves as a great way to describe what it is your customer is choosing as their free gift. The description shows in tandem with the image to paint a complete picture of what your customer is choosing as their free gift.</li>
                                    </ol>
                                </ol>
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
