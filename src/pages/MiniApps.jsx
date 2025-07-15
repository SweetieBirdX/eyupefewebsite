import { Link } from "react-router-dom";

const miniApps = [
  {
    title: "To-Do List",
    image: "/images/todolist.png",
    description: "Track your daily tasks, mark them as completed or delete as you go!",
    route: "/todolist",
    buttonColor: "gradient",
  },
  {
    title: "Coming Soon App 1",
    image: "/images/placeholder1.png",
    description: "This app will be available soon. Stay tuned!",
    route: "/comingsoon",
    buttonColor: "gradient",
  },
  {
    title: "Coming Soon App 2",
    image: "/images/placeholder2.png",
    description: "Another amazing app coming your way soon!",
    route: "/comingsoon",
    buttonColor: "gradient",
  },
];

export default function MiniApps() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 sm:p-10 text-white">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 sm:mb-12">Mini Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {miniApps.map((app, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden text-black flex flex-col"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-bold mb-2">{app.title}</h2>
              <p className="text-gray-700 text-base sm:text-lg">{app.description}</p>
            </div>
            <div className="p-4">
              <Link to={app.route}>
                <button className="w-full text-white font-bold py-2 px-4 rounded-md bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 transition duration-300 ease-in-out hover:brightness-110">
                  Go App
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
