import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './app/view/login';
import RouterPrivate from './routerPrivate';
import Index from './app/view/index';
import RegisterUser from './app/view/registerUser';
import RegisterProduto from './app/view/registerProduto';

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
          }
        />
        <Route
          path='/user/register'
          element={
            <RouterPrivate.User user={res}>
              <RegisterUser />
            </RouterPrivate.User>
          }
        />
        <Route
          path='/user/produto'
          element={
            <RouterPrivate.Produto user={res}>
              <RegisterProduto />
            </RouterPrivate.Produto>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
