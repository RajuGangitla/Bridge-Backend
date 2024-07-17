

export const convertToQueryParams = (data: Record<string, any>): Record<string, string> => {
    const queryParams: Record<string, string> = {};
    for (const key in data) {
        if (data[key] !== undefined && data[key] !== null) {
            queryParams[key] = data[key].toString();
        }
    }
    return queryParams;
};