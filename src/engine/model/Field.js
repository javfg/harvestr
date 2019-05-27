

class Field {
  constructor(name, field, or, type, saveData, removeNewLines) {
    this.name = name;
    this.field = field;
    this.or = or;
    this.type = type;
    this.saveData = saveData;
    this.removeNewLines = removeNewLines;

    this.value = undefined;
    this.additionalValues = [];
  }


}


export default Field;
