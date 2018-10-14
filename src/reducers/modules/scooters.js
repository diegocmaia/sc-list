import http from '../utils/http'
import config from '../../config'

const constants = {
    LOAD_SCOOTERS: 'LOAD_SCOOTERS',
    FILTER_SCOOTERS: 'FILTER_SCOOTERS'
}

export const actions = {
    getScooters: ({ page = 1, limit = 10, filters = {} }) => {
        // We can send the pagination parameters to the API
        return {
            type: constants.LOAD_SCOOTERS,
            payload: {
                promise: http.get(`${config.apiUrl}`).then(response => ({ data: response.data }))
            }
        }
    },

    filterScootersByModel: ({ model }) => {
        return { type: constants.FILTER_SCOOTERS, model }
    }
}

const ACTION_HANDLERS = {
    FILTER_SCOOTERS: (state, action) => {
        const { model } = action
        let { scooters } = state

        const filteredScooters = scooters.filter(
            s => s.model.toUpperCase() === model.trim().toUpperCase() || model.trim() === ''
        )

        return {
            ...state,
            scooters,
            currentScooters: filteredScooters,
            isLoading: false
        }
    },

    LOAD_SCOOTERS_FULFILLED: (state, action) => {
        const {
            data: { scooters }
        } = action

        return {
            ...state,
            scooters,
            currentScooters: scooters,
            isLoading: false
        }
    },

    LOAD_SCOOTERS_PENDING: state => {
        return {
            ...state,
            isLoading: true
        }
    },

    LOAD_SCOOTERS_CANCELED: state => {
        return {
            ...state,
            isLoading: false
        }
    }
}

export const initialState = {
    scooters: [],
    currentScooters: [],
    isLoading: false
}

export default function(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action.payload || action) : state
}
