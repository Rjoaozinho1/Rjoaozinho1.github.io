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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 tracking-tight">
        Education
      </h2>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-100 hover:border-orange-100 transition-colors group">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                {edu.school}
              </h3>
              <p className="text-gray-500 text-lg">{edu.degree}</p>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-1 bg-gray-50 text-gray-600 text-sm font-medium rounded-full w-fit">
              {edu.period}
            </div>
          </div>
        ))}
      </div>
      
       {/* Decorative Divider */}
      <div className="mt-20 border-t border-gray-100"></div>
    </section>
  )
}

export default Education
