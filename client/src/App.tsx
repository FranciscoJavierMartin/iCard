import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import Navigation from './routes/Navigation';

function App(): ReactElement {
  return (
    <>
      <Navigation />
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
