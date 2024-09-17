import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux"
import { logOut } from "../store/slices/authSlice"
import ThemeCustomization from "../components/ThemeCustomization/ThemeCustomization";

export default function ProfilePage() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (
    <div>
      <h1>Профиль</h1>
      <ThemeCustomization/>
      <button className="link-primary py-2 px-5 mt-3" onClick={() => handleLogOut()}>Выйти</button>
    </div>
  )
}
