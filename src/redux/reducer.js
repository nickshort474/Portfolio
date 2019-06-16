import constants from './constants';

const initialState = {
	
	page:"Home"
	
}

const reducer = (state = initialState, action) => {
	
	switch (action.type){

		case constants.SAVE_PAGE:
			return Object.assign({},state,{page:action.page})
		case constants.CLEAR_STORE:
			state = initialState;	
			return state

		default:
		return state;
	}

}

export default reducer;


