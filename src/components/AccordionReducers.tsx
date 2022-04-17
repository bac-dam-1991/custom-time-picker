export type AccordionAction = 'selected_index';

export interface AccordionReducerPayload {
	action: AccordionAction;
	index: number;
}

export type AccordionReducer = (
	state: number[],
	payload: AccordionReducerPayload
) => number[] | null;

export const combineReducer = (
	...reducers: AccordionReducer[]
): ((state: number[], payload: AccordionReducerPayload) => number[]) => {
	return (state, payload) => {
		let openIndexes: number[] | null = null;
		for (const reducer of reducers) {
			openIndexes = reducer(state, payload);
			if (openIndexes) {
				break;
			}
		}

		if (openIndexes) {
			return openIndexes;
		}

		return state;
	};
};

export const MultipleAccordionsReducer: AccordionReducer = (state, payload) => {
	const { index, action } = payload;

	switch (action) {
		case 'selected_index': {
			if (state.includes(index)) {
				return state.filter((i) => i !== index);
			}
			return [...state, index];
		}
		default: {
			return state;
		}
	}
};

export const SingleAccordionReducer: AccordionReducer = (state, payload) => {
	const { index, action } = payload;

	switch (action) {
		case 'selected_index': {
			if (state.includes(index)) {
				return [];
			}
			return [index];
		}
		default: {
			return state;
		}
	}
};

export const PreventCloseAccordionReducer: AccordionReducer = (
	state,
	payload
) => {
	const { index, action } = payload;
	switch (action) {
		case 'selected_index': {
			if (state.length === 1 && state.includes(index)) {
				return state;
			}
			return null;
		}
		default: {
			return null;
		}
	}
};
