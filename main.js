const a = { name: "ori" };
const b = { name: "moshiko" };
const c = a;
const d = { name: "moshiko" };
const e = b;
const arr = [a, b, c, d, e];

(function findDuplicate(arr) {
    const checkDup = {};
    for (const value of arr) {
        let valKey = JSON.stringify(value);
        if (checkDup[valKey]) {
            if (checkDup[valKey] === value)
                return true;
        }
        else {
            checkDup[valKey] = value;
        }
    }
    return false
})(arr);
