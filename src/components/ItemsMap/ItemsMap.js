import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import config from '../../config'

const StyledWrapper = styled.div`
    width: 100vw;
    background-color: #ffffff;
`

const ItemsMap = withScriptjs(
    withGoogleMap(props => (
        <StyledWrapper>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{
                    lat: config.defaultMapLocation.lat,
                    lng: config.defaultMapLocation.lng
                }}
            >
                {props.items.length &&
                    props.items.map(item => {
                        return (
                            <Marker
                                key={item.id}
                                position={{ lat: item.location.lat, lng: item.location.lng }}
                            />
                        )
                    })}
            </GoogleMap>
        </StyledWrapper>
    ))
)

export default ItemsMap
