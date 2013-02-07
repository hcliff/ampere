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