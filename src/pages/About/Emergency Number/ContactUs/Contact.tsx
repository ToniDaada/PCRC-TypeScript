
import './Contact.css'
import Navbar from '../../../../shared/Navbar/Navbar'
import leftcontact from '../../assets/images/leftcontact.svg'
import PCRCheadquarters from '../../../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../../../shared/Footer/Footer'
import Input from '../../../../shared/Inputs/Input'


const Contact = () => {
  return (
    <div className='contactcontainer'>
        <Navbar
        />
        <div className='container'>


            <div className='contactimage'>
                <img src={leftcontact} alt="" />
            </div>
            <div className='contactforms'>
                <div className='contactinputs'>
                   <Input 
                   
                   variants='border'
                   label='FirstName'
                   type='text'
                   placeholder=''
                   />
                     <Input 
                          variants='border'
                   label='LastName'
                   type='text'
                   placeholder=''
                   />
                     <Input 
                          variants='border'
                   label='Email'
                   type='email'
                   placeholder=''
                   />
                     <Input 
                          variants='border'
                   label='Phone Number'
                   type='text'
                   placeholder=''
                   />
                   </div>

                   <br /><br /><br /><br />

             
      
      
         <Input
              variants='border'
              label='Message'
              placeholder='Write A Message'
              type='text'/>

    <br /><br /><br />

    <div className='buttoncontainer'>
        <button>
            Send
        </button>
    </div>



             </div>

       
        </div>


    <PCRCheadquarters/>
    <Footer/>
    </div>
   
  )
}

export default Contact