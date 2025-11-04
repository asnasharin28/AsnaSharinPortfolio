import { motion } from "framer-motion";

const projects = [
  {
    title: "Tableau Sales Dashboard",
    link: "#",
    image: "/tableauproj.png",
    description:
      "Designed an interactive Tableau dashboard visualizing regional and product-wise sales trends for quick business insights.",
  },
  {
    title: "SQL Data Analysis Project",
    link: "#",
    image: "/sqlproject.jpg",
    description:
      "Queried, filtered, and aggregated large datasets using SQL to uncover key performance metrics and business patterns.",
  },
   {
    title: "Excel Data Cleaning Project",
    link: "#",
    image: "/excelproj.jpg",
    description:
      "Cleaned and structured messy datasets using Excel formulas, filters, and pivot tools to make data ready for analysis.",
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white relative overflow-hidden py-24"
    >
      {/* Background glow effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Decorative Divider Line (glow effect at top) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        {/* Title */}
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A curated selection of my recent data analysis projects, including dashboards,
           reports, and advanced data explorations. 
           Each project showcases my expertise in transforming complex datasets into actionable 
           insights that drive informed business decisions.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/40 transition transform hover:-translate-y-2 aspect-square min-h-[340px] min-w-[340px] flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              {/* Project Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 absolute inset-0"
              />
              {/* Text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-gray-300 text-sm italic">
                  {p.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
