import './RoadWalk.css'
import Navbar from '../../shared/Navbar/Navbar'
import H1blue from '../../shared/H1blue/H1blue'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../shared/Footer/Footer'
import pic1 from '../../assets/images/Gallerypages/RoadWalk/pic1.svg'
import pic2 from '../../assets/images/Gallerypages/RoadWalk/pic2.svg'
import pic3 from '../../assets/images/Gallerypages/RoadWalk/pic3.svg'
import pic4 from '../../assets/images/Gallerypages/RoadWalk/pic4.svg'
import pic5 from '../../assets/images/Gallerypages/RoadWalk/pic5.svg'
import pic6 from '../../assets/images/Gallerypages/RoadWalk/pic6.svg'
import pic7 from '../../assets/images/Gallerypages/RoadWalk/pic7.svg'
import pic8 from '../../assets/images/Gallerypages/RoadWalk/pic8.svg'
import pic9 from '../../assets/images/Gallerypages/RoadWalk/pci9.svg'
import pic10 from '../../assets/images/Gallerypages/RoadWalk/pic10.svg'
import pic11 from '../../assets/images/Gallerypages/RoadWalk/pic11.svg'
import pic12 from '../../assets/images/Gallerypages/RoadWalk/pic12.svg'
import pic13 from '../../assets/images/Gallerypages/RoadWalk/pic13.svg'
import pic14 from '../../assets/images/Gallerypages/RoadWalk/pic14.svg'
import pic15 from '../../assets/images/Gallerypages/RoadWalk/pic15.svg'
import pic16 from '../../assets/images/Gallerypages/RoadWalk/pic16.svg'
import pic17 from '../../assets/images/Gallerypages/RoadWalk/pic17.svg'
import pic18 from '../../assets/images/Gallerypages/RoadWalk/pic18.svg'
import pic19 from '../../assets/images/Gallerypages/RoadWalk/pic19.svg'
import pic20 from '../../assets/images/Gallerypages/RoadWalk/pic20.svg'
import pic21 from '../../assets/images/Gallerypages/RoadWalk/pic21.svg'
import pic22 from '../../assets/images/Gallerypages/RoadWalk/pic22.svg'
import pic23 from '../../assets/images/Gallerypages/RoadWalk/pic23.svg'
import pic24 from '../../assets/images/Gallerypages/RoadWalk/pic24.svg'
import pic25 from '../../assets/images/Gallerypages/RoadWalk/pic25.svg'
import Background from '../../shared/BackgroundHeading/Background'



const RoadWalk = () => {
  return (
    <div className='RoadWalk'>
      <Navbar/>
      <Background
      content='Gallery'/>
      <H1blue 
      content='Road Walk'     />
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
    <img src={pic19} alt="" />
    <img src={pic20} alt="" />
    <img src={pic21} alt="" />
    <img src={pic22} alt="" />
    <img src={pic23} alt="" />
    <img src={pic24} alt="" />




        </div>

        <div className='hugeimage'>
<img src={pic25} alt="" />

        </div>
        <PCRCheadquarters/>
     <Footer/>

    </div>
  )
}

export default RoadWalk