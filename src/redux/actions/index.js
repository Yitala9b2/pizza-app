/* eslint-disable arrow-body-style */
export const categoriesFetching = () => {
    return {
        type: 'CATEGORIES_FETCHING',
    };
};

export const categoriesFetched = (categories) => {
    return {
        type: 'CATEGORIES_FETCHED',
        payload: categories,
    };
};
export const categoriesFetchedError = () => {
    return {
        type: 'CATEGORIES_FETCHING_ERROR',
    };
};
export const setActiveCategory = (category) => {
    return {
        type: 'CATEGORIES_ACTIVE_CATEGORY',
        payload: category,
    };
};
