
import './Gallery.css'
import Navbar from '../../shared/Navbar/Navbar'
import Background from '../../shared/BackgroundHeading/Background'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../shared/Footer/Footer'
import picture1 from '../../assets/images/Gallerypages/gallerypage1.svg'
import picture2 from '../../assets/images/Gallerypages/gallerypage2.svg'
import picture3 from '../../assets/images/Gallerypages/gallerypage3.svg'
import picture4 from '../../assets/images/Gallerypages/gallerypage4.svg'
import picture5 from '../../assets/images/Gallerypages/gallerypage5.svg'
import picture6 from '../../assets/images/Gallerypages/gallerypage6.svg'
import { NavLink } from 'react-router-dom'


const Gallery = () => {
  return (
    <div className='Gallerycontainer'>
        <Navbar
        />
        <Background 
        content='Gallery'
        />
        <div className='gallerypages'>
            <div className='pages'>
                <NavLink to="/">
                <img src={picture1} alt="" />
                </NavLink>
              <h1>6th PCRC LAGOS BIENNIAL CONFERENCE WEEK</h1>
              
             
            </div>
            <div className='pages'>
            <NavLink to="/Church">
                <img src={picture2} alt="" />
                </NavLink>
                <h1>Church Service</h1>
            </div> 
            <div className='pages'>
            <NavLink to="/Jumaat">
                <img src={picture3} alt="" />
            </NavLink>
                <h1>Jumaat Service</h1>
            </div> 
        
            <div className='pages'>
            <NavLink to="/RoadWalk">
                <img src={picture4} alt="" />
            </NavLink>
                <h1>Road Walk</h1>
            </div> 
            
            <div className='pages'>
            <NavLink to="/Sanitation">
                <img src={picture5} alt="" />
            </NavLink>
                <h1>Sanitation Day</h1>
            </div> 
            <div className='pages'>
           <NavLink to="/Sport">
                <img src={picture6} alt="" />

           </NavLink>
                <h1>Sports Day</h1>
            </div>


        </div>

        <PCRCheadquarters/>
        <Footer/>

      



    </div>
  )
}

export default Gallery