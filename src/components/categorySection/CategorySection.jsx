import style from "./index.module.scss";
import { heroDataArr } from "./../../components/utils/func";
import ordinaryImg from "../../img/ordinary.png";
import mojitoImg from "../../img/mojito.png";
import shakeImg from "../../img/shake.png";
import cocoaImg from "../../img/cocoa.png";
import shotImg from "../../img/shots.png";
import liqueurImg from "../../img/liqueur.png";
import beerImg from "../../img/beer.png";
import softDrinkImg from "../../img/softdrink.png";
import punchImg from "../../img/punch.png";
import coffeeTeaImg from "../../img/coffee.png";

const CategorySection = ({ setCategory, setHeroStyle }) => {
  const onClickCategorySet = (category, text, img) => {
    setCategory(category);
    setHeroStyle(() => ({
      text: text,
      img: img,
    }));
  };

  return (
    <div className={style.CategorySection}>
      <ul className={style.categoryList}>
        <li
          onClick={() =>
            onClickCategorySet(
              "Ordinary Drink",
              heroDataArr.ordinary,
              ordinaryImg
            )
          }
        >
          Ordinary Drink
        </li>
        <li
          onClick={() =>
            onClickCategorySet("Cocktail", heroDataArr.cocktail, mojitoImg)
          }
        >
          Cocktail
        </li>
        <li
          onClick={() =>
            onClickCategorySet("Shake", heroDataArr.shake, shakeImg)
          }
        >
          Shake
        </li>
        <li
          onClick={() =>
            onClickCategorySet("Cocoa", heroDataArr.cocoa, cocoaImg)
          }
        >
          Cocoa
        </li>
        <li
          onClick={() => onClickCategorySet("Shot", heroDataArr.shot, shotImg)}
        >
          Shot
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Homemade Liqueur",
              heroDataArr.liqueur,
              liqueurImg
            )
          }
        >
          Homemade Liqueur
        </li>
        <li
          onClick={() => onClickCategorySet("Beer", heroDataArr.beer, beerImg)}
        >
          Beer
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Soft Drink",
              heroDataArr.softDrink,
              softDrinkImg
            )
          }
        >
          Soft Drink
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Punch / Party Drink",
              heroDataArr.punch,
              punchImg
            )
          }
        >
          Punch / Party Drink
        </li>
        <li
          onClick={() =>
            onClickCategorySet(
              "Coffee / Tea",
              heroDataArr.coffeeTea,
              coffeeTeaImg
            )
          }
        >
          Coffee / Tea
        </li>
      </ul>
    </div>
  );
};

export default CategorySection;
