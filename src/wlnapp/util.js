const util = { }
util.urlEncode = function(param, key, encode) {
  var t = typeof (param)
  if (param == null || t == 'undefined') {
    return '&'
  }
  var s = ''
  if (t == 'string' || t == 'number' || t == 'boolean') {
    s += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      s += this.urlEncode(param[i], k, encode)
    }
  }
  return s
}

export default util