export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "1234") {
        resolve({
          status: 200,
          data: { token: "fake-token" }
        });
      } else if (username === "error") {
        reject({ status: 500, message: "Server error" });
      } else {
        reject({ status: 401, message: "Invalid credentials" });
      }
    }, 500);
  });
};