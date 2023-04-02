/////////////////////////////////
// MAIN UI FUNCTION /////////////
export default function getFullDate() {
  // LOCAL HOOKS
  const date = new Date();

  // ar days
  const days = [
    'اﻷحد',
    'اﻷثنين',
    'الثلاثاء',
    'اﻷربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ];

  // day name
  const arDn = () => days[date.getDay()];
  const enDn = () => date.getDay();

  // day
  const dd = () => {
    if (date.getDate().toString().length < 2) {
      return `0${date.getDate().toString()}`;
    }
    return date.getDate().toString();
  };

  // month
  const mm = () => {
    if (date.getMonth().toString().length < 2) {
      return `0${date.getMonth() + 1}`;
    }
    return date.getMonth() + 1;
  };

  // Year
  const yyyy = () => date.getFullYear();

  // HANDLERS:
  const arDate = `${arDn()} ${dd()}-${mm()}-${yyyy()}م`;
  const enDate = `${yyyy()}-${mm()}-${dd()} ${enDn()}`;

  // Return:
  return { arDate, enDate };
}
