import './App.css';
import Homepage from './components/Homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap'
import Logo from "./assets/0001.jpg"
import styles from './navbar.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';
import Whoweare from './components/whoweare/Whoweare';
import Ourmission from './components/ourmission/Ourmission';

function App() {
  useEffect(() => {
    document.title = "ATA Construcoes"
 }, []);
  return (
    
      <Router>
        <div className="App">
        <Navbar bg="white" variant="white" style={{position:"fixed",width:"100%",top:"0",zIndex:"10"}}>
            <Container>
            <Navbar.Brand className={styles.navlinks}>
                <Link to="/"><img alt="LOGO" src={Logo} width="70" height="50" className="d-inline-block align-top"/></Link>
            </Navbar.Brand>
            <Navbar.Brand className={styles.navlinks}><Link to="/whoweare">WHO WE ARE/CONTACT</Link></Navbar.Brand>
           <Navbar.Brand className={styles.navlinks}> <Link to="/ourmission">OUR MISSION</Link></Navbar.Brand>   
            </Container>
            </Navbar>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/whoweare" component={Whoweare}/>
            <Route path="/ourmission" component={Ourmission}/>
          </Switch>
         </div>
    </Router>
   
  );
}

export default App;
