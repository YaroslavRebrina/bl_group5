import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { CocktailsList } from "../components/CocktailsList";
import { Loader } from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchByName } from "../api/cocktail-service";

export const Cocktails = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cocktails, setCocktails] = useState(null);
  const queryParam = searchParams.get("query");
  console.log(queryParam);
  const onFormSubmit = (query) => {
    setSearchParams({ query: query.trim() });
  };
  useEffect(() => {
    if (queryParam) {
      searchByName(queryParam)
        .then((response) => {
          //console.log(response);
          setCocktails(response.drinks);
        })
        .catch((error) => console.log(error.message));
    }
  }, [queryParam]);

  return (
    <>
      <Section>
        <h1 className="uppercase text-4xl text-gray-600 text-center">
          Search Cocktails
        </h1>

        <SearchForm onFormSubmit={onFormSubmit} />
        <CocktailsList cocktails={cocktails} />
      </Section>
    </>
  );
};
