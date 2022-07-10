export const isOpenedReducer = (state: boolean, action: any) => {
	switch (action.type) {
		case "TOGGLE":
			return action.payload;
		default:
			return state;
	}
};
