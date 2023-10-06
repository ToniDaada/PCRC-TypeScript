
import './Sport.css'
import Navbar from '../../shared/Navbar/Navbar'
import Background from '../../shared/BackgroundHeading/Background'
import H1blue from '../../shared/H1blue/H1blue'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../shared/Footer/Footer'
import pic1 from '../../assets/images/Gallerypages/Sport/Pic1.svg'
import pic2 from '../../assets/images/Gallerypages/Sport/pic2.svg'
import pic3 from '../../assets/images/Gallerypages/Sport/pic3.svg'
import pic4 from '../../assets/images/Gallerypages/Sport/pic4.svg'
import pic5 from '../../assets/images/Gallerypages/Sport/pic5.svg'
import pic6 from '../../assets/images/Gallerypages/Sport/pic6.svg'
import pic7 from '../../assets/images/Gallerypages/Sport/pic17.svg'
import pic8 from '../../assets/images/Gallerypages/Sport/pic8.svg'
import pic9 from '../../assets/images/Gallerypages/Sport/pic9.svg'
import pic10 from '../../assets/images/Gallerypages/Sport/pic10.svg'
import pic11 from '../../assets/images/Gallerypages/Sport/pic11.svg'
import pic12 from '../../assets/images/Gallerypages/Sport/pic12.svg'
import pic13 from '../../assets/images/Gallerypages/Sport/pic13.svg'
import pic14 from '../../assets/images/Gallerypages/Sport/pic14.svg'
import pic15 from '../../assets/images/Gallerypages/Sport/pic15.svg'
import pic16 from '../../assets/images/Gallerypages/Sport/pic16.svg'
import pic17 from '../../assets/images/Gallerypages/Sport/pic17.svg'
import pic18 from '../../assets/images/Gallerypages/Sport/pic18.svg'

import pic20 from '../../assets/images/Gallerypages/Sport/pic20.svg'


const Sport = () => {
  return (
    <div className='Sport'>
        <Navbar/>
        <Background
        content='Gallery'
        
        />
        <H1blue 
        content='Sports Day'/>
          <div className='container'>

<img src={pic1} alt="" />
<img src={pic2} alt="" />
<img src={pic3} alt="" />
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




    </div>
    
    <div className='hugeimage'>
<img src={pic20} alt="" />

        </div>
        <PCRCheadquarters/>
        <Footer/>



    </div>
  )
}

export default Sport