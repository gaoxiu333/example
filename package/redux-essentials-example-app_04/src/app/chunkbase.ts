import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from './store'

const store = configureStore({
  reducer: {},
})

// 直接写 这是同步的
const exampleThunk = (dispatch: AppDispatch, getState: () => RootState) => {
  const stateBefore = getState()
  dispatch(() => {})
  const stateAfter = getState()
}
// 使用创建函数
const chunkAction = (amount: number) => {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const stateBefore = getState()
    dispatch((amount) => {})
    const stateAfter = getState()
  }
}

store.dispatch(exampleThunk)
store.dispatch(chunkAction(123))

// 创建异步
const fetchItemById = createAsyncThunk('items/fetchItemById',async(itemId:string)=>{
    const item = await someFetchApi(itemId)
    return item
})
