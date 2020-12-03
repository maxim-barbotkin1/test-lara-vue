import Vue from 'vue';

export default {
    namespaced: true,

    state: {
        team: {
            name: '',
            players: [],
        },
        items: { },
    },

    getters: {
        get: (state) => state.team,
        getProperty: (state) => (property) => state.team[property],
        getItems: (state) => (state.items ? state.items : []),
    },

    mutations: {
        setItems(state, payload) {
            state.items = payload;
        },
        setProperty(state, payload) {
            Object.keys(payload).forEach(
                (property) => Vue.set(state.team, property, payload[property]),
            );
        },
        clear(state) {
            state.team = {
                name: '',
                players: [],
            };
        },
        clearItems(state) {
            state.items = {};
        },
        formatPlayers(state, payload) {
            state.team.players = payload ? payload.map((player) => (player.id)) : [];
        },
    },

    actions: {
        async list({ commit }) {
            const { data } = await this.$http.get('/api/teams');
            commit('setItems', data);
        },

        async save({ state }, id) {
            try {
                const { data } = await this.$http.put(`/api/teams/${id}`, state.team);

                return data;
            } catch (error) {
                console.log(error);
            }
            return null;
        },

        async get({ commit }, id) {
            try {

                const { data } = await this.$http.get(`/api/teams/${id}`);

                commit('setProperty', data);

                commit('formatPlayers', data.players);
            } catch (error) {
              console.log(error)
            }
        },

        async create({ state }) {
            try {

                const { data } = await this.$http.post('/api/teams', state.team);

                return data;
            } catch (error) {
                console.log(error);
            }
            return null;
        },
    },
};
