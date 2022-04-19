import { Link } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import { useState } from 'react';

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	const matchSm = useMediaQuery({ direction: 'up', breakpoint: 'sm' });

	const dropDownClasses = clsx(
		styles['dropdown'],
		open ? styles['active'] : styles['inactive']
	);

	const Links = () => {
		return (
			<>
				<Link to={'/demos/react-hook-form'} onClick={toggleMenu}>
					React Hook Form
				</Link>
				<Link to={'/demos/icons-with-svgr'} onClick={toggleMenu}>
					Icons with SVGR
				</Link>
				<Link to={'/demos/composable-accordion'} onClick={toggleMenu}>
					Composable Accordion
				</Link>
			</>
		);
	};

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<nav className={styles['root']}>
			{matchSm ? (
				<Links />
			) : (
				<>
					<span className={styles['menu']} onClick={toggleMenu}>
						Menu
					</span>
					<div className={dropDownClasses}>
						<Links />
					</div>
				</>
			)}
		</nav>
	);
};
