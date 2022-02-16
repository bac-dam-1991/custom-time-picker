import { CSSProperties, FunctionComponent, SVGProps } from 'react';
import { ReactComponent as CircledCheck } from '../assets/icons/circled-check.svg';
import { ReactComponent as ShipSteeringWheel } from '../assets/icons/ship-steering-wheel.svg';

export const IconNames = ['circled-check', 'ship-steering-wheel'] as const;

export type IconName = typeof IconNames[number];

export const IconMap: ReadonlyMap<
	IconName,
	FunctionComponent<SVGProps<SVGSVGElement>>
> = new Map([
	['circled-check', CircledCheck],
	['ship-steering-wheel', ShipSteeringWheel],
]);

export interface IconProps {
	name: IconName;
	style?: CSSProperties;
}

export const Icon = ({ name, style }: IconProps) => {
	const SelectedIcon = IconMap.get(name) as FunctionComponent<
		SVGProps<SVGSVGElement>
	>;
	return <SelectedIcon style={style} />;
};
