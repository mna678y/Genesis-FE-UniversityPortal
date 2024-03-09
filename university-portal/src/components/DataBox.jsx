import React, { useState } from 'react';

function DataBox(props) {
  const [expanded, setExpanded] = useState({});
  const toggleExpand = (domainId) => {
    setExpanded((prevState) => ({
      ...prevState,
      [domainId]: !prevState[domainId],
    }));
  };
  const openUniversityDetails = (university) => {
    // Handle opening university details page
    console.log(`Opening details of ${university.universityName}`);
  };
  const openWebsite = (url) => {
    // Handle opening website in new tab
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <div className="box">
        <h2>List of Universities in Pakistan</h2>
        {props.data.map((uni) => (
          <div key={uni.domainId}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                toggleExpand(uni.domainId);
              }}
            >
              {expanded[uni.domainId] ? "-" : "+"} University Name:{" "}
              {uni.university.universityName}
            </div>
            {expanded[uni.domainId] && (
              <div style={{ marginLeft: "20px" }}>
                <div>Domains: {uni.domainName}</div>
                <div>Country Code: {uni.country.countryCode}</div>
                <div>
                  Web Sites:{" "}
                  <span
                    style={{ cursor: "pointer", color: "blue" }}
                    onClick={() => {
                      openWebsite(uni.university.website);
                    }}
                  >
                    {uni.university.website}
                  </span>
                </div>
                <div>State / Province: {uni.university.state}</div>
                <div>Country: {uni.country.countryName}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataBox;
