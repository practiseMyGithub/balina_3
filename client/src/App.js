
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/pages/Home'
import Post from './components/pages/Post'
import Expense from './components/pages/Post'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/posts" component={Post} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/expenses" component={Expense} />
      </Switch>
    </Router>
  );
}

export default App;
