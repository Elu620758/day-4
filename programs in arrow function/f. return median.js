
//******sir i have some doubts in this program..*******

let findMedianSortedArrays=(nums1 = [], nums2 = []) => {
    let i1 = 0;
    let i2 = 0;
    const len1 = nums1.length;
    const len2 = nums2.length;
    const len = len1 + len2;
  
    if (len === 0) {
      return null;
    }
  
    const merged = [];
  
    while (i1 < len1 && i2 < len2) {
      if (nums1[i1] <= nums2[i2]) {
        merged.push(nums1[i1++]);
      } else {
        merged.push(nums2[i2++]);
      }
    }
  
    while (i1 < len1) {
      merged.push(nums1[i1++]);
    }
    while (i2 < len2) {
      merged.push(nums2[i2++]);
    }
  
    const isOdd = len % 2;
    if (isOdd) {
      return merged[(len - 1) / 2];
    } else {
      return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
    }
  }
  
   const nums1 = [2,4,5,7,8];
  const nums2 = [1,2,3,4,5];
  
  console.log(findMedianSortedArrays(nums1, nums2));