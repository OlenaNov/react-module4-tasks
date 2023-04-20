import { useState } from "react";
import { fetchDog } from "./api";
import DogCard from "./DogCard";
import BreedSelect from "./BreedSelect";
import DogSkelet from "./DogSkelet";
import Error from "./Error";
import { ErrorMessage } from "./constans";

export function DogView() {

  const [dog, setDog] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const selectBreed = async breedId => {
    try {
      setIsLoading(true);
      const dog = await fetchDog(breedId);
      setDog(dog);

    } catch {

      setError(ErrorMessage.fetchDog);
    } finally {
      setIsLoading(false);
    }
  };

    return (
      <>
      <BreedSelect onSelect={selectBreed} />
      {isLoading && <DogSkelet />}
      {error && <Error>{error}</Error> }
      {dog && !isLoading && <DogCard dog={dog}/> }
      </>
    );

};