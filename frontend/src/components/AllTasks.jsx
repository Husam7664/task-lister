import { useState, useEffect } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
  Container,
  ButtonGroup,
} from '@mui/material'
import { getTasks, deleteTask } from '../services/api'
import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
  width: 80%;
  margin: 50px auto 0 auto;
`
const Div = styled('div')`
  width: 80%;
  margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`
const TBody = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`
const AllTasks = () => {
  const [tasks, setTasks] = useState([])
  const [subTasks, setSubTasks] = useState([])
  const [filterTask, setFilterTask] = useState('All')

  useEffect(() => {
    geAtllTasks()
  }, [])

  const geAtllTasks = async () => {
    let response = await getTasks()
    console.log(response)
    setTasks(response.data)
    setSubTasks(response.data)
  }

  const deleteTaskDetails = async (id) => {
    await deleteTask(id)
    geAtllTasks()
  }

  const dateConverter = (date) => {
    return date.split('T')[0]
  }

  const allTasks = () => {
    geAtllTasks()
  }
  const filterCompltedTasks = () => {
    // setSubTasks(tasks)
    const filterCompltedTasks = subTasks.filter(
      (task) => task.completionStatus === true
    )
    console.log(filterCompltedTasks)
    setTasks(filterCompltedTasks)
  }
  const filterInCompltedTasks = () => {
    // setSubTasks(tasks)
    const filterCompltedTasks = subTasks.filter(
      (task) => task.completionStatus === false
    )
    console.log(filterCompltedTasks)
    setTasks(filterCompltedTasks)
  }

  const todayDate = () => {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    let yyyy = today.getFullYear()

    today = yyyy + '-' + mm + '-' + dd
    // document.write(today);
    return today
  }
  const filteroverdueTasks = () => {
    const filterCompltedTasks = subTasks.filter(
      (task) => todayDate() > task.dueDate
    )
    console.log(filterCompltedTasks)
    setTasks(filterCompltedTasks)
  }
  return (
    <Container>
      <Div>
        <p>Filter Tasks</p>
        <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
        >
          <Button onClick={() => allTasks()}>All</Button>
          <Button onClick={() => filterCompltedTasks()}>Completed</Button>
          <Button onClick={() => filterInCompltedTasks()}>Incomplete</Button>
          <Button onClick={() => filteroverdueTasks()}>Overdue</Button>
        </ButtonGroup>
      </Div>

      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Completion Status</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell></TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TBody
              key={task._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='task'>
                {index + 1}
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>
                {task.completionStatus === true ? 'Completed' : 'Incomplete'}
              </TableCell>
              <TableCell>{dateConverter(task.dueDate)}</TableCell>
              <TableCell>
                <Button
                  variant='contained'
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`edit-task/${task._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => deleteTaskDetails(task._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TBody>
          ))}
        </TableBody>
      </StyledTable>
    </Container>
  )
}

export default AllTasks
