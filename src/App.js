import React from 'react';
import { useState } from "react";
import styled from "styled-components";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Top from "./component/common/Top";
import Bottom from "./component/common/Bottom";
import Modal from "./component/common/Modal";
import Talk from "./component/common/Talk";
import Talk2 from "./component/common/Talk2";
import Talk3 from "./component/common/Talk3";
import Bell from "./component/common/Bell";
import Mypost from "./component/mypage/Mypost";
import './App.css';

function App() {
  return (
    <body>
      <Top />
    <Talk2 />
    <Bottom/>
    </body>
  );
}

export default App;


