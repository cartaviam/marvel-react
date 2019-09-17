import { store } from './stores';

/* Redux store as shown in the previous Gist*/

export default function char(state = store.initialState, action) {
	switch (action.type) {
		case 'SEARCH_INPUT_CHANGED':
		const { searchTerm } = action.payload;
		return {
			...state,
			searchTerm: searchTerm,
			char: searchTerm
			? store.Char.filter(
				char =>
					char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
				)
			: store.Char,
		};

		default:
		return state;
	}
}