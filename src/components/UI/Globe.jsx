import React from 'react'

const Globe = ({ style = { height: '30px', width: '30px' } }) => {
   return (
      <div style={style} className='globe'>
         <div className='globe-wrap'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle-hor'></div>
            <div className='circle-hor-middle'></div>
         </div>
      </div>
   )
}

export default Globe