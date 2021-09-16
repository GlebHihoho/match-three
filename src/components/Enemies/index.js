import { useFrame } from '@react-three/fiber'
import { useStore } from 'effector-react'

import {
  $enemies,
  $enemyRotation,
  $removedEnemies,
  changeEnemyRotation,
  changeEnemyPosition,
} from '../../store'

const Enemies = () => {
  const enemies = useStore($enemies)
  const enemyRotation = useStore($enemyRotation)
  const removedEnemies = useStore($removedEnemies)

  useFrame(({ clock: { elapsedTime } }) => {
    changeEnemyPosition(Math.sin(elapsedTime))
    changeEnemyRotation(Math.sin(elapsedTime))
  })

  return (
    <group>
      {enemies.map((enemy) => (
        <mesh
          key={enemy.id}
          position={enemy.position}
          rotation={enemyRotation}
          visible={!removedEnemies[enemy.id]}
        >
          <icosahedronGeometry attach="geometry" args={[0.2, 0]} />
          <meshStandardMaterial attach="material" color="red" />
        </mesh>
      ))}
    </group>
  )
}

export default Enemies
