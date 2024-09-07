import { Link } from "react-router-dom";

export default function StarterPage() {
  return (
    <div className="center text-left">
      <h1 className="leading-7">
        Возьмите под контроль свои подписки и расходы с помощью <span>Sub Manager</span>.
      </h1>
      <p className="my-5">
        Наше приложение поможет отслеживать ваши подписки в одном месте,
        предоставляя вам данные и напоминания, чтобы вы никогда не пропустили
        платеж и всегда контролировали свои финансы.
      </p>
      <Link to="/login" className="link-primary py-2 px-5">Начать</Link>
      <img src="" alt="" />
    </div>
  );
}
