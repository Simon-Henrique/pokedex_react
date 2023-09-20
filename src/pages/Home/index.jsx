import './styles.css';
import React from 'react'
import { Cards } from '../../components/Cards';
import { loadPoke } from '../../components/usefull/loadpoke';
import { Button } from '../../components/Button';
import { InputSpace } from '../../components/Input'

class Poke extends React.Component {
  state = {
    pokemons: [],
    pokemons_sliced: [],
    page: 0,
    pokePerpage: 9,
    input_user: ''
  }

  componentDidMount() {
    this.pegandoPokemons()
  }

  pegandoPokemons = async () => {
    const { page, pokePerpage } = this.state
    const poke_complete = await loadPoke()
    this.setState({
      pokemons: poke_complete,
      pokemons_sliced: poke_complete.slice(page, pokePerpage)
    })
  }

  loadMorePoke = () => {
    const { page, pokePerpage, pokemons, pokemons_sliced } = this.state
    const nextPage = page + pokePerpage
    const nextPokesPage = pokemons.slice(nextPage, nextPage + pokePerpage)
    pokemons_sliced.push(...nextPokesPage)
    this.setState({
      pokemons_sliced,
      page: nextPage
    })


  }

  handleChange = (evento) => {
    const { input_user } = this.state
    this.setState({ input_user: evento.toLowerCase() })

  }


  render() {
    const { pokemons, pokemons_sliced, input_user } = this.state
    const noMorePoke = pokemons_sliced >= pokemons
    const filteredPokees = !!input_user ?
      pokemons.filter(x => x.name.toLowerCase().includes(input_user))
      : pokemons_sliced
    return (
      <section className='section-cards'>
        <div className='display'>
          {!!input_user ?
            <h1>Procurando: {input_user}</h1> :
            <img src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' />
          }
        </div>
        <InputSpace
          inputFROMuser={this.handleChange}
          valor={input_user}
        />
        <Cards
          props={filteredPokees}
        />
        {!!input_user ||
          <Button
            boleano={noMorePoke}
            quandoClicar={this.loadMorePoke}
          />}
        <div className='simon-logo'>
          <img src='https://simon-dev-portfolio.netlify.app/assets/img/logo.png' />
        </div>
      </section>
    )
  }
}

export default Poke;
