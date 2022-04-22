// 把所有的模块做统一处理
// 导出一个统一的方法 useStore
import React from "react"
import LoginStore from "./loginStore"
const storesContext = React.createContext({
  loginStore: new LoginStore(),
})

export const useStore = () => React.useContext(storesContext)
