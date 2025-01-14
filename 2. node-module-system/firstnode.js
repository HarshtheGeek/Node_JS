function add (a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function divide (a,b){
    if(b==0){
        throw new Error("This is invalid to begin with")
    }
    return a/b
}

module.exports = {
    add,sub,divide
};