export default function BusinessServices() {
  const services = [
    {
      title: "AgentBox",
      subtitle: "For travel agents",
      description:
        "One-stop travel solution offering the best deals to our travel agency partners.",
    },
    {
      title: "OutOfOffice",
      subtitle: "For startups, corporates and SMEs",
      description: "Manage corporate business travel, smartly.",
    },
    {
      title: "MICE",
      subtitle: "For corporate events",
      description:
        "An end-to-end management solution for all your corporate events.",
    },
    {
      title: "API",
      subtitle: "For developers",
      description:
        "Unlock seamless integration and scale with our powerful, reliable APIs.",
    },
  ];

  return (
    <div className="bg-[#fff5f2] py-10 px-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">Other business services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <span className="text-xl">➔</span>
            </div>
            <p className="text-sm text-gray-500 font-medium mt-1">{item.subtitle}</p>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
