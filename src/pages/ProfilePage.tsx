import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux"
import { logOut } from "../store/slices/authSlice"

export default function ProfilePage() {
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (
    <div>
      <button className="link-primary py-2 px-5" onClick={() => handleLogOut()}>Выйти</button>
    </div>
  )
}
