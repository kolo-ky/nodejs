module.exports = function extractANumber(symbol, text) {
	return Number(text.split(symbol)[0]);
};
