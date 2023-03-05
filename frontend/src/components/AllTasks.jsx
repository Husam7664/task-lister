import { useState, useEffect } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from '@mui/material'
import { getTasks } from '../services/api'
import { Link } from 'react-router-dom'

const StyledTable = styled(Table)`
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
    font-size: 20px;
  }
`
const AllTasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    geAtllTasks()
  }, [])

  const geAtllTasks = async () => {
    let response = await getTasks()
    console.log(response)
    setTasks(response.data)
  }
  const dateConverter = (date) => {
    return date.split('T')[0]
  }
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell align='right'>Title</TableCell>
          <TableCell align='right'>Description</TableCell>
          <TableCell align='right'>Completed</TableCell>
          <TableCell align='right'>Due_date</TableCell>
          <TableCell align='right'></TableCell>
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
            <TableCell align='right'>{task.title}</TableCell>
            <TableCell align='right'>{task.description}</TableCell>
            <TableCell align='right'>
              {task.completionStatus === true ? 'Completed' : 'Not Completed'}
            </TableCell>
            <TableCell align='right'>{dateConverter(task.dueDate)}</TableCell>
            <TableCell align='right'>
              <Button
                variant='contained'
                style={{ marginRight: 10 }}
                component={Link}
                to={`edit-task/${task._id}`}
              >
                Edit
              </Button>
              <Button variant='contained' color='secondary'>
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  )
}

export default AllTasks
