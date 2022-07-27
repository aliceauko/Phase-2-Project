import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

function Note() {
  return (
    <div className='note'>
        <span>Hello! This is our first note</span>
        <div className='footernote'>
            <small> 27/04/2021</small>
            <MdDeleteForever className='delete-note' size='1.3em'/>

        </div>
      
    </div>
  )
}

export default Note
