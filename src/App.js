import './App.css';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/jquery'
import ItemList from './Components/ItemList';
import { Switch, Route } from 'react-router-dom'
import Profile from './Components/Profile'
import Wishlist from './Components/Wishlist'
import Order from './Components/Order'
import Error from './Components/Error'
import Cart from './Components/Cart'
import CustomerSupport from './Components/CustomerSupport'
import Feedback from './Components/Feedback'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component = {ItemList} />
        <Route exact path ='/profile' component={Profile} />
        <Route exact path ='/wishlist' component={Wishlist} />
        <Route exact path ='/orders' component={Order} />
        <Route exact path ='/cart' component={Cart} />
        <Route exact path ='/support' component={CustomerSupport} />
        <Route exact path ='/feedback' component={Feedback} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
