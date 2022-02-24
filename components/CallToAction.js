import React, { Component } from "react";
import Link from "next/link";

class CallToAction extends Component {
  render() {
    return (
      <div className="bg-sky-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-white sm:text-5xl">
            <span className="block">Ready to GetReviews?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white">
            Sign up for a free 30-day trial! (No credit card required)
          </p>
          <Link passHref href="https://app.getreviews.ai/signup">
            <a>
              <div
                className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 shadow-sm hover:bg-orange-700 sm:w-auto"
                id="cta_signup_button_click"
              >
                Start Free Trial
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default CallToAction;
