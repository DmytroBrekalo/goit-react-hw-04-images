import axios from 'axios';

export const Api = (name, page) => {
  const searchParams = new URLSearchParams({
    q: name,
    page: page,
    key: '35881226-6094d647a7456bcb1a2145e2d',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  try {
    const response = axios.get(`https://pixabay.com/api/?${searchParams}`);
    return response;
  } catch (error) {
    console.warn(error);
  }
};
