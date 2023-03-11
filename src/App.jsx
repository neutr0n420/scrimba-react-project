import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import data from './data/data'
export class App extends Component {
  render() {
    const travelCard = data.map(items=>{return(
      <Section
            key = {items.serialNo}
            img  = {items.photoUrl}
            countryName = {items.location}
            googleMapLink = {items.googleMapsUrl}
            title={items.title}
            startingDate={items.startDate}
            endingDate ={items.endDate}
            description = {items.description}
        />
    )})
    return (
      <div className='font-inter'>
        <Navbar/>
        {travelCard}
         
      </div>
    )
  }
}

export default App