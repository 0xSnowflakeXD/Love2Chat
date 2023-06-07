const { exists } = require("node:fs/promises");
const { existsSync } = require("node:fs");
const { resolve: resolvepath } = require("node:path");
function Snowflake () {
  // When called with `new`.
  if (this.constructor === this) {
    
  }
  // When called as a function.
  else {
    
  }
}
class Database {
  // implement a ram cache later?
  cache;
  rootdir = "";
  branches = new Map();
  #registerBranch (...subpath) {
    let branch = this.branches;
    for (let i = 0; i < subpath.length; i++) {
      if (i === subpath.length - 1) {
        branch.set(subpath, new Map())
      } else {
        let map = new Map();
        branch.set(subath, map);
        branch = map;
      }
    }
  }
  branchExists (...subpath) {
    
  }
  pathTo (...subpath) {
    
  }
  constructor (rootdir) {
    if (typeof rootdir !== "string") throw new Error("Invalid root folder path.")
    this.rootdir = resolvepath(root);
    const exists = existsSync(root);
    if (!exists) throw new Error("Invalid root folder.");
  }
}
module.exports.Database = Database;
module.exports.Snowflake = Snowflake;