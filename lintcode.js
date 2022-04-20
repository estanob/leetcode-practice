/** Meeting Rooms */
// do not want overlapping time intervals

    // 1. sort input based on first value (start times)
    // 2. if we find an overlap, return early with false
    // 3. if find no overlap(run through for loop), return true
    // 4. use a for loop
    //    a. if intervals arr.length === 1. return true
    //    b. start at i = 1, look to i-1 and compare current start time is less than prev end time

var canAttendMeetings = function (intervals) {
  if (intervals.length === 1) return true;
  for (let i = 1; i < intervals.length; i++) {
    let earliestStart = intervals[0][0];
    let latestEnd = intervals[0][1];
    let currentMeeting = intervals[i];
    if (currentMeeting[0] < earliestStart && currentMeeting[1] < earliestStart) {
      earliestStart = currentMeeting[0];
      latestEnd = currentMeeting[1];
    } else if (currentMeeting[0] > earliestStart && currentMeeting[1] < latestEnd) {
      return false;
    } else if (currentMeeting[1] < latestEnd || (currentMeeting[0] < earliestStart && currentMeeting[1] > latestEnd)) {
      return false;
    }
    // } else if (currentMeeting[0] < earliestStart && currentMeeting[1] )
  }
  return true;
};

let intervals1 = [[0,30],[5,10],[15,20]]; // false
let intervals2 = [[5,8],[9,15]]; // true
let intervals3 = [[15,20],[0,30],[5,10]]; // false
let intervals4 = [[5,10],[0,30],[15,20]]; // false

console.log("Test Case1:", canAttendMeetings(intervals1));
console.log("Test Case2:", canAttendMeetings(intervals2));
console.log("Test Case3:", canAttendMeetings(intervals3));
console.log("Test Case4:", canAttendMeetings(intervals4));