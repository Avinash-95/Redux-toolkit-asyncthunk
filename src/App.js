import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData } from "./store/slices/usersSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  console.log(userData);

  return (
    <div className="App">
      {userData?.isLoading && <h1>Loading</h1>} {/* if loading is true then it render Loading text */}
      {userData?.data.map((user) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
}

export default App;
