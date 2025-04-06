import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Login con: " + email);
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <input type="email" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Iniciar sesión</button>
    </div>
  );
}
