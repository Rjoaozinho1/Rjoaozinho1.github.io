interface EducationItem {
  school: string
  degree: string
  period: string
}

interface CertificationItem {
  title: string
  issuer: string
  period: string
  credentialUrl?: string
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

  const certifications: CertificationItem[] = [
    {
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      period: "Jul 2026",
      credentialUrl: "https://www.credly.com/badges/4b76af2d-6fd9-440c-b230-9681e458b5ef/public_url",
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

      <h3 className="text-xl font-bold text-zinc-100 mt-16 mb-6">
        Certifications
      </h3>

      <div className="flex flex-wrap gap-3">
        {certifications.map((cert, index) => {
          const CardTag = cert.credentialUrl ? 'a' : 'div'
          return (
            <CardTag
              key={index}
              {...(cert.credentialUrl
                ? { href: cert.credentialUrl, target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="flex items-center gap-3 px-5 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-purple-900/30 transition-colors group"
            >
              <div className="space-y-0.5">
                <p className="text-zinc-100 font-medium group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </p>
                <p className="text-zinc-500 text-sm">{cert.issuer}</p>
              </div>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-400 text-xs font-medium rounded-full whitespace-nowrap">
                {cert.period}
              </span>
            </CardTag>
          )
        })}
      </div>

       {/* Decorative Divider */}
      <div className="mt-20 border-t border-zinc-800"></div>
    </section>
  )
}

export default Education
