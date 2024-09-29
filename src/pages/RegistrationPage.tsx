import { useNavigate } from "react-router-dom";
import { logIn } from "../store/slices/sessionSlice";
import { useAppDispatch } from "../hooks/redux";


export default function RegistrationPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const createNewAccount = () => {
    dispatch(logIn())
    navigate('/')
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form
        className="flex flex-col items-start space-y-3 mt-3"
      >
        <input
          className="input-secondary"
          placeholder="Имя"
          type="text"
        />
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
        <button className="link-primary py-2 px-5" onClick={createNewAccount}>
          Создать аккаунт
        </button>
      </form>
    </div>
  );
}
