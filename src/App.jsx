
import { useEffect } from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContext } from './hooks/themeContext';

import 'antd/dist/antd.min.css'     // antd library css 
import './assets/styles/css/lib.css'   // bootstrap utilities
import './assets/styles/app.scss'   // app.scss which container global design code





// wrapper
import Main from './pages/main';

function App() {
  const {theme} = useContext(ThemeContext)

  useEffect(()=>{
    document.body.classList.add(theme)
  },[theme])

  
  return (
    <div className={`App ${theme} `}>
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
