import styled from 'styled-components'

const ViewerMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const ViewerCanvas = styled.canvas`
  height: 100%;
  width: 100%;
`

const SceneContainer = styled.div`
  flex-grow: 1;
`

export { SceneContainer, ViewerCanvas, ViewerMainContainer }
