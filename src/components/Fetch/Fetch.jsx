import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
// here is sweet aleart import starts 
import Swal from 'sweetalert2'
// here is sweet aleart import ends 

import './fetch.css'
const Fetch = () => {
    let [set, setapi] = useState([])

    useEffect(() => {


        let url = `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setapi(data))

    })

    let clickBtn = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )

    }
    return (
        <div>
            <div className=' mahedi'>
                <div className='grid md:grid-cols-3 mr-6 gap-5'>

                    {

                        set.map(res => <SingleData

                            res={res}
                            key={res.id}
                            clickBtn={clickBtn}
                        >


                        </SingleData>)
                    }


                </div>
                <div className='bg-gray-200 rounded-lg border-2     ml-3 h-[700px]  p-5'>

                    <h1 className='text-center font-bold text-lg'>Here is cart section</h1>
                    <div className='pt-4'>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetch;