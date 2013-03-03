// http://code.google.com/p/closure-library/source/detail?r=2045
goog.db.ObjectStore.prototype.openCursor = function(opt_range, opt_direction) {
  var msg = 'opening cursor ' + this.getName();
  var cursor = new goog.db.Cursor();
  var request;

  try {
    var range = opt_range ? opt_range.range_ : null;
    if (opt_direction) {
      request = this.store_.openCursor(range, opt_direction);
    } else {
      request = this.store_.openCursor(range);
    }
  } catch (err) {
    throw new goog.db.Error(err.code, msg);
  }
  request.onsuccess = function(ev) {
    cursor.cursor_ = ev.target.result || null;
    if (cursor.cursor_) {
      cursor.dispatchEvent(goog.db.Cursor.EventType.NEW_DATA);
    } else {
      cursor.dispatchEvent(goog.db.Cursor.EventType.COMPLETE);
    }
  };
  request.onerror = function(ev) {
    cursor.dispatchEvent(goog.db.Cursor.EventType.ERROR);
  };
  return cursor;
};

/**
 * Converts a hex string into an integer array.
 * @param {string} hexString Hex string of 16-bit integers (two characters
 *     per integer).
 * @return {!Array.<number>} Array of {0,255} integers for the given string.
 */
goog.crypt.hexToByteArray = function(hexString) {
  goog.asserts.assert(hexString.length % 2 == 0,
                      'Key string length must be multiple of 2');
  var arr = [];
  for (var i = 0; i < hexString.length; i += 2) {
    arr.push(parseInt(hexString.substring(i, i + 2), 16));
  }
  return arr;
};
