import React from 'react'
import Sidebar from '../Components/Sidebar'
import HeaderNav from '../Components/HeaderNav'
const Profile = () => {
  return (
    <div className='profile_page'>
    <HeaderNav />
    <div className='col-md-4'>
        <Sidebar />
    </div>
    <div className='col-md-6'>
        Profile
    </div>
    </div>
  )
}

export default Profile