export function testInteger(state = false, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

export function itemsHasErrored(state = false, action: any) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action: any) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state = [], action: any) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}