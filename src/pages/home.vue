<template>
  <div>
		<div class="content red" @click="get()">get</div><br/>
		<div class="content" @click="post()">post</div><br/>
		<div class="content" @click="navigateTo('user/ucenter')">/user/ucenter</div><br/>
		<div class="content" @click="redirectTo('home')">/home</div><br/>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import wln from '../wlnapp'
  wln.set({host:'http://127.0.0.1:8001'})
	export default {
		data: {
			title: 'Hello'
		},
		methods: {
			navigateTo: function(url) {
				wln.navigateTo(url)
			},
			redirectTo: function(url) {
				wln.redirectTo(url)
			},
			get: function() {
				console.log(this.$store.state.sessionkey)
				wln.get('/api/online', {test: 1,obj:{a1:1,a2:2}},function(res) {
					console.log(res)
				})
			},
			post: function() {
        this.$store.commit('session', {sessionkey:'123'})
				wln.post('/api/online?computer=1', {test: 1},function(res) {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	
</style>
