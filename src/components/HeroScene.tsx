import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 4000
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.04
      ref.current.rotation.y -= delta * 0.06
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6c63ff"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3
      ref.current.rotation.y = state.clock.elapsedTime * 0.5
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <mesh ref={ref} position={[2.5, 0, -2]}>
      <torusGeometry args={[1, 0.3, 16, 60]} />
      <meshStandardMaterial
        color="#6c63ff"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

function FloatingSphere() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
      ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.4
    }
  })

  return (
    <mesh ref={ref} position={[-2.5, 0.5, -1]}>
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial
        color="#00d4ff"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#6c63ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00d4ff" />
      <StarField />
      <FloatingTorus />
      <FloatingSphere />
    </Canvas>
  )
}
