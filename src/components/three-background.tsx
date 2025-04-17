"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { cn } from "@/src/lib/utils"

interface ThreeBackgroundProps {
  className?: string
  primaryColor?: string
  secondaryColor?: string
  density?: number
  speed?: number
  type?: "particles" | "waves" | "grid" | "bubbles" | "circuit"
}

export function ThreeBackground({
  className,
  primaryColor = "#4ade80", // Mint green
  secondaryColor = "#3b82f6", // Blue
  density = 50,
  speed = 1,
  type = "particles",
}: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const frameIdRef = useRef<number>(0)
  const timeRef = useRef<number>(0)
  const isMobileRef = useRef<boolean>(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Check if mobile
    isMobileRef.current = window.innerWidth < 768

    // Setup
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 30
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create objects based on type
    if (type === "particles") {
      createParticles(scene, primaryColor, secondaryColor, density, isMobileRef.current)
    } else if (type === "waves") {
      createWaves(scene, primaryColor, secondaryColor, isMobileRef.current)
    } else if (type === "grid") {
      createGrid(scene, primaryColor, secondaryColor, isMobileRef.current)
    } else if (type === "bubbles") {
      createBubbles(scene, primaryColor, secondaryColor, density, isMobileRef.current)
    } else if (type === "circuit") {
      createCircuit(scene, primaryColor, secondaryColor, isMobileRef.current)
    }

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01 * speed

      if (type === "particles") {
        animateParticles(scene, timeRef.current)
      } else if (type === "waves") {
        animateWaves(scene, timeRef.current)
      } else if (type === "grid") {
        animateGrid(scene, timeRef.current)
      } else if (type === "bubbles") {
        animateBubbles(scene, timeRef.current)
      } else if (type === "circuit") {
        animateCircuit(scene, timeRef.current)
      }

      renderer.render(scene, camera)
      frameIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()

      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      cancelAnimationFrame(frameIdRef.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [primaryColor, secondaryColor, density, speed, type])

  return <div ref={containerRef} className={cn("absolute inset-0 -z-10", className)} />
}

// Particles
function createParticles(
  scene: THREE.Scene,
  primaryColor: string,
  secondaryColor: string,
  density: number,
  isMobile: boolean,
) {
  const particleCount = isMobile ? Math.floor(density / 2) : density * 2
  const particles = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)
  const colors = new Float32Array(particleCount * 3)

  const mainColor = new THREE.Color(primaryColor)
  const secondColor = new THREE.Color(secondaryColor)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    sizes[i] = Math.random() * 2 + 0.5

    const mixFactor = Math.random()
    const particleColor = mainColor.clone().lerp(secondColor, mixFactor)

    colors[i * 3] = particleColor.r
    colors[i * 3 + 1] = particleColor.g
    colors[i * 3 + 2] = particleColor.b
  }

  particles.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
  particles.setAttribute("color", new THREE.BufferAttribute(colors, 3))

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.8,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  })

  const particleSystem = new THREE.Points(particles, particleMaterial)
  particleSystem.name = "particles"
  particleSystem.userData = { initialPositions: positions.slice() }
  scene.add(particleSystem)
}

function animateParticles(scene: THREE.Scene, time: number) {
  const particles = scene.getObjectByName("particles") as THREE.Points
  if (particles) {
    particles.rotation.x = time * 0.03
    particles.rotation.y = time * 0.02

    const positions = particles.geometry.attributes.position.array
    const initialPositions = particles.userData.initialPositions

    for (let i = 0; i < positions.length; i += 3) {
      const ix = initialPositions[i]
      const iy = initialPositions[i + 1]
      const iz = initialPositions[i + 2]

      // Add wave-like motion
      positions[i] = ix + Math.sin(time * 0.2 + iy * 0.03) * 0.5
      positions[i + 1] = iy + Math.cos(time * 0.1 + ix * 0.02) * 0.5
      positions[i + 2] = iz + Math.sin(time * 0.3 + iz * 0.05) * 0.5
    }

    particles.geometry.attributes.position.needsUpdate = true
  }
}

// Waves
function createWaves(scene: THREE.Scene, primaryColor: string, secondaryColor: string, isMobile: boolean) {
  const segments = isMobile ? 50 : 100
  const geometry = new THREE.PlaneGeometry(100, 100, segments, segments)

  // Create a color gradient
  const colors = new Float32Array(geometry.attributes.position.count * 3)
  const mainColor = new THREE.Color(primaryColor)
  const secondColor = new THREE.Color(secondaryColor)

  for (let i = 0; i < colors.length; i += 3) {
    const z = geometry.attributes.position.array[i + 2]
    const mixFactor = (z + 50) / 100 // Normalize z position to 0-1 range
    const vertexColor = mainColor.clone().lerp(secondColor, mixFactor)

    colors[i] = vertexColor.r
    colors[i + 1] = vertexColor.g
    colors[i + 2] = vertexColor.b
  }

  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

  const material = new THREE.MeshBasicMaterial({
    wireframe: true,
    transparent: true,
    opacity: 0.5,
    vertexColors: true,
  })

  const waves = new THREE.Mesh(geometry, material)
  waves.name = "waves"
  waves.rotation.x = -Math.PI / 2
  scene.add(waves)
}

function animateWaves(scene: THREE.Scene, time: number) {
  const waves = scene.getObjectByName("waves") as THREE.Mesh
  if (waves && waves.geometry instanceof THREE.PlaneGeometry) {
    const positions = waves.geometry.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const z = positions[i + 2]
      // Create more complex wave patterns
      positions[i + 1] =
        Math.sin((x + time) * 0.3) * 2 + Math.sin((z + time) * 0.2) * 2 + Math.sin((x + z + time) * 0.1) * 1
    }
    waves.geometry.attributes.position.needsUpdate = true

    // Slowly rotate the waves for additional motion
    waves.rotation.z = Math.sin(time * 0.05) * 0.1
  }
}

// Grid
function createGrid(scene: THREE.Scene, primaryColor: string, secondaryColor: string, isMobile: boolean) {
  const size = 100
  const divisions = isMobile ? 10 : 20

  // Create two grid helpers with different colors
  const gridHelper1 = new THREE.GridHelper(
    size,
    divisions,
    new THREE.Color(primaryColor),
    new THREE.Color(primaryColor),
  )
  gridHelper1.name = "grid1"
  gridHelper1.position.y = -10
  scene.add(gridHelper1)

  const gridHelper2 = new THREE.GridHelper(
    size,
    divisions,
    new THREE.Color(secondaryColor),
    new THREE.Color(secondaryColor),
  )
  gridHelper2.name = "grid2"
  gridHelper2.position.y = -10
  gridHelper2.rotation.x = Math.PI / 4
  scene.add(gridHelper2)

  // Add some cubes
  const cubeCount = isMobile ? 20 : 50
  const geometry = new THREE.BoxGeometry(1, 1, 1)

  // Create two materials for alternating colors
  const material1 = new THREE.MeshBasicMaterial({
    color: new THREE.Color(primaryColor),
    transparent: true,
    opacity: 0.6,
  })

  const material2 = new THREE.MeshBasicMaterial({
    color: new THREE.Color(secondaryColor),
    transparent: true,
    opacity: 0.6,
  })

  const cubes = new THREE.Group()
  cubes.name = "cubes"

  for (let i = 0; i < cubeCount; i++) {
    const material = i % 2 === 0 ? material1 : material2
    const cube = new THREE.Mesh(geometry, material)
    cube.position.x = (Math.random() - 0.5) * 80
    cube.position.y = (Math.random() - 0.5) * 40
    cube.position.z = (Math.random() - 0.5) * 80
    cube.scale.set(Math.random() * 2 + 0.5, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5)
    cube.userData = {
      speedX: (Math.random() - 0.5) * 0.05,
      speedY: (Math.random() - 0.5) * 0.05,
      speedZ: (Math.random() - 0.5) * 0.05,
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      },
    }
    cubes.add(cube)
  }

  scene.add(cubes)
}

function animateGrid(scene: THREE.Scene, time: number) {
  const grid1 = scene.getObjectByName("grid1") as THREE.GridHelper
  if (grid1) {
    grid1.rotation.y = time * 0.1
  }

  const grid2 = scene.getObjectByName("grid2") as THREE.GridHelper
  if (grid2) {
    grid2.rotation.y = -time * 0.05
    grid2.rotation.z = Math.sin(time * 0.1) * 0.1
  }

  const cubes = scene.getObjectByName("cubes") as THREE.Group
  if (cubes) {
    cubes.children.forEach((cube) => {
      // Custom rotation for each cube
      cube.rotation.x += cube.userData.rotationSpeed.x
      cube.rotation.y += cube.userData.rotationSpeed.y
      cube.rotation.z += cube.userData.rotationSpeed.z

      cube.position.x += cube.userData.speedX as number
      cube.position.y += cube.userData.speedY as number
      cube.position.z += cube.userData.speedZ as number

      // Boundary check and reverse direction
      if (Math.abs(cube.position.x) > 40) {
        cube.userData.speedX = -(cube.userData.speedX as number)
      }
      if (Math.abs(cube.position.y) > 20) {
        cube.userData.speedY = -(cube.userData.speedY as number)
      }
      if (Math.abs(cube.position.z) > 40) {
        cube.userData.speedZ = -(cube.userData.speedZ as number)
      }
    })
  }
}

// Bubbles
function createBubbles(
  scene: THREE.Scene,
  primaryColor: string,
  secondaryColor: string,
  density: number,
  isMobile: boolean,
) {
  const bubbleCount = isMobile ? Math.floor(density / 2) : density
  const bubbles = new THREE.Group()
  bubbles.name = "bubbles"

  const mainColor = new THREE.Color(primaryColor)
  const secondColor = new THREE.Color(secondaryColor)

  for (let i = 0; i < bubbleCount; i++) {
    const size = Math.random() * 3 + 1
    const geometry = new THREE.SphereGeometry(size, 16, 16)

    // Mix colors
    const mixFactor = Math.random()
    const bubbleColor = mainColor.clone().lerp(secondColor, mixFactor)

    const material = new THREE.MeshBasicMaterial({
      color: bubbleColor,
      transparent: true,
      opacity: 0.3 + Math.random() * 0.3,
      wireframe: Math.random() > 0.7, // Some bubbles are wireframe
    })

    const bubble = new THREE.Mesh(geometry, material)
    bubble.position.x = (Math.random() - 0.5) * 100
    bubble.position.y = (Math.random() - 0.5) * 100
    bubble.position.z = (Math.random() - 0.5) * 100

    bubble.userData = {
      speed: Math.random() * 0.05 + 0.02,
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      },
    }

    bubbles.add(bubble)
  }

  scene.add(bubbles)
}

function animateBubbles(scene: THREE.Scene, time: number) {
  const bubbles = scene.getObjectByName("bubbles") as THREE.Group
  if (bubbles) {
    bubbles.children.forEach((bubble) => {
      // Move upward with a slight wobble
      bubble.position.y += bubble.userData.speed
      bubble.position.x += Math.sin(time * 0.5) * 0.05
      bubble.position.z += Math.cos(time * 0.3) * 0.05

      // Rotate
      bubble.rotation.x += bubble.userData.rotationSpeed.x
      bubble.rotation.y += bubble.userData.rotationSpeed.y
      bubble.rotation.z += bubble.userData.rotationSpeed.z

      // Reset position when it goes too high
      if (bubble.position.y > 50) {
        bubble.position.y = -50
        bubble.position.x = (Math.random() - 0.5) * 100
        bubble.position.z = (Math.random() - 0.5) * 100
      }
    })
  }
}

// Circuit
function createCircuit(scene: THREE.Scene, primaryColor: string, secondaryColor: string, isMobile: boolean) {
  const nodeCount = isMobile ? 15 : 30
  const lineCount = isMobile ? 25 : 50

  const nodes = new THREE.Group()
  nodes.name = "nodes"

  const lines = new THREE.Group()
  lines.name = "lines"

  const mainColor = new THREE.Color(primaryColor)
  const secondColor = new THREE.Color(secondaryColor)

  // Create nodes (connection points)
  for (let i = 0; i < nodeCount; i++) {
    const geometry = new THREE.SphereGeometry(0.5, 16, 16)

    // Mix colors
    const mixFactor = Math.random()
    const nodeColor = mainColor.clone().lerp(secondColor, mixFactor)

    const material = new THREE.MeshBasicMaterial({
      color: nodeColor,
      transparent: true,
      opacity: 0.8,
    })

    const node = new THREE.Mesh(geometry, material)
    node.position.x = (Math.random() - 0.5) * 80
    node.position.y = (Math.random() - 0.5) * 80
    node.position.z = (Math.random() - 0.5) * 40

    node.userData = {
      initialPosition: node.position.clone(),
      phase: Math.random() * Math.PI * 2,
      amplitude: Math.random() * 5 + 2,
      speed: Math.random() * 0.02 + 0.01,
    }

    nodes.add(node)
  }

  // Create lines (connections between nodes)
  for (let i = 0; i < lineCount; i++) {
    const startNodeIndex = Math.floor(Math.random() * nodeCount)
    let endNodeIndex

    // Ensure we don't connect a node to itself
    do {
      endNodeIndex = Math.floor(Math.random() * nodeCount)
    } while (endNodeIndex === startNodeIndex)

    const startNode = nodes.children[startNodeIndex]
    const endNode = nodes.children[endNodeIndex]

    const points = [startNode.position, endNode.position]
    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    // Mix colors
    const mixFactor = Math.random()
    const lineColor = mainColor.clone().lerp(secondColor, mixFactor)

    const material = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.4 + Math.random() * 0.3,
    })

    const line = new THREE.Line(geometry, material)
    line.userData = {
      startNodeIndex,
      endNodeIndex,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.05 + 0.02,
      pulseActive: Math.random() > 0.5, // Only some lines will have the pulse effect
    }

    lines.add(line)
  }

  scene.add(nodes)
  scene.add(lines)
}

function animateCircuit(scene: THREE.Scene, time: number) {
  const nodes = scene.getObjectByName("nodes") as THREE.Group
  const lines = scene.getObjectByName("lines") as THREE.Group

  if (nodes && lines) {
    // Animate nodes
    nodes.children.forEach((node) => {
      const initialPos = node.userData.initialPosition
      const phase = node.userData.phase
      const amplitude = node.userData.amplitude
      const speed = node.userData.speed

      // Subtle floating motion
      node.position.x = initialPos.x + Math.sin(time * speed + phase) * 0.5
      node.position.y = initialPos.y + Math.cos(time * speed + phase * 1.3) * 0.5
      node.position.z = initialPos.z + Math.sin(time * speed + phase * 0.7) * 0.5
    })

    // Update line positions to follow nodes
    lines.children.forEach((line) => {
      const startNode = nodes.children[line.userData.startNodeIndex]
      const endNode = nodes.children[line.userData.endNodeIndex]

      const positions = line.geometry.attributes.position.array

      positions[0] = startNode.position.x
      positions[1] = startNode.position.y
      positions[2] = startNode.position.z

      positions[3] = endNode.position.x
      positions[4] = endNode.position.y
      positions[5] = endNode.position.z

      line.geometry.attributes.position.needsUpdate = true

      // Pulse effect (changing opacity)
      if (line.userData.pulseActive) {
        const pulsePhase = line.userData.pulsePhase
        const pulseSpeed = line.userData.pulseSpeed

        const opacity = 0.2 + Math.abs(Math.sin(time * pulseSpeed + pulsePhase)) * 0.6
        ;(line.material as THREE.LineBasicMaterial).opacity = opacity
      }
    })
  }
}
