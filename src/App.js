import './App.css';
import Navbar from './navbar/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div className='content'>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route exact path="/contacts">
            <Contacts/>
         </Route>
       </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
