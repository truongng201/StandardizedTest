import React from "react";
import SignInAndOut from "./auth/SignInAndOut";
import Mainpage from "./Views/Mainpage/Mainpage";
import "./App.css";
import ToeflPage from "./Views/ToeflPage";
import IeltsPage from "./Views/IeltsPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SatPage from "./Views/SatPage";
import ActPage from "./Views/ActPage";
import SectionPage from "./Views/SectionPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/Ielts" component={IeltsPage} />
          <Route exact path="/Toefl" component={ToeflPage} />
          <Route exact path="/SAT" component={SatPage} />
          <Route exact path="/ACT" component={ActPage} />
          <Route
            exact
            path="/:currentTest/:currentTestNumb/:currentSection/:QuestionNumb"
            component={SectionPage}
          />
          <Route exact path="/login" component={SignInAndOut} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
