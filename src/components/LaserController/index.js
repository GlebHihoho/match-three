import { useFrame } from '@react-three/fiber'

import { addLaser, changeLaserPotions } from '../../store'

const LaserController = () => {
  useFrame(() => {
    changeLaserPotions(0.1)
  })

  return (
    <mesh
      position={[0, 0, -8]}
      onClick={addLaser}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial
        attach="material"
        color="orange"
        emissive="#ff0860"
        visible={false}
      />
    </mesh>
  )
}

export default LaserController
