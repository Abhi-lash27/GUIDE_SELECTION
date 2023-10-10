import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Home from './pages/home/Home'
import GuideList from './pages/guidelist/Guidelist'
import Register from './pages/register/Register'
import Admin from './pages/Login/Admin'
import Staff from './pages/Login/Staff'
import Student from './pages/Login/Student'
import AdminDashboard from './scences/Dashboard/AdminDashboard'
import StaffDashboard from './scences/Dashboard/StaffDashboard'
import StudentDashboard from './scences/Dashboard/StudentDashboard'
import Createstaff from './scences/form/Createstaff'
import Createstudent from './scences/form/Createstudent'
import PPTUpload from './scences/ReviewOptions/PPTUpload'
import ReportUpload from './scences/ReviewOptions/ReportUpload'
import StudentReviewForm from './scences/ReviewOptions/StudentReviewForm'
import StudentInfoAdmin from './scences/studentinfo/StudentInfoAdmin'
import StudentInfoStaff from './scences/studentinfo/StudentInfoStaff'
import StaffInfoAdmin from './scences/staffinfoadmin/StaffInfoAdmin'
import Pptdownloadadmin from './scences/DownloadAdmin/Pptdownloadadmin'
import Reportdownloadadmin from './scences/DownloadAdmin/Reportdownloadadmin'
import Reviewdownloadadmin from './scences/DownloadAdmin/Reviewdownloadadmin'
import Pptdownloadstaff from './scences/DownloadStaff/Pptdownloadstaff'
import Reportdownloadstaff from './scences/DownloadStaff/Reportdownloadstaff'
import Reviewdownloadstaff from './scences/DownloadStaff/Reviewdownloadstaff'
import ProjectRegister from './scences/Register/ProjectRegister'


const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/guide-list' component={GuideList} />
        <Route path='/register' component={Register} />
        <Route path='/admin-login' component={Admin} />
        <Route path='/staff-login' component={Staff} />
        <Route path='/student-login' component={Student} />
        <Route path='/admin-dashboard' component={AdminDashboard} />
        <Route path='/staff-dashboard' component={StaffDashboard} />
        <Route path='/student-dashboard' component={StudentDashboard} />
        <Route path='/create-staff' component={Createstaff} />
        <Route path='/create-student' component={Createstudent} />
        <Route path='/student-upload-ppt' component={PPTUpload} />
        <Route path='/student-upload-report' component={ReportUpload} />
        <Route path='/student-review-form' component={StudentReviewForm} />
        <Route path='/student-data-admin' component={StudentInfoAdmin} />
        <Route path='/student-data-staff' component={StudentInfoStaff} />
        <Route path='/staff-data-admin' component={StaffInfoAdmin} />
        <Route path='/admin-ppt' component={Pptdownloadadmin} />
        <Route path='/admin-reports' component={Reportdownloadadmin} />
        <Route path='/admin-review-form' component={Reviewdownloadadmin} />
        <Route path='/staff-ppt' component={Pptdownloadstaff} />
        <Route path='/staff-reports' component={Reportdownloadstaff} />
        <Route path='/staff-review-form' component={Reviewdownloadstaff} />
        <Route path='/register-project' component={ProjectRegister} />
      </Switch>
    </Router>
    </>
  )
}

export default App