/* request to API SERVER */
export async function doLogin(data) {
  const uri = process.env.REACT_APP_SERVER_URI + "/auth/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  };

  fetch(uri, options)
    .then( (res) => console.log(res) )
    .catch( (err) => console.log(err) );
}