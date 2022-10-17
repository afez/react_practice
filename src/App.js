import './App.css';
import Todo from './components/Todo';
import Todos from './components/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SinglePage from './components/page/SinglePage';
import DigitalCard from './components/DigitalCard/DigitalCard';
import HomeScreen from './components/Airbnb/HomeScreen';
import MemeHome from './components/meme/MemeHome';
import Form from './components/Form/Form';

function App() {
  return (
    <>
  
    <Router>
<Switch>
          <Route exact path="/">
            <Todos/>
          </Route>
          <Route path="/Todo/:id">
            <Todo/>
          </Route>
          <Route path="/navbar">
<SinglePage/>
          </Route>
          
          <Route path='/card'>
<DigitalCard />
          </Route>
          <Route path="/airbnb">
            <HomeScreen/>
          </Route>
          <Route path="/meme">
            <MemeHome/>
          </Route>
          <Route path="/form">
            <Form/>
          </Route>
        </Switch>

    </Router>
    </>
  );
}

export default App;
