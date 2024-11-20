import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel }  from 'react-responsive-carousel'
import Background from './BackgroundHeading/Background';

const Sliderheading = () => {
  return (
    <div>
<Carousel
// width={'100%'}
centerMode={true}
centerSlidePercentage={100}
stopOnHover={false}


autoPlay={true}
interval={2000}
showArrows={false}
showStatus={false}
showThumbs={false}
infiniteLoop={true}
dynamicHeight={false}
>
<div >
                <Background
                content='Welcome To PCRC'
                />             
                </div>
                <div>
                   <Background
                   content="Welcome To PCRC"
                   variants="conference"
/>                  
                </div>
                <div >
                 <Background
                 content="Welcome To PCRC"
                 variants="picture"
                
                 />
                   
                </div>
                <div >
                 <Background
                 content="Welcome To PCRC"
                 variants="pic1"  />
                   
                </div>
                <div >
                 <Background
                 content="Welcome To PCRC"
                 variants="pic2"                
                 />                   
               </div>      
          </Carousel>
    </div>
    )
}

export default Sliderheading
