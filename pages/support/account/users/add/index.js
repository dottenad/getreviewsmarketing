import Link from "next/link"
import SupportLayout from '../../../../../components/SupportLayout'


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
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <Link passHref href="/support/account"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Account Settings</a></Link>
                                </div>
                            </li>

                            <li>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <Link passHref href="/support/account/users"><a class="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900">Users</a></Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-4 text-sm font-medium text-gray-500">Add User</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="relative py-16 bg-white overflow-hidden">
                        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                            <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                                <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs>
                                        <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                                </svg>
                                <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs>
                                        <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                                </svg>
                                <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                                    <defs>
                                        <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="text-lg max-w-prose mx-auto">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Add User</span>
                                </h1>
                            </div>
                            <div className="mt-6 prose prose-sky prose-lg mx-auto">
                                <p>To add a user to your GetReviews account, click the "User" icon in the top right corner of the GetReviews dashboard, then click "Users"</p>
                                <figure className="mt-4">
                                    <img class="rounded-lg border border-gray-200 mx-auto" src="../../../account_users_1.jpg" alt="" />
                                    <figcaption>Select "Users" from the account menu in GetReviews</figcaption>
                                </figure>
                                <p>Once on the users page, click the blue "Add User" button in the top right corner</p>
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../account_users_2.jpg" alt="" />
                                    <figcaption>Add user button</figcaption>
                                </figure>
                                <p>When you click the "Add Users" button, a modal will pop up that asks you to enter some information on the user to be added.</p>
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../account_users_3.jpg" alt="" />
                                    <figcaption>Add User modal</figcaption>
                                </figure>
                                <ol>
                                    <li><strong>Email</strong>: Enter the email address of the user you would like to add.</li>
                                    <li><strong>Role</strong>: Enter the role of the user you are adding. There are two roles:
                                    <ul>
                                        <li>Member</li>
                                        <li>Administrator</li>
                                    </ul>
                                    Users with "Member" role-designations are not allowed into two areas of the site. These areas are the "Users" page, meaning they cannot add, edit, or remove new or existing users, and the "Plan/Billing" area, meaning they cannot access any plan or billing functions on the account. Users with Administrator privileges have no restrictions. <strong>Note</strong>: There is no concept of a super-admin in GetReviews. If you assign someone Administrator credentials, you are allowing them full access to the account, including the ability to delete you as a user/change your role-designation. Ensure Administrator credentials are handed out appropriately.
                                    </li>
                                </ol>
                                <p>Once you click the "Add User" button, an email will be sent to the user with instructions on how to sign up. Until the user signs up, they will be shown as an "Invited" user on the user administration page. If you would like to revoke this user invite, you can click the trash can icon next to the user invite you would like to revoke.</p>
                                <figure className="mt-4">
                                    <img class="w-full rounded-lg border border-gray-200" src="../../../account_users_4.jpg" alt="" />
                                    <figcaption>Invited users</figcaption>
                                </figure>
                            </div>
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
