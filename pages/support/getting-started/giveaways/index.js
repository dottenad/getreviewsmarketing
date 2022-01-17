export default function Example() {
    return (
        <div>
            <div className="bg-gray-200 pt-10 pb-14">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex pb-10" aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-4">
                            <li>
                                <div>
                                    <a href="/support" className="text-black hover:text-gray-700">
                                        <svg className="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg>
                                        <span className="sr-only">Home</span>
                                    </a>
                                </div>
                            </li>

                            <li>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <a href="/support/getting-started" class="ml-4 text-sm font-medium hover:text-gray-700">Getting Started</a>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Giveaways</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                        <div class="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                        <div class="relative px-4 sm:px-6 lg:px-8">
                            <div class="text-lg max-w-prose mx-auto">
                                <h1>
                                    <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Giveaways</span>
                                </h1>
                                <figure>
                                    <img class="w-full my-8" src="../../../giveaways.svg" alt="" width="1310" height="873" />
                                </figure>
                                <p class="mt-8 text-xl leading-8">Giveaways are the gift that you would like to give your customer for providing their review on your product or service. There are three giveaway types on GetReviews. These are:</p>
                            </div>
                            <div class="mt-6 prose prose-lg mx-auto text-gray-900">
                                <ul className="font-bold">
                                    <li>Products</li>
                                    <li>Coupons</li>
                                    <li>Gift Cards/eGifts</li>
                                </ul>
                            </div>
                            <div class="text-lg max-w-prose mx-auto">
                                <p class="mt-8 text-xl leading-8">Each giveaway type has unique properties. For example, if the customer claims a giveaway with the type of "product," they will be prompted to input their shipping address on the survey, whereas if the customer claims a giveaway with the type of coupon, they will not be prompted to input their shipping address since their shipping address is not required to deliver a coupon (which is sent by email.) Let's go over the different types of giveaways and how to create them in GetReviews.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px mt-10">
                        <div class="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                            <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                                <div class="flex items-center space-x-5">
                                    <div class="flex-shrink-0">
                                        <div class="relative">
                                            <span class="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-medium">
                                            <a href="/support/getting-started/giveaways/product" class="focus:outline-none">
                                                <span class="absolute inset-0" aria-hidden="true"></span>
                                                Product
                                            </a>
                                        </h3>
                                        <p class="mt-2 text-sm text-gray-500">
                                            The “Product” giveaway type is a physical product that you will mail to your customer upon survey completion.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>

                        <div class="relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                            <div class="flex items-center space-x-5">
                                <div class="flex-shrink-0">
                                    <div class="relative">
                                        <span class="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-medium">
                                        <a href="/support/getting-started/giveaways/coupon" class="focus:outline-none">
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            Coupon Code
                                        </a>
                                    </h3>
                                    <p class="mt-2 text-sm text-gray-500">
                                    The "Coupon Code" giveaway type is a digital coupon that is emailed to your customer upon survey completion
                                    </p>
                                </div>
                            </div>
                            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>



                        <div class="rounded-bl-lg rounded-br-lg relative group bg-white p-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                            <div class="flex items-center space-x-5">
                                <div class="flex-shrink-0">
                                    <div class="relative">
                                        <span class="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-lg font-medium">
                                        <a href="/support/getting-started/giveaways/giftcard" class="focus:outline-none">
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            Gift Card/eGift
                                        </a>
                                    </h3>
                                    <p class="mt-2 text-sm text-gray-500">
                                        The "Gift Card/eGift" giveaway type enables you to send your customer either a physical or a digital gift card
                                    </p>
                                </div>
                            </div>
                            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
