export const createUser = (userData) => {
  return fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const getSingleUser = (userData) => {
    console.log("api test")
  return fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/api/users/${userData.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
