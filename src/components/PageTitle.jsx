import React, { Children } from 'react'

const PageTitle = ({title}) => {
  return (
    <div className='heading_information_section'>
     <div className='bg_overlay'></div>
      <div className='container'>
        <h2 style={{fontSize:"36px",fontWeight:"bold"}}>{title}</h2>
      </div>
    </div>
  )
}

export default PageTitle
