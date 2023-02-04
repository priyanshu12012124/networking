import React from 'react'
import './Home.css'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widgets from './Widgets'

function Home() {
    return (
        <div className='container_home'>

            <Sidebar />
            <Feed />
            <Widgets/>
        </div>
    )
}

export default Home