const str = "animation";
const strArry = str.split("");

function tag(accu, curr) {
    console.log(accu,curr);
    return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    
    arry.forEach((letter) => {
        let curr = letter;
        accu = callback(accu,curr);
    });

    return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);
