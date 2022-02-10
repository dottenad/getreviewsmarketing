import Link from "next/link";
import SupportLayout from "../../components/SupportLayout";
import Head from "next/head";

const SupportIndex = () => (
  <div>
    <Head>
      <title>Knowledge Base - GetReviews.ai</title>
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="Advice and answers from the GetReviews.ai team"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Support - GetReviews.ai" />
      <meta
        property="og:description"
        content="Advice and answers from the GetReviews.ai team"
      />
      <meta property="og:image" content="https://www.getreviews.ai/demo.jpg" />
      <meta property="og:url" content="https://www.getreviews.ai/support/" />
      <meta property="og:site_name" content="GetReviews.ai" />
    </Head>
    <div className="bg-gray-200 pt-14 pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
          <div className="rounded-tl-lg rounded-tr-lg relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <span className="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
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
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  <Link
                    passHref
                    href="/support/getting-started"
                    className="focus:outline-none"
                  >
                    <a>
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Getting Started
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Learn about platforms, marketplaces, products, giveaways, and
                  surveys and how to configure them here
                </p>
              </div>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>

          <div className="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <span className="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  <Link
                    passHref
                    href="/support/validation"
                    className="focus:outline-none"
                  >
                    <a>
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Review Validation
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Learn more about the purpose of needing to validate reviews,
                  as well as how to validate reviews, here.
                </p>
              </div>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>

          <div className="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <span className="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  <Link
                    passHref
                    href="/support/integrations"
                    className="focus:outline-none"
                  >
                    <a>
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Integrations
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Automate your dataflow utilizing GetReviews&apos; integration
                  library
                </p>
              </div>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>

          <div className="rounded-bl-lg rounded-br-lg relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <span className="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  <Link
                    passHref
                    href="/support/account"
                    className="focus:outline-none"
                  >
                    <a>
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Account Settings
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  View and configure additional account settings, including
                  user/password administration, and more.
                </p>
              </div>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SupportIndex.getLayout = (page) => <SupportLayout>{page}</SupportLayout>;

export default SupportIndex;
