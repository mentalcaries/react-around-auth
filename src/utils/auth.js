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
        if (response.status === 201) {
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

export function authorise(password, email) {
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
  .then((response)=>{
    if (response.status === 200){
       return response.json()
      }
      else if (response.status === 400) {
        throw Error ("One or more of the fields were not provided")
      }
      else if (response.status === 401) {
          throw Error ("The user with the specified email not found")
      }
  })
  
  .then((data)=>{
    console.log('res', data)
    if(data.token){
      localStorage.setItem('jwt', data.token);
      return data;
    }
    return; 
  })
  .catch(err=>console.log(err))
}

export function verifyUser(token){
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then((response)=>{
      console.log(response)
      if (response.status ===400){
        throw Error("Token not provided or provided in the wrong format")
      }
      else if (response.status ===401){
        throw Error ("The provided token is invalid")
      }
      else {
        return response.json()
      }
    })
    // .then(data=>data)
    .then(data=>console.log(data))
}