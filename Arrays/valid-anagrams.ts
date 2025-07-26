function isAnagram(s: string, t: string): boolean {
    if(s.length !== t. length){
        return false;
    }

    let sMap: Map<string, number> = new Map();
    let tMap: Map<string, number> = new Map();

    for(let i: number = 0; i < s.length; i++){
        sMap.has(s[i]) ? sMap.set(s[i], sMap.get(s[i]) || 0 + 1) : sMap.set(s[i],1);
        tMap.has(t[i]) ? tMap.set(t[i], tMap.get(t[i]) || 0 + 1) : tMap.set(t[i],1);
    }

    for(let i: number = 0; i < s.length; i++){
        if(sMap.get(s[i]) !== tMap.get(s[i])){
            return false;
        }
    }

    return true;
};