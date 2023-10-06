
import './Input.css'

type InputProp= React.PropsWithChildren<{
    label?: string,
    placeholder: string,
    type: 'text'|'passwprd'|'email'|'number'
    variants ?: 'border'
}>

const Input = ({label,placeholder,type,variants}:InputProp) => {
  return (
    <div className= 'inputlabelcontainer' >
        <label >
            {label}
        </label>
        <br />
        <input  className= {`inputlabelcontainer ${variants}`}
         type={type}  placeholder={placeholder}/>

    </div>
  )
}

export default Input