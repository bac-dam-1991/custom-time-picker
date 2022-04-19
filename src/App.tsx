import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ComposableAccordionDemo } from "./routes/ComposableAccordion";
import { FormRDemo } from "./routes/ReFormDemo";
import { IconsWithSvgrDemo } from "./routes/IconsWithSvgrDemo";
import { ReactHookFormDemos } from "./routes/ReactHookFormDemo";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/demos/react-hook-form" element={<ReactHookFormDemos />} />
        <Route path="/demos/icons-with-svgr" element={<IconsWithSvgrDemo />} />
        <Route
          path="/demos/composable-accordion"
          element={<ComposableAccordionDemo />}
        />
        <Route path="/demos/reform" element={<FormRDemo />} />
      </Routes>
    </>
  );
};
