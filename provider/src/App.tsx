import { Provider } from 'react-redux';
import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { store } from './core/store/store';


function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <AppRoutes/>
        </Provider>
      </BrowserRouter>
  );
}

export default App;