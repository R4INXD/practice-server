// public/utils/request.js

const request = (url, method, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
