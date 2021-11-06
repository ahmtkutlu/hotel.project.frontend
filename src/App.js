import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import EmployeeDetailComponent from './components/EmployeeDetailComponent';

function App() {
  return (
   <div>
     <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            //step1
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/employee-detail/:id" component={EmployeeDetailComponent}></Route>
            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent/>
    </Router>
   </div>

   
  );
}

export default App;
