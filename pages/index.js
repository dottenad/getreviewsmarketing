import CallToActionGray from "/components/CallToActionGray.js";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";
import Head from "next/head";
import Script from "next/script";

const SiteIndex = () => (
  <div>
    <Head>
      <title>GetReviews.ai - Collect Reviews on Autopilot</title>
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="Generate authentic reviews on platforms that matter to your business with GetReviews.ai's proprietary review generation technology."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="GetReviews.ai" />
      <meta
        property="og:description"
        content="Generate authentic reviews on platforms that matter to your business with GetReviews.ai's proprietary review generation technology"
      />
      <meta
        property="og:image"
        content="https://www.getreviews.ai/seo_gr.png"
      />
      <meta property="og:url" content="https://www.getreviews.ai/" />
      <meta property="og:site_name" content="GetReviews.ai" />
    </Head>
    <div className="relative bg-white overflow-hidden">
      {/* Begin Nav + Main Banner */}
      <div className="relative mt-8 pb-16 sm:pb-24 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="grid content-center sm:text-center md:max-w-2xl md:mx-auto lg:col-span-5 lg:text-left">
              <h1>
                <span className="mt-1 block text-5xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-sky-600">
                    Your Everything Review Generation Software
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Get reviews from whoever you want, wherever you want. From
                customer reviews on Amazon to employee reviews on Glassdoor.
                There is no limit to what you can do with GetReviews.ai. Sign up
                today.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-medium text-gray-900 mb-3">
                  Start your free 30-day trial today (no CC required)
                </p>
                <span className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:flex-1 border-gray-300"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    id="signupButton"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Start Free Trial
                  </button>
                </span>
                <p className="mt-3 text-sm text-gray-900">
                  We care about the protection of your data. Read our&nbsp;
                  <Link passHref href="/privacy">
                    <a>
                      <div className="font-medium text-gray-900 underline">
                        Privacy Policy
                      </div>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:mx-auto lg:mt-0 lg:mx-0 lg:col-span-7 lg:flex lg:items-center">
              <div className="relative mx-auto w-full">
                <img
                  className="w-full"
                  src="reviews_2.svg"
                  alt="Home Page Graphic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Nav + Main Banner */}
      {/* Begin Platform Logos */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-8 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-700 tracking-wider">
            Get Reviews on dozens of online platforms and marketplaces,
            including...
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="amazon.svg" alt="Amazon" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="walmart.svg" alt="Walmart" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="google.svg" alt="Google" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="facebook.svg" alt="Facebook" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="yelp.svg" alt="Yelp" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12" src="andmore.svg" alt="And" />
            </div>
          </div>
        </div>
      </div>
      {/* End Platform Logos */}
      {/* Begin Features and Benefits */}
      <div className="py-16 overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative">
            <h2 className="text-center font-semibold text-sky-700 mb-3">
              What is GetReviews.ai?
            </h2>
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              GetReviews.ai is a review funnel optimized to generate reviews on
              platforms that matter to your business.
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-gray-900">
              This is done by taking your respondent through a survey containing
              a set of highly-optimized questions that result in reviews on the
              platforms that matter to your business.
            </p>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  What are the benefits of GetReviews?
                </h3>

                <dl className="mt-10 space-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-700 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">
                        Verified Reviews
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-900">
                      GetReviews only allows those who have had a verifiable
                      interaction with your business to be allowed into your
                      review funnel. This is accomplished with unique,
                      pre-validated links or QR codes (one-time use URLs).
                    </dd>
                  </div>

                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-700 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">
                        Reviewer Profiles
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-900">
                      GetReviews.ai stores all submitted respondent information,
                      including rating, review, full name, email, cell, and
                      physical address.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-700 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">
                        Business Insights
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-900">
                      Analyze sentiment about your product, service, or business
                      with review data collected on GetReviews.ai. This includes
                      star rating and at least 50 characters of review text per
                      review.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-sky-700 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-bold text-gray-900">
                        Loyalty Program
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-900">
                      If there is one thing people love, it&apos;s free stuff!
                      With GetReviews.ai&apos;s seamless survey technology,
                      people are happy to provide their honest, candid feedback
                      in exchange for their free gift.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <img
                  className="relative mx-auto"
                  width="490"
                  src="funnel.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features and Benefits */}
      {/* Begin GetReviews Process */}
      <div className="relative bg-white py-16">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-center font-semibold text-sky-700 mb-2">
            How does GetReviews.ai work?
          </h2>
          <div className="flex justify-center">
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl lg:max-w-3xl">
              The GetReviews.ai Process
            </p>
          </div>
          <p className="mt-5 max-w-prose mx-auto text-lg text-gray-900">
            Follow along as we explain how the GetReviews.ai process works.
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
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Sign Up
                    </h3>
                    <p className="my-5 text-base text-gray-900">
                      <Link passHref href="https://app.getreviews.ai/signup">
                        <a
                          className="underline text-sky-700"
                          id="walkthroughSignupLink"
                        >
                          Sign up
                        </a>
                      </Link>{" "}
                      for GetReviews.ai
                    </p>
                    <span className="inline-flex items-center justify-center">
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
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Add Target
                    </h3>
                    <p className="my-5 text-base text-gray-900">
                      <strong>
                        <i>What</i>
                      </strong>{" "}
                      would you like to collect reviews on? This can be a
                      product, business, service. You name it!
                    </p>
                    <span className="inline-flex items-center justify-center">
                      <img src="save_11.png" alt="Step 2" />
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
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Add Platform
                    </h3>
                    <p className="my-5 text-base text-gray-900">
                      <strong>
                        <i>Where</i>
                      </strong>{" "}
                      would you like the reviews about your target posted? This
                      can be Amazon, Google, Glassdoor. The sky is the limit!
                    </p>
                    <span className="inline-flex items-center justify-center">
                      <img src="save_12.png" alt="Step 3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-sky-700 rounded-md shadow-lg">
                        <img className="h-6" src="4.svg" alt="Step 4" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Add Giveaway (optional)
                    </h3>
                    <p className="my-5 text-base text-gray-900">
                      Entice your customer to complete your survey with a
                      giveaway offer.
                    </p>
                    <span className="inline-flex items-center justify-center">
                      <img src="save_13.png" alt="Step 1" />
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
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Distribute Survey URL
                    </h3>
                    <p className="my-5 text-base text-gray-900">
                      Distribute your survey URL to those who you&apos;d like to
                      provide their review
                    </p>
                    <span className="inline-flex items-center justify-center">
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
                        <img className="h-6" src="6.svg" alt="Step 6" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      GetReviews!
                    </h3>
                    <p className="my-5 text-base text-gray-900">
                      Watch your review count grow on auto-pilot!
                    </p>
                    <span className="inline-flex items-center justify-center">
                      <img src="save_14.png" alt="Step 3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Begin 1% Section */}
      {/* <div className="relative bg-sky-800 text-white sm:py-24 lg:py-16 py-16">
        <div className="flex justify-center mb-6 text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#facc15"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="flex justify-center">
            <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:max-w-3xl">
              Did you know that only 1% of people review their experiences
              online?
            </p>
          </div>
          <p className="mt-5 max-w-prose mx-auto text-xl">
            At GetReviews, we see this as a collosal waste of potential.
            Potential that would let people know more about your products,
            services, or business. Potential that would let you better
            understand sentiment about your products, services, or business.
            This waste of potential is what led us to develop the
            industry-leading review funnel optimized to unlock feedback from the
            99% of people who are not leaving their reviews on your products,
            services, or business. Read more about how we help businesses drive
            reviews below.
          </p>
        </div>
      </div> */}
      {/* End 1% Section */}
      {/* Begin Trusted By 7, 8, 9 Figure Seller Section */}
      <div className="bg-sky-700 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center text-white">
            <div className="flex justify-center mb-8 text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                Trusted By Businesses Of All Sizes
              </span>
            </h1>
            <p className="mt-3 mx-auto text-base sm:text-lg md:mt-5 md:text-xl">
              From small businesses to Fortune 500s, GetReviews works for
              businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
      {/* End Trusted By 7, 8, 9 Figure Seller Section */}
      <div className="py-16 overflow-hidden lg:py-16">
        <div className="mx-auto px-4 text-center sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold text-sky-700">
            What types of businesses can GetReviews collect reviews for?
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            GetReviews works with all business types
          </p>
          <p className="mt-5 max-w-prose mx-auto text-lg text-gray-900">
            Whether you sell products or services, GetReviews is able to collect
            reviews on any and all types of businesses
          </p>
          <div className="mt-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg">
                  <div className="px-6">
                    <h3 className="mt-8 text-4xl font-bold text-sky-700 tracking-tight">
                      Sell Products?
                    </h3>
                    <p className="mt-2 text-base text-gray-900">
                      Collect reviews on marketplaces!
                    </p>
                  </div>
                  <img
                    className="w-full"
                    src="features_marketplaces.svg"
                    alt=""
                  />
                  <div className="px-6 pb-8">
                    <p className="mt-5 text-base text-gray-900">
                      Want to collect more customer reviews on the products that
                      you sell on the marketplaces that matter to your business?
                      Collect reviews on popular marketplaces, including Amazon,
                      Walmart, Target, Etsy, eBay, Shopify, and more.
                    </p>
                  </div>
                  <div className="px-6">
                    <p className="mt-5 text-base font-bold text-2xl text-sky-700">
                      GetReviews.ai Works Great For...
                    </p>
                  </div>
                  <dl className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-2 lg:gap-x-2 text-left p-8">
                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Manufacturers
                        </p>
                      </dt>
                    </div>

                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Distributors
                        </p>
                      </dt>
                    </div>
                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Private-Label Brands
                        </p>
                      </dt>
                    </div>

                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Makers
                        </p>
                      </dt>
                    </div>
                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Resellers
                        </p>
                      </dt>
                    </div>

                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          And more!
                        </p>
                      </dt>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg">
                  <div className="px-6">
                    <h3 className="mt-8 text-4xl font-bold text-sky-700 tracking-tight">
                      Sell Services?
                    </h3>
                    <p className="mt-2 text-base text-gray-900">
                      Collect reviews on platforms!
                    </p>
                  </div>
                  <img className="w-full" src="features_platforms.svg" alt="" />
                  <div className="px-6 pb-4">
                    <p className="mt-5 text-base text-gray-900">
                      Want to collect more reviews on the platforms that matter
                      to your business? Collect reviews on popular platforms
                      including Google, Facebook, Yelp, Tripadvisor, Better
                      Business Bureau, Angie&apos;s List, and more.
                    </p>
                  </div>
                  <div className="px-6">
                    <p className="mt-5 text-base font-bold text-2xl text-sky-700">
                      GetReviews.ai Works Great For...
                    </p>
                  </div>
                  <dl className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-2 lg:gap-x-2 text-left p-8">
                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Restaurants
                        </p>
                      </dt>
                    </div>

                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Real Estate Agencies
                        </p>
                      </dt>
                    </div>
                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Dentist Offices
                        </p>
                      </dt>
                    </div>

                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Coffee Shops
                        </p>
                      </dt>
                    </div>
                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Salons/Spas
                        </p>
                      </dt>
                    </div>

                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Plumbing Businesses
                        </p>
                      </dt>
                    </div>
                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          Law Offices
                        </p>
                      </dt>
                    </div>

                    <div className="relative">
                      <dt>
                        <svg
                          className="absolute h-6 w-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                          And more!
                        </p>
                      </dt>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-16 bg-sky-700">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl pb-8 text-white text-center">
            <div className="flex justify-center">
              <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:max-w-3xl">
                Giveaway Types
              </p>
            </div>
            <p className="mt-5 max-w-prose mx-auto text-lg">
              Reward respondent feedback with pre-defined giveaway types!
            </p>
          </div>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 text-white text-center">
            <div>
              <dt>
                <div className="flex items-center justify-center">
                  <img
                    className="w-full"
                    src="giveaway_type_gift_card.svg"
                    alt="Gift Card"
                  />
                </div>
                <p className="mt-5 text-2xl leading-6 font-bold">Gift Card</p>
              </dt>
              <dd className="mt-4 text-base">
                Gift your respondent a gift card!
              </dd>
            </div>
            <div>
              <dt>
                <div className="flex items-center justify-center">
                  <img
                    className="w-full"
                    src="giveaway_type_coupon.svg"
                    alt="Coupon"
                  />
                </div>
                <p className="mt-5 text-2xl leading-6 font-bold">Coupon</p>
              </dt>
              <dd className="mt-4 text-base">
                Gift your respondent a percentage off of their next purchase!
              </dd>
            </div>
            <div>
              <dt>
                <div className="flex items-center justify-center">
                  <img
                    className="w-full"
                    src="giveaway_type_product.svg"
                    alt="Products"
                  />
                </div>
                <p className="mt-5 text-2xl leading-6 font-bold">Product</p>
              </dt>
              <dd className="mt-4 text-base">
                Gift your respondent a free product!
              </dd>
            </div>
          </dl>
        </div>
      </div> */}
      <div className="relative bg-sky-700 py-24 sm:py-24 lg:py-24 text-white">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl text-center">
                Demo a GetReviews Survey
              </h3>
              <p className="mt-3 text-lg text-white text-center">
                Interact with a GetReviews survey as if you just received an
                offer for a free gift from a business you purchased from. Use
                order number{" "}
                <span className="font-bold text-black highlight">
                  <mark>888-7567859-5242609</mark>
                </span>{" "}
                to access the survey flow
              </p>
              <div className="flex justify-center">
                <Link href="https://www.supernutritionco.com/" passHref>
                  <a target="_blank">
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 mt-6"
                      id="demoButtonClick"
                    >
                      View Survey
                    </button>
                  </a>
                </Link>
              </div>
              <div className="relative my-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-sky-700 text-sm text-white">
                    {" "}
                    or{" "}
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">Scan QR Code</p>
              </div>
              <div className="flex justify-center mt-6">
                <img className="w-24 h-24" src="qr-code.svg" alt="QR Code" />
              </div>
              <div className="relative my-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-sky-700 text-sm text-white">
                    {" "}
                    or{" "}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-lg leading-6 text-white font-bold">
                Still have questions? Book a demo with a GetReviews specialist!
              </p>
              <Link href="https://calendly.com/getreviewsai/demo" passHref>
                <a target="_blank">
                  <button
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 sm:w-auto"
                    id="cta_signup_button_click"
                  >
                    Book a Demo
                  </button>
                </a>
              </Link>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <Link href="https://www.supernutritionco.com/" passHref>
                <a id="demoButtonClick">
                  <img
                    className="relative mx-auto"
                    width="600"
                    src="cell.png"
                    alt=""
                  />
                </a>
              </Link>
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
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-900">
          Save time and money by utilizing our library of integrations to automate your data flow
          </p>
          <img className="w-full" src="integration_partners.png" alt="Step 1" />
        </div>
      </div> */}
      {/* End Integration Partners */}
      <CallToActionGray />
    </div>
    <>
      <Script src="/SignUp.js" />
    </>
  </div>
);

SiteIndex.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteIndex;
