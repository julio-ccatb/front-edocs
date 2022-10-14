import { BrowserRouter as Router } from 'react-router-dom';
import MenuComponent from './components/menu.component';
import { AuthProvider } from './context/auth.provider';
import Routes from './routes';
import { QueryClientProvider, QueryClient } from 'react-query';

const _QueryClient = new QueryClient();

function App() {
  return (
    <>
      <Router>
        <QueryClientProvider client={_QueryClient}>
          <AuthProvider>
            {/* <MenuComponent /> */}
            <Routes />
          </AuthProvider>
        </QueryClientProvider>
      </Router>
    </>
  );
}

export default App;
