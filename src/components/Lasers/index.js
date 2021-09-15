import { useStore } from 'effector-react'

import { $laserPositions } from '../../store'

const Lasers = () => {
  const laserPositions = useStore($laserPositions)

  return (
    <group>
      {laserPositions.map(({ position, id }) => (
        <mesh key={id} position={position}>
          <boxBufferGeometry attach="geometry" args={[0.05, 0.15, 0.1]} />
          <meshStandardMaterial attach="material" emissive="red" />
        </mesh>
      ))}
    </group>
  )
}

export default Lasers
