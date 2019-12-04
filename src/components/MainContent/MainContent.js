import React from 'react'
import "./MainContent.css"
import SearchBar from '../SearchBar/SearchBar'

function MainContent() {
    return (
        <div className="d-flex flex-column main-content-wrapper">
            <SearchBar/>
        </div>
    )
}

export default MainContent
