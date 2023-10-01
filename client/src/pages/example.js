import { createUser, getAllUsers, getSingleUser, updateSingleUser } from "../utils/API";

export default function Home() {
  // example fetch of how to get a single user
  const handleGetSingleUser = async (e) => {
    e.preventDefault();

    // needed data for search
    const userData = { id: "651858eac39aa9822b6f0cc6" };

    try {
      const res = await getSingleUser(userData);
      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const user = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  // example fetch of how to create a user
  const handleCreateUser = async (e) => {
    e.preventDefault();

    // none of this data is required, but these are the available options
    const userData = {
      fullName: "Kenshaw Michaud",
      email: "kenshaw@michaud.com",
      gender: "Male",
      age: 24,
      zip: 33414,
      insurance: {
        provider: "Best Insurance",
        type: "ABC",
        hasPCP: true,
        hasEmailed: false,
      },
    };

    try {
      const res = await createUser(userData);
      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const user = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  // example fetch of how to get all users
  const handleGetAllUsers = async (e) => {
    e.preventDefault();

    try {
      const res = await getAllUsers();
      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const users = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  // example fetch of how to update a user
  const handleUpdateSingleUser = async (e) => {
    e.preventDefault();

    // required data for search
    const userData = {
      // required
      id: "651858eac39aa9822b6f0cc6",
      // available editable options, not required
      fullName: "Change Changer",
      email: "change@change.com",
      gender: "Male",
      age: 24,
      zip: 33414,
      insurance: {
        provider: "Best Insurance",
        type: "ABC",
        hasPCP: true,
        hasEmailed: false,
      },
    };

    try {
      const res = await updateSingleUser(userData);
      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const user = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <div>
        {/* example form submit get single user */}
        <form onSubmit={handleGetSingleUser}>
          <button type="submit">Get Single User</button>
        </form>
      </div>
      <div>
        {/* example form submit create user */}
        <form onSubmit={handleCreateUser}>
          <button type="submit">Create User</button>
        </form>
      </div>
      <div>
        {/* example form submit get all users */}
        <form onSubmit={handleGetAllUsers}>
          <button type="submit">Get All Users</button>
        </form>
      </div>
      <div>
        {/* example form submit get all users */}
        <form onSubmit={handleUpdateSingleUser}>
          <button type="submit">Update User</button>
        </form>
      </div>
    </main>
  );
}
