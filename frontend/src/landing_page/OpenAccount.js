import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        {/* <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        /> */}
        <h1 className="mt-5"> Open a Moment Account </h1>
        <p1> MOMENT is a seamless platform for investing in stocks, mutual funds, and more. It offers real-time insights and simulations. </p1>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          {" "}
          Signup Now{" "}
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
