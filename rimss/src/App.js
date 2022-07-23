import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import SiteRoutes from './router';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <SiteRoutes></SiteRoutes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
