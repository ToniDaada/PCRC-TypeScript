
import'../GalleryChurch/Church.css'
import Navbar from '../../shared/Navbar/Navbar'
import Background from '../../shared/BackgroundHeading/Background'
import H1blue from '../../shared/H1blue/H1blue'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../shared/Footer/Footer'
import pic1 from '../../assets/images/Gallerypages/JamaatService/pic1.svg'
import pic2 from '../../assets/images/Gallerypages/JamaatService/pic2.svg'
import pic3 from '../../assets/images/Gallerypages/JamaatService/pic3.svg'
import pic4 from '../../assets/images/Gallerypages/JamaatService/pic4.svg'
import pic5 from '../../assets/images/Gallerypages/JamaatService/pic5.svg'
import pic6 from '../../assets/images/Gallerypages/JamaatService/pic6.svg'
import pic7 from '../../assets/images/Gallerypages/JamaatService/pic7.svg'
import pic8 from '../../assets/images/Gallerypages/JamaatService/pic8.svg'
import pic9 from '../../assets/images/Gallerypages/JamaatService/pic9.svg'
import pic10 from '../../assets/images/Gallerypages/JamaatService/pic10.svg'
import pic11 from '../../assets/images/Gallerypages/JamaatService/pic11.svg'
import pic12 from '../../assets/images/Gallerypages/JamaatService/pic12.svg'





const GalleryJamaat = () => {
  return (
    <div  className='Church'>
        <Navbar/>
        <Background
        content='Gallery'/>
        <H1blue
        content='Jamaat Service'/>
        <div className='container'>
                <img src={pic1} alt="" />
                <img src={pic2 } alt="" />
                <img src={pic3 } alt="" />
                <img src={pic4 } alt="" />
                <img src={pic5 } alt="" />
                <img src={pic6 } alt="" />
                <img src={pic7 } alt="" />
                <img src={pic8 } alt="" />
                <img src={pic9 } alt="" />
                <img src={pic10 } alt="" />
                <img src={pic11 } alt="" />
                <img src={pic12 } alt="" />


        </div>
        <PCRCheadquarters/>
        <Footer/>



    </div>
  )
}

export default GalleryJamaat