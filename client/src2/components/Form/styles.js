import { makeStyles } from '@material-ui/core/styles';
import { height } from '@mui/system';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: '20px',
    backgroundColor: 'white',
    borderRadius: '30px',
    width: '50%',
    display : 'flex',
    height : '50vh'
    
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

  membershipAccordion: {
    backgroundColor:'#e0e0e0',
    margin: '6px',
    color: 'black',
    borderRadius : "10px!important",
    display:"block!important",
    '& .MuiAccordionDetails-root' : {
      display:"block!important"

    }
  },
  changePasswordAccordion: {
    backgroundColor:'#8A7868',
    margin: '10px',
    color: 'white',
    width: "90%"

   },
  container : {
    marginTop:'70px!important',
    paddingLeft: '0px!important',
    display:"block!important"

   },

}));