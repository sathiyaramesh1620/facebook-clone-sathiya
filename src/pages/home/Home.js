import React from 'react'
import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Home = () => {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
    <Feed/>
    <Rightbar />
    </div>
    </>
  )
}

export default Home