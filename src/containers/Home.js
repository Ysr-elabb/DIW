import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import MainContent from '../components/MainContent/MainContent'
import DetailsBar from '../components/DetailsBar/DetailsBar'

export default class Home extends Component {
    render() {
        return (
            <div className="App d-flex flex-row">
                <Navbar/>
                <Sidebar/>
                <MainContent/>
                <DetailsBar/>
            </div>
        )
    }
}
