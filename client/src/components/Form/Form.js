import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import TimePicker from '../Pickers/TimePicker'
import DatePicker from '../Pickers/DatePicker';

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

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const [value, setValue] = React.useState(null);

  const timePicker = {
    minTime:new Date(0, 0, 0, 9),
    maxTime:new Date(0, 0, 0, 21, 0),
    label:"Reservation Time",
    name:"reservation_name",
    onChange:(e) => setPostData({ ...postData, reservationTime: e.target.value }),
    value: postData.reservationTime
  }

  const datePicker = {
    label: "Reservation Date",
    minDate: new Date(),
    maxDate: handleMaxDate,
    name: "reservationDate" ,
    onChange: (e) => setPostData({ ...postData, reservationDate: e.target.value }), 
    value: postData.reservationDate,
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Reservation'}</Typography>
            <Grid container>
              <Grid items md={6} sm={12} cols={12}>
                <DatePicker
                    dateProps = {datePicker}
                />
              </Grid>
              <Grid items md={6} sm={12} cols={12}>
                <TimePicker
                  timeProps = {timePicker}
                />
              </Grid>
              <Grid items md={12} sm={12} cols={12}>
              <TextField                 
                  name="reservationNote" 
                  variant="outlined" 
                  label="Reservation Note" 
                  multiline rows={4} 
                  value={postData.reservationNote} 
                  onChange={(e) => setPostData({ ...postData, reservationNote: e.target.value })} 
              />
              </Grid>
              <Grid items cols={12} sm={12} md={6} justifyContent='flex-end'>
                <Button 
                    className={classes.buttonSubmit} 
                    variant="contained" 
                    size="medium" 
                    type="submit" 
                >
                    Create
                </Button>
              </Grid>
              <Grid items cols={12} sm={12} md={6} justifyContent='flex-start'>
                <Button 
                    className={classes.clearButton}
                    variant="contained" 
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