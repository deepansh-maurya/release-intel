"use client";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-800">
      <Navbar />
      <Hero />
      <FeatureCards />
      <CTASection />
    </div>
  );
}


function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-10 py-5">
      <div className="flex items-center gap-2 font-semibold">
        <div className="w-6 h-6 rounded-full bg-blue-500" />
        Release Intel
      </div>

      <nav className="flex items-center gap-8 text-sm text-slate-600">
        <a>Features</a>
        <a>Pricing</a>
        <a>Docs</a>
        <a className="text-blue-600 font-semibold">Login</a>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
          Sign Up
        </button>
      </nav>
    </header>
  );
}


function Hero() {
  return (
    <section className="px-10 pt-12 pb-16 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Monitor Deployments.
          <br />
          Mitigate Risks.
        </h1>

        <p className="text-slate-500 max-w-md mb-8">
          Track and assess the impact of each deployment on your production
          environment. Cash insights and make informed decisions.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow">
          Start Protecting Deployments
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src="https://csspicker.dev/api/image/?q=devops+dashboard+illustration&image_type=illustration"
          className="w-full max-w-xl"
        />
      </div>
    </section>
  );
}


function FeatureCards() {
  const items = [
    {
      title: "Automated Deployment Analysis",
      desc: "Track your pipelines to identify real parallel issues."
    },
    {
      title: "Baseline vs. Canary Comparison",
      desc: "Deploy your Canary model and compare outcomes."
    },
    {
      title: "Intelligent Risk Scoring",
      desc: "Stop guesswork. Deploy only when safe."
    }
  ];

  return (
    <section className="px-10 pb-12">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 mb-4" />
            <h3 className="font-semibold mb-2">{i.title}</h3>
            <p className="text-sm text-slate-500">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


function CTASection() {
  return (
    <section className="bg-slate-800 px-10 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-white font-medium">
          Ready to safeguard your deployments?
        </p>

        <div className="flex w-full md:w-auto">
          <input
            placeholder="Email your meesaigner@mail.com"
            className="px-4 py-2 rounded-l-md outline-none w-full md:w-72"
          />
          <button className="bg-blue-600 text-white px-5 rounded-r-md font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
