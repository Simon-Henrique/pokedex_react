import { Card } from '../Card'
import './styles.css'

export const Cards = ({ props }) => {
  return (
    <div className='cards'>
      {props.map(x => (
        <Card
          key={x.id}
          props={x}
        />
      ))}
    </div>
  )
}