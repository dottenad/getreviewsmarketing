import Link from "next/link";
import Head from "next/head";

export default function Example() {
  return (
    <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
      <Head>
        <title>Page Not Found - GetReviews.ai</title>
        <meta
          name="description"
          content="Learn how to ban specific order numbers at the account level here."
        />
      </Head>
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <Link passHref href="/">
            <a className="inline-flex">
              <span className="sr-only">Workflow</span>
              <img className="h-12 w-auto" src="/logomark.svg" alt="" />
            </a>
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className="mt-6">
              <a
                href="../"
                className="text-base font-medium text-sky-700 hover:text-sky-900"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
