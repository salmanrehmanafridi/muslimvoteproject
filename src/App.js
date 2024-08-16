import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Base from './components/layouts/Base';
import Home from './Pages/Home';
import Contact from './components/elements/Contact';
import VoterEngagement from './components/elements/VoterEngagement';
import VoterEducation from './components/elements/VoterEducation';
import ElectionProtection from './components/elements/ElectionProtection';
import Mission from './components/elements/Mission';
import AboutUs from './components/elements/AboutUs';
import Volunter from './components/elements/Volunter';
import PartnerWithUs from './components/elements/PartnerWithUs';
import Section from './components/utils/Section';
import Contact3 from './components/utils/Contact3';
import Contact4 from './components/utils/Contact4';
import Contact2 from './components/utils/Contact2';
import Update from './components/utils/Update';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,

    })
  },[])
  return (
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route index path = '/' element={<Home/>}/>
    <Route  path = '/contact' element={<Contact/>}/>
    <Route  path = '/voter-engagement' element={<VoterEngagement/>}/>
    <Route  path = '/voter-education' element={<VoterEducation/>}/>
    <Route  path = '/election-protection' element={<ElectionProtection/>}/>
    <Route  path = '/mission' element={<Mission/>}/>
    <Route  path = '/about' element={<AboutUs/>}/>
    <Route  path = '/volunteer' element={<Volunter/>}/>
    <Route  path = '/partner' element={<PartnerWithUs/>}/>
    <Route  path = '/section' element={<Section/>}/>
    <Route  path = '/becomepartner' element={<Contact3/>}/>
    <Route  path = '/contact4' element={<Contact4/>}/>
    <Route  path = '/contact2' element={<Contact2/>}/>
    <Route  path = '/update-info' element={<Update/>}/>
    
   </Routes>
   </Base>
   </BrowserRouter>
   </>
  );
}

export default App;
