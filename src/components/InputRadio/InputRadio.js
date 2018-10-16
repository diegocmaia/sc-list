import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    height: 5vw;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`

const StyleOption = styled.div`
    color: #000000;
`

const StyleInput = styled.input`
    width: 80%;
`

const InputRadio = ({ selected, options, onChange }) => {
    return (
        <StyledWrapper>
            {options.length &&
                options.map(option => (
                    <StyleOption key={option.value}>
                        <StyleInput
                            type="radio"
                            value={option.value}
                            name="scooters_view"
                            checked={option.value === selected}
                            onChange={onChange}
                        />
                        {option.label}
                    </StyleOption>
                ))}
        </StyledWrapper>
    )
}

InputRadio.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default InputRadio
