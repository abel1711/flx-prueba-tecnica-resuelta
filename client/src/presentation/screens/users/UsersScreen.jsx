import { Filter, UserTable } from "../../components";
import './users-screen.css';
export const UsersScreen = () => {

  return (
    <div className="container-user">
      <Filter />
      <UserTable />

    </div>
  )
}
