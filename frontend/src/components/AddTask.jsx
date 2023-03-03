import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from '@mui/material'

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto ;
`

const AddTask = () => {
  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>title</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel>description</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel>due date</InputLabel>
        <Input />
      </FormControl>
      <FormControl>
        <InputLabel>completion status</InputLabel>
        <Input />
      </FormControl>
    </Container>
  )
}

export default AddTask
