import { ViewerManager, ViewerManagerProps } from 'Scene/ViewerManager'
import { getExplorerState } from 'app/appReducer'
import { useAppSelector } from 'app/hooks'
import SceneExplorer from 'components/SceneExplorer'
import ToggleExplorer from 'components/ToggleExplorerButton'
import { createContext, useEffect, useRef, useState } from 'react'
import {
  SceneContainer,
  ViewerCanvas,
  ViewerMainContainer,
} from './ViewerStyles'

export interface ViewerProps {}

export const ViewerManagerContext = createContext<ViewerManagerProps | null>(
  null,
)

const Viewer = (props: ViewerProps) => {
  const containerRef = useRef<HTMLCanvasElement>(null)
  const sceneState = useAppSelector(getExplorerState)
  const [viewerManager, setViewerManager] = useState<ViewerManagerProps | null>(
    null,
  )

  useEffect(() => {
    if (containerRef.current) {
      const viewerManager = new ViewerManager(containerRef.current)
      setViewerManager(viewerManager)
    }
  }, [])

  useEffect(() => {
    containerRef.current &&
      viewerManager?.resize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      )
  }, [sceneState])

  return (
    <ViewerManagerContext.Provider value={viewerManager}>
      <ViewerMainContainer>
        {sceneState && <SceneExplorer />}
        <SceneContainer>
          <ViewerCanvas ref={containerRef} />
          <ToggleExplorer />
        </SceneContainer>
        {sceneState && <SceneExplorer />}
      </ViewerMainContainer>
    </ViewerManagerContext.Provider>
  )
}

export default Viewer
