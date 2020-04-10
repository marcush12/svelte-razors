import {writable} from 'svelte/store'

const globalStore = writable({
 sidebar: false, // hidden all 3
 cart: false,
 alert: false
})

const store = {
 subscribe: globalStore.subscribe,
 toggleItem: (item, value) => {
  globalStore.update(storeValues => {
   return {...storeValues, [item]:value}
  })
 }
}

export default store