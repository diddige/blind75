function groupAnagrams(strs: string[]): string[][] {
    let map: Map<string, string[]> = new Map();
    let output: string[][] = [];

    for(let i: number = 0; i < strs.length; i++){
        let str: string = strs[i];
        let key: string = str.split('').sort().join('');
        
        if(map.has(key)){
            let arr: string[] = map.get(key) || [];
            arr.push(str)
            map.set(key, arr)
        }else{
            map.set(key, [str])
        }
    }

    for(const value of map.values()){
        output.push(value);
    }

    return output;

};