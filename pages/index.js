import CallToAction from '/components/CallToAction.js';
import Link from 'next/link';

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Begin Nav + Main Banner */}
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-5xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-sky-600">Collect Reviews on Autopilot with GetReviews.ai</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Generate authentic reviews from organic customers on platforms that matter to your business with GetReviews.ai&apos;s proprietary review generation technology.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900">Start your free 30-day trial today (no CC required)</p>
                <form action="#" method="POST" className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-sky-500 sm:flex-1 border-gray-300"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Start Free Trial
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  We care about the protection of your data. Read our&nbsp;
                  <Link href="#">
                    <a className="font-medium text-gray-900 underline">
                      Privacy Policy
                    </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:mx-auto lg:mt-0 lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full">
                <img
                  className="w-full"
                  src="reviews.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Nav + Main Banner */}
      {/* Begin Platform Logos */}
      <div className="bg-white mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-8 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Generate verified customer reviews on dozens of online platforms, including...
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="amazon.svg"
                alt="Amazon"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="walmart.svg" alt="Walmart" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="target.svg" alt="Target" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="ebay.svg" alt="eBay" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="etsy.svg" alt="Etsy" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="andmore.svg" alt="And" />
            </div>
          </div>
        </div>
      </div>
      {/* End Platform Logos */}
      {/* Begin 1% Section */}
      <div className="relative bg-sky-800 text-white sm:py-24 lg:py-16 py-16">
        <div className="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="#fff">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="flex justify-center">
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:max-w-3xl">
              Did you know that only 1% of customers review their purchases online?
            </p>
          </div>
          <p className="mt-5 max-w-prose mx-auto text-xl">
            At GetReviews, we see this as a collosal waste of potential. Potential that would let prospective customers know more about your products. Potential that would let you better understand customer sentiment about your products. This waste of potential is what led us to develop the industry-leading post-purchase review funnel optimized to unlock feedback from the 99% of customers who are not leaving a review on their purchases. Read more about how we help brands and retailers drive reviews below.
          </p>
        </div>
      </div>
      {/* End 1% Section */}
      {/* Begin Features and Benefits */}
      <div className="py-16 overflow-hidden lg:py-16 mb-8">
        <div className="flex justify-center mb-8">
          <img src="https://www.getreviews.ai/wp-content/uploads/2021/04/stars.png" className="lg:w-1/5 md:w-1/2 sm:w-2/3 w-2/3" alt="stars" />
        </div>
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
            <defs>
              <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>

          <div className="relative">
            <h2 className="text-center font-semibold text-sky-700 mb-3">...so, how does GetReviews help?</h2>
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              GetReviews.ai is a post-purchase review funnel optimized to generate verified reviews on platforms that matter to your business.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              This is done by taking your customers through a survey containing a set of highly-optimized actions that result in reviews on the platform that your customer purchased their product from.
            </p>
          </div>

          <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
            <defs>
              <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  What are the benefits of GetReviews?
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Learn more about the benefits of using GetReviews.ai to generate product reviews.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">Verified Reviews</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      With GetReviews, only verified purchases are allowed to post reviews. Typically verified purchases carry heavier weight than non-verified purchases within platform algorithms, leading to increased rank for your products.
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">Customer Profiles</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      GetReviews.ai stores all submitted customer information, including full name, email, cell phone number, and physical address, which opens the door to vast re-marketing possibilities.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">Product Insights</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Analyze customer sentiment across your entire product line with review data collected on GetReviews.ai. This includes star rating and at least 50 characters of review text per review.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-700 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">Customer Loyalty</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      If there is one thing customers love, it&apos;s free stuff! With GetReviews.ai&apos;s seamless survey technology, customers are happy to provide their feedback in exchange for their free gift.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                  <defs>
                    <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                </svg>
                <img className="relative mx-auto" width="490" src="funnel.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features and Benefits */}
      {/* Begin Trusted By 7, 8, 9 Figure Seller Section */}
      <div className="bg-sky-700 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center text-white">
            <div className="flex justify-center mb-8">
              <img src="https://www.getreviews.ai/wp-content/uploads/2021/04/stars.png" className="lg:w-1/3 md:w-1/2 sm:w-2/3 w-2/3" alt="stars" />
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Trusted By 7, 8, and 9-Figure Sellers</span>
            </h1>
            <p className="mt-3 mx-auto text-base sm:text-lg md:mt-5 md:text-xl">
              With over 250,000 reviews generated, GetReviews is a trusted partner for sellers of all sizes.
            </p>
          </div>
        </div>
      </div>
      {/* End Trusted By 7, 8, 9 Figure Seller Section */}
      {/* Begin GetReviews Process */}
      <div className="relative bg-white py-16 sm:py-24 lg:py-16">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-center font-semibold text-sky-700 mb-2">How does GetReviews.ai work?</h2>
          <div className="flex justify-center">
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl lg:max-w-3xl">
              The GetReviews.ai Process
            </p>
          </div>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Follow along with the steps below to learn more about the GetReviews.ai process
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="1.svg" alt="Step 1" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Sign Up &amp; Configure</h3>
                    <p className="mt-5 text-base text-gray-900">
                      Sign up for GetReviews and configure your account
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_1.png" alt="Step 1" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="2.svg" alt="Step 2" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Print &amp; Pack</h3>
                    <p className="mt-5 text-base text-gray-900">
                      Print your packing insert and pack them into your product&apos;s packaging
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_2.png" alt="Step 2" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="3.svg" alt="Step 3" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Ship into Fulfillment Center</h3>
                    <p className="mt-5 text-base text-gray-900">
                      Ship products containing your packing insert into fulfillment center (skip this step if self-fulfilling)
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_3.png" alt="Step 3" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="4.svg" alt="Step 4" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customer Purchases</h3>
                    <p className="mt-5 text-base text-gray-900">
                      Customer purchases your product containing your packing insert
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_4.png" alt="Step 4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="5.svg" alt="Step 5" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customer Receives</h3>
                    <p className="mt-5 text-base text-gray-900">
                      Customer receives their package containing your product and packing insert
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_5.png" alt="Step 5" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="6.svg" alt="Step 6" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customer Opens</h3>
                    <p className="mt-5 text-base text-gray-900">
                      Customer opens your product, sees your packing insert, and visits your survey
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_6.png" alt="Step 6" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="7.svg" alt="Step 7" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customer Reviews</h3>
                    <p className="mt-5 text-base text-gray-900">
                      After order number validation, customer provides a rating and review on your product
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_7.png" alt="Step 7" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="8.svg" alt="Step 8" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customer Selects</h3>
                    <p className="mt-5 text-base text-gray-900">
                      Customer selects which gift they would like to receive for providing their feedback
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_8.png" alt="Step 8" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="9.svg" alt="Step 9" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Customer Receives</h3>
                    <p className="mt-5 text-base text-gray-900">
                      Customer receives their free gift selection
                    </p>
                    <span className="inline-flex items-center justify-center p-3 m-3">
                      <img src="save_9.png" alt="Step 9" />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* End GetReviews Process */}
      {/* Begin Integration Partners */}
      {/* <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex justify-center">
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl lg:max-w-3xl">
              Integration Partners
            </p>
          </div>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Save time and money by utilizing our library of integrations to automate your data flow
          </p>
          <img className="w-full" src="integration_partners.png" alt="Step 1" />
        </div>
      </div> */}
      {/* End Integration Partners */}
      <CallToAction />
    </div>
  )
}
