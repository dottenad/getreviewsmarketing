import Link from "next/link";
import SupportLayout from '../../../../components/SupportLayout';
import Head from "next/head";

const SupportIndex = () => (
  <div>
    <Head>
      <title>Giveaways - GetReviews.ai</title>
      <meta name="description" content="A giveaway is the free gift that you would like to give your customer for providing their feedback on your product" />
    </Head>
            <div className="bg-gray-200 pt-10 pb-14">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex pb-10" aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-4">
                        <li>
                                <div>
                                    <Link passHref href="/support"><a>
                                        <svg className="flex-shrink-0 h-5 w-5 text-gray-700 hover:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg>
                                        <span className="sr-only">Home</span>
                                    </a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <Link passHref href="/support/getting-started"><a className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Getting Started</a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Giveaways</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                        <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="text-lg max-w-prose mx-auto">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Giveaways</span>
                                </h1>
                                <figure>
                                    <img className="w-full my-8" src="../../../giveaways.svg" alt="" width="1310" height="873" />
                                </figure>
                                <p className="mt-8 text-xl leading-8">Giveaways are the gift that you would like to give your customer for providing their review on your product or service. There are three giveaway types on GetReviews:</p>
                            </div>
                            <div className="mt-6 prose prose-lg mx-auto text-gray-900">
                                <ul className="font-bold">
                                    <li>Products</li>
                                    <li>Coupons</li>
                                    <li>Gift Cards/eGifts</li>
                                </ul>
                            </div>
                            <div className="text-lg max-w-prose mx-auto">
                                <p className="mt-8 text-xl leading-8">Each giveaway type has unique properties. For example, if the customer claims a giveaway with the type of &quot;product,&quot; they will be prompted to input their shipping address on the survey, whereas if the customer claims a giveaway with the type of coupon, they will not be prompted to input their shipping address since their shipping address is not required to deliver a coupon (which is sent by email.) Let&apos;s go over the different types of giveaways and how to create them in GetReviews.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px mt-10">
                        <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            <span className="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            <Link passHref href="/support/getting-started/giveaways/product" className="focus:outline-none"><a>
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                Product
                                            </a></Link>
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            The &quot;Product&quot; giveaway type is a physical product that you will mail to your customer upon survey completion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>

                        <div className="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                            <div className="flex items-center space-x-5">
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <span className="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium">
                                        <Link passHref href="/support/getting-started/giveaways/coupon" className="focus:outline-none"><a>
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            Coupon Code
                                        </a></Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                    The &quot;Coupon Code&quot; giveaway type is a digital coupon that is emailed to your customer upon survey completion
                                    </p>
                                </div>
                            </div>
                            <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>



                        <div className="rounded-bl-lg rounded-br-lg relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                            <div className="flex items-center space-x-5">
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <span className="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium">
                                        <Link passHref href="/support/getting-started/giveaways/giftcard" className="focus:outline-none"><a>
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            Gift Card/eGift
                                        </a></Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        The &quot;Gift Card/eGift&quot; giveaway type enables you to send your customer either a physical or a digital gift card
                                    </p>
                                </div>
                            </div>
                            <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


    SupportIndex.getLayout = page => (
        <SupportLayout>{page}</SupportLayout>
    )
    
    export default SupportIndex

