import './About.css'
import Navbar from '../../shared/Navbar/Navbar'
import Background from '../../shared/BackgroundHeading/Background'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../shared/Footer/Footer'


const About = () => {
  return (
    <div className='About'>
        <Navbar/>
        <Background 
        content='About PCRC Lagos'/>
        <div className='Abouttext'>
        <p>
        We The PCRC – Police Community Relations Committee – is a community policing organization and is a part of the Nigeria police force. The organization was established in 1984 and its main objective was to increase the relationship with local communities and the police force. Subsequently, this will make policing in Nigerian communities more effective and efficient.
<br /><br />
PCRC follows a similar structure as the Nigerian police force. Hence, they have area commands, divisions, zonal commands, national components, and state commands amongst others. While PCRC is present in many Nigerian states, the organization is most renowned in Lagos State.
<br /><br />
Since the organization is all about police and community relationship, officers are mainly trained on how to show better conduct and countenances when dealing with locals. They engage with the community to source useful information that the police can use in keeping the place safe.
<br /><br/>
For example, the PCRC carries out campaigns in communities to warn youths against cultism and drug abuse. They often hold public lectures, training, town hall meetings, and a lot others to sensitize the community about the need to refrain from crime.
        </p>
        </div>

        <br />
        <PCRCheadquarters/>
        <Footer/>




    </div>
  )
}

export default About