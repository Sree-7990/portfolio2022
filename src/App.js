import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import { ThemeProvider } from "styled-components";
import { Light } from "./themes.js";
import styled from "styled-components";
function App() {

  const [theme, setTheme] = useState(Light);
  // var pageHeight = window.innerHeight;

  // document.addEventListener("scroll", function () {
  //   document.body.scrollTop = 0;
  // });

  // document.addEventListener("wheel", function (e) {
  //   //console.log(e.deltaY);
  //   if (e.deltaY > 0) {
  //     scrollDown();
  //   } else {
  //     scrollUp();
  //   }
  // });

  // function scrollDown() {
  //   document.body.style.transform =
  //     "translate3d(0px, -" + pageHeight + "px, 0px)";
  // }

  // function scrollUp() {
  //   document.body.style.transform = "translate3d(0px, 0px, 0px)";
  // }
  return (
    <ThemeProvider theme={Light}>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route>404 Error</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
