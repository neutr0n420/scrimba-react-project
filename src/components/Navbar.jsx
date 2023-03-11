import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className='bg-red '>
        <div className='flex justify-center items-center'>
            <img src="public/globe_img.png" className='w-9 py-5 pr-2' alt="" />
            <p className='font-medium text-white '>my travel journal.</p>
        </div>
      </div>
    )
  }
}

export default Navbar