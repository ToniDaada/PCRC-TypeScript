import './H1blue.css'
type Prop= React.PropsWithChildren<{
    content:string
    variants?:'white'|'black'
}>
const H1blue = ({content,variants}:Prop) => {
  return (
            <div className={`H1blue ${variants}`}>
                        <h1>
{content}

        </h1>
       
            </div>
  )
}

export default H1blue