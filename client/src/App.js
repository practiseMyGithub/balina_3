
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import Post from './components/pages/Post'
import Expense from './components/pages/Expenses'
import PostForm from './components/post/PostForm';
import MyProfile from './components/profile/MyProfile';
import Dashboard from './components/dashboard/Index';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/posts/new" component={PostForm} />
          <Route exact path="/expenses" component={Expense} />
          <Route exact path="/profiles/me" component={MyProfile} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
