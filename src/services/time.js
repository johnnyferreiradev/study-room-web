export const getCurrentDateAndHourInApiFormat = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  return `${date} ${time}`;
};

export const checkArrear = (currentDate, deadline) => {
  const [deadlineDate, deadlineHour] = deadline.split(' ');
  const [currentTimeDate, currentTimeHour] = currentDate.split(' ');

  if (currentTimeDate > deadlineDate) {
    return true;
  }

  if (currentTimeDate === deadlineDate) {
    if (currentTimeHour > deadlineHour) {
      return true;
    }
  }

  return false;
};
