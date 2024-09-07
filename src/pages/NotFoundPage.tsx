import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="center text-center">
      <h1 className="mb-3">Страница не найдена &#128557;</h1>
      <Link to="/" className="link-primary py-2 px-5">Вернуться на главную</Link>
    </div>
  )
}