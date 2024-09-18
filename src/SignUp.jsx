import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./component/Card";
import { Input } from "./component/Input";
import { Button } from "./component/Button";
import { Label } from "./component/Label";
import { LockIcon, UserIcon } from "./Icons/Icon";
import './global.css';

export default function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState('user'); // State to track selected role (user or admin)

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here

    // Navigate to different dashboard based on role
    if (role === 'admin') {
      navigate('/dashboard1');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <div className="max-w-md w-full space-y-8 p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-800">TaskTracker</h1>
          <p className="mt-2 text-sm text-purple-600">Signup</p>
        </div>
        <Card className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center text-purple-800">Create Account</CardTitle>
            <CardDescription className="text-center text-purple-600">
              Choose your role to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-purple-700">
                  Email address
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-purple-300 rounded-md shadow-sm placeholder-purple-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                  <UserIcon className="h-5 w-5 text-purple-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-purple-700">
                  Password
                </Label>
                <div className="mt-1 relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-purple-300 rounded-md shadow-sm placeholder-purple-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                  <LockIcon className="h-5 w-5 text-purple-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div className="text-purple-700">
                <Label className="block text-sm font-medium text-purple-700">Signup as:</Label>
                <div className="flex items-center mt-2 space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      checked={role === 'user'}
                      onChange={() => setRole('user')}
                      className="form-radio text-purple-600"
                    />
                    <span className="ml-2">User</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={role === 'admin'}
                      onChange={() => setRole('admin')}
                      className="form-radio text-purple-600"
                    />
                    <span className="ml-2">Admin</span>
                  </label>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Sign up
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="text-center">
            <p className="text-sm text-purple-600">
              Already have an account? <a href="/" className="font-medium text-purple-600 hover:text-purple-500">Sign in here</a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
