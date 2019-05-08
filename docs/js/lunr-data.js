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
          "promise.&lt;(array.&lt;object&gt;|error)&gt",
          "queri"
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
        "TrustDB.html#filepath": [
          "databas",
          "filepath",
          "member",
          "trustdb#filepath"
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
          "deletecollect",
          "eixist",
          "exist",
          "function",
          "given",
          "name",
          "promise.&lt;(collection|error)&gt",
          "return",
          "same",
          "trustdb#createcollect",
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
          "exist",
          "filepath",
          "filesystem",
          "function",
          "move",
          "movedatabas",
          "new",
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
          "default",
          "function",
          "overwrit",
          "re",
          "set",
          "trustdb#configureset",
          "valu"
        ]
      },
      "length": 34
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
            "l": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Collection.html#find": {
                        "ref": "Collection.html#find",
                        "tf": 39.58333333333333
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
                          "TrustDB.html#filepath": {
                            "ref": "TrustDB.html#filepath",
                            "tf": 775
                          },
                          "TrustDB.html#connect": {
                            "ref": "TrustDB.html#connect",
                            "tf": 27.63157894736842
                          },
                          "TrustDB.html#moveDatabase": {
                            "ref": "TrustDB.html#moveDatabase",
                            "tf": 41.66666666666666
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
                                "tf": 8.333333333333332
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
              "d": {
                "docs": {
                  "Collection.html#find": {
                    "ref": "Collection.html#find",
                    "tf": 689.5833333333334
                  },
                  "Collection.html#findOne": {
                    "ref": "Collection.html#findOne",
                    "tf": 5.555555555555555
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
                          "Collection.html#update": {
                            "ref": "Collection.html#update",
                            "tf": 115.55555555555556
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
                "tf": 8.333333333333332
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
                        "s": {
                          "docs": {},
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
                          "Collection.html#update": {
                            "ref": "Collection.html#update",
                            "tf": 5.555555555555555
                          },
                          "Collection.html#clear": {
                            "ref": "Collection.html#clear",
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
          "e": {
            "docs": {},
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
                                    "TrustDB.html#createCollection": {
                                      "ref": "TrustDB.html#createCollection",
                                      "tf": 2.272727272727273
                                    },
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
            },
            "f": {
              "docs": {},
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "TrustDB.html#configureSettings": {
                          "ref": "TrustDB.html#configureSettings",
                          "tf": 8.333333333333332
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
                        "TrustDB.html#collections": {
                          "ref": "TrustDB.html#collections",
                          "tf": 25
                        },
                        "TrustDB.html#filepath": {
                          "ref": "TrustDB.html#filepath",
                          "tf": 25
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
                          "tf": 8.333333333333332
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
                            "tf": 8.333333333333332
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
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
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
                      "TrustDB.html#filepath": {
                        "ref": "TrustDB.html#filepath",
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
                    "tf": 8.333333333333332
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
        "n": {
          "docs": {},
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
                  "tf": 8.333333333333332
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
        "s": {
          "docs": {},
          "i": {
            "docs": {},
            "z": {
              "docs": {},
              "e": {
                "docs": {
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
            }
          },
          "t": {
            "docs": {},
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
                  "tf": 58.33333333333333
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
                    "docs": {},
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
                                                                                                  "tf": 33.33333333333333
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
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
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
                                                                    }
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
            }
          }
        },
        "e": {
          "docs": {},
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
                    },
                    "TrustDB.html#moveDatabase": {
                      "ref": "TrustDB.html#moveDatabase",
                      "tf": 8.333333333333332
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
        "u": {
          "docs": {},
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
                    }
                  }
                }
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
              "TrustDB.html#createCollection": {
                "ref": "TrustDB.html#createCollection",
                "tf": 2.272727272727273
              },
              "TrustDB.html#addCollection": {
                "ref": "TrustDB.html#addCollection",
                "tf": 3.225806451612903
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
                        "docs": {
                          "TrustDB.html#configureSettings": {
                            "ref": "TrustDB.html#configureSettings",
                            "tf": 8.333333333333332
                          }
                        },
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
        "v": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "u": {
                "docs": {
                  "TrustDB.html#configureSettings": {
                    "ref": "TrustDB.html#configureSettings",
                    "tf": 8.333333333333332
                  }
                }
              }
            }
          }
        }
      },
      "length": 300
    },
    "corpusTokens": [
      "ad",
      "add",
      "addcollect",
      "alreadi",
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
      "collection#findon",
      "collection#firstdocu",
      "collection#insert",
      "collection#inserton",
      "collection#lastdocu",
      "collection#nam",
      "collection#remov",
      "collection#removeexact",
      "collection#removeon",
      "collection#s",
      "collection#upd",
      "configur",
      "configureset",
      "connect",
      "creat",
      "createcollect",
      "current",
      "custom",
      "databas",
      "default",
      "delet",
      "deletecollect",
      "deletedatabas",
      "disabl",
      "doc",
      "document",
      "eixist",
      "emitev",
      "enabl",
      "exist",
      "file",
      "filepath",
      "filesystem",
      "filter",
      "find",
      "findon",
      "first",
      "firstdocu",
      "foodoc",
      "function",
      "getcollect",
      "given",
      "global",
      "handlebar",
      "import",
      "index",
      "insert",
      "inserton",
      "instanc",
      "interv",
      "jsdoc3",
      "last",
      "lastdocu",
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
      "option",
      "overwrit",
      "overwriteexist",
      "pass",
      "promise.&lt;(array.&lt;object&gt;|error)&gt",
      "promise.&lt;(collection|error)&gt",
      "promise.&lt;(object|array.&lt;object&gt;|error)&gt",
      "promise.&lt;(object|error)&gt",
      "promise.&lt;(void|error)&gt",
      "queri",
      "re",
      "readm",
      "remov",
      "removeexact",
      "removeon",
      "retriev",
      "return",
      "same",
      "save",
      "savedatabas",
      "set",
      "singl",
      "size",
      "specifi",
      "state",
      "templat",
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
      "trustdb#filepath",
      "trustdb#getcollect",
      "trustdb#movedatabas",
      "trustdb#sav",
      "trustdb#savedatabas",
      "unless",
      "updat",
      "us",
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
      "title": "find( [ filter ] ) → {Promise.&lt;(Array.&lt;object&gt;|Error)&gt;}",
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
      "description": "Create a collection with the given name. Returns an existing collection in case a collection with the same name already eixists in this database. Use deleteCollection before creating or adding a collection with the same name."
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
      "description": "Move the database to the new filepath if it exists on the filesystem."
    },
    "TrustDB.html#clear": {
      "id": "TrustDB.html#clear",
      "kind": "function",
      "title": "clear()",
      "longname": "TrustDB#clear",
      "name": "clear",
      "tags": "TrustDB#clear clear",
      "summary": "",
      "description": "Clear the database by deleting all its collections."
    },
    "TrustDB.html#configureSettings": {
      "id": "TrustDB.html#configureSettings",
      "kind": "function",
      "title": "configureSettings( [ settings ] )",
      "longname": "TrustDB#configureSettings",
      "name": "configureSettings",
      "tags": "TrustDB#configureSettings configureSettings",
      "summary": "",
      "description": "(Re-)Configure the settings and overwrite the default values."
    }
  }
};