import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We built a platform where learning meets investing.
          <br />
          Now, we’re shaping the investors of tomorrow.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We created MOMENT with a simple yet powerful mission—to make stock
            market learning and investing accessible to everyone. Inspired by
            leading platforms like Zerodha and Upstox, MOMENT is not just
            another trading simulator; it is an immersive learning experience
            that blends real-time market data with interactive education.
          </p>
          <p>
            Our journey began with a vision to break the barriers of complexity
            and fear that prevent people from entering the world of investing.
            By combining Money and Investment, MOMENT empowers users to learn,
            practice, and grow in a risk-free environment
          </p>
          <p>
            
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            At MOMENT, we believe that financial literacy is the key to economic
            growth. That’s why we are committed to educating and empowering
            users with our extensive learning hub, market insights, and
            interactive trading tools.
          </p>
          
          <p>
          <b> Join us in redefining the way people learn, trade, and invest—one moment at a time! </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
