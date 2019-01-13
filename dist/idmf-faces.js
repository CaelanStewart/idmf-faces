/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./src/js/bus.js":
/*!***********************!*\
  !*** ./src/js/bus.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bus =
/*#__PURE__*/
function () {
  function Bus() {
    var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Bus);

    this.origin = origin;
    this.listeners = {};
    this.hooks = {};
  }

  _createClass(Bus, [{
    key: "getStack",
    value: function getStack(type, reference) {
      if (!this[type][reference]) {
        this[type][reference] = [];
      }

      return this[type][reference];
    }
  }, {
    key: "signature",
    value: function signature(event) {
      var signature = {
        event: event,
        origin: this.origin,
        bus: this,
        stopped: false,
        stop: function stop() {
          signature.stopped = true;
        }
      };
      return signature;
    }
  }, {
    key: "removeFromStack",
    value: function removeFromStack(type, reference, object) {
      if (!reference) {
        for (var variant in this[type]) {
          this.removeFromStack(type, variant, object);
        }
      } else if (!object) {
        delete this[type][reference];
      } else {
        var stack = this.getStack(type, reference),
            index = stack.lastIndexOf(object);
        stack.splice(Math.max(index, 0), index < 0 ? 0 : 1);
      }
    }
  }, {
    key: "pushToStack",
    value: function pushToStack(type, reference, object) {
      this.getStack(type, reference).push(object);
    }
  }, {
    key: "traverseStack",
    value: function traverseStack(type, reference, executor) {
      if (Array.isArray(reference)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = reference[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var one = _step.value;
            this.traverseStack(type, one, executor);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.getStack(type, reference)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var object = _step2.value;

            if (!executor(object)) {
              break;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }, {
    key: "hook",
    value: function hook(method, callback) {
      this.pushToStack('hooks', method, callback);
    }
  }, {
    key: "unhook",
    value: function unhook() {
      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.removeFromStack('hooks', method, callback);
    }
  }, {
    key: "triggerHook",
    value: function triggerHook(method) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.traverseStack('hooks', method, function (hook) {
        hook.apply(void 0, args);
      });
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this.triggerHook('before-on', event, callback);
      this.pushToStack('listeners', event, callback);
      this.triggerHook('on', event, callback);
    }
  }, {
    key: "off",
    value: function off() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.triggerHook('before-off', event, callback);
      this.removeFromStack('listeners', event, callback);
      this.triggerHook('off', event, callback);
    }
  }, {
    key: "once",
    value: function once(event, callback) {
      var _this = this;

      this.triggerHook('before-once', event, callback);

      var listener = function listener() {
        _this.removeFromStack('listeners', event, listener);

        callback.apply(void 0, arguments);
      };

      this.pushToStack('listeners', event, listener);
      this.triggerHook('once', event, callback, listener);
    }
  }, {
    key: "fireListeners",
    value: function fireListeners(event, signature) {
      var _this2 = this;

      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      this.traverseStack('listeners', event, function (listener) {
        listener.apply(void 0, [signature].concat(args));

        _this2.triggerHook.apply(_this2, ['emit', signature].concat(args));

        return !signature.stopped;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      var signature = this.signature(event);

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      this.triggerHook.apply(this, ['before-emit', signature].concat(args));
      this.fireListeners.apply(this, [event, signature].concat(args));
      this.triggerHook.apply(this, ['after-emit', signature].concat(args));
    }
  }]);

  return Bus;
}();

/* harmony default export */ __webpack_exports__["default"] = (Bus);

/***/ }),

/***/ "./src/js/component.js":
/*!*****************************!*\
  !*** ./src/js/component.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! controller */ "./src/js/controller.js");
/* harmony import */ var hierarchical_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hierarchical-bus */ "./src/js/hierarchical-bus.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Component =
/*#__PURE__*/
function (_Controller) {
  _inherits(Component, _Controller);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(Component).apply(this, arguments));
  }

  _createClass(Component, [{
    key: "init",
    value: function init(app, parent, element) {
      var _get2;

      this.element = element;
      this.parent = parent;
      this.children = {};

      for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }

      (_get2 = _get(_getPrototypeOf(Component.prototype), "init", this)).call.apply(_get2, [this, app].concat(args));
    }
  }, {
    key: "getParentBus",
    value: function getParentBus() {
      return this.parent && this.parent.bus || null;
    }
    /**
     * Overriden to return a HierarchicalBus instead of a normal Bus, so that it propagates events to the parent, if it
     * was not stopped by any listeners on the local HierarchicalBus.
     *
     * @returns {HierarchicalBus}
     */

  }, {
    key: "makeBus",
    value: function makeBus() {
      return new hierarchical_bus__WEBPACK_IMPORTED_MODULE_1__["default"](this, this.getParentBus());
    }
  }, {
    key: "getGenericErrorMessage",
    value: function getGenericErrorMessage() {
      return "[".concat(this.constructor.name, "]: Error in Component - instance logged below and assigned to window.__lastErrorOrigin.");
    }
  }, {
    key: "getChildStack",
    value: function getChildStack(name) {
      if (!this.children[name]) {
        this.children[name] = [];
      }

      return this.children[name];
    }
  }, {
    key: "pushChild",
    value: function pushChild(instance) {
      this.getChildStack(instance.constructor.name).push(instance);
      return instance;
    }
  }, {
    key: "make",
    value: function make(controller) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return this.pushChild(_construct(controller, [this.app].concat(args)));
    }
  }, {
    key: "getComponentElementsRoot",
    value: function getComponentElementsRoot(root) {
      return root || this.element || document;
    }
  }, {
    key: "query",
    value: function query(selector) {
      return this.element.querySelector(selector);
    }
  }, {
    key: "queryAll",
    value: function queryAll(selector) {
      return Array.from(this.element.querySelectorAll(selector));
    }
  }], [{
    key: "is",
    value: function is(component) {
      return component instanceof Component;
    }
  }]);

  return Component;
}(controller__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/js/components/canvas.js":
/*!*************************************!*\
  !*** ./src/js/components/canvas.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component */ "./src/js/component.js");
/* harmony import */ var util_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util/functions */ "./src/js/util/functions.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Canvas =
/*#__PURE__*/
function (_Component) {
  _inherits(Canvas, _Component);

  function Canvas() {
    _classCallCheck(this, Canvas);

    return _possibleConstructorReturn(this, _getPrototypeOf(Canvas).apply(this, arguments));
  }

  _createClass(Canvas, [{
    key: "ready",
    value: function ready() {
      this.canvas = this.query('canvas');
      this.updateContext();
    }
  }, {
    key: "updateContext",
    value: function updateContext() {
      this.context = this.canvas.getContext('2d');
    }
  }, {
    key: "clear",
    value: function clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "drawImageFromDataUrl",
    value: function () {
      var _drawImageFromDataUrl = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dataUrl) {
        var x,
            y,
            image,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                x = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
                y = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
                image = new Image();
                _context.next = 5;
                return Object(util_functions__WEBPACK_IMPORTED_MODULE_2__["promiseToCallMeBack"])(function (callback) {
                  image.onload = callback;
                  image.src = dataUrl;
                });

              case 5:
                this.setDimensions({
                  width: image.naturalWidth,
                  height: image.naturalHeight
                });
                this.clear();
                this.context.drawImage(image, x, y);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function drawImageFromDataUrl(_x) {
        return _drawImageFromDataUrl.apply(this, arguments);
      }

      return drawImageFromDataUrl;
    }()
  }, {
    key: "setDimensions",
    value: function setDimensions(dimensions) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.getOwnPropertyNames(dimensions)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var dimension = _step.value;
          console.log("Setting ".concat(dimension, " of canvas to: ").concat(dimensions[dimension]));
          this.canvas[dimension] = dimensions[dimension];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "getImageData",
    value: function getImageData(x, y, w, h) {
      console.log('getting image data', x || 0, y || 0, w || this.canvas.width, h || this.canvas.height);
      return this.context.getImageData(x || 0, y || 0, w || this.canvas.width, h || this.canvas.height);
    }
  }, {
    key: "getPixelCount",
    value: function getPixelCount() {
      return this.canvas.width * this.canvas.height;
    }
  }]);

  return Canvas;
}(component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./src/js/components/image-loader.js":
/*!*******************************************!*\
  !*** ./src/js/components/image-loader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component */ "./src/js/component.js");
/* harmony import */ var util_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util/functions */ "./src/js/util/functions.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ImageLoader =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageLoader, _Component);

  function ImageLoader() {
    _classCallCheck(this, ImageLoader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageLoader).apply(this, arguments));
  }

  _createClass(ImageLoader, [{
    key: "ready",
    value: function ready() {
      this.input = this.query('input[type="file"]');
    }
  }, {
    key: "getDataUrl",
    value: function () {
      var _getDataUrl = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.readFile(function (reader, file) {
                  reader.readAsDataURL(file);
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getDataUrl() {
        return _getDataUrl.apply(this, arguments);
      }

      return getDataUrl;
    }()
  }, {
    key: "readFile",
    value: function () {
      var _readFile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(hook) {
        var file, fileReader, _ref, _ref2, event;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = this.getFile();

                if (!file) {
                  this.throwMissingFileError();
                }

                fileReader = new FileReader();
                _context2.next = 5;
                return Object(util_functions__WEBPACK_IMPORTED_MODULE_2__["promiseToCallMeBack"])(function (callback) {
                  fileReader.onload = callback;
                  hook(fileReader, file);
                });

              case 5:
                _ref = _context2.sent;
                _ref2 = _slicedToArray(_ref, 1);
                event = _ref2[0];
                return _context2.abrupt("return", event.target);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function readFile(_x) {
        return _readFile.apply(this, arguments);
      }

      return readFile;
    }()
  }, {
    key: "throwMissingFileError",
    value: function throwMissingFileError() {
      throw new Error('Failed to load file. Have you actually uploaded a fucking file?');
    }
  }, {
    key: "getFile",
    value: function getFile() {
      return this.input.files && this.input.files[0] || null;
    }
  }]);

  return ImageLoader;
}(component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ImageLoader);

/***/ }),

/***/ "./src/js/components/inputs.js":
/*!*************************************!*\
  !*** ./src/js/components/inputs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/js/component.js");
/* harmony import */ var components_inputs_sample_rate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/inputs/sample-rate */ "./src/js/components/inputs/sample-rate.js");
/* harmony import */ var components_inputs_pitch_shift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/inputs/pitch-shift */ "./src/js/components/inputs/pitch-shift.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Inputs =
/*#__PURE__*/
function (_Component) {
  _inherits(Inputs, _Component);

  function Inputs() {
    _classCallCheck(this, Inputs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Inputs).apply(this, arguments));
  }

  _createClass(Inputs, [{
    key: "ready",
    value: function ready() {
      this.sampleRate = this.component(components_inputs_sample_rate__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.pitchShift = this.component(components_inputs_pitch_shift__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
  }]);

  return Inputs;
}(component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Inputs);

/***/ }),

/***/ "./src/js/components/inputs/pitch-shift.js":
/*!*************************************************!*\
  !*** ./src/js/components/inputs/pitch-shift.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_inputs_range_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/inputs/range-input */ "./src/js/components/inputs/range-input.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PitchShift =
/*#__PURE__*/
function (_RangeInput) {
  _inherits(PitchShift, _RangeInput);

  function PitchShift() {
    _classCallCheck(this, PitchShift);

    return _possibleConstructorReturn(this, _getPrototypeOf(PitchShift).apply(this, arguments));
  }

  _createClass(PitchShift, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      // Hook into change, prevent propagation, and emit prefixed version
      this.bus.on('change', function (event) {
        event.stopPropagation();

        _this.bus.emit('pitch-shift-change');
      });

      _get(_getPrototypeOf(PitchShift.prototype), "ready", this).call(this);
    }
  }]);

  return PitchShift;
}(components_inputs_range_input__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PitchShift);

/***/ }),

/***/ "./src/js/components/inputs/range-input.js":
/*!*************************************************!*\
  !*** ./src/js/components/inputs/range-input.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/js/component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RangeInput =
/*#__PURE__*/
function (_Component) {
  _inherits(RangeInput, _Component);

  function RangeInput() {
    _classCallCheck(this, RangeInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(RangeInput).apply(this, arguments));
  }

  _createClass(RangeInput, [{
    key: "ready",
    value: function ready() {
      this.elements = {};
      this.cacheElements();
      this.attachEvents();
      this.updateValue();
    }
  }, {
    key: "cacheElements",
    value: function cacheElements() {
      this.elements.input = this.query('input[type="range"]');
      this.elements.preview = this.query('.preview');
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.elements.input.addEventListener('input', this.updateValue);
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      this.value = +this.elements.input.value;
      this.elements.preview.textContent = this.value;
      this.bus.emit('change', this.value);
    }
  }]);

  return RangeInput;
}(component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (RangeInput);

/***/ }),

/***/ "./src/js/components/inputs/sample-rate.js":
/*!*************************************************!*\
  !*** ./src/js/components/inputs/sample-rate.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_inputs_range_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/inputs/range-input */ "./src/js/components/inputs/range-input.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SampleRate =
/*#__PURE__*/
function (_RangeInput) {
  _inherits(SampleRate, _RangeInput);

  function SampleRate() {
    _classCallCheck(this, SampleRate);

    return _possibleConstructorReturn(this, _getPrototypeOf(SampleRate).apply(this, arguments));
  }

  _createClass(SampleRate, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      // Hook into change, prevent propagation, and emit prefixed version
      this.bus.on('change', function (event) {
        event.stopPropagation();

        _this.bus.emit('sample-rate-change');
      });

      _get(_getPrototypeOf(SampleRate.prototype), "ready", this).call(this);
    }
  }]);

  return SampleRate;
}(components_inputs_range_input__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SampleRate);

/***/ }),

/***/ "./src/js/components/player.js":
/*!*************************************!*\
  !*** ./src/js/components/player.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component */ "./src/js/component.js");
/* harmony import */ var controllers_audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! controllers/audio */ "./src/js/controllers/audio.js");
/* harmony import */ var components_player_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/player/image */ "./src/js/components/player/image.js");
/* harmony import */ var components_canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/canvas */ "./src/js/components/canvas.js");
/* harmony import */ var controllers_face_to_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! controllers/face-to-sound */ "./src/js/controllers/face-to-sound.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Player =
/*#__PURE__*/
function (_Component) {
  _inherits(Player, _Component);

  function Player() {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, _getPrototypeOf(Player).apply(this, arguments));
  }

  _createClass(Player, [{
    key: "ready",
    value: function ready() {
      this.elements = {};
      this.image = this.component(components_player_image__WEBPACK_IMPORTED_MODULE_3__["default"]);
      this.canvas = this.component(components_canvas__WEBPACK_IMPORTED_MODULE_4__["default"]);
      this.audio = this.make(controllers_audio__WEBPACK_IMPORTED_MODULE_2__["default"]);
      this.faceToSound = this.make(controllers_face_to_sound__WEBPACK_IMPORTED_MODULE_5__["default"], this.canvas, this.audio);
      this.cacheElements();
      this.attachEvents();
    }
  }, {
    key: "cacheElements",
    value: function cacheElements() {
      this.elements.play = this.query('#play');
      this.elements.stop = this.query('#stop');
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.elements.play.addEventListener('click', this.onPlay);
      this.elements.stop.addEventListener('click', this.onStop);
      this.image.bus.on('image-change', this.onImageChange);
    }
  }, {
    key: "onImageChange",
    value: function () {
      var _onImageChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, image) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.canvas.drawImageFromDataUrl(image.result);

              case 2:
                this.faceToSound.updateImageData();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onImageChange(_x, _x2) {
        return _onImageChange.apply(this, arguments);
      }

      return onImageChange;
    }()
  }, {
    key: "onPlay",
    value: function onPlay() {
      try {
        this.play();
      } catch (error) {
        this.handleError(error);
      }
    }
  }, {
    key: "onStop",
    value: function onStop() {
      try {
        this.stop();
      } catch (error) {
        this.handleError(error);
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (!this.audio.context) {
        this.audio.initContext();
      }

      if (!this.image.getFile()) {
        this.image.throwMissingFileError();
      }

      if (this.audio.playing) {
        throw new Error('Your face is already playing. Do you want to listen to two of your faces simultaneously or something?');
      }

      this.faceToSound.play();
      this.bus.emit('play');
    }
  }, {
    key: "stop",
    value: function stop() {
      this.faceToSound.stop();
      this.bus.emit('stop');
    }
  }]);

  return Player;
}(component__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/js/components/player/image.js":
/*!*******************************************!*\
  !*** ./src/js/components/player/image.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_image_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/image-loader */ "./src/js/components/image-loader.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Image =
/*#__PURE__*/
function (_ImageLoader) {
  _inherits(Image, _ImageLoader);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(Image.prototype), "ready", this).call(this);

      this.attachEvents();
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.input.addEventListener('change', this.updateImage);
    }
  }, {
    key: "updateImage",
    value: function () {
      var _updateImage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getDataUrl();

              case 2:
                this.image = _context.sent;
                this.bus.emit('image-change', this.image);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateImage() {
        return _updateImage.apply(this, arguments);
      }

      return updateImage;
    }()
  }]);

  return Image;
}(components_image_loader__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/js/components/preview.js":
/*!**************************************!*\
  !*** ./src/js/components/preview.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/js/component.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Preview =
/*#__PURE__*/
function (_Component) {
  _inherits(Preview, _Component);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, _getPrototypeOf(Preview).apply(this, arguments));
  }

  _createClass(Preview, [{
    key: "ready",
    value: function ready() {
      this.elements = {};
      this.cacheElements();
      this.attachEvents();
    }
  }, {
    key: "cacheElements",
    value: function cacheElements() {
      this.elements.preview = document.querySelector('#preview');
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.app.bus.on('image-change', this.onChange);
    }
  }, {
    key: "onChange",
    value: function onChange(event, image) {
      this.elements.preview.setAttribute('src', image.result);
    }
  }]);

  return Preview;
}(component__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Preview);

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bus */ "./src/js/bus.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.init.apply(this, arguments);
  }

  _createClass(Controller, [{
    key: "init",
    value: function init(app) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.boot.apply(this, [app].concat(args));
      this.ready.apply(this, args);
    }
  }, {
    key: "ready",
    value: function ready() {// To be overridden by derived classes
    }
  }, {
    key: "makeBus",
    value: function makeBus() {
      return new bus__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    }
    /**
     *
     * @param {Controller} app
     * @param args
     */

  }, {
    key: "boot",
    value: function boot(app) {
      /**
       * @property {Controller} app
       */
      this.app = app;
      this.bus = this.makeBus();
      this.bindMethodsToInstance();
    }
  }, {
    key: "bindMethodsToInstance",
    value: function bindMethodsToInstance() {
      var prototype,
          next = function next(p) {
        return prototype = Object.getPrototypeOf(p || prototype);
      };

      next(this);

      do {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.getOwnPropertyNames(prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var property = _step.value;

            if (property === 'constructor' || typeof this[property] !== 'function') {
              continue;
            }

            this[property] = this[property].bind(this);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } while (next() && prototype.constructor !== Controller);
    }
  }, {
    key: "getGenericErrorMessage",
    value: function getGenericErrorMessage() {
      return "[".concat(this.constructor.name, "]: Error in Controller - instance logged below and assigned to window.__lastErrorOrigin.");
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      alert(error.message);
      console.error(this.getGenericErrorMessage());
      console.log(this);
      window.__lastErrorOrigin = this;
      throw error;
    }
  }, {
    key: "make",
    value: function make(controller) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return _construct(controller, [this.app].concat(args));
    }
  }, {
    key: "getComponentElementsRoot",
    value: function getComponentElementsRoot(root) {
      return root || document;
    }
  }, {
    key: "component",
    value: function component(controller) {
      if (!Controller.isPrototypeOf(controller)) {
        console.log(controller);
        throw new Error('Invalid Controller specified, cannot get component elements');
      }

      var components = [];

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.getComponentElements(controller)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;
          components.push(this.make.apply(this, [controller, this, element].concat(args)));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return components.length < 2 ? components[0] || null : components;
    }
  }, {
    key: "getComponentElements",
    value: function getComponentElements(controller, root) {
      var selector = "component[name=\"".concat(controller.name, "\"]");
      return this.getComponentElementsRoot(root).querySelectorAll(selector);
    }
  }], [{
    key: "is",
    value: function is(controller) {
      return controller instanceof Controller;
    }
  }]);

  return Controller;
}();

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./src/js/controllers/audio.js":
/*!*************************************!*\
  !*** ./src/js/controllers/audio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! controller */ "./src/js/controller.js");
/* harmony import */ var controllers_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! controllers/buffer */ "./src/js/controllers/buffer.js");
/* harmony import */ var util_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util/functions */ "./src/js/util/functions.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Audio =
/*#__PURE__*/
function (_Controller) {
  _inherits(Audio, _Controller);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Audio).apply(this, arguments));
  }

  _createClass(Audio, [{
    key: "ready",
    value: function ready() {
      var channels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.channels = channels;
      this.context = null;
      this.destination = null;
      this.playing = false;
      this.length = 0;
      this.queue = [];
      this.index = 0;
    }
  }, {
    key: "initContext",
    value: function initContext() {
      this.context = new AudioContext();
      this.destination = this.context.destination;
    }
  }, {
    key: "createBuffer",
    value: function createBuffer(length) {
      return this.make(controllers_buffer__WEBPACK_IMPORTED_MODULE_2__["default"], this, length, this.app.inputs.sampleRate.value);
    }
  }, {
    key: "queueBuffer",
    value: function queueBuffer(buffer) {
      this.queue.push(buffer);
      ++this.length;
      return buffer;
    }
  }, {
    key: "getBufferAtOffset",
    value: function getBufferAtOffset(offset) {
      return this.queue[this.index + offset] || null;
    }
  }, {
    key: "getCurrentBuffer",
    value: function getCurrentBuffer() {
      return this.getBufferAtOffset(0);
    }
  }, {
    key: "getNextBuffer",
    value: function getNextBuffer() {
      return this.getBufferAtOffset(1);
    }
  }, {
    key: "getPrevBuffer",
    value: function getPrevBuffer() {
      return this.getBufferAtOffset(-1);
    }
  }, {
    key: "flushBufferAtOffset",
    value: function flushBufferAtOffset(offset) {
      var index = this.index + offset;

      if (this.queue[index]) {
        return this.queue.splice(index, 1);
      }
    }
  }, {
    key: "prepareBufferAtOffset",
    value: function prepareBufferAtOffset(offset) {
      var buffer = this.getBufferAtOffset(offset);

      if (buffer) {
        buffer.prepare();
      }
    }
  }, {
    key: "prepareNextBuffer",
    value: function prepareNextBuffer() {
      this.prepareBufferAtOffset(1);
    }
  }, {
    key: "flushPreviousBuffer",
    value: function flushPreviousBuffer() {
      this.flushBufferAtOffset(-1);
    }
  }, {
    key: "playBufferAtOffset",
    value: function playBufferAtOffset(offset) {
      var buffer = this.getBufferAtOffset(offset);

      if (buffer) {
        return buffer.play();
      }

      console.log('non-existent buffer at offset: ', offset, this.index);
      return Object(util_functions__WEBPACK_IMPORTED_MODULE_3__["promiseToCallMeBack"])(function (callback) {
        return callback();
      });
    }
  }, {
    key: "beginLoop",
    value: function () {
      var _beginLoop = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var cycles, promise;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.prepareBufferAtOffset(0);
                cycles = 0;

              case 2:
                if (!this.playing) {
                  _context.next = 22;
                  break;
                }

              case 3:
                if (!(this.index < this.length && this.playing)) {
                  _context.next = 16;
                  break;
                }

                console.time('playing current buffer');
                promise = this.playBufferAtOffset(0);
                Object(util_functions__WEBPACK_IMPORTED_MODULE_3__["async"])(this.flushPreviousBuffer);
                Object(util_functions__WEBPACK_IMPORTED_MODULE_3__["async"])(this.prepareNextBuffer);
                _context.next = 10;
                return promise;

              case 10:
                console.timeEnd('playing current buffer');
                this.bus.emit('next');

                if (this.playing) {
                  ++this.index;
                }

                console.log(this.length);
                _context.next = 3;
                break;

              case 16:
                _context.next = 18;
                return Object(util_functions__WEBPACK_IMPORTED_MODULE_3__["sleep"])(10);

              case 18:
                ++cycles;

                if (cycles % 20 === 0) {
                  console.log('waiting for buffer');
                }

                _context.next = 2;
                break;

              case 22:
                console.log(this.index, this.length);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function beginLoop() {
        return _beginLoop.apply(this, arguments);
      }

      return beginLoop;
    }()
  }, {
    key: "play",
    value: function play() {
      this.playing = true;
      console.log(this.index);
      this.beginLoop();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.playing = false;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.playing = false;
      this.flush();
    }
  }, {
    key: "flush",
    value: function flush() {
      this.queue = [];
      this.index = 0;
      this.length = 0;
      console.log('flush');
    }
  }]);

  return Audio;
}(controller__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ }),

/***/ "./src/js/controllers/buffer.js":
/*!**************************************!*\
  !*** ./src/js/controllers/buffer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! controller */ "./src/js/controller.js");
/* harmony import */ var _util_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/functions */ "./src/js/util/functions.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bus */ "./src/js/bus.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var AudioBuffer =
/*#__PURE__*/
function (_Controller) {
  _inherits(AudioBuffer, _Controller);

  function AudioBuffer() {
    _classCallCheck(this, AudioBuffer);

    return _possibleConstructorReturn(this, _getPrototypeOf(AudioBuffer).apply(this, arguments));
  }

  _createClass(AudioBuffer, [{
    key: "ready",
    value: function ready(audio, length, sampleRate) {
      this.audio = audio;
      this.channels = this.audio.channels;
      this.context = this.audio.context;
      this.length = length;
      this.sampleRate = sampleRate;
      this.buffer = this.audio.context.createBuffer(this.channels, length, sampleRate);
      this.channel = new Array(this.channels);

      for (var i = 0; i < this.channels; ++i) {
        this.channel[i] = this.buffer.getChannelData(i);
      }

      this.app.bus.on('pitch-shift-change', this.onPitchShiftChange);
      this.app.bus.on('stop', this.onStop);
    }
  }, {
    key: "onPitchShiftChange",
    value: function onPitchShiftChange() {
      if (this.source) {
        this.updatePitchShift();
      }
    }
  }, {
    key: "updatePitchShift",
    value: function updatePitchShift() {
      this.source.playbackRate.value = this.app.inputs.pitchShift.value;
    }
  }, {
    key: "onStop",
    value: function onStop() {
      this.source.stop();
    }
  }, {
    key: "prepare",
    value: function prepare() {
      this.source = this.context.createBufferSource();
      this.source.buffer = this.buffer;
      this.source.connect(this.context.destination);
      this.updatePitchShift();
      return this;
    }
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.updatePitchShift();
                this.source.start();
                _context.next = 4;
                return Object(_util_functions__WEBPACK_IMPORTED_MODULE_2__["promiseToCallMeBack"])(function (callback) {
                  _this.source.onended = callback;
                });

              case 4:
                console.log('ended');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function play() {
        return _play.apply(this, arguments);
      }

      return play;
    }()
  }]);

  return AudioBuffer;
}(controller__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AudioBuffer);

/***/ }),

/***/ "./src/js/controllers/face-to-sound.js":
/*!*********************************************!*\
  !*** ./src/js/controllers/face-to-sound.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! controller */ "./src/js/controller.js");
/* harmony import */ var util_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util/functions */ "./src/js/util/functions.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FaceToSound =
/*#__PURE__*/
function (_Controller) {
  _inherits(FaceToSound, _Controller);

  function FaceToSound() {
    _classCallCheck(this, FaceToSound);

    return _possibleConstructorReturn(this, _getPrototypeOf(FaceToSound).apply(this, arguments));
  }

  _createClass(FaceToSound, [{
    key: "ready",
    value: function ready(canvas, audio) {
      this.canvas = canvas;
      this.audio = audio;
      this.updateImageData();
    }
  }, {
    key: "getChunk",
    value: function getChunk(offset, length) {
      var buffer = this.audio.createBuffer(length),
          channel = buffer.channel[0],
          // channel = new Array(length),
      pixels = this.data.data; // The Image data is a linear list of values, where each segment of four values maps to RGBA: [R,G,B,A, R,G,B,A]

      offset = offset * 4;

      for (var i = 0; i < length * 4; i += 4) {
        var p = i + offset;
        channel[i / 4] = // Average of RGB
        (pixels[p] + pixels[p + 1] + pixels[p + 2]) / 3 // Amplitude modulated by A
        * (pixels[p + 3] / 255) / 255 * 2 - 1;
      }

      return buffer;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.audio.playing) {
        this.audio.stop();
      } else {
        throw new Error('You can\'t stop what isn\'t playing. Can you even hear? Do you even have your fucking speakers turned up?');
      }
    }
  }, {
    key: "updateImageData",
    value: function updateImageData() {
      this.length = this.canvas.getPixelCount();
      this.data = this.canvas.getImageData();
    }
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var buffer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                buffer = this.getChunk(0, this.length);
                console.log(buffer);
                this.audio.queueBuffer(buffer);
                this.audio.play();
                _context.next = 6;
                return Object(util_functions__WEBPACK_IMPORTED_MODULE_2__["promiseToCallMeBack"])(function (callback) {
                  _this.audio.bus.once('next', callback);
                });

              case 6:
                if (this.audio.playing) {
                  this.stop();
                }

                console.log('finished playing source', this.index, this.length);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function play() {
        return _play.apply(this, arguments);
      }

      return play;
    }()
  }]);

  return FaceToSound;
}(controller__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (FaceToSound);

/***/ }),

/***/ "./src/js/hierarchical-bus.js":
/*!************************************!*\
  !*** ./src/js/hierarchical-bus.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bus */ "./src/js/bus.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var HierarchicalBus =
/*#__PURE__*/
function (_Bus) {
  _inherits(HierarchicalBus, _Bus);

  function HierarchicalBus(origin, parent) {
    var _this;

    _classCallCheck(this, HierarchicalBus);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HierarchicalBus).call(this, origin));
    _this.parent = parent;

    _this.hookParentIntoBus();

    return _this;
  }

  _createClass(HierarchicalBus, [{
    key: "hookParentIntoBus",
    value: function hookParentIntoBus() {
      var _this2 = this;

      if (this.parent instanceof bus__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        var localSignature = null; // Inject stopPropagation method and flag

        this.hook('before-emit', function (signature) {
          localSignature = signature;
          signature.propagationStopped = false;

          signature.stopPropagation = function () {
            return signature.propagationStopped = true;
          };
        });
        this.hook('after-emit', function (signature) {
          // If propagation was not stopped, emit up tree
          if (!localSignature || !localSignature.propagationStopped) {
            var _this2$parent;

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            (_this2$parent = _this2.parent).emit.apply(_this2$parent, [signature.event].concat(args));
          }
        });
      }
    }
  }]);

  return HierarchicalBus;
}(bus__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (HierarchicalBus);

/***/ }),

/***/ "./src/js/idmf-faces.js":
/*!******************************!*\
  !*** ./src/js/idmf-faces.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component */ "./src/js/component.js");
/* harmony import */ var components_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/player */ "./src/js/components/player.js");
/* harmony import */ var components_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/preview */ "./src/js/components/preview.js");
/* harmony import */ var components_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/inputs */ "./src/js/components/inputs.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var IDMFFaces =
/*#__PURE__*/
function (_Component) {
  _inherits(IDMFFaces, _Component);

  function IDMFFaces() {
    _classCallCheck(this, IDMFFaces);

    return _possibleConstructorReturn(this, _getPrototypeOf(IDMFFaces).apply(this, arguments));
  }

  _createClass(IDMFFaces, [{
    key: "ready",
    value: function ready() {
      this.app = this;
      this.inputs = this.component(components_inputs__WEBPACK_IMPORTED_MODULE_3__["default"]);
      this.player = this.component(components_player__WEBPACK_IMPORTED_MODULE_1__["default"]);
      this.preview = this.component(components_preview__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }
  }]);

  return IDMFFaces;
}(component__WEBPACK_IMPORTED_MODULE_0__["default"]);

window.idmf = new IDMFFaces();

/***/ }),

/***/ "./src/js/util/functions.js":
/*!**********************************!*\
  !*** ./src/js/util/functions.js ***!
  \**********************************/
/*! exports provided: DescopedPromise, promiseToCallMeBack, async, sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescopedPromise", function() { return DescopedPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseToCallMeBack", function() { return promiseToCallMeBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DescopedPromise = function DescopedPromise() {
  _classCallCheck(this, DescopedPromise);

  var resolve, reject;
  var promise = new Promise(function (res, rej) {
    resolve = res;
    reject = rej;
  });
  promise.resolve = resolve;
  promise.reject = reject;
  return promise;
};
function promiseToCallMeBack(hook) {
  var promise = new DescopedPromise();

  promise.callback = function () {
    promise.resolve.apply(promise, _toConsumableArray([].concat(arguments)));
  };

  if (hook) {
    hook(promise.callback);
  }

  return promise;
}
function async(callback) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (callback) {
    return async().then(function () {
      return callback.apply(void 0, args);
    });
  }

  return promiseToCallMeBack(function (callback) {
    callback.apply(void 0, args);
  });
}
function sleep() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return promiseToCallMeBack(function (callback) {
    setTimeout(callback, delay);
  });
}

/***/ }),

/***/ "./src/scss/idmf-faces.scss":
/*!**********************************!*\
  !*** ./src/scss/idmf-faces.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./src/js/idmf-faces.js ./src/scss/idmf-faces.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\theph\Projects\idmf-faces\src\js\idmf-faces.js */"./src/js/idmf-faces.js");
module.exports = __webpack_require__(/*! C:\Users\theph\Projects\idmf-faces\src\scss\idmf-faces.scss */"./src/scss/idmf-faces.scss");


/***/ })

/******/ });
//# sourceMappingURL=idmf-faces.js.map