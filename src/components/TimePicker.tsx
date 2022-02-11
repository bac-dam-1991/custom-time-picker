import { HTMLAttributes } from 'react';
import styles from './TimePicker.module.css';

const generateArbitaryArray = (count: number, step: number = 1): number[] => {
	const array: number[] = [];
	for (let i = 0; i < count; i = i + step) {
		array.push(i);
	}
	return array;
};

const padWithLeadingZero = (val: number): string => {
	if (val < 10 && val >= 0) {
		return `0${val}`;
	}
	return val.toString();
};

export interface TimePickerProps extends HTMLAttributes<HTMLSelectElement> {
	label: string;
	hourSelectProps: HTMLAttributes<HTMLSelectElement>;
	minuteSelectProps: HTMLAttributes<HTMLSelectElement>;
}

export const TimePicker = ({
	label,
	hourSelectProps,
	minuteSelectProps,
}: TimePickerProps) => {
	return (
		<div className={styles['root']}>
			<label>{label}</label>
			<div className={styles['container']}>
				<div className={styles['select-container']}>
					<label>Hour</label>
					<select {...hourSelectProps}>
						{generateArbitaryArray(24).map((val) => {
							return (
								<option key={`hour-${val}`}>{padWithLeadingZero(val)}</option>
							);
						})}
					</select>
				</div>
				<div className={styles['select-container']}>
					<label>Min</label>
					<select {...minuteSelectProps}>
						{generateArbitaryArray(60, 15).map((val) => {
							return (
								<option key={`hour-${val}`}>{padWithLeadingZero(val)}</option>
							);
						})}
					</select>
				</div>
			</div>
		</div>
	);
};
