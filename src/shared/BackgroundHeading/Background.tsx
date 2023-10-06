import './Background.css'

type BackgroundProp = React.PropsWithChildren<{
    content: string
    variants?:'picture'|'conference'|'pic1'|'pic2'

}>

const Background = ({content,variants}:BackgroundProp) => {
  return (
    <div className={`Background  ${variants}`}>

            <h1>
                {content}
                
            </h1>

    </div>
  )
}

export default Background