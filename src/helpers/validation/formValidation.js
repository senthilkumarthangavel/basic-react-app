
const formHasError = function (data) {
    
    if (Object.values(data).indexOf(true) > -1) {
        return true;
    }
    
    return false;
}

export default formHasError;
