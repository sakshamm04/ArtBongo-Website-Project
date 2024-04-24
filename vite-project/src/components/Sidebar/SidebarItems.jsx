import React from 'react'
import Home from './Home'
import HDRIs from './HDRIs'
import Search from './Search'
import Textures from './Textures'
import Models from './Models'
import ProfileLink from './ProfileLink'
import CreatePost from './CreatePost'
import BongoRepo from './BongoRepo'


const SidebarItems = () => {
  return (
    <>
        <Home/>
        <Search/>
        <CreatePost/>
        <Models/>
        <Textures/>
        <HDRIs/>
        <BongoRepo/>
        <ProfileLink/>
    </>
  )
}

export default SidebarItems