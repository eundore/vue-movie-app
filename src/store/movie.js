import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultMessage = 'Search for the movie title!'

export default {
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: [],
    message: _defaultMessage,
    loading: false,
    theMovie: {}
  }),
  // computed
  getters: {},
  // methods
  //변이
  mutations: { //데이터 수정
    updateState(state, payload) {
      //['movies',' message', 'loaging']
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
      state.message = _defaultMessage,
      state.loading = false
    }
  },
  actions: { //비동기 처리
    async searchMovies({ state, commit }, payload) { //{ state, commit } = context

      if(state.loading) return //동시에 여러번 실행 방지

      commit('updateState',{ //메세지 초기화
        message: '',
        loading: true
      })
     try{
      const res = await _fetchMovie({
        ...payload,
        page:1
      })
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy( Search, 'imdbID')
        //message: 'Hello world!',
        //loading: true
      })
      //console.log(totalResults)
      //console.log(typeof totalResults)

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)

      //추가 요청!
      if(pageLength > 1) {
        for(let page = 2; page <= pageLength; page++){
          if(page > payload.number / 10){
            break
          }
          const res = await _fetchMovie({
            ...payload,
            page
          })
          const { Search } = res.data
          commit('updateState',{
            movies: [
              ...state.movies, 
              ..._uniqBy( Search, 'imdbID')] //기존 내용에서 추가
          })
        }
      }

     }catch ({ message }) {
       commit('updateState',{
         movies: [],
         message
       })
     } finally { //성공이든 실패든 무조건 실행되어 로딩 false 됨.
       commit('updateState',{
         loading: false
       })
     }
    },
    async searchMovieWithId({ state, commit }, payload) {
      if(state.loading) return

      commit('updateState',{
        theMovie: {},
        loading: true
      })
      
      try{
        const res = await _fetchMovie(payload)
        commit('updateState',{
          theMovie: res.data
        })
        
      }catch(error){
        commit('updateState',{
          theMovie: {}
        })
      }finally {
        commit('updateState',{
          loading:false
        })
      }
    }
  }
}

async function _fetchMovie (payload) {
  return await axios.post('/.netlify/functions/movie', payload)
}