import { ViewerManagerContext } from 'pages/Viewer/Viewer'
import { useContext } from 'react'

export interface SceneExplorerProps {}

const SceneExplorer = (props: SceneExplorerProps) => {
  const ViewerManager = useContext(ViewerManagerContext)

  console.log(ViewerManager)

  return <>Explorer test</>
}

export default SceneExplorer
