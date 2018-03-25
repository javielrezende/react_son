
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropsValidation extends Component {
    constructor(props){
        super(props)
    console.log(typeof(this.props.name))
    }

    render() {
        return(
            <div>
            <h1>{this.props.name}</h1>
            <h1>{this.props.age}</h1>
            <h1>{this.props.height}</h1>
            </div>
        )
    }

}

/* Esse propTypes indica que a partir do momento que definios esse objeto, será indicado que qualquer
// propriedade que chegar dentro do objeto props tera que ter uma nova validação
 Para isso funcionar deve ser atribuido dentro das chaves ao lado do component no import */

PropsValidation.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number,
    func: PropTypes.func,
    obj: PropTypes.object,
    arr: PropTypes.array
}

PropsValidation.defaultProps = {
    name: 'Roger Rezende',
    age: 29,
    height: 1.66
}

export default PropsValidation