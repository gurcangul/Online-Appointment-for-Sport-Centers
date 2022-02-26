import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   container : {
    padding: theme.spacing(16),
   },
   accordion1: {
    backgroundColor:'#464646',
    margin: '6px',
    color: 'white',
    borderRadius : "50px!important"

   },
   accordion2: {
    backgroundColor:'#7C8483',
    margin: '6px',
    color: 'white',
    borderRadius : "50px"
   },
   accordion3: {
    backgroundColor:'#8A7868',
    margin: '6px',
    color: 'white',
    borderRadius : "50px"

   },
   accordion4: {
    backgroundColor:'#33303D',
    borderRadius : '50px!important'
   },
  }));