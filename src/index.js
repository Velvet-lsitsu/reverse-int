module.exports = function reverse (n) {
    let result = '';
    const strN = n.toString();
    const lN = strN.length - 1;
    for (let i = 0; i < strN.length; i++){
        result = strN[i] + result;
    }
    if (n < 0){
        result = result.slice(0,-1);
    }
    return +result
}
