import Search from './models/search';
import Future from './models/fiveDays';
import * as searchView from './views/searchView';
import * as fiveDaysView from './views/fiveDaysViews';
import dom from './views/base';

const state = {
  type: '℃',
};

const mainController = async (query) => {
  state.search = new Search(query.city, query.country);
  searchView.renderLoader();
  try {
    await state.search.getCurrentData();
    searchView.clearLoader();
    searchView.renderCurrentData(state.search, state.type);
  } catch (error) {
    searchView.clearLoader();
    alert('City not found');
  }
};

const forecastController = async (query) => {
  state.future = new Future(query.city, query.country);
  try {
    await state.future.getFutureData();
    fiveDaysView.renderDays(state.future.result, state.type);
    fiveDaysView.hourItem(state.future.result, 0, state.type);
  } catch (error) {
    alert('Unable to get 5 days data');
  }
};

dom.searchBtn.addEventListener('click', () => {
  const query = searchView.getInput();
  searchView.clearForm();
  if (query) {
    mainController(query);
    forecastController(query);
  }
});

dom.unitbtn.addEventListener('click', (e) => {
  if (e.target.id === '℉') {
    state.type = '℉';
  } else if (e.target.id === '℃') {
    state.type = '℃';
  }
  searchView.renderCurrentData(state.search, state.type);
  fiveDaysView.renderDays(state.future.result, state.type);
  fiveDaysView.hourItem(state.future.result, 0, state.type);
});

dom.daySection.addEventListener('click', (e) => {
  const targetedTag = e.target.closest('.day-section__item');
  const element = targetedTag.id;
  const info = element.split('-');
  if (info[0] === 'day') {
    const dayNumber = parseInt(info[1], 10);

    fiveDaysView.hourItem(state.future.result, dayNumber, state.type);
  }
});
