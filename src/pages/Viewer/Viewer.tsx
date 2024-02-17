import { ViewerManager, ViewerManagerProps } from 'Scene/ViewerManager'
import SceneExplorer from 'components/SceneExplorer'
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
    console.log(viewerManager, containerRef)
    console.log(
      containerRef.current?.clientWidth,
      containerRef.current?.clientHeight,
    )
    containerRef.current &&
      viewerManager?.resize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      )
  })

  return (
    <ViewerManagerContext.Provider value={viewerManager}>
      <ViewerMainContainer>
        <SceneExplorer />
        <SceneContainer>
          <ViewerCanvas ref={containerRef} />
        </SceneContainer>
        <SceneExplorer />
      </ViewerMainContainer>
    </ViewerManagerContext.Provider>
  )
}

export default Viewer
