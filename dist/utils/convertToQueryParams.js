"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToQueryParams = void 0;
const convertToQueryParams = (data) => {
    const queryParams = {};
    for (const key in data) {
        if (data[key] !== undefined && data[key] !== null) {
            queryParams[key] = data[key].toString();
        }
    }
    return queryParams;
};
exports.convertToQueryParams = convertToQueryParams;
