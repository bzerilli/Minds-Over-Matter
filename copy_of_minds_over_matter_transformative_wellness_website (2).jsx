export default function MindsOverMatterWebsite() {
  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#1B2A2F] font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1EA] via-[#F6F1EA]/90 to-transparent z-10" />

        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
          alt="Wellness and mental clarity"
          className="w-full h-[750px] object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center px-8 md:px-20">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#B68A35] flex items-center justify-center text-3xl font-serif text-[#B68A35]">
                Z
              </div>
              <div>
                <h2 className="text-sm tracking-[0.3em] uppercase text-[#B68A35]">
                  Wellness & Health Coaching
                </h2>
              </div>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-wide">
                Minds Over Matter
              </h1>
              <p className="mt-4 text-lg md:text-2xl tracking-[0.25em] uppercase text-[#B68A35]">
                Wellness. Mental Clarity. Inner Strength.
              </p>
            </div>

            <div className="space-y-6 text-lg leading-8 max-w-xl text-[#2C3A3F]">
              <p>
                Wellness begins in the minds. Transformation lasts a lifetime.
              </p>
              <p>
                Minds Over Matter is a transformative wellness coaching company dedicated to helping individuals elevate their mental clarity, emotional resilience, and physical well-being.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-[#1B2A2F] text-white rounded-full hover:opacity-90 transition text-sm tracking-widest uppercase">
                Book a Consultation
              </button>

              <button className="px-8 py-4 border border-[#1B2A2F] rounded-full hover:bg-[#1B2A2F] hover:text-white transition text-sm tracking-widest uppercase">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-8 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#B68A35] text-sm mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Mental clarity fuels everything.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-[#425158]">
              <p>
                We help clients overcome stress, burnout, overwhelm, and limiting beliefs through transformational coaching designed to support the mind, body, and lifestyle.
              </p>

              <p>
                Through mindset mastery, wellness optimization, and intentional self-care, our clients create sustainable habits that lead to confidence, balance, resilience, and long-term vitality.
              </p>
            </div>
          </div>

          <div className="bg-[#1B2A2F] text-white rounded-[40px] p-10 shadow-2xl">
            <h3 className="text-3xl font-serif mb-8 text-[#E3C27A]">
              Our Focus
            </h3>

            <div className="space-y-6 text-lg">
              <div className="border-b border-white/20 pb-4">
                Mental Clarity & Focus
              </div>
              <div className="border-b border-white/20 pb-4">
                Stress Management
              </div>
              <div className="border-b border-white/20 pb-4">
                Wellness Optimization
              </div>
              <div className="border-b border-white/20 pb-4">
                Self-Care & Confidence
              </div>
              <div>Purpose & Lifestyle Alignment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-8 md:px-20 bg-[#102126] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-[#D6B26A] text-sm mb-4">
              Signature Experiences
            </p>
            <h2 className="text-4xl md:text-6xl font-serif">
              Transformative Wellness Coaching
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mental Clarity Coaching',
                text: 'Clear mental noise, improve focus, and cultivate emotional balance.'
              },
              {
                title: 'Stress & Burnout Recovery',
                text: 'Restore calm, resilience, and sustainable energy for daily life.'
              },
              {
                title: 'Mindset Transformation',
                text: 'Build empowering habits, confidence, and inner strength.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] p-10 hover:bg-white/10 transition"
              >
                <div className="w-14 h-14 rounded-full border border-[#D6B26A] flex items-center justify-center text-[#D6B26A] mb-8 text-xl font-serif">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-serif mb-4">
                  {service.title}
                </h3>

                <p className="text-white/80 leading-7">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-8 md:px-20 bg-[#F6F1EA]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-[#B68A35] text-sm mb-6">
            Mission & Vision
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-10">
            Empowered minds. Elevated living.
          </h2>

          <p className="text-xl leading-10 text-[#425158] max-w-4xl mx-auto">
            Our mission is to empower individuals to achieve lasting wellness, mental clarity, and balanced living through transformative health coaching, mindset mastery, and intentional self-care.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-20 bg-[#1B2A2F] text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Your mind is your greatest wellness tool.
          </h2>

          <p className="text-xl text-white/80 leading-9 mb-10">
            Train it. Trust it. Transform it.
          </p>

          <button className="px-10 py-5 bg-[#D6B26A] text-[#1B2A2F] rounded-full text-sm tracking-[0.2em] uppercase hover:opacity-90 transition">
            Start Your Transformation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#102126] text-white/70 py-10 px-8 md:px-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-white">
              Minds Over Matter
            </h3>
            <p className="mt-2 text-sm tracking-[0.2em] uppercase">
              Wellness • Mental Clarity • Inner Strength
            </p>
          </div>

          <div className="text-sm">
            © 2026 Minds Over Matter Wellness. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
