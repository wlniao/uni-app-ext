<template>
  <div>
		<div class="content red">ucenter</div>
		<div class="content" @click="navigateTo('../home')">navigateTo:/app/home</div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
	import wln from '../../wlnapp'
	export default {
		data: {
			title: 'Hello'
		},
		methods: {
			navigateTo: function(url) {
				wln.navigateTo(url)
			},
			alert: function() {
				//console.log(this.$store.state.sessionkey)
			}
		}
	}
</script>

<style>
	
</style>
