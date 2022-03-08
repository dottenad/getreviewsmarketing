import CallToAction from "/components/CallToAction.js";
import CalendlyEmbed from "/components/CalendlyEmbed.js";
import Link from "next/link";
import SiteLayout from "../components/SiteLayout";
import Head from "next/head";

const SiteIndex = () => (
  <div>
    <Head>
      <title>Book a Demo - GetReviews.ai</title>
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="Book a demo with GetReviews today to learn more about our cutting edge suite of review generation features."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Demo - GetReviews.ai" />
      <meta
        property="og:description"
        content="Book a demo with GetReviews today to learn more about our cutting edge suite of review generation features."
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
          <img className="w-full h-full object-cover" src="book.jpg" alt="" />
          <div
            className="absolute inset-0 bg-sky-900 mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <p className="mt-6 text-xl text-sky-100 max-w-3xl tracking-widest">
            DEMO
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Book A Demo To Learn More
          </h1>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-3xl pt-8 sm:pt-8">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl text-left">
            Choose a Date &amp; Time
          </h3>
          <p className="mt-3 text-lg text-gray-500 text-left -mb-8">
            Choose a date and time that works best for you for a 30 minute
            walkthrough of GetReviews along with a Q&amp;A to answer any of your
            questions.
          </p>
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
          <CalendlyEmbed />
        </div>
      </div>

      <CallToAction />
    </div>
  </div>
);

SiteIndex.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteIndex;
