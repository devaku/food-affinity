export const print1 = (storeAPI) => (next) => (action) => {
    console.log('1');
    let result = next(action);
    console.log(result);
    return next(action);
};

export const print2 = (storeAPI) => (next) => (action) => {
    console.log('2');

    return next(action);
};

export const print3 = (storeAPI) => (next) => (action) => {
    console.log('3');
    return 'END OF MIDDLEWARE';
};
