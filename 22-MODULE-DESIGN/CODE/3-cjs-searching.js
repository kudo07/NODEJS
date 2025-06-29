const linearSearch = function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
    return undefined;
  }
};
const binarySearch = function search(arr, x) {
  low = 0;
  hi = arr.length;
  while (low <= hi) {
    mid = low + Math.floor((hi - lo) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
};

module.export = { linearSearch, binarySearch };
