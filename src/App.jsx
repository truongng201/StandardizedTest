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
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import Loading from "./components/Loading";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth))
    return (
      <div>
        <Loading></Loading>
      </div>
    );

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
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
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
