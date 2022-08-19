import Navbar from './Component/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Course from './Component/Course'
import Blog from './Component/Blog'
import Error from './Component/Error'
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/About' component={About}></Route>
        <Route exact path='/Contact' component={Contact}></Route>
        <Route exact path='/Blog' component={Blog}></Route>
        <Route exact path='/Course' component={Course}></Route>
        <Route component={Error}></Route>
      </Switch>


    </>
  );
}

export default App;
