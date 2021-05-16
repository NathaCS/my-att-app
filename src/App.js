import "./App.css";
import Footer from "./components/Footer";
import Layout from "./layout/Layout";
import { Switch, Route } from "react-router-dom";
import Overview from "./components/pages/Overview";
import Users from "./components/pages/Users";
import Signoff from "./components/pages/Signoff";
import BillingInfo from "./components/pages/BillingInfo";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <Overview />
          </Route>
          <Route path="/users" exact={true}>
            <Users />
          </Route>
          <Route path="/billinginfo" exact={true}>
            <BillingInfo />
          </Route>
          <Route path="/signoff" exact={true}>
            <Signoff />
          </Route>
        </Switch>
      </Layout>
      <Footer>Copyright @ Jonathan Yang 2021</Footer>
    </React.Fragment>
  );
}

export default App;
