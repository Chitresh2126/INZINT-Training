let list = ["noodles", { list: ["eggs", "flour", "water"] }];
let deepcopy = JSON.parse(JSON.stringify(list));
deepcopy[0] = "Naman Singal";
deepcopy[1].list = ["Rahul","Shyam","Devain"];
console.log(list[1].list);
console.log(deepcopy[1]);
console.log(deepcopy);
// console.log(deepcopy[1][1]);