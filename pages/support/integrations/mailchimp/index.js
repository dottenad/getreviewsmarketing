import Link from "next/link";
import SupportLayout from "../../../../components/SupportLayout";
import Head from "next/head";

const SupportIndex = () => (
  <div>
    <Head>
      <title>Klaviyo - GetReviews.ai</title>
      <meta
        name="description"
        content="Learn how to enable and configure the MailChimp integration here"
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
                <Link passHref href="/support/integrations">
                  <a className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">
                    Integrations
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
                  MailChimp
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
          <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                <h1>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    MailChimp
                  </span>
                </h1>
                <p className="mt-8 text-xl leading-8 mb-8">
                  Automatically export all GetReviews respondents to MailChimp.
                  Follow along with the instructions below to learn how.
                </p>
              </div>
              <div className="mt-6 prose prose-lg prose-sky mx-auto text-gray-900">
                <h3 className="mb-6">On MailChimp:</h3>
                <h4 className="underline">Create your MailChimp API key</h4>
                <p className="mb-0">
                  The API key is what allows GetReviews to send respondent data
                  to your MailChimp account.
                </p>
                <ol>
                  <li>
                    <a
                      href="https://login.mailchimp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Log in
                    </a>{" "}
                    to your MailChimp account
                  </li>
                  <li>
                    Once logged in, go to your{" "}
                    <a
                      href="https://admin.mailchimp.com/account/api/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      API Keys
                    </a>
                  </li>
                  <li>
                    Under the &quot;Your API keys&quot; section, click
                    &quot;Create a Key.&quot; (<strong>Note</strong>: create a
                    new key even if one or more already exist.)
                    <figure className="mt-4">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../mc_api_key.jpg"
                        alt="Create an API key"
                      />
                      <figcaption>Create an API key</figcaption>
                    </figure>
                  </li>
                  <li>
                    Take note of your newly created API key. We will be using
                    this later.
                    <figure className="mt-4">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../mc_api_key_2.jpg"
                        alt="Newly created API key"
                      />
                      <figcaption>Newly created API key</figcaption>
                    </figure>
                  </li>
                </ol>
                <h4 className="underline">
                  Take Note of MailChimp Server Prefix
                </h4>
                <p>
                  While on MailChimp.com, make note of the server prefix that
                  your MailChimp account uses in your URL bar (highlighted in
                  the image below). We will be using this later.
                  <figure className="mt-4">
                    <img
                      className="rounded-lg border border-gray-200"
                      src="../../../mc_server_prefix.jpg"
                      alt="MailChimp Server Prefix"
                    />
                    <figcaption>MailChimp Server Prefix</figcaption>
                  </figure>
                </p>
                <h4 className="underline">Copy your MailChimp Audience ID</h4>
                <p className="mb-0">
                  The Audience ID is where you would like GetReviews to send
                  your respondent data to on MailChimp. Follow along with the
                  instructions below to locate your Audience ID.
                </p>
                <ol>
                  <li>
                    View your{" "}
                    <a
                      href="https://us20.admin.mailchimp.com/lists/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Lists
                    </a>
                  </li>
                  <li>
                    Locate the list you would like to send respondent data to,
                    then <strong>(1)</strong>: click the down arrow, then{" "}
                    <strong>(2)</strong>: click &quot;Settings&quot;
                    <figure className="mt-4">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../mc_list.jpg"
                        alt="List settings"
                      />
                      <figcaption>List settings</figcaption>
                    </figure>
                  </li>
                  <li>
                    Click the link &quot;Audience name and defaults&quot;
                    <figure className="mt-4">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../mc_list_name.jpg"
                        alt='Click the link "Audience name and defaults"'
                      />
                      <figcaption>
                        Click the link &quot;Audience name and defaults&quot;
                      </figcaption>
                    </figure>
                  </li>
                  <li>
                    Take note of your Audience ID. We will be using this later.
                    <figure className="mt-4">
                      <img
                        className="w-full rounded-lg border border-gray-200"
                        src="../../../mc_audience_id.jpg"
                        alt="Audience ID"
                      />
                      <figcaption>Audience ID</figcaption>
                    </figure>
                  </li>
                </ol>
                <h3 className="mb-6">On GetReviews:</h3>
                <h4 className="underline">
                  Paste MailChimp API Key &amp; Server Prefix
                </h4>
                <ol>
                  <li>
                    Visit the{" "}
                    <a
                      href="https://app.getreviews.ai/integration/manage"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Integrations Library
                    </a>
                  </li>
                  <li>
                    Locate the MailChimp integration and click
                    &quot;Configure&quot;
                  </li>
                  <li>Tick the &quot;Enabled&quot; checkbox</li>
                  <li>
                    In the API Key text box, paste the API key generated from
                    Klaviyo
                  </li>
                  <li>
                    In the Server Prefix text box, paste the server prefix from
                    your MailChimp URL
                  </li>
                  <li>Click &quot;Save&quot;</li>
                </ol>
                <h4 className="underline">Paste MailChimp Audience ID</h4>
                <ol>
                  <li>
                    Visit the{" "}
                    <a
                      href="https://app.getreviews.ai/survey"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Surveys
                    </a>{" "}
                    page
                  </li>
                  <li>
                    Next to the survey you would like to export respondent data
                    to MailChimp from, click “Edit”
                  </li>
                  <li>Scroll down to the &quot;Integrations&quot; section</li>
                  <li>Enable MailChimp as an integration</li>
                  <li>Paste the Audience ID</li>
                  <li>Click &quot;Save&quot;</li>
                </ol>
                <p>
                  Once all of the above steps are complete, when a customer
                  completes your survey, their data will be automatically sent
                  to the MailChimp list you&apos;ve defined above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SupportIndex.getLayout = (page) => <SupportLayout>{page}</SupportLayout>;

export default SupportIndex;
