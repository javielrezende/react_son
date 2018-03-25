import React, { Component } from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component{
    constructor(props){
        super(props)

        console.log(props, this.props)

        this.state = {
            name: 'Roger rezende',
            // dizemos que o txt deste state sera o valor do props da classe
            txt: this.props.txt
        }
    }
    render(){
        const result = 4
        const style = {
            color: '#ff0000',
            fontSize: 50
        }
        return(
            <div style={style} className="my-class-from-react">
                {/*Meu primeiro componente*/}
                <StateInput />
                <h1>{this.state.txt}</h1>
                <h4>{result === 2*2 ? <div><ul><li>'TRUE'</li></ul></div> : <div><ul><li>'FALSE'</li></ul></div>}</h4>
                <span>{this.state.name}</span>
            </div>
        )
    }

}


export default HelloWorld