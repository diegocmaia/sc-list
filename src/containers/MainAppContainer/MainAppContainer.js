import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MainContentView from '../../views/MainContentView'

import { actions as scootersActions } from '../../reducers/modules/scooters'

const mapStateToProps = (state, props) => ({
    isLoading: state.scooters.isLoading,
    scooters: state.scooters.scooters,
    currentScooters: state.scooters.currentScooters
})

const mapDispatchToProps = (dispatch, props) => ({
    scootersActions: bindActionCreators(scootersActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContentView)
