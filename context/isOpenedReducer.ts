export const isOpenedReducer = (state: boolean, action: any) => {
	switch (action) {
		case "open":
			return true;
		case "close":
			return false;
		default:
			return state;
	}
};
