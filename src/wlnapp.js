const wln = {}
const browser = window && window.navigator && window.navigator.userAgent
wln.InBrowser = browser
wln.cfg = {
	host: '',
	timeout: 15000,
	headers: {'x-wlnapp' : 'true'},
	requestError: function() { console.log('wln.request error') }
}
wln.set = function (cfg) {
  for (var i in cfg) {
    wln.cfg[i] = cfg[i]
  }
}
wln.test = function () {
  if (browser) {
	console.log("is browser")
  } else {
	console.log("not browser")
  }
}
wln.get = function (path, data, success, error) {
  let url = path.indexOf('://') > 0 ? path: (wln.cfg.host || '') + path
  let headers = wln.cfg.headers
  let successFn = success || function () { }
  let errorFn = error || wln.cfg.requestError
	if (data) {		
		url = url + (url.indexOf('?') > 0 ? '&' : '?') + urlEncode(data).slice(1)
	}
  if (browser) {
    fetch(url, {headers: headers}).then(res => res.json()).then(successFn).catch(errorFn)
  } else {
	  uni.request({url: url, header: headers, success: successFn, fail: errorFn})
  }
}
wln.post = function (path, data, success, error) {
  let url = path.indexOf('://') > 0 ? path: (wln.cfg.host || '') + path
  let headers = wln.cfg.headers
  let successFn = success || function () { }
  let errorFn = error || wln.cfg.requestError
  if (browser) {
    fetch(url, {headers: headers, method: 'POST', body: JSON.stringify(data)}).then(res => res.json()).then(successFn).catch(errorFn)
  } else {
	  uni.request({url: url, header: headers, method: 'POST', data: data, success: successFn, fail: errorFn})
  }
}

var urlEncode = function(param, key, encode) {
  var t = typeof (param)
  if (param==null || t == 'undefined' || t == 'string') {
    return '&'
  }
  var s = '';
  if (t == 'string' || t == 'number' || t == 'boolean') {
    s += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param); 
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      s += urlEncode(param[i], k, encode)
    }
  }
  return s
}
export default wln
