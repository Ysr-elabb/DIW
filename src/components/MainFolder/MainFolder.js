import React from 'react'
import "./MainFolder.css"

function MainFolder(props) {
    const count = props.item.members.length > 2 ? props.item.members.length - 2 : null
    const members = props.item.members.length > 2 ? props.item.members.splice(-2) : props.item.members;
    
    return (
        <div className="d-flex flex-column justify-content-between align-items-center folder">
            <div className="d-flex flex-row justify-content-between align-items-center folder-header">
                <i className="uil uil-folder main-folder-icon"></i>
                <div className="d-flex flex-row justify-content-between align-items-center folder-members-wrapper">
                    {
                        members.map(item =>{
                            return (
                                <div className="folder-member">
                                    <div className="p-2 folder-member-image">
                                        <img src="https://i.pravatar.cc/40" alt=""/>
                                    </div>
                                </div>
                            )
                        })
                    }
                     {
                         count && <div className="d-flex justify-content-center align-items-center member-count">
                         <p className="member-count-value">
                             {`+${count}`}
                         </p>
                     </div>
                     }
                </div>
            </div>
            <div className="d-flex flex-column justify-content-between folder-content">
                <h4 className="folder-title">
                    {props.item.title}
                </h4>
                <p className="files-count">
                    {`${props.item.filesCount} files`} 
                </p>
            </div>
        </div>
    )
}


export default MainFolder

