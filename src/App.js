import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera } from '@react-three/drei'

import Field from './Field'


const App = () => (
  <Canvas>
    <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={100}></OrthographicCamera>
    <ambientLight intensity={0.2} />
    <spotLight position={[10, 10, 10]} angle={0.25} penumbra={0} />
    <pointLight position={[-10, -10, -10]} />
    {/* <OrbitControls /> */}
    <Field />
  </Canvas>
)

export default App
