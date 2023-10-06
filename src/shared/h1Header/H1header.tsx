import './H1header.css'

type H1headerProp={
    content : string

}
const H1header = ({content}:H1headerProp) => {
  return (
    <div className='H1header'>

        <h1>
            {content}
          
        </h1>

        <div className='blueunderline'></div>
        
        

        <br /><br />

      


    </div>
  )
}

export default H1header