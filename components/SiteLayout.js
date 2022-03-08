import React, { Component } from "react";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  BookmarkAltIcon,
  StarIcon,
  SupportIcon,
  CogIcon,
  CurrencyDollarIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const nav = [
  {
    name: "Features",
    href: "/features",
    id: "features_nav_click",
    description: "Unlock Your Brand's Maximum Potential",
    icon: StarIcon,
  },
  {
    name: "Integrations",
    href: "/integrations",
    id: "integrations_nav_click",
    description: "Maximize The Power of GetReviews.ai",
    icon: CogIcon,
  },
  {
    name: "Pricing",
    href: "/pricing",
    id: "pricing_nav_click",
    description: "Flexible Plans Designed To Grow With Your Business",
    icon: CurrencyDollarIcon,
  },
];

const resources = [
  {
    name: "Try It Out",
    description: "Test run a GetReviews survey",
    href: "/demo",
    id: "try_it_out_nav_click",
    icon: ClipboardCheckIcon,
  },
  {
    name: "Knowledge Base",
    description:
      "Get all of your questions answered in our knowledge base or contact support.",
    href: "/support",
    id: "knowledge_base_nav_click",
    icon: SupportIcon,
  },
  {
    name: "Blog",
    description: "Stay up to date on what's happening with online reviews",
    href: "/blog",
    id: "blog_nav_click",
    icon: BookmarkAltIcon,
  },
];
const recentPosts = [
  {
    id: 1,
    name: "3 Strategies To Get More Etsy Reviews",
    href: "/blog/3-strategies-to-get-more-etsy-reviews",
    id: "recent_post_1_nav_click",
  },
  {
    id: 2,
    name: "Introducing, Multi-Marketplace Review Collection",
    href: "/blog/multimarketplace",
    id: "recent_post_2_nav_click",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SiteLayout = ({ children }) => (
  <div className="relative pb-6">
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link passHref href="/">
              <a>
                <span className="sr-only">GetReviews.ai</span>
                <img
                  className="h-10 w-auto sm:h-10"
                  src="/logo.svg"
                  alt="GetReviews Logo"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            {nav.map((item) => (
              <Link
                passHref
                key={item.name}
                href={item.href}
                target={item.target}
              >
                <a
                  className="font-medium text-gray-500 hover:text-gray-900"
                  id={item.id}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                              passHref
                              key={item.name}
                              href={item.href}
                              target={item.target}
                            >
                              <a
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                id={item.id}
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-sky-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <Link
                                    passHref
                                    key={post.name}
                                    href={post.href}
                                    target={post.target}
                                  >
                                    <a
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                      id={post.id}
                                    >
                                      {post.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link href="/blog" passHref>
                              <a className="font-medium text-sky-600 hover:text-sky-500">
                                {" "}
                                View all posts{" "}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <span className="inline-flex mr-2">
              <Link passHref href="/book">
                <a>
                  <div
                    className="inline-flex items-center pl-10 pr-4 py-2 font-medium text-gray-500 hover:text-gray-900"
                    id="nav_click_book_a_demo"
                  >
                    Book a Demo
                  </div>
                </a>
              </Link>
            </span>
            <span className="inline-flex mr-2">
              <Link passHref href="https://app.getreviews.ai/login">
                <a>
                  <div className="inline-flex items-center pl-4 pr-8 py-2 font-medium text-gray-500 hover:text-gray-900">
                    Login
                  </div>
                </a>
              </Link>
            </span>
            <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
              <Link passHref href="https://app.getreviews.ai/signup">
                <a>
                  <div
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    id="nav_sign_up"
                  >
                    Sign Up
                  </div>
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/logo.svg"
                    alt="GetReviews Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {nav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-sky-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="https://app.getreviews.ai/signup"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  id="mobile_menu_sign_up"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Have an account?{" "}
                  <a
                    href="https://app.getreviews.ai/login"
                    className="text-sky-600 hover:text-sky-500"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    {children}
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex justify-center" aria-label="Footer">
          <div className="flex items-center">
            <div className="sr-only">GetReviews.ai</div>
            <img
              className="h-10 w-auto sm:h-10"
              src="/logo.svg"
              alt="GetReviews Logo"
            />
          </div>
        </nav>
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center mt-8"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link passHref href="/">
              <a
                className="text-base text-gray-500 hover:text-gray-900"
                id="footer_nav_home_click"
              >
                Home
              </a>
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link passHref href="/integrations">
              <a
                className="text-base text-gray-500 hover:text-gray-900"
                id="footer_nav_integrations_click"
              >
                Integrations
              </a>
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link passHref href="/features">
              <a
                className="text-base text-gray-500 hover:text-gray-900"
                id="footer_nav_features_click"
              >
                Features
              </a>
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link passHref href="/pricing">
              <a
                className="text-base text-gray-500 hover:text-gray-900"
                id="footer_nav_pricing_click"
              >
                Pricing
              </a>
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link passHref href="/demo" target="_blank" rel="noreferrer">
              <a
                className="text-base text-gray-500 hover:text-gray-900"
                id="footer_nav_demo_click"
              >
                Demo
              </a>
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link passHref href="/blog" target="_blank" rel="noreferrer">
              <a
                className="text-base text-gray-500 hover:text-gray-900"
                id="footer_nav_blog_click"
              >
                Blog
              </a>
            </Link>
          </div>

          <div className="px-5 py-2">
            <Link passHref href="/support" target="_blank" rel="noreferrer">
              <a
                className="text-base text-gray-500 hover:text-gray-900"
                id="footer_nav_kb_click"
              >
                Knowledge Base
              </a>
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <Link passHref href="https://www.facebook.com/getreviewsai">
            <a>
              <div className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </Link>

          <Link passHref href="https://www.instagram.com/getreviewsai/">
            <a>
              <div className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </Link>

          <Link passHref href="https://twitter.com/getreviewsai">
            <a>
              <div className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
            </a>
          </Link>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022 GetReviews.ai. All rights reserved.
        </p>
      </div>
      <script
        src="//code.tidio.co/kgupkmurrrqfhelxal0dbvvlk4gf5aup.js"
        async
      ></script>
    </footer>
  </div>
);

export default SiteLayout;
