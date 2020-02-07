<template>
	<div id="app">
		<div class="examples">
			<!-- Simple -->
			<p>The Simple Modal opens a single component with a predefined name and pre-defined content.</p>
			<button @click="open('simple')">Open Simple Modal</button>
			<!-- Named -->
			<p>The Named Modal opens a recursive component (it calls itself) with a dynamic name and dynamic content (through some random number generation).</p>
			<button @click="open('named-10000')">Open Named Modal</button>
		</div>
		<simple-modal></simple-modal>
		<named-modal :id="10000"></named-modal>
	</div>
</template>

<script>
	import SimpleModal from "./components/SimpleModal.vue"
	import NamedModal from "./components/NamedModal.vue"

	export default {
		name: "app",
		components: { SimpleModal, NamedModal },
		methods: {
			open(name) {
				this.$store.dispatch("modals/open", name)
			}
		}
	}
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.examples {
		max-width: 1000px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.examples button {
		padding: 20px;
		font-size: 20px;
		margin-bottom: 50px;
	}
</style>
