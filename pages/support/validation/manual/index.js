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
                                    <Link passHref href="/support/validation"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Review Validation</a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Manual Validation</span>
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
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Manual Validation</span>
                                </h1>
                            </div>
                            <div className="mt-10 prose prose-sky prose-lg mx-auto">
                                <p>Unlike automatic validation, manual validation does not reference a database to validate customer-submitted order numbers. With manual validation, customer-submitted order numbers are validated by a human. With manual validation enabled, when a customer submits their order number into your survey, so long as the customer's order number format matches the marketplace's order number format, then they are allowed into your survey to leave their review and claim their giveaway. However, unlike automatic validation, manual validation places reviews into a pending state, meaning that no integrations are fired until you have verified the legitimacy of the submitted order number and have hit the "Validate" button on their review. Let's go over the process to enable manual validation and learn how to manually validate a review.</p>
                                <h2>Enable a Marketplace</h2>
                                <p>The first thing you will need to do to enable manual validation is to enable a marketplace. A "Marketplace" is where your customer's order number was generated. For example, if your customer purchased your product on Amazon, then an Amazon order number (with all of it's unique formats and characteristics) was generated. To enable a marketplace, visit your <a href="https://app.getreviews.ai/marketplace/manage" target="_blank" className="underline">Marketplace Library</a>. 
                                <figure>
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../marketplaces.jpg" alt="" />
                                    <figcaption>Marketplace Library</figcaption>
                                </figure>
                                Once in the marketplace library, click "Configure" on the marketplace that you would like to enable. Once on the Marketplace configuration page, tick the "Enabled" checkbox, and then ensure "Manual Validation" is selected as the validation method.
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../manual_validation.jpg" alt="" />
                                    <figcaption>Ensure "Manual Validation" is selected as the validation method</figcaption>
                                </figure>
                                </p>
                                <h2>Validating Reviews</h2>
                                <p>When a customer submits a review on a marketplace with manual validation enabled, their review is added to the list of reviews on the <a href="https://app.getreviews.ai/response" target="_blank" className="underline">reviews</a> page. You can quickly check to see the review's validation status via the "Validated?" column on the far right hand side of the screen.</p>
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../validated_column.jpg" alt="" />
                                    <figcaption>An example of an unvalidated review</figcaption>
                                </figure>
                                <p>To validate a review, you have two options. <strong>(1)</strong> Bulk validate reviews in the Validation Center, or <strong>(2)</strong> Validate reviews by viewing and validating each review individually. Let's go over how both of these work.</p>
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../validation_methods.jpg" alt="" />
                                    <figcaption><strong>(1)</strong> Validation Center <strong>(2)</strong> Individual review.</figcaption>
                                </figure>
                                <h2>Validation Center</h2>
                                <p>The validation center allows you to more quickly validate reviews. Let's go over how to validate reviews in the validation center.</p>
                                <p>To validate a review in the validation center, first visit the <a href="https://app.getreviews.ai/response/validate" target="_blank" className="underline">Validation Center</a>. Here you are shown some basic data about the customer's review, including name, date, product purchased, marketplace, link to full review, &amp; order number. Once you have verified that the customer's order number is legitimate, you'll want to click the big green "Verify" button on the far right of your screen.</p>
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../validate_via_validation_center.jpg" alt="" />
                                    <figcaption>Validation center showing the validation button</figcaption>
                                </figure>
                                <p>Once you click "Validate," you will be shown a prompt asking you to confirm your decision to validate this review. GetReviews asks this because once a review is validated, it cannot be invalidated. Once a review is validated, all integrations associated with the survey that this review was submitted to will fire, so be sure this is a legitimate order before you mark it as valid.</p>
                                <h2>Individual Review</h2>
                                <p>You can also validate a review by visiting the detail page of an individual review. Once you have clicked into the detail page of an individual review, notice the big green "Validate Review" button in the bottom left hand corner. Pressing this button does the same thing as pressing the Validate button in the validation center, it validates this review and fires all integrations associated with the survey that this review was left on.</p>
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../individual_review.jpg" alt="" />
                                    <figcaption>Validate review button on individual review detail page.</figcaption>
                                </figure>
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
