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
   if (data.status === 200) {
    alert(data.message);
   } else {
    alert(data.message);
   }
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
   if (data.status === 201) {
    alert(data.message);
   } else {
    alert(data.message);
   }
  })
  .catch((error) => {
   alert(error.message);
  });
}

export { login, signup };
