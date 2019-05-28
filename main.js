const a = { name: "ori" };
const b = { name: "moshiko" };
const c = a;
const d = { name: "moshiko" };
const e = b;
const arr = [a, b, c, d, e];

(function findDuplicate(arr) {
    const checkDup = {};
    for (const value of arr) {
        if (checkDup[value.name]) {
            if (checkDup[value.name] === value)
                console.log(value);
        }
        else {
            checkDup[value.name] = value;
        }
    }
})(arr);
