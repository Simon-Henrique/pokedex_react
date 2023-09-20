import './styles.css'

export const Card = ({ props }) => {
  return (
    <div className='card'>
      <div className='img-conteiner'>
        <img src={props.img} alt={props.name}></img>
      </div>
      <h1>{props.name}</h1>
    </div>
  )
}