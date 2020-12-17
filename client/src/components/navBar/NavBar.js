import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, useHistory} from 'react-router-dom';
import './NavBar.css'
import { IconContext } from 'react-icons';
import { SideNav } from '../sideNav/SideNav';
import {  logout, getNewAccessToken, authenticate_access  } from '../../api/auth';
import jwt from "jsonwebtoken";
import moment from 'moment'
import { Modal, Button } from 'antd';
import LocalStorageService from '../../utils/localstorage';
import logo from './pblogo.png'




function Navbar() {
  let history = useHistory();

  const [sidebar, setSidebar] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);
  const handleOk = () => {
    getNewAccessToken().then((data) => {
      LocalStorageService.clearData("token");
      authenticate_access(data, () => {
        setIsModalVisible(false);
      });
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const jwtToken= ()=>{
    if(LocalStorageService.getData('token')){
      return true;
    }
  } 
  function expire() {
    const token = LocalStorageService.getData('token');
    if (token) {
      jwt.verify(token, 'abcdef',  function (err, decoded) {
        if (err) {
          logout(() => {
            history.push("/");
          });
          window.location.reload();
        } else {
          let tokenExpiration = decoded.exp;
          let tokenExpirationTimeInSeconds =
            tokenExpiration - moment(Math.floor(Date.now() / 1000));
          if (tokenExpiration && tokenExpirationTimeInSeconds === 20) {
            setIsModalVisible(true);
          }
    
        }
      });
    }
  }

  setTimeout(() => {
    setInterval(() => {
      expire();
    }, 5000);
  }, 10000);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
         <div className='navbar'>
         {(LocalStorageService.getData('token')) && (
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
         )}
        <ul class="main-menu">
        <li>
        <img
          src={logo}
          alt=""
          class="logo"
        />
        </li>
        
          {!(LocalStorageService.getData('token')) && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
        </ul>
        <ul class="right-menu">
          {!(LocalStorageService.getData('token')) && (
            <React.Fragment>
              <li id="log">
                <Link to="/login">Login</Link>
              </li> 
              &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
              <li id="reg">
                <Link to="/register">Register</Link>
              </li>
            </React.Fragment>
          )}
          {(LocalStorageService.getData('token')) && (
            <React.Fragment>
              <li id="log">
                <span
                  style={{ cursor: "pointer", color: "#f5f5f5" }}
                  onClick={() =>
                    logout(() => {
                      history.push("/");
                    })
                  }
                >
                  Logout
                </span>
              </li>
              <li id="reg">
                <span>
                  <Link
                    to="/user/dashboard"
                    style={{ cursor: "pointer", color: "#f5f5f5" }}
                  >
                    Dashboard
                  </Link>
                </span>
              </li>
            </React.Fragment>
          )}
        </ul>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideNav.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Modal title="JWT expiration" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Token will expire in 20 Seconds. Click OK to refresh token</p>
      </Modal>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
