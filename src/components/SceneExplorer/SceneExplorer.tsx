import { ViewerManagerContext } from 'pages/Viewer/Viewer'
import { useContext } from 'react'
import { SceneExplorerMainContainer } from './SceneExplorerStyles'

export interface SceneExplorerProps {}

const SceneExplorer = (props: SceneExplorerProps) => {
  const ViewerManager = useContext(ViewerManagerContext)

  console.log(ViewerManager)

  return <SceneExplorerMainContainer>Test label</SceneExplorerMainContainer>
}

export default SceneExplorer
