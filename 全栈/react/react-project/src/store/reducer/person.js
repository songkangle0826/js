import * as TYPES from '../action-types';


function person(state={
	baseInfo: null
},action){
	state = JSON.parse(JSON.stringify(state))
	let payload;
	switch(action.type){
		case TYPES.PERSON_QUERY_BASE:
			payload = action.payload;
			if (parseFloat(payload.code) === 0) {
				state.baseInfo = payload.data
			}
			break;
		default:
			break;
	}
	return state;
} 

export default person;