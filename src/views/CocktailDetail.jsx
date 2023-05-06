import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { CocktailInfo } from "../components/CocktailInfo";
import { useLocation, useParams } from "react-router-dom";
import { routes } from "../routes";
import { useEffect, useState } from "react";
import { getCocktailDetail } from "../api/cocktail-service";

export const CocktailDetail = () => {
  const location = useLocation();
  const path = location?.state?.from ?? routes.HOME;
  
  const [cocktailInfo, setCocktailInfo] = useState(null);
  const { cocktailId } = useParams();

  useEffect(() => {
    getCocktailDetail(cocktailId).then(setCocktailInfo).catch(console.log);
  }, [cocktailId]);

  return (
    <>
      <h1 className="uppercase text-4xl text-gray-600 text-center">
        CocktailDetail
      </h1>
      <GoBackBtn path={path} />
      {cocktailInfo && <CocktailInfo {...cocktailInfo} />}
    </>
  );
};
