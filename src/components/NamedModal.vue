<template>
	<modal :name="myName">
		<!-- Content -->
		<div>
			<p>Name: {{myName}}</p>
			<p>ID: {{id}}</p>
			<p>Child Name: {{childName}}</p>
			<p>Child ID: {{childID}}</p>
			<button @click="open(childName)">Open Child Modal</button>
		</div>
		<!-- Child Modal (recursive) -->
		<template v-slot:child>
			<named-modal :id="childID"></named-modal>
		</template>
	</modal>
</template>

<script>
	import Modal from "./Modal"

	export default {
		name: "NamedModal",
		components: { Modal, NamedModal: () => import("./NamedModal") },
		props: { id: { type: Number, required: true } },
		data: () => ({
			// Randomly generated child ID
			childID: Math.floor(Math.random() * 10000)
		}),
		computed: {
			myName() {
				return `named-${this.id}`
			},
			childName() {
				return `named-${this.childID}`
			}
		},
		methods: {
			open(name) {
				this.$store.dispatch("modals/open", name)
			}
		}
	}
</script>