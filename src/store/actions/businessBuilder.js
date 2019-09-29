import * as actionTypes from './actionsTypes';

export const addBusiness = (data) => {
	return {
		type: actionTypes.ADD_BUSINESS,
		data: data
	}
}

export const switchBusinessTab = (id) => {
	return{
		type: actionTypes.SWITCH_BUSINESS_TAB,
		id: id	
	}
}

export const saveCurrentStopwatchTime = (time, id, timerTime) => {
	return{
		type: actionTypes.SAVE_CURRENT_STOPWATCH_TIME,
		time: time,
		id: id,
		timerTime: timerTime
	}
}
