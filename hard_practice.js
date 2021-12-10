var trap = function(height) {
    
    totalWater = 0;
    
    // find peaks
    let peaks = findPeaks(height);
    // console.log(peaks)
    peaks = findRelevantPeaks(peaks, height);
    // console.log(peaks);
    // return;

    // iterate through peaks
    for (let i=0; i<peaks.length - 1; i++) {
        
        // store shorter peak as shortPeak
        let shortPeak = height[peaks[i]] < height[peaks[i+1]] ? height[peaks[i]] : height[peaks[i+1]];
        
        // for each row between two peaks
        for (let j=(peaks[i] + 1); j<=(peaks[i + 1] - 1); j++) {
            // total up the difference of row size to shortPeak
            totalWater += (shortPeak - height[j])
            console.log("Total water = ", totalWater)
        }
        
    }


   
    return totalWater;
    // end of iteration

    // return the total
};

// find peaks
function findPeaks(array) {
    let peaks = []; // array of indexes
    // iterate through array
    if (array[0] > array[1]) peaks.push(0)
    for (let i = 1; i < array.length - 1; i++) {
        if ((array[i] > array[i - 1])) {
            if ((array[i] > array[i + 1])) {
                peaks.push(i)
            }
        }
    }
    if (array[array.length - 1] > array[array.length - 2]) peaks.push(array.length - 1)
    // check if the index is greater than the left and right positions
    // if true, store this index in peaks
    
    // end iteration
    
    // return peaks array
    return peaks;
}


function findRelevantPeaks(peaks, height) {
    // exclude peaks that are surrounded by higher peaks
    
    let refPeak = height[peaks[0]];
    
    // iterate through peaks
    let shortPeaks = []; // indeces
    for (let i=1; i<peaks.length; i++) {
        
        if (height[peaks[i]] > refPeak) {
            // if peak is taller than reference, delete all peaks between and set new refPeak
            shortPeaks.forEach(peak => {
                peaks.splice(peak, 1);  
            });
            shortPeaks = [];
            refPeak = peaks[i];
        } else {
            shortPeaks.push(i);
        
            // store shorter peaks indeces into array (to be deleted later)
        }
        // console.log(`refPeak: ${refPeak} // currentPeak: ${height[peaks[i]]} // shortPeaks: ${shortPeaks}`);
        

        // end iteration
    }
    
    return peaks;
    
    // return peaks
}
