import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-sm border bg-zinc-900 p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 text-gray-600 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded text-gray-600"
          />
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded"
          >
            Signup
          </button>
          <p
            onClick={() => navigate('/login')}
            className="text-blue-500 cursor-pointer text-center mt-2"
          >
            Already have an account?
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
