import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import DashSidebar from '../Components/DashSidebar';
import DashProfile from '../Components/DashProfile';
import DashPosts from '../Components/DashPosts';
import DashUsers from '../Components/DashUsers';
import DashComments from '../Components/DashComments';
import DashboardCom from '../Components/DashboardCom';

export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }      
  },[location.search])

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar/>
      </div>
      <div className="">
        {/* Profile  */}
        {tab === 'profile' && <DashProfile/>}
        {/* Posts  */}
        {tab === 'posts' && <DashPosts/>}
        {/* Users  */}
        {tab === 'users' && <DashUsers/>}
        {/* Comments */}
        {tab === 'comments' && <DashComments/>}
        {/* DashboardCom  */}
        {tab === 'dash' && <DashboardCom/>}
      </div>
    </div>
  )
}
