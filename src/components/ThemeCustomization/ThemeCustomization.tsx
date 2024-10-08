import toast, { Toaster } from "react-hot-toast";
import { useAppDispatch } from "../../hooks/redux";
import { IColor } from "../../models/ITheme";
import { setThemeColor } from "../../store/slices/themeSlice";
import { colorMap } from "./constants/colorMap";

export default function ThemeCustomization() {
  const dispatch = useAppDispatch();
  const notifySuccess = () => toast.success('Тема обновлена');
  const handleColorChange = (color: IColor) => {
    dispatch(setThemeColor(color));
    notifySuccess()
  };
  return (
    <div className="mt-3">
      <h2>Темы</h2>
      <div className="flex space-x-2">
        {colorMap.map((item: IColor) => (
          <button
            onClick={() => handleColorChange(item)}
            className={`${item.tailwindColor} hover:${item.tailwindColorHover} transition-colors rounded-lg py-2 px-5 mt-3`}
            key={item.cssColor}
          >
            {item.cssColor}
          </button>
        ))}
      </div>
      <Toaster position="bottom-center" reverseOrder={false}/>
    </div>
  );
}
