import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
   paper: {
   
         right: 0,
         borderRadius : '20px',
         position: 'fixed',  
      
   },

   container : {
    marginTop:'70px!important',
    paddingLeft: '0px!important',
   },
   accordion1: {
    backgroundColor:'#464646',
    margin: '6px',
    color: 'white',
    borderRadius : "50px!important",

   },
   accordion2: {
    backgroundColor:'#7C8483',
    margin: '6px',
    color: 'white',
    borderRadius : "50px!important"
   },
   accordion3: {
    backgroundColor:'#8A7868',
    margin: '6px',
    color: 'white',
    borderRadius : "50px!important"

   },
   accordion4: {
    backgroundColor:'#33303D',
    borderRadius : '50px!important',
    color: 'white',
   },
   accordionSummary: {
      padding: '4px 4px 3px 20px',
   },

   drawer: {
      float:'right',
      justifyContent:"flex-end",
      height:'200px!important',
      top:'100px!important',
      right:'0px',
   },
   button: {
      marginTop:'25px',
      border:'2px',
      backgroundColor:'#bcaaa4',
      width:'200px!important',
      height:'40px!important',
      color: '#3e2723',
      fontSize:"30px",
      float:'right',
      transform: 'rotate(90deg)',

   },

   dateText : {
      fontWeight: '20px',
      color: '#3e2723',
   }
   
  }));