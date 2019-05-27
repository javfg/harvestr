

class Entry {
  constructor(name, path, or, saveData, removeNewLines) {
    this.name = name;
    this.path = path;
    this.or = or;
    this.saveData = saveData;
    this.removeNewLines = removeNewLines;

    this.value = undefined;
  }
}


export default Entry;
