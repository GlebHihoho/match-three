import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { useStore } from 'effector-react'

import { changePlayerPosition, $playerPosition } from '../../store'

const Player = () => {
  const ref = useRef()
  const playerPosition = useStore($playerPosition)

  useFrame(({ mouse }) => {
    if (mouse.x * 3 > -3 && mouse.x * 3 < 3) changePlayerPosition(mouse.x * 3)
  })

  return (
    <>
      <Box
        ref={ref}
        args={[0.2, 0.2, 0.2]}
        position={playerPosition}
        rotation={[Math.sin(Math.PI * 0.1), Math.sin(Math.PI * 0.35), 0]}
      >
        <meshStandardMaterial attach="material" color="green" />
      </Box>
    </>
  )
}

export default Player
