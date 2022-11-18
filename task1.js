const arr = ['n',2,'&','a','l',9,'$','q', 47,'i','a','j','b','z', '%', 8]
const stringConverted = arr.toString()
// console.log(stringConverted);

const indexOfCharacters = function(str) {
    return [...str].reduce((indexObj, item, index) => {
        let code = item.charCodeAt()

        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)){
            indexObj.characters.push(index)
        } 
        else {
            indexObj.others.push(index);
        }


        return indexObj;
    }, {characters:[], others:[]})
}

const reverseCharacters = function(str) {
    let indexObj = indexOfCharacters(str)

    return [...str].reduce((reverseOrder, item) => {

        let code = item.charCodeAt();
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <= 57)){
            reverseOrder[indexObj.characters.pop()] = item

        }
         else {
           reverseOrder[indexObj.others.shift()] = item
        }
        

        return reverseOrder
        
    }, []).join('')
    
}
console.log(reverseCharacters(stringConverted));
// console.log(indexOfCharacters(stringConverted));





