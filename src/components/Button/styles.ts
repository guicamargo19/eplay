import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? Colors.greenColor : 'transparent'};
  border: 2px solid
    ${(props) =>
      props.variant === 'primary' ? Colors.greenColor : Colors.whiteColor};
  color: ${Colors.whiteColor};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${Colors.whiteColor};
  color: ${Colors.whiteColor};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
`
