function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map();

    for(let i: number = 0; i < nums.length; i++){
        let compliment: number = target - nums[i];
        if(map.has(compliment)){
            return [i, map.get(compliment)!];
        }else{
            map.set(nums[i], i);
        }
    }
    return [];
};