import React, { Component } from 'react';
import Link from 'next/link';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const nav = [
    { name: 'Integrations', href: '/integrations' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Demo', href: 'https://supernutritionco.com/', target: '_blank' },
]


class Header extends Component {
    render() {
        return (
            <div className="relative pt-6 pb-6">
                <Popover>
                    <nav
                        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                        aria-label="Global"
                    >
                        <div className="flex items-center flex-1">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link href href="/">
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-10 w-auto sm:h-10"
                                        src="logo.svg"
                                        alt=""
                                    />
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open main menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:space-x-10">
                                {nav.map((item) => (
                                    <Link key={item.name} href={item.href} target={item.target} className="font-medium text-gray-500 hover:text-gray-900">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block text-right">
                        <span className="inline-flex mr-2">
                                <Link
                                    href="https://app.getreviews.ai/login"
                                    className="inline-flex items-center px-4 py-2 text-base font-medium text-gray-900"
                                >
                                    Log in
                                </Link>
                            </span>
                        <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                                <Link
                                    href="https://app.getreviews.ai/signup"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                    Sign Up
                                </Link>
                            </span>
                        </div>
                    </nav>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="logo.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close main menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {nav.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="https://app.getreviews.ai/login"
                                    className="block w-full px-5 pb-3 text-center font-medium text-grey-900"
                                >
                                    Log in
                                </Link>
                                <span className="block w-full px-5 pb-5">
                                <Link
                                    href="https://app.getreviews.ai/signup"
                                    className="block w-full px-4 py-2 border border-transparent text-center font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                    Sign Up
                                </Link>
                                </span>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        )
    }
}

export default Header;