//
// searchProfile actions.
//

// Set searchProfile.
export const setSearchProfile = (searchProfile) => ({
  type: 'SET_SEARCHPROFILE',
  searchProfile
});

// Add query to search profile.
export const addQuery = (query) => ({
  type: 'ADD_QUERY',
  query
});

// Delete query to search profile.
export const deleteQuery = (queryName) => ({
  type: 'DELETE_QUERY',
  queryName
});

// Update query of given name with details.
export const updateQuery = (queryName, updatedQuery) => ({
  type: 'UPDATE_QUERY',
  queryName,
  updatedQuery
});

// Add field to given query in search profile.
export const addField = (queryName, field) => ({
  type: 'ADD_FIELD',
  queryName,
  field
});

// Delete field of given query in search profile.
export const deleteField = (queryName, fieldName) => ({
  type: 'DELETE_FIELD',
  queryName,
  fieldName
});

// Update with given name field of given query with details.
export const updateField = (queryName, fieldName, updatedField) => ({
  type: 'UPDATE_FIELD',
  queryName,
  fieldName,
  updatedField
});

// Add entry to given field in given query in search profile.
export const addEntry = (queryName, fieldName, entry) => ({
  type: 'ADD_ENTRY',
  queryName,
  fieldName,
  entry
});

// Delete entry of given field in given query in search profile.
export const deleteEntry = (queryName, fieldName, entryName) => ({
  type: 'DELETE_ENTRY',
  queryName,
  fieldName,
  entryName
});

// Update entry with given name of given field in given query with details.
export const updateEntry = (queryName, fieldName, entryName, updatedEntry) => ({
  type: 'UPDATE_ENTRY',
  queryName,
  fieldName,
  entryName,
  updatedEntry
});
