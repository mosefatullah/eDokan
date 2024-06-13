import { url } from "./api";

function login(username: string, password: string) {
 fetch(url + "/account/login", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify({
   username: username,
   password: password,
  }),
 })
  .then((response) => response.json())
  .then((data) => {
   if (data.accessToken) {
    window.localStorage.setItem("access-token", data.accessToken);
   }
   alert(data.message);

   setTimeout(() => {
    window.location.href = "/app";
   }, 500);
  })
  .catch((error) => {
   alert(error.message);
  });
}

function signup(username: string, email: string, password: string) {
 fetch(url + "/account/signup", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify({
   username: username,
   email: email,
   password: password,
  }),
 })
  .then((response) => response.json())
  .then((data) => {
   if (data.accessToken) {
    window.localStorage.setItem("access-token", data.accessToken);
   }
   alert(data.message);

   setTimeout(() => {
    window.location.href = "/app";
   }, 500);
  })
  .catch((error) => {
   alert(error.message);
  });
}

function loginWithGoogle() {
 fetch(url + "/account/login/google", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
 })
  .then((response) => {
   if (response.ok) {
    return response.json();
   }
   throw new Error("Network response was not ok.");
  })
  .then((data) => {
   if (data.url) {
    window.location.href = data.url;
   } else {
    console.log("No URL found in the response.");
   }
  })
  .catch((error) => {
   alert(error.message);
  });
}

async function verifyToken(
 error: (arg0: { error: unknown }) => void,
 callback: (arg0: unknown) => void
) {
 return await fetch(url + "/account/login/verify", {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  },
 })
  .then((res) => res.json())
  .then((data) => {
   if (data.error) {
    error(data);
   } else {
    callback(data);
   }
  })
  .catch((err) => {
   error({
    error: err.message,
   });
  });
}

function logout() {
 fetch(url + "/account/logout", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  },
 })
  .then((response) => response.json())
  .then((data) => {
   if (data.message) {
    localStorage.removeItem("access-token");
    window.location.href = "/account/login";
   }
  })
  .catch((error) => {
   alert(error.message);
  });
}

export { login, signup, loginWithGoogle, verifyToken, logout };
