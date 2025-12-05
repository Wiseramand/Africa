export interface Forum {
  id: number;
  title: string;
  description: string;
  image: string;
  overview: string;
  keyAreas: string[];
  objectives?: string[];
  pillars?: { title: string; items: string[] }[];
}

export const forumsData: Forum[] = [
  {
    id: 1,
    title: "Africa Agriculture & Food Forum (AAFF)",
    description: "Transforming African agriculture from subsistence farming to a modern, productive, and sustainable system.",
    image: "https://readdy.ai/api/search-image?query=Modern%20African%20farmers%20using%20advanced%20agricultural%20technology%20in%20vast%20green%20farmlands%20with%20irrigation%20systems%2C%20tractors%2C%20and%20sustainable%20farming%20practices%2C%20bright%20sunny%20day%2C%20professional%20photography%20style&width=400&height=250&seq=agri1&orientation=landscape",
    overview: "The Agriculture and Food Security Forum addresses one of Africa's most critical development challenges and opportunities. Despite possessing over 60% of the world's uncultivated arable land, Africa continues to face persistent food insecurity and agricultural productivity issues. This forum serves as a dedicated platform to transform African agriculture from subsistence farming to a modern, productive, and sustainable system that can ensure food security for the continent's growing population while creating economic prosperity. The forum aligns with the African Union's Comprehensive Africa Agriculture Development Programme (CAADP) and focuses on promoting agricultural innovation, sustainable practices, value chain development, and investment in agribusiness.",
    keyAreas: [
      "Modernizing farming practices through adoption of advanced technologies, precision agriculture, and climate-resilient techniques",
      "Developing integrated value chains that connect smallholder farmers to markets, processing facilities, and distribution networks",
      "Promoting sustainable land management and water conservation practices to preserve Africa's agricultural resources",
      "Facilitating investment in agricultural infrastructure, processing facilities, and storage capabilities to reduce post-harvest losses",
      "Advancing policy reforms that support agricultural development, cross-border trade, and private sector investment"
    ]
  },
  {
    id: 2,
    title: "Africa Energy & Infrastructure Forum",
    description: "Mobilizing capital and expertise to build world-class infrastructure that connects Africa and drives economic growth.",
    image: "https://readdy.ai/api/search-image?query=Modern%20African%20infrastructure%20development%20with%20highways%2C%20bridges%2C%20and%20construction%20projects%2C%20heavy%20machinery%20and%20engineering%20equipment%2C%20professional%20construction%20workers%20in%20safety%20gear%2C%20contemporary%20African%20cityscape&width=400&height=250&seq=infra1&orientation=landscape",
    overview: "The Infrastructure Investment Forum is designed to address Africa's massive infrastructure deficit, which is estimated to require over $130 billion annually. This forum brings together governments, development finance institutions, private investors, and infrastructure companies to unlock the capital needed for transformational projects across the continent. The forum focuses on transportation networks, energy systems, telecommunications infrastructure, and urban development projects that will connect African markets, reduce trade costs, and improve quality of life for millions of people.",
    keyAreas: [
      "Transportation infrastructure including highways, railways, ports, and airports to enhance regional connectivity",
      "Energy infrastructure development focusing on renewable energy, grid modernization, and rural electrification",
      "Digital infrastructure expansion including fiber optic networks, data centers, and telecommunications systems",
      "Water and sanitation infrastructure to support urban growth and improve public health outcomes",
      "Public-private partnership models that leverage both public resources and private sector efficiency"
    ]
  },
  {
    id: 3,
    title: "Africa Digital Economy & Tech Forum (ADETF)",
    description: "Accelerating Africa's digital revolution through technology adoption, innovation, and digital skills development.",
    image: "https://readdy.ai/api/search-image?query=African%20technology%20professionals%20working%20with%20computers%20and%20digital%20devices%20in%20modern%20tech%20office%2C%20coding%20and%20software%20development%2C%20diverse%20African%20tech%20workers%2C%20contemporary%20workspace%20with%20multiple%20screens&width=400&height=250&seq=digital1&orientation=landscape",
    overview: "The Digital Transformation Summit addresses Africa's opportunity to leapfrog traditional development stages through digital innovation. With over 650 million mobile phone users and rapidly expanding internet connectivity, Africa is positioned to become a global leader in digital solutions. This forum brings together technology companies, government officials, entrepreneurs, and investors to accelerate digital adoption across sectors including fintech, e-commerce, digital government services, and online education.",
    keyAreas: [
      "Fintech innovation and digital payment systems to increase financial inclusion across the continent",
      "E-commerce platforms and digital marketplaces that connect African businesses to global markets",
      "Digital government services that improve public service delivery and reduce bureaucratic barriers",
      "EdTech solutions that expand access to quality education and digital skills training",
      "Cybersecurity frameworks that protect digital infrastructure and build trust in digital systems"
    ]
  },
  {
    id: 4,
    title: "Africa Mining & Minerals Forum (AMMF)",
    description: "The Africa Mining & Minerals Forum (AMMF) is the continental flagship forum dedicated to mineral sovereignty, strategic cooperation, and the valorization of Africa’s natural resources",
    image: "/images/Africa Mining.jpg",
    overview: "Organized under the aegis of the Africa Economic Forum, this sectoral forum is part of the platform’s broader mission: to build a pan-African economic diplomacy focused on investments, equitable partnerships, and the structural transformation of African economies.Africa holds over 30% of the world’s mineral reserves, yet continues to export mostly unprocessed raw materials. The AMMF aims to reverse this trend by promoting:",
    keyAreas: [
      "Local transformation of resources",
      "Strengthening of regional value chains",
      "And the rise of an integrated, sustainable, and sovereign African extractive ecosystem.",
      "Designed as a permanent platform for sectoral collaboration, the AMMF brings together:",
      "African governments and institutions responsible for mining policies",
      "Investors and financial institutions"
    ]
  },
  {
    id: 5,
    title: "Africa Women Forum (AWF)",
    description: "The Africa Women Forum (AWF) is the flagship platform dedicated to the economic, political, and social empowerment of African women—a critical lever for building a strong, sovereign, and inclusive Africa.",
    image: "/images/africa-women.jpg",
    overview: "This forum brings together women leaders, entrepreneurs, policymakers, innovators, and activists from public, private, civil society, and international sectors to drive strategic partnerships, strengthen capacities, and accelerate investments in projects led by and for women. The AWF places female leadership at the center of governance, innovation, and sustainable development, with a hands-on approach focused on deals, practical outcomes, and transcontinental cooperation.",
    keyAreas: [
      "Promote economic and political leadership of African women at all levels.",
      "Facilitate access to financing for women entrepreneurs and innovators.",
      "Encourage innovative public-private partnerships supporting gender equality.",
      "Support the creation and expansion of women-led businesses.",
      "Highlight inspiring female role models and promote intergenerational knowledge transfer."
    ]
  },
  {
    id: 6,
    title: "Africa Digital Economy and Technology Forum",
    description: "Strengthening financial systems, expanding access to capital, and promoting financial inclusion across Africa.",
    image: "https://readdy.ai/api/search-image?query=African%20banking%20professionals%20and%20financial%20technology%20experts%20in%20modern%20banking%20environment%2C%20mobile%20banking%20and%20digital%20financial%20services%2C%20diverse%20African%20finance%20workers%20with%20computers%20and%20financial%20data&width=400&height=250&seq=finance1&orientation=landscape",
    overview: "The Financial Services Summit addresses the critical role of financial systems in supporting Africa's economic development. With over 400 million adults still lacking access to formal financial services, there is enormous potential to expand financial inclusion through innovative solutions. This forum brings together central bank governors, commercial banks, fintech companies, and development finance institutions to strengthen financial systems and expand access to capital.",
    keyAreas: [
      "Financial inclusion initiatives that bring banking services to underserved populations",
      "Capital market development to mobilize domestic savings for long-term investment",
      "Fintech innovation including mobile money, digital lending, and blockchain applications",
      "Regional financial integration to support cross-border trade and investment",
      "Risk management and regulatory frameworks that ensure financial stability while promoting innovation"
    ]
  },
  {
    id: 7,
    title: "Africa Healthcare & Pharmaceuticals Forum",
    description: "Transforming healthcare delivery through innovation, technology, and sustainable health system strengthening.",
    image: "https://readdy.ai/api/search-image?query=African%20healthcare%20professionals%20using%20modern%20medical%20technology%2C%20doctors%20and%20nurses%20in%20contemporary%20hospital%20setting%2C%20medical%20equipment%20and%20telemedicine%20systems%2C%20diverse%20African%20medical%20staff&width=400&height=250&seq=health1&orientation=landscape",
    overview: "The Healthcare Innovation Forum addresses Africa's healthcare challenges through innovation and technology. With a growing population and increasing burden of both communicable and non-communicable diseases, Africa needs innovative solutions to improve health outcomes while building resilient health systems. This forum brings together health ministers, pharmaceutical companies, medical technology firms, and healthcare investors to accelerate the adoption of innovative healthcare solutions.",
    keyAreas: [
      "Telemedicine and digital health solutions that expand access to healthcare in remote areas",
      "Local pharmaceutical manufacturing to reduce dependence on imported medicines",
      "Health technology innovation including medical devices designed for African contexts",
      "Health system strengthening through improved infrastructure, training, and management systems",
      "Public-private partnerships that leverage private sector innovation to improve public health outcomes"
    ]
  },
  {
    id: 8,
    title: "Africa Education Forum",
    description: "The Africa Digital Economy & Tech Forum (ADETF) is the flagship platform dedicated to Africa’s strategic digital transformation, bringing together governments, tech giants, startups, investment funds, researchers, and regulatory institutions to catalyze local innovation, digital sovereignty, and inclusive connectivity.",
    image: "https://readdy.ai/api/search-image?query=African%20students%20and%20teachers%20using%20modern%20educational%20technology%2C%20digital%20learning%20platforms%20in%20contemporary%20African%20classroom%2C%20diverse%20students%20with%20computers%20and%20tablets%2C%20modern%20educational%20environment&width=400&height=250&seq=education1&orientation=landscape",
    overview: "The Education & Skills Development Conference focuses on building Africa's human capital to support economic transformation. With over 60% of Africa's population under 25, investing in education and skills development is critical for harnessing the demographic dividend. This forum brings together education ministers, universities, vocational training institutes, and EdTech companies to reform education systems and align skills development with economic opportunities.",
    keyAreas: [
      "STEM education and digital literacy programs to prepare students for the digital economy",
      "Vocational and technical education that provides practical skills for emerging industries",
      "Higher education partnerships that build research capacity and innovation ecosystems",
      "Teacher training and professional development to improve education quality",
      "EdTech solutions that expand access to quality education and personalized learning"
    ]
  },
  {
    id: 9,
    title: "Africa Tourism & Trade Forum (ATTF)",
    description: "Positioning Africa as a premier global destination through sustainable tourism development and hospitality excellence.",
    image: "https://readdy.ai/api/search-image?query=African%20tourism%20destinations%20with%20luxury%20safari%20lodges%2C%20cultural%20heritage%20sites%2C%20and%20eco-tourism%20facilities%2C%20tourists%20enjoying%20African%20wildlife%20and%20landscapes%2C%20contemporary%20hospitality%20services&width=400&height=250&seq=tourism1&orientation=landscape",
    overview: "The Tourism & Hospitality Forum focuses on unlocking Africa's vast tourism potential while ensuring sustainable development. Africa's rich cultural heritage, diverse wildlife, and stunning landscapes position the continent as a premier global destination. This forum brings together tourism ministers, hotel chains, tour operators, and conservation organizations to develop sustainable tourism strategies that create jobs, preserve natural resources, and showcase Africa's beauty to the world.",
    keyAreas: [
      "Sustainable tourism development that balances economic growth with environmental conservation",
      "Tourism infrastructure including airports, hotels, and transportation networks",
      "Cultural tourism that celebrates Africa's rich heritage while benefiting local communities",
      "Eco-tourism and wildlife conservation programs that protect natural resources",
      "Tourism marketing and branding strategies that position Africa as a must-visit destination"
    ]
  },
  {
    id: 10,
    title: "Africa Youth Forum (AYF)",
    description: "The Africa Youth Forum (AYF) is the premier platform uniting African youth, a key driver of innovation, transformation, and the continent’s sovereignty.",
    image: "/images/africa-youth.jpg",
    overview: "The forum aims to connect young leaders, entrepreneurs, innovators, activists, and decision-makers around concrete goals: accelerating access to financing, fostering strategic partnerships, and promoting strong political and economic engagement of youth in Africa’s development. AYF operates under a dynamic vision where youth are no longer mere spectators, but key actors in Africa’s major economic and diplomatic decisions.",
    keyAreas: [
      "Continental economic integration through the African Continental Free Trade Area and monetary union",
      "Resource sovereignty including value addition, local processing, and strategic resource management",
      "Technology transfer and innovation ecosystems that reduce dependence on imported solutions",
      "South-South cooperation and strategic partnerships with emerging economies",
      "Institutional capacity building for effective economic governance and policy implementation"
    ]
  }
];