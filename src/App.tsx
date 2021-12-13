import { BrowserRouter as Router } from 'react-router-dom';
import MenuComponent from './components/menu.component';
import Routes from './routes';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <MenuComponent />
          <Routes />
        </div>
      </Router>
    </>
  );
}

export default App;
