import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'> Transparent & Affordable Pricing </h1>
                    <p>MOMENT believes in fair, transparent, and unbeatable pricing for all users. <br></br> We keep it simple:

                    <br></br>✅ Zero hidden charges – No surprises, just clear pricing
                    <br></br>✅ Flat fees – Trade without worrying about high commissions
                    <br></br>✅ Affordable access – Learn & practice investing at minimal cost  </p>
                    <a href=''style={{textDecoration:"none"}}> See Pricing <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>0</h1>
                            <p> Free equity deliver can add </p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'> 20 </h1>
                            <p> Free Equity Deliver </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;