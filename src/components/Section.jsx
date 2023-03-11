import React from 'react'

export default function Section(props) {
  console.log(props)
  return (
    <div className='flex items-center '>
        <img src={props.img} className='w-44 my-11 mx-10' alt="" />
        <div>
          <div className='w-96 flex items-center'>
            <img src="public/location_icon.png" alt="" className='w-3 mr-1' />
            <p className='tracking-wide'>{props.countryName}</p>
            <a href={props.googleMapLink} className='text-grey underline ml-3'>View on Google Maps</a>
          </div>
            <h1 className='text-3xl font-boldmy-1.5 pb-3'>{props.title}</h1>
            <p className='font-bold text-sm'>{props.startingDate} - {props.endingDate}</p>
            <p className='w-4/5 mt-3'>{props.description}</p>
        </div>
    </div>
  )
}
