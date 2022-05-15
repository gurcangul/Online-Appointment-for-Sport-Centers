import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import TimePicker from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ reservationDate: '', reservationTime: '', reservationNote: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const [minDate, setMinDate] = React.useState(new Date());
  const [maxDate, setMaxDate] = React.useState(null);

  const handleMaxDate = () => {
    var today = new Date();
    var month = today.getMonth();
    maxDate = (month + 1 ) + "/01/" + today.getFullYear();
    setMaxDate({maxDate});
  }

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ reservationDate: '', reservationTime: '', reservationNote: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData.reservationDate = reservationDate;
    postData.reservationTime = reservationTime;
    console.log(postData)
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const [reservationDate, setReservationDate] = React.useState(null);
  const [reservationTime, setReservationTime] = React.useState(null);

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Reservation'}</Typography>
            <Grid container cols={12}>
              <Grid items md={6} sm={12} cols={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        value={reservationDate}
                        minDate={new Date()}
                        label="Reservation Date"
                        selected={postData.reservationDate}
                        onChange={(newValue) => {
                        setReservationDate(newValue);
                        }}
                        renderInput={(params) => 
                        <TextField 
                            variant='outlined'
                            value={reservationDate}
                            name="reservationDate"
                            onChange= {(e) => setPostData({...postData, reservationDate: e.target.value}) }
                            {...params} />}
                    />
                </LocalizationProvider>
              </Grid>
              <Grid items md={6} sm={12} cols={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Reservation Time" 
                  value={reservationTime}
                  onChange={(newValue) => {
                    setReservationTime(newValue);
                  }}
                  minTime = {new Date(0, 0, 0, 9)}
                  maxTime= {new Date(0, 0, 0, 21, 0)}
                  renderInput={(params) => 
                    <TextField 
                      {...params} 
                      variant="outlined"
                      value={reservationTime}
                      name="reservationTime"
                      onChange= {(e) => setPostData({ ...postData, reservationTime: e.target.value })}
                      />}
                />
              </LocalizationProvider>
              </Grid>
              <Grid items md={12} sm={12} cols={12}>
              <TextField                 
                  name="reservationNote" 
                  variant="outlined" 
                  label="Reservation Note" 
                  multiline rows={4} 
                  style={{width: '96%'}}
                  value={postData.reservationNote} 
                  onChange={(e) => setPostData({ ...postData, reservationNote: e.target.value })} 
              />
              </Grid>
              
              <Grid items cols={12} sm={12} md={6} justifyContent='flex-end'>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    style={{float: 'right', marginRight:2}}
                    size="medium" 
                    type="submit" 
                >
                    Create
                </Button>
              </Grid>
              <Divider/>
              <Grid items cols={12} sm={12} md={6} justifyContent='flex-start'>
                <Button 
                    className={classes.clearButton}
                    variant="contained" 
                    style={{float: 'left', marginLeft:2}}
                    size="medium" 
                    onClick={clear} 
                >
                  Clear
                </Button>
              </Grid>
            </Grid>
      </form>
    </Paper>
  );
};

export default Form;

/*        <TextField 
            name="title" 
            variant="outlined" 
            label="Title" 
            fullWidth value={postData.title} 
            onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
        />
        <TextField 
            name="message" 
            variant="outlined" 
            label="Message" 
            fullWidth multiline rows={4} 
            value={postData.message} 
            onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
        />
        <TextField 
            name="tags" 
            variant="outlined" 
            label="Tags (coma separated)" 
            fullWidth value={postData.tags} 
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} 
        />
        <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>*/