export function itemsHasErrored(bool: boolean) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool: boolean) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items: any) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url: any) {
    return (dispatch: any) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}