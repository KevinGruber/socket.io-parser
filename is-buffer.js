
module.exports = isBuf;

var isView = (function () {
    return function (obj) { return obj.buffer instanceof ArrayBuffer; };
})();

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return obj instanceof ArrayBuffer || isView(obj);
}
