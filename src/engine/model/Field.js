import Entry from '../model/Entry';


class Field {
  constructor(name, entries) {
    this.name = name;
    this.value = undefined;
    this.entries = entries.map(entry => new Entry(
      entry.name,
      entry.path,
      entry.or,
      entry.saveData,
      entry.removeNewLines
    ));
  }
}


export default Field;
