/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    nums = nums.map(n => n % 2 == 0 ? n * 2 : n * 3);
    return nums;
}


function main() {
    const n = 5;
    // const a = (readLine()).split(' ').map(Number);
    // console.log(modifyArray(a).toString().split(',').join(' '));
    modifyArray(n);
}