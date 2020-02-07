const store = {
	namespaced: true,
	state: {
		active: null,
		open: [],
	},
	getters: {
		active: (state) => (state.open.length > 0 ? state.open[0] : null),
		allOpen: (state) => state.open,
	},
	mutations: {
		OPEN: (state, payload) => state.open.unshift(payload),
		CLOSE: (state, payload) => (state.open = state.open.filter((e) => e !== payload)),
	},
	actions: {
		open: ({ commit }, payload) => commit('OPEN', payload),
		close: ({ commit }, payload) => commit('CLOSE', payload),
	},
}

export default store
