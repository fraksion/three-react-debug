import _ from 'lodash'
import { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { Theme } from 'theme'

interface ButtonProps {
  width?: string
  height?: string
  callback: MouseEventHandler<HTMLButtonElement>
  children?: any
  icon?: React.ReactNode
  disabled?: boolean
  text?: string
}

interface MainContainerProps {
  $width?: string
  $height?: string
  $disabled?: boolean
  $active?: boolean
  color?: string
  $hoverColor?: string
  theme: Theme
}

const MainContainer = styled.button<MainContainerProps>`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem;
  cursor: pointer;
  min-width: 2.75rem;
  height: 2.75rem;
  border: 0;
  border-radius: 0.125rem;
  transition: all 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    background: transparent;
    &:hover {
      color: ${(props) => props.theme.disabled};
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${(props) => props.$hoverColor || props.theme.hover};
  }
`

const Button = (props: ButtonProps) => {
  const { children, callback, disabled, width, height, icon, text, ...rest } =
    props

  return (
    <MainContainer
      $width={width}
      $height={height}
      onClick={callback || _.noop()}
      {...rest}
    >
      {icon || text || children}
    </MainContainer>
  )
}

export default Button
