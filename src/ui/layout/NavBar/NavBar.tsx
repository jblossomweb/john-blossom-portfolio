import React, { useState } from 'react'
import { useRouter } from 'next/router'

import Link from 'ui/components/atoms/Link'
import BurgerButton from 'ui/components/atoms/BurgerButton'

import * as Styled from './NavBar.styled'

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface NavBarProps {
  id?: string
  homeLabel: string
  items: NavItem[]
}

const NavBar: React.FC<NavBarProps> = ({ id = 'navbar', homeLabel, items }) => {
  const router = useRouter()
  const [expanded, setExpanded] = useState(false)

  return (
    <Styled.Nav>
      <Styled.Bar>
        <Styled.Title>
          <Link href="/">
            <Styled.HomeLabel>{homeLabel}</Styled.HomeLabel>
          </Link>
        </Styled.Title>
        <BurgerButton
          controls={id}
          expanded={expanded}
          onClick={() => {
            setExpanded(!expanded)
          }}
        />
        <Styled.Container id={id}>
          <Styled.List $active={expanded}>
            {items.map(({ href, label, external }) => (
              <Styled.ListItem
                key={href}
                $active={router.pathname === href}
              >
                <Link
                  href={href}
                  aria-current="page"
                  external={external}
                >
                  {label}
                </Link>
              </Styled.ListItem>
            ))}
            <Styled.ListItem>
              <Link
                external
                href="https://www.linkedin.com/in/jbweb/"
              >
                <Styled.LinkedIn />
              </Link>
            </Styled.ListItem>
            <Styled.ListItem>
              <Link
                external
                href="https://wellfound.com/u/jblossom"
              >
                <Styled.WellFound />
              </Link>
            </Styled.ListItem>
            <Styled.ListItem>
              <Link
                external
                href="https://github.com/jblossomweb"
              >
                <Styled.GitHub />
              </Link>
            </Styled.ListItem>
          </Styled.List>
        </Styled.Container>
      </Styled.Bar>
    </Styled.Nav>
  )
}

export default NavBar
