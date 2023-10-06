import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./pages/About/Emergency Number/ContactUs/Contact";
import JoinNow from "./pages/JoinNow/JoinNow";
import Gallery from "./pages/Gallery/Gallery";
import ReportACase from "./pages/ReportACase/ReportACase";
import State from "./pages/State/State";
import Sanitaion from "./pages/GallerySanitaion/Sanitaion";
import Church from "./pages/GalleryChurch/Church";
import About from "./pages/About/About";
import GalleryJamaat from "./pages/GalleryJamaat/GalleryJamaat";
import RoadWalk from "./pages/GalleryRoadWalk/RoadWalk";
import Emergency from "./pages/About/Emergency Number/Emergency";
import Sport from "./pages/GallerySport/Sport";



const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/join",
    element: <JoinNow/>,
  },
  {
    path :"/Gallery",
    element:<Gallery/>
    
  },
  {
    path :"/Join",
    element:<JoinNow/>
    
  },  {
    path :"/Report",
    element:<ReportACase/>
    
  } , {
    path :"/State",
    element:<State/>
    
  }  ,
  {
    path :"/Church",
    element:<Church/>
    
  }  
  ,{
    path:'/About',
    element:<About/>
  }
  ,{
    path:'/Jumaat',
    element:<GalleryJamaat/>
  }
  ,{
    path:'/RoadWalk',
    element:<RoadWalk/>
  },
  {
    path:"/Sanitation",
    element:<Sanitaion/>
  }
  ,
  {
    path:"/Sport",
    element:<Sport/>
  }
  ,
  {
    path:"/Emergency",
    element:<Emergency/>
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
 
 <RouterProvider router={router}/>
    
  
    
    
    {/* <App/> */}
  

 

  </React.StrictMode>,
)
