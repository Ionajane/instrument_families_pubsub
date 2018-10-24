const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');
  const selectElement = document.querySelector('select#instrument-families');
  const instrumentFamilies = new SelectView(selectElement);
  instrumentFamilies.bindEvents();
  console.dir(instrumentFamilies)

});
