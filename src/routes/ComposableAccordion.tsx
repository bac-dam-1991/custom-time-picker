import { Accordion } from '../components/Accordion';
import { AccordionContent } from '../components/AccordionContent';
import { AccordionItem } from '../components/AccordionItem';
import { AccordionSummary } from '../components/AccordionSummary';

export const ComposableAccordionDemo = () => {
	return (
		<div className="root-container">
			<h1>Composable Accordion</h1>
			<Accordion>
				<AccordionItem>
					<AccordionSummary>React</AccordionSummary>
					<AccordionContent>
						React is a free and open-source front-end JavaScript library for
						building user interfaces based on UI components. It is maintained by
						Meta and a community of individual developers and companies.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem>
					<AccordionSummary>Vue.js</AccordionSummary>
					<AccordionContent>
						Vue.js is an open-source model–view–viewmodel front end JavaScript
						framework for building user interfaces and single-page applications.
						It was created by Evan You, and is maintained by him and the rest of
						the active core team members.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem>
					<AccordionSummary>Angular</AccordionSummary>
					<AccordionContent>
						Angular is a TypeScript-based free and open-source web application
						framework led by the Angular Team at Google and by a community of
						individuals and corporations. Angular is a complete rewrite from the
						same team that built AngularJS.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};
