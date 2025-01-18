import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Navbar from './Components/LandingPage/Navbar';
import Home from './Components/LandingPage/Home';
import RecruiterRegister from './Components/Recruiter/RecruiterRegister';
import JobseekerRegister from './Components/JobSeeker/JobseekerRegister';
import RecruiterLogin from './Components/Recruiter/RecruiterLogin';
import SeekerLogin from './Components/JobSeeker/SeekerLogin';
import AdminLogin from './Components/Admin/AdminLogin';
import Footer from './Components/LandingPage/Footer';
import Postjob from './Components/Recruiter/Postjob';
import SeekerList from './Components/Admin/SeekerList';
import RecruiterList from './Components/Admin/RecruiterList';
import RecruiterPostedJobs from './Components/Recruiter/RecruiterPostedJobs';
import RecruiterUpdate from './Components/Recruiter/RecruiterUpdate';
import JobSeekerUpdate from './Components/JobSeeker/JobSeekerUpdate';
// import PostedJob from './Components/Recruiter/RecruiterAppliedJob';
import AdminUpdate from './Components/Admin/AdminUpdate';
import JobSeekerApply from './Components/JobSeeker/JobSeekerApply';
import SeekerAppliedJob from './Components/JobSeeker/SeekerAppliedJob';
import RecruiterAppliedJob from './Components/Recruiter/RecruiterAppliedJob';
import Contact from './Components/LandingPage/Contact';
import Findjob from './Components/LandingPage/Findjob';
import About from './Components/LandingPage/About';

const App = () => {
  const location = useLocation();
  const [role, setRole] = useState('');

  useEffect(()=>{
    const userType = JSON.parse(localStorage.getItem('userType'));
    setRole(userType);
  },[role, location])

  return (
    <>
      <div className="container-fluid">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/findjob' element={<Findjob/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/admin/login' element={<AdminLogin/>} />
            <Route path='/seeker/register' element={<JobseekerRegister/>} />
            <Route path='/seeker/login' element={<SeekerLogin/>} />
            <Route path='/recruiter/register' element={<RecruiterRegister/>}/>
            <Route path='/recruiter/login' element={<RecruiterLogin/>}/>
            {/* {console.log(role)} */}
            {role == 'admin' && (<>
            {/* admin route */}
            <Route path='/admin' element={<AdminUpdate/>} />
            <Route path='/admin/seekerlist' element={<SeekerList/>} />
            <Route path='/admin/recruiterlist' element={<RecruiterList/>} />
            </>)}
            {role == 'seeker' && (<>
            <Route path='/seeker' element={<JobSeekerUpdate/>} />
            <Route path='/seeker/jobapply' element={<JobSeekerApply/>} />
            {/* <Route path='/seeker/update' element={} /> */}
            <Route path='/seeker/jobapplied' element={<SeekerAppliedJob/>} />
            </>)}
            {/* Seeker route */}
            
            {role == 'recruiter' && (<>
            {/* Recruiter route */}
            <Route path='/recruiter' element={<RecruiterUpdate/>}/>
            <Route path='/recruiter/jobpost' element={<Postjob/>}/>
            <Route path='/recruiter/postedjob' element={<RecruiterPostedJobs/>}/>
            <Route path='/recruiter/appliedjob' element={<RecruiterAppliedJob/>}/>
            <Route path='/recruiter/appliedjob' element={<RecruiterAppliedJob/>}/>
            {/* <Route path='/recruiter/update' element={}/> */}
            </>)}
            

            <Route path='*' element={<><h1>404 Page Not Found</h1></>} />
          </Routes>
          <Footer/>
      </div>
    </>
  )
}
const WrapperRouter=()=>{
  return(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  )
}

export default WrapperRouter;
