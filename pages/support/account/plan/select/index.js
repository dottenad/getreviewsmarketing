import Link from "next/link";
import SupportLayout from "../../../../../components/SupportLayout";
import Head from "next/head";

const SupportIndex = () => (
  <div>
    <Head>
      <title>Select Plan - GetReviews.ai</title>
      <meta
        name="description"
        content="Select which plan you would like to sign up for on
        GetReviews"
      />
    </Head>
    <div className="bg-gray-200 pt-10 pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex pb-10" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div>
                <Link passHref href="/support">
                  <a>
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-700 hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="sr-only">Home</span>
                  </a>
                </Link>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link passHref href="/support/account">
                  <a className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Account Settings
                  </a>
                </Link>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link passHref href="/support/account/plan">
                  <a className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Plan/Billing
                  </a>
                </Link>
              </div>
            </li>

            <li>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-4 text-sm font-medium text-gray-500">
                  Select Plan
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full text-lg max-w-prose mx-auto"
              aria-hidden="true"
            >
              <svg
                className="absolute top-12 left-full transform translate-x-32"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                  height="384"
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                  height="384"
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute bottom-12 left-full transform translate-x-32"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                  height="384"
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Select Plan
                </span>
              </h1>
            </div>
            <div className="mt-6 prose prose-sky prose-lg mx-auto">
              <p>
                There are a couple of ways to select a plan within GetReviews.
                If you are currently on a trial plan, you can select a plan by
                clicking the green &quot;x Days Remaining&quot; button in the
                top right corner of the GetReviews dashboard.
              </p>
              <figure className="mt-4">
                <img
                  className="w-full rounded-lg border border-gray-200"
                  src="../../../account_select_plan.jpg"
                  alt='Select plan by clicking "x Days Remaining" button'
                />
                <figcaption>
                  Select plan by clicking &quot;x Days Remaining&quot; button
                </figcaption>
              </figure>
              <p>
                You can also select a plan by <strong>(1)</strong> clicking the
                &quot;User&quot; icon in the top right corner,{" "}
                <strong>(2)</strong> selecting &quot;Account Settings,{" "}
                <strong>(3)</strong> clicking the &quot;Plans/Billing&quot; tab,
                and <strong>(4)</strong> clicking the &quot;Upgrade Now&quot;
                button
              </p>
              <figure className="mt-4">
                <img
                  className="w-full rounded-lg border border-gray-200"
                  src="../../../account_select_2.jpg"
                  alt="Select plan in account settings"
                />
                <figcaption>Select plan in account settings</figcaption>
              </figure>
              <p>
                Once on the select plan page, you are presented with
                GetReviews&apos; plans. Once you have identified which plan best
                suits your needs, click the blue &quot;Select Plan&quot; button.
              </p>
              <figure className="mt-4">
                <img
                  className="w-full rounded-lg border border-gray-200"
                  src="../../../account_select_3.jpg"
                  alt="Choose which plan best suits your needs"
                />
                <figcaption>Choose which plan best suits your needs</figcaption>
              </figure>
              <p>
                Once you have selected which plan best suits your needs, you are
                taken to the plan checkout page. Once on the plan checkout page,
                input your card details and hit the &quot;Submit Payment&quot;
                button. Once you have successfully completed this step, you are
                officially on a paid plan.
              </p>
              <figure className="mt-4">
                <img
                  className="w-full rounded-lg border border-gray-200"
                  src="../../../account_select_4.jpg"
                  alt="Input payment details on the plan checkout page"
                />
                <figcaption>
                  Input payment details on the plan checkout page
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SupportIndex.getLayout = (page) => <SupportLayout>{page}</SupportLayout>;

export default SupportIndex;
