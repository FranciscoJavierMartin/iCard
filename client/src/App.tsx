import React, { ReactElement } from 'react';
import Navigation from './routes/Navigation';
import { ClientLayout } from './layouts';

function App(): ReactElement {
  return (
    <ClientLayout>
      <Navigation />
    </ClientLayout>
  );
}

export default App;
