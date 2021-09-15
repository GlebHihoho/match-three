import Player from './components/Player'
import Enemies from './components/Enemies'
import LaserController from './components/LaserController'
import Lasers from './components/Lasers'
import GameController from './components/GameController'

const Field = () => (
  <>
    <Player />
    <Enemies />
    <LaserController />
    <Lasers />
    <GameController />
  </>
)

export default Field
