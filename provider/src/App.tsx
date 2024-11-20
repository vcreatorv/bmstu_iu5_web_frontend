import { Provider } from 'react-redux';
import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { store } from './core/store/store';
import { useEffect } from 'react';
import { invoke } from "@tauri-apps/api/core";
import.meta.env.VITE_DEVELOPER_MINDSET;

function App() {
  useEffect(()=>{
    invoke('tauri', {cmd:'create'})
      .then(() =>{console.log("Tauri launched")})
      .catch(() =>{console.log("Tauri not launched")})
    return () =>{
      invoke('tauri', {cmd:'close'})
        .then(() =>{console.log("Tauri launched")})
        .catch(() =>{console.log("Tauri not launched")})
    }
  }, [])
  
  return (
      <BrowserRouter>
        <Provider store={store}>
          <AppRoutes/>
        </Provider>
      </BrowserRouter>
  );
}

export default App;