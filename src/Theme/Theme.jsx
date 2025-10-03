
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light"); // plain JS
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-secondary btn-circle"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 " />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
