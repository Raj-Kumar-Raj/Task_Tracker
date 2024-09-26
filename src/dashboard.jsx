import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./component/Card.jsx"
import { Progress } from "./component/Progress.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "./component/Avatar.jsx"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./component/Accordion.jsx"
import { CheckCircle2, Circle, BarChart2, Users, TrendingUp ,LogOut} from "./Icons/Icon.jsx"
import './global.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Dashboard1() {
  const employees = [
    {
      name: "Raj Kumar Raj ",
      tasksCompleted: 23,
      totalTasks: 30,
      tasks: [
        { id: 1, title: "Complete project proposal", deadline: "2023-06-15", status: "completed" },
        { id: 2, title: "Review client feedback", deadline: "2023-06-20", status: "in-progress" },
        { id: 3, title: "Update website content", deadline: "2023-06-25", status: "not-started" },
      ]
    },
    {
      name: "Raushan raj ",
      tasksCompleted: 18,
      totalTasks: 25,
      tasks: [
        { id: 4, title: "Prepare monthly report", deadline: "2023-06-30", status: "in-progress" },
        { id: 5, title: "Client meeting preparation", deadline: "2023-07-05", status: "not-started" },
        { id: 6, title: "Update team documentation", deadline: "2023-07-10", status: "completed" },
      ]
    },
    {
      name: "yash raj ",
      tasksCompleted: 15,
      totalTasks: 20,
      tasks: [
        { id: 7, title: "Code review for new feature", deadline: "2023-06-18", status: "completed" },
        { id: 8, title: "Bug fixes for release", deadline: "2023-06-22", status: "in-progress" },
        { id: 9, title: "Team training session", deadline: "2023-06-28", status: "not-started" },
      ]
    },
    {
      name: "Neha",
      tasksCompleted: 20,
      totalTasks: 22,
      tasks: [
        { id: 10, title: "Client presentation", deadline: "2023-06-16", status: "completed" },
        { id: 11, title: "Project timeline update", deadline: "2023-06-21", status: "in-progress" },
        { id: 12, title: "Resource allocation review", deadline: "2023-06-26", status: "not-started" },
      ]
    },
    {
      name: "Amit",
      tasksCompleted: 12,
      totalTasks: 18,
      tasks: [
        { id: 13, title: "Security audit", deadline: "2023-06-19", status: "in-progress" },
        { id: 14, title: "Team performance reviews", deadline: "2023-06-24", status: "not-started" },
        { id: 15, title: "Vendor contract negotiation", deadline: "2023-06-29", status: "completed" },
      ]
    },
  ]


  
    const navigate = useNavigate();
  
    const handleRedirect = () => {
      navigate('/create-employee');
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-white hover:text-yellow-200 transition-colors">
  TaskTracker
</a>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-white opacity-90">Welcome, Admin</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
              <AvatarFallback className="bg-yellow-300 text-yellow-800">AD</AvatarFallback>
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card className="bg-gradient-to-br from-green-400 to-cyan-500 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                <BarChart2 className="h-4 w-4 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">115</div>
                <p className="text-xs opacity-70">across all employees</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-500 to-orange-400 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">88</div>
                <p className="text-xs opacity-70">+15% from last week</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-white" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76.5%</div>
                <p className="text-xs opacity-70">+7.2% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-purple-800">Employee Progress</h2>
            <button
            onClick={handleRedirect}
             className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             >
              Create Employee
            </button><br></br><br></br>
            <div className="grid grid-cols-1 gap-6">
              {employees.map((employee, index) => (
                <Card key={employee.name} className="overflow-hidden bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={employee.name} className="border-b-0">
                        <AccordionTrigger className="px-6 py-4 hover:bg-purple-50 transition-colors">
                          <div className="flex items-center w-full">
                            <Avatar className="h-12 w-12 mr-4">
                              <AvatarFallback className={`text-white ${
                                index % 5 === 0 ? "bg-pink-500" :
                                index % 5 === 1 ? "bg-purple-500" :
                                index % 5 === 2 ? "bg-blue-500" :
                                index % 5 === 3 ? "bg-green-500" :
                                "bg-yellow-500"
                              }`}>
                                {employee.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-lg font-medium text-left text-purple-800">{employee.name}</p>
                              <div className="flex items-center mt-2">
                                <Progress 
                                  value={(employee.tasksCompleted / employee.totalTasks) * 100} 
                                  className="h-2 flex-1"
                                  indicatorClassName={`${
                                    index % 5 === 0 ? "bg-pink-500" :
                                    index % 5 === 1 ? "bg-purple-500" :
                                    index % 5 === 2 ? "bg-blue-500" :
                                    index % 5 === 3 ? "bg-green-500" :
                                    "bg-yellow-500"
                                  }`}
                                />
                                <span className="text-sm text-purple-600 ml-4 min-w-[80px] text-right">
                                  {employee.tasksCompleted}/{employee.totalTasks} tasks
                                </span>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="px-6 py-4 bg-purple-50 space-y-4">
                            {employee.tasks.map((task) => (
                              <div key={task.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-purple-100">
                                <div className="flex items-center">
                                  {task.status === 'completed' ? (
                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                                  ) : task.status === 'in-progress' ? (
                                    <Circle className="h-5 w-5 text-yellow-500 mr-2" />
                                  ) : (
                                    <Circle className="h-5 w-5 text-gray-300 mr-2" />
                                  )}
                                  <span className="text-sm font-medium text-purple-800">{task.title}</span>
                                </div>
                                <span className="text-sm text-purple-600">Due: {task.deadline}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
