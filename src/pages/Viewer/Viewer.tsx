import { ViewerManager, ViewerManagerProps } from 'ViewerManager'
import SceneExplorer from 'components/SceneExplorer'
import { createContext, useEffect, useRef, useState } from 'react'

export interface ViewerProps {}

export const ViewerManagerContext = createContext<ViewerManagerProps | null>(
  null,
)

const Viewer = (props: ViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewerManager, setViewerManager] = useState<ViewerManagerProps | null>(
    null,
  )

  useEffect(() => {
    const viewerManager = new ViewerManager(containerRef.current)
    setViewerManager(viewerManager)
  }, [])

  return (
    <ViewerManagerContext.Provider value={viewerManager}>
      <SceneExplorer />
      <div id='viewer-container' ref={containerRef}></div>
    </ViewerManagerContext.Provider>
  )
}

export default Viewer
