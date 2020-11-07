"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var events_1 = require("./events");
var schema_1 = require("./schema");
var result_1 = __importDefault(require("./result"));
var checks_1 = require("./checks");
var util_1 = require("./util");
var util_2 = require("util");
/**
 * @extends EventEmitter
 * @borrows Collection#find as Collection#where
 */
var Collection = /** @class */ (function (_super) {
    __extends(Collection, _super);
    /**
     * Creates a Collection instance.
     */
    function Collection(name) {
        var _this = _super.call(this, {
            insert: [],
            find: [],
            remove: [],
            update: [],
        }) || this;
        _this.documents = [];
        _this.name = name;
        _this.created = new Date().toISOString();
        return _this;
    }
    /**
     * Insert new documents into the collection.
     */
    Collection.prototype.insert = function () {
        var documents = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            documents[_i] = arguments[_i];
        }
        if (documents.length === 0) {
            return [];
        }
        var flattenedDocuments = util_1.flatten(documents);
        var ids = [];
        for (var _a = 0, flattenedDocuments_1 = flattenedDocuments; _a < flattenedDocuments_1.length; _a++) {
            var doc = flattenedDocuments_1[_a];
            ids.push(this.maybeInsert(doc));
        }
        this.emit('insert', flattenedDocuments, this.documents);
        return ids;
    };
    /**
     * Insert a single document into the collection.
     * @fires Collection#insert After successfully inserting a document if `emitEvent` is *true*.
     */
    Collection.prototype.insertOne = function (document) {
        var id = this.maybeInsert(document);
        this.emit('insert', [document], this.documents);
        return id;
    };
    /**
    * Find all documents in the collection that match the query or pass the filter function.
    * @fires Collection#find After successfully filtering documents.
    * @example
    * // Find all documents where the value of the property price is greater than or equal to 50.
    * collection.find({ price: { greaterThanOrEqual: 50 } });
    * @example
    * // Same result but using a function.
    * collection.find((doc) => doc.price >= 50);
    */
    Collection.prototype.find = function (filter, resultInstance) {
        var _this = this;
        if (resultInstance === void 0) { resultInstance = false; }
        var filteredDocs = this.documents.filter(function (doc) {
            return _this.checkDocument(doc, filter);
        });
        var result = resultInstance
            ? new result_1.default(filteredDocs)
            : filteredDocs;
        this.emit('find', filteredDocs, this.documents);
        return result;
    };
    /**
     * Find the first document in the collection that matches the query or passes the filter function.
     * @fires Collection#find After successfully filtering documents.
     * @example
     * // Find the first document where the value of the roperty price is greater than or equal to 50.
     * collection.findOne({ price: { greaterThanOrEqual: 50 } });
     * @example
     * // Same result but using a function.
     * collection.findOne((doc) => doc.price >= 50);
     */
    Collection.prototype.findOne = function (filter) {
        var _this = this;
        var result = this.documents.find(function (doc) {
            return _this.checkDocument(doc, filter);
        });
        if (result !== undefined) {
            this.emit('find', [result], this.documents);
        }
        return result;
    };
    /**
     * Find the document with the matching ID.
     * @example
     * collection.findById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
     */
    Collection.prototype.findById = function (id) {
        var result = this.documents.find(function (doc) { return doc.__id === id; });
        if (result !== undefined) {
            this.emit('find', [result], this.documents);
        }
        return result;
    };
    /**
     * Remove all documents matching the given document from the collection.
     * @fires Collection#remove After successfully removing the document(-s).
     * @example
     * // Remove the first matching document.
     * collection.removeExact({ price: 50 }, true);
     * @example
     * // Remove all matching documents.
     * collection.removeExact({ price: 50 });
     */
    Collection.prototype.removeExact = function (document, first) {
        var _this = this;
        if (first === void 0) { first = false; }
        var removed = [];
        var indices = [];
        this.documents.forEach(function (doc, idx) {
            // Shallow clone to remove the __id field for a deep strict equal check.
            var clonedDoc = __assign({}, doc);
            delete clonedDoc.__id;
            var match = util_2.isDeepStrictEqual(clonedDoc, document);
            if (match) {
                indices.push(idx);
            }
        });
        if (indices.length > 0) {
            if (first) {
                removed.push.apply(removed, this.documents.splice(indices[0], 1));
            }
            else {
                indices.reverse().forEach(function (idx) {
                    removed.push.apply(removed, _this.documents.splice(idx, 1));
                });
            }
            this.emit('remove', removed, this.documents);
        }
        return first ? removed[0] : removed;
    };
    /**
     * Remove all documents in the collection that match the query or passes the filter function.
     * @fires Collection#remove After successfully removing the documents.
     * @example
     * // Remove all documents where the value of the
     * // property price is greater than or equal to 50.
     * collection.remove({ price: { greaterThanOrEqual: 50 } });
     * @example
     * // Same result but using a function.
     * collection.remove((doc) => doc.price >= 50);
     */
    Collection.prototype.remove = function (filter) {
        var _this = this;
        var removed = [];
        var indices = [];
        this.documents.forEach(function (doc, idx) {
            if (_this.checkDocument(doc, filter)) {
                indices.push(idx);
            }
        });
        if (indices.length > 0) {
            // Reverse the array, so the actual indices of
            // the documents won't change upon removing documents.
            indices.reverse().forEach(function (idx) {
                removed.push.apply(removed, _this.documents.splice(idx, 1));
            });
            this.emit('remove', removed, this.documents);
        }
        return removed;
    };
    /**
     * Remove the first document in the collection that matches the query or passes the filter function.
     * @fires Collection#remove After successfully removing the document.
     * @example
     * // Remove the first document where the value of the
     * // property price is greater than or equal to 50.
     * collection.removeOne({ price: { greaterThanOrEqual: 50 } });
     * // or
     * collection.removeOne((doc) => doc.price >= 50);
     */
    Collection.prototype.removeOne = function (filter) {
        var _this = this;
        var idx = this.documents.findIndex(function (doc) { return _this.checkDocument(doc, filter); });
        if (idx === -1) {
            return;
        }
        var removed = this.documents.splice(idx, 1)[0];
        this.emit('remove', [removed], this.documents);
        return removed;
    };
    /**
     * Remove the document with the matching ID.
     *
     * @param {string} id ID of the document to remove.
     * @fires Collection#remove After successfully removing the document.
     * @returns {object} Removed document.
     * @example
     * collection.removeById('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed');
     */
    Collection.prototype.removeById = function (id) {
        var idx = this.documents.findIndex(function (doc) { return doc.__id === id; });
        if (idx === -1) {
            return;
        }
        var removed = this.documents.splice(idx, 1)[0];
        this.emit('remove', [removed], this.documents);
        return removed;
    };
    /**
     * Update all documents in the collection that match the query or pass the custom filter function.
     * @fires Collection#update After successfully updating the documents.
     * @example
     * // Update all documents where the value of the property price is greater than or equal to 50 and set it to 49.99.
     * collection.update(
     *   (doc) => doc.price >= 50,
     *   { price: 49.99 }
     * );
     */
    Collection.prototype.update = function (filter, updater) {
        var _this = this;
        var updated = [];
        this.documents.forEach(function (doc) {
            if (!_this.checkDocument(doc, filter)) {
                return;
            }
            _this.maybeUpdate(doc, updater);
            updated.push(doc);
        });
        if (updated.length > 0) {
            this.emit('update', updated, this.documents);
        }
        return updated;
    };
    /**
     * Update the document with the matching ID.
     * @fires Collection#update After successfully updating the document.
     * @example
     * collection.updateById(
     *  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
     *  { price: 49.99 }
     * );
     */
    Collection.prototype.updateById = function (id, updater) {
        var doc = this.documents.find(function (doc) { return doc.__id === id; });
        if (doc === undefined) {
            return;
        }
        this.maybeUpdate(doc, updater);
        this.emit('update', [doc], this.documents);
        return doc;
    };
    /**
     * Register a schema to validate documents inserted into the collection.
     */
    Collection.prototype.registerSchema = function (schema) {
        if (schema instanceof schema_1.Schema) {
            this.schema = schema;
        }
        else if (util_1.isObject(schema)) {
            this.schema = new schema_1.Schema(schema);
        }
        return this.schema;
    };
    /**
     * Unregister the schema which ultimately stops the
     * collection from validating any further documents.
     */
    Collection.prototype.unregisterSchema = function () {
        var schema = this.schema;
        this.schema = undefined;
        return schema;
    };
    /**
     * Clean the collection from invalid documents using
     * the passed in or registered schema.
     */
    Collection.prototype.cleanWithSchema = function (schema) {
        if (schema === void 0) { schema = this.schema; }
        if (!(schema instanceof schema_1.Schema)) {
            return [];
        }
        return this.remove(function (document) { return !schema.validate(document); });
    };
    /**
     * Clear the collection by deleting all of its documents.
     */
    Collection.prototype.clear = function () {
        return this.documents.splice(0, this.size);
    };
    Object.defineProperty(Collection.prototype, "registeredSchema", {
        /**
         * Get the registered schema of the collection.
         */
        get: function () {
            return this.schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "hasSchema", {
        /**
         * Get whether the collection has a schema registered.
         */
        get: function () {
            return this.schema instanceof schema_1.Schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "firstDocument", {
        /**
         * Get the first document of the collection.
         */
        get: function () {
            return this.documents[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "lastDocument", {
        /**
         * Get the last document of the collection.
         */
        get: function () {
            return this.documents[this.documents.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "size", {
        /**
         * Get the amount of documents of the collection.
         */
        get: function () {
            return this.documents.length;
        },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.maybeInsert = function (doc) {
        if (this.schema instanceof schema_1.Schema) {
            var isValid = this.schema.validate(doc);
            if (!isValid) {
                throw new Error('Failed to validate document');
            }
        }
        var id = uuid_1.v4();
        this.documents.push(__assign(__assign({}, util_1.clone(doc)), { __id: id }));
        return id;
    };
    Collection.prototype.maybeUpdate = function (doc, updater) {
        var clonedDocument = util_1.clone(doc);
        if (typeof updater === 'function') {
            updater(clonedDocument);
        }
        else {
            Object.assign(clonedDocument, updater);
        }
        if (this.hasSchema) {
            var isValid = this.schema.validate(clonedDocument);
            if (!isValid) {
                throw new Error('Failed to validate document');
            }
        }
        Object.assign(doc, clonedDocument);
    };
    Collection.prototype.checkDocument = function (doc, filter) {
        return typeof filter === 'function'
            ? filter(doc)
            : checks_1.applyQuery(filter, doc);
    };
    /**
     * Return the necessary properties for the export.
     */
    Collection.prototype.export = function () {
        return __assign({ name: this.name, documents: this.documents, created: this.created }, (this.schema instanceof schema_1.Schema && {
            schema: this.schema.export(),
        }));
    };
    return Collection;
}(events_1.EventEmitter));
exports.default = Collection;
Collection.prototype.where = Collection.prototype.find;
