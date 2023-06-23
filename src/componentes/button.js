import { button } from './button_style.js'
import React from 'react'


class Button extends React.Component{
    render(){
        const alertLabel = () => {
            alert(`A label desse botão é ${this.props.label}`)
        }
        return <button style={button} onClickCapture={alertLabel}>{this.props.label}</button>
    }
}


export default Button;