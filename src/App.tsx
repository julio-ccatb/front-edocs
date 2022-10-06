import { BrowserRouter as Router } from 'react-router-dom';
import MenuComponent from './components/menu.component';
import Routes from './routes';

function App() {
  return (
    <>
      <Router>
        <div className='bg-gradient-to-tr from-gray-300 to-sky-200 h-screen grid place-items-center'>
          {/* <MenuComponent /> */}
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
