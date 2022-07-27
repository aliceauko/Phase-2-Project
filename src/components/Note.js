import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note({id, write, date}) {
  return (
    <div className='note'>
        <span>{write}</span>
        <div className='footernote'>
            <small>{date}</small>
            <MdDeleteForever className='delete-note' size='1.3em'/>

        </div>
      
    </div>
  )
}

export default Note
