import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';
import SiteRoutes from './router';

function App() {
  return (
    <Router>
      <SiteRoutes></SiteRoutes>
    </Router>
  );
}

export default App;
