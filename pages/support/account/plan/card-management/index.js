import Link from "next/link";
import SupportLayout from "../../../../../components/SupportLayout";
import Head from "next/head";

const SupportIndex = () => (
  <div>
    <Head>
      <title>Card Management - GetReviews.ai</title>
      <meta
        name="description"
        content="Learn how to add a card to your billing center here"
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
                  Card Management
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
                  Card Management
                </span>
              </h1>
            </div>
            <div className="mt-6 prose prose-sky prose-lg mx-auto">
              <p>
                Are you needing to add, edit, or remove payment cards from you
                GetReviews account? Then you&apos;ve come to the right place.
                Learn more below.
              </p>
            </div>
            <hr className="mt-10 mb-10" />
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Add Card
                </span>
              </h1>
            </div>
            <div className="mt-6 prose prose-sky prose-lg mx-auto">
              <p>
                Need to add an additional card to your GetReviews account?
                Follow the instructions below to learn how.
              </p>
              <ul>
                <li>
                  <p>
                    <strong>(1)</strong> Click the &quot;User&quot; icon in the
                    top right of your GetReviews admin panel, then{" "}
                    <strong>(2)</strong> click &quot;Account Settings.&quot;
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../plan_1.png"
                        alt='Click the "User" icon, then select
                        "Account Settings"'
                      />
                      <figcaption>
                        <center>
                          Click the &quot;User&quot; icon, then select
                          &quot;Account Settings&quot;
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li>
                  <p>
                    <strong>(1)</strong> Click the &quot;Plan/Billing&quot; tab,
                    then <strong>(2)</strong> click one of the &quot;Edit
                    billing and payment&quot; link
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../add_1.jpg"
                        alt='Click the "Plan/Billing" tab, then (2) click one of the "Edit billing and payment" link'
                      />
                      <figcaption>
                        <center>
                          <strong>(1)</strong> Click the
                          &quot;Plan/Billing&quot; tab, then{" "}
                          <strong>(2)</strong> click one of the &quot;Edit
                          billing and payment&quot; link
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li>
                  <p>
                    On the Billing and Payment page under the &quot;Your Payment
                    Method&quot; section, click &quot;Add New&quot;
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../add_2.jpg"
                        alt='Click "Add New"'
                      />
                      <figcaption>
                        <center>Click &quot;Add New&quot;</center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li>
                  <p>
                    On the &quot;Add New Card&quot; page, enter your card
                    information, then click &quot;Add Card.&quot; If you would
                    like to set this as your default payment method, tick the
                    &quot;Default Payment Method?&quot; checkbox before clicking
                    the &quot;Add Card&quot; button.
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../add_3.jpg"
                        alt='Enter your card information, then click "Add
                        Card"'
                      />
                      <figcaption>
                        <center>
                          Enter your card information, then click &quot;Add
                          Card&quot;
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
            <hr className="mt-10 mb-10" />
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Change Default Card
                </span>
              </h1>
            </div>
            <div className="mt-6 prose prose-sky prose-lg mx-auto">
              <p>
                Need to change the default charge card on the account? Follow
                the instructions below to learn how.
              </p>
              <ul>
                <li>
                  <p>
                    <strong>(1)</strong> Click the &quot;User&quot; icon in the
                    top right of your GetReviews admin panel, then{" "}
                    <strong>(2)</strong> click &quot;Account Settings.&quot;
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../plan_1.png"
                        alt='Click the "User" icon, then select
                        "Account Settings"'
                      />
                      <figcaption>
                        <center>
                          Click the &quot;User&quot; icon, then select
                          &quot;Account Settings&quot;
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li>
                  <p>
                    <strong>(1)</strong> Click the &quot;Plan/Billing&quot; tab,
                    then <strong>(2)</strong> click one of the &quot;Edit
                    billing and payment&quot; link
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../add_1.jpg"
                        alt='(1) Click the "Plan/Billing" tab, then (2) click one of the "Edit billing and payment" link'
                      />
                      <figcaption>
                        <center>
                          <strong>(1)</strong> Click the
                          &quot;Plan/Billing&quot; tab, then{" "}
                          <strong>(2)</strong> click one of the &quot;Edit
                          billing and payment&quot; link
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li>
                  <p>
                    On the Billing and Payment page under the &quot;Your Payment
                    Method&quot; section, <strong>(1)</strong> tick the radio
                    button on the card that you&apos;d like to change to the
                    default charge card, then <strong>(2)</strong> click
                    &quot;Make Default.&quot;{" "}
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../change_1.jpg"
                        alt='(1) Tick the radio button on the card
                        that youd like to change to the default charge
                        card, then click "Make
                        Default."'
                      />
                      <figcaption>
                        <center>
                          <strong>(1)</strong> Tick the radio button on the card
                          that you&apos;d like to change to the default charge
                          card, then <strong>(2)</strong> click &quot;Make
                          Default.&quot;
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
            <hr className="mt-10 mb-10" />
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Delete Card
                </span>
              </h1>
            </div>
            <div className="mt-6 prose prose-sky prose-lg mx-auto">
              <p>
                Need to change which card GetReviews is charging? Follow the
                instructions below.
              </p>
              <ul>
                <li>
                  <p>
                    <strong>(1)</strong> Click the &quot;User&quot; icon in the
                    top right of your GetReviews admin panel, then{" "}
                    <strong>(2)</strong> click &quot;Account Settings.&quot;
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../plan_1.png"
                        alt='Click the "User" icon, then select
                        "Account Settings"'
                      />
                      <figcaption>
                        <center>
                          Click the &quot;User&quot; icon, then select
                          &quot;Account Settings&quot;
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li>
                  <p>
                    <strong>(1)</strong> Click the &quot;Plan/Billing&quot; tab,
                    then <strong>(2)</strong> click one of the &quot;Edit
                    billing and payment&quot; link
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../add_1.jpg"
                        alt='(1) Click the
                        "Plan/Billing" tab, then (2) click one of the "Edit
                        billing and payment" link'
                      />
                      <figcaption>
                        <center>
                          <strong>(1)</strong> Click the
                          &quot;Plan/Billing&quot; tab, then{" "}
                          <strong>(2)</strong> click one of the &quot;Edit
                          billing and payment&quot; link
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
                <li>
                  <p>
                    On the Billing and Payment page under the &quot;Your Payment
                    Method&quot; section, <strong>(1)</strong> tick the radio
                    button on the card that you&apos;d like to delete, then{" "}
                    <strong>(2)</strong> click &quot;Delete Card.&quot;{" "}
                    <strong>Note:</strong> You cannot delete a card that is set
                    to the default charge card on the account. If you would like
                    to delete this card, first add another card, set this new
                    card as default, then come back and delete the old card.
                  </p>
                  <div className="flex justify-center">
                    <figure className="mt-0">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../remove_1.jpg"
                        alt='(1) Tick the radio button on the card
                        that youd like to delete, then (2) click "Delete Card."'
                      />
                      <figcaption>
                        <center>
                          <strong>(1)</strong> Tick the radio button on the card
                          that you&apos;d like to delete, then{" "}
                          <strong>(2)</strong> click &quot;Delete Card.&quot;
                        </center>
                      </figcaption>
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SupportIndex.getLayout = (page) => <SupportLayout>{page}</SupportLayout>;

export default SupportIndex;
