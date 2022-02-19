import { useState } from 'react';
import { Icon, IconName, IconNames } from '../components/Icon';
import { Select } from '../components/Select';
import _ from 'lodash';

export const convertToHex = (val: number): string => {
	return _.padStart(val.toString(16), 2, '0');
};

export const IconsWithSvgrDemo = () => {
	const [selectedIconName, setSelectedIconName] =
		useState<IconName>('circled-check');
	const [width, setWidth] = useState<number>(100);
	const [strokeColor, setStrokeColor] = useState<string>('#000000');
	const [fillColor, setFillColor] = useState<string>('#ffffff');
	const [fillAlpha, setFillAlpha] = useState<number>(255);
	const [strokeAlpha, setStrokeAlpha] = useState<number>(255);

	return (
		<div className="root-container">
			<label>Icon</label>
			<Select onChange={(e) => setSelectedIconName(e.target.value as IconName)}>
				{IconNames.map((name) => {
					return <option key={name}>{name}</option>;
				})}
			</Select>
			<br />
			<label>Stroke color</label>
			<input
				type="color"
				value={strokeColor}
				onChange={(e) => {
					setStrokeColor(e.target.value);
				}}
			/>
			<br />
			<label>
				Stroke alpha: {strokeAlpha} (#{convertToHex(strokeAlpha)})
			</label>
			<input
				type="range"
				min="0"
				max="255"
				value={strokeAlpha}
				onChange={(e) => setStrokeAlpha(parseInt(e.target.value))}
			/>
			<br />
			<label>Fill color</label>
			<input
				type="color"
				value={fillColor}
				onChange={(e) => {
					setFillColor(e.target.value);
				}}
			/>
			<br />
			<label>
				Fill alpha: {fillAlpha} (#{convertToHex(fillAlpha)})
			</label>
			<input
				type="range"
				min="0"
				max="255"
				value={fillAlpha}
				onChange={(e) => setFillAlpha(parseInt(e.target.value))}
			/>
			<br />
			<label>Icon width: {width}px</label>
			<input
				type="range"
				min="10"
				max="200"
				value={width}
				onChange={(e) => setWidth(parseInt(e.target.value))}
			/>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Icon
					name={selectedIconName}
					style={{
						stroke: `${strokeColor}${convertToHex(strokeAlpha)}`,
						width,
						strokeWidth: 2,
						fill: `${fillColor}${convertToHex(fillAlpha)}`,
					}}
				/>
			</div>
		</div>
	);
};
