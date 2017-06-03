telGenerator = function(areacode) {
  if (areacode) return `Area codes aren't supported yet.`;

  const range = 999;
  const telNumber = ('000' + Math.round(Math.random() * 999)).slice(-3);
  return `01632960${telNumber}`;
};

module.exports = {
  telGenerator,
};
