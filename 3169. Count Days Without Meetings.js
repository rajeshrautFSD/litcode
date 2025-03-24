var countDays = function (days, meetings) {
  // Sort intervals by start time
  meetings.sort((a, b) => a[0] - b[0]);

  let merged = [];
  let currentStart = meetings[0][0];
  let currentEnd = Math.min(meetings[0][1], days);

  // Merge overlapping or adjacent intervals
  for (let i = 1; i < meetings.length; i++) {
    let [start, end] = meetings[i];
    end = Math.min(end, days);

    if (start <= currentEnd + 1) {
      // Merge intervals
      currentEnd = Math.max(currentEnd, end);
    } else {
      // Push the merged interval
      merged.push([currentStart, currentEnd]);
      currentStart = start;
      currentEnd = end;
    }
  }
  // Push the last merged interval
  merged.push([currentStart, currentEnd]);

  // Calculate total days covered by meetings
  let coveredDays = 0;
  for (let [start, end] of merged) {
    coveredDays += end - start + 1;
  }

  // Calculate missing days
  let missingCount = days - coveredDays;
  return missingCount;
};