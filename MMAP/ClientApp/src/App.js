import React from 'react';

import DrawerLeft from './components/DrawerLeft';
import store from './store/DrawerStore';

export default function App() {
  return (
    <DrawerLeft store={store} />
  );
}
