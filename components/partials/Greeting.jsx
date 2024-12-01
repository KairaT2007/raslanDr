import React from 'react'

const Greeting = () => {
    return (
        <div>
            <div className='h-[100vh] flex flex-col-reverse md:flex-row-reverse md:justify-between items-center'>
                <img src="/greetingf.png" alt="" className='w-[100%] md:w-[50%]' />
                <img src="/hpKana2.png" alt="" className='w-[100%] md:w-[50%]' />
            </div>
        </div>
    )
}

export default Greeting