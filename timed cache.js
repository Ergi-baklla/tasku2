class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }
}

set(key, value, duration) 
    this.removeExpire();
    const exists = this.cache.has(key)
    this.cache.set(key, [value, this.now()+ duration]);
    return exists;



get(key) 
    this.removeExpire();
    return this.cache.get.key?.[0]?? -1;


count() 
    this.removeExpire();
    return this.cache.size;


now() 
    return new Date().getTime();



removeExpire() 
    const now = this.now();
    for (const[key, [, expire]] of this.cache) {
        if (expire <= now) {
            this.cache.delete(key);
        }
    }


const obj = new TimeLimitedCache();
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)); // 42
console.log(obj.count()); // 1