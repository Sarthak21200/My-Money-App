import Link from "next/link";





export default function() {
    return <div className="h-screen bg-gradient-to-r from-blue-100 to-white text-black flex flex-col items-center">
      <header className="w-full p-6 flex justify-between items-center">
        <h1 className="text-3xl  font-bold">MyMoney</h1>
        <nav>
          {/* <Link href="/signin" className="mr-4">
            Sign In
          </Link>
          <Link href="/signup">
            Sign Up
          </Link> */}
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-4xl font-extrabold mb-6">Welcome to MyMoney</h2>
        <p className="max-w-2xl text-lg mb-6">
        MyMoney is a secure and easy way to manage your finances. Add money to your wallet, transfer funds to other users, and keep track of your transactions all in one place.
        </p>
        <div className="space-x-4">
          <Link href="/signup">
            <button className="px-6 py-2 bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 transition">
              Get Started
            </button>
          </Link>
          <Link href="/features">
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200 transition">
              Learn More
            </button>
          </Link>
        </div>
      </main>
      <footer className="w-full p-6 flex justify-center items-center">
        <p>© 2023 MyMoney. All rights reserved.</p>
      </footer>
    </div>
    
}