import Select from 'react-select';
import { fetchBreeds } from "./api";
import Error from './Error';
import { ErrorMessage } from './constans';
import { useState } from 'react';
import { useEffect } from 'react';

const BreedSelect = ({ onSelect }) => {

    const [breeds, setBreeds] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => async () => {
        try {
            setIsLoading(true);
            const breedsResponse = await fetchBreeds();
            setBreeds(breedsResponse);
          } catch {
            setError(ErrorMessage.fetchBreeds);
          } finally {
            setIsLoading(false);
          };
    }, []);


    const buildOptions = () => {
      return breeds.map(breed => ({
        value: breed.id,
        label: breed.name
      }))
    };

    const options = buildOptions();

    return (
    <>
    <Select 
      options={options} 
      isLoading={isLoading}
      onChange={option => onSelect(option.value)} 
    />
    {error && <Error>{error}</Error>}
    </>
    );

};

export default BreedSelect;