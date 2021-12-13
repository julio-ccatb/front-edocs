import profile_pic from '../public/pexels-brett-sayles-2881229.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MenuComponent = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className='top-bar'>
        <FontAwesomeIcon
          onClick={handleOpen}
          className='bars-button'
          icon={faBars}
        />
        <div className='profile'>
          <div className='profile-info'>
            <h3 className='name'>Test NAME</h3>
            <h5 className='permisson'>Administrator</h5>
          </div>

          <img className='profile-img' src={profile_pic} alt='profile-img' />
        </div>
      </div>

      <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
        <h2>Devices</h2>
        <ul className='area-list'>
          <li className='rack-list'>
            Reack #<li className='device-item'>Device 1</li>
            <li className='device-item'>Device 2</li>
          </li>
          <li className='rack-list'>
            Reack #<li className='device-item'>Device 1</li>
            <li className='device-item'>Device 2</li>
          </li>
          <li className='rack-list'>
            Reack #<li className='device-item'>Device 1</li>
            <li className='device-item'>Device 2</li>
          </li>
          <li className='rack-list'>
            Reack #<li className='device-item'>Device 1</li>
            <li className='device-item'>Device 2</li>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuComponent;
