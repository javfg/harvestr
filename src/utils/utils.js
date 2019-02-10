const arrayOfStrNumbers = (l) => [...Array(l + 1).keys()].splice(1).map(e => e.toString())

const getField = (object, field, defaultValue) => {
  field = field.split('.');

  for (var i = 0; i < field.length; i++) {
      if(typeof object[field[i]] === 'undefined')
          return defaultValue;
          object = object[field[i]];
  }

  return object;
};

// NO VA

export { arrayOfStrNumbers, getField };
