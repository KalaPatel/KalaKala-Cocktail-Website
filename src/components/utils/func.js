export const filteredByCategory = (list, key, value) =>
  list.filter((item) => item[key] === value);

export const ingredientsArray = (x) => {
  const ingredients = [
    x.strIngredient1,
    x.strIngredient2,
    x.strIngredient3,
    x.strIngredient4,
    x.strIngredient5,
    x.strIngredient6,
    x.strIngredient7,
    x.strIngredient8,
    x.strIngredient9,
    x.strIngredient10,
    x.strIngredient11,
    x.strIngredient12,
    x.strIngredient13,
    x.strIngredient14,
    x.strIngredient15,
  ].filter((ingredient) => ingredient !== null);
  return ingredients;
};

export const heroDataArr = {
  ordinary: "Don't escape the ordinary, drink it!",
  cocktail: "Save water, drink to KALAKALA instead!",
  shake: "When life get though, SHAKE IT!",
  cocoa: "Life happens, Chocolate helps!",
  shot: "Alcohol may not be the answer, but it's worth a SHOT",
  liqueur: "Candy is dandy but liqueur is quicker",
  beer: "Beer is good, but BEERS are better",
  softDrink: "A soft drink, on a hot day, is a miracle",
  punch: "Time flies when you are having a PUNCH!",
  coffeeTea: "Life begins after COFFE! Be positiviTEA!",
};
