import Link from "next/link"
import SupportLayout from '../../../components/SupportLayout'


const SupportIndex = () => (
        <div>
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
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Account Settings</span>
                                </div>
                            </li>


                        </ol>
                    </nav>
                    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:gap-px">
                        <div className="rounded-tl-lg rounded-tr-lg relative group bg-white py-8 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-500">
                            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                                <div className="flex items-center space-x-5">
                                    <div className="flex-shrink-0">
                                        <div className="relative">
                                            <span className="rounded-lg inline-flex p-8 bg-sky-50 text-sky-700 ring-4 ring-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            <Link passHref href="/support/account/plan" className="focus:outline-none"><a>
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                Plan/Billing
                                            </a></Link>
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Learn more about how billing works on GetReviews here.
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
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium">
                                        <Link passHref href="/support/account/users" className="focus:outline-none"><a>
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            Users
                                        </a></Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Learn more about user administration on GetReviews here.
                                    </p>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                <h3 className="text-lg font-medium">
                                        <Link passHref href="/support/validation/ordercenter" className="focus:outline-none"><a>
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            Password
                                        </a></Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Learn how to change your password on GetReviews here.
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
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                <h3 className="text-lg font-medium">
                                        <Link passHref href="/support/validation/ordercenter" className="focus:outline-none"><a>
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            Block Order Numbers
                                        </a></Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Learn how to block order numbers at the account level here.
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