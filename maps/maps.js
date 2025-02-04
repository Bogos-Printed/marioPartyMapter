import {data} from './mapList';

getMapById = () => {
  const min = 1;
  const max = 7;
  const num = Math.floor(Math.random() * (max-min +1)) + min;
  return data.find((map) => Number (map.id) === num);
}

export default getMapById;