import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../hooks/redux";
import { logIn } from "../store/slices/authSlice";

export default function LoginPage() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const handleLogIn = () => {
    dispatch(logIn())
    navigate('/')
  }

  return (
    <div>

      <button className="link-primary py-2 px-5" onClick={() => handleLogIn()}>Войти</button>
    </div>
  )
}
