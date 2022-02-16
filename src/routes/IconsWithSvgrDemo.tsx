import { useState } from 'react';
import { Icon, IconName, IconNames } from '../components/Icon';

export const IconsWithSvgrDemo = () => {
	const [selectedIconName, setSelectedIconName] =
		useState<IconName>('circled-check');
	const [width, setWidth] = useState<number>(100);

	return (
		<div className="root-container">
			<label>Icon</label>
			<select onChange={(e) => setSelectedIconName(e.target.value as IconName)}>
				{IconNames.map((name) => {
					return <option key={name}>{name}</option>;
				})}
			</select>
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
					style={{ stroke: 'black', width, strokeWidth: 2 }}
				/>
			</div>
		</div>
	);
};
