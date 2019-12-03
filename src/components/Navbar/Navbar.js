import React from 'react'
import './Navbar.css'

const navbarElements = [
    {_id: 0, icon: "uil uil-copy", desc: "File manager", active: true},
    {_id: 0, icon: "uil uil-comment", desc: "Discussions", active: false},
    {_id: 0, icon: "uil uil-user", desc: "Contacts", active: false},
    {_id: 0, icon: "uil uil-file-alt", desc: "Sheets", active: false},
    {_id: 0, icon: "uil uil-cog", desc: "Settings", active: false},
];

export default function Navbar() {
    return (
        <div className="navbarWrapper d-flex flex-column">
            <div className="d-flex flex-column navbar-block">
            <div className="p-2 brand">
                <i className="uil uil-spin brand-icon"></i>
            </div>
            <div className="d-flex flex-column navbarItems">
                {navbarElements.map(item =>{
                   return <a href="#" className={ (item.active ? 'navbar-active-item-icon' : 'navbar-item-icon')}>
                            <i className={`${item.icon}`}></i>
                          </a>
                })}
            </div>
            </div>

            <div className="profile-block">
                <div className="p-2 profile">
                    <img src="https://i.pravatar.cc/50" alt=""/>
                </div>
            </div>
            
        </div>
    )
}
