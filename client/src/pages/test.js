import { getSingleUser, createUser } from "../utils/API";

export default function Home() {
  // example fetch of how to get a single user
  const handleGetSingleUser = async (e) => {
    e.preventDefault();

    // needed data for search
    const userData = { id: "651858eac39aa9822b6f0cc6" };

    try {
      const res = await getSingleUser({ id: userData.id });
      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  // example fetch of how to create a user
  const handleCreateUser = async (e) => {};

  return (
    <main>
      <div>
        <form onSubmit={handleGetSingleUser}>
          <button type="submit">Single User</button>
        </form>
      </div>
      {/* <div>
        <form onSubmit={handleGetSingleUser}>
          <button type="submit">Single User</button>
        </form>
      </div> */}
    </main>
  );
}
