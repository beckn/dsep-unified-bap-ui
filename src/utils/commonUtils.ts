export function getTimeDiff(dt: number) {
  var datetime = new Date(dt).getTime();
  var now = new Date().getTime();

  if (isNaN(datetime)) {
    return '';
  }

  console.log(datetime + ' ' + now);

  if (datetime < now) {
    var milisec_diff = now - datetime;
  } else {
    var milisec_diff = datetime - now;
  }

  var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

  var date_diff = new Date(milisec_diff);

  const returnValues = {
    days: days,
    hours: date_diff.getHours(),
    minutes: date_diff.getMinutes(),
    seconds: date_diff.getSeconds(),
  };

  return returnValues;
}
