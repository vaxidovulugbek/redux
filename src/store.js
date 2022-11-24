import { createStore } from "redux"

let initialState = {
  title:"say Hello",
  count:1
}
// ESLATMA: let title deb faqat initialState ichidagi elementlarni nome bilan ozgartira olamiz yani initilState ichida title bor let titles deb nom berib ozgartira olmaymiz. npm redux. npm react-redux. index.js papka ichida App ni providerga o'ragin.
const store = createStore((state = initialState, action) => {
  switch(action.type) {
    case 'SET_TITLE' : {
      let title = "titlessss"
      console.log("ok store");
      return {...state, title} 
    }
    case 'SET_COUNT' : {
      console.log("countsss");
      let title = "countsss"
      return {...state, title}
    }
    default: return state
  }
})

export const setTitle = (types) => ({type: types})

window.store = store
export default store