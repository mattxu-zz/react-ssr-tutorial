
import Home from "./pages/Home";
import User from "./pages/User";
import { fetchUsers } from "./redux/userSlice";

const Routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/user",
    component: User,
    loadData: (store) => {
      return store.dispatch(fetchUsers());
    }
  },
];

export default Routes;