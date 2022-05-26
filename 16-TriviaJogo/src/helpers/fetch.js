const getToken = async () => {
  try {
    const url = 'https://opentdb.com/api_token.php?command=request';
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data.token;
  } catch (error) {
    console.error(error);
  }
  return localStorage.getItem('token');
};

export default getToken;
