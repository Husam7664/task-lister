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

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & div {
    margin-top: 20px;
  }
`
const onValueChange = (e) => {
  console.log(e.target.name, e.target.value)
}

const AddTask = () => {
  return (
    <Container>
      <Typography variant='h4'>Add Task</Typography>
      <FormControl>
        <InputLabel>title</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='title' />
      </FormControl>
      <FormControl>
        <InputLabel>description</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='description' />
      </FormControl>
      <FormControl variant='standard'>
        <Input
          name='someDate'
          label='Some Date'
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
        <Button variant='contained'>Add Task</Button>
      </FormControl>
    </Container>
  )
}

export default AddTask
