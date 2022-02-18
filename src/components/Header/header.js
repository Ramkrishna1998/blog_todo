import { useNavigate } from "react-router-dom"

export default function Header() {
  let navigate = useNavigate();

  const handleSignOut = () =>{
    localStorage.clear();
    navigate(`/`);
  }
    return (
      <header className="bg-indigo-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="font-bold text-2xl text-white items-center">
              Blog
            </div>
            <div className="ml-10 space-x-4">
             
              <button
                onClick={(e) => handleSignOut()}
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Sign Out
              </button>
            </div>
          </div>          
        </nav>
      </header>
    )
  }