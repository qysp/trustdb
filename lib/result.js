"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorting_1 = require("./sorting");
var Result = /** @class */ (function () {
    function Result(documents) {
        this.docs = documents;
    }
    /**
     * Sort the results given a specific property.
     * Supported property value types are string, number, boolean or Date.
     */
    Result.prototype.simpleSort = function (prop, desc) {
        if (desc === void 0) { desc = false; }
        this.docs.sort(function (a, b) { return sorting_1.simpleSorting(a[prop], b[prop]); });
        if (desc === true) {
            this.docs.reverse();
        }
        return this;
    };
    /**
     * Sort the results using your own custom sort function.
     */
    Result.prototype.sort = function (callback) {
        this.docs.sort(callback);
        return this;
    };
    /**
     * Map the results using your own custom map function.
     */
    Result.prototype.map = function (callback) {
        this.docs = this.docs.map((function (doc, index) { return callback(doc, index); }));
        return this;
    };
    /**
     * Limit the number of results.
     */
    Result.prototype.limit = function (value) {
        this.docs = this.docs.slice(0, value);
        return this;
    };
    Object.defineProperty(Result.prototype, "documents", {
        /**
         * Get the filtered and possibly altered documents.
         */
        get: function () {
            return this.docs;
        },
        enumerable: false,
        configurable: true
    });
    return Result;
}());
exports.default = Result;
