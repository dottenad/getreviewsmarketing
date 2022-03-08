import CallToAction from "/components/CallToAction.js";
import CalendlyEmbed from "/components/CalendlyEmbed.js";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";
import Head from "next/head";

const SiteIndex = () => (
  <div>
    <Head>
      <title>Try It Out - GetReviews.ai</title>
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="Test run a GetReviews survey to see how our proprietary flow can increase your reviews"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Demo - GetReviews.ai" />
      <meta
        property="og:description"
        content="Test run a GetReviews survey to see how our proprietary flow can increase your reviews"
      />
      <meta
        property="og:image"
        content="https://www.getreviews.ai/seo_gr.png"
      />
      <meta property="og:url" content="https://www.getreviews.ai/demo/" />
      <meta property="og:site_name" content="GetReviews.ai" />
    </Head>
    <div className="relative bg-white overflow-hidden">
      <div className="relative bg-sky-900">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="demo.jpg" alt="" />
          <div
            className="absolute inset-0 bg-sky-900 mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <p className="mt-6 text-xl text-sky-100 max-w-3xl tracking-widest">
            TRY IT OUT
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            See GetReviews in Action
          </h1>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl mb-12 sm:mb-16 lg:mb-24">
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

          <div className="relative mt-8 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl text-center">
                Demo a GetReviews Survey
              </h3>
              <p className="mt-3 text-lg text-gray-500 text-center">
                Interact with a GetReviews survey as if you just received an
                offer for a free gift from a business you purchased from. Use
                order number{" "}
                <span className="font-bold text-black highlight">
                  <mark>888-7567859-5242609</mark>
                </span>{" "}
                to access the survey flow
              </p>
              <div className="flex  justify-center">
                <Link href="https://www.supernutritionco.com/" passHref>
                  <a target="_blank">
                    <button
                      type="button"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 mt-6"
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
                  <span className="px-2 bg-white text-sm text-gray-500">
                    {" "}
                    or{" "}
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">Scan QR Code</p>
              </div>
              <div className="flex justify-center mt-6">
                <img className="w-24 h-24" src="qr.png" alt="QR Code" />
              </div>
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
              <img
                className="relative mx-auto"
                width="450"
                src="cell.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  </div>
);

SiteIndex.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteIndex;
