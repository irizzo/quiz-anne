// import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: auto 10px;
  margin: 10px auto;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.secondary};

  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.primary};

  background-color: ${({ theme }) => theme.colors.secondaryT};

  :disabled {
    color: ${({ theme }) => theme.colors.disabledText};
    background-color: ${({ theme }) => theme.colors.disabledBg};
  }

  :enabled {
    cursor: pointer;

    :hover {
      transition: 0.4s;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

Button.Outlined = styled.button`
`

export default Button
