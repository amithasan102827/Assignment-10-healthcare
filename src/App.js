import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Doctors from './components/Doctors/Doctors'
import Footer from './components/Footer/Footer';
import SingUp from './components/SingUp/SingUp';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import OurFacilities from './components/OurFacilities/OurFacilities';
import DepartmentDetails from './components/DepartmentDetails/DepartmentDetails';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContactUs from './components/ContactUs/ContactUs';



const App = () => {
  return (
    <div className='App'>
      
      <AuthProvider>
      <BrowserRouter>
       <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home />
          </Route>
          <Route path="/doctors">
          <Doctors></Doctors>
          </Route>
          <Route path="/register">
            <SingUp></SingUp>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
         
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/contact">
            <ContactUs></ContactUs>
          </PrivateRoute>
          <Route path="/facilities">
            <OurFacilities></OurFacilities>
          </Route>
          <PrivateRoute path="/department/:detailsId">
           <DepartmentDetails></DepartmentDetails>
          </PrivateRoute>
          <PrivateRoute path="/doctor/:doctorDetailsId">
           <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <Route  path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;