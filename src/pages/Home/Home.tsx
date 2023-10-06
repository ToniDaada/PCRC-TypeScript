import './Home.css'
import Navbar from '../../shared/Navbar/Navbar'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../shared/Footer/Footer'
import pic1 from "../../assets/images/seesomething.svg"
import pic2 from '../../assets/images/saysomething.svg'
import pic3 from '../../assets/images/callus.svg'
import pic4 from '../../assets/images/emergency1.svg'
import pic5 from '../../assets/images/emergency2.svg'
import pic6 from '../../assets/images/emergency3.svg'
import pic7 from '../../assets/images/emergency4.svg'
import pic8 from '../../assets/images/FakeHome/pic2.svg'
import H1blue from '../../shared/H1blue/H1blue'
import Button from '../../shared/Button/Button'
import { Link } from 'react-router-dom'
import Sliderheading from '../../shared/Carousel'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>

    
      
      <Sliderheading/>


        

     
<div className='container'> 

     <img src={pic8} alt="" />

</div>
      
  
      <div className='Security'>
       
        <H1blue
        content='Lagos State Security/Emergency NUmbers'
        variants='white'
        />
        <div className='UpperSecurity'>
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
        </div>

        <p>
        Listed below are the Lagos State emergency telephone numbers.
        

         Use these numbers <br /> when you need to contact any of the agencies: 
        </p>
        <br />
        <div className='LowerSecurity'>
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
            <img src={pic6} alt="" />
            <img src={pic7} alt="" />
        </div>
        
  <Link to='/Emergency' >
  <Button 
        content='See All Emergency Numbers'
        variants='whitetransparent'/>



  </Link>
    
   
         </div>
      <PCRCheadquarters/>
      <Footer/>
    </div>
  )
}

export default Home