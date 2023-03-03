import axios from 'axios'

const URL = ''
export const addTask = async (data) => {
  try {
    return axios.post(`${URL}/add-task`, data)
  } catch (error) {
    console.log('Error while calling add task api', error)
  }
}
