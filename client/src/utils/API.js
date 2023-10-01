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
  return fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/api/users/${userData.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAllUsers = () => {
  return fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/api/users/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateSingleUser = (userData) => {
  return fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/api/users/${userData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
