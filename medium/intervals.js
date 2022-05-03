/** Merge Intervals */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // sort intervals by start in ascending order
  let mergedIntervals = [intervals[0]]
  // console.log(intervals);
  for (let i = 1; i < intervals.length; i++) {
    let lastMergedInterval = mergedIntervals[mergedIntervals.length - 1]
    // console.log("Current iteration", i, "Last Merged Interval", lastMergedInterval);
    let interval = intervals[i];
    if (interval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], interval[1])
      //   lastMergedInterval[1] = interval[1]
    } else {
    // } else if () {
    //   lastMergedInterval[0] = Math.min(lastMergedInterval[0], interval[0])
    //   lastMergedInterval[1] = Math.max(lastMergedInterval[1], interval[1])
    // } else {
      mergedIntervals.push(interval)
    }
  }
  // console.log("After merge", mergedIntervals);
  return mergedIntervals
}

let intervals1 = [[1,3],[2,6],[8,10],[15,18]];
let intervals2 = [[1,4],[4,5]];

console.log("Test Case1:", merge(intervals1));
console.log("Test Case2:", merge(intervals2));
console.log("Test Case3:", merge([[1,4],[2,3]]));
console.log("Test Case4:", merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]));
