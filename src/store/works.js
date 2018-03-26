const state = {
  all: []
};

const actions = {
  getAllWorks ({commit}) {
    let lang = window.localStorage.getItem('vue-lang');

    fetch('static/api/'+lang+'/works.json')
      .then(function(response) {
        response.json().then(function(data) {
          commit('recieve_works', data.items)
        });
      })
      .catch( console.log );
  }
};

const mutations = {
  recieve_works (state, works) {
    state.all = works
  }
};

const getters = {
  allWorks (state) {
    return state.all
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};