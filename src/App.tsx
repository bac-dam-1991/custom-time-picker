import { Link, Route, Routes } from "react-router-dom";
import { ComposableAccordionDemo } from "./routes/ComposableAccordion";
import { IconsWithSvgrDemo } from "./routes/IconsWithSvgrDemo";
import { ReactHookFormDemos } from "./routes/ReactHookFormDemo";

export const App = () => {
  return (
    <>
      <nav>
        <Link to={"/demos/react-hook-form"}>React Hook Form</Link>
        <Link to={"/demos/icons-with-svgr"}>Icons with SVGR</Link>
        <Link to={"/demos/composable-accordion"}>Composable Accordion</Link>
      </nav>
      <Routes>
        <Route path="/demos/react-hook-form" element={<ReactHookFormDemos />} />
        <Route path="/demos/icons-with-svgr" element={<IconsWithSvgrDemo />} />
        <Route
          path="/demos/composable-accordion"
          element={<ComposableAccordionDemo />}
        />
      </Routes>
    </>
  );
};
