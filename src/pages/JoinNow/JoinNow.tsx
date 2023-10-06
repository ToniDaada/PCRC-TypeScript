
import './JoinNow.css'
import Input from '../../shared/Inputs/Input'
import H1header from '../../shared/h1Header/H1header'
import Navbar from '../../shared/Navbar/Navbar'
import Footer from '../../shared/Footer/Footer'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Button from '../../shared/Button/Button'
const JoinNow = () => {
  return (
    <div className='JoinNowcontainer'>
        <Navbar
        />
        <br />
        <div className='JoinNowbody'>

           
            <H1header
           content='Become A member'
           />
        
       
        <div className='inputfield'>
                <Input

                type='text'
                placeholder='Surname'
                />
                   <Input

type='text'
placeholder='Middle Name'
/>
<Input

type='text'
placeholder='First Name'
/>
<Input

type='text'
placeholder='Occupation'
/>
<Input

type='text'
placeholder='Office Address'
/>
<Input

type='text'
placeholder='Home Address'
/>
<Input

type='text'
placeholder='Marital Status'
/>
<Input

type='text'
placeholder='Zone'
/>
<Input

type='text'
placeholder='PCRC State'
/>
<Input

type='text'
placeholder='Command'
/>
<Input

type='text'
placeholder='Division'
/>
<Input

type='text'
placeholder='Membership Status'
/>
<Input

type='text'
placeholder='Phone Number (WhatsApp)'
/><Input

type='text'
placeholder='Alternative Phone Number'
/><Input

type='email'
placeholder='Email Address'
/><Input

type='text'
placeholder='Next Of Kin'
/>
<Input

type='text'
placeholder='Phone Number'
/>
<Input

type='text'
placeholder='Relationship'
/>

        </div>
<div className='center'>
<Button
          content='Upload Image'
          variants='text-center'
          />

</div>
       
        <Button

        content='Send'
        />


   
    
        </div>
        <PCRCheadquarters/>

        <Footer/>
    </div>
  )
}

export default JoinNow