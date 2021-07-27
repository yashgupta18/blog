import Home from './pages/Home'
import ArticlesList from './pages/ArticlesList'
import Article from './pages/Article'
import About from './pages/About'
import Navbar from './components/Navbar'


import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <Router>
    <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:name" component={Article} />
        <Route exact path="/articles-list" component={ArticlesList} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>

  );
}

export default App;
