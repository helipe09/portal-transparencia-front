import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';
import Blog from './pages/blog/blog';
import Units from './pages/unit/Units';
import SingleUnit from './pages/unit/SingleUnit';
import Post from './pages/post/post';
import UnitCovid from './pages/unitCovid/UnitsCovid';
import InvalidUnit from './pages/unit/InvalidUnit';
import UnitInvalidCovid from './pages/unitCovid/UnitsInvalidCovid';
import FinishedProjects from './pages/finishedProjects/FinishedProjects';
import ValidUnit from './pages/unit/ValidUnit';
import ValidProjects from './pages/validProjects/ValidProjects';

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
          <Route exact path='/unidades-gerenciadas' component={ValidUnit} />
          <Route exact path='/unidades-gerenciadas/:id' component={ValidProjects} />
          <Route exact path='/unidades-covid' component={UnitCovid} />
          <Route exact path='/contratos-encerrados-covid' component={UnitInvalidCovid} />
          <Route exact path='/projetos-concluidos' component={InvalidUnit}/>
          <Route exact path='/projetos-concluidos/:id' component={FinishedProjects}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
