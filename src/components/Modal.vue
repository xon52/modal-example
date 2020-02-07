<template>
	<div
		v-if="isOpen"
		:class="`modal-overlay ${isActive?'modal-overlay--active':''}`"
		@click.self="close()"
	>
		<!-- Content Wrapper -->
		<div class="modal-wrapper">
			<!-- Content -->
			<slot :close="close"></slot>
			<!-- Close Button (only if this modal is active) -->
			<button
				v-if="isActive"
				:class="`close-button ${$root.mobile?'close-button--mobile':''}`"
				@click.self="close"
			>❌</button>
		</div>
		<!-- Child Modal Slot (will be able to take full screen size) -->
		<slot name="child"></slot>
	</div>
</template>

<script>
	export default {
		name: "x5Modal",
		props: {
			name: { type: String, required: true },
			padding: { type: Number, default: 20 }
		},
		computed: {
			isActive() {
				return this.$store.getters["modals/active"] === this.name
			},
			isOpen() {
				return this.$store.getters["modals/allOpen"].includes(this.name)
			}
		},
		methods: {
			close() {
				this.$emit("close")
				this.$store.dispatch("modals/close", this.name)
			}
		},
		beforeDestroy() {
			if (this.isOpen) this.close()
		}
	}
</script>

<style scoped>
	*:focus {
		outline: none;
	}
	.modal-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: opacity 0.3s ease-in-out;
		width: 100%;
	}
	.modal-overlay--active {
		background-color: rgba(0, 0, 0, 0.4);
	}
	.modal-wrapper {
		background-color: #fff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
		padding: 20px;
		transition: all 0.3s ease;
		/* Always leave a little space above */
		max-height: 80%;
		/* Size up to max width */
		max-width: 300px;
		width: 100%;
		/* Center */
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.close-button {
		position: absolute;
		background: black;
		border-radius: 50%;
		border: 3px white solid;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
		cursor: pointer;
		/* Sizing and offset to top right corner */
		height: 40px;
		width: 40px;
		right: -20px;
		top: -20px;
		/* Content (close icon) size and centering */
		font-size: 20px;
		padding-bottom: 5px;
		padding-left: 3px;
		/* Remove color from emoji */
		color: transparent;
		text-shadow: 0 0 0 white;
	}
	.close-button--mobile {
		right: 0px;
		top: 0px;
	}
</style>