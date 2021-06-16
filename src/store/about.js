export default {
  namespaced: true, //store 에 하나의 모듈이 되기 위해서 정의
  state: () => ({//데이터의 불변성을 위해 함수로 정의
    name: 'HEROPY',
    email: 'thesecon@gmail.com',
    blog: 'https://heropy.blog',
    phone: '+82-10-1234-5678',
    image: 'http://heropy.blog/css/images/logo.png'
  })
}