
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MeetingRegistrationForm from '../../components/forms/MeetingRegistrationForm';

export default function AgendaPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    title: '',
    date: '',
    submitUrl: '',
  });

  // Modal state (added for completeness)
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  // Events data
  const events = [
    {
      id: 1,
      title: "THE AFRICA ECONOMIC FORUM 2026",
      date: "February 11-12, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20African%20infrastructure%20development%20conference%20with%20construction%20cranes%2C%20highways%2C%20and%20renewable%20energy%20projects%20in%20background%2C%20professional%20business%20meeting%20atmosphere%20with%20African%20leaders%20and%20international%20investors&width=400&height=300&seq=infra-summit-2026&orientation=landscape",
      description:
        "The world is recalibrating. The old paradigms are shifting, and in this new geopolitical and economic landscape, Africa emerges not as a spectator but as the definitive arena of opportunity. The Africa Economic Forum is the platform where this new reality is forged",
      participants:
        "Government ministers, infrastructure investors, development banks, construction companies, and engineering firms",
      outcomes:
        "This is the strategic launchpad for the year,where we convene at the diplomatic heart of Africa. The Cooperation Summit integrates macroeconomic strategy with the core pillars of sovereignty—fiscal policy, security, energy independence, and food security.",
      submitUrl:
        "https://readdy.ai/api/form/infrastructure-summit-registration",
    },
    {
      id: 2,
      title: "Event: Africa Mining & Minerals Forum",
      date: "March 22-23, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "https://readdy.ai/api/search-image?query=African%20technology%20innovation%20conference%20with%20digital%20screens%2C%20coding%20displays%2C%20and%20modern%20tech%20startup%20atmosphere%2C%20young%20African%20entrepreneurs%20presenting%20digital%20solutions%20and%20fintech%20innovations&width=400&height=300&seq=digital-africa-2026&orientation=landscape",
      description:
        "Africa's minerals are the bedrock of the global energy transition.This forum is dedicated to moving the continent from mere extraction to value-chain dominance.We focus on local beneficiation, ESG-compliant mining, and financing mineral processing plants.",
      participants:
        "Tech entrepreneurs, fintech companies, telecommunications providers, and digital payment platforms",
      outcomes:
        "Key Outcomes: Mine-to-Manufacture Joint Ventures, ESG Compliance & Green Mining Agreements, Critical Minerals Supply Contracts.",
      submitUrl:
        "https://readdy.ai/api/form/digital-forum-registration",
    },
    {
      id: 3,
      title: "Africa Energy & Infrastructures Forum",
      date: "May 20-21, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "https://readdy.ai/api/search-image?query=African%20renewable%20energy%20conference%20with%20solar%20panels%2C%20wind%20turbines%2C%20and%20clean%20energy%20infrastructure%2C%20professional%20summit%20with%20energy%20ministers%20and%20green%20technology%20investors%20in%20modern%20conference%20setting&width=400&height=300&seq=energy-transition-2026&orientation=landscape",
      description:
        "Energy and infrastructure are the non-negotiable backbones of economic sovereignty.This forum is a dedicated deal-making hub for bankable projects in power, transport, and digital infrastructure.We showcase integrated projects—from renewable energy mega-grids and smart cities to ports and fibre-optic networks—to a global audience",
      participants:
        "Energy ministers, renewable energy companies, oil and gas executives, and climate finance institutions",
      outcomes:
        "Key Outcomes: Signed Power Purchase Agreements (PPAs), Infrastructure PPP Contracts, Project Financing Closes.",
      submitUrl:
        "https://readdy.ai/api/form/energy-conference-registration",
    },
    {
      id: 4,
      title: "Africa Tech Forum",
      date: "May 25-27, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "https://readdy.ai/api/search-image?query=African%20manufacturing%20and%20trade%20exhibition%20with%20industrial%20machinery%2C%20textile%20production%2C%20and%20agricultural%20processing%20equipment%2C%20business%20leaders%20discussing%20trade%20agreements%20in%20modern%20expo%20center&width=400&height=300&seq=trade-expo-2026&orientation=landscape",
      description:
        "Africa's tech revolution is reshaping its economic destiny.This forum is a dynamic, high-energy showcase of innovation, from FinTech and EdTech to HealthTech and CleanTech.It is designed as a massive platform for startups to pitch to global VCs, for corporates to find tech solutions, and for governments to articulate their digital economy strategies.",
      participants:
        "Trade ministers, manufacturers, exporters, logistics companies, and trade finance institutions",
      outcomes:
        "Key Outcomes: Venture Capital Funding Rounds, Tech Startup Acquisitions, Government Tech Procurement Deals.",
      submitUrl: "https://readdy.ai/api/form/trade-expo-registration",
    },
    {
      id: 5,
      title: " Africa Wealth Forum",
      date: "July 15-16, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "https://readdy.ai/api/search-image?query=African%20banking%20and%20financial%20services%20conference%20with%20modern%20banking%20technology%2C%20mobile%20payment%20systems%2C%20and%20financial%20inclusion%20initiatives%2C%20professional%20bankers%20and%20fintech%20leaders%20in%20elegant%20conference%20hall&width=400&height=300&seq=financial-summit-2026&orientation=landscape",
      description:
        "SThis is Africa's premier gathering for the guardians of capital.The Wealth Forum is where African pension funds, sovereign wealth funds, and family offices meet global private equity, venture capital, and asset managers.trengthening Africa's financial ecosystem through banking innovation, capital market development, and financial inclusion initiatives.",
      participants:
        "Central bank governors, commercial banks, investment funds, insurance companies, and fintech startups",
      outcomes:
        "Financial sector reforms, capitaKey Outcomes: Fund Launches, Capital Commitments to African-focused Funds, Direct Family Office Investments.l market integration, and financial inclusion programs",
      submitUrl:
        "https://readdy.ai/api/form/financial-summit-registration",
    },
    {
      id: 6,
      title: "Africa Agriculture & Food Security Forum",
      date: "June 17-18, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "https://readdy.ai/api/search-image?query=African%20agriculture%20modernization%20conference%20with%20advanced%20farming%20technology%2C%20irrigation%20systems%2C%20and%20food%20processing%20facilities%2C%20agricultural%20ministers%20and%20agribusiness%20leaders%20discussing%20food%20security%20solutions&width=400&height=300&seq=agriculture-forum-2026&orientation=landscape",
      description:
        "This forum is dedicated to transforming Africa into the world's next breadbasket.We focus on integrating smallholder farmers into global value chains through cutting-edge technology and innovative finance.",
      participants:
        "Agriculture ministers, agribusiness companies, farmers' cooperatives, and agricultural technology providers",
      outcomes:
        "Agricultural investment commitmeKey Outcomes: Long-term Off-take Agreements, AgTech Deployment Contracts, Investments in Processing and Logistics Infrastructure.nts, technology transfer agreements, and food security partnerships",
      submitUrl:
        "https://readdy.ai/api/form/agriculture-forum-registration",
    },
    {
      id: 7,
      title: "Africa Health Forum",
      date: "Octuber 21-22, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "https://readdy.ai/api/search-image?query=African%20healthcare%20innovation%20conference%20with%20modern%20medical%20equipment%2C%20telemedicine%20technology%2C%20and%20pharmaceutical%20research%20facilities%2C%20healthcare%20professionals%20and%20medical%20technology%20companies%20in%20state-of-the-art%20conference%20center&width=400&height=300&seq=healthcare-summit-2026&orientation=landscape",
      description:
        "A healthy population is the core of economic productivity and sovereignty.This forum addresses Africa's healthcare infrastructure gap and its burgeoning pharmaceutical market. It brings together hospital groups, pharma manufacturers, medical tech companies, and impact investors to forge partnerships",
      participants:
        "Health ministers, pharmaceutical companies, medical device manufacturers, and healthcare technology providers",
      outcomes:
        "Key Outcomes: Hospital Construction and Management Contracts, Pharmaceutical Manufacturing Joint Ventures, Health Tech Platform Investments.",
      submitUrl:
        "https://readdy.ai/api/form/healthcare-summit-registration",
    },
    {
      id: 8,
      title: " AEF Grand Finale & Global Inspiration Awards",
      date: "December 09-10, 2026",
      location: "Dubai, UAE (A Global Nexus for Africa)",
      image:
        "https://readdy.ai/api/search-image?query=African%20education%20technology%20conference%20with%20digital%20learning%20platforms%2C%20modern%20classrooms%2C%20and%20skills%20training%20centers%2C%20education%20ministers%20and%20edtech%20companies%20discussing%20educational%20innovation%20and%20workforce%20development&width=400&height=300&seq=education-conference-2026&orientation=landscape",
      description:
        "The culminating event of the AEF journey.This is not a talking shop but a grand celebration of the year's achievements and a look ahead to 2027. The centerpiece is the launch of the AEF 2026 Deal Book, a comprehensive portfolio of partnerships and investments initiated through our forums.",
      participants:
        "Education ministers, universities, vocational training institutes, and educational technology companies",
      outcomes:
        "Key Outcomes: Signature of Major Cross-Sectoral Deals, Launch of the Annual Deal Book, Recognition of Global Changemakers, Strategic Vision for 2027.",
      submitUrl:
        "https://readdy.ai/api/form/education-conference-registration",
    },
    {
      id: 9,
      title: "Africa Tourism & Trade Forum",
      date: "September 16-17, 2026",
      location: "To be announced — Forum Host Country Partner",
      image:
        "https://readdy.ai/api/search-image?query=African%20tourism%20and%20hospitality%20conference%20with%20luxury%20safari%20lodges%2C%20cultural%20heritage%20sites%2C%20and%20eco-tourism%20destinations%2C%20tourism%20ministers%20and%20hospitality%20industry%20leaders%20in%20elegant%20Moroccan%20conference%20venue&width=400&height=300&seq=tourism-forum-2026&orientation=landscape",
      description:
        "This forum is dedicated to selling the African experience to the world and dismantling barriers to intra-African trade.We target global hotel chains, airlines, tour operators, and retail giants, focusing on high-value tourism (eco, cultural, luxury) and the practical implementation of the AfCFTA.",
      participants:
        "Tourism ministers, hotel chains, tour operators, airlines, and tourism technology companies",
      outcomes:
        "Key Outcomes: Hotel Management and Development Agreements, New Air Route Launches, Cross-border Trade and Retail Partnerships.",
      submitUrl:
        "https://readdy.ai/api/form/tourism-forum-registration",
    },
    
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsProfileDropdownOpen(false);
  };

  const handleViewProfile = () => {
    navigate("/profile");
    setIsProfileDropdownOpen(false);
  };

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase();
  };

  // Dummy handlers (replace with real implementations)
  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement sign‑in logic here
    setShowSignInModal(false);
  };

  const handleCreateAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement create‑account logic here
    setShowSignInModal(false);
  };

  const switchToCreateAccount = () => setShowCreateAccount(true);
  const switchToSignIn = () => setShowCreateAccount(false);

  // Filter events based on selected category
  // NOTE: The current data set does not contain a `category` field.
  // This guard ensures the code does not break if `category` is undefined.
  const filteredEvents = selectedCategory === "all"
    ? events
    : events.filter((event) => (event as any).category === selectedCategory);

  const openEventDetails = (event: any) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleRegister = (event: any, submitUrl: string) => {
    setRegistrationData({
      title: event.title,
      date: event.date,
      submitUrl: submitUrl,
    });
    setIsRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationOpen(false);
    setRegistrationData({
      title: "",
      date: "",
      submitUrl: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://static.readdy.ai/image/849a2f489cee8d6814d30c5afad3a84a/55c329d4d58fb687f70c222c549f7ec1.png"
                  alt="AEF Logo"
                  className="w-10 h-10 object-contain"
                />
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/initiatives"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Initiatives
              </Link>
              <Link
                to="/stakeholders"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Stakeholders
              </Link>
              <Link
                to="/agenda"
                className="text-teal-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-600"
              >
                Agenda
              </Link>
              <Link
                to="/publications"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Publications
              </Link>
              <Link
                to="/meetings"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Meetings
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsProfileDropdownOpen(!isProfileDropdownOpen)
                    }
                    className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title={user.user_metadata?.full_name || user.email}
                  >
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {getInitials(
                          user.user_metadata?.full_name ||
                            user.email?.charAt(0) ||
                            "U"
                        )}
                      </div>
                    )}
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                        <div className="font-medium">
                          {user.user_metadata?.full_name || "User"}
                        </div>
                        <div className="text-gray-500">{user.email}</div>
                      </div>
                      <button
                        onClick={handleViewProfile}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 whitespace-nowrap cursor-pointer"
                >
                  Sign In
                </Link>
              )}
            </div>

            <button
              className="md:hidden p-2 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <i
                className={`ri-${isMobileMenuOpen ? "close" : "menu"}-line text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/initiatives"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Initiatives
              </Link>
              <Link
                to="/stakeholders"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stakeholders
              </Link>
              <Link
                to="/agenda"
                className="block px-3 py-2 text-base font-medium text-teal-600 bg-teal-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </Link>
              <Link
                to="/publications"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publications
              </Link>
              <Link
                to="/meetings"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Meetings
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 pb-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 px-3 py-2">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {getInitials(
                            user.user_metadata?.full_name ||
                              user.email?.charAt(0) ||
                              "U"
                          )}
                        </div>
                      )}
                      <span className="text-gray-700 font-medium">
                        {user.user_metadata?.full_name || "User"}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        handleViewProfile();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium mb-2"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/signin"
                    className="w-full bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20conference%20agenda%20with%20African%20leaders%20and%20international%20delegates%20presenting%20on%20stage%2C%20large%20audience%20in%20modern%20conference%20hall%20with%20presentation%20screens%20and%20formal%20diplomatic%20setting&width=1920&height=800&seq=agenda-hero-2026&orientation=landscape')`,
        }}
      >
        <div className="relative max-w-7xl mx-auto px4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">2026 Strategic Agenda</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            A year of transformational forums designed to produce tangible outcomes,
            strategic partnerships, and actionable solutions for Africa's economic
            sovereignty.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer">
            Download Full Agenda
          </button>
        </div>
      </section>

      {/* ...other page sections omitted for brevity... */}

      {/* 2026 Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              THE 2026 JOURNEY: A YEAR OF STRATEGIC ACTION
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive year-long program of sector-specific forums designed
              to produce tangible outcomes and strategic partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date.split(",")[0]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span className="text-sm">{event.location}</span>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Target Participants:
                    </h4>
                    <p className="text-gray-600 text-sm">{event.participants}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      Expected Outcomes:
                    </h4>
                    <p className="text-gray-600 text-sm">{event.outcomes}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium text-sm whitespace-nowrap cursor-pointer"
                    >
                      Learn More
                    </button>
                    <button
                      onClick={() =>
                        handleRegister(event, event.submitUrl)
                      }
                      className="border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50 font-medium text-sm whitespace-nowrap cursor-pointer"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join The African Table</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of the conversations that are shaping Africa's economic
            future. Join us for a year of strategic action, deal‑making, and
            transformational partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 font-medium whitespace-nowrap cursor-pointer"
            >
              Become a Strategic Partner
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-900 font-medium whitespace-nowrap cursor-pointer">
              Download 2026 Program
            </button>
          </div>
        </div>
      </section>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {showCreateAccount ? "Create Account" : "Sign In"}
                </h3>
                <button
                  onClick={() => setShowSignInModal(false)}
                  className="text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {!showCreateAccount ? (
                <>
                  <form onSubmit={handleSignInSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="remember_me"
                          className="cursor-pointer"
                        />
                        <span className="text-sm text-gray-600">
                          Remember me
                        </span>
                      </label>
                      <button
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Sign In
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?
                      <button
                        onClick={switchToCreateAccount}
                        className="text-blue-600 hover:text-blue-800 font-medium ml-1 cursor-pointer"
                      >
                        Create Account
                      </button>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <form
                    onSubmit={handleCreateAccountSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        placeholder="Create a password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 font-medium whitespace-nowrap cursor-pointer"
                    >
                      Create Account
                    </button>
                  </form>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?
                      <button
                        onClick={switchToSignIn}
                        className="text-blue-600 hover:text-blue-800 font-medium ml-1 cursor-pointer"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </>
              )}

              {!showCreateAccount && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-google-fill text-red-500 text-lg"></i>
                      <span className="ml-2">Google</span>
                    </button>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer">
                      <i className="ri-linkedin-fill text-blue-600 text-lg"></i>
                      <span className="ml-2">LinkedIn</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg mb-6">About us</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our mission</Link></li>
                <li><Link to="/framework" className="text-gray-300 hover:text-white cursor-pointer">Our Institutional Framework</Link></li>
                <li><Link to="/history" className="text-gray-300 hover:text-white cursor-pointer">History</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Leadership and governance</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Our Impact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">More from the Forum</h3>
              <ul className="space-y-3">
                <li><Link to="/initiatives" className="text-gray-300 hover:text-white cursor-pointer">Centres</Link></li>
                <li><Link to="/meetings" className="text-gray-300 hover:text-white cursor-pointer">Meetings</Link></li>
                <li><Link to="/stakeholders" className="text-gray-300 hover:text-white cursor-pointer">Stakeholders</Link></li>
                <li><Link to="/agenda" className="text-gray-300 hover:text-white cursor-pointer">Forum Stories</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Press releases</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-white cursor-pointer">Photo gallery</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Podcasts</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white cursor-pointer">Videos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Engage with us</h3>
              <ul className="space-y-3">
                <li>
                  {user ? (
                    <button onClick={handleSignOut} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 whitespace-nowrap cursor-pointer">
                      Logout
                    </button>
                  ) : (
                    <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                      Sign in
                    </Link>
                  )}
                </li>
                <li><Link to="/partners" className="text-gray-300 hover:text-white cursor-pointer">Partner with us</Link></li>
                <li><Link to="/join" className="text-gray-300 hover:text-white cursor-pointer">Become a member</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Sign up for our press releases</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Subscribe to our newsletters</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick links</h3>
              <ul className="space-y-3 mb-8">
                <li><Link to="/about" className="text-gray-300 hover:text-white cursor-pointer">Sustainability at the Forum</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-white cursor-pointer">Careers</Link></li>
              </ul>
              <div>
                <h4 className="font-semibold mb-4">Language editions</h4>
                <div className="flex space-x-2">
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">PT</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">EN</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">ES</Link>
                  <span className="text-gray-500">•</span>
                  <Link to="/" className="text-gray-300 hover:text-white cursor-pointer">FR</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/17Jr8NpqZJ/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/the-africa-economic-forum/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="https://www.instagram.com/theafricaeconomicforum?igsh=MWowNmw1NjdueXNkbQ==" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <i className="ri-youtube-fill text-xl"></i>
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-white cursor-pointer">Privacy Policy &amp; Terms of Service</Link>
                
                <p>© 2025 Africa Economic Forum</p>
                <a href="https://codesignglobal.com" className="hover:text-white cursor-pointer">Code Design Global</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Meeting Registration Form */}
      <MeetingRegistrationForm
        isOpen={isRegistrationOpen}
        onClose={closeRegistration}
        meetingTitle={registrationData.title}
        meetingDate={registrationData.date}
        submitUrl={registrationData.submitUrl}
      />
    </div>
  );
}
