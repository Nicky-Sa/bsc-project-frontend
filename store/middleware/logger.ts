const logger = (store: { getState: () => any }) => (next: (arg0: any) => void) => (action: any) => {
  next(action) // first do the action
  console.log("Action: ", action)
  console.log("Store: ", store.getState()) // then log the store
}

export default logger