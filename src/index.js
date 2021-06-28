function summ(a) {
    var x = Object.keys(a).map(function (k) {
        var elem = a[k];
        // check if a number
        if (typeof elem.cvalue === 'number')
            return elem.cvalue;
        if (elem.cvalue === undefined)
            return 2021;
        if (typeof elem.cvalue === 'string')
            return elem.cvalue || 2021;
        //typo 'S'
        return summ(elem.cvalue);
        // optimized recursion
    });
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        // typo not x.lengHt;
        if (x[i] === 2021)
            return (sum = x[i]);
        sum += x[i];
        //x[i].cvalue === undefined
    }
    return sum;
    // not summ
}
var a = {
    hello: { cvalue: 1 },
    amazing: { cvalue: undefined },
    great: { cvalue: '1d' },
    world: { cvalue: { yay: { cvalue: '2' } } }
};
// const obj = {
//   mobo: undefined,
//   hello: { cvalue: 1 },
//   world: {
//     cvalue: {
//       yay: { cvalue: '2' },
//       grgr: { cvalue: undefined },
//       grr: { cvalue: '1q' },
//       qq: undefined,
//     },
//   },
//   grgr: { cvalue: undefined },
// };
console.log(summ(a));
// console.log(summ(obj));
