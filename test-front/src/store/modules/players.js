import Vue from 'vue';

export default {
    namespaced: true,

    state: {
        player: {
            first_name: '',
            last_name: '',
        },
        items: { },
    },

    getters: {
        get: (state) => state.player,
        getProperty: (state) => (property) => state.player[property],
        getItems: (state) => (state.items ? state.items : []),
    },

    mutations: {
        setItems(state, payload) {
            state.items = payload;
        },
        setProperty(state, payload) {
            Object.keys(payload).forEach(
                (property) => Vue.set(state.player, property, payload[property]),
            );
        },
        clear(state) {
            state.player = {
                first_name: '',
                last_name: '',
            };
        },
        clearItems(state) {
            state.items = {};
        },
    },

    actions: {
        async list({ commit }) {
            const { data } = await this.$http.get('/api/players');
            commit('setItems', data);
        },

        async save({ state }, id) {
            try {
                const { data } =  await this.$http.put(`/api/players/${id}`, state.player);
                return data;
            } catch (error) {
                console.log(error);
            }
            return null;
        },

        async get({ commit }, id) {
            try {

                const { data } = await this.$http.get(`/api/players/${id}`);

                commit('setProperty', data);
            } catch (error) {
              console.log(error)
            }
        },

        async create({ state }) {
            try {

                const { data } = await this.$http.post('/api/players', state.player);

                return data;
            } catch (error) {
                console.log(error);
            }
            return null;
        },
    },
};
