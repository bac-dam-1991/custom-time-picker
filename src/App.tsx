import { Link, Route, Routes } from 'react-router-dom';
import { IconsWithSvgrDemo } from './routes/IconsWithSvgrDemo';
import { ReactHookFormDemos } from './routes/ReactHookFormDemo';

export const App = () => {
	return (
		<>
			<nav>
				<Link to={'/demos/react-hook-form'}>React Hook Form</Link>
				<Link to={'/demos/icons-with-svgr'}>Icons with SVGR</Link>
			</nav>
			<Routes>
				<Route path="/demos/react-hook-form" element={<ReactHookFormDemos />} />
				<Route path="/demos/icons-with-svgr" element={<IconsWithSvgrDemo />} />
			</Routes>
		</>
	);
};
