import Routes from './routes';
import SideBarComponent from './components/SideBar.component';
import { useContext } from 'react';
import AuthContext from './context/auth.provider';
import LogInPage from './pages/auth/login';

function App() {
  // const navigate = useNavigate();

  const { credentials } = useContext(AuthContext);
  if (credentials.accessToken === '' && credentials.refreshToken == '')
    return <LogInPage />;

  return (
    <>
      {/* <MenuComponent /> */}
      <Routes />
    </>
  );
}

export default App;
