import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled.tr``
const StyledListHeader = styled.th`
    background-color: #4caf50;
    color: white;
    border: 1px solid black;
`

const List = ({ headers }) => {
    return (
        <StyledRow>
            {headers && headers.map(h => <StyledListHeader>{h.title}</StyledListHeader>)}
        </StyledRow>
    )
}

List.propTypes = {}

export default List
