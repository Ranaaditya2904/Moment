import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'> Built on Trust </h1>
                <h2 className='fs-4'> User-Centric Experience</h2>
                <p className='text-muted'> Our platform puts your learning first, providing a risk-free environment to explore stock trading and investment strategies. </p>
                <h2 className='fs-4'> No Distractions, Just Learning </h2>
                <p className='text-muted'> No spam, no gimmicks—only a seamless, intuitive interface designed to help you focus on mastering the stock market. </p>
                <h2 className='fs-4'> An Expanding Ecosystem </h2>
                <p className='text-muted'> MOMENT is more than a simulator; it's a comprehensive learning hub enriched with expert insights, tools, and strategies. </p>
                <h2 className='fs-4'> Your Journey to Financial Mastery </h2>
                <p className='text-muted' > We are here to educate, guide, and elevate your understanding of the stock market—one trade at a time. </p>
            </div>
            <div className='col-6 p-8'>
                <img src='media/images/ecosystem.png' style={{width:"150%"}} />
                <div className='text-center'>
                    {/* <a href=''className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i> </a>
                    <a href=''style={{textDecoration:"none"}}>Try Product <i class="fa-solid fa-arrow-right"></i> </a> */}
                </div>
            </div>
        </div>
        </div>
     );
}

export default Stats;