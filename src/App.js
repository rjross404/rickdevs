import { Route, Switch } from "react-router-dom";
import Home from './Home/Home'
import ShervinPhotos from './ShervinPhotos/ShervinPhotos'
import CozyCup from './CozyCup/CozyCup'
import CozyCupAbout from './CozyCup/About'
import CozyCupContact from './CozyCup/Contact'
import CozyCupMenu from './CozyCup/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Route render={({location}) => (
      <Switch location={location}>
        <Route exact path="/" render={(routeProps) => 
          <Home {...routeProps} />
        } />
        <Route exact path="/cozycup" render={(routeProps) => 
          <CozyCup {...routeProps} />
        } />      
        <Route exact path="/cozycup/about" render={(routeProps) => 
          <CozyCupAbout {...routeProps} />
        } />
        <Route exact path="/cozycup/contact" render={(routeProps) => 
          <CozyCupContact {...routeProps} />
        } />
        <Route exact path="/cozycup/menu" render={(routeProps) => 
          <CozyCupMenu {...routeProps} />
        } />
        <Route exact path="/shervinphotos" render={(routeProps) => 
          <ShervinPhotos {...routeProps} />
        } />
      </Switch>           
    )} />
  )
}

export default App;
