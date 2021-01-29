import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputBase = styled.input`
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

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // {...props} faz com que todas as propriedades passadas sejam colocadas aqui
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  )
}

// Não é obrigatório mas pode fazer isso para poder ter certeza do que ta chegando nas props. Fazemos uma validação das props (props validation)
// É uma boa prática
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
