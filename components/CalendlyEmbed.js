import React, { Component } from "react";

class CalendlyEmbed extends Component {
  componentDidMount() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }
  render() {
    return (
      <div>
        <div id="schedule_form">
          <div
            className="calendly-inline-widget border border-gray-200 sm:border sm:border-gray-200 md:border md:border-gray-200 lg:border-none xl:border-none; 2xl:border-none"
            data-url="https://calendly.com/getreviewsai/demo"
            style={{ height: "1000px" }}
          />
        </div>
      </div>
    );
  }
}

export default CalendlyEmbed;
