import { BrowserRouter as Router } from 'react-router-dom';
import MenuComponent from './components/menu.component';
import { AuthProvider } from './context/auth.provider';
import Routes from './routes';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className='bg-gradient-to-tr from-gray-300 to-sky-200 h-screen grid place-items-center'>
            {/* <MenuComponent /> */}
            <Routes />
          </div>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
