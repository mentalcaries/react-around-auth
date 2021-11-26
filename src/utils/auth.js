const BASE_URL = "https://register.nomoreparties.co";

export function register(password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        if (e === 400) {
          return { message: "One of the fields was filled in incorrectly" };
        }
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

export function login(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
    }),
  })
  .then((response)=>response.json())
  .then((data)=>{
    if(data.jwt){
      localStorage.setItem('jwt', data.jwt);
      return data;
    }
    return; 
  })
  .catch(err=>console.log(err))
}