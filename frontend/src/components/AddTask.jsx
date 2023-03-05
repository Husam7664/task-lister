import { useState } from 'react'
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
  Select,
  MenuItem,
} from '@mui/material'
import { addTask } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & div {
    margin-top: 20px;
  }
`
const defaultValue = {
  title: '',
  description: '',
  dueDate: '',
  completionStatus: '',
}

const AddTask = () => {
  const [task, setTask] = useState(defaultValue)

  const navigate = useNavigate()

  const onValueChange = (e) => {
    e.preventDefault()
    // console.log(e.target.name, e.target.value)
    setTask({ ...task, [e.target.name]: e.target.value })
    console.log(task)
  }

  const addTaskDetails = async () => {
    await addTask(task)
    navigate('/')
  }

  return (
    <Container>
      <Typography variant='h4'>Add Task</Typography>
      <FormControl>
        <InputLabel variant='standard'>title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='title' />
      </FormControl>
      <FormControl variant='standard'>
        <InputLabel>description</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='description' />
      </FormControl>
      <FormControl variant='standard'>
        <InputLabel>Due Date</InputLabel>
        <Input
          name='dueDate'
          label='Date'
          InputLabelProps={{ shrink: true, required: true }}
          type='date'
          onChange={(e) => onValueChange(e)}
        />
      </FormControl>
      <FormControl variant='standard'>
        <InputLabel>completion status</InputLabel>
        <Select onChange={(e) => onValueChange(e)} name='completionStatus'>
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={() => addTaskDetails()}>
          Add Task
        </Button>
      </FormControl>
    </Container>
  )
}

export default AddTask
