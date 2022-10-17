import { Button } from 'antd'
import React from 'react'
import photo from '../../images/Amos.jpeg'
import fb from '../../images/li.png'
import email from '../../images/email.png'

function About() {
  return (
    <div className='info'>
        <img src={photo} className='photo'/>
        <h2 className='jina'>Amos Nganda</h2>
        <h4 className='kazi'>QA Engineer</h4>
<div className='buttons'>
  
            <Button className='email'>
            <img src={email} style ={{width:'13px',height: '13px',marginRight: '10px'}} />
                Email</Button>
<div className='linkd'>
   
            <Button className='linkedin' style={{background:'#297FE5', color:'white'}}>
                <img src={fb} style ={{width:'13px',height: '13px',marginRight: '10px'}} />
                LinkedIn</Button> 
</div>
</div>
      

    </div>
  )
}

export default About