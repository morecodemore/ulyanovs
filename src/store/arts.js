const state = {
  all: []
};

const actions = {
  getAllArts ({commit}) {
    let lang = window.localStorage.getItem('vue-lang');

    fetch('static/api/'+lang+'/works.json')
      .then(function(response) {
        response.json().then(function(data) {
          commit('recieve_arts', data.items)
        });
      })
      .catch( console.log );
  }
};

const mutations = {
  recieve_arts (state, arts) {
    state.all = arts
  }
};

const getters = {
  allArts (state) {
    return state.all
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};