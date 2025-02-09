import {data} from './mapList';


export function getMapById() {
  const min = 1;
  const max = 7;
  const num = Math.floor(Math.random() * (max-min +1)) + min;
  return data.find((map) => Number (map.id) === num);
}

export function getAllMaps() {
  // const icons = []
  // data.forEach(element => {
  // });
  // for(i = 1; i <= 7; i++) {
  //   icons.push(data[i].boardIcon);
  // }
  return data.map(map => map.boardIcon);
  // return icons;
}
