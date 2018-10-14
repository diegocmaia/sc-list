import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import ListHeader from './ListHeader'
import ListItem from './ListItem'

const StyledTable = styled.table`
    width: 80%;
    border: 1px solid black;
    border-collapse: collapse;
`

const List = ({ headers, items }) => {
    return (
        <StyledTable>
            <ListHeader headers={headers} />
            {items && items.map(item => <ListItem key={item.id} item={item} />)}
        </StyledTable>
    )
}

List.propTypes = {}

export default List
