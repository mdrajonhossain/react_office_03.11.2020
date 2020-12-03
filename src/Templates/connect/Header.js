
import './Header.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useState } from 'react';

function Header() {
  const [profile, setProfile] = useState(false);
 


  function handleClick(){
    setProfile(!profile)
  }



  return (
    <div className="x">
      
        <nav className="navbar navbar-light">
        <a className="navbar-brand">
          <Link to={'/alpha2'} style={{textDecoration: 'none', color:'black'}}>Connect</Link>
        </a>
        
        <Link to={'/alpha2'}>
          <img src="https://bd.freeli.io/images/Workfreeli_logo_full_connect.png" className="image"/>        
        </Link>


            <form className="form-inline">                                
                <img src="https://wfss001.freeli.io/profile-pic/Photos/78717350_440983756854636_1678577939169411072_n@1592225295107.jpg" className="userimage"/>

             {profile ? 
             <img onClick={handleClick} style={{cursor:"pointer"}} src="https://bd.freeli.io/images/basicAssets/Down_Chevron.svg" className="imsage_routed"/>
             : 
                <img onClick={handleClick} style={{cursor:"pointer"}} src="https://bd.freeli.io/images/basicAssets/Down_Chevron.svg" className="imsage"/>
              }       

            </form>

{profile ? 
        <div className="handleClick" id="handlehide" style={{display:  profile ? 'block' : 'none' }}>
            <div className="handleClickbox">
                <ul>                
                    <li>OHS Global Inc.</li>
                    <li className='username'>rajonhossaindhaka@gmail.com</li>
                        <label class="switch">
                            <input type="checkbox"/> 
                            <span class="slider round"><div className="dx">ITL Team</div></span>
                        </label>
                        <br/>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"><div className="dx">Test Team</div></span>
                        </label>
                        <br/>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"><div className="dx">abc</div></span>
                        </label>
                    <li>Change Password</li>
                </ul>
            </div>
            <div className="logout"><Link to="/">Sign out</Link></div>
        </div>

: ""}





        </nav>
    </div>
  );
}

export default Header;
