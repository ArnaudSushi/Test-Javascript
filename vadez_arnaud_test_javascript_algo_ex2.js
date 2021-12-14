function checkArray(array) {
    let sampleArray = Array();
    for (let i = 0; i < 9; i++) {
        //1st condition is to be a number, second condition is to be between 1 and 9 and last condition is not to have been in the array previously
        if (!Number.isInteger(parseInt(array[i])) || (array[i] < 1 || array[i] > 9) || sampleArray.includes(array[i])) return false;
        sampleArray.push(array[i]);
    }
    return true;
}