import React from 'react'
import "./File.css"

function File(props) {
    return (
        <div className="d-flex flex-row file-wrapper">
            <i className='uil uil-angle-right open-icon'></i>
            <i className='uil uil-folder folder-icon'></i>
            <p className="file-name">{props.file.name}</p>
        </div>
    )
}


export default File

