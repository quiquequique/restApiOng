const paginado = (page, data) => {
	const pageCount = Math.ceil(data.length / 10);
	if (!page) {
		page = 1;
	}
	if (page > pageCount) {
		page = pageCount;
	}
	const obj = {
		page: page,
		pageCount: pageCount,
		data: data.slice(page * 10 - 10, page * 10),
	};
	return obj;
};
module.exports = { paginado };
