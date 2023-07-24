import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './app/view/login';
import RouterPrivate from './routerPrivate';
import Index from './app/view/index';

function App() {

  function check() {
    let token: any = document.cookie;
    if (token.trim() == 'null') return false;
    else return true;
  }
  const res = check();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path='/index'
          element={
            <RouterPrivate.Index user={res}>
              <Index />
            </RouterPrivate.Index>
          } />
      </Routes>
    </div>
  );
}

export default App;
