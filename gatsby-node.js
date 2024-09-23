const path = require('path');
const forexData = require('./src/data/forex_data.json');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const forexTemplate = path.resolve('src/templates/forex-page.js');

  forexData.forEach((data, index) => {
    const prevDate = index > 0 ? forexData[index - 1].date : null;
    const nextDate = index < forexData.length - 1 ? forexData[index + 1].date : null;

    createPage({
      path: `/forex/${data.date}`,
      component: forexTemplate,
      context: {
        date: data.date,
        rates: data.rates,
        prevDate,
        nextDate,
      },
    });
  });
};
