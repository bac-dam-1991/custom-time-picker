import { Link, Route, Routes } from 'react-router-dom';
import { IconsWithSvgrDemo } from './routes/IconsWithSvgrDemo';
import { ReactHookFormDemos } from './routes/ReactHookFormDemo';

export const App = () => {
	return (
		<>
			<nav>
				<Link to={'/custom-time-picker/demos/react-hook-form'}>
					React Hook Form
				</Link>
				<Link to={'/custom-time-picker/demos/icons-with-svgr'}>
					Icons with SVGR
				</Link>
			</nav>
			<Routes>
				<Route
					path="/custom-time-picker/demos/react-hook-form"
					element={<ReactHookFormDemos />}
				/>
				<Route
					path="/custom-time-picker/demos/icons-with-svgr"
					element={<IconsWithSvgrDemo />}
				/>
			</Routes>
		</>
	);
};
