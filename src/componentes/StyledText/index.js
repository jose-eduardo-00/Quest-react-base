import React from 'react'


class Text extends React.Component{
    render(){
        return(
            <div className='header'>
                <p style={{color: this.props.color, textTransform: "uppercase"}}>{this.props.p}</p>
            </div>
        )
    }
}



export default Text;