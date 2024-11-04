function checkIfInstanceOf(obj, classFunction){
if (classFunction === null || classFunction === undefined){
    return false;
}
while (obj !== null && obj !== undefined) {
        const proto = Object.getPrototypeOf(obj);
        if (proto === classFunction.prototype) {
            return  true;
        }
        obj = proto;
    }
  return false;
}

checkIfInstanceOf(new Date(), Date); // true

