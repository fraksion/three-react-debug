import * as THREE from 'three'

export interface ViewerManagerProps {
  resize: (width: number, heigth: number) => void
}

export class ViewerManager {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private testCube: THREE.Mesh

  constructor(parentElement: HTMLElement | null) {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    parentElement?.appendChild(this.renderer.domElement)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.testCube = new THREE.Mesh(geometry, material)
    this.scene.add(this.testCube)

    this.camera.position.z = 5
    this.animate = this.animate.bind(this)
    this.animate()
  }

  render() {}

  resize(width: number, heigth: number) {}

  animate() {
    requestAnimationFrame(this.animate)

    this.testCube.rotation.x += 0.01
    this.testCube.rotation.y += 0.01

    this.renderer.render(this.scene, this.camera)
  }
}
