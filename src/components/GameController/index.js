import { useFrame } from '@react-three/fiber'
import { useStore } from 'effector-react'

import { $laserPositions, $enemies, removeEnemy } from '../../store'

const GameController = () => {
  const enemies = useStore($enemies)
  const laserPositions = useStore($laserPositions)

  useFrame(() => {
    enemies.map((enemy) => {
      laserPositions.map(laser => {
        if (
          enemy.position[0] + 0.2 > laser.position[0] &&
          enemy.position[0] - 0.2 < laser.position[0] &&
          enemy.position[1] + 0.2 > laser.position[1] &&
          enemy.position[1] - 0.2 < laser.position[1]
        ) {
          removeEnemy(enemy.id)
        }
      }) 
    })
  })

  return null
}

export default GameController
