import util from './util.js'
import Router from 'vue-router'
import './extend.js'
const wln = { version: '2.4.6', InBrowser: window && window.navigator && window.navigator.userAgent }
wln.router = new Router({mode: 'history'})
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
wln.get = function (path, data, success, error) {
  let url = path.indexOf('://') > 0 ? path: (wln.cfg.host || '') + path
  let headers = wln.cfg.headers
  let successFn = success || function () { }
  let errorFn = error || wln.cfg.requestError
  if (data) {
    url = url + (url.indexOf('?') > 0 ? '&' : '?') + util.urlEncode(data).slice(1)
  }
  if (this.InBrowser) {
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
  if (this.InBrowser) {
    fetch(url, {headers: headers, method: 'POST', body: JSON.stringify(data)}).then(res => res.json()).then(successFn).catch(errorFn)
  } else {
    uni.request({url: url, header: headers, method: 'POST', data: data, success: successFn, fail: errorFn})
  }
}
wln.navigateTo = function (obj) {
  let url = typeof (obj) == 'string' ? obj : obj.url
  if (this.InBrowser) {
    wln.router.push(url)
  } else {
    uni.navigateTo({url: url})
  }
}
wln.redirectTo = function (obj) {
  let url = typeof (obj) == 'string' ? obj : obj.url
  if (this.InBrowser) {
    wln.router.push(url)
  } else {
    uni.redirectTo({url: url})
  }
}
export default wln