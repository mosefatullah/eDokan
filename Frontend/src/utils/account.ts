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
 }).then((response) => {
  if (response.ok) {
   response.json().then((data) => {
    if (data.accessToken) {
     window.localStorage.setItem("access-token", data.accessToken);
    }
    alert(data.message);

    setTimeout(() => {
     window.location.href = "/app";
    }, 500);
   });
  } else {
   response.json().then((data) => {
    alert(data.message);
   });
  }
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
 }).then((response) => {
  if (response.ok) {
   response.json().then((data) => {
    if (data.accessToken) {
     window.localStorage.setItem("access-token", data.accessToken);
    }
    alert(data.message);

    setTimeout(() => {
     window.location.href = "/app";
    }, 500);
   });
  } else {
   response.json().then((data) => {
    alert(data.message);
   });
  }
 });
}

function loginWithGoogle() {
 fetch(url + "/account/login/google", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
 }).then((response) => {
  if (response.ok) {
   response.json().then((data) => {
    if (data.url) {
     window.location.href = data.url;
    } else {
     console.log("No URL found in the response.");
    }
   });
  } else {
   response.json().then((data) => {
    alert(data.message);
   });
  }
 });
}

function verifyToken(
 error: (arg0: { error: string }) => void,
 callback: (arg0: unknown) => void
) {
 fetch(url + "/account/login/verify", {
  method: "GET",
  headers: {
   "Content-Type": "application/json",
   "Access-Control-Allow-Origin": "*",
   Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  },
 }).then((res) => {
  if (res.ok) {
   res.json().then((data) => {
    callback(data);
   });
  } else {
   res.json().then((data) => {
    error(data);
   });
  }
 });
}

function logout() {
 fetch(url + "/account/logout", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  },
 }).then((response) => {
  if (response.ok) {
   localStorage.removeItem("access-token");
   window.location.href = "/account/login";
  } else {
   response.json().then((data) => {
    alert(data.message);
   });
  }
 });
}

type SuccessCallback = (data: object) => void;
type ErrorCallback = (error: { message: string }) => void;

function resetPassword(
 email: string,
 success: SuccessCallback,
 error: ErrorCallback
) {
 fetch(url + "/account/login/reset-password", {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify({
   email: email,
  }),
 }).then((response) => {
  if (!response.ok) {
   response.json().then((data) => {
    error(data);
   });
  } else {
   response.json().then((data) => {
    success(data);
   });
  }
 });
}

export { login, signup, loginWithGoogle, verifyToken, logout, resetPassword };
