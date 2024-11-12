import { Provider } from 'react-redux';
import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { store } from './core/store/store';
import { useEffect } from 'react';

const {invoke} = (window as any).__TAURI__.tauri;

function App() {
  useEffect(() => {
    invoke('tauri', {cmd: 'create'})
        .then((response: any) => console.log(response))
        .catch((error: any) => console.log(error));
    return () => {
        invoke('tauri', {cmd: 'close'})
            .then((response: any) => console.log(response))
            .catch((error: any) => console.log(error));
    }
  }, []);
  
  return (
      <BrowserRouter basename='/bmstu_iu5_web_frontend'>
        <Provider store={store}>
          <AppRoutes/>
        </Provider>
      </BrowserRouter>
  );
}

export default App;