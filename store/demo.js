import axios from 'axios'

export const state = () => ({
  cat: null
})

export const actions = {
  async fetchCat({ commit }) {
    const cat = await axios
      .get('https://llnlearn.herokuapp.com/')
      .then((res) => {
        return res.data.file
      })

    commit('SAVE_CAT', cat)
  }
}

export const mutations = {
  SAVE_CAT(state, cat) {
    state.cat = cat
  }
}
