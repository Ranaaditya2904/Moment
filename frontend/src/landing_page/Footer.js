import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              &copy; 2024 MOMENT Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">Moment Shares</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Be In the Moment (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">Contests</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            <strong> MOMENT Technologies Pvt. Ltd. </strong>: This platform is
            designed for **educational purposes only** and does not offer
            real-world trading or investment services.
          </p>

          <p>
            Registered Address: MOMENT Technologies Pvt. Ltd., Imperial College,
            Bargarh, Odisha - 768028, India. For queries, contact:
            <a href="mailto: support@moment.com">support@moment.com</a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            **Investor Awareness:** Investments in the securities market are
            subject to market risks. This platform is a **simulation tool** to
            help users learn about stock trading in a risk-free environment.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
