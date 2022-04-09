import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: '20px',
    backgroundColor: '#f9fbe7',
    borderRadius: '30px'
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor:'#e65100',
    color: 'white'
  },
  clearButton: {
    color:'White',
    backgroundColor : '#1b5e20'
  },

}));