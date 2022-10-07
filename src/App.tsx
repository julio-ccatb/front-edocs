import { BrowserRouter as Router } from 'react-router-dom';
import MenuComponent from './components/menu.component';
import { AuthProvider } from './context/auth.provider';
import Routes from './routes';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          {/* <MenuComponent /> */}
          <Routes />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
