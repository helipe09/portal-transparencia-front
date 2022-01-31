import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';
import Blog from './pages/blog/blog';
import Units from './pages/unit/Units';
import SingleUnit from './pages/unit/SingleUnit';
import Post from './pages/post/post';
import UnitCovid from './pages/unitCovid/UnitsCovid';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog-de-compliance/:slug' component={Post} />
          <Route exact path='/blog-de-compliance' component={Blog} />
          <Route exact path='/unidades/:id' component={SingleUnit} />
          <Route exact path='/unidades' component={Units} />
          <Route exact path='/unidades-covid-19' component={UnitCovid} />
          <Route exact path='/unidades/contratos-vingentes' component={Blog}/>
          <Route exact path='/unidades/contratos-encerrados' component={Blog}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
