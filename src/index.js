import Search from './models/search';
import Future from './models/fiveDays';
import * as searchView from './views/searchView';
//import * as fiveDaysView from './views/fiveDaysView';
import { dom } from './views/base';

const state = {};

const mainController = async (query) => {
  state.search = new Search(query.city, query.country);
  try {
    //4. Search for recipes
    await state.search.getCurrentData();

    console.log(state.search);
    //5. render result on UI
    searchView.renderCurrentData(state.search);
    // clearLoader();
  } catch (error) {
    alert('City not found');
    // clearLoader();
  }
}

const forecastController = async (query) => {
  state.future = new Future(query.city, query.country);
  try {
    await state.future.getFutureData();
    console.log(state.future.result);
  } catch (error) {
    alert('Unable to get 5 days data');
  }
}

dom.searchBtn.addEventListener('click', () => {
  const query = searchView.getInput();
  searchView.clearForm();
  if (query) {
    mainController(query);
    forecastController(query);
  }
});