import { URL } from '../constants/constants';

const getPlanets = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default getPlanets;
