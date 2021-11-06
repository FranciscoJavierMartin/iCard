import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
import Navigation from './routes/Navigation';
import { AuthProvider } from './contexts';

function App(): ReactElement {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
