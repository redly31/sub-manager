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
  const handleRegistration = () => {
    navigate('/registration')
  }

  return (
    <div className="flex flex-col items-start space-y-3">
      <h1>Вход</h1>
      <input className="input-secondary" placeholder="Почта" type="email" />
      <input className="input-secondary" placeholder="Пароль" type="password" />
      <div className="flex items-center space-x-2">
        <button className="link-primary py-2 px-5" onClick={() => handleLogIn()}>Войти</button>
        <button className="link-primary py-2 px-5" onClick={() => handleRegistration()}>Нет аккаунта</button>
      </div>
    </div>
  )
}
