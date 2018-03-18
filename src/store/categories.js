const state = {
  all: []
};

const actions = {
  getAllKats ({commit}) {
    let lang = window.localStorage.getItem('vue-lang');

    fetch('static/api/'+lang+'/categories.json')
      .then(function(response) {
        response.json().then(function(data) {
          commit('recieve_categories', data.items)
        });
      })
      .catch( console.log );
  }
};

const mutations = {
  recieve_categories (state, categories) {
    state.all = categories
  }
};

const getters = {
  allKats (state) {
    return state.all
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};