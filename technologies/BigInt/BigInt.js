// add by yanyj 20180504 start

// Number 的最大值的局限
let max = Number.MAX_SAFE_INTEGER;
console.log(max); // 9007199254740991
// max + 1
console.log(max + 1); // 9007199254740992 (正常)
// max + 2
console.log(max + 2); // 9007199254740992 (不正常)
// Number.MIN_SAFE_INTEGER 也会有相同的问题

/*************** BigInt ******************/
// 目前需要babel-node
// 直接赋值
// let bi = 123456n;
// console.log(bi);

let bi = BigInt(12345);


// add by yanyj 20180504 end