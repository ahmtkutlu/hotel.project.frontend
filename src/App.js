import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HeaderComponent from './components/common/HeaderComponent';
import FooterComponent from './components/common/FooterComponent';
import LeftMenu from './components/common/LeftMenu';
import Dashboard from './components/common/Dashboard';

import UserList from './components/user/UserListComponent';
import UserCreate from './components/user/UserCreateComponent';
import UserDetail from './components/user/UserDetailComponent';

import HotelList from './components/hotel/HotelListComponent';
import HotelCreate from './components/hotel/HotelCreateComponent';
import HotelDetail from './components/hotel/HotelDetailComponent';

function App() {
  return (
      <Router>
          <HeaderComponent />
          <div className="row">
            <div className="col-md-2">
              <LeftMenu />
            </div>
            <div className="col-md-10">
              <div className="container">
                <Switch>
                  <Route path="/" exact component={Dashboard}></Route>
                  <Route path="/users" component={UserList}></Route>
                  <Route path="/add-user/:id" component={UserCreate}></Route>
                  <Route path="/user-detail/:id" component={UserDetail}></Route>
                  <Route path="/hotel" component={HotelList}></Route>
                  <Route path="/add-hotel/:id" component={HotelCreate}></Route>
                  <Route path="/hotel-detail/:id" component={HotelDetail}></Route>
                </Switch>
            </div>
            </div>
          </div>
          <FooterComponent/>
      </Router>
  );
}

export default App;
