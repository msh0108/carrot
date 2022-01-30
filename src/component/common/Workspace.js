import React from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Modal from '../page/Modal';

const Workspace= () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="modal/*" element={<Modal />} />
    </Routes>
  </BrowserRouter>
  );
};

export default Workspace;