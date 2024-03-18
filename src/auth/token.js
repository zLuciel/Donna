async function tokenLoginUser(username,password){
   const userToken = await fetch(`${process.env.URL_WORDPRESS}/wp-json/jwt-auth/v1/token`,{
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
      },
      body:{
        username,
        password
      }
   })
    .then(res => res.json())
    .catch(error=> console.log(error))
    return userToken
}

export default tokenLoginUser