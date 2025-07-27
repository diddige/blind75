function findMin(nums: number[]): number {
    let l: number = 0;
    let r: number = nums.length - 1;

    if(nums[l] <= nums[r]){
        return nums[l];
    }

    while(l < r){
        let mid: number = Math.floor((l+r)/2);

        if(nums[mid] > nums[r]){
            l = mid + 1;
        }else{
            r = mid;
        }
    }

    return nums[l];
};