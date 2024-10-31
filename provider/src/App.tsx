import { HashRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';

function App() {
  return (
      <HashRouter>
          <AppRoutes/>
      </HashRouter>
  );
}

export default App;