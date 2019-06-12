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
          "i.",
          "member",
          "possibl",
          "result",
          "result#docu"
        ],
        "Result.html#originalDocuments": [
          "document",
          "filter",
          "i.",
          "member",
          "originaldocu",
          "result",
          "result#originaldocu",
          "unalt"
        ],
        "Result.html#simpleSort": [
          "date",
          "desc",
          "e",
          "function",
          "g",
          "given",
          "number",
          "object",
          "prop",
          "properti",
          "quit",
          "reliabl",
          "result",
          "result#simplesort",
          "similar",
          "simplesort",
          "someth",
          "sort",
          "specif",
          "string",
          "valu",
          "work"
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
        "Result.html#limit": [
          "function",
          "limit",
          "number",
          "result",
          "result#limit",
          "valu"
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
          "new",
          "promise.&lt;(void|error)&gt"
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
          "promise.&lt;(void|error)&gt",
          "singl"
        ],
        "Collection.html#find": [
          "collect",
          "collection#find",
          "document",
          "filter",
          "find",
          "function",
          "match",
          "pass",
          "promise.&lt;(array.&lt;object&gt;|result|error)&gt",
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
          "pass",
          "promise.&lt;(object|error)&gt",
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
          "promise.&lt;(object|error)&gt"
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
          "promise.&lt;(object|array.&lt;object&gt;|error)&gt",
          "remov",
          "removeexact"
        ],
        "Collection.html#remove": [
          "collect",
          "collection#remov",
          "document",
          "filter",
          "function",
          "match",
          "pass",
          "promise.&lt;(array.&lt;object&gt;|error)&gt",
          "queri",
          "remov"
        ],
        "Collection.html#removeOne": [
          "collect",
          "collection#removeon",
          "document",
          "filter",
          "first",
          "function",
          "match",
          "pass",
          "promise.&lt;(array.&lt;object&gt;|error)&gt",
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
          "promise.&lt;(object|error)&gt",
          "remov",
          "removebyid"
        ],
        "Collection.html#update": [
          "collect",
          "collection#upd",
          "custom",
          "document",
          "filter",
          "function",
          "match",
          "pass",
          "promise.&lt;(array.&lt;object&gt;|error)&gt",
          "queri",
          "updat"
        ],
        "Collection.html#updateById": [
          "collection#updatebyid",
          "document",
          "function",
          "id",
          "match",
          "promise.&lt;(object|error)&gt",
          "updat",
          "updatebyid"
        ],
        "Collection.html#clear": [
          "clear",
          "collect",
          "collection#clear",
          "delet",
          "document",
          "function"
        ],
        "TrustDB.html": [
          "class",
          "creat",
          "instanc",
          "trustdb"
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
        "TrustDB.html#connect": [
          "alreadi",
          "appli",
          "collect",
          "connect",
          "creat",
          "databas",
          "exist",
          "file",
          "filepath",
          "function",
          "instanc",
          "load",
          "new",
          "option",
          "overwriteexist",
          "promise.&lt;(void|error)&gt",
          "set",
          "true",
          "trustdb#connect",
          "unless"
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
          "promise.&lt;(collection|error)&gt",
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
          "promise.&lt;(collection|error)&gt",
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
          "promise.&lt;(collection|error)&gt",
          "trustdb#deletecollect"
        ],
        "TrustDB.html#getCollection": [
          "collect",
          "function",
          "getcollect",
          "name",
          "promise.&lt;(collection|error)&gt",
          "retriev",
          "trustdb#getcollect"
        ],
        "TrustDB.html#saveDatabase": [
          "collect",
          "databas",
          "file",
          "function",
          "metadata",
          "promise.&lt;(void|error)&gt",
          "save",
          "savedatabas",
          "set",
          "specifi",
          "trustdb#savedatabas"
        ],
        "TrustDB.html#save": [
          "collect",
          "databas",
          "file",
          "function",
          "metadata",
          "promise.&lt;(void|error)&gt",
          "save",
          "set",
          "specifi",
          "trustdb#sav"
        ],
        "TrustDB.html#deleteDatabase": [
          "databas",
          "delet",
          "deletedatabas",
          "exist",
          "filesystem",
          "function",
          "promise.&lt;(void|error)&gt",
          "trustdb#deletedatabas"
        ],
        "TrustDB.html#moveDatabase": [
          "databas",
          "filepath",
          "filesystem",
          "function",
          "move",
          "movedatabas",
          "new",
          "path",
          "promise.&lt;(void|error)&gt",
          "trustdb#movedatabas"
        ],
        "TrustDB.html#clear": [
          "clear",
          "collect",
          "databas",
          "delet",
          "function",
          "trustdb#clear"
        ],
        "TrustDB.html#configureSettings": [
          "configur",
          "configureset",
          "function",
          "re",
          "set",
          "trustdb#configureset"
        ]
      },
      "length": 44
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
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Result.html#documents": {
                        "ref": "Result.html#documents",
                        "tf": 8.333333333333332
                      },
                      "Result.html#originalDocuments": {
                        "ref": "Result.html#originalDocuments",
                        "tf": 10
                      },
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
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "TrustDB.html#connect": {
                    "ref": "TrustDB.html#connect",
                    "tf": 2.631578947368421
                  },
                  "TrustDB.html#saveDatabase": {
                    "ref": "TrustDB.html#saveDatabase",
                    "tf": 7.142857142857142
                  },
                  "TrustDB.html#save": {
                    "ref": "TrustDB.html#save",
                    "tf": 7.142857142857142
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
                          "TrustDB.html#connect": {
                            "ref": "TrustDB.html#connect",
                            "tf": 27.63157894736842
                          },
                          "TrustDB.html#moveDatabase": {
                            "ref": "TrustDB.html#moveDatabase",
                            "tf": 33.33333333333333
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
                          "Result.html#simpleSort": {
                            "ref": "Result.html#simpleSort",
                            "tf": 110
                          },
                          "Result.html#sort": {
                            "ref": "Result.html#sort",
                            "tf": 118.33333333333333
                          },
                          "Result.html#limit": {
                            "ref": "Result.html#limit",
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
                          "Collection.html#updateById": {
                            "ref": "Collection.html#updateById",
                            "tf": 110
                          },
                          "Collection.html#clear": {
                            "ref": "Collection.html#clear",
                            "tf": 110
                          },
                          "TrustDB.html#connect": {
                            "ref": "TrustDB.html#connect",
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
                          "TrustDB.html#save": {
                            "ref": "TrustDB.html#save",
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
                          "TrustDB.html#clear": {
                            "ref": "TrustDB.html#clear",
                            "tf": 110
                          },
                          "TrustDB.html#configureSettings": {
                            "ref": "TrustDB.html#configureSettings",
                            "tf": 110
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
                        "Result.html": {
                          "ref": "Result.html",
                          "tf": 16.666666666666664
                        },
                        "Collection.html": {
                          "ref": "Collection.html",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html": {
                          "ref": "TrustDB.html",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 2.631578947368421
                        },
                        "TrustDB.html#deleteCollection": {
                          "ref": "TrustDB.html#deleteCollection",
                          "tf": 8.333333333333332
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
                        "tf": 695.8333333333334
                      },
                      "Collection.html#insertOne": {
                        "ref": "Collection.html#insertOne",
                        "tf": 12.5
                      }
                    },
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Collection.html#insertOne": {
                            "ref": "Collection.html#insertOne",
                            "tf": 675
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
            }
          },
          ".": {
            "docs": {
              "Result.html#documents": {
                "ref": "Result.html#documents",
                "tf": 8.333333333333332
              },
              "Result.html#originalDocuments": {
                "ref": "Result.html#originalDocuments",
                "tf": 10
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
                      "Result.html#documents": {
                        "ref": "Result.html#documents",
                        "tf": 8.333333333333332
                      },
                      "Result.html#originalDocuments": {
                        "ref": "Result.html#originalDocuments",
                        "tf": 10
                      },
                      "Result.html#simpleSort": {
                        "ref": "Result.html#simpleSort",
                        "tf": 2.7777777777777777
                      },
                      "Result.html#sort": {
                        "ref": "Result.html#sort",
                        "tf": 8.333333333333332
                      },
                      "Result.html#limit": {
                        "ref": "Result.html#limit",
                        "tf": 16.666666666666664
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
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "i": {
                "docs": {},
                "a": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Result.html#simpleSort": {
                          "ref": "Result.html#simpleSort",
                          "tf": 2.7777777777777777
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
                  "docs": {
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
                            },
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
                            }
                          },
                          "r": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "a": {
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
                    "tf": 2.631578947368421
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
                  "tf": 33.33333333333333
                },
                "Collection.html#insertOne": {
                  "ref": "Collection.html#insertOne",
                  "tf": 25
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
                          "Result.html#documents": {
                            "ref": "Result.html#documents",
                            "tf": 758.3333333333334
                          },
                          "Result.html#originalDocuments": {
                            "ref": "Result.html#originalDocuments",
                            "tf": 10
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
                          "Collection.html#updateById": {
                            "ref": "Collection.html#updateById",
                            "tf": 12.5
                          },
                          "Collection.html#clear": {
                            "ref": "Collection.html#clear",
                            "tf": 12.5
                          },
                          "TrustDB.html#totalSize": {
                            "ref": "TrustDB.html#totalSize",
                            "tf": 16.666666666666664
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
              "e": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 2.7777777777777777
                  }
                }
              },
              "a": {
                "docs": {},
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "TrustDB.html#collections": {
                          "ref": "TrustDB.html#collections",
                          "tf": 25
                        },
                        "TrustDB.html#size": {
                          "ref": "TrustDB.html#size",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 2.631578947368421
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
                        "TrustDB.html#save": {
                          "ref": "TrustDB.html#save",
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
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "Collection.html#clear": {
                      "ref": "Collection.html#clear",
                      "tf": 12.5
                    },
                    "TrustDB.html#deleteCollection": {
                      "ref": "TrustDB.html#deleteCollection",
                      "tf": 8.333333333333332
                    },
                    "TrustDB.html#deleteDatabase": {
                      "ref": "TrustDB.html#deleteDatabase",
                      "tf": 12.5
                    },
                    "TrustDB.html#clear": {
                      "ref": "TrustDB.html#clear",
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
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {
            "Result.html#simpleSort": {
              "ref": "Result.html#simpleSort",
              "tf": 2.7777777777777777
            }
          },
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
                    "Result.html#simpleSort": {
                      "ref": "Result.html#simpleSort",
                      "tf": 2.7777777777777777
                    },
                    "Collection.html#removeExact": {
                      "ref": "Collection.html#removeExact",
                      "tf": 8.333333333333332
                    },
                    "TrustDB.html#createCollection": {
                      "ref": "TrustDB.html#createCollection",
                      "tf": 2.272727272727273
                    },
                    "TrustDB.html#deleteCollection": {
                      "ref": "TrustDB.html#deleteCollection",
                      "tf": 8.333333333333332
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
                    "Result.html": {
                      "ref": "Result.html",
                      "tf": 110
                    },
                    "Collection.html": {
                      "ref": "Collection.html",
                      "tf": 110
                    },
                    "TrustDB.html": {
                      "ref": "TrustDB.html",
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
                    "Collection.html#clear": {
                      "ref": "Collection.html#clear",
                      "tf": 762.5
                    },
                    "TrustDB.html#clear": {
                      "ref": "TrustDB.html#clear",
                      "tf": 762.5
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
                    "Result.html": {
                      "ref": "Result.html",
                      "tf": 16.666666666666664
                    },
                    "Collection.html": {
                      "ref": "Collection.html",
                      "tf": 16.666666666666664
                    },
                    "TrustDB.html": {
                      "ref": "TrustDB.html",
                      "tf": 16.666666666666664
                    },
                    "TrustDB.html#connect": {
                      "ref": "TrustDB.html#connect",
                      "tf": 2.631578947368421
                    },
                    "TrustDB.html#createCollection": {
                      "ref": "TrustDB.html#createCollection",
                      "tf": 4.545454545454546
                    },
                    "TrustDB.html#addCollection": {
                      "ref": "TrustDB.html#addCollection",
                      "tf": 4.838709677419355
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
          "u": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "m": {
                    "docs": {
                      "Result.html#sort": {
                        "ref": "Result.html#sort",
                        "tf": 8.333333333333332
                      },
                      "Collection.html#update": {
                        "ref": "Collection.html#update",
                        "tf": 5.555555555555555
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
            }
          },
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
                        "Collection.html#clear": {
                          "ref": "Collection.html#clear",
                          "tf": 12.5
                        },
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
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 2.631578947368421
                        },
                        "TrustDB.html#createCollection": {
                          "ref": "TrustDB.html#createCollection",
                          "tf": 9.090909090909092
                        },
                        "TrustDB.html#addCollection": {
                          "ref": "TrustDB.html#addCollection",
                          "tf": 43.01075268817204
                        },
                        "TrustDB.html#deleteCollection": {
                          "ref": "TrustDB.html#deleteCollection",
                          "tf": 49.99999999999999
                        },
                        "TrustDB.html#getCollection": {
                          "ref": "TrustDB.html#getCollection",
                          "tf": 16.666666666666664
                        },
                        "TrustDB.html#saveDatabase": {
                          "ref": "TrustDB.html#saveDatabase",
                          "tf": 7.142857142857142
                        },
                        "TrustDB.html#save": {
                          "ref": "TrustDB.html#save",
                          "tf": 7.142857142857142
                        },
                        "TrustDB.html#clear": {
                          "ref": "TrustDB.html#clear",
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
                                }
                              },
                              "c": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
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
              "n": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 677.6315789473684
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
          },
          "o": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "TrustDB.html#connect": {
                    "ref": "TrustDB.html#connect",
                    "tf": 2.631578947368421
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
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "Result.html#documents": {
                      "ref": "Result.html#documents",
                      "tf": 8.333333333333332
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
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "TrustDB.html#connect": {
                          "ref": "TrustDB.html#connect",
                          "tf": 2.631578947368421
                        },
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
            }
          },
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
                      "Collection.html#size": {
                        "ref": "Collection.html#size",
                        "tf": 16.666666666666664
                      },
                      "TrustDB.html#size": {
                        "ref": "TrustDB.html#size",
                        "tf": 16.666666666666664
                      },
                      "TrustDB.html#totalSize": {
                        "ref": "TrustDB.html#totalSize",
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
                      "tf": 2.631578947368421
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
                      "Result.html#documents": {
                        "ref": "Result.html#documents",
                        "tf": 110
                      },
                      "Result.html#originalDocuments": {
                        "ref": "Result.html#originalDocuments",
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
                      "TrustDB.html#autosave": {
                        "ref": "TrustDB.html#autosave",
                        "tf": 110
                      },
                      "TrustDB.html#autosaveInterval": {
                        "ref": "TrustDB.html#autosaveInterval",
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
        "p": {
          "docs": {},
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
                          "tf": 8.333333333333332
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
            "o": {
              "docs": {},
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
                            "tf": 2.7777777777777777
                          }
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
                                "(": {
                                  "docs": {},
                                  "v": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "|": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      ")": {
                                                        "docs": {},
                                                        "&": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {
                                                                "Collection.html#insert": {
                                                                  "ref": "Collection.html#insert",
                                                                  "tf": 33.33333333333333
                                                                },
                                                                "Collection.html#insertOne": {
                                                                  "ref": "Collection.html#insertOne",
                                                                  "tf": 25
                                                                },
                                                                "TrustDB.html#connect": {
                                                                  "ref": "TrustDB.html#connect",
                                                                  "tf": 25
                                                                },
                                                                "TrustDB.html#saveDatabase": {
                                                                  "ref": "TrustDB.html#saveDatabase",
                                                                  "tf": 50
                                                                },
                                                                "TrustDB.html#save": {
                                                                  "ref": "TrustDB.html#save",
                                                                  "tf": 50
                                                                },
                                                                "TrustDB.html#deleteDatabase": {
                                                                  "ref": "TrustDB.html#deleteDatabase",
                                                                  "tf": 50
                                                                },
                                                                "TrustDB.html#moveDatabase": {
                                                                  "ref": "TrustDB.html#moveDatabase",
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
                                  },
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
                                                                        "docs": {},
                                                                        ";": {
                                                                          "docs": {},
                                                                          "|": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "u": {
                                                                                    "docs": {},
                                                                                    "l": {
                                                                                      "docs": {},
                                                                                      "t": {
                                                                                        "docs": {},
                                                                                        "|": {
                                                                                          "docs": {},
                                                                                          "e": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "r": {
                                                                                                "docs": {},
                                                                                                "o": {
                                                                                                  "docs": {},
                                                                                                  "r": {
                                                                                                    "docs": {},
                                                                                                    ")": {
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
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "o": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      ")": {
                                                                                        "docs": {},
                                                                                        "&": {
                                                                                          "docs": {},
                                                                                          "g": {
                                                                                            "docs": {},
                                                                                            "t": {
                                                                                              "docs": {
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
                                              "|": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          ")": {
                                                            "docs": {},
                                                            "&": {
                                                              "docs": {},
                                                              "g": {
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
                                                                                      "docs": {},
                                                                                      ";": {
                                                                                        "docs": {},
                                                                                        "|": {
                                                                                          "docs": {},
                                                                                          "e": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "r": {
                                                                                                "docs": {},
                                                                                                "o": {
                                                                                                  "docs": {},
                                                                                                  "r": {
                                                                                                    "docs": {},
                                                                                                    ")": {
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
                                                      "|": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  ")": {
                                                                    "docs": {},
                                                                    "&": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {},
                                                                        "t": {
                                                                          "docs": {
                                                                            "TrustDB.html#createCollection": {
                                                                              "ref": "TrustDB.html#createCollection",
                                                                              "tf": 33.33333333333333
                                                                            },
                                                                            "TrustDB.html#addCollection": {
                                                                              "ref": "TrustDB.html#addCollection",
                                                                              "tf": 33.33333333333333
                                                                            },
                                                                            "TrustDB.html#deleteCollection": {
                                                                              "ref": "TrustDB.html#deleteCollection",
                                                                              "tf": 33.33333333333333
                                                                            },
                                                                            "TrustDB.html#getCollection": {
                                                                              "ref": "TrustDB.html#getCollection",
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
          "a": {
            "docs": {},
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
            },
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
                      "Result.html#simpleSort": {
                        "ref": "Result.html#simpleSort",
                        "tf": 2.7777777777777777
                      }
                    }
                  }
                }
              }
            }
          },
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
                        "tf": 2.631578947368421
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
                                        "tf": 2.631578947368421
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
          "n": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "t": {
                  "docs": {
                    "Result.html#originalDocuments": {
                      "ref": "Result.html#originalDocuments",
                      "tf": 10
                    }
                  }
                }
              }
            },
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
                        "tf": 2.631578947368421
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {
              "Result.html#sort": {
                "ref": "Result.html#sort",
                "tf": 8.333333333333332
              },
              "TrustDB.html#createCollection": {
                "ref": "TrustDB.html#createCollection",
                "tf": 2.272727272727273
              },
              "TrustDB.html#addCollection": {
                "ref": "TrustDB.html#addCollection",
                "tf": 3.225806451612903
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
          }
        },
        "e": {
          "docs": {
            "Result.html#simpleSort": {
              "ref": "Result.html#simpleSort",
              "tf": 2.7777777777777777
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
                        "tf": 25
                      }
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
                      "tf": 2.631578947368421
                    },
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
          }
        },
        "n": {
          "docs": {},
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
                        "tf": 2.7777777777777777
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
          },
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "Collection.html#name": {
                    "ref": "Collection.html#name",
                    "tf": 775
                  },
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
                    "tf": 8.333333333333332
                  },
                  "TrustDB.html#getCollection": {
                    "ref": "TrustDB.html#getCollection",
                    "tf": 49.99999999999999
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "w": {
              "docs": {
                "Collection.html#insert": {
                  "ref": "Collection.html#insert",
                  "tf": 12.5
                },
                "TrustDB.html#autosaveInterval": {
                  "ref": "TrustDB.html#autosaveInterval",
                  "tf": 12.5
                },
                "TrustDB.html#connect": {
                  "ref": "TrustDB.html#connect",
                  "tf": 2.631578947368421
                },
                "TrustDB.html#addCollection": {
                  "ref": "TrustDB.html#addCollection",
                  "tf": 3.225806451612903
                },
                "TrustDB.html#moveDatabase": {
                  "ref": "TrustDB.html#moveDatabase",
                  "tf": 10
                }
              }
            }
          }
        },
        "q": {
          "docs": {},
          "u": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 2.7777777777777777
                  }
                }
              }
            },
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
        "s": {
          "docs": {},
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "i": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Result.html#simpleSort": {
                          "ref": "Result.html#simpleSort",
                          "tf": 2.7777777777777777
                        }
                      }
                    }
                  }
                }
              },
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
            },
            "z": {
              "docs": {},
              "e": {
                "docs": {
                  "Collection.html#size": {
                    "ref": "Collection.html#size",
                    "tf": 750
                  },
                  "TrustDB.html#size": {
                    "ref": "TrustDB.html#size",
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
            }
          },
          "o": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "Result.html#simpleSort": {
                        "ref": "Result.html#simpleSort",
                        "tf": 2.7777777777777777
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "t": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 5.555555555555555
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
                        "tf": 2.7777777777777777
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
          "t": {
            "docs": {},
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
                        "tf": 2.7777777777777777
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
                "e": {
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
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "TrustDB.html#autosaveInterval": {
                  "ref": "TrustDB.html#autosaveInterval",
                  "tf": 12.5
                },
                "TrustDB.html#connect": {
                  "ref": "TrustDB.html#connect",
                  "tf": 32.89473684210526
                },
                "TrustDB.html#saveDatabase": {
                  "ref": "TrustDB.html#saveDatabase",
                  "tf": 7.142857142857142
                },
                "TrustDB.html#save": {
                  "ref": "TrustDB.html#save",
                  "tf": 7.142857142857142
                },
                "TrustDB.html#configureSettings": {
                  "ref": "TrustDB.html#configureSettings",
                  "tf": 66.66666666666666
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
                    "tf": 4.545454545454546
                  },
                  "TrustDB.html#addCollection": {
                    "ref": "TrustDB.html#addCollection",
                    "tf": 3.225806451612903
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "TrustDB.html#saveDatabase": {
                    "ref": "TrustDB.html#saveDatabase",
                    "tf": 7.142857142857142
                  },
                  "TrustDB.html#save": {
                    "ref": "TrustDB.html#save",
                    "tf": 707.1428571428571
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
        },
        "v": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "u": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 2.7777777777777777
                  },
                  "Result.html#limit": {
                    "ref": "Result.html#limit",
                    "tf": 50
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "k": {
                "docs": {
                  "Result.html#simpleSort": {
                    "ref": "Result.html#simpleSort",
                    "tf": 2.7777777777777777
                  }
                }
              }
            }
          }
        }
      },
      "length": 395
    },
    "corpusTokens": [
      "ad",
      "add",
      "addcollect",
      "alreadi",
      "alter",
      "amount",
      "appli",
      "autosav",
      "autosaveinterv",
      "base",
      "befor",
      "bootstrap",
      "case",
      "class",
      "clear",
      "collect",
      "collection#clear",
      "collection#docu",
      "collection#find",
      "collection#findbyid",
      "collection#findon",
      "collection#firstdocu",
      "collection#insert",
      "collection#inserton",
      "collection#lastdocu",
      "collection#nam",
      "collection#remov",
      "collection#removebyid",
      "collection#removeexact",
      "collection#removeon",
      "collection#s",
      "collection#upd",
      "collection#updatebyid",
      "configur",
      "configureset",
      "connect",
      "creat",
      "createcollect",
      "current",
      "custom",
      "databas",
      "date",
      "delet",
      "deletecollect",
      "deletedatabas",
      "desc",
      "disabl",
      "doc",
      "document",
      "e",
      "eixist",
      "emitev",
      "enabl",
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
      "g",
      "getcollect",
      "given",
      "global",
      "handlebar",
      "i.",
      "id",
      "import",
      "index",
      "insert",
      "inserton",
      "instanc",
      "interv",
      "jsdoc3",
      "last",
      "lastdocu",
      "limit",
      "list",
      "list:class",
      "load",
      "match",
      "member",
      "metadata",
      "move",
      "movedatabas",
      "name",
      "new",
      "number",
      "object",
      "option",
      "originaldocu",
      "overwriteexist",
      "pass",
      "path",
      "possibl",
      "promise.&lt;(array.&lt;object&gt;|error)&gt",
      "promise.&lt;(array.&lt;object&gt;|result|error)&gt",
      "promise.&lt;(collection|error)&gt",
      "promise.&lt;(object|array.&lt;object&gt;|error)&gt",
      "promise.&lt;(object|error)&gt",
      "promise.&lt;(void|error)&gt",
      "prop",
      "properti",
      "queri",
      "quit",
      "re",
      "readm",
      "reliabl",
      "remov",
      "removebyid",
      "removeexact",
      "removeon",
      "result",
      "result#docu",
      "result#limit",
      "result#originaldocu",
      "result#simplesort",
      "result#sort",
      "resultinst",
      "retriev",
      "return",
      "same",
      "save",
      "savedatabas",
      "set",
      "similar",
      "simplesort",
      "singl",
      "size",
      "someth",
      "sort",
      "sortfn",
      "specif",
      "specifi",
      "state",
      "string",
      "templat",
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
      "trustdb#createcollect",
      "trustdb#deletecollect",
      "trustdb#deletedatabas",
      "trustdb#getcollect",
      "trustdb#movedatabas",
      "trustdb#sav",
      "trustdb#savedatabas",
      "trustdb#siz",
      "trustdb#totals",
      "unalt",
      "unless",
      "updat",
      "updatebyid",
      "us",
      "valu",
      "work"
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
      "description": "Get the results, i.e. filtered and possibly altered documents."
    },
    "Result.html#originalDocuments": {
      "id": "Result.html#originalDocuments",
      "kind": "member",
      "title": "originalDocuments",
      "longname": "Result#originalDocuments",
      "name": "originalDocuments",
      "tags": "Result#originalDocuments originalDocuments",
      "summary": "",
      "description": "Get the unaltered results, i.e. filtered documents."
    },
    "Result.html#simpleSort": {
      "id": "Result.html#simpleSort",
      "kind": "function",
      "title": "simpleSort( prop [, desc ] ) → {this}",
      "longname": "Result#simpleSort",
      "name": "simpleSort",
      "tags": "Result#simpleSort simpleSort",
      "summary": "",
      "description": "Sort the results given a specific property. Should work quite reliable when the value to sort by is a string, number or something similar (e. g. a Date object)."
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
    "Result.html#limit": {
      "id": "Result.html#limit",
      "kind": "function",
      "title": "limit( value ) → {this}",
      "longname": "Result#limit",
      "name": "limit",
      "tags": "Result#limit limit",
      "summary": "",
      "description": "Limit the number of results."
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
      "title": "insert( ...docs ) → {Promise.&lt;(void|Error)&gt;}",
      "longname": "Collection#insert",
      "name": "insert",
      "tags": "Collection#insert insert",
      "summary": "",
      "description": "Insert new documents into the collection."
    },
    "Collection.html#insertOne": {
      "id": "Collection.html#insertOne",
      "kind": "function",
      "title": "insertOne( doc [, emitEvent ] ) → {Promise.&lt;(void|Error)&gt;}",
      "longname": "Collection#insertOne",
      "name": "insertOne",
      "tags": "Collection#insertOne insertOne",
      "summary": "",
      "description": "Insert a single document into the collection."
    },
    "Collection.html#find": {
      "id": "Collection.html#find",
      "kind": "function",
      "title": "find( filter, resultInstance ) → {Promise.&lt;(Array.&lt;object&gt;|Result|Error)&gt;}",
      "longname": "Collection#find",
      "name": "find",
      "tags": "Collection#find find",
      "summary": "",
      "description": "Find all documents in the collection that match the query or passes the filter function."
    },
    "Collection.html#findOne": {
      "id": "Collection.html#findOne",
      "kind": "function",
      "title": "findOne( filter ) → {Promise.&lt;(object|Error)&gt;}",
      "longname": "Collection#findOne",
      "name": "findOne",
      "tags": "Collection#findOne findOne",
      "summary": "",
      "description": "Find the first document in the collection that matches the query or passes the filter function."
    },
    "Collection.html#findById": {
      "id": "Collection.html#findById",
      "kind": "function",
      "title": "findById( id ) → {Promise.&lt;(object|Error)&gt;}",
      "longname": "Collection#findById",
      "name": "findById",
      "tags": "Collection#findById findById",
      "summary": "",
      "description": "Find the document with the matching ID."
    },
    "Collection.html#removeExact": {
      "id": "Collection.html#removeExact",
      "kind": "function",
      "title": "removeExact( doc [, first ] ) → {Promise.&lt;(object|Array.&lt;object&gt;|Error)&gt;}",
      "longname": "Collection#removeExact",
      "name": "removeExact",
      "tags": "Collection#removeExact removeExact",
      "summary": "",
      "description": "Remove all documents matching the given document from the collection."
    },
    "Collection.html#remove": {
      "id": "Collection.html#remove",
      "kind": "function",
      "title": "remove( filter ) → {Promise.&lt;(Array.&lt;object&gt;|Error)&gt;}",
      "longname": "Collection#remove",
      "name": "remove",
      "tags": "Collection#remove remove",
      "summary": "",
      "description": "Remove all documents in the collection that match the query or passes the filter function."
    },
    "Collection.html#removeOne": {
      "id": "Collection.html#removeOne",
      "kind": "function",
      "title": "removeOne( filter ) → {Promise.&lt;(Array.&lt;object&gt;|Error)&gt;}",
      "longname": "Collection#removeOne",
      "name": "removeOne",
      "tags": "Collection#removeOne removeOne",
      "summary": "",
      "description": "Remove the first document in the collection that matches the query or passes the filter function."
    },
    "Collection.html#removeById": {
      "id": "Collection.html#removeById",
      "kind": "function",
      "title": "removeById( id ) → {Promise.&lt;(object|Error)&gt;}",
      "longname": "Collection#removeById",
      "name": "removeById",
      "tags": "Collection#removeById removeById",
      "summary": "",
      "description": "Remove the document with the matching ID."
    },
    "Collection.html#update": {
      "id": "Collection.html#update",
      "kind": "function",
      "title": "update( filter, updater ) → {Promise.&lt;(Array.&lt;object&gt;|Error)&gt;}",
      "longname": "Collection#update",
      "name": "update",
      "tags": "Collection#update update",
      "summary": "",
      "description": "Update all documents in the collection that match the query or pass the custom filter function."
    },
    "Collection.html#updateById": {
      "id": "Collection.html#updateById",
      "kind": "function",
      "title": "updateById( id, updater ) → {Promise.&lt;(object|Error)&gt;}",
      "longname": "Collection#updateById",
      "name": "updateById",
      "tags": "Collection#updateById updateById",
      "summary": "",
      "description": "Update the document with the matching ID."
    },
    "Collection.html#clear": {
      "id": "Collection.html#clear",
      "kind": "function",
      "title": "clear()",
      "longname": "Collection#clear",
      "name": "clear",
      "tags": "Collection#clear clear",
      "summary": "",
      "description": "Clear the collection by deleting all its documents."
    },
    "TrustDB.html": {
      "id": "TrustDB.html",
      "kind": "class",
      "title": "TrustDB",
      "longname": "TrustDB",
      "name": "TrustDB",
      "tags": "TrustDB",
      "summary": "",
      "description": "Creates an TrustDB instance.",
      "body": ""
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
    "TrustDB.html#connect": {
      "id": "TrustDB.html#connect",
      "kind": "function",
      "title": "connect( filepath [, settings ] ) → {Promise.&lt;(void|Error)&gt;}",
      "longname": "TrustDB#connect",
      "name": "connect",
      "tags": "TrustDB#connect connect",
      "summary": "",
      "description": "Create a connection to a new database. If the file in the filepath already exists, it will be loaded and the collections (and optionally the settings, too) will be applied to this instance, unless the setting overwriteExisting is set to true."
    },
    "TrustDB.html#createCollection": {
      "id": "TrustDB.html#createCollection",
      "kind": "function",
      "title": "createCollection( name ) → {Promise.&lt;(Collection|Error)&gt;}",
      "longname": "TrustDB#createCollection",
      "name": "createCollection",
      "tags": "TrustDB#createCollection createCollection",
      "summary": "",
      "description": "Create a collection with the given name. Returns an existing collection in case a collection with the same name already eixists in this database. Use TrustDB#deleteCollection before creating or adding a collection with the same name."
    },
    "TrustDB.html#addCollection": {
      "id": "TrustDB.html#addCollection",
      "kind": "function",
      "title": "addCollection( collection ) → {Promise.&lt;(Collection|Error)&gt;}",
      "longname": "TrustDB#addCollection",
      "name": "addCollection",
      "tags": "TrustDB#addCollection addCollection",
      "summary": "",
      "description": "IMPORTANT: This function does not create a new collection. Use TrustDB#createCollection to create a new collection. Add a collection to the database. Returns an existing collection in case a collection with the same name already eixists in this database. Use TrustDB#deleteCollection before creating or adding a collection with the same name."
    },
    "TrustDB.html#deleteCollection": {
      "id": "TrustDB.html#deleteCollection",
      "kind": "function",
      "title": "deleteCollection( collection ) → {Promise.&lt;(Collection|Error)&gt;}",
      "longname": "TrustDB#deleteCollection",
      "name": "deleteCollection",
      "tags": "TrustDB#deleteCollection deleteCollection",
      "summary": "",
      "description": "Delete a collection with the given name or a Collection instance."
    },
    "TrustDB.html#getCollection": {
      "id": "TrustDB.html#getCollection",
      "kind": "function",
      "title": "getCollection( name ) → {Promise.&lt;(Collection|Error)&gt;}",
      "longname": "TrustDB#getCollection",
      "name": "getCollection",
      "tags": "TrustDB#getCollection getCollection",
      "summary": "",
      "description": "Retrieve a collection by name."
    },
    "TrustDB.html#saveDatabase": {
      "id": "TrustDB.html#saveDatabase",
      "kind": "function",
      "title": "saveDatabase() → {Promise.&lt;(void|Error)&gt;}",
      "longname": "TrustDB#saveDatabase",
      "name": "saveDatabase",
      "tags": "TrustDB#saveDatabase saveDatabase",
      "summary": "",
      "description": "Save the database with its collections, settings and metadata to the specified file."
    },
    "TrustDB.html#save": {
      "id": "TrustDB.html#save",
      "kind": "function",
      "title": "save() → {Promise.&lt;(void|Error)&gt;}",
      "longname": "TrustDB#save",
      "name": "save",
      "tags": "TrustDB#save save",
      "summary": "",
      "description": "Save the database with its collections, settings and metadata to the specified file."
    },
    "TrustDB.html#deleteDatabase": {
      "id": "TrustDB.html#deleteDatabase",
      "kind": "function",
      "title": "deleteDatabase() → {Promise.&lt;(void|Error)&gt;}",
      "longname": "TrustDB#deleteDatabase",
      "name": "deleteDatabase",
      "tags": "TrustDB#deleteDatabase deleteDatabase",
      "summary": "",
      "description": "Delete the database from the filesystem if it exists."
    },
    "TrustDB.html#moveDatabase": {
      "id": "TrustDB.html#moveDatabase",
      "kind": "function",
      "title": "moveDatabase( filepath ) → {Promise.&lt;(void|Error)&gt;}",
      "longname": "TrustDB#moveDatabase",
      "name": "moveDatabase",
      "tags": "TrustDB#moveDatabase moveDatabase",
      "summary": "",
      "description": "Move the database to the new path on the filesystem."
    },
    "TrustDB.html#clear": {
      "id": "TrustDB.html#clear",
      "kind": "function",
      "title": "clear()",
      "longname": "TrustDB#clear",
      "name": "clear",
      "tags": "TrustDB#clear clear",
      "summary": "",
      "description": "Clear the database by deleting all of its collections."
    },
    "TrustDB.html#configureSettings": {
      "id": "TrustDB.html#configureSettings",
      "kind": "function",
      "title": "configureSettings( [ settings ] )",
      "longname": "TrustDB#configureSettings",
      "name": "configureSettings",
      "tags": "TrustDB#configureSettings configureSettings",
      "summary": "",
      "description": "(Re-)Configure the settings."
    }
  }
};