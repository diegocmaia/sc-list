import React from 'react'
import styled from 'styled-components'

import List from '../../components/List'
import ItemsMap from '../../components/ItemsMap'
import InputFilter from '../../components/InputFilter'
import InputRadio from '../../components/InputRadio'
import LoadingModal from '../../components/LoadingModal'

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    color: #ffffff;
`

const headers = [
    { title: 'Model' },
    { title: 'License Plate' },
    { title: 'Energy Level' },
    { title: 'Distance to Travel' }
]

const viewOptions = [{ label: 'List', value: 'list' }, { label: 'Map', value: 'map' }]

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selectedView: 'list' }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentWillMount() {
        const { scootersActions, filter } = this.props
        // We can pass to filter to the API, but once it doesn't provides us filtering, let's do it on the frontend side
        scootersActions.getScooters({ filter })
        this.interval = setInterval(() => scootersActions.getScooters({ filter }), 10000)
    }

    onFilterSubmit(filter) {
        const { scootersActions } = this.props
        const value = filter.target.value
        scootersActions.filterScootersByModel({ model: value })
    }

    onSelectView(e) {
        const value = e.target.value
        this.setState({ selectedView: value })
    }

    render() {
        const { currentScooters, isLoading, filter } = this.props
        const { selectedView } = this.state

        return (
            <StyledWrapper>
                {isLoading ? <LoadingModal isLoading={isLoading} /> : null}
                <InputFilter onChange={this.onFilterSubmit.bind(this)} />
                <InputRadio
                    selected={selectedView}
                    options={viewOptions}
                    onChange={this.onSelectView.bind(this)}
                />
                {selectedView === 'list' ? (
                    <List headers={headers} items={currentScooters} />
                ) : (
                    <ItemsMap
                        items={currentScooters}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                )}
            </StyledWrapper>
        )
    }
}
