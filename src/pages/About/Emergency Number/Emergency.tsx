
import './Emergency.css'
import Navbar from '../../../shared/Navbar/Navbar'
import PCRCheadquarters from '../../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import pic1 from "../../../assets/images/seesomething.svg"
import pic2 from '../../../assets/images/saysomething.svg'
import pic3 from '../../../assets/images/callus.svg'
import pic4 from '../../../assets/images/emergency1.svg'
import pic5 from '../../../assets/images/emergency2.svg'
import pic6 from '../../../assets/images/emergency3.svg'
import pic7 from '../../../assets/images/emergency4.svg'
import pic8 from'../../../assets/images/emergency5.svg'
import pic9 from '../../../assets/images/emergency6.svg'
import pic10 from '../../../assets/images/emergency7.svg'
import pic11 from '../../../assets/images/emergency8.svg'
import pic12 from '../../../assets/images/emergrncy9.svg'
import pic13 from '../../../assets/images/emergency10.svg'
import pic14 from '../../../assets/images/emergency11.svg'
import pic15 from '../../../assets/images/emergency12.svg'
import pic16 from '../../../assets/images/emergency13.svg'
import  pic17   from '../../../assets/images/emergency14.svg'
import pic18   from '../../../assets/images/emergency15.svg'
import pic19   from '../../../assets/images/emergency16.svg'
import pic20   from '../../../assets/images/emergency17.svg'
import pic21   from '../../../assets/images/emergency18.svg'
import  pic22   from '../../../assets/images/emergency19.svg' 
import pic23 from '../../../assets/images/emergency20.svg'



import Footer from '../../../shared/Footer/Footer'
import H1blue from '../../../shared/H1blue/H1blue'


const Emergency = () => {
  return (
    <div >
        <Navbar/>
        <H1blue
        content='Lagos State Security/Emergency Numbers'
        variants='black'
        />
<div className='Emergency'>
    
<div className='UpperSecurity'>
            <img src={pic1} alt="" />
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
        </div>
     <p>   Listed below are the Lagos State emergency telephone numbers.
        

        Use these numbers <br /> when you need to contact any of the agencies: 
       </p>

       <br /><br />
        <div className='LowerSecurity'>
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
            <img src={pic6} alt="" />
            <img src={pic7} alt="" />
            <img src={pic8} alt="" />
            <img src={pic9} alt="" />
            <img src={pic10} alt="" />
            <img src={pic11} alt="" />
            <img src={pic12} alt="" />
            <img src={pic13} alt="" />
            <img src={pic14} alt="" />
            <img src={pic15} alt="" />
            <img src={pic16} alt="" />
            <img src={pic17} alt="" />
            <img src={pic18} alt="" />
            <img src={pic19} alt="" />
            <img src={pic20} alt="" />
            <img src={pic21} alt="" />
            <img src={pic22} alt="" />
            <img src={pic23} alt="" />

        </div>

     </div>
<PCRCheadquarters/>
<Footer/>


     
  


    </div>

     
  )
}

export default Emergency