const ContentBasedRecommender = require('content-based-recommender')
const recommender = new ContentBasedRecommender({
  minScore: 0.1,
  maxSimilarDocuments: 100
});

module.exports = {
  recommondsimiler
};
// prepare documents data
const documents = [
  { id: 'Dal fry', content: 'Toor dal, Salt, Turmeric, Ghee, Chopped tomatoes, Cumin seeds, Mustard Seeds, Bay Leaf, Green Chili' },
  { id: 'Chicken Basquaise', content: 'Chicken Butter, Olive Oil, Red Onions, Red Pepper, Chorizo, Sun-Dried Tomatoes, Garlic, Basmati Rice, Tomato Puree, Paprika, Bay Leaves, Thyme, Chicken Stock, Dry White WinePepper' },
  { id: 'Lasagne', content: 'Olive Oil, Bacon, Onion, Celery, Carrots, Garlic, Minced Beef, Tomato Puree Chopped Tomatoes' },
  { id: 'Kapsalon', content: 'Fries, Doner, Meat, Garlic, sauce, Hotsauce, Lettuce, Tomato, Cucumber' },
  { id: 'Pancakes', content: 'Flour, Eggs, Milk, Sunflower Oil, Sugar, Raspberrie, Blueberries' },
  { id: 'Carrot Cake', content: 'Vegetable Oil Plain Flour, Bicarbonate Of Sod Sugar' },
  { id: 'Dundee cake', content: 'Almonds, Butter, Muscovado, Sugar, Orange, Apricot Jam, Plain Flour, Baking Powder Eggs' },
  { id: 'Parkin Cake', content: 'Butter, Egg, Milk, Golden Syrup, Black Treacle' },
  { id: 'Ratatouille', content: 'Aubergine, Courgettes, Yellow, Pepper, Tomato, Olive Oil, Basil, Onion, Garlic, Clove, Red Wine, Vinegar, Sugar' },

  { id: 'Chicken Handi', content: 'Chicken, Onion, Tomatoes, Garlic, Ginger paste, Vegetable oil, Cumin seeds, Coriander seeds, Turmeric powder, Chilli powder, Green chilli, Yogurt, Cream, fenugreek, Garam masala' },
  { id: 'Chicken Congee', content: 'Chicken, Salt, Pepper, Ginger Cordial, Ginger, Spring Onions, Rice, Water, Coriander' },
  { id: 'Chicken Karaage', content: 'Chicken thigh, Ginger, Garlic, Soy sauce, Sake, Granulated sugar, Potato starch, Vegetable oil, Lemon' },
  { id: 'Tandoori chicken', content: 'lemons, paprika, red onions, chicken thighs, vegetable oil, Greek yogurt, ginger, garlic clove, garam masala, ground cumin, chilli powder, turmeric' },
  { id: 'Chicken Marengo', content: 'Chicken thigh, Ginger, Garlic, Soy sauce, Sake, Granulated sugar, Potato starch, Vegetable oil, Lemon' },
  { id: 'Chicken Couscous', content: 'Olive Oil, Onion, Chicken Breast, Ginger, Harissa Spice, Dried Apricots, Chickpeas, Couscous, Chicken Stock, Coriander' },
  { id: 'Kung Pao Chicken', content: 'Sake, Soy Sauce, Sesame Seed Oil, Corn Flour, Water, Chicken, Chilli Powder, Rice Vinegar, Brown Sugar, Spring Onions, Garlic Clove, Water Chestnut,Peanuts' },
  { id: 'Jerk chicken with rice & peas', content: 'Chicken Thighs, Lime, Spring Onions, Ginger, Garlic, Onion, Red Chilli, Thyme, Lime, Soy Sauce, Vegetable Oil, Brown Sugar, Allspice, Basmati Rice,, Coconut Milk, Spring Onions, Thyme, Garlic, Allspice, Kidney Beans' },
];



async function recommondsimiler(param) {
  // start training
  recommender.train(documents);

  //get top 10 similar items to document 1000002
  console.log(param);
  const similarDocuments = recommender.getSimilarDocuments(param, 0, 10);

  // console.log(similarDocuments);
  return similarDocuments;
}