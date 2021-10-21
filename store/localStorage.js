export const state = () => ({
  questionId: 0,
  user:{}
})

export const mutations = {
  setQuestionId(state, value) {
    state.questionId = value;
  },
  setUser(state, user) {
    console.log(user);
    state.user = user;
  }
}
