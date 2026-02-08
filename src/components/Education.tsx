import { GraduationCap } from 'lucide-react'

interface EducationItem {
  school: string
  degree: string
  period: string
  status: string
}

const Education = () => {
  const education: EducationItem[] = [
    {
      school: "FIAP",
      degree: "Post-graduate in Artificial Intelligence",
      period: "Feb 2025 - Feb 2026",
      status: "In Progress"
    },
    {
      school: "Anhanguera",
      degree: "Bachelor using Computer Science",
      period: "Jan 2021 - Dec 2024",
      status: "Completed"
    }
  ]

  return (
    <section id="education" className="py-20 scroll-mt-20">
       <div className="flex items-center gap-4 mb-12">
        <div className="h-px bg-gray-200 flex-1"></div>
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-orange-100 transition-colors">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{edu.school}</h3>
              <p className="text-gray-600 mb-2">{edu.degree}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">{edu.period}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-orange-600 font-medium">{edu.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
