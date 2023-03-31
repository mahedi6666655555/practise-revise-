import React from 'react';


const SingleData = (props) => {
    let single = props.res

    let { img, name, price, ratings, seller } = single

    let clickBtn = props.clickBtn

    return (
        <div className='w-[400px]  h-[600px] ml-5 relative  border-2 shadow-xl  '>
            <div>
                <div>
                    <img className='p-3' src={img} alt="" />
                </div>
                <div className='pt-5 pl-5'>
                    <h1 className='text-lg font-bold'>{name}</h1>
                    <h1 className='text-lg font-bold'> price : {price}</h1>
                    <h1 className='text-lg font-bold'> retting: {ratings}</h1>
                    <h1 className='text-lg font-bold'> brand: {seller}</h1>
                </div>
                <div>
                    <button onClick={()=>clickBtn()} className=' p-3 text-white absolute bottom-0 bg-orange-600 w-full mt-5'>
                        add to cart
                    </button>
                </div>
            </div>


        </div>
    );
};

export default SingleData;