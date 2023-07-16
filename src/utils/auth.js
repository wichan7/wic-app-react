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
    .then( (res) => res.json());
  
  return result;
}

// TODO: Access Token 유효성 검증
export async function doVerify(accessToken) {
  const uri = (process.env.REACT_APP_DASHBOARD_URL || "") + "/verify";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accessToken": accessToken
    }
  };

  let result = fetch(uri, options)
    .then( (res) => res.json());
  
  return result;
}

// TODO: 419(토큰 만료) 리턴되었을 때, 리프레시 토큰을 /auth/refresh request.
export async function doRefresh(refreshToken) {
  const uri = (process.env.REACT_APP_DASHBOARD_URL || "") + "/refresh";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "refreshToken": refreshToken
    }
  };

  let result = fetch(uri, options)
    .then( (res) => res.json());
  
  return result;
}