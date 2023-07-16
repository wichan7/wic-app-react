export async function doLogin(data) {
  const uri = (process.env.REACT_APP_DASHBOARD_URL || "") + "/api/login";
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
  const uri = (process.env.REACT_APP_DASHBOARD_URL || "") + "/api/join";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  let result = fetch(uri, options)
    .then((res) => res.json());
  
  return result;
}

export async function doVerify() {
  const uri = (process.env.REACT_APP_DASHBOARD_URL || "") + "/verify";
  const options = {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  };

  let result = fetch(uri, options)
    .then( (res) => res.json());
  
  return result;
}

export async function doRefresh() {
  const uri = (process.env.REACT_APP_DASHBOARD_URL || "") + "/refresh";
  const options = {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  };

  let result = fetch(uri, options)
    .then( (res) => res.json() );
  
  return result;
}

export async function clearAuth() {

}