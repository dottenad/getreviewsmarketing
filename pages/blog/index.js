import Link from "next/link";
import SiteLayout from "../../components/SiteLayout";
import Head from "next/head";

const SiteIndex = () => (
  <div>
    <Head>
      <title>Blog - GetReviews.ai</title>
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="Learn about what's happening at GetReviews and in the industry as a whole"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Blog - GetReviews.ai" />
      <meta
        property="og:description"
        content="Learn about what's happening at GetReviews and in the industry as a whole"
      />
      <meta
        property="og:image"
        content="https://www.getreviews.ai/seo_gr.png"
      />
      <meta property="og:url" content="https://www.getreviews.ai/blog/" />
      <meta property="og:site_name" content="GetReviews.ai" />
    </Head>
    <div className="relative bg-white overflow-hidden">
      <div className="relative bg-sky-900">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src="blog.jpg" alt="" />
          <div
            className="absolute inset-0 bg-sky-900 mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <p className="mt-6 text-xl text-sky-100 max-w-3xl tracking-widest">
            BLOG
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Ever-Evolving World Of Reviews
          </h1>
        </div>
      </div>

      <div className="overflow-hidden">
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

          <div className="relative lg:grid lg:items-center">
            <div className="relative"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative bg-gray-50 pb-20 px-4 sm:px-6 pt-12 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Learn about what&apos;s happening at GetReviews and in the industry
            as a whole
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="_blog/3-strategies-to-get-more-etsy-reviews/thumb.jpg"
                alt="3 Strategies To Get More Etsy Reviews"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-sky-600">Tips</p>
                <Link
                  href="/blog/3-strategies-to-get-more-etsy-reviews"
                  passHref
                >
                  <a className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      3 Strategies To Get More Etsy Reviews
                    </p>
                  </a>
                </Link>
                <p className="mt-3 text-base text-gray-500">
                  Learn the top 3 tactics professional Etsy sellers are using to
                  get more customer reviews
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="sr-only">Dan Ottenad</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="_blog/dan.jpg"
                    alt="Dan Ottenad"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Dan Ottenad
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="February 11, 2022">
                      {" "}
                      February 11, 2022{" "}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="_blog/multimarketplace/cart.jpg"
                alt="Introducing, Multi-Marketplace!"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-sky-600">Announcement</p>
                <Link href="/blog/multimarketplace" passHref>
                  <a className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Introducing, Multi-Marketplace Review Collection
                    </p>
                  </a>
                </Link>
                <p className="mt-3 text-base text-gray-500">
                  Learn how to use GetReviews on any and all marketplaces that
                  you sell on
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="sr-only">Dan Ottenad</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="_blog/dan.jpg"
                    alt="Dan Ottenad"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <p className="text-sm font-medium text-gray-900">
                      Dan Ottenad
                    </p>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="February 10, 2022">
                      {" "}
                      February 10, 2022{" "}
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SiteIndex.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteIndex;
