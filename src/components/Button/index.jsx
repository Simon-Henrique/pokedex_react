import React from 'react'
import './styles.css'

export class Button extends React.Component {

  render() {
    const { quandoClicar, boleano } = this.props
    return (
      <div className='button-conteiner'>
        <button
          disabled={boleano}
          onClick={quandoClicar}
          className='button'
        >Carregar mais pokemons</button>
      </div>
    )
  }
}