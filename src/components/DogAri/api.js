import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_HNEZNLoPiy5INBu0irJOKBA2GfKoC9ZWKq6bQcnn3TC9dR0LqJdEUrpzMC7erde5';

export const fetchBreeds = async () => {
    const response = await axios.get('/breeds');
    return response.data;
};

export const fetchDog = async breedId => {
    const response = await axios.get('/images/search', {
        params: {
          breed_id: breedId,
        },
      });
      return response.data[0];
};