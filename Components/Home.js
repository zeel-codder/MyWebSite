/**
 @name:Home
 @type:React Component
 @param:none
 @returns: JSX of Home of User details
 @functionality : This Component is main part of web site. Which handle al the routes.
**/


// Imports
// ====================================
// import axios from 'axios';
// import {useState,useEffect} from 'react';
// import { User } from '../../LambdaFunctions/DataBaseConnection';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import { useGlobalContext } from './context';
// import/ {locai}
// ====================================



function Home() {

  const { Navbar,Main, Contact, Footer,  Blog , BlogPage,  Profile,MyResume} = useGlobalContext();

  // useEffect(() => {
   
  //     axios.get("http://localhost:5001/demo").then((data)=>{
  //       return data['data'];
  //     }).then((data)=>{

  //       console.log(data);
  //     }).catch((err)=>{
  //       console.log('oops ',err);
  //     })
  // }, [])

 
  // console.log(useGlobalContext())
  // console.log(HeightArr);

  return (
    <Router>
      

      {/* <Loadding /> */}

      <Navbar />
      <Switch>

      <Route exact path="/">

        <Main /> 
      
      </Route>
      <Route exact path="/contact">
      
        <Contact />
      
      </Route>
      <Route exact path="/blog">
      
        <Blog />
      
      </Route>
      <Route exact path="/blog/:blogname">
      
        <BlogPage />
      
      </Route>
      <Route exact path="/user/:username">
      
        <Profile />
      
      </Route>
      <Route exact path="/resume">
      
      
      
      </Route>
      <Route path="/*">
      
        <h1>404 Page Not Found</h1>
      
      </Route>
      </Switch>

      
      {/* </Switch> */}
      <Footer />
    </Router>
  );
}




export default Home;
