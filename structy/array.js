const fiveSort = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i];

    for (let j = i - 1; j >= 0; j--) {
      let switchNum = nums[j];

      if (num !== 5) {
        if (switchNum === 5) {
          let temp = nums[j] 
          nums[j] = nums[i]
          nums[i] = temp
        }
      }
    }
  }

  return nums;
};