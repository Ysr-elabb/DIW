import React from 'react'
import "./MainContent.css"
import SearchBar from '../SearchBar/SearchBar'
import StorageService from '../StorageService/StorageService'
import MainFolder from '../MainFolder/MainFolder';

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
];

const MainFolders = [
    {
        _id: 0, 
        title: "Analytics", 
        filesCount: 15, 
        members: [
            {_id: 0, name: "member1"},
            {_id: 1, name: "member2"},
            {_id: 2, name: "member3"},
            {_id: 3, name: "member4"},
            {_id: 4, name: "member5"},
            {_id: 5, name: "member6"},
            {_id: 6, name: "member7"},
        ]
    },
    {
        _id: 1, 
        title: "Assets", 
        filesCount: 345, 
        members: [
            {_id: 0, name: "member1"},
        ]
    },
    {
        _id: 2, 
        title: "Marketing", 
        filesCount: 143, 
        members: [
            {_id: 0, name: "member1"},
            {_id: 1, name: "member2"},
        ]
    },
]

const recentFiles = [
    {
        _id: 0,
        title: "Competitor Analysis Template",
        members: "Only you",
        lastModified: "Sep 3, 2019",
        type: "PDF"
    },
    {
        _id: 1,
        title: "How to Create a Case Study",
        members: "3 members",
        lastModified: "Jun 12, 2019",
        type: "TXT"
    },
    {
        _id: 2,
        title: "Landing Page Structure",
        members: "10 members",
        lastModified: "Jul 17, 2019",
        type: "TXT"
    },
    {
        _id: 3,
        title: "Meeting Report",
        members: "5 members",
        lastModified: "Aug 28, 2019",
        type: "PDF"
    },
    {
        _id: 4,
        title: "Project Documents",
        members: "Only you",
        lastModified: "Aug 17, 2019",
        type: "ZIP"
    },
    {
        _id: 5,
        title: "Review Checklist Template",
        members: "7 members",
        lastModified: "Sep 8, 2019",
        type: "TXT"
    },
]

function MainContent() {
    return (
        <div className="d-flex flex-column align-items-center main-content-wrapper">
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
                    <h4 className="main-content-title">Folders</h4>
                    <p className="view-all-text">View all</p>
               </div>
                <div className="d-flex flex-row justify-content-between align-items-center folders-wrapper">
                    {
                        MainFolders.map(item => <MainFolder item={item} />)
                    }
                </div>
            </div>
            <div className="recent-folders-section">
                <div className="d-flex flex-row justify-content-between align-items-center recent-folders-section-header">
                    <h4 className="main-content-title">Recent files</h4>
                    <p className="view-all-text">View all</p>
                </div>
                <div className="d-flex flex-fill recent-folders-list-wrapper">
                <table class="table table-borderless fixed-header recent-folders-list">
                    <thead>
                        <tr>
                            <th className="table-header">Name</th>
                            <th className="table-header">Members</th>
                            <th className="table-header">Last modified</th>
                            <th className="table-header"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentFiles.map(item => {
                            let icon = null;

                            switch (item.type) {
                                case "PDF":
                                    icon= <span className="recent-file-type-icon pdf-icon">PDF</span>
                                    break;
                                case "TXT":
                                    icon= <span className="recent-file-type-icon txt-icon">
                                        <i className='uil uil-align-left-justify'></i>
                                    </span>
                                    break;    
                                case "ZIP":
                                    icon= <span className="recent-file-type-icon zip-icon">ZIP</span>
                                    break;
                                default:
                                    icon=null;
                                    break;
                            }

                            return (
                                <tr>
                                    <td className="recent-file-title">{icon} {item.title}</td>
                                    <td className="recent-file-info">{item.members}</td>
                                    <td className="recent-file-info">{item.lastModified}</td>
                                    <td className="recent-file-info-icon"><i className="uil uil-ellipsis-h"></i></td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default MainContent
