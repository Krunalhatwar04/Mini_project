import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AdminLogin from './AdminLogin';
import ServiceCenterRegister from './ServiceCenterForm';
import LoginForm from './LoginForm';
import Footer from './Footer';
import DarkVariantExample from './Carousel';
import Signup from './Signup'
import Service from './Service'
import ServiceCenters from './ServiceCenter';
import FormExample from './Form';
import FirstPage from './FirstPage';
import CardPage from './CardPage';
import AdminNavBar from './AdminNavBar';
import BookingList from './BookingList';
function App() {
  return (
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/about" element={<AboutPage />}  />
    //     <Route path="/Contact" element={<ContactPage />} />
    //     <Route path="/service-centers" element={<ServiceCenters />} />
    //     <Route path="/login/user" element={<LoginPage />} />
    //     <Route path="/login/user/Signup" element={<Signup />} />
    //     <Route path="/login/admin" element={<AdminLogin />} />
    //     <Route path="/register/service-center" element={<ServiceCenterRegister />} />
    //     <Route path="/signup" element={<Signup />}/>
    //   </Routes>
    //   {/* <DarkVariantExample/>
    //   <Footer/> */}

    // </Router>

    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service-centers" element={<ServiceCenters />} />
        <Route path="/login/user" element={<LoginForm />} />
        <Route path="/login/user/signup" element={<Signup />} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/service-center" element={<ServiceCenterRegister />} />
        {/* Define the service page route without including it in the navbar */}
        <Route path="/services" element={<Service />} />
        <Route path="/servicesform" element={<FormExample />} />
        <Route path="/FirstPage" element={<FirstPage />} />
        <Route path="/AdminNavBar" element={<AdminNavBar />} />
        <Route path="/viewbooking" element={<BookingList />} />
      </Routes>
    </Router>
  );
}
function AboutPage() {
  return (
    <>
      <NavBar></NavBar>
      <About />
      <Footer />
    </>
  );
}

function ContactPage() {
  return (
    <>
    <NavBar></NavBar>
      <Contact />
      <Footer />
    </>
  );
  
}
function HomePage() {
  return (
    <>
    <NavBar></NavBar>
    <DarkVariantExample />
    <CardPage></CardPage>
    <br/><br/><br/><br/>
      <Footer />
    </>
    
  );
}
function LoginPage(){
  return (
    <>
    <LoginForm/>
    </>
    
  );
}
export default App;

