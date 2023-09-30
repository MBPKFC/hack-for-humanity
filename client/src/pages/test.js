import { getSingleUser } from "../utils/API";

export default function Home() {
  const handleGetSingleUser = async (e) => {
    e.preventDefault();

    try {
      // needed data for search
      const userId = "651858eac39aa9822b6f0cc6";

      const res = await getSingleUser({ id: userId });
      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

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
