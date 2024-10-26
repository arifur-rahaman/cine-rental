function getImgUrl(name) {
  // this is utils function will create dynamic image path or url even if the data comes from database;
  // first we have to create URL object
  // it takes 2 parameter: pathname and import.meta.url from vite
  // finally we have to return its .href value
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
}
export { getImgUrl };
