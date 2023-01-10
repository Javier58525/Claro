


const inialState = {
	list: [],
	isLoading: true,
	isError: false,
};

const GET_TITLE_LIST_SUCCESS = "GET_TITLE_LIST_SUCCESS";
const GET_TITLE_LIST_FAILURE = "GET_TITLE_LIST_FAILURE";

export default function peliculasReducer(state = inialState, action) {
	switch (action.type) {
		case GET_TITLE_LIST_SUCCESS:
			return {
				...state,
				list: action.payload,
				isLoading: false,
			};
		case GET_TITLE_LIST_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
}

export const getTitleListAction = () => async (dispatch, getState) => {
	try {
		const url = "https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=rrscut2td9j0v73m68jrf3k665&quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34270";

		const datos= await fetch(url);
		const res = await datos.json();
		console.log("getTitileListAction"+ res);
		dispatch({
			type: GET_TITLE_LIST_SUCCESS,
			payload: res.response.groups,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_TITLE_LIST_FAILURE,
		});
	}
};
