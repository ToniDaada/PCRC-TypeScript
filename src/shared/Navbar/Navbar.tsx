import './Navbar.css'
import pcrclogo from '../../assets/images/Pcrclogonav.svg'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return(  
    <div className='Navbarcontainer'>
        <div className='uppernav'>
            <div className='logo'>
             <img src={pcrclogo} alt="" />
            </div>          

                <ul className='navlinks'>
                    <li> <NavLink  style={({isActive})=> {
                      return isActive ?{color:'yellow'} :{}
                    }} to='/' >
                        Home
                         </NavLink>
                        
                        </li>
            
            
                    <li> <NavLink  to="/About"  style={({isActive})=> {
                      return isActive ?{color:'yellow'} :{}
                    }} >
                        About Us 
                         </NavLink></li>
                
            
                    <li> <NavLink  style={({isActive})=> {
                      return isActive ?{color:'yellow'} :{}
                    }} to='/Gallery'>
                        Gallery
                         </NavLink></li>
        
          
                    <li> <NavLink to="/State"  style={({isActive})=> {
                      return isActive ?{color:'yellow'} :{}
                    }}>
                        State Police
                         </NavLink></li>
               
                    <li> <NavLink to="/Emergency" style={({isActive})=>{
                      return isActive ?{color :"yellow"} :{}
                    }}>              
                  
                        Emergency Number
                         </NavLink></li>
                        <li> <NavLink to="/contact" 
                         style={({isActive})=> {
                          return isActive ?{color:'yellow'} :{}
                        }}>
                      Contact
                         </NavLink ></li>
                        <li>  <NavLink to="/Join" 
                         style={({isActive})=> {
                          return isActive ?{color:'yellow'} :{}
                        }}>
                      Join Us
                         </NavLink></li>
                         <NavLink to="/Report">
                         <Button
                        content='Report A Case'
                        
                        />
                        </NavLink>                     
                   
                </ul>

                <div className='hamburger'>
                <span className='navbar'></span>
                <span className='navbar'>
           
                </span>
                <span className='navbar'></span>
                </div>               
        </div>
        <div className='yellownav'>
        </div> 
    </div>
  )
}

export default Navbar

