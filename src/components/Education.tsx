interface EducationItem {
  school: string
  degree: string
  period: string
}

const Education = () => {
  const education: EducationItem[] = [
    {
      school: "FIAP",
      degree: "Post-graduate in Artificial Intelligence",
      period: "Feb 2025 - Feb 2026",
    },
    {
      school: "Anhanguera",
      degree: "Bachelor in Computer Science",
      period: "Jan 2021 - Dec 2024",
    }
  ]

  return (
    <section id="education" className="py-20 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-16 tracking-tight">
        Education
      </h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-zinc-800 hover:border-purple-900/30 transition-colors group">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">
                {edu.school}
              </h3>
              <p className="text-zinc-500 text-lg">{edu.degree}</p>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-1 bg-zinc-800 text-zinc-400 text-sm font-medium rounded-full w-fit">
              {edu.period}
            </div>
          </div>
        ))}
      </div>
      
       {/* Decorative Divider */}
      <div className="mt-20 border-t border-zinc-800"></div>
    </section>
  )
}

export default Education
