import CallToAction from '/components/CallToAction.js';
import Link from 'next/link';

export default function Example() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="relative bg-sky-900">
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" src="pricing.jpg" alt="" />
                    <div className="absolute inset-0 bg-sky-900 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl tracking-widest">PRICING</p>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Flexible Plans Designed To Grow With Your Business</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
                    <p className="mt-5 text-xl text-gray-500 sm:text-center">Flexible plans designed to grow with your business.</p>
                </div>
                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                        <div className="p-6">
                            <h2 className="text-3xl leading-6 font-bold text-gray-900">Individual</h2>
                            <p className="mt-4 text-sm text-gray-500">Recommended for sellers doing less than 1,000 orders/mo.</p>
                            <p className="mt-8">
                                <span className="text-4xl font-extrabold text-gray-900">$89</span>
                                <span className="text-base font-medium text-gray-500">/mo.</span>
                            </p>
                            <Link href="https://app.getreviews.ai/signup" className="mt-8 block w-full text-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 shadow-sm hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Sign Up</Link>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-900 font-bold">0 - 100 Reviews/mo.</span>
                                </li>

                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">All Marketplaces</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Surveys</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Products</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Giveaways</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Users</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">All Integrations</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                        <div className="p-6">
                            <h2 className="text-3xl leading-6 font-bold text-gray-900">Professional</h2>
                            <p className="mt-4 text-sm text-gray-500">Recommended for sellers doing between 1,000 and 10,000 orders/mo.</p>
                            <p className="mt-8">
                                <span className="text-4xl font-extrabold text-gray-900">$159</span>
                                <span className="text-base font-medium text-gray-500">/mo.</span>
                            </p>
                            <Link href="https://app.getreviews.ai/signup" className="mt-8 block w-full text-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 shadow-sm hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Sign Up</Link>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-900 font-bold">101-500 Reviews/mo.</span>
                                </li>

                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">All Marketplaces</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Surveys</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Products</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Giveaways</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Users</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">All Integrations</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                        <div className="p-6">
                            <h2 className="text-3xl leading-6 font-bold text-gray-900">Enterprise</h2>
                            <p className="mt-4 text-sm text-gray-500">Recommended for sellers doing over 10,000 orders/mo.</p>
                            <p className="mt-8">
                                <span className="text-4xl font-extrabold text-gray-900">$399</span>
                                <span className="text-base font-medium text-gray-500">/mo.</span>
                            </p>
                            <Link href="https://app.getreviews.ai/signup" className="mt-8 block w-full text-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 shadow-sm hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Sign Up</Link>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-900 font-bold">Unlimited Reviews</span>
                                </li>

                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">All Marketplaces</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Surveys</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Products</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Giveaways</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Unlimited Users</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">All Integrations</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                        <div className="p-6">
                            <h2 className="text-3xl leading-6 font-bold text-gray-900">Agency</h2>
                            <p className="mt-4 text-sm text-gray-500">Run an agency? Contact us to learn more about our agency plan.</p>
                            <p className="mt-8">
                                <span className="text-4xl font-extrabold text-gray-900">Contact Us</span>
                            </p>
                            <Link href="mailto:info@getreviews.ai" className="mt-8 block w-full text-center py-2 border border-transparent text-base font-medium rounded-md text-white bg-amber-700 shadow-sm hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Get Started</Link>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-900 font-bold">Referral Bonuses</span>
                                </li>

                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Pro-tier Support</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Training Material</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Onboarding Call</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Simple Multi-account Management</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="text-sm text-gray-500">Intuitive Dashboard Experience</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <CallToAction />
        </div>
        
    )
}