const BASE_URL = "https://register.nomoreparties.co"

export function register(userData){
  // console.log(JSON.stringify(userData))
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers:{
      'Content-type' : 'application.json'
    },
    body: JSON.stringify(userData)
  })
  .then((response)=> {
    try {
      if (response.status === 200){
        return response.json();
      }
    } catch (e){
      return (e)
    }
  })
  .then((res)=>{
    return res;
  })
  .catch((err)=> console.log(err))
}