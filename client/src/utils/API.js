export const createUser = (userData) => {
  console.log("Create User");
  return fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const getSingleUser = (userData) => {
  console.log("Get Single User");
  return fetch(
    `${process.env.NEXT_PUBLIC_APIENDPOINT}/api/users/${userData.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const getAllUsers = () => {
  console.log("Get All Users");
  return fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/api/users/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
