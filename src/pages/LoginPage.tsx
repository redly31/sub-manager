import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { logIn } from "../store/slices/sessionSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();;

  const signIn = () => {
    dispatch(logIn())
    navigate('/')
  }

  return (
    <div className="">
      <h1>Вход</h1>
      <form className="flex flex-col items-start space-y-3 mt-3">
        <input
          className="input-secondary"
          placeholder="Почта"
          type="email"
        />
        <input
          className="input-secondary"
          placeholder="Пароль"
          type="password"
        />
        <div className="flex items-center space-x-2">
          <button
            onClick={signIn}
            className="link-primary py-2 px-5"
          >
            Войти
          </button>
          <Link className="link-primary py-2 px-5" to="/registration">
            Нет аккаунта
          </Link>
        </div>
      </form>
    </div>
  );
}
