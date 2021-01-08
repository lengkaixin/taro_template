function createReducer(initialState, handlers, namespace) {
  handlers = createNameSpace(handlers, namespace);
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

function createNameSpace(handlers, namespace) {
  return Object.keys(handlers).reduce((newHandlers, current) => {
    const newKey = `${namespace}/${current}`;
    newHandlers[newKey] = handlers[current];
    return newHandlers;
  }, {});
}

export default createReducer;
