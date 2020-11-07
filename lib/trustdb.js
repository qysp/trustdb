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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrustDB = void 0;
var fs_1 = require("fs");
var interval_promise_1 = __importDefault(require("interval-promise"));
var v8_1 = require("v8");
var collection_1 = __importDefault(require("./collection"));
var events_1 = require("./events");
var util_1 = require("./util");
/**
 * @extends EventEmitter
 * @borrows TrustDB#saveDatabase as TrustDB#save
 */
var TrustDB = /** @class */ (function (_super) {
    __extends(TrustDB, _super);
    function TrustDB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.connected = false;
        _this.colls = [];
        _this.autosave = 0;
        _this.autosavePaused = true;
        return _this;
    }
    /**
     * Create a connection to a new database. If the file already exists, it will
     * be loaded and the collections (and optionally the settings, too) will be
     * applied to this instance, unless the setting `overwriteExisting` is set to true.
     */
    TrustDB.prototype.connect = function (settings) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var restoredSettings;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.created = new Date().toISOString();
                        if (!((settings === null || settings === void 0 ? void 0 : settings.filepath) !== undefined)) return [3 /*break*/, 2];
                        this.filepath = settings.filepath;
                        if (!(!settings.overwriteExisting && fs_1.existsSync(this.filepath))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.restoreDatabase((_a = settings.restoreSettings) !== null && _a !== void 0 ? _a : false)];
                    case 1:
                        restoredSettings = _b.sent();
                        Object.assign(settings, restoredSettings);
                        _b.label = 2;
                    case 2:
                        this.configureSettings(settings);
                        this.connected = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Close the database connection.
     *
     * Disables autosave, removes the event listeners for the database
     * and its collections, clears all documents and collections.
     */
    TrustDB.prototype.disconnect = function (save) {
        if (save === void 0) { save = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.connected === false) {
                            return [2 /*return*/];
                        }
                        if (!(save === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.saveDatabase()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.autosave = 0;
                        this.colls.forEach(function (collection) {
                            Object.entries(collection.events).forEach(function (_a) {
                                var name = _a[0], listeners = _a[1];
                                listeners.forEach(function (listener) { return collection.removeListener(name, listener); });
                            });
                            collection.documents.length = 0;
                        });
                        this.clear();
                        Object.entries(this.events).forEach(function (_a) {
                            var name = _a[0], listeners = _a[1];
                            listeners.forEach(function (listener) { return _this.removeListener(name, listener); });
                        });
                        this.connected = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create a collection with the given name. Returns an existing collection
     * in case a collection with the same name already eixists in this database.
     *
     * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
     */
    TrustDB.prototype.createCollection = function (name) {
        var collection = this.colls.find(function (c) { return c.name === name; });
        if (collection === undefined) {
            collection = new collection_1.default(name);
            this.colls.push(collection);
        }
        return collection;
    };
    /**
     * IMPORTANT: This function does **not** create a new collection.
     * Use {@link TrustDB#createCollection} to create a new collection.
     *
     * Add a collection to the database. Returns an existing collection
     * in case a collection with the same name already eixists in this database.
     *
     * Use {@link TrustDB#deleteCollection} before creating or adding a collection with the same name.
     */
    TrustDB.prototype.addCollection = function (collection) {
        var foundCollection = this.colls.find(function (c) { return c.name === collection.name; });
        if (foundCollection === undefined) {
            this.colls.push(collection);
        }
        else {
            collection = foundCollection;
        }
        return collection;
    };
    /**
     * Delete a collection with the given name or using a Collection instance.
     */
    TrustDB.prototype.deleteCollection = function (collection) {
        var name = collection instanceof collection_1.default ? collection.name : collection;
        var idx = this.colls.findIndex(function (c) { return c.name === name; });
        if (idx !== -1) {
            return this.colls.splice(idx, 1)[0];
        }
    };
    /**
     * Retrieve a collection by name.
     */
    TrustDB.prototype.getCollection = function (name) {
        return this.colls.find(function (c) { return c.name === name; });
    };
    /**
     * Save the database with its collections,
     * settings and metadata to the specified filepath.
     */
    TrustDB.prototype.saveDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var db, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.filepath === undefined) {
                            throw new Error('Cannot save database without filepath');
                        }
                        db = this.export();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, util_1.mkdirp(this.filepath)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, fs_1.promises.writeFile(this.filepath, v8_1.serialize(db))];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        throw new Error('Failed to save database');
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete the database from the filesystem, if it exists.
     */
    TrustDB.prototype.deleteDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.filepath === undefined) {
                            throw new Error('Cannot delete database without filepath');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fs_1.promises.unlink(this.filepath)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error('Failed to delete database');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Move the database to the new path on the filesystem.
     */
    TrustDB.prototype.moveDatabase = function (filepath) {
        return __awaiter(this, void 0, void 0, function () {
            var stats, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.filepath === filepath) {
                            return [2 /*return*/];
                        }
                        if (this.filepath === undefined) {
                            this.filepath = filepath;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, fs_1.promises.stat(this.filepath).catch(function (err) {
                                if (err.code !== 'ENOENT') {
                                    throw err;
                                }
                            })];
                    case 1:
                        stats = _a.sent();
                        if (stats === undefined) {
                            // File does not exist so just change the filepath.
                            this.filepath = filepath;
                            return [2 /*return*/];
                        }
                        if (!stats.isFile()) {
                            throw new Error('Database requested to move is not a file');
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, util_1.mkdirp(filepath)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, fs_1.promises.copyFile(this.filepath, filepath)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, fs_1.promises.unlink(this.filepath)];
                    case 5:
                        _a.sent();
                        this.filepath = filepath;
                        return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        throw new Error('Failed to move database');
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * (Re-)configure the settings.
     */
    TrustDB.prototype.configureSettings = function (settings) {
        if (settings === void 0) { settings = {}; }
        if (settings.filepath !== undefined && settings.filepath !== this.filepath) {
            this.filepath = settings.filepath;
        }
        if (settings.autosave !== undefined && settings.autosave !== this.autosave) {
            this.autosave = settings.autosave;
        }
        if (this.autosave > 0) {
            this.enableAutosave();
        }
    };
    /**
     * Clear the database by deleting all of its collections.
     */
    TrustDB.prototype.clear = function () {
        return this.colls.splice(0, this.size);
    };
    Object.defineProperty(TrustDB.prototype, "isConnected", {
        /**
         * Get the database connection state.
         */
        get: function () {
            return this.connected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrustDB.prototype, "path", {
        /**
         * Get the filepath of the database.
         */
        get: function () {
            return this.filepath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrustDB.prototype, "collections", {
        /**
         * Get all collections of the database.
         */
        get: function () {
            return this.colls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrustDB.prototype, "size", {
        /**
         * Get the amount of collections of the database.
         */
        get: function () {
            return this.colls.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrustDB.prototype, "totalSize", {
        /**
         * Get the amount of documents of all collections.
         */
        get: function () {
            return this.colls.reduce(function (acc, _a) {
                var size = _a.size;
                return acc + size;
            }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TrustDB.prototype, "autosaveInterval", {
        /**
         * Get the current interval of autosave.
         * Values lower than or equal to `0` indicates it's turned off.
         */
        get: function () {
            return this.autosave;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Turn the database into a JSON string.
     */
    TrustDB.prototype.export = function () {
        return {
            collections: this.colls.map(function (c) { return c.export(); }),
            settings: {
                filepath: this.filepath,
                autosave: this.autosave,
            },
            metadata: {
                created: this.created,
                saved: new Date().toISOString(),
            },
        };
    };
    /**
     * Load a database from a file and parse its content.
     */
    TrustDB.prototype.loadDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buf, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.filepath === undefined) {
                            throw new Error('Cannot load database without filepath');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fs_1.promises.readFile(this.filepath)];
                    case 2:
                        buf = _a.sent();
                        return [2 /*return*/, v8_1.deserialize(buf)];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error('Failed to load database');
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Apply the collections and other data of a database object.
     */
    TrustDB.prototype.applyDatabase = function (db) {
        if (util_1.has(db, 'metadata') && util_1.isObject(db.metadata) && util_1.has(db.metadata, 'created')) {
            this.created = db.metadata.created;
        }
        if (util_1.has(db, 'collections') && Array.isArray(db.collections)) {
            this.colls = (db.collections).map(function (c) {
                var collection = new collection_1.default(c.name);
                if (c.documents.every(util_1.isObject)) {
                    collection.insert(c.documents);
                }
                if (util_1.has(c, 'schema') && c.schema !== undefined) {
                    collection.registerSchema(c.schema);
                }
                collection.created = c.created;
                return collection;
            });
        }
    };
    /**
     * Try to restore a database if it exists.
     */
    TrustDB.prototype.restoreDatabase = function (restoreSettings) {
        return __awaiter(this, void 0, void 0, function () {
            var settings, db, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        settings = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.loadDatabase()];
                    case 2:
                        db = _a.sent();
                        this.applyDatabase(db);
                        if (restoreSettings && util_1.isObject(db.settings)) {
                            settings = db.settings;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        if (error_5.code !== 'ENOENT') {
                            throw error_5;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, settings];
                }
            });
        });
    };
    /**
     * Enables autosaving for the database.
     */
    TrustDB.prototype.enableAutosave = function () {
        var _this = this;
        if (!this.autosavePaused) {
            return;
        }
        this.autosavePaused = false;
        interval_promise_1.default(function (_, stop) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.autosave <= 0) {
                            this.autosavePaused = true;
                            return [2 /*return*/, stop()];
                        }
                        return [4 /*yield*/, this.saveDatabase().catch(function (err) { return err; })];
                    case 1:
                        result = _a.sent();
                        this.emit('autosave', result);
                        return [2 /*return*/];
                }
            });
        }); }, this.autosave, { stopOnError: false });
    };
    return TrustDB;
}(events_1.EventEmitter));
exports.TrustDB = TrustDB;
// Aliases
TrustDB.prototype.save = TrustDB.prototype.saveDatabase;
