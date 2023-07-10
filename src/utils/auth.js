export async function doLogin(data) {
  const uri = "/api/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  let result = fetch(uri, options)
    .then( (res) => res.json());
  
  return result;
}

export async function doJoin(data) {
  const uri = "/api/join";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  let result = fetch(uri, options)
    .then( (res) => res.json());
  
  return result;
}