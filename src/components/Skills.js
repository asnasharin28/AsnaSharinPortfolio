import React from "react";

// Array of skills with image file names
const skills = [
   { name: "Python", color: "bg-yellow-100", icon: "python.png" },        
  { name: "SQL", color: "bg-teal-100", icon: "database.png" },               
  { name: "Excel", color: "bg-green-100", icon: "excel.png" },          
  { name: "Pandas", color: "bg-gray-100", icon: "pandas.png" },         
  { name: "Numpy", color: "bg-blue-50", icon: "numpy.png" },            
  { name: "Power BI", color: "bg-yellow-50", icon: "powerbi.png" },     
  { name: "Tableau", color: "bg-orange-50", icon: "tableau.png" },      
  { name: "Cloud (Azure)", color: "bg-amber-100", icon: "cloud.png" },
  { name: "Git & Github", color: "bg-stone-100", icon: "github.png" }, 
  { name: "Javascript", color: "bg-amber-50", icon: "javascript.png" },   
  { name: "Bootstrap", color: "bg-violet-50", icon: "bootstrap.png" },  
  { name: "WordPress", color: "bg-blue-100", icon: "wordpress.png" },
    
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center">
      <section className="w-full max-w-3xl p-10 rounded-xl shadow-2xl bg-gray-900 bg-opacity-90 mt-10 mb-10">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          My <span className="text-cyan-400">Skills</span>
        </h1>
        <p className="text-gray-300 mb-10 text-lg">
          My toolbox for delivering smart, data-driven solutions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`flex flex-col items-center p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ${skill.color} bg-opacity-80`}
            >
              <img
                src={require(`../assets/icons/${skill.icon}`)}
                alt={skill.name}
                className="w-12 h-12 mb-3 object-contain"
              />
              <span className="text-xl font-semibold text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
