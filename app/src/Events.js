import React, { Component } from 'react'

class Events extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            data: []
        }
        // tudo isso mais o bind faz com que pegue o scopo do construtor e passe
        // pra dentro da funcao
        // Sempre que quizermos pegar o scopo da classe dentro de um metodo precisamos
        // fazer o bind
        this.updateInputName = this.updateInputName.bind(this)
        this.clickEvent      = this.clickEvent.bind(this)
        this.deleteEvent     = this.deleteEvent.bind(this)
    }

    updateInputName(e){
        return this.setState({
            name: e.target.value
        })
    }

    clickEvent(e){
        this.state.data.push(this.state.name)

        return this.setState({
            name: ''
        })
    }

    deleteEvent(item){
        // joga a data na constante
        const newState = this.state.data
            // se existir algo, ou seja, o retorno nao for -1
            if(newState.indexOf(item) > -1){
                // deleta apenas um elemento pelo indice
                newState.splice(newState.indexOf(item))

                this.setState({
                data: newState
            })
            }

    }
    // aqui no botao delete demos um bind novamente porque o item éum segundo parametro
    // quando temos mais de um parametro temos que botar o bind desta forma
    render(){
        const {data} = this.state
        const itens = data.map((item) => {
            return <li key={item}>
                   {item.toString()}
                   <button type="button" onClick={this.deleteEvent.bind(this, item)}>Delete</button>
                   </li>
        })

        return(
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.updateInputName}/>

                <button type="button"onClick={this.clickEvent}> Submit </button>
                <ul>
                    {itens}
                </ul>
            </div>
        )


    }

}

export default Events