import React from 'react'
import "./MainContent.css"
import SearchBar from '../SearchBar/SearchBar'
import StorageService from '../StorageService/StorageService'

const storageServices = [
    {
        _id: 0, 
        name: "Google Drive", 
        image: "https://img.icons8.com/color/40/000000/google-drive.png", 
        capacity: 50, 
        usedValue: 45.5, 
        isPrimary: true
    },
    {
        _id: 1, 
        name: "Dropbox", 
        image: "https://img.icons8.com/color/48/000000/dropbox.png", 
        capacity: 3, 
        usedValue: 1.2, 
        isPrimary: true
    },
    {
        _id: 2, 
        name: "OneDrive", 
        image: "https://img.icons8.com/color/40/000000/skydrive.png", 
        capacity: 3, 
        usedValue: 2.5, 
        isPrimary: true},
]

function MainContent() {
    return (
        <div className="d-flex flex-column main-content-wrapper">
            <div className="d-flex justify-content-center searchbar">
            <SearchBar/>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center services-wrapper">
               {
                   storageServices.map(item => <StorageService key={item._id} service={item} />)
               }
            </div>
            <div className="folders-section">
               <div className="d-flex flex-row justify-content-between align-items-center folders-section-header">
                    <h4 className="folders-section-title">Folders</h4>
                    <p className="view-all-text">View all</p>
               </div>
               <div>
                   <div className="d-flex flex-row justify-content-between align-items-center folders-wrapper">
                        <div className="folder">
                            
                        </div>
                        <div className="folder">
                            
                        </div>
                        <div className="folder">
                            
                        </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default MainContent
