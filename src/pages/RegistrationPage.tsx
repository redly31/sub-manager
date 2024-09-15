import { useNavigate } from "react-router-dom";
import { logIn } from "../store/slices/authSlice";
import { useAppDispatch } from "../hooks/redux";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  
  const handleLogIn = () => {
    dispatch(logIn())
    navigate('/')
  }

  return (
    <div className="flex flex-col items-start space-y-3">
      <h1>Регистрация</h1>
      <input className="input-secondary" placeholder="Почта" type="email" />
      <input className="input-secondary" placeholder="Пароль" type="password" />
      <div className="flex items-center space-x-2">
        <button className="link-primary py-2 px-5" onClick={() =>  handleLogIn()}>Создать аккаунт</button>
      </div>
    </div>
  )
}
