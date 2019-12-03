import React from 'react'
import './Sidebar.css'
import File from '../File/File'

const filesList = [
    {_id:0, name:"Analytics"},
    {_id:1, name:"Assets"},
    {_id:2, name:"Marketing"},
    {_id:3, name:"Templates"},
    {_id:4, name:"Projects"},
    {_id:5, name:"Projector Cources"},
]

export default function Sidebar() {
    return (
        <div className="card card-1 d-flex flex-column sidebar-wrapper">
           <div>
            <div className="sidebar-header d-flex flex-row">
                <div className="sidebar-header-title-wrapper">
                    <h4 className="sidebar-header-title">Marketing Team</h4>
                    <p className="sidebar-header-desc">17 members</p>
                </div>
                <i class='uil uil-angle-down more-icon'></i>
            </div>
            <div className="storage-wrapper">
                <div className="storage-title-wrapper">
                    <h3 className="storage-title">Storage</h3>
                </div>
            </div>
            <div className="explorer-wrapper">
                <div className="explorer-title-wrapper">
                    <h4 className="explorer-title">My Files</h4>
                </div>
                <div className="explorer-content-wrapper">
                    {filesList.map(item => <File file={item} />)}
                </div>
                <div className="explorer-section-wrapper">
                    <h4 className="section-title">Shared with me</h4>
                </div>
                <div className="explorer-section-wrapper">
                    <h4 className="section-title">Recent</h4>
                </div>
                <div className="explorer-section-wrapper">
                    <h4 className="section-title">Starred</h4>
                </div>
                <div className="explorer-section-wrapper">
                    <h4 className="section-title">Trash</h4>
                </div>
            </div>
            </div>
            <div className="d-flex flex-column sidebar-footer">
                <div className="categories-wrapper">
                   <div className="categories-list">
                        <div className="d-flex flex-row categories-list-header">
                            {/* <i className='uil uil-angle-left open-category-icon'></i> */}
                            <i className='uil uil-folder category-icon'></i>
                            <p className="category-name">Folder</p>
                        </div>
                        <div className="categories-list-content">
                            <div className="d-flex flex-row category-item">
                                <div className="d-flex flex-row align-items-center">
                                    <i className='uil uil-file-alt category-icon'></i>
                                    <p className="category-name">Text Doc</p> 
                                </div>
                                <i className='uil uil-angle-right open-category-icon'></i>
                            </div>
                            <div className="d-flex flex-row category-item">
                                <div className="d-flex flex-row align-items-center">
                                    <i className='uil uil-presentation category-icon'></i>
                                    <p className="category-name">Presentation</p> 
                                </div> 
                                <i className='uil uil-angle-right open-category-icon'></i>
                            </div>
                            <div className="d-flex flex-row category-item">
                                <div className="d-flex flex-row align-items-center">
                                    <i className='uil uil-clipboard-notes category-icon'></i>
                                    <p className="category-name">Sheets</p> 
                                </div> 
                                <i className='uil uil-angle-right open-category-icon'></i>
                            </div>
                            <div className="d-flex flex-row category-item">
                                <div className="d-flex flex-row align-items-center">
                                    <i className='uil uil-ellipsis-h category-icon'></i>
                                    <p className="category-name">More</p> 
                                </div>
                                <i className='uil uil-angle-right open-category-icon'></i>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="d-flex flex-row add-new-wrapper">
                    <a href="#" className="button-text">Create new</a>
                    <a href="#" className="button-icon">
                         <i className='uil uil-plus'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
