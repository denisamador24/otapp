import './go_to_play.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import GameIcon from '@mui/icons-material/SportsEsports'

const GoToPlay = () => {
  return (
    <article className='go-play'>
      <h3>Juagar</h3>
      <Link to='/juego'>
        <Button
          endIcon={<GameIcon/>}
        >Jugar</Button>
      </Link>
    </article>
  )
}

export default GoToPlay