import { button } from './button_style.js'
import React from 'react'


class Button extends React.Component{
    render(){
        return( 
            <button 
                style={button} 
                onClick={() => alert(`A label desse botão é ${this.props.label}`)}>
                    {this.props.label}
            </button>
        )
    }
}


export default Button;