import authApi from '../../api/authApi';
import { useEffect, useReducer } from 'react';

const initialstate = {
    loading: true,
    error: '',
    data: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                data: action.result,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                data: {},
                error: 'Something went wrong'
            }
        default:
            return state;
    }
}

function useProfile() {
    const [state, dispatch] = useReducer(reducer, initialstate)
   
    useEffect(() => {
        authApi.get("/api/user/profile")
            .then(data => {
                dispatch({ type: 'SUCCESS', result: data })
            })
            .catch(() => {
                dispatch({ type: 'ERROR' })
            })
    }, []);

    return {
        state,
        dispatch
    };
}
export default useProfile;