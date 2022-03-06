import { HTMLAttributes, useEffect, useState } from 'react';
import styles from './TimePicker.module.css';
import _ from 'lodash';

type AmPm = 'AM' | 'PM';

const generateArbitaryArray = (count: number, step: number = 1): number[] => {
	const array: number[] = [];
	for (let i = 0; i < count; i = i + step) {
		array.push(i);
	}
	return array;
};

export interface TimePickerProps extends HTMLAttributes<HTMLSelectElement> {
	label: string;
	defaultHour: string;
	defaultMinute: string;
	defaultAmPm: AmPm;
	onTimeChange: (value: string) => void;
}

export const TimePicker = ({
	label,
	defaultAmPm,
	defaultHour,
	defaultMinute,
	onTimeChange,
}: TimePickerProps) => {
	const [hours, setHours] = useState<string>(defaultHour);
	const [minutes, setMinutes] = useState<string>(defaultMinute);
	const [amPm, setAmPm] = useState<AmPm>(defaultAmPm);

	useEffect(() => {
		const now = new Date();
		if (amPm === 'PM') {
			now.setHours(parseInt(hours) + 12);
		} else {
			now.setHours(parseInt(hours));
		}
		now.setMinutes(parseInt(minutes));
		const hh = _.padStart(now.getHours().toString(), 2, '0');
		const mm = _.padStart(now.getMinutes().toString(), 2, '0');

		const time = `${hh}:${mm}:00`;
		onTimeChange(time);
	}, [hours, minutes, amPm, onTimeChange]);

	const handleHourChange = (val: string) => {
		setHours(val);
	};

	const handleMinuteChange = (val: string) => {
		setMinutes(val);
	};

	const handleAmPmChange = (val: AmPm) => {
		setAmPm(val);
	};

	return (
		<div className={styles['root']}>
			<label>{label}</label>
			<div className={styles['container']}>
				<div className={styles['select-container']}>
					<label>Hour</label>
					<select
						value={hours}
						onChange={(e) => handleHourChange(e.target.value)}
					>
						{generateArbitaryArray(12).map((val) => {
							const hourVal = _.padStart((val + 1).toString(), 2, '0');
							return (
								<option key={`hour-${hourVal}`} value={hourVal}>
									{hourVal}
								</option>
							);
						})}
					</select>
				</div>
				<div className={styles['select-container']}>
					<label>Min</label>
					<select
						value={minutes}
						onChange={(e) => handleMinuteChange(e.target.value)}
					>
						{generateArbitaryArray(60, 15).map((val) => {
							const minuteVal = _.padStart(val.toString(), 2, '0');

							return (
								<option key={`hour-${minuteVal}`} value={minuteVal}>
									{minuteVal}
								</option>
							);
						})}
					</select>
				</div>
				<div className={styles['select-container']}>
					<label>AM/PM</label>
					<select
						value={amPm}
						onChange={(e) => handleAmPmChange(e.target.value as AmPm)}
					>
						<option value="AM">AM</option>
						<option value="PM">PM</option>
					</select>
				</div>
			</div>
		</div>
	);
};
