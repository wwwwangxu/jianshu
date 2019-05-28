import React from 'react';
import Header from './common/header/index'
import store from './story'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import GlobalStyle from './style'
import GlobalFontStyle from './statics/iconfont/iconfont'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <GlobalFontStyle />
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/write' component={Write} />
            <Route path='/detail/:id' exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
