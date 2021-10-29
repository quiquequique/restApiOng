

const errors = {

  _404: { meta: { msg: 'not found' } },
  _500: { meta: { msg: 'server error' } },
  _400: { meta: { msg: 'bad request' } },
  _416: { meta: { msg: 'request out of range' } }
};

module.exports = errors;