import React from 'react';
import './App.css';

import _ from 'lodash';
import store from '../store/store';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';

const App = () => {
    const { contacts } = store.getState()

    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} />
        <Main />
      </div>
    );
}

export default App;
