import axios from 'axios'

const URL = 'http://localhost:8000'
export const addTask = async (data) => {
  try {
    return axios.post(`${URL}/add-task`, data)
  } catch (error) {
    console.log('Error while calling addTask api', error)
  }
}

export const getTasks = async () => {
  try {
    return await axios.get(`${URL}/all-tasks`)
  } catch (error) {
    console.log('Error while calling getTasks api', error)
  }
}
export const getTask = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`)
  } catch (error) {
    console.log('Error while calling getTask api', error)
  }
}
export const editTask = async (task, id) => {
  try {
    return await axios.put(`${URL}/${id}`, task)
  } catch (error) {
    console.log('Error while calling editTask api', error)
  }
}

export const deleteTask = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`)
  } catch (error) {
    console.log('Error while calling deleteTask api', error)
  }
}
