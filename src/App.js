import React, { useEffect, useState } from "react";
import { CssBaseline } from "@material-ui/core";

import Navi from "./components/Navi";
import Body from "./components/Body";

function App() {
  
  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <Navi></Navi>
      <Body></Body>
    </React.Fragment>
  );
}
export default App;
