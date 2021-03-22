import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
import SearchBlog from './components/SearchBlog';
import Contact from './components/Contact';
import Error from './components/Error';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/:id' component={BlogDetail} />
          <Route exact path='/category/:id' component={Category} />
          <Route exact path='/search/search_title=:id' component={SearchBlog} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/error/:errorpage' component={Error} />
          <Route exact path='/:msg/error/:errorpage' component={Error} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
