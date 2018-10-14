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

const StyleSpan = styled.span`
    color: #000000;
`

const StyleInput = styled.input`
    width: 80%;
`

const InputFilter = ({ onChange }) => {
    return (
        <StyledWrapper>
            <StyleSpan>Model: </StyleSpan>
            <StyleInput onChange={onChange} />
        </StyledWrapper>
    )
}

InputFilter.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default InputFilter
