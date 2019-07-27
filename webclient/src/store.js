import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sections: [],
  },
  getters: {
    getSections(state) {
      return state.sections;
    },
  },
  mutations: {
    SECTIONS_FETCHED(state, sections) {
      state.sections = sections;
    },
  },
  actions: {
    async initialLoad(ctx) {
      const res = await Vue.axios.get('/api/section/all');
      ctx.commit('SECTIONS_FETCHED', res.data.sections);
    },
    async moveCard(ctx, e) {
      const res = await Vue.axios.post('/api/card/move', e);
      ctx.commit('SECTIONS_FETCHED', res.data.sections);
    },
    async deleteCard(ctx, e) {
      const res = await Vue.axios.delete(`/api/card/${e}`);
      ctx.commit('SECTIONS_FETCHED', res.data.sections);
    },
  },
});
