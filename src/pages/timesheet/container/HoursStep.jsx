import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
// import Widget from '../../../components/reusable/Widget';
import { Toast } from 'primereact/toast';
import Widget from '../../../components/dashboard/Widget';

function calculateTotalDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDifference = end - start;
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  return daysDifference + 1;
}

function HoursStep({ formData }) {
 
  const timingValues = formData;
  const selectedDates = {
    startDate: formData.startDate,
    endDate: formData.endDate
  }
  const totalDays = calculateTotalDays(selectedDates.startDate, selectedDates.endDate)

  const [weekData, setWeekData] = useState([]);
  const toast = useRef(null);

  function formatTimingKey(key) {
    return key.replace('time', ' Time').replace(/^\w/, (c) => c.toUpperCase());
  }

  const selectedTimings = Object.keys(formData)
    .filter((key) => key.toLowerCase().includes('time'))
    .map((key) => formatTimingKey(key));

  const calculateTotalHours = () => {
    let totalHours = 0;
    if (selectedTimings && selectedTimings.length > 0) {
      selectedTimings.forEach((timing) => {
        totalHours += parseFloat(timingValues[timing.replace(' ', '').toLowerCase()] || 0);
      });
    }
    return totalHours.toFixed(2);
  };

  // const handleNextClick = () => {
  //   const isValidationPassed = validateValues();
  //   const timeCardItems = [];

  //   if (isValidationPassed) {
  //     weekData.forEach((week) => {
  //       week.days.forEach((day) => {
  //         const itemDate = `${selectedDates.startDate.getMonth() + 1}-${day.date}-${selectedDates.startDate.getFullYear()}`;
  //         const timeCardItem = {
  //           itemDate,
  //           regularTime: day['Regular Time'] || 0,
  //           overTime: day['Over Time'] || 0,
  //           doubleTime: day['Double Time'] || 0,
  //           paidVacationTime: 0,
  //           unpaidVacationTime: 0,
  //           comment: day.comment || '',
  //         };

  //         timeCardItems.push(timeCardItem);
  //       });
  //     });

  //     onNext('expenses', { hours: timeCardItems, selectedDates, totalDays, selectedTimings, timingValues });
  //     console.log("Hours", timeCardItems);
  //   } else {
  //     const mismatchedTimings = findMismatchedTimings();
  //     if (mismatchedTimings.length > 0) {
  //       const errorMessage = (
  //         <div>
  //           <p>Total timing values for the following timings are not matching:</p>
  //           <ul>
  //             {mismatchedTimings.map((timing) => (
  //               <li key={timing}>
  //                 <strong>{timing}:</strong> Expected  Value: {timingValues[timing.replace(' ', '').toLowerCase()] || 0},
  //                 Entered Value: {calculateTotalForTiming(timing)}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       );
  //       toast.current.show({
  //         severity: 'error',
  //         summary: 'Validation Error',
  //         detail: errorMessage,
  //         sticky: true
  //       });
  //     } else {
  //       toast.current.show({
  //         severity: 'error',
  //         summary: 'Validation Error',
  //         detail: 'Total timing values not matching.'
  //       });
  //     }
  //   }
  // };


  const findMismatchedTimings = () => {
    const mismatchedTimings = [];
    for (const timing of selectedTimings) {
      const widgetTotal = timingValues[timing.replace(' ', '').toLowerCase()] || 0;
      const tableTotal = calculateTotalForTiming(timing);

      if (parseFloat(widgetTotal) !== parseFloat(tableTotal)) {
        mismatchedTimings.push(timing);
      }
    }
    return mismatchedTimings;
  };

  const validateValues = () => {
    for (const timing of selectedTimings) {
      const widgetTotal = timingValues[timing.replace(' ', '').toLowerCase()] || 0;
      const tableTotal = calculateTotalForTiming(timing);

      if (parseFloat(widgetTotal) !== parseFloat(tableTotal)) {
        return false; // Individual widget timing hours value and total hours do not match
      }
    }
    return true; // All timing values match
  };

  const calculateTotalForTiming = (timing) => {
    let total = 0;
    weekData.forEach((week) => {
      week.days.forEach((day) => {
        total += parseFloat(day[timing] || 0);
      });
    });
    return total.toFixed(2);
  };


  useEffect(() => {
    generateWeekData();
  }, []);

  const handleInputChange = (weekIndex, dayIndex, timing, value) => {
    const updatedWeekData = [...weekData];
    const parsedValue = validateHours(value);
    updatedWeekData[weekIndex].days[dayIndex][timing] = parsedValue;

    // Split the decimal value into hours and minutes
    const hours = Math.floor(parsedValue);
    const minutes = (parsedValue - hours) * 60;

    updatedWeekData[weekIndex].total[timing] = calculateTotal(updatedWeekData[weekIndex].days, timing);

    setWeekData(updatedWeekData);
  };

  const validateHours = (value) => {
    const parsedValue = parseFloat(value);
    return !isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 24 ? parsedValue : '';
  };

  const calculateTotal = (days, timing, ...selectedDays) => {
    let total = 0;
    days.forEach((day) => {
      const value = parseFloat(day[timing]);
      if (!isNaN(value)) {
        // Convert decimal value to hours and minutes
        const hours = Math.floor(value);
        const minutes = (value - hours) * 60;
        total += hours + minutes / 60; // Convert minutes to hours
      }
    });
    return total;
  };


  const generateWeekData = () => {
    const { startDate, endDate } = selectedDates;
    const timings = selectedTimings;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const daysPerWeek = 7;
    const weekData = [];

    if (!selectedDates.startDate || !selectedDates.endDate || !selectedTimings) {
      setWeekData([]);
      return;
    }

    if (!timings || !startDate || !endDate) {
      return;
    }

    let currentDay = new Date(start);

    while (currentDay <= end) {
      const weekStartDate = new Date(currentDay);

      // Find the nearest Sunday from the current start date
      const weekEndDate = new Date(currentDay);
      weekEndDate.setDate(weekEndDate.getDate() + (daysPerWeek - weekEndDate.getDay()));

      const days = [];
      const total = {};
      timings.forEach((timing) => {
        total[timing] = 0;
      });

      while (currentDay <= weekEndDate && currentDay <= end) {
        const dayData = {
          day: currentDay.toLocaleString('en-US', { weekday: 'short' }),
          date: currentDay.getDate(),
          disabled: currentDay < start,
        };

        timings.forEach((timing) => {
          if (dayData.day === 'Sat' || dayData.day === 'Sun') {
            dayData[timing] = 0; // Set Regular Time to 0 for Saturday and Sunday
          } else {
            dayData[timing] = timing === 'Regular Time' ? 8 : 0; // Set Regular Time to 8, others to 0 for weekdays
          }
        });

        days.push(dayData);
        currentDay.setDate(currentDay.getDate() + 1);
      }

      if (days.length > 0) {
        weekData.push({ days, total });
      }
    }

    setWeekData(weekData);
  };


  const renderInputFields = (weekIndex, week) => {

    const calculateDayTotal = (dayIndex) => {
      let total = 0;
      selectedTimings.forEach((timing) => {
        total += parseFloat(week.days[dayIndex][timing] || 0);
      });
      return total.toFixed(2);
    };

    const calculateRegularTimeTotal = () => {
      let total = 0;
      week.days.forEach((day) => {
        total += parseFloat(day['Regular Time'] || 0);
      });
      return total.toFixed(2);
    };

    const calculateOverallTotal = () => {
      let total = 0;
      week.days.forEach((day, dayIndex) => {
        total += parseFloat(calculateDayTotal(dayIndex)) || 0;
      });
      return total.toFixed(2); // Ensure the total is displayed with 2 decimal places
    };

    return (
      <tbody>
        <tr>
          <td>Week {weekIndex + 1}</td>
          {week.days.map((day, dayIndex) => (
            <td key={`day-${dayIndex}`}>{`${day.day} ${day.date}`}</td>
          ))}
          <td>Total</td>
        </tr>
        {selectedTimings.map((timing) => (
          <tr key={timing}>
            <th>{timing}</th>
            {week.days.map((day, dayIndex) => (
              <td key={`input-${dayIndex}`}>

                <InputNumber
                  value={day[timing]}
                  disabled={day.disabled}
                  className='hours-inputtext'
                  onChange={(e) =>
                    handleInputChange(weekIndex, dayIndex, timing, e.value)
                  }
                  minFractionDigits={1}
                />

              </td>
            ))}
            <td>
              {timing === 'Regular Time' ? (
                <InputNumber
                  value={calculateRegularTimeTotal()}
                  disabled
                  className='hours-inputtext'
                  step={0.5}
                  minFractionDigits={1}
                />
              ) : (
                <InputNumber
                  value={week.total[timing] || 0}
                  disabled
                  className='hours-inputtext'
                  step={0.5}
                  minFractionDigits={1}
                />
              )}
            </td>
          </tr>
        ))}
        <tr>
          <th>Overall Total</th>
          {week.days.map((day, dayIndex) => (
            <td key={`overall-total-${dayIndex}`}>
              <InputNumber className='hours-inputtext'
                value={calculateDayTotal(dayIndex)}
                minFractionDigits={1}
                disabled />
            </td>
          ))}
          <td>
            <InputNumber className='hours-inputtext'
              value={calculateOverallTotal(weekIndex)}
              minFractionDigits={1}
              disabled />
          </td>
        </tr>
      </tbody>
    );
  };

  const getShortMonth = (date) => {
    const options = { month: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };


  const renderWeekHeader = (weekIndex, week) => {
    const weekStartDate = week.days[0].date;
    const weekEndDate = week.days[week.days.length - 1].date;
    const weekStartMonth = getShortMonth(new Date(selectedDates.startDate));
    // const weekEndMonth = getShortMonth(new Date(selectedDates.endDate));

    return (
      <div className='d-flex '>
        <h5>
          Week {weekIndex + 1}
        </h5>

        <p className='ms-3'> {weekStartMonth} {weekStartDate} - { } {weekEndDate}</p>
      </div>
    );
  };


  return (
    <div className='mb-5' >

      <div className=" mb-2 mt-3 row  p-fluid g-2 g-lg-3 align-items-center justify-content-center g-4">
        <div className="col">
          <Widget
            title="Total Days"
            value={totalDays}
          />
        </div>

        {selectedTimings?.map((timing) => (
          <div className="col">
            <Widget
              title={`${timing}`}
              value={timingValues[timing.replace(' ', '').toLowerCase()] || 0}
            />
          </div>
        ))}

        <div className="col">
          <Widget
            title="Total Hours"
            value={calculateTotalHours()}
          />
        </div>
      </div>

      {weekData.length > 0 ? (
        weekData.map((week, weekIndex) => (
          <div key={`week-${weekIndex}`}>
            {renderWeekHeader(weekIndex, week)}
            <hr />
            <div className="table-container">
              <Table className="p-mb-3">
                {renderInputFields(weekIndex, week)}
              </Table>
            </div>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}

      <Toast ref={toast} position="top-right" />
    </div>
  )
}

export default HoursStep