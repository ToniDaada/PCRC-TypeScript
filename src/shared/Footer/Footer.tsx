
import './Footer.css'
import instagram from '../../assets/images/yellowinstagram.svg'
import facebook from '../../assets/images/yellowfacebook.svg'
import twitter from '../../assets/images/yellowtwitter.svg'
import yellowfacebook from '../../assets/images/footerfacebook.svg'
import yellowinstagram from '../../assets/images/footerinstagram.svg'
import yellowtwitter from '../../assets/images/footertwiitter.svg'
import yellowmail from '../../assets/images/footermail.svg'
import yellowphone from '../../assets/images/yellowfootercall.svg'
import yellowlocation from '../../assets/images/yellowfooterlocation.svg'
import mailflex from '../../assets/images/yellowfootermail.svg'
const Footer = () => {
  return (
    <div className='Footercontainer'>

           <div className='yellowfooter'></div>

         <div className='mainfooter'>
            <div className='Aboutfooter'>

            <h1>About</h1>
            <br />
            <p>

             We The PCRC – Police Community Relations
            Committee – is a community policing
            organization and is a part of the Nigeria police
            force. The organization was established in 1984
            and its main objective was to increase the
            relationship with local communities and the
            police force. Subsequently, this will make
            policing in Nigerian communities more effective
            and efficient.
            </p>
            <br />
            <div className='images'>
            
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
             
              

</div>

            </div>


            <div className='Contactsfooter'>
            <h1>Contact Us</h1>
            <br />
            <div className='flexfooter'>
              <img src={yellowphone} alt="" /><p>+2348023217199, +2348023077348</p>
            </div>
            <br />
            <div className='flexfooter'>
            <img src={yellowlocation} alt="" />  <p>PCRC HALL Area H Command Head
Quarters, Ogudu Ojota, Lagos State, Nigeria</p>

            </div>
            <br />
            <div className='flexfooter'>
              <img src={mailflex} alt="" /><p>info@pcrclagosstate.org.ng</p>
            </div>
            <br />




            </div>
            <div className='quicklinksfooter'>
            
                 <h1>Quick Links</h1>
            <br />

                 <a href="">Home </a>
                 <a href="">About Us</a>
                 <a href="">Area of Study</a>
                 <a href="">Apply</a>
                 <a href="">News and Events</a>



             </div>
           <div className='Socialsfooter'>

                    <h1>Follow Us</h1>
            <br />
              <div className='Socialsfootersocials'>
              <img src={yellowfacebook} alt="" />
              <img src={yellowinstagram} alt="" />
              <img src={yellowtwitter} alt="" />
              <img src={yellowmail} alt="" />
              </div>


             </div>

         </div>


     </div>
  )
}

export default Footer