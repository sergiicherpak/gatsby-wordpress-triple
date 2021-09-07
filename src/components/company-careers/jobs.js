import React from "react";

export default function Jobs() {
  return (
    <div className="bland-section-container latest-blog-posts-section-container" id="job-boards">
      <div className="heading">
        <h2 className="h1">TripleLift Job Openings</h2>
      </div>
      <div className="jobs-iframe-container">
        <iframe
        allow="geolocation"
        frameBorder="0"
        height="3742"
        id="grnhse_iframe"
        scrolling="no"
        src="https://boards.greenhouse.io/embed/job_board?for=triplelift&amp;b=https%3A%2F%2Ftriplelift.com%2Fcareers%2F"
        title="Greenhouse Job Board"
        width="100%"
        />
      </div>
    </div>
  );
}
