import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import AddBlog from './AddBlog';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/react-blog">
              <Home />
            </Route>
            <Route exact path="/blogs/add">
              <AddBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
