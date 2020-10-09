let nums = [1,2,3,4]
let sum = 0

for (var i = 0; i < nums.length; i++) { 
  sum += parseInt(nums[i]);
}
console.log(sum)

let nums = [1,2,3,4]
let i = 0
let x = 0

do { 
  x += nums[i];
  i++;
} 
while (i < nums.length)
alert(x)