// import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  padding: 15px 10px;
  margin: 10px auto;

  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  background-color: ${({ theme }) => theme.colors.secondary};

  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  
  :focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.disabledText};
  }
`

export default Input
