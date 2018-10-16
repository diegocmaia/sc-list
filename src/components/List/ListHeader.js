import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const StyledHead = styled.thead``
const StyledRow = styled.tr``
const StyledListHeader = styled.th`
    background-color: #4caf50;
    color: white;
    border: 1px solid black;
`

const List = ({ headers }) => {
    return (
        <StyledHead>
            <StyledRow>
                {headers &&
                    headers.map((h, key) => (
                        <StyledListHeader key={key}>{h.title}</StyledListHeader>
                    ))}
            </StyledRow>
        </StyledHead>
    )
}

List.propTypes = {}

export default List
