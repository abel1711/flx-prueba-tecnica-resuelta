import { UserTable, HeaderUserTable } from "../../components";
import './users-screen.css';

export const UsersScreen = () => {
  return (
    <div className="container-user">
      <HeaderUserTable />
      <UserTable />
    </div>
  )
}
