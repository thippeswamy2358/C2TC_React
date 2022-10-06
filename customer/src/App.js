import './index.css'

import {BrowserRouter as Router ,Switch,Route, BrowserRouter, } from "react-router-dom";
import NotFound from "./components/NotFound";
import CustomersList from "./components/CustomersList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddCustomer from "./components/AddCustomer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Layout.js/Navbar";
function App(){
return (
  <BrowserRouter>
  <Router>
  <div className="App">
   
    <Navbar/>
  
    <Switch>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/el" component={CustomersList} />
    <Route exact path="/add" component={AddCustomer} /> 
    <Route exact path="/customers/edit/:id" component={AddCustomer} />
    <Route exact path="*" component={NotFound}/>
  
    
      </Switch>

      
      </div>
      </Router>
      </BrowserRouter>
  
 
);
  
}
export default App;
