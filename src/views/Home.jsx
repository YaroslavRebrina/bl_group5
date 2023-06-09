import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { getTrendingCocktails } from "../api/cocktail-service";
import { useEffect, useState } from "react";

export const Home = () => {
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    getTrendingCocktails().then((response) =>
      setDrinks(response.map((item) => item.drinks[0]))
    );
  }, []);

  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        <CocktailsList cocktails={drinks} />
      </Section>
    </>
  );
};
