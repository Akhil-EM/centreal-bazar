import React from 'react';                      

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'

import {BrowserRouter,
  Switch,
  Route,
  } from "react-router-dom";
  // import {Animated} from "react-animated-css";

class Router extends React.Component {
  constructor(props){
    super(props);
     
    this.state={
 
    }    
  }
   


  

  

render() {     
  
  return (          
             <BrowserRouter>
                 <Header ></Header>           
                 <Switch>
                    <Route  exact path="/">
                        <Home></Home>
                    </Route>              
                 </Switch>
             <Footer></Footer>
             </BrowserRouter>         
    );                                          
 }                                              
 }                                              
                                                
                                                
export default Router;     