import React from 'react'
import Home from './Home'
import HDRIs from './HDRIs'
import Search from './Search'
import Textures from './Textures'
import Models from './Models'
import Notifications from './Notifications'
import ProfileLink from './ProfileLink'
import CreatePost from './CreatePost'


const SidebarItems = () => {
  return (
    <>
        <Home/>
        <Search/>
        <Notifications/>
        <CreatePost/>
        <Models/>
        <Textures/>
        <HDRIs/>
        <ProfileLink/>
    </>
  )
}

export default SidebarItems