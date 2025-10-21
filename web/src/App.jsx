export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center max-w-md">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-tight">
          HealthConnect 💊
        </h1>
        <p className="mt-4 text-white/90 text-lg">
          Gestión de citas médicas y teleasistencia moderna.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-2 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition">
            Iniciar sesión
          </button>
          <button className="px-6 py-2 bg-indigo-700 text-white font-semibold rounded-lg shadow hover:bg-indigo-800 transition">
            Registrarse
          </button>
        </div>
        <p className="mt-8 text-sm text-white/70">
          Desarrollado con{" "}
          <span className="font-bold text-white">React + Tailwind</span>
        </p>
      </div>
    </div>
  );
}
