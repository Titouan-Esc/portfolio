import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./assets/scss/style.scss";
import HomePage from "./pages/HomePage";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path = "/" exact component={HomePage}/>
        <Route path = "/apropos" component={APropos}/>
        <Route path = "/contact" component={Contact}/>
        <Route path = "/projets" component={Projets}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
