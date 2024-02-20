import { getExplorerState, toggleExplorer } from 'app/appReducer'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useCallback } from 'react'
import styled from 'styled-components'
import Button from './UI/Buttons/Button'
import { ExplorerIcon } from './UI/Icons'

const ToggleContainer = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`

const ToggleExplorer = () => {
  const sceneState = useAppSelector(getExplorerState)
  const dispatch = useAppDispatch()

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      dispatch(toggleExplorer(!sceneState))
    },
    [dispatch, sceneState],
  )

  return (
    <ToggleContainer>
      <Button callback={handleClick} width='2rem' height='2rem'>
        <ExplorerIcon />
      </Button>
    </ToggleContainer>
  )
}

export default ToggleExplorer
