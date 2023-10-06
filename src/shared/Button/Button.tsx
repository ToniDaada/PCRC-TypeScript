import React from 'react'
import './Button.css'


type ButtonProp=React.PropsWithChildren<{
   content: string,
   variants?: 'clear'|'text-center'|'whitetransparent'
   onClick ?:()=>void;

}>

const Button = ({content,variants,onClick}:ButtonProp) => {
  return (
     <button onClick={onClick} className={`sharedbutton ${variants}`}>

        {content}

     </button>
  )
}

export default Button