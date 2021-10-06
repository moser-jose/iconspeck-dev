import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {StateSpeckContext} from './contexts/SpeckContext'
import {
  faSun,
  faMoon,
  faSearch,
  faClone
}
  from '@fortawesome/free-solid-svg-icons'
/* import { faClone } from '@fortawesome/free-regular-svg-icons'; */
library.add(fab,
  faSun,
  faMoon,
  faSearch,
  faClone
)
ReactDOM.render(
  <React.StrictMode>
    <StateSpeckContext>
      <App />
    </StateSpeckContext>
  </React.StrictMode>,
  document.getElementById('root')
);
