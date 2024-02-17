import { ViewerManagerContext } from 'pages/Viewer/Viewer'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import {
  SceneExplorerMainContainer,
  TestPrimaryTextContainer,
  TestSecondaryContainer,
} from './SceneExplorerStyles'

export interface SceneExplorerProps {}

const SceneExplorer = (props: SceneExplorerProps) => {
  const ViewerManager = useContext(ViewerManagerContext)
  const theme = useTheme()

  return (
    <SceneExplorerMainContainer theme={theme}>
      <TestPrimaryTextContainer>Test Primary Label</TestPrimaryTextContainer>{' '}
      <TestSecondaryContainer>Secondary test</TestSecondaryContainer>
    </SceneExplorerMainContainer>
  )
}

export default SceneExplorer
