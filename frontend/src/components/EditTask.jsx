import { useState, useEffect } from 'react'
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
import { getTask } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

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

const EditTask = () => {
  const [task, setTask] = useState(defaultValue)

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    loadUserDetails()
  }, [])

  const loadUserDetails = async () => {
    const response = await getTask(id)
  }

  const onValueChange = (e) => {
    e.preventDefault()
    // console.log(e.target.name, e.target.value)
    setTask({ ...task, [e.target.name]: e.target.value })
    console.log(task)
  }

  const editTaskDetails = async () => {
    // await editTask(task)
    await navigate('/')
  }

  return (
    <Container>
      <Typography variant='h4'>Edit Task</Typography>
      <FormControl>
        <InputLabel>title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='title' />
      </FormControl>
      <FormControl>
        <InputLabel>description</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='description' />
      </FormControl>
      <FormControl variant='standard'>
        <InputLabel>Due Date</InputLabel>
        <Input
          name='dueDate'
          label=' Date'
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
        <Button variant='contained' onClick={() => editTaskDetails()}>
          Edit Task
        </Button>
      </FormControl>
    </Container>
  )
}

export default EditTask
