export const formatDate = (date: string): string => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
  if (!dateRegex.test(date)) {
    console.log('Invalid date format. Expected format: "yyyy-mm-ddThh:mm:ss');
    return '../../..';
  }

  const inputDateTime = new Date(date);

  if (isNaN(inputDateTime.getTime())) {
    throw new Error('Invalid date format');
  }

  const day = String(inputDateTime.getDate()).padStart(2, '0');
  const month = String(inputDateTime.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = inputDateTime.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};
