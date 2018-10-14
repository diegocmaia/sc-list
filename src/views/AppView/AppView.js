import React from 'react'
import styled from 'styled-components'

import MainAppContainer from '../../containers/MainAppContainer'

const StyledAppContainer = styled.div`
    height: 100em;
`

const StyledMainContent = styled.div`
    height: 97vw;
`

export default class App extends React.Component {
    render() {
        return (
            <StyledAppContainer>
                <MainAppContainer />
            </StyledAppContainer>
        )
    }
}
