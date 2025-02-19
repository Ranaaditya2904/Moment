import React from 'react';

function Awards() {
    return ( 
       <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5 mt-5'>
                <img src="media/images/largestBroker.svg " class="img-fluid"/>
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1> Aspiring Stock broker in India </h1>
                <p className='mb-5'> MOMENT empowers users to learn and practice stock trading by simulating real-market scenarios. Our platform enables users to explore: :</p>
                <div className='row'>
                    <div className='col-6'>
                    <ul>
                    <li>
                        <p>Stock Investments</p>
                    </li>
                    <li>
                        <p> Futures & Options Trading </p>
                    </li>
                    <li>
                        <p> Market Trends & Strategies </p>
                    </li>
                </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                    <li>
                        <p>Future and Options</p>
                    </li>
                    <li>
                        <p> Commodity derivatives </p>
                    </li>
                    <li>
                        <p> Currency derivatives </p>
                    </li>
                </ul>
                    </div>

                </div>
                <img src="media/images/pressLogos.png" style={{width:"100%"}}/>
            </div>
        </div> 
       </div>
     );
}

export default Awards;