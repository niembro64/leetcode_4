"use strict";
exports.__esModule = true;
var a = [
    [[1, 3], [2]],
    [
        [1, 2],
        [3, 4],
    ],
    [
        [0, 0],
        [0, 0],
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
];
function findMedianSortedArrays(nums1, nums2) {
    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    var totalLength = nums1.length + nums2.length;
    var nums3 = [totalLength];
    while (i3 < totalLength) {
        if (nums1[i1] != null && nums2[i2] != null) {
            if (nums1[i1] < nums2[i2]) {
                nums3[i3] = nums1[i1];
                i1++;
            }
            else {
                nums3[i3] = nums2[i2];
                i2++;
            }
        }
        else if (nums1[i1] != null) {
            nums3[i3] = nums1[i1];
            i1++;
        }
        else {
            nums3[i3] = nums2[i2];
            i2++;
        }
        i3++;
    }
    console.log("nums1: ", nums1);
    console.log("nums2: ", nums2);
    console.log("nums3: ", nums3);
    var median;
    if (totalLength % 2 === 0) {
        median =
            (nums3[Math.floor(totalLength / 2) - 1] +
                nums3[Math.floor(totalLength / 2)]) /
                2;
    }
    else {
        median = nums3[Math.floor(totalLength / 2)];
    }
    console.log("median: ", median);
    return median;
}
for (var i = 0; i < a.length; i++) {
    findMedianSortedArrays(a[i][0], a[i][1]);
    console.log("__________");
}
