import React from 'react'

import * as Styled from './BurgerButton.styled'

export interface BurgerButtonProps {
  controls?: string
  expanded?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const BurgerButton: React.FC<BurgerButtonProps> = ({
  controls = undefined,
  expanded = false,
  onClick,
}) => (
  <Styled.Button
    data-collapse-toggle={controls}
    aria-controls={controls}
    aria-expanded={expanded}
    onClick={onClick}
  >
    <Styled.ScreenReader>Open main menu</Styled.ScreenReader>
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </Styled.Button>
)

export default BurgerButton
