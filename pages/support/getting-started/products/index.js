import Link from "next/link";
import SupportLayout from "../../../../components/SupportLayout";
import Head from "next/head";

const SupportIndex = () => (
  <div>
    <Head>
      <title>Product - GetReviews.ai</title>
      <meta
        name="description"
        content="A product is what the customer purchased from you. Learn how to add and configure products on GetReviews here"
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
                <Link passHref href="/support/getting-started">
                  <a className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Getting Started
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
                  Products
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
                  Products
                </span>
              </h1>
            </div>
            <div className="mt-10 prose prose-sky prose-lg mx-auto">
              <p>
                A product is the item that your customer purchased from you on
                the marketplaces you sell on. A product has unique attributes
                associated with it that enables the GetReviews process to work.
                Let&apos;s go over what these are while learning how to create a
                product in GetReviews.
              </p>
              <ol role="list">
                <li>
                  On the{" "}
                  <a
                    href="https://app.getreviews.ai/product"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    products
                  </a>{" "}
                  page, click &quot;Add Product&quot;
                  <br />
                  <img
                    className="w-full rounded-lg mt-4"
                    src="../../../add_product.jpg"
                    alt="Add Product"
                    width="1310"
                  />
                </li>
                <li>
                  Complete the fields to create a product
                  <br />
                  <img
                    className="w-full rounded-lg mt-4"
                    src="../../../create_product.jpg"
                    alt="Create a product"
                    width="1310"
                  />
                </li>
                <ol>
                  <li>
                    <strong>Product Name</strong>: This is the name of your
                    product. This will be how your customer identifies the
                    product they purchased, so be sure that the product name
                    matches the product name on the marketplace they purchased
                    your product on.
                  </li>
                  <li>
                    <strong>Eligible Giveaways</strong>: Eligible giveaways are
                    the items that you would like to make eligible for your
                    customer to claim as their free gift offering for purchasing{" "}
                    <i>this</i> product. For example, if a customer purchased
                    this product from you, what would you like them to be able
                    to select as their free gift? This section is where you
                    define that.
                  </li>
                  <li>
                    <strong>Product Image</strong>: This is an image of your
                    product. Similar to the product name, the product image will
                    display once your customer selects the product they
                    purchased on your survey, so be sure this product image
                    matches the product image on the marketplace that your
                    customer purchased your product on.
                  </li>
                  <li>
                    <strong>Product ID</strong>: Input the product ID for the
                    marketplace(s) that you&apos;re selling this product on. If
                    a product has a product ID populated, and if that product is
                    assigned to a survey, the customer will be able to select
                    which marketplace they purchased this product from. For
                    example, if you populate Amazon and Walmart product IDs,
                    then if the customer selects this product as the product
                    they purchased, they will be asked where they purchased this
                    product from (Amazon or Walmart?)
                  </li>
                </ol>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SupportIndex.getLayout = (page) => <SupportLayout>{page}</SupportLayout>;

export default SupportIndex;
