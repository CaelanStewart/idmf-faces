export class DescopedPromise {
    constructor() {
        let resolve, reject;

        let promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });

        promise.resolve = resolve;
        promise.reject = reject;

        return promise;
    }
}

export function promiseToCallMeBack(hook) {
    let promise = new DescopedPromise();

    promise.callback = function () {
        promise.resolve(...[].concat(arguments));
    };

    if (hook) {
        hook(promise.callback);
    }

    return promise;
}