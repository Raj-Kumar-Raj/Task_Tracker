import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './component/Card';
import { Button } from './component/Button';
import { CheckCircle2, Users, BarChart2, ArrowRight } from './Icons/Icon';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-purple-700">
          <Icon className="mr-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-purple-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex flex-col justify-center items-center p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-12 relative"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
          Welcome to TaskTracker
        </h1>
        <p className="text-xl md:text-2xl text-purple-700 max-w-3xl mx-auto">
          Streamline your workflow, boost productivity, and stay organized with our powerful task management solution.
        </p>
        {/* Animated background blobs */}
        <motion.div
          className="absolute -z-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -z-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute -z-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <FeatureCard
          icon={CheckCircle2}
          title="Task Management"
          description="Easily create, assign, and track tasks to keep your projects on schedule."
          delay={0.2}
        />
        <FeatureCard
          icon={Users}
          title="Team Collaboration"
          description="Foster teamwork with real-time updates and shared task lists."
          delay={0.4}
        />
        <FeatureCard
          icon={BarChart2}
          title="Progress Tracking"
          description="Visualize project progress and identify bottlenecks with intuitive charts."
          delay={0.6}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="w-full max-w-md bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center text-purple-800">Get Started</CardTitle>
            <CardDescription className="text-center text-purple-600">
              Choose your role to log in and start managing tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <Link to="/login/user">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 transform hover:scale-105">
                User Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/login/admin">
              <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105">
                Admin Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
          <CardFooter className="text-center text-sm text-purple-600">
            New to TaskTracker? <Link to="/signup" className="underline hover:text-purple-800 transition-colors duration-300">Sign up here</Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
