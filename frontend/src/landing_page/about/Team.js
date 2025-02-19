import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/aditya.jpeg"
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <h4 className="mt-5">Aditya Kumar Rana</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-3">
          <div
            className="row p-3 text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.2em" }}
          >
            <div className="col-12 p-3 text-center">
              <img
                src="media/images/manshi.jpeg"
                style={{ borderRadius: "200%", width: "50%" }}
              />
              <h4 className="mt-5">Manshi Hindocha</h4>
              <h6>Co-Founder</h6>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          
        <p>Aditya envisioned MOMENT to bridge the gap between stock market education and real-world investing. 
                      His passion for technology and finance drives the platform’s innovation.
                  </p>
                  <p>Exploring markets is his passion.</p> 
        </div>

        <div className="col-6 p-3">
          <div
            className="row p-3 text-muted"
            style={{ lineHeight: "1.8", fontSize: "1em" }}
          >
            <p>Manshi brings a keen eye for design and user experience to MOMENT. 
                      Her expertise ensures a seamless and engaging journey for learners and traders alike.
                  </p>
                  <p>Designing experiences is her craft.</p>
                  
            </div>
          </div>
        </div>
      </div>


    
    

    
  );
}

export default Team;
