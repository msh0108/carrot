import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Top from "./component/page/Top";
import Bottom from "./component/page/Bottom";
import Modal from "./component/page/Modal";
import Modal2 from "./component/page/Modal2";
import Talk from "./component/common/Talk";
import Talk2 from "./component/page/Talk2";
import Talk3 from "./component/common/Talk3";
import Bell from "./component/page/Bell";
import Mypost from "./component/page/Mypost";
import './App.css';

function App() {
  return (
    <body>
      <Top />
    <Mypost />
    <Bottom/>
    </body>
  );
}

export default App;


