
import { useState } from "react";
import Welcome from "./components/Welcome";
import BirthdayPage from "./components/BirthdayPage";
import "./Birthday.css";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <main className="birthday-app">
      {!started ? (
        <Welcome onEnter={() => setStarted(true)} />
      ) : (
        <BirthdayPage />
      )}
    </main>
  );
}
