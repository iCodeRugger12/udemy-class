//start of question 1
const answer = (basket) => {
    const sortNumber = (a,b) => a - b;
    basket.sort(sortNumber);
    const numArr =[];
    const stringArr=[];
    for (item of basket) {
        if (typeof item === 'string') {
            stringArr.push(item);
        }
        else {
            const filterArray = basket.filter(num => {
                return num === item
            })
            const removeItem = basket.filter(num => {
                return num !== item})    
            if (filterArray.length > 1) {
                numArr.push(filterArray);
            }
            else if (filterArray.length === 1){
                numArr.push(item);
            }
            else {
        
            }
            basket = removeItem;
        }
    }
    /* console.log(stringArr);
    console.log(numArr); */
    basket = [numArr,stringArr];
    console.log(basket);
}
answer([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,"20","3","7"]);
answer([1, "2", "3", 2]);

//start question 2
const answer = (arr, target) => {
    debugger;
    return arr.filter((item, i) => 
    arr.find((item2, i2) => item2 === target - item && i !== i2)
    );
};
answer([1,2,3],4);

























const sortNumber = (a,b) => a - b;
let basket = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,"20","3","7"];
basket.sort(sortNumber);

// remove everything between this comment and the next comment to revert back
const numArr =[];
const stringArr=[];
for (item of basket) {
    if (typeof item === 'string') {
        stringArr.push(item);
     }
    else {
        const filterArray = basket.filter(num => {
            return num === item
        })
        const removeItem = basket.filter(num => {
            return num !== item})    
         if (filterArray.length > 1) {
            numArr.push(filterArray);
        }
        else if (filterArray.length === 1){
            numArr.push(item);
        }
        else {
    
        }
        basket = removeItem;
    }
}
/* console.log(stringArr);
console.log(numArr); */
basket = [stringArr,numArr];
console.log(basket);
//end of question 1