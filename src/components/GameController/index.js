import { useFrame } from '@react-three/fiber'
import { useStore } from 'effector-react'

import { $laserPositions, $enemies } from '../../store'

const GameController = () => {
  const enemies = useStore($enemies)
  const laserPositions = useStore($laserPositions)

  // console.log(`enemies`, enemies)
  // console.log(`laserPositions`, laserPositions)

  useFrame(() => {
    // console.log('laserPositions', laserPositions)
    enemies.map(enemy => {
      laserPositions.map(laser => {
        if (
          enemy[0] + 0.5 > laser[0] &&
          enemy[0] - 0.5 < laser[0] &&
          enemy[1] + 0.5 > laser[1] &&
          enemy[1] - 0.5 < laser[1]
        ) {
          console.log('hit')
        }
      }) 
    })
  })

  return null
}

export default GameController
