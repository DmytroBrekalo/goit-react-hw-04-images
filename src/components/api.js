export const Api = async (name, page) => {
  const searchParams = new URLSearchParams({
    q: name,
    page: page,
    key: '35881226-6094d647a7456bcb1a2145e2d',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  const response = await fetch(`https://pixabay.com/api/?${searchParams}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
};
