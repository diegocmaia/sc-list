import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled.tr`
    &:hover {
        background-color: #f5f5f5;
    }
`
const StyledListColumn = styled.td`
    color: #${props => (props.column === 'energy_level' && props.level < 20 ? 'FF0000' : '000000')};
    border: 1px solid black;
`

const ListItem = ({ item }) => (
    <StyledRow>
        <StyledListColumn>{item.model}</StyledListColumn>
        <StyledListColumn>{item.license_plate}</StyledListColumn>
        <StyledListColumn column="energy_level" level={item.energy_level}>
            {item.energy_level}%
        </StyledListColumn>
        <StyledListColumn>{item.distance_to_travel}</StyledListColumn>
    </StyledRow>
)

ListItem.propTypes = {
    item: PropTypes.shape({
        model: PropTypes.string.isRequired
    }).isRequired
}

export default ListItem
