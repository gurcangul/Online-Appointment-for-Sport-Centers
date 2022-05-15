import * as React from 'react';
import Badge from '@mui/material/Badge';
import PickersDay from '@mui/lab/PickersDay';
import CalendarPickerSkeleton from '@mui/lab/CalendarPickerSkeleton';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import CalendarPicker from '../Pickers/CalendarPicker';
import Grid from '@mui/material/Grid';
import { Box } from '@material-ui/core';

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = getDaysInMonth(date);
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = new Date();

export default function PastReservationsPanel() {

  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState(initialValue);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  const pastReservationDateProps = {
    loading: isLoading,
    onMonthChange: handleMonthChange,
    renderLoading: () => <CalendarPickerSkeleton />,
    renderDay: (day, _value, DayComponentProps) => {
        const isSelected =
          !DayComponentProps.outsideCurrentMonth &&
          highlightedDays.indexOf(day.getDate()) > 0;

        return (
          <Badge
            key={day.toString()}
            overlap="circular"
            badgeContent={isSelected ? '🌚' : undefined}
          >
            <PickersDay {...DayComponentProps} />
          </Badge>
        );
      },
  }


  return (
      <Grid container>
        <Box style={{backgroundColor: '#00796b'}} borderRadius = '30px'>
            <CalendarPicker calendarProps = {pastReservationDateProps} />
        </Box>
      </Grid>
  );
}


/*  pastReservationProps = {pastReservationDateProps} */