import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../component/Card';
import { Input } from '../component/Input';
import { Button } from '../component/Button';
import { Label } from '../component/label';
import { LockIcon, UserIcon } from '../Icons/Icon';
import '../global.css';

export default function UserLogin() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Perform authentication logic here (e.g., check credentials)
    // If authentication is successful, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100">
      <div className="max-w-md w-full space-y-8 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-800">TaskTracker</h1>
          <p className="mt-2 text-sm text-blue-600">User Login</p>
        </div>
        <Card className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center text-blue-800">Sign In</CardTitle>
            <CardDescription className="text-center text-blue-600">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}> {/* Updated to use handleSubmit */}
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-blue-700">
                  Email address
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="user@example.com"
                  />
                  <UserIcon className="h-5 w-5 text-blue-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-blue-700">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                  <LockIcon className="h-5 w-5 text-blue-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded"
                  />
                  <Label htmlFor="remember-me" className="ml-2 block text-sm text-blue-700">
                    Remember me
                  </Label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-blue-600">
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                Sign up now
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
