import axios from "axios"
import { Notify } from 'quasar'

/**
 * Запрос на добавление участника
 * 
 * При удачной авторизации, данные заносятся в коммит "setClient"
 * и программа приветствует пользователя через экшен dispatch("greeting")
 * 
 * При не удачной авторизации, открывается диалоговое окно с ошибкой
 * 
 * @param {function} requestStatus - состояние запроса, 
 * true - идёт отправка запроса, 
 * false - отправка запроса не осуществляется,
 * нужно для ajax-баров и различных значков отправки запроса
 */
export const addvolunteer = async ({ commit }, data) => {
  commit("requestStatus", true)

  await 
  axios
    .post("http://localhost:4000/api/addVolonteer", data)
    .then(res => {
      commit("setClient", res.data)
    })
    .catch(err => console.log(err))

}

export const greeting = async( {state: {client: {name}}} ) => {
  if (name)
    Notify.create({
      textColor: "white",
      color: "positive",
      message: "Добро пожаловать," + name
    })
  
}

/**
 * Отправка запроса авторизации на сервер, 
 * 
 * При удачной авторизации, данные заносятся в коммит "setClient"
 * и программа приветствует пользователя через экшен dispatch("greeting")
 * 
 * При не удачной авторизации, открывается диалоговое окно с ошибкой
 */
export const Login = async ({ commit, dispatch }, data) => {

  await axios
  .post("http://localhost:5000/api/login", data)
  
  .then(res => {
    if(!res.data) {
      Notify.create({
        message: `Не правильный логин или пароль!`,
        position: "top",
        color: "red",
        textColor: "white"
      })
      return;
    }

    commit("setClient", res.data)
    
    Notify.create({
      message: `Добро пожаловать, ${res.data.name}!`,
      position: "top",
      color: "green",
      textColor: "white"
    })
  })
  .catch(err => console.log(err))
}

/**
 * выход пользователя из приложения, 
 * здесь просто все данные о пользователе становятся null
 */
export const output = async ({commit, state:{client: {name}}}) => {
  commit('output')

  Notify.create({
    message: `До свидания, ${name}!`,
    position: "top",
    color: "green",
    textColor: "white"
  })
}