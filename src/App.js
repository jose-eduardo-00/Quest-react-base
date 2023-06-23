import React from 'react'


class App extends React.Component{
    render(){
        return(
            <div className='header'>
                <p style={{color: this.props.color, textTransform: "uppercase"}}>{this.props.p}</p>
            </div>
        )
    }
}

export default App;