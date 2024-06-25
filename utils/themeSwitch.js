export function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.style.getPropertyValue('--foreground-rgb');
    console.log(currentTheme);
    if (currentTheme === '0, 0, 0') { // If current theme is dark
        root.style.setProperty('--foreground-rgb', '255, 255, 255'); // Switch to light theme
        root.style.setProperty('--background-start-rgb', '0, 0, 0');
        root.style.setProperty('--background-end-rgb', '0, 0, 0');
        console.log("dark");
    } else { // If current theme is light
        root.style.setProperty('--foreground-rgb', '0, 0, 0'); // Switch to dark theme
        root.style.setProperty('--background-start-rgb', '214, 219, 220');
        root.style.setProperty('--background-end-rgb', '255, 255, 255');
        console.log("light");
    }
}