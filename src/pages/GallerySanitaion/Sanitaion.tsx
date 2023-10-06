import '../../pages/GalleryChurch/Church.css'
import Navbar from '../../shared/Navbar/Navbar'
import Background from '../../shared/BackgroundHeading/Background'
import H1blue from '../../shared/H1blue/H1blue'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../shared/Footer/Footer'
import pic1 from '../../assets/images/Gallerypages/Sanitation/pic1.svg'
import pic2 from '../../assets/images/Gallerypages/Sanitation/pic2.svg'
import pic3 from '../../assets/images/Gallerypages/Sanitation/pic3.svg'
import pic4 from '../../assets/images/Gallerypages/Sanitation/pci4.svg'
import pic5 from '../../assets/images/Gallerypages/Sanitation/pic5.svg'
import pic6 from '../../assets/images/Gallerypages/Sanitation/pic6.svg'
import pic7 from '../../assets/images/Gallerypages/Sanitation/pic7.svg'
import pic8 from '../../assets/images/Gallerypages/Sanitation/pic8.svg'
import pic9 from '../../assets/images/Gallerypages/Sanitation/pic9.svg'
import pic10 from '../../assets/images/Gallerypages/Sanitation/pic10.svg'
import pic11 from '../../assets/images/Gallerypages/Sanitation/pic11.svg'
import pic12 from '../../assets/images/Gallerypages/Sanitation/pic12.svg'
import pic13 from '../../assets/images/Gallerypages/Sanitation/pic13.svg'
import pic14 from '../../assets/images/Gallerypages/Sanitation/pic14.svg'
import pic15 from '../../assets/images/Gallerypages/Sanitation/pic15.svg'
import pic16 from '../../assets/images/Gallerypages/Sanitation/pic16.svg'
import pic17 from '../../assets/images/Gallerypages/Sanitation/pic17.svg'
import pic18 from '../../assets/images/Gallerypages/Sanitation/pic18.svg'

const Sanitaion = () => {
  return (
    <div className='RoadWalk'>
<Navbar/>
<Background
content='Gallery'
/>

<H1blue
content='Sanitation Day'
/>
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

  
 <PCRCheadquarters/>
 <Footer/>



    </div>
  )
}

export default Sanitaion