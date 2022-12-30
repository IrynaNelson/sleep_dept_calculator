const getSleepHours = (day) => {
    if (day === "monday") {
      return 8;
    } else if (day === "tuesday") {
      return 8;
    } else if (day === "wednesday") {
      return 8;
    } else if (day === "thursday") {
      return 8;
    } else if (day === "friday") {
      return 8;
    } else if (day === "saturday") {
      return 8;
    } else if (day === "sunday") {
      return 8;
    } else {
      return "Is it even a day?";
    }
  };
  
  const getActualSleepHours = () => {
    return (
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday")
    );
  };
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log(
        "You slept for " +
          idealSleepHours +
          " hours this week. It's your perfect amount of sleep!"
      );
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        "You got " +
          (idealSleepHours + actualSleepHours) +
          " hour(s) more sleep than you needed this week."
      );
    } else {
      console.log(
        "You slept for " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) less sleep than you needed this week. Get some rest."
      );
    }
  };
  
  calculateSleepDebt();