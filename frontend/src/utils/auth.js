export const setToken = (token) => {
   localStorage.setItem('Authorization', `Bearer ${token}`);
}

export const removeToken = () => {
   localStorage.removeItem('Authorization');
}