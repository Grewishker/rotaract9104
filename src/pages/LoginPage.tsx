import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <PageHero breadcrumb="Member Access" title="Member Login" subtitle="Sign in to your Rotaract District 9104 account" />
      <section className="py-16 bg-white">
        <div className="max-w-sm mx-auto bg-white border border-blue-100 rounded-lg p-10">
          <h2 className="font-display font-bold text-blue-800 text-2xl text-center mb-6">Sign In</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-yellow-400" />
            </div>
            <button type="submit" className="w-full bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">Sign In</button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            <a href="#" className="text-yellow-600 hover:underline">Forgot password?</a>
          </p>
          <div className="border-t border-blue-100 mt-6 pt-6 text-center">
            <p className="text-sm text-gray-500">Not a member? <Link to="/join" className="text-yellow-600 font-semibold hover:underline">Join Rotaract</Link></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
