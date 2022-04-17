import { Accordion } from '../components/Accordion';
import { AccordionContent } from '../components/AccordionContent';
import { AccordionItem } from '../components/AccordionItem';
import { AccordionSummary } from '../components/AccordionSummary';

const AccordionItems = [
	{
		summary: 'React',
		content:
			'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by	Meta and a community of individual developers and companies.',
	},
	{
		summary: 'Vue.js',
		content:
			'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
	},
	{
		summary: 'Angular',
		content:
			'Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.',
	},
];

export const ComposableAccordionDemo = () => {
	return (
		<div className="root-container">
			<h1>Composable Accordion</h1>
			<br />
			<p>
				Inspired by Kent C. Dodd's talk, this demo illustrates the flexibility
				of composition of component logic rather than using complex conditional
				logics.
			</p>
			<br />
			<hr />
			<br />
			<p>
				Only single accordion item can open. All accordion items can be closed.
			</p>
			<br />
			<pre>{'<Accordion>'}</pre>
			<br />
			<Accordion>
				{AccordionItems.map((item) => {
					return (
						<AccordionItem key={item.summary}>
							<AccordionSummary>{item.summary}</AccordionSummary>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
			<br />
			<hr />
			<br />
			<p>
				Only single accordion item can open. One accordion item must remains
				open.
			</p>
			<br />
			<pre>{'<Accordion preventClose>'}</pre>
			<br />
			<Accordion preventClose>
				{AccordionItems.map((item) => {
					return (
						<AccordionItem key={item.summary}>
							<AccordionSummary>{item.summary}</AccordionSummary>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
			<br />
			<hr />
			<br />
			<p>
				Multiple accordion items can open. All accordion items can be closed.
			</p>
			<br />
			<pre>{'<Accordion multiple>'}</pre>
			<br />
			<Accordion multiple>
				{AccordionItems.map((item) => {
					return (
						<AccordionItem key={item.summary}>
							<AccordionSummary>{item.summary}</AccordionSummary>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
			<br />
			<hr />
			<br />
			<p>
				Multiple accordion items can open. One accordion item must remains open.
			</p>
			<br />
			<pre>{'<Accordion preventClose multiple>'}</pre>
			<br />
			<Accordion preventClose multiple>
				{AccordionItems.map((item) => {
					return (
						<AccordionItem key={item.summary}>
							<AccordionSummary>{item.summary}</AccordionSummary>
							<AccordionContent>{item.content}</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
		</div>
	);
};
