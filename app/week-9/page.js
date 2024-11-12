"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => await gitHubSignIn();
  const handleLogout = async () => await firebaseSignOut();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {!user ? (
        <button onClick={handleLogin} className="btn-primary">Login with GitHub</button>
      ) : (
        <div className="text-center">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout} className="btn-primary">Logout</button>
          <Link href="/week-9/shopping-list">
            <button className="btn-secondary">Go to Shopping List</button>
          </Link>
        </div>
      )}
    </div>
  );
}
