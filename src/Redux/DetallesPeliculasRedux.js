
const inialState = {
	detail: [],
	isLoading: true,
	isError: false,
};

const GET_TITLE_DETAIL_SUCCESS = "GET_TITLE_DETAIL_SUCCESS";
const GET_TITLE_DETAIL_FAILURE = "GET_TITLE_DETAIL_FAILURE";

export default function detallesPeliculasReducer(state = inialState, action) {
	switch (action.type) {
		case GET_TITLE_DETAIL_SUCCESS:
			return {
				...state,
				detail: action.payload,
				isLoading: false,
			};
		case GET_TITLE_DETAIL_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
}

export const getTitleDetailAction = (id) => async (dispatch) => {
	try {
		
		const url = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=rrscut2td9j0v73m68jrf3k665&group_id=`+id;

		const datos= await fetch(url);
		const res2= await datos.json();

		const { group: { common: { image_background, image_medium, title, large_description, extendedcommon: { media: { publishyear, duration } },
            extendedcommon: { media: { rating: { desc, code } } }, extendedcommon: { media: { language: { dubbed, subbed } } }, extendedcommon: { genres: { genre } }, extendedcommon: { roles: { role } } } } } = res2.response;

		

		dispatch({
			type: GET_TITLE_DETAIL_SUCCESS,
			payload: {image_background,image_medium,title,large_description,publishyear,duration,desc,code,dubbed,subbed,genre,role},
		});
	} catch (error) {
		dispatch({
			type: GET_TITLE_DETAIL_FAILURE,
		});
	}
};
