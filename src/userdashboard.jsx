import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./component/Card"
import { Progress } from "./component/Progress"
import { Avatar, AvatarFallback, AvatarImage } from "./component/Avatar"
import { CheckCircle2, Circle, BarChart2, CalendarIcon, Clock,LogOut } from "./Icons/Icon"
import { Button } from "./component/Button"
import { Badge } from "./component/badge"


export default function Dashboard({ isAdmin }) {
  // Mock user data
  const [user, setUser] = useState({
    id: 1,
    name: "Alice Johnson",
    tasksCompleted: 23,
    totalTasks: 30,
    tasks: [
      { id: 1, title: "Complete project proposal", deadline: "2023-06-15", status: "completed" },
      { id: 2, title: "Review client feedback", deadline: "2023-06-20", status: "in-progress" },
      { id: 3, title: "Update website content", deadline: "2023-06-25", status: "not-started" },
      { id: 4, title: "Prepare monthly report", deadline: "2023-06-30", status: "in-progress" },
      { id: 5, title: "Client meeting preparation", deadline: "2023-07-05", status: "not-started" },
    ]
  })

  const UserDashboard = () => {
    const sortedTasks = [...user.tasks].sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    const upcomingTask = sortedTasks.find(task => task.status !== 'completed')

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Task Progress</CardTitle>
              <BarChart2 className="h-5 w-5 text-white" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{user.tasksCompleted}/{user.totalTasks}</div>
              <Progress 
                value={(user.tasksCompleted / user.totalTasks) * 100} 
                className="h-2 w-full bg-white bg-opacity-25"
                indicatorClassName="bg-white"
              />
              <p className="text-sm mt-2 opacity-90">Tasks completed</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Upcoming Deadline</CardTitle>
              <CalendarIcon className="h-5 w-5 text-white" />
            </CardHeader>
            <CardContent>
              {upcomingTask ? (
                <>
                  <div className="text-3xl font-bold mb-2">
                    {new Date(upcomingTask.deadline).toLocaleDateString()}
                  </div>
                  <p className="text-sm opacity-90">{upcomingTask.title}</p>
                </>
              ) : (
                <p className="text-xl font-bold">No upcoming deadlines</p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-purple-800">My Tasks</CardTitle>
            <CardDescription className="text-purple-600">
              View and manage your current tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sortedTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                  <div className="flex items-center space-x-3">
                    {task.status === 'completed' ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : task.status === 'in-progress' ? (
                      <Circle className="h-6 w-6 text-yellow-500" />
                    ) : (
                      <Circle className="h-6 w-6 text-gray-300" />
                    )}
                    <div>
                      <h3 className="text-sm font-medium text-purple-800">{task.title}</h3>
                      <p className="text-xs text-purple-600 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        Due: {new Date(task.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      task.status === 'completed' ? 'success' :
                      task.status === 'in-progress' ? 'warning' :
                      'secondary'
                    }
                  >
                    {task.status.replace('-', ' ')}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className=" text-left text-xl font-semibold text-purple-800 m-0 p-0">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700">Add New Task</Button>
              <Button variant="outline" className="border-purple-300 text-white-600 hover:bg-purple-200">View All Tasks</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const AdminDashboard = () => (
    <div>
      {/* Admin dashboard content */}
      <p>Admin Dashboard (not implemented in this example)</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-white hover:text-yellow-200 transition-colors">
  TaskTracker
</a>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-white opacity-90">Welcome, {user.name}</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
              <AvatarFallback className="bg-yellow-300 text-yellow-800">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <a
           href="/"  // Replace with your actual logout route
           className="text-white hover:bg-pink-700 hover:text-white p-2 rounded-full"
            >
            <LogOut className="h-5 w-5" />
          <span className="sr-only">Logout</span>
           </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {isAdmin ? <AdminDashboard /> : <UserDashboard />}
        </div>
      </main>
    </div>
  )
}
