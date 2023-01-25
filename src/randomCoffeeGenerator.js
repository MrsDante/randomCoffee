const drinksWithSyrps = ['Капучино', 'Раф', 'Латте', 'Какао', 'Горячий шоколад', 'Матча латте'];
const drinksWithoutSyrps = ['Облепиховый чай', 'Фильтр кофе', 'Аэропресc', 'Ромовая баба', 'Глинтвейн', 'Гранатовый бамбл'];
const syrops = ['Пряная груша', 'Сгущенка', 'Малина', 'Черная смородина', 'Шоколад', 'Ваниль', 'Кокос', 'Клен-каштан', 'Эвкалипт', 'Соленая карамель', 'Банан'];



function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  const giveMeSomeCoffee = () => {
      const randomNum = randomInteger(1, 2);
      let drinks;

      if (randomNum === 1) {
        drinks = drinksWithSyrps;
        let syropIndex = randomInteger(0, syrops.length - 1);
        let drinkIndex = randomInteger(0, drinks.length - 1);

        return `${drinks[drinkIndex]} с сиропом ${syrops[syropIndex]}`;
      }
      else {
        drinks = drinksWithoutSyrps;
        let drinkIndex = randomInteger(0, drinks.length - 1);
        return drinks[drinkIndex];
      }
  };

  export default giveMeSomeCoffee;