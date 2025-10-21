export default function Login() {
  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="p-8 bg-white/10 rounded-xl backdrop-blur-md shadow-lg text-center max-w-sm">
        <h1 className="text-3xl font-bold mb-4">Iniciar sesión</h1>
        <p className="text-white/80 mb-6">
          Accede a tu cuenta de HealthConnect
        </p>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full mb-3 p-2 rounded-lg text-gray-900"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 p-2 rounded-lg text-gray-900"
        />
        <button className="w-full py-2 bg-indigo-700 hover:bg-indigo-800 rounded-lg font-semibold">
          Entrar
        </button>
      </div>
    </main>
  );
}
