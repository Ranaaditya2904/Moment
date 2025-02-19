import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center ms-2' >
                <img src="media/images/homeHero.png" alt='Hero Image' className='mb-5' style={{width:"50%" }} class="rounded mx-auto d-block"/>
            <h1 className='mt-5' > Invest Smart, Trade Free <br></br> Make Every Moment Count! </h1>
            <p1> MOMENT is a seamless platform for investing in stocks, mutual funds, and more. It offers real-time insights and simulations. </p1>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}> Signup Now </button>
            </div>
        </div>
     );
}

export default Hero;