function getSecondLargest(nums) {
  // Complete the function
  const n = nums.length;
  let result;
  nums.sort((a, b) => a - b).reverse();
  if (nums[0] > nums[1]) {
    [result] = nums;
    return result;
  }
  for (let i = 1; i < n; i += 1) {
    if (nums[i] > nums[i + 1]) {
      result = nums[i + 1];
      return result;
    }
  }
  return result;
}

console.log(getSecondLargest([6, 6, 6, 6, 5]));
