// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = void 0;
var string = "/* \u8FD9\u662F\u4E00\u4E2A\u901A\u8FC7JavaScript\u5B9E\u73B0\u7684\n  * \u81EA\u52A8\u753B\u51FA\u4E00\u9762\u8349\u5E3D\u6D77\u8D3C\u65D7\u7684\u9879\u76EE\n  * \u4E0B\u9762\u7684\u4EE3\u7801\u5C06\u4F1A\u5C55\u793A\u51FA\u6765\uFF0C\u6CE8\u610F\u770B\u5C4F\u5E55\u7684\u4E0B\u534A\u90E8\u5206\n  * \u6B64\u5916\u5728\u53F3\u8FB9\u8FD8\u6709\u56DB\u4E2A\u6309\u94AE\u53EF\u4EE5\u70B9\u51FB\n  * \u5B9E\u73B0\u6682\u505C\u3001\u64AD\u653E\u3001\u5E38\u901F\u548C\u52A0\u901F\u64AD\u653E\u7684\u529F\u80FD\n  * \u8BA9\u6211\u4EEC\u5F00\u59CB\u5427\n  */\n  \n  .flag {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: black;\n  z-index: 1;\n}\n\n/* \u5148\u753B\u4E24\u6839\u9AA8\u5934\u5728\u6700\u4E0B\u9762\n * \u4E00\u6839\u9AA8\u5934\u53EF\u4EE5\u7528\u4E00\u4E2A\u77E9\u5F62\u548C\u56DB\u4E2A\u5706\u5F62\u6765\u5B8C\u6210\n */\n \n.bone-1, .bone-2 {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  left: 50%;\n  margin-left: -50px;\n  top: 50%;\n  margin-top: -50px;\n  z-index: 2;\n}\n\n.rectangle {\n  background: #fff;\n  width: 16em;\n  height: 1.5em;\n  position: absolute;\n  left: 50%;\n  margin-left: -8em;\n  top: 50%;\n}\n\n.bone-1 > .rectangle {\n  transform: rotate(35deg);\n}\n\n.bone-2 > .rectangle {\n  transform: rotate(-35deg);\n}\n\n.circle {\n  position: absolute;\n  width: 1.5em;\n  height: 1.5em;\n  background: #fff;\n  border-radius: 0.75em;\n}\n\n.left-top {\n  left: -0.8em;\n  top: -0.5em;\n}\n\n.left-bottom {\n  left: -0.8em;\n  bottom: -0.5em;\n}\n\n.right-top {\n  right: -0.8em;\n  top: -0.5em;\n}\n\n.right-bottom {\n  right: -0.8em;\n  bottom: -0.5em;\n}\n\n.head {\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  left: 50%;\n  margin-left: -75px;\n  top: 50%;\n  margin-top: -75px;\n  border-radius: 75px;\n  z-index: 3;\n}\n\n/* \u63A5\u4E0B\u6765\u662F\u5E3D\u5B50\n * \u4E00\u4E2A\u7B80\u5355\u7684\u534A\u5706\u5F62\n */\n\n.hat {\n  width: 8em;\n  height: 4em;\n  position: absolute;\n  left: 50%;\n  margin-left: -4em;\n  top: 25px;\n  border-radius: 4em 4em 0 0;\n  background: #f7b600;\n  border: 5px solid black;\n  border-bottom: none;\n  z-index: 4;\n}\n\n/* \u7136\u540E\u662F\u8349\u5E3D\u4E0A\u9762\u7684\u7EA2\u8272\u8FB9\u5E26\n * \u7528\u4E86\u4E00\u4E2A\u4F2A\u5143\u7D20\u6765\u505A\n */\n\n.hat::before {\n  content: '';\n  width: 8em;\n  height: 2.4em;\n  position: absolute;\n  left: 50%;\n  margin-left: -4em;\n  border: 5px solid black;\n  border-bottom: none;\n  background: red;\n  bottom: 0;\n  border-top-left-radius: 25px 50px;\n  border-top-right-radius: 25px 50px;\n}\n\n/* \u63A5\u7740\u5C31\u662F\u5E3D\u6A90\u4E86\n * \u7528\u4E00\u4E2A\u692D\u5706\u5F62\n * \u7ED3\u5408 z-index \u653E\u5728\u5E3D\u5B50\u7684\u4E0A\u5C42\n */\n\n.hat-brim {\n  width: 12em;\n  height: 2.2em;\n  position: absolute;\n  border: 5px solid #000;\n  left: 50%;\n  margin-left: -6em;\n  top: 3.8em;\n  border-radius: 50%;\n  background: #f7b600;\n  z-index: 5;\n}\n\n/* \u63A5\u4E0B\u6765\u540C\u6837\u662F\u4E00\u4E2A\u692D\u5706\u5F62\u7684\u989D\u5934\n * \u4EE5\u53CA\u4E00\u4E2A\u534A\u5706\u5F62\u7684\u8138\n * \u901A\u8FC7 z-index \u6765\u7ED3\u5408\u4E24\u4E2A\u56FE\u5F62\n */\n\n.forehead {\n  position: absolute;\n  width: 8em;\n  height: 2em;\n  left: 50%;\n  margin-left: -4em;\n  background: white;\n  top: 4.4em;\n  border-radius: 100%;\n  border: 5px inset black;\n  z-index: 6;\n}\n\n.face {\n  width: 8em;\n  height: 4em;\n  position: absolute;\n  left: 50%;\n  margin-left: -4em;\n  bottom: 0;\n  border-radius: 0 0 4em 4em;\n  background: #fff;\n  border: 5px solid #000;\n  border-top: none;\n  z-index: 6;\n}\n\n/* \u4E24\u4E2A\u9AB7\u9AC5\u5934\u7684\u773C\u775B\n * \u548C\u9F3B\u5B50\n */\n\n.eye {\n  width: 2.4em;\n  height: 2.4em;\n  background: #000;\n  border-radius: 50%;\n  border: 5px solid #000;\n  position: absolute;\n  left: 50%;\n  top: 2px;\n  margin-left: -1.2em;\n  z-index: 2;\n}\n\n.eye.left {\n  transform: translateX(-1.5em);\n}\n\n.eye.right {\n  transform: translateX(1.5em);\n}\n\n.nose {\n  width: 1.2em;\n  height: 1.2em;\n  background: #000;\n  border-radius: 50%;\n  border: 5px solid #000;\n  position: absolute;\n  left: 50%;\n  margin-left: -0.6em;\n  top: 2.2em;\n  z-index: 2;\n}\n\n/* \u6700\u540E\u662F\u6700\u9EBB\u70E6\u7684\u4E0B\u5DF4\n * \u4EE5\u53CA\u7259\u9F7F\u7684\u90E8\u5206\n */\n\n.chin {\n  height: 100px;\n  width: 100px;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n  top: 50%;\n  margin-top: -50px;\n}\n\n.jaws {\n  position: absolute;\n  width: 5em;\n  height: 6em;\n  background: white;\n  border: 5px solid black;\n  border-radius: 20em 20em 30em 30em;\n  left: calc(50% - 2.5em);\n  top: 5.5em;\n  overflow: hidden;\n}\n\n.lower-jaw {\n  width: 10em;\n  position: absolute;\n  left: calc(50% - 5em);\n  top: -2.8em;\n  background: black;\n  border: 5px solid black;\n  border-bottom: none;\n  height: 125%;\n  border-radius: 50%;\n  overflow: hidden;\n  transition: all 0.2s 0s linear;\n}\n\n.black {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: -1.1em;\n  border-radius: 50%;\n  background: black;\n  border: 5px solid black;\n  z-index: 1;\n}\n\n/* \u540C\u6837\u662F\u4F7F\u7528 z-index\n * \u5229\u7528 div \u753B\u51FA\u7259\u9F7F\u90E8\u5206\n */\n\n.lower-teeth {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  border-radius: 50%;\n  background: white;\n  border: 5px solid black;\n}\n\n.upper-teeth {\n  width: 200%;\n  height: 125%;\n  left: -50%;\n  position: absolute;\n  top: -70%;\n  border-radius: 50%;\n  background: white;\n  border: 5px solid black;\n  z-index: 2;\n  overflow: hidden;\n}\n\n.gum1 {\n  height: 10em;\n  width: 1em;\n  border-radius: 50%;\n  border-left: 5px solid black;\n  position: absolute;\n  left: 32%;\n  top: 45%;\n  z-index: 2;\n}\n\n.gum2 {\n  height: 10em;\n  width: 0;\n  border-radius: 50%;\n  border-left: 5px solid black;\n  position: absolute;\n  left: 45%;\n  top: 45%;\n  z-index: 2;\n}\n\n.gum3 {\n  height: 10em;\n  width: 1em;\n  border-radius: 50%;\n  border-right: 5px solid black;\n  position: absolute;\n  left: 52%;\n  top: 45%;\n  z-index: 2;\n}\n\n/* \u6700\u540E\u6DFB\u52A0\u4E0A\u9B3C\u755C\u7684\u52A8\u753B\n * \u8BA9\u5634\u5DF4\u52A8\u8D77\u6765\n * \u611F\u8C22\u89C2\u770B \u5B8C\n */\n\n@keyframes bite {\n  0% {transform: translate3d(0, 0, 0);}\n  50% {transform: translate3d(0, .8em, 0);}\n  100% {transform: translate3d(0, 0, 0);}\n}\n\n.lower-jaw {\n  animation: bite 1000ms infinite linear;\n}\n";
exports.string = string;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var text = document.querySelector("#text");
var style = document.querySelector("#style");
var buttonPause = document.querySelector("#pause");
var buttonPlay = document.querySelector("#play");
var buttonNormal = document.querySelector("#normal");
var buttonFast = document.querySelector("#fast");

var run = function run() {
  n += 1;

  if (n > _css.string.length) {
    window.clearInterval(id);
    return;
  }

  text.innerText = _css.string.substr(0, n);
  style.innerHTML = _css.string.substr(0, n);
  text.scrollTop = text.scrollHeight;
};

var n = 1;
var timeout = 50;
var id = setInterval(run, timeout);

buttonPause.onclick = function () {
  window.clearInterval(id);
};

buttonPlay.onclick = function () {
  timeout = 50;
  id = setInterval(run, timeout);
};

buttonNormal.onclick = function () {
  window.clearInterval(id);
  timeout = 50;
  id = setInterval(run, timeout);
};

buttonFast.onclick = function () {
  window.clearInterval(id);
  timeout = 0;
  id = setInterval(run, timeout);
};
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.1d0300f2.js.map