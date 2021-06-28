interface BigObject {
    [a: string]: {
        cvalue: number | string | undefined | BigObject;
    } | undefined;
}
declare function summ(a: BigObject): number;
declare const a: {
    hello: {
        cvalue: number;
    };
    bye: {
        cvalue: string;
    };
    world: {
        cvalue: {
            yay: {
                cvalue: string;
            };
        };
    };
};
declare const b: {
    hello: {
        cvalue: number;
    };
    world: {
        cvalue: {
            yay: {
                cvalue: string;
            };
            grgr: {
                cvalue: undefined;
            };
            grr: {
                cvalue: string;
            };
            qq: undefined;
        };
    };
    grgr: {
        cvalue: undefined;
    };
};
//# sourceMappingURL=index.d.ts.map