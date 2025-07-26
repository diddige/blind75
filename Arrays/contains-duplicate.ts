function containsDuplicate(nums: number[]): boolean {
    let map: any = new Map();

    for(let i: number = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }else{
            map.set(nums[i], 1);
        }
    }
    
    return false;
};