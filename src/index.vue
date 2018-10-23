<template>
  <div>
		<div class="content red" @click="get()">get</div>
		<div class="content" @click="post()">post</div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
	import wln from './wlnapp.js'
	wln.set({host:'http://127.0.0.1:8001'})
	export default {
		data: {
			title: 'Hello'
		},
		methods: {
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
