import React from 'react'

function Rectangle(props) {
    return (

        <div
            style={{
                background: 'linear-gradient(247.56deg, rgba(234, 234, 234, 0.05) 6.62%, rgba(41, 41, 41, 0.03) 96.11%)',
            }}
            className={`absolute box-border w-[255px] h-[163px] left-[76px] top-[${props.top}px] bg-white rounded-[26px] grid place-items-center`}
        >
            <p className="font-krona font-normal text-white text-xm text-base text-center">{props.text1}<span className='text-red-600'>{props.text2}</span> {props.text3}</p>
        </div>

    )
}

export default Rectangle
