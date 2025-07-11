import React from 'react'
import parse from 'html-react-parser'

const ResumeItem = ({icon, year, title, description}) => {
  return (
    <div className='resume_item'> 
        <div className='resume_icon'> {icon}</div>

        <span className='resume_date'>{year}</span>
        <h3 className='resume_subtitle'> {parse(title)}</h3>
        <p className='resume_description'> {description}</p>
    </div>
  )
}

export default ResumeItem