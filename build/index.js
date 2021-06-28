"use strict";
function summ(a) {
    const x = Object.keys(a).map(k => {
        const elem = a[k];
        if ((elem === null || elem === void 0 ? void 0 : elem.cvalue) === undefined)
            return 2021;
        // check if a number
        if (typeof elem.cvalue === 'number')
            return elem.cvalue;
        //typo 'S'
        if (typeof elem.cvalue === 'string')
            return +elem.cvalue || 2021;
        return summ(elem.cvalue);
        // optimized recursion
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        // typo not x.lengHt;
        sum += x[i];
        //x[i].cvalue === undefined
    }
    return sum;
    // not summ
}
const a = {
    hello: { cvalue: 1 },
    bye: { cvalue: '13' },
    world: {
        cvalue: { yay: { cvalue: '2' } },
    },
};
const b = {
    hello: { cvalue: 1 },
    world: {
        cvalue: {
            yay: { cvalue: '2' },
            grgr: { cvalue: undefined },
            grr: { cvalue: '1q' },
            qq: undefined,
        },
    },
    grgr: { cvalue: undefined },
};
console.log(summ(a));
console.log(summ(b));
//# sourceMappingURL=index.js.map