import './Church.css'

import Navbar from '../../shared/Navbar/Navbar'
import Background from '../../shared/BackgroundHeading/Background'
import H1blue from '../../shared/H1blue/H1blue'
import Footer from '../../shared/Footer/Footer'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import pic1    from '../..//assets/images/Gallerypages/ChurchService/pic1.svg' 
import pic2    from '../..//assets/images/Gallerypages/ChurchService/pic2.svg'
import pic3    from '../..//assets/images/Gallerypages/ChurchService/pic3.svg'
import pic4    from '../..//assets/images/Gallerypages/ChurchService/pic4.svg'
import pic5    from '../..//assets/images/Gallerypages/ChurchService/pic5.svg'
import pic6   from '../..//assets/images/Gallerypages/ChurchService/pic6.svg'
import pic7   from '../..//assets/images/Gallerypages/ChurchService/pic7.svg'
import pic8   from '../..//assets/images/Gallerypages/ChurchService/pic8.svg'
import pic9   from '../..//assets/images/Gallerypages/ChurchService/pic9.svg'
import pic10   from '../..//assets/images/Gallerypages/ChurchService/pic10.svg'
import pic11   from '../..//assets/images/Gallerypages/ChurchService/pic11.svg'
import pic12   from '../..//assets/images/Gallerypages/ChurchService/pic12.svg'
import pic13 from '../../assets/images/Gallerypages/ChurchService/pic13.svg'

const Church = () => {
  return (
    <div className='Church'>

        <Navbar/>
        <Background
        content='Gallery'
        
        />
           <H1blue
        content='Church Service'/>


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

        </div>
        <div className='hugeimage'>
            <img src={pic13} alt="" />
        </div>
     
<PCRCheadquarters/>
<Footer/>

    </div>
  )
}

export default Church