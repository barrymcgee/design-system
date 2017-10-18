import styled from 'styled-components'
import { space } from 'styled-system'

const Input = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius};
  border-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.lightGray};

  ${({color}) => `
    outline: 0;
    border-color: ${color};
    box-shadow: 0 0 0 0px ${color};
  `}

  :focus {
    outline: 0;
    border-color: ${({color, theme}) => color || theme.colors.blue};
    box-shadow: 0px 0px 0px 1px ${({color, theme}) => color || theme.colors.blue};
  }

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }

  ::-ms-clear {
    display: none;
  }

  ${space}
`

export default Input