window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "base",
          "bootstrap",
          "foodoc",
          "handlebar",
          "index",
          "jsdoc3",
          "readm",
          "templat"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "TrustDB.html": [
          "class",
          "creat",
          "instanc",
          "trustdb"
        ],
        "TrustDB.html#connected": [
          "connect",
          "databas",
          "member",
          "state",
          "trustdb#connect"
        ],
        "TrustDB.html#filepath": [
          "databas",
          "filepath",
          "member",
          "trustdb#filepath"
        ],
        "TrustDB.html#created": [
          "creat",
          "creation",
          "databas",
          "date",
          "member",
          "time",
          "trustdb#creat"
        ],
        "TrustDB.html#collections": [
          "collect",
          "databas",
          "member",
          "trustdb#collect"
        ],
        "TrustDB.html#size": [
          "amount",
          "collect",
          "databas",
          "member",
          "size",
          "trustdb#siz"
        ],
        "TrustDB.html#totalSize": [
          "amount",
          "collect",
          "document",
          "member",
          "totals",
          "trustdb#totals"
        ],
        "TrustDB.html#settings": [
          "databas",
          "member",
          "relat",
          "set",
          "trustdb#set"
        ],
        "TrustDB.html#autosave": [
          "autosav",
          "disabl",
          "enabl",
          "member",
          "trustdb#autosav"
        ],
        "TrustDB.html#autosaveInterval": [
          "autosav",
          "autosaveinterv",
          "interv",
          "member",
          "new",
          "set",
          "trustdb#autosaveinterv"
        ],
        "TrustDB.html#disconnect": [
          "autosav",
          "clear",
          "close",
          "collect",
          "connect",
          "databas",
          "disabl",
          "disconnect",
          "document",
          "event",
          "function",
          "listen",
          "lt;async&gt",
          "remov",
          "save",
          "trustdb#disconnect"
        ],
        "TrustDB.html#createCollection": [
          "ad",
          "alreadi",
          "befor",
          "case",
          "collect",
          "creat",
          "createcollect",
          "databas",
          "eixist",
          "exist",
          "function",
          "given",
          "name",
          "return",
          "same",
          "trustdb#createcollect",
          "trustdb#deletecollect",
          "us"
        ],
        "TrustDB.html#addCollection": [
          "ad",
          "add",
          "addcollect",
          "alreadi",
          "befor",
          "case",
          "collect",
          "creat",
          "databas",
          "eixist",
          "exist",
          "function",
          "import",
          "name",
          "new",
          "return",
          "same",
          "trustdb#addcollect",
          "trustdb#createcollect",
          "trustdb#deletecollect",
          "us"
        ],
        "TrustDB.html#deleteCollection": [
          "collect",
          "delet",
          "deletecollect",
          "function",
          "given",
          "instanc",
          "name",
          "trustdb#deletecollect",
          "us"
        ],
        "TrustDB.html#getCollection": [
          "collect",
          "function",
          "getcollect",
          "name",
          "retriev",
          "trustdb#getcollect"
        ],
        "TrustDB.html#saveDatabase": [
          "collect",
          "databas",
          "filepath",
          "function",
          "lt;async&gt",
          "metadata",
          "promise.&lt;void&gt",
          "save",
          "savedatabas",
          "set",
          "specifi",
          "trustdb#savedatabas"
        ],
        "TrustDB.html#deleteDatabase": [
          "databas",
          "delet",
          "deletedatabas",
          "exist",
          "filesystem",
          "function",
          "lt;async&gt",
          "promise.&lt;void&gt",
          "trustdb#deletedatabas"
        ],
        "TrustDB.html#moveDatabase": [
          "databas",
          "filepath",
          "filesystem",
          "function",
          "lt;async&gt",
          "move",
          "movedatabas",
          "new",
          "path",
          "promise.&lt;void&gt",
          "trustdb#movedatabas"
        ],
        "TrustDB.html#configureSettings": [
          "configur",
          "configureset",
          "function",
          "re",
          "set",
          "trustdb#configureset"
        ],
        "TrustDB.html#clear": [
          "array.&lt;collection&gt",
          "clear",
          "collect",
          "databas",
          "delet",
          "function",
          "trustdb#clear"
        ],
        "TrustDB.html#connect": [
          "alreadi",
          "appli",
          "collect",
          "connect",
          "creat",
          "databas",
          "exist",
          "file",
          "function",
          "instanc",
          "load",
          "lt;async&gt",
          "new",
          "option",
          "overwriteexist",
          "promise.&lt;void&gt",
          "set",
          "true",
          "trustdb#connect",
          "unless"
        ],
        "TrustDB.html#save": [
          "collect",
          "databas",
          "filepath",
          "function",
          "lt;async&gt",
          "metadata",
          "promise.&lt;void&gt",
          "save",
          "set",
          "specifi",
          "trustdb#sav"
        ],
        "Collection.html": [
          "class",
          "collect",
          "creat",
          "instanc"
        ],
        "Collection.html#documents": [
          "collect",
          "collection#docu",
          "document",
          "member"
        ],
        "Collection.html#name": [
          "collect",
          "collection#nam",
          "member",
          "name"
        ],
        "Collection.html#created": [
          "collect",
          "collection#cr",
          "creat",
          "creation",
          "date",
          "member",
          "time"
        ],
        "Collection.html#firstDocument": [
          "collect",
          "collection#firstdocu",
          "document",
          "first",
          "firstdocu",
          "member"
        ],
        "Collection.html#lastDocument": [
          "collect",
          "collection#lastdocu",
          "document",
          "last",
          "lastdocu",
          "member"
        ],
        "Collection.html#size": [
          "amount",
          "collect",
          "collection#s",
          "document",
          "member",
          "size"
        ],
        "Collection.html#insert": [
          "collect",
          "collection#insert",
          "doc",
          "document",
          "function",
          "insert",
          "new"
        ],
        "Collection.html#insertOne": [
          "collect",
          "collection#inserton",
          "doc",
          "document",
          "emitev",
          "function",
          "insert",
          "inserton",
          "singl"
        ],
        "Collection.html#find": [
          "array.&lt;object&gt",
          "collect",
          "collection#find",
          "document",
          "filter",
          "find",
          "function",
          "match",
          "pass",
          "queri",
          "resultinst"
        ],
        "Collection.html#findOne": [
          "collect",
          "collection#findon",
          "document",
          "filter",
          "find",
          "findon",
          "first",
          "function",
          "match",
          "object",
          "pass",
          "queri"
        ],
        "Collection.html#findById": [
          "collection#findbyid",
          "document",
          "find",
          "findbyid",
          "function",
          "id",
          "match",
          "object"
        ],
        "Collection.html#removeExact": [
          "collect",
          "collection#removeexact",
          "doc",
          "document",
          "first",
          "function",
          "given",
          "match",
          "object|array.&lt;object&gt",
          "remov",
          "removeexact"
        ],
        "Collection.html#remove": [
          "array.&lt;object&gt",
          "collect",
          "collection#remov",
          "document",
          "filter",
          "function",
          "match",
          "pass",
          "queri",
          "remov"
        ],
        "Collection.html#removeOne": [
          "array.&lt;object&gt",
          "collect",
          "collection#removeon",
          "document",
          "filter",
          "first",
          "function",
          "match",
          "pass",
          "queri",
          "remov",
          "removeon"
        ],
        "Collection.html#removeById": [
          "collection#removebyid",
          "document",
          "function",
          "id",
          "match",
          "object",
          "remov",
          "removebyid"
        ],
        "Collection.html#update": [
          "array.&lt;object&gt",
          "collect",
          "collection#upd",
          "custom",
          "document",
          "filter",
          "function",
          "match",
          "pass",
          "queri",
          "updat"
        ],
        "Collection.html#registerSchema": [
          "collect",
          "collection#registerschema",
          "document",
          "function",
          "insert",
          "regist",
          "registerschema",
          "schema",
          "valid"
        ],
        "Collection.html#unregisterSchema": [
          "collect",
          "collection#unregisterschema",
          "document",
          "function",
          "further",
          "schema",
          "stop",
          "ultim",
          "unregist",
          "unregisterschema",
          "valid"
        ],
        "Collection.html#cleanWithSchema": [
          "array.&lt;object&gt",
          "clean",
          "cleanwithschema",
          "collect",
          "collection#cleanwithschema",
          "document",
          "function",
          "invalid",
          "regist",
          "schema",
          "us"
        ],
        "Collection.html#testDocument": [
          "boolean",
          "collect",
          "collection#testdocu",
          "document",
          "function",
          "regist",
          "schema",
          "testdocu",
          "us",
          "valid"
        ],
        "Collection.html#clear": [
          "array.&lt;object&gt",
          "clear",
          "collect",
          "collection#clear",
          "delet",
          "document",
          "function"
        ],
        "Collection.html#updateById": [
          "collection#updatebyid",
          "document",
          "function",
          "id",
          "match",
          "object",
          "updat",
          "updatebyid"
        ],
        "Result.html": [
          "class",
          "creat",
          "instanc",
          "result"
        ],
        "Result.html#documents": [
          "alter",
          "document",
          "filter",
          "member",
          "possibl",
          "result#docu"
        ],
        "Result.html#originalDocuments": [
          "document",
          "filter",
          "member",
          "originaldocu",
          "result",
          "result#originaldocu",
          "unalt"
        ],
        "Result.html#simpleSort": [
          "boolean",
          "date",
          "desc",
          "function",
          "given",
          "number",
          "prop",
          "properti",
          "result",
          "result#simplesort",
          "simplesort",
          "sort",
          "specif",
          "string",
          "support",
          "type",
          "valu"
        ],
        "Result.html#sort": [
          "custom",
          "function",
          "result",
          "result#sort",
          "sort",
          "sortfn",
          "us"
        ],
        "Result.html#map": [
          "custom",
          "function",
          "map",
          "mapfn",
          "result",
          "result#map",
          "us"
        ],
        "Result.html#limit": [
          "function",
          "limit",
          "number",
          "result",
          "result#limit",
          "valu"
        ]
      },
      "length": 55
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "b": {
          "docs": {},
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 14
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 14
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Collection.html#testDocument": {
                          "ref": "Collection.html#testDocument",
                          "tf": 33.33333333333333
                        },
                        "Result.html#simpleSort": {
                          "ref": "Result.html#simpleSort",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "TrustDB.html#createCollection": {
                      "ref": "TrustDB.html#createCollection",
                      "tf": 2.272727272727273
                    },
                    "TrustDB.html#addCollection": {
                      "ref": "TrustDB.html#addCollection",
                      "tf": 1.6129032258064515
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "d": {
                "docs": {},
                "o": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 600
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#connect": {
                    "ref": "TrustDB.html#connect",
                    "tf": 2.7777777777777777
                  }
                },
                "p": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "h": {
                        "docs": {
                          "TrustDB.html#filepath": {
                            "ref": "TrustDB.html#filepath",
                            "tf": 775
                          },
                          "TrustDB.html#saveDatabase": {
                            "ref": "TrustDB.html#saveDatabase",
                            "tf": 7.142857142857142
                          },
                          "TrustDB.html#moveDatabase": {
                            "ref": "TrustDB.html#moveDatabase",
                            "tf": 25
                          },
                          "TrustDB.html#save": {
                            "ref": "TrustDB.html#save",
                            "tf": 7.142857142857142
                          }
                        }
                      }
                    }
                  }
                },
                "s": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "m": {
                            "docs": {
                              "TrustDB.html#deleteDatabase": {
                                "ref": "TrustDB.html#deleteDatabase",
                                "tf": 12.5
                              },
                              "TrustDB.html#moveDatabase": {
                                "ref": "TrustDB.html#moveDatabase",
                                "tf": 10
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Collection.html#find": {
                        "ref": "Collection.html#find",
                        "tf": 31.25
                      },
                      "Collection.html#findOne": {
                        "ref": "Collection.html#findOne",
                        "tf": 38.888888888888886
                      },
                      "Collection.html#remove": {
                        "ref": "Collection.html#remove",
                        "tf": 39.58333333333333
                      },
                      "Collection.html#removeOne": {
                        "ref": "Collection.html#removeOne",
                        "tf": 38.888888888888886
                      },
                      "Collection.html#update": {
                        "ref": "Collection.html#update",
                        "tf": 30.555555555555557
                      },
                      "Result.html#documents": {
                        "ref": "Result.html#documents",
                        "tf": 12.5
                      },
                      "Result.html#originalDocuments": {
                        "ref": "Result.html#originalDocuments",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "Collection.html#firstDocument": {
                      "ref": "Collection.html#firstDocument",
                      "tf": 16.666666666666664
                    },
                    "Collection.html#findOne": {
                      "ref": "Collection.html#findOne",
                      "tf": 5.555555555555555
                    },
                    "Collection.html#removeExact": {
                      "ref": "Collection.html#removeExact",
                      "tf": 25
                    },
                    "Collection.html#removeOne": {
                      "ref": "Collection.html#removeOne",
                      "tf": 5.555555555555555
                    }
                  },
                  "d": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "u": {
                          "docs": {
                            "Collection.html#firstDocument": {
                              "ref": "Collection.html#firstDocument",
                              "tf": 750
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "Collection.html#find": {
                    "ref": "Collection.html#find",
                    "tf": 681.25
                  },
                  "Collection.html#findOne": {
                    "ref": "Collection.html#findOne",
                    "tf": 5.555555555555555
                  },
                  "Collection.html#findById": {
                    "ref": "Collection.html#findById",
                    "tf": 12.5
                  }
                },
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Collection.html#findOne": {
                        "ref": "Collection.html#findOne",
                        "tf": 683.3333333333334
                      }
                    }
                  }
                },
                "b": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "Collection.html#findById": {
                            "ref": "Collection.html#findById",
                            "tf": 683.3333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "TrustDB.html#disconnect": {
                            "ref": "TrustDB.html#disconnect",
                            "tf": 110
                          },
                          "TrustDB.html#createCollection": {
                            "ref": "TrustDB.html#createCollection",
                            "tf": 110
                          },
                          "TrustDB.html#addCollection": {
                            "ref": "TrustDB.html#addCollection",
                            "tf": 111.61290322580645
                          },
                          "TrustDB.html#deleteCollection": {
                            "ref": "TrustDB.html#deleteCollection",
                            "tf": 110
                          },
                          "TrustDB.html#getCollection": {
                            "ref": "TrustDB.html#getCollection",
                            "tf": 110
                          },
                          "TrustDB.html#saveDatabase": {
                            "ref": "TrustDB.html#saveDatabase",
                            "tf": 110
                          },
                          "TrustDB.html#deleteDatabase": {
                            "ref": "TrustDB.html#deleteDatabase",
                            "tf": 110
                          },
                          "TrustDB.html#moveDatabase": {
                            "ref": "TrustDB.html#moveDatabase",
                            "tf": 110
                          },
                          "TrustDB.html#configureSettings": {
                            "ref": "TrustDB.html#configureSettings",
                            "tf": 110
                          },
                          "TrustDB.html#clear": {
                            "ref": "TrustDB.html#clear",
                            "tf": 110
                          },
                          "TrustDB.html#connect": {
                            "ref": "TrustDB.html#connect",
                            "tf": 110
                          },
                          "TrustDB.html#save": {
                            "ref": "TrustDB.html#save",
                            "tf": 110
                          },
                          "Collection.html#insert": {
                            "ref": "Collection.html#insert",
                            "tf": 110
                          },
                          "Collection.html#insertOne": {
                            "ref": "Collection.html#insertOne",
                            "tf": 110
                          },
                          "Collection.html#find": {
                            "ref": "Collection.html#find",
                            "tf": 116.25
                          },
                          "Collection.html#findOne": {
                            "ref": "Collection.html#findOne",
                            "tf": 115.55555555555556
                          },
                          "Collection.html#findById": {
                            "ref": "Collection.html#findById",
                            "tf": 110
                          },
                          "Collection.html#removeExact": {
                            "ref": "Collection.html#removeExact",
                            "tf": 110
                          },
                          "Collection.html#remove": {
                            "ref": "Collection.html#remove",
                            "tf": 116.25
                          },
                          "Collection.html#removeOne": {
                            "ref": "Collection.html#removeOne",
                            "tf": 115.55555555555556
                          },
                          "Collection.html#removeById": {
                            "ref": "Collection.html#removeById",
                            "tf": 110
                          },
                          "Collection.html#update": {
                            "ref": "Collection.html#update",
                            "tf": 115.55555555555556
                          },
                          "Collection.html#registerSchema": {
                            "ref": "Collection.html#registerSchema",
                            "tf": 110
                          },
                          "Collection.html#unregisterSchema": {
                            "ref": "Collection.html#unregisterSchema",
                            "tf": 110
                          },
                          "Collection.html#cleanWithSchema": {
                            "ref": "Collection.html#cleanWithSchema",
                            "tf": 110
                          },
                          "Collection.html#testDocument": {
                            "ref": "Collection.html#testDocument",
                            "tf": 110
                          },
                          "Collection.html#clear": {
                            "ref": "Collection.html#clear",
                            "tf": 110
                          },
                          "Collection.html#updateById": {
                            "ref": "Collection.html#updateById",
                            "tf": 110
                          },
                          "Result.html#simpleSort": {
                            "ref": "Result.html#simpleSort",
                            "tf": 110
                          },
                          "Result.html#sort": {
                            "ref": "Result.html#sort",
                            "tf": 118.33333333333333
                          },
                          "Result.html#map": {
                            "ref": "Result.html#map",
                            "tf": 118.33333333333333
                          },
                          "Result.html#limit": {
                            "ref": "Result.html#limit",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Collection.html#unregisterSchema": {
                          "ref": "Collection.html#unregisterSchema",
                          "tf": 6.25
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "b": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 14
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "TrustDB.html": {
                          "ref": "TrustDB.html",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#deleteCollection": {
                          "ref": "TrustDB.html#deleteCollection",
                          "tf": 7.142857142857142
                        },
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 2.7777777777777777
                        },
                        "Collection.html": {
                          "ref": "Collection.html",
                          "tf": 16.666666666666664
                        },
                        "Result.html": {
                          "ref": "Result.html",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Collection.html#insert": {
                        "ref": "Collection.html#insert",
                        "tf": 712.5
                      },
                      "Collection.html#insertOne": {
                        "ref": "Collection.html#insertOne",
                        "tf": 12.5
                      },
                      "Collection.html#registerSchema": {
                        "ref": "Collection.html#registerSchema",
                        "tf": 8.333333333333332
                      }
                    },
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Collection.html#insertOne": {
                            "ref": "Collection.html#insertOne",
                            "tf": 683.3333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "TrustDB.html#autosaveInterval": {
                        "ref": "TrustDB.html#autosaveInterval",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "Collection.html#cleanWithSchema": {
                          "ref": "Collection.html#cleanWithSchema",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "p": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "TrustDB.html#addCollection": {
                        "ref": "TrustDB.html#addCollection",
                        "tf": 1.6129032258064515
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "Collection.html#findById": {
                "ref": "Collection.html#findById",
                "tf": 45.83333333333333
              },
              "Collection.html#removeById": {
                "ref": "Collection.html#removeById",
                "tf": 45.83333333333333
              },
              "Collection.html#updateById": {
                "ref": "Collection.html#updateById",
                "tf": 37.5
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {},
            "d": {
              "docs": {},
              "o": {
                "docs": {},
                "c": {
                  "3": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 14
                      }
                    }
                  },
                  "docs": {}
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {
              "TrustDB.html#configureSettings": {
                "ref": "TrustDB.html#configureSettings",
                "tf": 16.666666666666664
              }
            },
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "TrustDB.html#settings": {
                      "ref": "TrustDB.html#settings",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "TrustDB.html#disconnect": {
                      "ref": "TrustDB.html#disconnect",
                      "tf": 3.8461538461538463
                    },
                    "Collection.html#removeExact": {
                      "ref": "Collection.html#removeExact",
                      "tf": 8.333333333333332
                    },
                    "Collection.html#remove": {
                      "ref": "Collection.html#remove",
                      "tf": 689.5833333333334
                    },
                    "Collection.html#removeOne": {
                      "ref": "Collection.html#removeOne",
                      "tf": 5.555555555555555
                    },
                    "Collection.html#removeById": {
                      "ref": "Collection.html#removeById",
                      "tf": 12.5
                    }
                  },
                  "e": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "x": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Collection.html#removeExact": {
                                  "ref": "Collection.html#removeExact",
                                  "tf": 675
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Collection.html#removeOne": {
                            "ref": "Collection.html#removeOne",
                            "tf": 683.3333333333334
                          }
                        }
                      }
                    },
                    "b": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Collection.html#removeById": {
                                "ref": "Collection.html#removeById",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "TrustDB.html#createCollection": {
                        "ref": "TrustDB.html#createCollection",
                        "tf": 2.272727272727273
                      },
                      "TrustDB.html#addCollection": {
                        "ref": "TrustDB.html#addCollection",
                        "tf": 1.6129032258064515
                      }
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "i": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "v": {
                      "docs": {
                        "TrustDB.html#getCollection": {
                          "ref": "TrustDB.html#getCollection",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "u": {
                "docs": {},
                "l": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Result.html": {
                        "ref": "Result.html",
                        "tf": 1916.6666666666667
                      },
                      "Result.html#originalDocuments": {
                        "ref": "Result.html#originalDocuments",
                        "tf": 12.5
                      },
                      "Result.html#simpleSort": {
                        "ref": "Result.html#simpleSort",
                        "tf": 3.8461538461538463
                      },
                      "Result.html#sort": {
                        "ref": "Result.html#sort",
                        "tf": 8.333333333333332
                      },
                      "Result.html#map": {
                        "ref": "Result.html#map",
                        "tf": 8.333333333333332
                      },
                      "Result.html#limit": {
                        "ref": "Result.html#limit",
                        "tf": 16.666666666666664
                      }
                    },
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Collection.html#find": {
                                "ref": "Collection.html#find",
                                "tf": 25
                              }
                            }
                          }
                        }
                      }
                    },
                    "#": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "u": {
                              "docs": {
                                "Result.html#documents": {
                                  "ref": "Result.html#documents",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      },
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "u": {
                                              "docs": {
                                                "Result.html#originalDocuments": {
                                                  "ref": "Result.html#originalDocuments",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "s": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Result.html#simpleSort": {
                                              "ref": "Result.html#simpleSort",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "o": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Result.html#sort": {
                                  "ref": "Result.html#sort",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      },
                      "m": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "p": {
                            "docs": {
                              "Result.html#map": {
                                "ref": "Result.html#map",
                                "tf": 1150
                              }
                            }
                          }
                        }
                      },
                      "l": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Result.html#limit": {
                                    "ref": "Result.html#limit",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Collection.html#registerSchema": {
                        "ref": "Collection.html#registerSchema",
                        "tf": 8.333333333333332
                      },
                      "Collection.html#cleanWithSchema": {
                        "ref": "Collection.html#cleanWithSchema",
                        "tf": 7.142857142857142
                      },
                      "Collection.html#testDocument": {
                        "ref": "Collection.html#testDocument",
                        "tf": 8.333333333333332
                      }
                    },
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "a": {
                                    "docs": {
                                      "Collection.html#registerSchema": {
                                        "ref": "Collection.html#registerSchema",
                                        "tf": 683.3333333333334
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 14
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "d": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "u": {
                        "docs": {
                          "Collection.html#testDocument": {
                            "ref": "Collection.html#testDocument",
                            "tf": 683.3333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "u": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "b": {
                      "docs": {
                        "TrustDB.html": {
                          "ref": "TrustDB.html",
                          "tf": 1916.6666666666667
                        }
                      },
                      "#": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "TrustDB.html#connected": {
                                          "ref": "TrustDB.html#connected",
                                          "tf": 1150
                                        },
                                        "TrustDB.html#connect": {
                                          "ref": "TrustDB.html#connect",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "f": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "TrustDB.html#configureSettings": {
                                                    "ref": "TrustDB.html#configureSettings",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "l": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "TrustDB.html#collections": {
                                          "ref": "TrustDB.html#collections",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "r": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "TrustDB.html#created": {
                                      "ref": "TrustDB.html#created",
                                      "tf": 1150
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {
                                                    "TrustDB.html#createCollection": {
                                                      "ref": "TrustDB.html#createCollection",
                                                      "tf": 1150
                                                    },
                                                    "TrustDB.html#addCollection": {
                                                      "ref": "TrustDB.html#addCollection",
                                                      "tf": 1.6129032258064515
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "l": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "r": {
                                  "docs": {
                                    "TrustDB.html#clear": {
                                      "ref": "TrustDB.html#clear",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "f": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "h": {
                                        "docs": {
                                          "TrustDB.html#filepath": {
                                            "ref": "TrustDB.html#filepath",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "z": {
                              "docs": {
                                "TrustDB.html#size": {
                                  "ref": "TrustDB.html#size",
                                  "tf": 1150
                                }
                              }
                            }
                          },
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "TrustDB.html#settings": {
                                  "ref": "TrustDB.html#settings",
                                  "tf": 1150
                                }
                              }
                            }
                          },
                          "a": {
                            "docs": {},
                            "v": {
                              "docs": {
                                "TrustDB.html#save": {
                                  "ref": "TrustDB.html#save",
                                  "tf": 1150
                                }
                              },
                              "e": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "b": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "TrustDB.html#saveDatabase": {
                                                  "ref": "TrustDB.html#saveDatabase",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "s": {
                                    "docs": {
                                      "TrustDB.html#totalSize": {
                                        "ref": "TrustDB.html#totalSize",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "a": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "v": {
                                      "docs": {
                                        "TrustDB.html#autosave": {
                                          "ref": "TrustDB.html#autosave",
                                          "tf": 1150
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "v": {
                                                    "docs": {
                                                      "TrustDB.html#autosaveInterval": {
                                                        "ref": "TrustDB.html#autosaveInterval",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "d": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "TrustDB.html#addCollection": {
                                                "ref": "TrustDB.html#addCollection",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "d": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "TrustDB.html#disconnect": {
                                                "ref": "TrustDB.html#disconnect",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "e": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {
                                                    "TrustDB.html#createCollection": {
                                                      "ref": "TrustDB.html#createCollection",
                                                      "tf": 2.272727272727273
                                                    },
                                                    "TrustDB.html#addCollection": {
                                                      "ref": "TrustDB.html#addCollection",
                                                      "tf": 1.6129032258064515
                                                    },
                                                    "TrustDB.html#deleteCollection": {
                                                      "ref": "TrustDB.html#deleteCollection",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "d": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "b": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {
                                                    "TrustDB.html#deleteDatabase": {
                                                      "ref": "TrustDB.html#deleteDatabase",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "g": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "TrustDB.html#getCollection": {
                                                "ref": "TrustDB.html#getCollection",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "m": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "b": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "TrustDB.html#moveDatabase": {
                                                  "ref": "TrustDB.html#moveDatabase",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "TrustDB.html#connect": {
                    "ref": "TrustDB.html#connect",
                    "tf": 2.7777777777777777
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#created": {
                    "ref": "TrustDB.html#created",
                    "tf": 12.5
                  },
                  "Collection.html#created": {
                    "ref": "Collection.html#created",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "TrustDB.html#totalSize": {
                        "ref": "TrustDB.html#totalSize",
                        "tf": 750
                      }
                    }
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 3.8461538461538463
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {
                "Collection.html#insert": {
                  "ref": "Collection.html#insert",
                  "tf": 50
                },
                "Collection.html#insertOne": {
                  "ref": "Collection.html#insertOne",
                  "tf": 33.33333333333333
                },
                "Collection.html#removeExact": {
                  "ref": "Collection.html#removeExact",
                  "tf": 25
                }
              },
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "TrustDB.html#totalSize": {
                            "ref": "TrustDB.html#totalSize",
                            "tf": 16.666666666666664
                          },
                          "TrustDB.html#disconnect": {
                            "ref": "TrustDB.html#disconnect",
                            "tf": 3.8461538461538463
                          },
                          "Collection.html#documents": {
                            "ref": "Collection.html#documents",
                            "tf": 775
                          },
                          "Collection.html#firstDocument": {
                            "ref": "Collection.html#firstDocument",
                            "tf": 16.666666666666664
                          },
                          "Collection.html#lastDocument": {
                            "ref": "Collection.html#lastDocument",
                            "tf": 16.666666666666664
                          },
                          "Collection.html#size": {
                            "ref": "Collection.html#size",
                            "tf": 16.666666666666664
                          },
                          "Collection.html#insert": {
                            "ref": "Collection.html#insert",
                            "tf": 12.5
                          },
                          "Collection.html#insertOne": {
                            "ref": "Collection.html#insertOne",
                            "tf": 12.5
                          },
                          "Collection.html#find": {
                            "ref": "Collection.html#find",
                            "tf": 6.25
                          },
                          "Collection.html#findOne": {
                            "ref": "Collection.html#findOne",
                            "tf": 5.555555555555555
                          },
                          "Collection.html#findById": {
                            "ref": "Collection.html#findById",
                            "tf": 12.5
                          },
                          "Collection.html#removeExact": {
                            "ref": "Collection.html#removeExact",
                            "tf": 16.666666666666664
                          },
                          "Collection.html#remove": {
                            "ref": "Collection.html#remove",
                            "tf": 6.25
                          },
                          "Collection.html#removeOne": {
                            "ref": "Collection.html#removeOne",
                            "tf": 5.555555555555555
                          },
                          "Collection.html#removeById": {
                            "ref": "Collection.html#removeById",
                            "tf": 12.5
                          },
                          "Collection.html#update": {
                            "ref": "Collection.html#update",
                            "tf": 5.555555555555555
                          },
                          "Collection.html#registerSchema": {
                            "ref": "Collection.html#registerSchema",
                            "tf": 8.333333333333332
                          },
                          "Collection.html#unregisterSchema": {
                            "ref": "Collection.html#unregisterSchema",
                            "tf": 6.25
                          },
                          "Collection.html#cleanWithSchema": {
                            "ref": "Collection.html#cleanWithSchema",
                            "tf": 7.142857142857142
                          },
                          "Collection.html#testDocument": {
                            "ref": "Collection.html#testDocument",
                            "tf": 41.66666666666666
                          },
                          "Collection.html#clear": {
                            "ref": "Collection.html#clear",
                            "tf": 12.5
                          },
                          "Collection.html#updateById": {
                            "ref": "Collection.html#updateById",
                            "tf": 12.5
                          },
                          "Result.html#documents": {
                            "ref": "Result.html#documents",
                            "tf": 762.5
                          },
                          "Result.html#originalDocuments": {
                            "ref": "Result.html#originalDocuments",
                            "tf": 12.5
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "TrustDB.html#connected": {
                          "ref": "TrustDB.html#connected",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#filepath": {
                          "ref": "TrustDB.html#filepath",
                          "tf": 25
                        },
                        "TrustDB.html#created": {
                          "ref": "TrustDB.html#created",
                          "tf": 12.5
                        },
                        "TrustDB.html#collections": {
                          "ref": "TrustDB.html#collections",
                          "tf": 25
                        },
                        "TrustDB.html#size": {
                          "ref": "TrustDB.html#size",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#settings": {
                          "ref": "TrustDB.html#settings",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#disconnect": {
                          "ref": "TrustDB.html#disconnect",
                          "tf": 7.6923076923076925
                        },
                        "TrustDB.html#createCollection": {
                          "ref": "TrustDB.html#createCollection",
                          "tf": 2.272727272727273
                        },
                        "TrustDB.html#addCollection": {
                          "ref": "TrustDB.html#addCollection",
                          "tf": 3.225806451612903
                        },
                        "TrustDB.html#saveDatabase": {
                          "ref": "TrustDB.html#saveDatabase",
                          "tf": 7.142857142857142
                        },
                        "TrustDB.html#deleteDatabase": {
                          "ref": "TrustDB.html#deleteDatabase",
                          "tf": 12.5
                        },
                        "TrustDB.html#moveDatabase": {
                          "ref": "TrustDB.html#moveDatabase",
                          "tf": 10
                        },
                        "TrustDB.html#clear": {
                          "ref": "TrustDB.html#clear",
                          "tf": 12.5
                        },
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 2.7777777777777777
                        },
                        "TrustDB.html#save": {
                          "ref": "TrustDB.html#save",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "TrustDB.html#created": {
                    "ref": "TrustDB.html#created",
                    "tf": 12.5
                  },
                  "Collection.html#created": {
                    "ref": "Collection.html#created",
                    "tf": 12.5
                  },
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 3.8461538461538463
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "a": {
                "docs": {},
                "b": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "TrustDB.html#autosave": {
                        "ref": "TrustDB.html#autosave",
                        "tf": 16.666666666666664
                      },
                      "TrustDB.html#disconnect": {
                        "ref": "TrustDB.html#disconnect",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "TrustDB.html#disconnect": {
                                "ref": "TrustDB.html#disconnect",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "TrustDB.html#deleteCollection": {
                      "ref": "TrustDB.html#deleteCollection",
                      "tf": 7.142857142857142
                    },
                    "TrustDB.html#deleteDatabase": {
                      "ref": "TrustDB.html#deleteDatabase",
                      "tf": 12.5
                    },
                    "TrustDB.html#clear": {
                      "ref": "TrustDB.html#clear",
                      "tf": 12.5
                    },
                    "Collection.html#clear": {
                      "ref": "Collection.html#clear",
                      "tf": 12.5
                    }
                  },
                  "e": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "TrustDB.html#deleteCollection": {
                                      "ref": "TrustDB.html#deleteCollection",
                                      "tf": 683.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "d": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "TrustDB.html#deleteDatabase": {
                                      "ref": "TrustDB.html#deleteDatabase",
                                      "tf": 683.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "c": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 33.33333333333333
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {
                    "TrustDB.html#createCollection": {
                      "ref": "TrustDB.html#createCollection",
                      "tf": 2.272727272727273
                    },
                    "TrustDB.html#deleteCollection": {
                      "ref": "TrustDB.html#deleteCollection",
                      "tf": 7.142857142857142
                    },
                    "Collection.html#removeExact": {
                      "ref": "Collection.html#removeExact",
                      "tf": 8.333333333333332
                    },
                    "Result.html#simpleSort": {
                      "ref": "Result.html#simpleSort",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "TrustDB.html#getCollection": {
                                "ref": "TrustDB.html#getCollection",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "TrustDB.html": {
                      "ref": "TrustDB.html",
                      "tf": 110
                    },
                    "Collection.html": {
                      "ref": "Collection.html",
                      "tf": 110
                    },
                    "Result.html": {
                      "ref": "Result.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "r": {
                  "docs": {
                    "TrustDB.html#disconnect": {
                      "ref": "TrustDB.html#disconnect",
                      "tf": 3.8461538461538463
                    },
                    "TrustDB.html#clear": {
                      "ref": "TrustDB.html#clear",
                      "tf": 712.5
                    },
                    "Collection.html#clear": {
                      "ref": "Collection.html#clear",
                      "tf": 712.5
                    }
                  }
                },
                "n": {
                  "docs": {
                    "Collection.html#cleanWithSchema": {
                      "ref": "Collection.html#cleanWithSchema",
                      "tf": 7.142857142857142
                    }
                  },
                  "w": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "a": {
                                      "docs": {
                                        "Collection.html#cleanWithSchema": {
                                          "ref": "Collection.html#cleanWithSchema",
                                          "tf": 700
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "s": {
                "docs": {},
                "e": {
                  "docs": {
                    "TrustDB.html#disconnect": {
                      "ref": "TrustDB.html#disconnect",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "TrustDB.html": {
                      "ref": "TrustDB.html",
                      "tf": 16.666666666666664
                    },
                    "TrustDB.html#created": {
                      "ref": "TrustDB.html#created",
                      "tf": 750
                    },
                    "TrustDB.html#createCollection": {
                      "ref": "TrustDB.html#createCollection",
                      "tf": 4.545454545454546
                    },
                    "TrustDB.html#addCollection": {
                      "ref": "TrustDB.html#addCollection",
                      "tf": 4.838709677419355
                    },
                    "TrustDB.html#connect": {
                      "ref": "TrustDB.html#connect",
                      "tf": 2.7777777777777777
                    },
                    "Collection.html": {
                      "ref": "Collection.html",
                      "tf": 16.666666666666664
                    },
                    "Collection.html#created": {
                      "ref": "Collection.html#created",
                      "tf": 750
                    },
                    "Result.html": {
                      "ref": "Result.html",
                      "tf": 16.666666666666664
                    }
                  },
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "TrustDB.html#created": {
                            "ref": "TrustDB.html#created",
                            "tf": 12.5
                          },
                          "Collection.html#created": {
                            "ref": "Collection.html#created",
                            "tf": 12.5
                          }
                        }
                      }
                    }
                  },
                  "e": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "TrustDB.html#createCollection": {
                                      "ref": "TrustDB.html#createCollection",
                                      "tf": 683.3333333333334
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "n": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "TrustDB.html#connected": {
                          "ref": "TrustDB.html#connected",
                          "tf": 766.6666666666666
                        },
                        "TrustDB.html#disconnect": {
                          "ref": "TrustDB.html#disconnect",
                          "tf": 3.8461538461538463
                        },
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 677.7777777777778
                        }
                      }
                    }
                  }
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "TrustDB.html#configureSettings": {
                            "ref": "TrustDB.html#configureSettings",
                            "tf": 16.666666666666664
                          }
                        },
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "TrustDB.html#configureSettings": {
                                    "ref": "TrustDB.html#configureSettings",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "TrustDB.html#collections": {
                          "ref": "TrustDB.html#collections",
                          "tf": 775
                        },
                        "TrustDB.html#size": {
                          "ref": "TrustDB.html#size",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#totalSize": {
                          "ref": "TrustDB.html#totalSize",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#disconnect": {
                          "ref": "TrustDB.html#disconnect",
                          "tf": 7.6923076923076925
                        },
                        "TrustDB.html#createCollection": {
                          "ref": "TrustDB.html#createCollection",
                          "tf": 42.42424242424242
                        },
                        "TrustDB.html#addCollection": {
                          "ref": "TrustDB.html#addCollection",
                          "tf": 76.34408602150536
                        },
                        "TrustDB.html#deleteCollection": {
                          "ref": "TrustDB.html#deleteCollection",
                          "tf": 80.95238095238093
                        },
                        "TrustDB.html#getCollection": {
                          "ref": "TrustDB.html#getCollection",
                          "tf": 49.99999999999999
                        },
                        "TrustDB.html#saveDatabase": {
                          "ref": "TrustDB.html#saveDatabase",
                          "tf": 7.142857142857142
                        },
                        "TrustDB.html#clear": {
                          "ref": "TrustDB.html#clear",
                          "tf": 12.5
                        },
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 2.7777777777777777
                        },
                        "TrustDB.html#save": {
                          "ref": "TrustDB.html#save",
                          "tf": 7.142857142857142
                        },
                        "Collection.html": {
                          "ref": "Collection.html",
                          "tf": 1916.6666666666667
                        },
                        "Collection.html#documents": {
                          "ref": "Collection.html#documents",
                          "tf": 25
                        },
                        "Collection.html#name": {
                          "ref": "Collection.html#name",
                          "tf": 25
                        },
                        "Collection.html#created": {
                          "ref": "Collection.html#created",
                          "tf": 12.5
                        },
                        "Collection.html#firstDocument": {
                          "ref": "Collection.html#firstDocument",
                          "tf": 16.666666666666664
                        },
                        "Collection.html#lastDocument": {
                          "ref": "Collection.html#lastDocument",
                          "tf": 16.666666666666664
                        },
                        "Collection.html#size": {
                          "ref": "Collection.html#size",
                          "tf": 16.666666666666664
                        },
                        "Collection.html#insert": {
                          "ref": "Collection.html#insert",
                          "tf": 12.5
                        },
                        "Collection.html#insertOne": {
                          "ref": "Collection.html#insertOne",
                          "tf": 12.5
                        },
                        "Collection.html#find": {
                          "ref": "Collection.html#find",
                          "tf": 6.25
                        },
                        "Collection.html#findOne": {
                          "ref": "Collection.html#findOne",
                          "tf": 5.555555555555555
                        },
                        "Collection.html#removeExact": {
                          "ref": "Collection.html#removeExact",
                          "tf": 8.333333333333332
                        },
                        "Collection.html#remove": {
                          "ref": "Collection.html#remove",
                          "tf": 6.25
                        },
                        "Collection.html#removeOne": {
                          "ref": "Collection.html#removeOne",
                          "tf": 5.555555555555555
                        },
                        "Collection.html#update": {
                          "ref": "Collection.html#update",
                          "tf": 5.555555555555555
                        },
                        "Collection.html#registerSchema": {
                          "ref": "Collection.html#registerSchema",
                          "tf": 8.333333333333332
                        },
                        "Collection.html#unregisterSchema": {
                          "ref": "Collection.html#unregisterSchema",
                          "tf": 6.25
                        },
                        "Collection.html#cleanWithSchema": {
                          "ref": "Collection.html#cleanWithSchema",
                          "tf": 7.142857142857142
                        },
                        "Collection.html#testDocument": {
                          "ref": "Collection.html#testDocument",
                          "tf": 8.333333333333332
                        },
                        "Collection.html#clear": {
                          "ref": "Collection.html#clear",
                          "tf": 12.5
                        }
                      },
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "#": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "u": {
                                      "docs": {
                                        "Collection.html#documents": {
                                          "ref": "Collection.html#documents",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "n": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "m": {
                                    "docs": {
                                      "Collection.html#name": {
                                        "ref": "Collection.html#name",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              },
                              "c": {
                                "docs": {},
                                "r": {
                                  "docs": {
                                    "Collection.html#created": {
                                      "ref": "Collection.html#created",
                                      "tf": 1150
                                    }
                                  }
                                },
                                "l": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "w": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "h": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {
                                                              "Collection.html#cleanWithSchema": {
                                                                "ref": "Collection.html#cleanWithSchema",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "r": {
                                        "docs": {
                                          "Collection.html#clear": {
                                            "ref": "Collection.html#clear",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "f": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "u": {
                                                "docs": {
                                                  "Collection.html#firstDocument": {
                                                    "ref": "Collection.html#firstDocument",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "n": {
                                    "docs": {},
                                    "d": {
                                      "docs": {
                                        "Collection.html#find": {
                                          "ref": "Collection.html#find",
                                          "tf": 1150
                                        }
                                      },
                                      "o": {
                                        "docs": {},
                                        "n": {
                                          "docs": {
                                            "Collection.html#findOne": {
                                              "ref": "Collection.html#findOne",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      },
                                      "b": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "Collection.html#findById": {
                                                  "ref": "Collection.html#findById",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "l": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "u": {
                                              "docs": {
                                                "Collection.html#lastDocument": {
                                                  "ref": "Collection.html#lastDocument",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "s": {
                                "docs": {
                                  "Collection.html#size": {
                                    "ref": "Collection.html#size",
                                    "tf": 1150
                                  }
                                }
                              },
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Collection.html#insert": {
                                              "ref": "Collection.html#insert",
                                              "tf": 1150
                                            }
                                          },
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {
                                                "Collection.html#insertOne": {
                                                  "ref": "Collection.html#insertOne",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "v": {
                                        "docs": {
                                          "Collection.html#remove": {
                                            "ref": "Collection.html#remove",
                                            "tf": 1150
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "x": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "Collection.html#removeExact": {
                                                        "ref": "Collection.html#removeExact",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {
                                                "Collection.html#removeOne": {
                                                  "ref": "Collection.html#removeOne",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          },
                                          "b": {
                                            "docs": {},
                                            "y": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {
                                                    "Collection.html#removeById": {
                                                      "ref": "Collection.html#removeById",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "g": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "h": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {
                                                            "Collection.html#registerSchema": {
                                                              "ref": "Collection.html#registerSchema",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "u": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Collection.html#update": {
                                        "ref": "Collection.html#update",
                                        "tf": 1150
                                      }
                                    },
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "b": {
                                            "docs": {},
                                            "y": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {
                                                    "Collection.html#updateById": {
                                                      "ref": "Collection.html#updateById",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "n": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "h": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {
                                                                "Collection.html#unregisterSchema": {
                                                                  "ref": "Collection.html#unregisterSchema",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "u": {
                                              "docs": {
                                                "Collection.html#testDocument": {
                                                  "ref": "Collection.html#testDocument",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "TrustDB.html#autosave": {
                          "ref": "TrustDB.html#autosave",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#autosaveInterval": {
                          "ref": "TrustDB.html#autosaveInterval",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "Collection.html#update": {
                        "ref": "Collection.html#update",
                        "tf": 5.555555555555555
                      },
                      "Result.html#sort": {
                        "ref": "Result.html#sort",
                        "tf": 8.333333333333332
                      },
                      "Result.html#map": {
                        "ref": "Result.html#map",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#createCollection": {
                    "ref": "TrustDB.html#createCollection",
                    "tf": 2.272727272727273
                  },
                  "TrustDB.html#addCollection": {
                    "ref": "TrustDB.html#addCollection",
                    "tf": 1.6129032258064515
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "TrustDB.html#disconnect": {
                        "ref": "TrustDB.html#disconnect",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {
                    "Result.html#limit": {
                      "ref": "Result.html#limit",
                      "tf": 716.6666666666666
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "TrustDB.html#disconnect": {
                                  "ref": "TrustDB.html#disconnect",
                                  "tf": 33.33333333333333
                                },
                                "TrustDB.html#saveDatabase": {
                                  "ref": "TrustDB.html#saveDatabase",
                                  "tf": 33.33333333333333
                                },
                                "TrustDB.html#deleteDatabase": {
                                  "ref": "TrustDB.html#deleteDatabase",
                                  "tf": 33.33333333333333
                                },
                                "TrustDB.html#moveDatabase": {
                                  "ref": "TrustDB.html#moveDatabase",
                                  "tf": 25
                                },
                                "TrustDB.html#connect": {
                                  "ref": "TrustDB.html#connect",
                                  "tf": 25
                                },
                                "TrustDB.html#save": {
                                  "ref": "TrustDB.html#save",
                                  "tf": 33.33333333333333
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "TrustDB.html#connect": {
                    "ref": "TrustDB.html#connect",
                    "tf": 2.7777777777777777
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "Collection.html#lastDocument": {
                    "ref": "Collection.html#lastDocument",
                    "tf": 16.666666666666664
                  }
                },
                "d": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "u": {
                        "docs": {
                          "Collection.html#lastDocument": {
                            "ref": "Collection.html#lastDocument",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "TrustDB.html#connected": {
                        "ref": "TrustDB.html#connected",
                        "tf": 110
                      },
                      "TrustDB.html#filepath": {
                        "ref": "TrustDB.html#filepath",
                        "tf": 110
                      },
                      "TrustDB.html#created": {
                        "ref": "TrustDB.html#created",
                        "tf": 110
                      },
                      "TrustDB.html#collections": {
                        "ref": "TrustDB.html#collections",
                        "tf": 110
                      },
                      "TrustDB.html#size": {
                        "ref": "TrustDB.html#size",
                        "tf": 110
                      },
                      "TrustDB.html#totalSize": {
                        "ref": "TrustDB.html#totalSize",
                        "tf": 110
                      },
                      "TrustDB.html#settings": {
                        "ref": "TrustDB.html#settings",
                        "tf": 110
                      },
                      "TrustDB.html#autosave": {
                        "ref": "TrustDB.html#autosave",
                        "tf": 110
                      },
                      "TrustDB.html#autosaveInterval": {
                        "ref": "TrustDB.html#autosaveInterval",
                        "tf": 110
                      },
                      "Collection.html#documents": {
                        "ref": "Collection.html#documents",
                        "tf": 110
                      },
                      "Collection.html#name": {
                        "ref": "Collection.html#name",
                        "tf": 110
                      },
                      "Collection.html#created": {
                        "ref": "Collection.html#created",
                        "tf": 110
                      },
                      "Collection.html#firstDocument": {
                        "ref": "Collection.html#firstDocument",
                        "tf": 110
                      },
                      "Collection.html#lastDocument": {
                        "ref": "Collection.html#lastDocument",
                        "tf": 110
                      },
                      "Collection.html#size": {
                        "ref": "Collection.html#size",
                        "tf": 110
                      },
                      "Result.html#documents": {
                        "ref": "Result.html#documents",
                        "tf": 110
                      },
                      "Result.html#originalDocuments": {
                        "ref": "Result.html#originalDocuments",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "d": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "a": {
                        "docs": {
                          "TrustDB.html#saveDatabase": {
                            "ref": "TrustDB.html#saveDatabase",
                            "tf": 7.142857142857142
                          },
                          "TrustDB.html#save": {
                            "ref": "TrustDB.html#save",
                            "tf": 7.142857142857142
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#moveDatabase": {
                    "ref": "TrustDB.html#moveDatabase",
                    "tf": 10
                  }
                },
                "d": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "TrustDB.html#moveDatabase": {
                                  "ref": "TrustDB.html#moveDatabase",
                                  "tf": 675
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "Collection.html#find": {
                      "ref": "Collection.html#find",
                      "tf": 6.25
                    },
                    "Collection.html#findOne": {
                      "ref": "Collection.html#findOne",
                      "tf": 5.555555555555555
                    },
                    "Collection.html#findById": {
                      "ref": "Collection.html#findById",
                      "tf": 12.5
                    },
                    "Collection.html#removeExact": {
                      "ref": "Collection.html#removeExact",
                      "tf": 8.333333333333332
                    },
                    "Collection.html#remove": {
                      "ref": "Collection.html#remove",
                      "tf": 6.25
                    },
                    "Collection.html#removeOne": {
                      "ref": "Collection.html#removeOne",
                      "tf": 5.555555555555555
                    },
                    "Collection.html#removeById": {
                      "ref": "Collection.html#removeById",
                      "tf": 12.5
                    },
                    "Collection.html#update": {
                      "ref": "Collection.html#update",
                      "tf": 5.555555555555555
                    },
                    "Collection.html#updateById": {
                      "ref": "Collection.html#updateById",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {
                "Result.html#map": {
                  "ref": "Result.html#map",
                  "tf": 716.6666666666666
                }
              },
              "f": {
                "docs": {},
                "n": {
                  "docs": {
                    "Result.html#map": {
                      "ref": "Result.html#map",
                      "tf": 50
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {
                    "TrustDB.html#connected": {
                      "ref": "TrustDB.html#connected",
                      "tf": 16.666666666666664
                    },
                    "TrustDB.html#autosave": {
                      "ref": "TrustDB.html#autosave",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "p": {
                "docs": {
                  "Collection.html#unregisterSchema": {
                    "ref": "Collection.html#unregisterSchema",
                    "tf": 6.25
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Result.html#simpleSort": {
                        "ref": "Result.html#simpleSort",
                        "tf": 3.8461538461538463
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "z": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#size": {
                    "ref": "TrustDB.html#size",
                    "tf": 750
                  },
                  "Collection.html#size": {
                    "ref": "Collection.html#size",
                    "tf": 750
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "g": {
                "docs": {},
                "l": {
                  "docs": {
                    "Collection.html#insertOne": {
                      "ref": "Collection.html#insertOne",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Result.html#simpleSort": {
                                "ref": "Result.html#simpleSort",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "TrustDB.html#settings": {
                  "ref": "TrustDB.html#settings",
                  "tf": 766.6666666666666
                },
                "TrustDB.html#autosaveInterval": {
                  "ref": "TrustDB.html#autosaveInterval",
                  "tf": 12.5
                },
                "TrustDB.html#saveDatabase": {
                  "ref": "TrustDB.html#saveDatabase",
                  "tf": 7.142857142857142
                },
                "TrustDB.html#configureSettings": {
                  "ref": "TrustDB.html#configureSettings",
                  "tf": 66.66666666666666
                },
                "TrustDB.html#connect": {
                  "ref": "TrustDB.html#connect",
                  "tf": 33.33333333333333
                },
                "TrustDB.html#save": {
                  "ref": "TrustDB.html#save",
                  "tf": 7.142857142857142
                }
              }
            }
          },
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#disconnect": {
                    "ref": "TrustDB.html#disconnect",
                    "tf": 33.33333333333333
                  },
                  "TrustDB.html#saveDatabase": {
                    "ref": "TrustDB.html#saveDatabase",
                    "tf": 7.142857142857142
                  },
                  "TrustDB.html#save": {
                    "ref": "TrustDB.html#save",
                    "tf": 690.4761904761905
                  }
                },
                "d": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "TrustDB.html#saveDatabase": {
                                  "ref": "TrustDB.html#saveDatabase",
                                  "tf": 683.3333333333334
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#createCollection": {
                    "ref": "TrustDB.html#createCollection",
                    "tf": 4.545454545454546
                  },
                  "TrustDB.html#addCollection": {
                    "ref": "TrustDB.html#addCollection",
                    "tf": 3.225806451612903
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "Result.html#simpleSort": {
                        "ref": "Result.html#simpleSort",
                        "tf": 3.8461538461538463
                      }
                    },
                    "i": {
                      "docs": {
                        "TrustDB.html#saveDatabase": {
                          "ref": "TrustDB.html#saveDatabase",
                          "tf": 7.142857142857142
                        },
                        "TrustDB.html#save": {
                          "ref": "TrustDB.html#save",
                          "tf": 7.142857142857142
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "h": {
              "docs": {},
              "e": {
                "docs": {},
                "m": {
                  "docs": {},
                  "a": {
                    "docs": {
                      "Collection.html#registerSchema": {
                        "ref": "Collection.html#registerSchema",
                        "tf": 74.99999999999999
                      },
                      "Collection.html#unregisterSchema": {
                        "ref": "Collection.html#unregisterSchema",
                        "tf": 56.25
                      },
                      "Collection.html#cleanWithSchema": {
                        "ref": "Collection.html#cleanWithSchema",
                        "tf": 7.142857142857142
                      },
                      "Collection.html#testDocument": {
                        "ref": "Collection.html#testDocument",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "t": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 3.8461538461538463
                  },
                  "Result.html#sort": {
                    "ref": "Result.html#sort",
                    "tf": 716.6666666666666
                  }
                },
                "f": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Result.html#sort": {
                        "ref": "Result.html#sort",
                        "tf": 50
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "p": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Result.html#simpleSort": {
                          "ref": "Result.html#simpleSort",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "a": {
          "docs": {},
          "m": {
            "docs": {},
            "o": {
              "docs": {},
              "u": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "TrustDB.html#size": {
                        "ref": "TrustDB.html#size",
                        "tf": 16.666666666666664
                      },
                      "TrustDB.html#totalSize": {
                        "ref": "TrustDB.html#totalSize",
                        "tf": 16.666666666666664
                      },
                      "Collection.html#size": {
                        "ref": "Collection.html#size",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "t": {
              "docs": {},
              "o": {
                "docs": {},
                "s": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "v": {
                      "docs": {
                        "TrustDB.html#autosave": {
                          "ref": "TrustDB.html#autosave",
                          "tf": 766.6666666666666
                        },
                        "TrustDB.html#autosaveInterval": {
                          "ref": "TrustDB.html#autosaveInterval",
                          "tf": 12.5
                        },
                        "TrustDB.html#disconnect": {
                          "ref": "TrustDB.html#disconnect",
                          "tf": 3.8461538461538463
                        }
                      },
                      "e": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "v": {
                                    "docs": {
                                      "TrustDB.html#autosaveInterval": {
                                        "ref": "TrustDB.html#autosaveInterval",
                                        "tf": 750
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "TrustDB.html#createCollection": {
                "ref": "TrustDB.html#createCollection",
                "tf": 2.272727272727273
              },
              "TrustDB.html#addCollection": {
                "ref": "TrustDB.html#addCollection",
                "tf": 1.6129032258064515
              }
            },
            "d": {
              "docs": {
                "TrustDB.html#addCollection": {
                  "ref": "TrustDB.html#addCollection",
                  "tf": 1.6129032258064515
                }
              },
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "TrustDB.html#addCollection": {
                                "ref": "TrustDB.html#addCollection",
                                "tf": 683.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "TrustDB.html#createCollection": {
                          "ref": "TrustDB.html#createCollection",
                          "tf": 2.272727272727273
                        },
                        "TrustDB.html#addCollection": {
                          "ref": "TrustDB.html#addCollection",
                          "tf": 1.6129032258064515
                        },
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 2.7777777777777777
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "Result.html#documents": {
                      "ref": "Result.html#documents",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "&": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "TrustDB.html#clear": {
                                                          "ref": "TrustDB.html#clear",
                                                          "tf": 50
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "o": {
                              "docs": {},
                              "b": {
                                "docs": {},
                                "j": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "Collection.html#find": {
                                                  "ref": "Collection.html#find",
                                                  "tf": 25
                                                },
                                                "Collection.html#remove": {
                                                  "ref": "Collection.html#remove",
                                                  "tf": 33.33333333333333
                                                },
                                                "Collection.html#removeOne": {
                                                  "ref": "Collection.html#removeOne",
                                                  "tf": 33.33333333333333
                                                },
                                                "Collection.html#update": {
                                                  "ref": "Collection.html#update",
                                                  "tf": 25
                                                },
                                                "Collection.html#cleanWithSchema": {
                                                  "ref": "Collection.html#cleanWithSchema",
                                                  "tf": 50
                                                },
                                                "Collection.html#clear": {
                                                  "ref": "Collection.html#clear",
                                                  "tf": 50
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {
                    "TrustDB.html#connect": {
                      "ref": "TrustDB.html#connect",
                      "tf": 2.7777777777777777
                    }
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "n": {
            "docs": {},
            "a": {
              "docs": {},
              "b": {
                "docs": {},
                "l": {
                  "docs": {
                    "TrustDB.html#autosave": {
                      "ref": "TrustDB.html#autosave",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "TrustDB.html#disconnect": {
                      "ref": "TrustDB.html#disconnect",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "x": {
              "docs": {},
              "i": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "TrustDB.html#createCollection": {
                        "ref": "TrustDB.html#createCollection",
                        "tf": 2.272727272727273
                      },
                      "TrustDB.html#addCollection": {
                        "ref": "TrustDB.html#addCollection",
                        "tf": 1.6129032258064515
                      }
                    }
                  }
                }
              }
            }
          },
          "x": {
            "docs": {},
            "i": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "TrustDB.html#createCollection": {
                      "ref": "TrustDB.html#createCollection",
                      "tf": 2.272727272727273
                    },
                    "TrustDB.html#addCollection": {
                      "ref": "TrustDB.html#addCollection",
                      "tf": 1.6129032258064515
                    },
                    "TrustDB.html#deleteDatabase": {
                      "ref": "TrustDB.html#deleteDatabase",
                      "tf": 12.5
                    },
                    "TrustDB.html#connect": {
                      "ref": "TrustDB.html#connect",
                      "tf": 2.7777777777777777
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "Collection.html#insertOne": {
                        "ref": "Collection.html#insertOne",
                        "tf": 33.33333333333333
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "e": {
            "docs": {},
            "w": {
              "docs": {
                "TrustDB.html#autosaveInterval": {
                  "ref": "TrustDB.html#autosaveInterval",
                  "tf": 12.5
                },
                "TrustDB.html#addCollection": {
                  "ref": "TrustDB.html#addCollection",
                  "tf": 3.225806451612903
                },
                "TrustDB.html#moveDatabase": {
                  "ref": "TrustDB.html#moveDatabase",
                  "tf": 10
                },
                "TrustDB.html#connect": {
                  "ref": "TrustDB.html#connect",
                  "tf": 2.7777777777777777
                },
                "Collection.html#insert": {
                  "ref": "Collection.html#insert",
                  "tf": 12.5
                }
              }
            }
          },
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#createCollection": {
                    "ref": "TrustDB.html#createCollection",
                    "tf": 40.15151515151515
                  },
                  "TrustDB.html#addCollection": {
                    "ref": "TrustDB.html#addCollection",
                    "tf": 3.225806451612903
                  },
                  "TrustDB.html#deleteCollection": {
                    "ref": "TrustDB.html#deleteCollection",
                    "tf": 7.142857142857142
                  },
                  "TrustDB.html#getCollection": {
                    "ref": "TrustDB.html#getCollection",
                    "tf": 49.99999999999999
                  },
                  "Collection.html#name": {
                    "ref": "Collection.html#name",
                    "tf": 775
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Result.html#simpleSort": {
                        "ref": "Result.html#simpleSort",
                        "tf": 3.8461538461538463
                      },
                      "Result.html#limit": {
                        "ref": "Result.html#limit",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {
              "TrustDB.html#createCollection": {
                "ref": "TrustDB.html#createCollection",
                "tf": 2.272727272727273
              },
              "TrustDB.html#addCollection": {
                "ref": "TrustDB.html#addCollection",
                "tf": 3.225806451612903
              },
              "TrustDB.html#deleteCollection": {
                "ref": "TrustDB.html#deleteCollection",
                "tf": 7.142857142857142
              },
              "Collection.html#cleanWithSchema": {
                "ref": "Collection.html#cleanWithSchema",
                "tf": 7.142857142857142
              },
              "Collection.html#testDocument": {
                "ref": "Collection.html#testDocument",
                "tf": 8.333333333333332
              },
              "Result.html#sort": {
                "ref": "Result.html#sort",
                "tf": 8.333333333333332
              },
              "Result.html#map": {
                "ref": "Result.html#map",
                "tf": 8.333333333333332
              }
            }
          },
          "n": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "s": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "TrustDB.html#connect": {
                        "ref": "TrustDB.html#connect",
                        "tf": 2.7777777777777777
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "g": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Collection.html#unregisterSchema": {
                            "ref": "Collection.html#unregisterSchema",
                            "tf": 6.25
                          }
                        },
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "a": {
                                        "docs": {
                                          "Collection.html#unregisterSchema": {
                                            "ref": "Collection.html#unregisterSchema",
                                            "tf": 700
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "t": {
                  "docs": {
                    "Result.html#originalDocuments": {
                      "ref": "Result.html#originalDocuments",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "d": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Collection.html#update": {
                      "ref": "Collection.html#update",
                      "tf": 705.5555555555555
                    },
                    "Collection.html#updateById": {
                      "ref": "Collection.html#updateById",
                      "tf": 37.5
                    }
                  },
                  "e": {
                    "docs": {},
                    "b": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Collection.html#updateById": {
                                "ref": "Collection.html#updateById",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "m": {
                  "docs": {
                    "Collection.html#unregisterSchema": {
                      "ref": "Collection.html#unregisterSchema",
                      "tf": 6.25
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              ";": {
                                "docs": {},
                                "v": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "TrustDB.html#saveDatabase": {
                                                  "ref": "TrustDB.html#saveDatabase",
                                                  "tf": 33.33333333333333
                                                },
                                                "TrustDB.html#deleteDatabase": {
                                                  "ref": "TrustDB.html#deleteDatabase",
                                                  "tf": 33.33333333333333
                                                },
                                                "TrustDB.html#moveDatabase": {
                                                  "ref": "TrustDB.html#moveDatabase",
                                                  "tf": 25
                                                },
                                                "TrustDB.html#connect": {
                                                  "ref": "TrustDB.html#connect",
                                                  "tf": 25
                                                },
                                                "TrustDB.html#save": {
                                                  "ref": "TrustDB.html#save",
                                                  "tf": 33.33333333333333
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 33.33333333333333
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Result.html#simpleSort": {
                            "ref": "Result.html#simpleSort",
                            "tf": 7.6923076923076925
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "TrustDB.html#moveDatabase": {
                    "ref": "TrustDB.html#moveDatabase",
                    "tf": 10
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {
                  "Collection.html#find": {
                    "ref": "Collection.html#find",
                    "tf": 6.25
                  },
                  "Collection.html#findOne": {
                    "ref": "Collection.html#findOne",
                    "tf": 5.555555555555555
                  },
                  "Collection.html#remove": {
                    "ref": "Collection.html#remove",
                    "tf": 6.25
                  },
                  "Collection.html#removeOne": {
                    "ref": "Collection.html#removeOne",
                    "tf": 5.555555555555555
                  },
                  "Collection.html#update": {
                    "ref": "Collection.html#update",
                    "tf": 5.555555555555555
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "i": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Result.html#documents": {
                          "ref": "Result.html#documents",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "p": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "TrustDB.html#connect": {
                        "ref": "TrustDB.html#connect",
                        "tf": 2.7777777777777777
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "w": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "x": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "TrustDB.html#connect": {
                                        "ref": "TrustDB.html#connect",
                                        "tf": 2.7777777777777777
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Collection.html#findOne": {
                        "ref": "Collection.html#findOne",
                        "tf": 33.33333333333333
                      },
                      "Collection.html#findById": {
                        "ref": "Collection.html#findById",
                        "tf": 33.33333333333333
                      },
                      "Collection.html#removeById": {
                        "ref": "Collection.html#removeById",
                        "tf": 33.33333333333333
                      },
                      "Collection.html#updateById": {
                        "ref": "Collection.html#updateById",
                        "tf": 25
                      }
                    },
                    "|": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "y": {
                                "docs": {},
                                ".": {
                                  "docs": {},
                                  "&": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        ";": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "b": {
                                              "docs": {},
                                              "j": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "&": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "Collection.html#removeExact": {
                                                                "ref": "Collection.html#removeExact",
                                                                "tf": 25
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "i": {
              "docs": {},
              "g": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "u": {
                                "docs": {
                                  "Result.html#originalDocuments": {
                                    "ref": "Result.html#originalDocuments",
                                    "tf": 750
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "q": {
          "docs": {},
          "u": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "i": {
                  "docs": {
                    "Collection.html#find": {
                      "ref": "Collection.html#find",
                      "tf": 6.25
                    },
                    "Collection.html#findOne": {
                      "ref": "Collection.html#findOne",
                      "tf": 5.555555555555555
                    },
                    "Collection.html#remove": {
                      "ref": "Collection.html#remove",
                      "tf": 6.25
                    },
                    "Collection.html#removeOne": {
                      "ref": "Collection.html#removeOne",
                      "tf": 5.555555555555555
                    },
                    "Collection.html#update": {
                      "ref": "Collection.html#update",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "Collection.html#registerSchema": {
                      "ref": "Collection.html#registerSchema",
                      "tf": 8.333333333333332
                    },
                    "Collection.html#unregisterSchema": {
                      "ref": "Collection.html#unregisterSchema",
                      "tf": 6.25
                    },
                    "Collection.html#testDocument": {
                      "ref": "Collection.html#testDocument",
                      "tf": 8.333333333333332
                    }
                  }
                }
              },
              "u": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 3.8461538461538463
                  },
                  "Result.html#limit": {
                    "ref": "Result.html#limit",
                    "tf": 50
                  }
                }
              }
            }
          }
        }
      },
      "length": 481
    },
    "corpusTokens": [
      "ad",
      "add",
      "addcollect",
      "alreadi",
      "alter",
      "amount",
      "appli",
      "array.&lt;collection&gt",
      "array.&lt;object&gt",
      "autosav",
      "autosaveinterv",
      "base",
      "befor",
      "boolean",
      "bootstrap",
      "case",
      "class",
      "clean",
      "cleanwithschema",
      "clear",
      "close",
      "collect",
      "collection#cleanwithschema",
      "collection#clear",
      "collection#cr",
      "collection#docu",
      "collection#find",
      "collection#findbyid",
      "collection#findon",
      "collection#firstdocu",
      "collection#insert",
      "collection#inserton",
      "collection#lastdocu",
      "collection#nam",
      "collection#registerschema",
      "collection#remov",
      "collection#removebyid",
      "collection#removeexact",
      "collection#removeon",
      "collection#s",
      "collection#testdocu",
      "collection#unregisterschema",
      "collection#upd",
      "collection#updatebyid",
      "configur",
      "configureset",
      "connect",
      "creat",
      "createcollect",
      "creation",
      "current",
      "custom",
      "databas",
      "date",
      "delet",
      "deletecollect",
      "deletedatabas",
      "desc",
      "disabl",
      "disconnect",
      "doc",
      "document",
      "eixist",
      "emitev",
      "enabl",
      "event",
      "exist",
      "file",
      "filepath",
      "filesystem",
      "filter",
      "find",
      "findbyid",
      "findon",
      "first",
      "firstdocu",
      "foodoc",
      "function",
      "further",
      "getcollect",
      "given",
      "global",
      "handlebar",
      "id",
      "import",
      "index",
      "insert",
      "inserton",
      "instanc",
      "interv",
      "invalid",
      "jsdoc3",
      "last",
      "lastdocu",
      "limit",
      "list",
      "list:class",
      "listen",
      "load",
      "lt;async&gt",
      "map",
      "mapfn",
      "match",
      "member",
      "metadata",
      "move",
      "movedatabas",
      "name",
      "new",
      "number",
      "object",
      "object|array.&lt;object&gt",
      "option",
      "originaldocu",
      "overwriteexist",
      "pass",
      "path",
      "possibl",
      "promise.&lt;void&gt",
      "prop",
      "properti",
      "queri",
      "re",
      "readm",
      "regist",
      "registerschema",
      "relat",
      "remov",
      "removebyid",
      "removeexact",
      "removeon",
      "result",
      "result#docu",
      "result#limit",
      "result#map",
      "result#originaldocu",
      "result#simplesort",
      "result#sort",
      "resultinst",
      "retriev",
      "return",
      "same",
      "save",
      "savedatabas",
      "schema",
      "set",
      "simplesort",
      "singl",
      "size",
      "sort",
      "sortfn",
      "specif",
      "specifi",
      "state",
      "stop",
      "string",
      "support",
      "templat",
      "testdocu",
      "time",
      "totals",
      "true",
      "trustdb",
      "trustdb#addcollect",
      "trustdb#autosav",
      "trustdb#autosaveinterv",
      "trustdb#clear",
      "trustdb#collect",
      "trustdb#configureset",
      "trustdb#connect",
      "trustdb#creat",
      "trustdb#createcollect",
      "trustdb#deletecollect",
      "trustdb#deletedatabas",
      "trustdb#disconnect",
      "trustdb#filepath",
      "trustdb#getcollect",
      "trustdb#movedatabas",
      "trustdb#sav",
      "trustdb#savedatabas",
      "trustdb#set",
      "trustdb#siz",
      "trustdb#totals",
      "type",
      "ultim",
      "unalt",
      "unless",
      "unregist",
      "unregisterschema",
      "updat",
      "updatebyid",
      "us",
      "valid",
      "valu"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "FooDoc",
      "longname": "index",
      "name": "FooDoc",
      "tags": "index",
      "summary": "A Bootstrap and Handlebars based template for JSDoc3.",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "TrustDB.html": {
      "id": "TrustDB.html",
      "kind": "class",
      "title": "TrustDB",
      "longname": "TrustDB",
      "name": "TrustDB",
      "tags": "TrustDB",
      "summary": "",
      "description": "Creates a TrustDB instance.",
      "body": ""
    },
    "TrustDB.html#connected": {
      "id": "TrustDB.html#connected",
      "kind": "member",
      "title": "connected",
      "longname": "TrustDB#connected",
      "name": "connected",
      "tags": "TrustDB#connected connected",
      "summary": "",
      "description": "Get the database connection state."
    },
    "TrustDB.html#filepath": {
      "id": "TrustDB.html#filepath",
      "kind": "member",
      "title": "filepath",
      "longname": "TrustDB#filepath",
      "name": "filepath",
      "tags": "TrustDB#filepath filepath",
      "summary": "",
      "description": "Get the filepath of the database."
    },
    "TrustDB.html#created": {
      "id": "TrustDB.html#created",
      "kind": "member",
      "title": "created",
      "longname": "TrustDB#created",
      "name": "created",
      "tags": "TrustDB#created created",
      "summary": "",
      "description": "Get the date and time of creation of the database."
    },
    "TrustDB.html#collections": {
      "id": "TrustDB.html#collections",
      "kind": "member",
      "title": "collections",
      "longname": "TrustDB#collections",
      "name": "collections",
      "tags": "TrustDB#collections collections",
      "summary": "",
      "description": "Get all collections of the database."
    },
    "TrustDB.html#size": {
      "id": "TrustDB.html#size",
      "kind": "member",
      "title": "size",
      "longname": "TrustDB#size",
      "name": "size",
      "tags": "TrustDB#size size",
      "summary": "",
      "description": "Get the amount of collections of the database."
    },
    "TrustDB.html#totalSize": {
      "id": "TrustDB.html#totalSize",
      "kind": "member",
      "title": "totalSize",
      "longname": "TrustDB#totalSize",
      "name": "totalSize",
      "tags": "TrustDB#totalSize totalSize",
      "summary": "",
      "description": "Get the amount of documents of all collections."
    },
    "TrustDB.html#settings": {
      "id": "TrustDB.html#settings",
      "kind": "member",
      "title": "settings",
      "longname": "TrustDB#settings",
      "name": "settings",
      "tags": "TrustDB#settings settings",
      "summary": "",
      "description": "Get all database related settings."
    },
    "TrustDB.html#autosave": {
      "id": "TrustDB.html#autosave",
      "kind": "member",
      "title": "autosave",
      "longname": "TrustDB#autosave",
      "name": "autosave",
      "tags": "TrustDB#autosave autosave",
      "summary": "",
      "description": "Enable or disable autosave."
    },
    "TrustDB.html#autosaveInterval": {
      "id": "TrustDB.html#autosaveInterval",
      "kind": "member",
      "title": "autosaveInterval",
      "longname": "TrustDB#autosaveInterval",
      "name": "autosaveInterval",
      "tags": "TrustDB#autosaveInterval autosaveInterval",
      "summary": "",
      "description": "Set a new autosave interval."
    },
    "TrustDB.html#disconnect": {
      "id": "TrustDB.html#disconnect",
      "kind": "function",
      "title": "&lt;async&gt; disconnect( [ save ] )",
      "longname": "TrustDB#disconnect",
      "name": "disconnect",
      "tags": "TrustDB#disconnect disconnect",
      "summary": "",
      "description": "Close the database connection. Disables autosave, removes the event listeners for the database and its collections, clears all documents and collections."
    },
    "TrustDB.html#createCollection": {
      "id": "TrustDB.html#createCollection",
      "kind": "function",
      "title": "createCollection( name ) → {Collection}",
      "longname": "TrustDB#createCollection",
      "name": "createCollection",
      "tags": "TrustDB#createCollection createCollection",
      "summary": "",
      "description": "Create a collection with the given name. Returns an existing collection in case a collection with the same name already eixists in this database. Use TrustDB#deleteCollection before creating or adding a collection with the same name."
    },
    "TrustDB.html#addCollection": {
      "id": "TrustDB.html#addCollection",
      "kind": "function",
      "title": "addCollection( collection ) → {Collection}",
      "longname": "TrustDB#addCollection",
      "name": "addCollection",
      "tags": "TrustDB#addCollection addCollection",
      "summary": "",
      "description": "IMPORTANT: This function does not create a new collection. Use TrustDB#createCollection to create a new collection. Add a collection to the database. Returns an existing collection in case a collection with the same name already eixists in this database. Use TrustDB#deleteCollection before creating or adding a collection with the same name."
    },
    "TrustDB.html#deleteCollection": {
      "id": "TrustDB.html#deleteCollection",
      "kind": "function",
      "title": "deleteCollection( collection ) → {Collection}",
      "longname": "TrustDB#deleteCollection",
      "name": "deleteCollection",
      "tags": "TrustDB#deleteCollection deleteCollection",
      "summary": "",
      "description": "Delete a collection with the given name or using a Collection instance."
    },
    "TrustDB.html#getCollection": {
      "id": "TrustDB.html#getCollection",
      "kind": "function",
      "title": "getCollection( name ) → {Collection}",
      "longname": "TrustDB#getCollection",
      "name": "getCollection",
      "tags": "TrustDB#getCollection getCollection",
      "summary": "",
      "description": "Retrieve a collection by name."
    },
    "TrustDB.html#saveDatabase": {
      "id": "TrustDB.html#saveDatabase",
      "kind": "function",
      "title": "&lt;async&gt; saveDatabase() → {Promise.&lt;void&gt;}",
      "longname": "TrustDB#saveDatabase",
      "name": "saveDatabase",
      "tags": "TrustDB#saveDatabase saveDatabase",
      "summary": "",
      "description": "Save the database with its collections, settings and metadata to the specified filepath."
    },
    "TrustDB.html#deleteDatabase": {
      "id": "TrustDB.html#deleteDatabase",
      "kind": "function",
      "title": "&lt;async&gt; deleteDatabase() → {Promise.&lt;void&gt;}",
      "longname": "TrustDB#deleteDatabase",
      "name": "deleteDatabase",
      "tags": "TrustDB#deleteDatabase deleteDatabase",
      "summary": "",
      "description": "Delete the database from the filesystem, if it exists."
    },
    "TrustDB.html#moveDatabase": {
      "id": "TrustDB.html#moveDatabase",
      "kind": "function",
      "title": "&lt;async&gt; moveDatabase( filepath ) → {Promise.&lt;void&gt;}",
      "longname": "TrustDB#moveDatabase",
      "name": "moveDatabase",
      "tags": "TrustDB#moveDatabase moveDatabase",
      "summary": "",
      "description": "Move the database to the new path on the filesystem."
    },
    "TrustDB.html#configureSettings": {
      "id": "TrustDB.html#configureSettings",
      "kind": "function",
      "title": "configureSettings( [ settings ] )",
      "longname": "TrustDB#configureSettings",
      "name": "configureSettings",
      "tags": "TrustDB#configureSettings configureSettings",
      "summary": "",
      "description": "(Re-)configure the settings."
    },
    "TrustDB.html#clear": {
      "id": "TrustDB.html#clear",
      "kind": "function",
      "title": "clear() → {Array.&lt;Collection&gt;}",
      "longname": "TrustDB#clear",
      "name": "clear",
      "tags": "TrustDB#clear clear",
      "summary": "",
      "description": "Clear the database by deleting all of its collections."
    },
    "TrustDB.html#connect": {
      "id": "TrustDB.html#connect",
      "kind": "function",
      "title": "&lt;async&gt; connect( [ settings ] ) → {Promise.&lt;void&gt;}",
      "longname": "TrustDB#connect",
      "name": "connect",
      "tags": "TrustDB#connect connect",
      "summary": "",
      "description": "Create a connection to a new database. If the file already exists, it will be loaded and the collections (and optionally the settings, too) will be applied to this instance, unless the setting overwriteExisting is set to true."
    },
    "TrustDB.html#save": {
      "id": "TrustDB.html#save",
      "kind": "function",
      "title": "&lt;async&gt; save() → {Promise.&lt;void&gt;}",
      "longname": "TrustDB#save",
      "name": "save",
      "tags": "TrustDB#save save",
      "summary": "",
      "description": "Save the database with its collections, settings and metadata to the specified filepath."
    },
    "Collection.html": {
      "id": "Collection.html",
      "kind": "class",
      "title": "Collection",
      "longname": "Collection",
      "name": "Collection",
      "tags": "Collection",
      "summary": "",
      "description": "Creates a Collection instance.",
      "body": ""
    },
    "Collection.html#documents": {
      "id": "Collection.html#documents",
      "kind": "member",
      "title": "documents",
      "longname": "Collection#documents",
      "name": "documents",
      "tags": "Collection#documents documents",
      "summary": "",
      "description": "Get all documents of the collection."
    },
    "Collection.html#name": {
      "id": "Collection.html#name",
      "kind": "member",
      "title": "name",
      "longname": "Collection#name",
      "name": "name",
      "tags": "Collection#name name",
      "summary": "",
      "description": "Get the name of the collection."
    },
    "Collection.html#created": {
      "id": "Collection.html#created",
      "kind": "member",
      "title": "created",
      "longname": "Collection#created",
      "name": "created",
      "tags": "Collection#created created",
      "summary": "",
      "description": "Get the date and time of creation for this collection."
    },
    "Collection.html#firstDocument": {
      "id": "Collection.html#firstDocument",
      "kind": "member",
      "title": "firstDocument",
      "longname": "Collection#firstDocument",
      "name": "firstDocument",
      "tags": "Collection#firstDocument firstDocument",
      "summary": "",
      "description": "Get the first document of the collection."
    },
    "Collection.html#lastDocument": {
      "id": "Collection.html#lastDocument",
      "kind": "member",
      "title": "lastDocument",
      "longname": "Collection#lastDocument",
      "name": "lastDocument",
      "tags": "Collection#lastDocument lastDocument",
      "summary": "",
      "description": "Get the last document of the collection."
    },
    "Collection.html#size": {
      "id": "Collection.html#size",
      "kind": "member",
      "title": "size",
      "longname": "Collection#size",
      "name": "size",
      "tags": "Collection#size size",
      "summary": "",
      "description": "Get the amount of documents of the collection."
    },
    "Collection.html#insert": {
      "id": "Collection.html#insert",
      "kind": "function",
      "title": "insert( ...docs )",
      "longname": "Collection#insert",
      "name": "insert",
      "tags": "Collection#insert insert",
      "summary": "",
      "description": "Insert new documents into the collection."
    },
    "Collection.html#insertOne": {
      "id": "Collection.html#insertOne",
      "kind": "function",
      "title": "insertOne( doc [, emitEvent ] )",
      "longname": "Collection#insertOne",
      "name": "insertOne",
      "tags": "Collection#insertOne insertOne",
      "summary": "",
      "description": "Insert a single document into the collection."
    },
    "Collection.html#find": {
      "id": "Collection.html#find",
      "kind": "function",
      "title": "find( filter, resultInstance ) → {Array.&lt;object&gt;}",
      "longname": "Collection#find",
      "name": "find",
      "tags": "Collection#find find",
      "summary": "",
      "description": "Find all documents in the collection that match the query or pass the filter function."
    },
    "Collection.html#findOne": {
      "id": "Collection.html#findOne",
      "kind": "function",
      "title": "findOne( filter ) → {object}",
      "longname": "Collection#findOne",
      "name": "findOne",
      "tags": "Collection#findOne findOne",
      "summary": "",
      "description": "Find the first document in the collection that matches the query or passes the filter function."
    },
    "Collection.html#findById": {
      "id": "Collection.html#findById",
      "kind": "function",
      "title": "findById( id ) → {object}",
      "longname": "Collection#findById",
      "name": "findById",
      "tags": "Collection#findById findById",
      "summary": "",
      "description": "Find the document with the matching ID."
    },
    "Collection.html#removeExact": {
      "id": "Collection.html#removeExact",
      "kind": "function",
      "title": "removeExact( doc [, first ] ) → {object|Array.&lt;object&gt;}",
      "longname": "Collection#removeExact",
      "name": "removeExact",
      "tags": "Collection#removeExact removeExact",
      "summary": "",
      "description": "Remove all documents matching the given document from the collection."
    },
    "Collection.html#remove": {
      "id": "Collection.html#remove",
      "kind": "function",
      "title": "remove( filter ) → {Array.&lt;object&gt;}",
      "longname": "Collection#remove",
      "name": "remove",
      "tags": "Collection#remove remove",
      "summary": "",
      "description": "Remove all documents in the collection that match the query or passes the filter function."
    },
    "Collection.html#removeOne": {
      "id": "Collection.html#removeOne",
      "kind": "function",
      "title": "removeOne( filter ) → {Array.&lt;object&gt;}",
      "longname": "Collection#removeOne",
      "name": "removeOne",
      "tags": "Collection#removeOne removeOne",
      "summary": "",
      "description": "Remove the first document in the collection that matches the query or passes the filter function."
    },
    "Collection.html#removeById": {
      "id": "Collection.html#removeById",
      "kind": "function",
      "title": "removeById( id ) → {object}",
      "longname": "Collection#removeById",
      "name": "removeById",
      "tags": "Collection#removeById removeById",
      "summary": "",
      "description": "Remove the document with the matching ID."
    },
    "Collection.html#update": {
      "id": "Collection.html#update",
      "kind": "function",
      "title": "update( filter, updater ) → {Array.&lt;object&gt;}",
      "longname": "Collection#update",
      "name": "update",
      "tags": "Collection#update update",
      "summary": "",
      "description": "Update all documents in the collection that match the query or pass the custom filter function."
    },
    "Collection.html#registerSchema": {
      "id": "Collection.html#registerSchema",
      "kind": "function",
      "title": "registerSchema( schema ) → {Schema}",
      "longname": "Collection#registerSchema",
      "name": "registerSchema",
      "tags": "Collection#registerSchema registerSchema",
      "summary": "",
      "description": "Register a schema to validate documents inserted into the collection."
    },
    "Collection.html#unregisterSchema": {
      "id": "Collection.html#unregisterSchema",
      "kind": "function",
      "title": "unregisterSchema() → {Schema}",
      "longname": "Collection#unregisterSchema",
      "name": "unregisterSchema",
      "tags": "Collection#unregisterSchema unregisterSchema",
      "summary": "",
      "description": "Unregister the schema which ultimately stops the collection from validating any further documents."
    },
    "Collection.html#cleanWithSchema": {
      "id": "Collection.html#cleanWithSchema",
      "kind": "function",
      "title": "cleanWithSchema() → {Array.&lt;object&gt;}",
      "longname": "Collection#cleanWithSchema",
      "name": "cleanWithSchema",
      "tags": "Collection#cleanWithSchema cleanWithSchema",
      "summary": "",
      "description": "Clean the collection from invalid documents using the registered schema."
    },
    "Collection.html#testDocument": {
      "id": "Collection.html#testDocument",
      "kind": "function",
      "title": "testDocument( document ) → {boolean}",
      "longname": "Collection#testDocument",
      "name": "testDocument",
      "tags": "Collection#testDocument testDocument",
      "summary": "",
      "description": "Validate a document for the collection using the registered schema."
    },
    "Collection.html#clear": {
      "id": "Collection.html#clear",
      "kind": "function",
      "title": "clear() → {Array.&lt;object&gt;}",
      "longname": "Collection#clear",
      "name": "clear",
      "tags": "Collection#clear clear",
      "summary": "",
      "description": "Clear the collection by deleting all of its documents."
    },
    "Collection.html#updateById": {
      "id": "Collection.html#updateById",
      "kind": "function",
      "title": "updateById( id, updater ) → {object}",
      "longname": "Collection#updateById",
      "name": "updateById",
      "tags": "Collection#updateById updateById",
      "summary": "",
      "description": "Update the document with the matching ID."
    },
    "Result.html": {
      "id": "Result.html",
      "kind": "class",
      "title": "Result",
      "longname": "Result",
      "name": "Result",
      "tags": "Result",
      "summary": "",
      "description": "Creates a Result instance.",
      "body": ""
    },
    "Result.html#documents": {
      "id": "Result.html#documents",
      "kind": "member",
      "title": "documents",
      "longname": "Result#documents",
      "name": "documents",
      "tags": "Result#documents documents",
      "summary": "",
      "description": "Get the filtered and possibly altered documents."
    },
    "Result.html#originalDocuments": {
      "id": "Result.html#originalDocuments",
      "kind": "member",
      "title": "originalDocuments",
      "longname": "Result#originalDocuments",
      "name": "originalDocuments",
      "tags": "Result#originalDocuments originalDocuments",
      "summary": "",
      "description": "Get the filtered but unaltered results documents."
    },
    "Result.html#simpleSort": {
      "id": "Result.html#simpleSort",
      "kind": "function",
      "title": "simpleSort( prop [, desc ] ) → {this}",
      "longname": "Result#simpleSort",
      "name": "simpleSort",
      "tags": "Result#simpleSort simpleSort",
      "summary": "",
      "description": "Sort the results given a specific property. Supported property value types are string, number, boolean or Date."
    },
    "Result.html#sort": {
      "id": "Result.html#sort",
      "kind": "function",
      "title": "sort( sortFn ) → {this}",
      "longname": "Result#sort",
      "name": "sort",
      "tags": "Result#sort sort",
      "summary": "",
      "description": "Sort the results using your own custom sort function."
    },
    "Result.html#map": {
      "id": "Result.html#map",
      "kind": "function",
      "title": "map( mapFn ) → {this}",
      "longname": "Result#map",
      "name": "map",
      "tags": "Result#map map",
      "summary": "",
      "description": "Map the results using your own custom map function."
    },
    "Result.html#limit": {
      "id": "Result.html#limit",
      "kind": "function",
      "title": "limit( value ) → {this}",
      "longname": "Result#limit",
      "name": "limit",
      "tags": "Result#limit limit",
      "summary": "",
      "description": "Limit the number of results."
    }
  }
};