import React from 'react'
import type { NextPage } from 'next'

import HeroTemplate from 'ui/templates/HeroTemplate'

import * as Styled from './ContactPage.styled'

const ContactPage: NextPage = () => (
  <HeroTemplate subtitle="Contact">
    <Styled.Container>Contact Page</Styled.Container>
  </HeroTemplate>
)

export default ContactPage
