import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { HashLink as RouterLink } from 'react-router-hash-link'

export const Container = styled.div`
  background-color: ${Colors.grayColor};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    p {
      text-align: center;
    }
  }

  a {
    color: ${Colors.whiteColor};
    text-decoration: none;
    transition: all ease-in-out 0.2s;

    &:hover {
      color: ${Colors.greenColor};
      transition: all ease-in-out 0.2s;
    }
  }
`

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.whiteColor};
`

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  li {
    margin-top: 8px;
  }
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${Colors.lightGrayColor};
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
