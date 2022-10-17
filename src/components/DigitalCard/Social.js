import React from 'react'
import fb from '../../images/fb.png'
import git from '../../images/git.png'
import insta from '../../images/insta.png'
import tt from '../../images/tt.png'
const Social = () =>{
  return (
    <div className='social'>
<img src={fb} style ={{width:'25px',height: '25px'}} />
<img src={git} style ={{width:'25px',height: '25px'}} />
<img src={insta} style ={{width:'25px',height: '25px'}} />
<img src={tt} style ={{width:'25px',height: '25px'}} />
    </div>
  )
}

export default Social