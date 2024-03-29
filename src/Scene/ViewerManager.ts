import * as THREE from 'three'

export interface ViewerManagerProps {
  resize: (width: number, heigth: number) => void
}

export class ViewerManager {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private testCube: THREE.Mesh
  private aspectRatio: number = window.innerWidth / window.innerHeight

  constructor(canvas: HTMLCanvasElement | undefined) {
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color('#f7f5f5')
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )

    this.renderer = new THREE.WebGLRenderer({ canvas: canvas })
    this.renderer.setSize(window.innerWidth, window.innerHeight, false)

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.testCube = new THREE.Mesh(geometry, material)
    this.scene.add(this.testCube)

    this.camera.position.z = 5
    this.animate = this.animate.bind(this)
    this.animate()
    this.refreshCameraRatio = this.refreshCameraRatio.bind(this)
    window.addEventListener('resize', this.refreshCameraRatio, false)
  }

  render() {}

  resize(width: number, heigth: number) {
    this.renderer.setSize(width, heigth, false)
    this.aspectRatio = width / heigth
    this.camera.aspect = this.aspectRatio
    this.camera.updateProjectionMatrix()
    this.render()
  }

  refreshCameraRatio() {
    const parent = this.renderer.domElement.parentElement
    if (parent) {
      this.resize(parent.clientWidth, parent.clientHeight)
    }
  }

  animate() {
    requestAnimationFrame(this.animate)

    this.testCube.rotation.x += 0.01
    this.testCube.rotation.y += 0.01

    this.renderer.render(this.scene, this.camera)
  }
}
