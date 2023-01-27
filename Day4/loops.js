let n = 7;
let string = "";

// star pattern

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//             string += "*";
//     }
//     string += "\n";
// }

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//             string += "*";
//     }
//     string += "\n";
// }


// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n-i; j++) {
//             string += "*";
//     }
//     string += "\n";
// }

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//            if(i===0 || i===n-1){
//             string += "*";
//            }
//            else if(j===0 || j===n-1){
//                 string += "*";
//             }
//             else{
//                  string += " ";
//             }           
//     }
//     string += "\n";
// }
let num = 4;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
            if(i===0 || i===n-1){
                            string += num;
                           }
                           else if(j===0 || j===n-1){
                                string += num;
                            }
                            else{
                                string += " ";
                            }
    }
    string += "\n";
}
console.log(string);