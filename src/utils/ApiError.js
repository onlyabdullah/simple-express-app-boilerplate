/**
 *
 * @param {int} status
 * @param {Array} errors
 */
function ApiError(status, errors) {
  this.status = status;
  this.errors = errors;
}

module.exports = ApiError;
