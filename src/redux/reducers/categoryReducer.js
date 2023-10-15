
const initialState = {
    loadingStatus: 'idle',
    activeCategory: 'Мясные',
    categories: [],
};

// eslint-disable-next-line default-param-last
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'CATEGORIES_FETCHING':
        return {
            ...state,
            loadingStatus: 'loading',
        };
    case 'CATEGORIES_FETCHED':
        return {
            ...state,
            loadingStatus: 'idle',
            categories: action.payload,
        };
    case 'CATEGORIES_FETCHING_ERROR':
        return {
            ...state,
            loadingStatus: 'error',
        };
    case 'CATEGORIES_ACTIVE_CATEGORY':
        return {
            ...state,
            activeCategory: action.payload,
        };
    default:
        return state;
    }
};
export default categoryReducer;