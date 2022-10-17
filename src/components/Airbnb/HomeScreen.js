import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Card from './Card'
import data from '../../Data'
console.log(data)

function HomeScreen() {
  const cards =data.map((item)=>{
return(
  <Card
  key ={item.id}
  image={item.coverImg}
  rating={item.stats.rating}
  reviewCount ={item.stats.reviewCount}
  country ={item.country}
  title ={item.title}
  price ={item.price}
  />
)
  }
  )
  return (
    <div>
        <NavBar/>
        <Hero/>
        
        <section>
          <div style={{display:"flex", flexDirection: "row", justifyContent:"center"}}>
          {cards}
          </div>
        </section>
      
    </div>
  )
}

export default HomeScreen