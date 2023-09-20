import React from 'react'
import './styles.css'

export class InputSpace extends React.Component {

  render() {
    const { inputFROMuser, valor } = this.props
    return (
      <div className='input-conteiner'>
        <input
          className='inputz'
          type="search"
          onChange={x => { inputFROMuser(x.target.value) }}
          value={valor}
        />
      </div>
    )
  }
} 