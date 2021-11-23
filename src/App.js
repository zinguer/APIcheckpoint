import { useState, useEffect } from "react";
import axios from "axios";
import { Route,Switch } from "react-router";
import "./App.css";
import Userslist from "./components/Userslist";
import Moreinfo from "./components/Moreinfo";
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="AppBody">
      <div className="AppSubBody">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Userslist {...props} users={users} />}
          />
          <Route
            path="/info/:id"
            render={(props) => <Moreinfo {...props} users={users} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
