import './State.css'
import Navbar from '../../shared/Navbar/Navbar'
import PCRCheadquarters from '../../shared/ProposedPrcHeadquaters/PCRCheadquarters'
import Footer from '../../shared/Footer/Footer'

const State = () => {
  return (
    <div className='Statecontainer'>
            <Navbar  />
         

            <div className='Statetext'>
                <h1>
                Lagos State Police Command
                </h1>
                <br /><br />
                <p>
                    <span>Lagos State Police Command</span> is the Command of the Nigerian Police Force responsible for law wnforcement
                    and crime preventioni in the State. The current Commissioner of the Police State Command is Mr Fatai
                    Owoseni. The Lagos State police command has thirteen(13) Area Commands and one hundred and seven(107)
                    Police Divisions(Police Stations)
                </p>


            </div>


            <br /><br />

            <div className='StateAreacontainer'>
                   <div className='Area'>
                    <p>Area A - Lagos Island</p>

                   </div>
                   <div className='Area'>
                    <p>Area B - Apapa </p>

                   </div>
                   <div className='Area'>
                    <p>Area C - </p>

                   </div>
                   <div className='Area'>
                    <p>Area D – Mushin</p>

                   </div>
                   <div className='Area'>
                    <p>Area E – Festac</p>

                   </div>
                   <div className='Area'>
                    <p>Area F – Ikeja</p>

                   </div>
                   <div className='Area'>
                    <p>Area G – Ogba</p>

                   </div>
                   <div className='Area'>
                    <p>Area H – Ogudu</p>

                   </div>
                   <div className='Area'>
                    <p>Area J – Elomoro</p>

                   </div>
                   <div className='Area'>
                    <p>Area K – Morogbo</p>

                   </div>
                   <div className='Area'>
                    <p>Area L – Ilashe</p>

                   </div>
                   <div className='Area'>
                    <p>Area M – Idimu</p>

                   </div>
                   <div className='Area'>
                    <p>Area N – Ijede</p>

                   </div>
                   



            </div>

            <div className='Statetext'>
            <h1>Ranks in the Police Force</h1>


            </div>

            <div className='StateAreacontainer'>
            <div className='Area'>
                    <p>Inspector General</p>

                   </div>
                   <div className='Area'>
                    <p>Deputy Inspector G.</p>

                   </div>
                   <div className='Area'>
                    <p>Assistant Inspector G.</p>

                   </div>
                   <div className='Area'>
                    <p>Commissioner</p>

                   </div>
                   <div className='Area'>
                    <p>Deputy Commissioner</p>

                   </div>
                   <div className='Area'>
                    <p> Assistant Commissioner</p>

                   </div>
                   <div className='Area'>
                    <p>Chief Superintendent </p>

                   </div>
                   <div className='Area'>
                    <p> Superintendent</p>

                   </div>
                   <div className='Area'>
                    <p>Deputy Superintendent </p>

                   </div>
                   <div className='Area'>
                    <p>Assistant Superintendent </p>

                   </div>
                   <div className='Area'>
                    <p>Inspector </p>

                   </div>
                   <div className='Area'>
                    <p> Sergeant major</p>

                   </div>
                   <div className='Area'>
                    <p>Corporal </p>

                   </div>
                   <div className='Area'>
                    <p>Lance Corporal </p>

                   </div>
                   <div className='Area'>
                    <p>Constable </p>

                   </div>
                  
                 


            </div>





            <PCRCheadquarters/>
            <Footer/>



    </div>
  )
}

export default State