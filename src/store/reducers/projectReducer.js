const initState = {}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_NOTICE_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_NOTICE_ERROR':
      console.log('create project error');
      return state;
    case 'EDIT_NOTICE_SUCCESS':
      console.log('create project success');
      return state;
    case 'EDIT_NOTICE_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};
export default projectReducer;