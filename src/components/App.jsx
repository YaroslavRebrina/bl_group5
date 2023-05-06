import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout/Layout";
import { routes } from "../routes";
import { CocktailDetail, Cocktails, Home } from "../views";

export const App = () => {
  return (
    <>
      <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
        Home Page
      </h1>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.COCKTAILS} element={<Cocktails />} />
          <Route path={routes.COCKTAIL_ID} element={<CocktailDetail />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} replace />} />
      </Routes>
    </>
  );
};
