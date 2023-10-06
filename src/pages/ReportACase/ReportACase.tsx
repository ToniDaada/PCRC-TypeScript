import './ReportACase.css'
import Navbar from '../../shared/Navbar/Navbar'
import Footer from '../../shared/Footer/Footer'
import H1header from '../../shared/h1Header/H1header'
import Input from '../../shared/Inputs/Input'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Button from '../../shared/Button/Button'

const ReportACase = () => {
  return (
    <div>
            <Navbar/>
            <br />
            <H1header
            content='Report A Case'
                
                />
            <div className='ReportACase'>
              
                  <h2>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>

                <div className='inputfield'>

              
                    <form action="">

                    <Input

placeholder='Full Name (Optional)'
type='text'
 />
   <Input

placeholder='Email(Optional)'
type='email'
/>
<Input

placeholder='Phone Number(Optional)'
type='text'
/>
<br />
<Button
variants='clear'
content='Upload Images'
/>

<Button 
variants='clear'
content='Upload Videos'
/>


<br /><br />
<textarea name="" id="" placeholder='Report Case'></textarea>




                    </form>
                 
        
 

                </div>

                <Button
                content='Report Case'
                />
            </div>

            <PCRCheadquarters/>
            <Footer/>

    </div>
  )
}

export default ReportACase