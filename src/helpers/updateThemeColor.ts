export const updateThemeColor = (color: string, colorHover: string) => {
    document.documentElement.style.setProperty('--theme-color', color);
    document.documentElement.style.setProperty('--theme-color-hover', colorHover);
};