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
                                    <span className="ml-4 text-sm font-medium text-gray-500">Review Validation</span>
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
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium">
                                            <Link passHref href="/support/validation/automatic" className="focus:outline-none"><a>
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                                Automatic Validation
                                            </a></Link>
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Want to automatically validate customer-submitted order numbers? Learn how here.
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium">
                                        <Link passHref href="/support/validation/manual" className="focus:outline-none"><a>
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            Manual Validation
                                        </a></Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Want to manually validate customer-submitted order numbers? Learn how here.
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                <h3 className="text-lg font-medium">
                                        <Link passHref href="/support/validation/ordercenter" className="focus:outline-none"><a>
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            Order Center
                                        </a></Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        The order center is where you maintain your order number database for automatic validation. Learn more about it here.
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