import { HeaderComponent } from '../components/utils/header.component';
import moodleSVG from '../public/Moodle-logo.svg';
import pfSenseSVG from '../public/PfSense_logo.svg';
import { useNavigate } from 'react-router';
import SideMenuComponent from '../components/utils/sideMenu.component';

const HomeDashboardComponent = () => {
  const navigate = useNavigate();

  return (
    <div className='overflow-hidden'>
      <HeaderComponent />
      <SideMenuComponent />
      <section className='m-6 p-6 rounded-md justify-between bg-slate-100 flex flex-col'>
        <h2 className='font-semibold text-center text-2xl text-slate-700 capitalize mb-5 align-middle'>
          Platforms
        </h2>
        <div className='w-full flex'>
          <div className='flex justify-center space-x-4 w-full'>
            <div className='rounded-lg shadow-lg bg-white w-1/4 h-80 '>
              <a href='#!'>
                <img
                  className='rounded-t-lg p-5 h-1/2'
                  src={moodleSVG}
                  alt=''
                />
              </a>
              <div className='p-6 flex flex-col '>
                <h5 className='text-gray-900 text-xl font-medium mb-2'>
                  Moodle
                </h5>

                <button
                  onClick={() => navigate('/moodle')}
                  type='button'
                  className='block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Manage
                </button>
              </div>
            </div>
            <div className='rounded-lg shadow-lg bg-white w-1/4  h-80'>
              <a href='#!'>
                <img
                  className='rounded-t-lg p-5 bg-blue-400 h-1/2'
                  src={pfSenseSVG}
                  alt=''
                />
              </a>
              <div className='p-6 flex flex-col '>
                <h5 className='text-gray-900 text-xl font-medium mb-2'>
                  PfSense
                </h5>

                <button
                  onClick={() => navigate('/pfsense')}
                  type='button'
                  className='block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDashboardComponent;
