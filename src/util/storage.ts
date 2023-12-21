/**
 * 此模块是用于local数据存储管理的工具模块
 */
import store from 'store';

const USER_KEY = 'user_key'
const storage = {

  /**
  * 存储user
  */
  saveUser(user:any) {
    store.set(USER_KEY,user)
  },

  /**
  * 获取user
  */
  getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_KEY) || {}
  },

  /**
  * 删除user
  */
  removeUser() {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY)
  },

  /**
   * 获取当前用户的角色
   */
  getRole() {
    return this.getUser().role
  }
}

export default storage