import { Provider } from 'react-redux';
import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { store } from './core/store/store';


function App() {
  return (
      <BrowserRouter basename='/bmstu_iu5_web_frontend'>
        <Provider store={store}>
          <AppRoutes/>
        </Provider>
      </BrowserRouter>
  );
}

export default App;