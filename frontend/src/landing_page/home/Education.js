import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.png" style={{ width: "70%" }} />
        </div>
        <div className="col-6">
          <h1 className="mt-5 mb-3 fs-2"> Learn & Master Stock Trading </h1>
          <p>
            {" "}
            Stock Market Basics: Understanding shares, indices & exchanges{" "}
            <br></br>A step-by-step guide Risk Management <br></br> Smart
            investing strategies{" "}
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            Beginner’s Guide <i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
          <p className="mt-5"> Trading QnA, the most </p>
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            Trading QnA <i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
