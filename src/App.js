import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Top from "./components/page/Top";
import Bottom from "./components/page/Bottom";
import Modal from "./components/page/Modal";
import Modal2 from "./components/page/Modal2";
import Talk from "./components/common/Talk";
import Talk2 from "./components/page/Talk2";
import Talk3 from "./components/common/Talk3";
import Bell from "./components/page/Bell";
import Mypost from "./components/page/Mypost";
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


