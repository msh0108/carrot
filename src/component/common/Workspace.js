import { Navigate, Route, Router, Routes } from 'react-router';
import loadable from '@loadable/component';

const Modal2 = loadable(() => import('@component/common/Modal2'));

const Workspace= () => {
  return (
          <Routes>
            <Route path="modal2" element={<Modal2 />} />
          </Routes>
  );
};

export default Workspace;