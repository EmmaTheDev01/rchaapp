import React from 'react'
import '../Components/styles/sidebar.css'
const DashboardSidebar = () => {
  return (
    <div className='sidebar'>
    <div className='sidebar-content'>
       <ul>
        <li>My Booking</li>
        <li>Edit profile</li>
        <li>Settings</li>
        <li>
            <button className='logout-btn'>Logout</button>
        </li>
       </ul> 
    </div>
</div>
  )
}

export default DashboardSidebar