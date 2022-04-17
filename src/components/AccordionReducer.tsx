export type AccordionAction = 'selected_index';

export interface AccordionPayload {
	action: AccordionAction;
	index: number;
}

export const AccordionReducer = (
	state: number[],
	payload: AccordionPayload
) => {
	const { index, action } = payload;

	switch (action) {
		case 'selected_index': {
			if (state.includes(index)) {
				return state.filter((i) => i !== index);
			}
			return [...state, index];
		}
	}
};
