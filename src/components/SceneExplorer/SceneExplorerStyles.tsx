import styled from 'styled-components'

const SceneExplorerMainContainer = styled.div`
  min-width: 18rem;
  max-width: 38rem;
  height: 100%;
  padding: 0.5rem 0;
  background-color: ${(props) => props.theme.primary};
`

const TestSecondaryContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.fontSecondary};
`

const TestPrimaryTextContainer = styled.div`
  color: ${(props) => props.theme.fontPrimary};
`

export {
  SceneExplorerMainContainer,
  TestPrimaryTextContainer,
  TestSecondaryContainer,
}
