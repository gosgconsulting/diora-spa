import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hairWashImage from "@/assets/hair-wash.jpg";
import waxingImage from "@/assets/pricing-waxing.jpg";
import headSpaImage from "@/assets/express cleansing.jpg";
import laserHairRemovalImage from "@/assets/pricing-laser.jpg";
import lashImage from "@/assets/our service lash.png";

export default function Pricing() {
  const hairServices = [
    {
      name: "Express Cleansing",
      description: "A short and effective refresh for scalp and hair",
      price: "$25",
      duration: "30 mins",
      image: hairWashImage,
      includes: ["Double shampoo cleansing", "Nourishing hair mask", "Scalp massage", "Blow dry & serum finish"],
      addOnRituals: {
        handFootShoulder: {
          "15 mins": "$18",
          "30 mins": "$28", 
          "60 mins": "$55"
        },
        facialMassage: {
          "15 mins": "$28",
          "30 mins": "$40",
          "60 mins": "$60"
        },
        scratching: "15 minutes - $15",
        hairStyling: "Straightening or Temporary Curl Styling - $15"
      },
      notes: [
        "All treatments include a light blow dry",
        "Add-On Rituals available upon request (+$5 for each additional 15 mins)",
        "An additional $20 applies to all head spa treatments for guests with hair extensions, due to the extra care required",
        "Advance booking is recommended over your preferred time"
      ]
    },
    {
      name: "Detox & Bloom",
      description: "A quick sensory detox to refresh both skin and soul",
      price: "$35",
      duration: "45 mins",
      image: headSpaImage,
      includes: [
        "Phase 1 - Arrival & Grounding:",
        "• Herbal abdomen compress",
        "• Sound & aroma therapy", 
        "• Hot essential oil scalp massage",
        "• Peacock feather-light relaxation touch",
        "• Head acupoint massage",
        "",
        "Phase 2 - Facial Prep & Cleanse:",
        "• Makeup removal",
        "• Double cleanse",
        "• Gentle exfoliation", 
        "• Hot towel compress",
        "• Hydrating facial mask",
        "",
        "Phase 3 - Scalp & Hair Care:",
        "• Dry head, neck & shoulder massage",
        "• Dry combing",
        "• Double shampoo",
        "• Hair mask",
        "• Warm water dome therapy",
        "",
        "Phase 4 - Closing:",
        "• Final shoulder massage",
        "• Blow dry & serum finish"
      ]
    },
    {
      name: "Diora's Signature",
      description: "A luxurious blend of body, energy, and emotional balance",
      price: "$59",
      duration: "90 mins",
      image: lashImage,
      includes: [
        "Phase 1 - Arrival & Grounding:",
        "• Welcome ritual",
        "• Full herbal abdomen compress",
        "• Sound therapy & aromatherapy",
        "• Head & neck acupoint massage",
        "",
        "Phase 2 - Radiance Preparation:",
        "• Makeup removal",
        "• Double facial cleansing",
        "• Gentle exfoliation",
        "",
        "Phase 3 - Advanced Facial Renewal:",
        "• Hot towel therapy",
        "• Rejuvenating cleansing",
        "• Hair mask",
        "• Hot water dome therapy",
        "",
        "Phase 4 - Massage Sequel & Hair Treatment:",
        "• Light relaxing massage",
        "• Double facial cleansing",
        "• Hair mask",
        "• Hydrating facial mask",
        "• Neck treatment mask",
        "• Advanced scalp massage during mask rejuvenation",
        "",
        "Phase 5 - Closing Serenity:",
        "• Extended final shoulder & neck massage",
        "• Peacock feather-light touch",
        "• Blow dry & serum styling finish"
      ]
    },
    {
      name: "5 Sense Relaxation", 
      description: "A full-body nervous system reset through rhythmic flow and deep touch",
      price: "$78",
      duration: "90 mins",
      image: laserHairRemovalImage,
      includes: [
        "Phase 1 - Sensory Awakening:",
        "• Warm herbal abdomen compress",
        "• Aroma & sound therapy",
        "• Head & neck acupoint massage",
        "• Massage with hot stone",
        "",
        "Phase 2 - Advanced Facial Indulgence:",
        "• Makeup removal",
        "• Double facial cleanse",
        "• Gentle exfoliation face & neck",
        "• Massage face and neck with collagen cream",
        "• Gold face mask",
        "• Bojin lifting massage face and neck",
        "• Enhanced Gua Sha contouring",
        "• Neck treatment mask",
        "• Hand & arm massage during facial mask",
        "",
        "Phase 3 - Deep Scalp & Hair Immersion:",
        "• Deeper scalp release with Bojin & Horn comb",
        "• Exfoliating scalp treatment",
        "• Herbal scalp cleansing & nourishing rinse",
        "• Dry combing",
        "• Double therapeutic shampoo cleansing",
        "• Hair mask",
        "• Warm water dome spa",
        "",
        "Phase 4 - Total Relaxation Ritual:",
        "• Longer neck & shoulder massage",
        "• Neck stretch with towel",
        "• Peacock feather-light relaxation touch",
        "• Back scratching",
        "",
        "Phase 5 - Closing Serenity:",
        "• Blow dry",
        "• Serum styling finish"
      ]
    },
    {
      name: "Diora's Botanical Healing",
      description: "A 2-hour ritual based on traditional Eastern healing designed to deeply cleanse, circulate energy and nourish body & mind",
      price: "$95", 
      duration: "120 mins",
      image: hairWashImage,
      includes: [
        "Phase 1 - Mind-Body Grounding:",
        "• Warm abdomen herbal compress",
        "• Aromatherapy",
        "• Sound therapy",
        "• Head & neck acupoint massage",
        "• Massage with hot stone",
        "",
        "Phase 2 - Advanced Facial Ritual:",
        "• Makeup removal",
        "• Double facial cleanse",
        "• Gentle exfoliation face & neck",
        "• Massage face and neck with collagen cream",
        "• Gold face mask",
        "• Bojin lifting massage face and neck",
        "• Enhanced Gua Sha contouring",
        "• Neck treatment mask",
        "• Face lifting massage",
        "• Hand & arm massage during mask",
        "",
        "Phase 3 - Deep Scalp & Hair Therapy:",
        "• Head acupoint massage",
        "• Scalp release Bojin & Horn comb",
        "• Head massage",
        "• Exfoliating scalp treatment",
        "• Herbal deep scalp cleansing",
        "• Herbal nourishing rinse with Diora's exclusive botanical formulation",
        "• Double therapeutic shampoo",
        "• Clay scalp massage",
        "• Warm water dome spa",
        "",
        "Phase 4 - Total Relaxation:",
        "• Extended final neck & shoulder massage",
        "• Neck stretch with towel",
        "• Peacock feather-light relaxation touch",
        "• Back scratching",
        "",
        "Phase 5 - Completion:",
        "• Blow dry",
        "• Serum styling finish"
      ]
    }
  ];

  const ladiesWaxingServices = [
    { name: "Eyebrows", price: "$18", duration: "15 mins", description: "Professional eyebrow shaping and waxing" },
    { name: "Buttocks", price: "$65", duration: "30 mins", description: "Complete buttocks waxing for a flawless, smoother appearance" },
    { name: "Forehead", price: "$25", duration: "15 mins", description: "Gentle forehead hair removal for a clean, defined look" },
    { name: "Full Face", price: "$75", duration: "45 mins", description: "Complete facial waxing including lip, chin, cheeks, forehead, and sides" },
    { name: "Full Legs", price: "$85", duration: "60 mins", description: "Complete leg waxing for silky smooth, hair-free finish from hip to toe" },
    { name: "Half Arms", price: "$25", duration: "30 mins", description: "Professional waxing for forearms or upper arms, ideal for short sleeves" },
    { name: "Full Arms", price: "$38", duration: "45 mins", description: "Complete arm waxing for a clean, refined look and feel" },
    { name: "Underarms", price: "$20", duration: "15 mins", description: "Gentle underarm waxing for smooth, clean, long-lasting underarm hair removal" },
    { name: "Bikini/Moustache", price: "$28", duration: "20 mins", description: "Precise bikini line or moustache area waxing for a refined appearance" },
    { name: "Back", price: "$65", duration: "45 mins", description: "Complete back waxing for a flawless, hair-free finish. Especially popular for special occasions" },
    { name: "Brazilian", price: "$85", duration: "45 mins", description: "Complete intimate area waxing for a clean, confident feel" },
    { name: "Upper Lip", price: "$12", duration: "10 mins", description: "Gentle upper lip waxing to remove fine hair above the lips" },
    { name: "Chin", price: "$12", duration: "10 mins", description: "Precise chin hair removal for a smooth, refined look" }
  ];

  const gentlemensWaxingServices = [
    { name: "Male Brazilian", price: "$145", duration: "60 mins", description: "Complete intimate area waxing for men with professional care" },
    { name: "Underarms", price: "$25", duration: "20 mins", description: "Professional underarm waxing designed for men's skin and hair" },
    { name: "Half Legs", price: "$45", duration: "30 mins", description: "Lower or upper leg waxing for a clean, athletic appearance" },
    { name: "Full Legs", price: "$85", duration: "60 mins", description: "Complete leg waxing for a smooth, polished, and athletic look" },
    { name: "Chest/Stomach/Abdomen", price: "$75", duration: "45 mins", description: "Complete torso waxing for a clean, sculpted appearance" },
    { name: "Chest & Stomach/Abdomen", price: "$60", duration: "40 mins", description: "Combined chest and stomach waxing for a refined torso look including back holiday" },
    { name: "Back", price: "$65", duration: "45 mins", description: "Professional back waxing from shoulders to lower back" },
    { name: "Half Arms", price: "$35", duration: "25 mins", description: "Forearm or upper arm appearance" },
    { name: "Full Arms", price: "$55", duration: "40 mins", description: "Complete arm waxing for sleeves and confidence for sleeveless confidence" }
  ];

  const laserHairRemovalServices = {
    ladies: [
      { name: "Lower Lip Area", trialPrice: "$20", sessionPrice: "$55", packagePrice: "$280", description: "Professional laser hair removal for lower lip area" },
      { name: "Upper Lip Area", trialPrice: "$30", sessionPrice: "$48", packagePrice: "$308", description: "Precise upper lip area laser hair removal" },
      { name: "Underarm / Axilla Area", trialPrice: "$25", sessionPrice: "$40", packagePrice: "$300", description: "Underarm laser hair removal for smooth, long-lasting results" },
      { name: "Half Arm", trialPrice: "$40", sessionPrice: "$60", packagePrice: "$420", description: "Half arm laser hair removal treatment" },
      { name: "Full Arm", trialPrice: "$65", sessionPrice: "$90", packagePrice: "$680", description: "Complete arm laser hair removal" },
      { name: "Half Leg", trialPrice: "$50", sessionPrice: "$80", packagePrice: "$520", description: "Half leg laser hair removal treatment" },
      { name: "Full Leg", trialPrice: "$90", sessionPrice: "$130", packagePrice: "$920", description: "Complete leg laser hair removal" },
      { name: "Full Facial Area", trialPrice: "$58", sessionPrice: "$80", packagePrice: "$580", description: "Complete facial laser hair removal" },
      { name: "Full Back", trialPrice: "$70", sessionPrice: "$118", packagePrice: "$780", description: "Full back laser hair removal treatment" },
      { name: "Full Buttocks", trialPrice: "$70", sessionPrice: "$118", packagePrice: "$780", description: "Complete buttocks laser hair removal" },
      { name: "Brazilian", trialPrice: "$40", sessionPrice: "$70", packagePrice: "$420", description: "Brazilian laser hair removal treatment" },
      { name: "Full Brazilian", trialPrice: "$55", sessionPrice: "$80", packagePrice: "$580", description: "Complete Brazilian laser hair removal" },
      { name: "Abdomen/Stomach Area", trialPrice: "$45", sessionPrice: "$70", packagePrice: "$480", description: "Abdomen and stomach area laser hair removal" }
    ],
    gentlemen: [
      { name: "Chin Area", trialPrice: "$30", sessionPrice: "$55", packagePrice: "$320", description: "Professional chin area laser hair removal for men" },
      { name: "Upper Lip Area", trialPrice: "$30", sessionPrice: "$48", packagePrice: "$320", description: "Upper lip laser hair removal for men" },
      { name: "Beard Definition", trialPrice: "$45", sessionPrice: "$70", packagePrice: "$480", description: "Beard shaping and definition with laser hair removal" },
      { name: "Underarm / Axilla Area", trialPrice: "$35", sessionPrice: "$55", packagePrice: "$380", description: "Underarm laser hair removal for men" },
      { name: "Half Arm", trialPrice: "$50", sessionPrice: "$75", packagePrice: "$520", description: "Half arm laser hair removal treatment" },
      { name: "Full Arm", trialPrice: "$70", sessionPrice: "$100", packagePrice: "$720", description: "Complete arm laser hair removal for men" },
      { name: "Half Leg", trialPrice: "$65", sessionPrice: "$90", packagePrice: "$650", description: "Half leg laser hair removal" },
      { name: "Full Leg", trialPrice: "$100", sessionPrice: "$130", packagePrice: "$820", description: "Complete leg laser hair removal for men" },
      { name: "Full Facial Area", trialPrice: "$70", sessionPrice: "$108", packagePrice: "$720", description: "Complete facial laser hair removal" },
      { name: "Full Back", trialPrice: "$80", sessionPrice: "$110", packagePrice: "$820", description: "Full back laser hair removal for men" },
      { name: "Chest Area", trialPrice: "$45", sessionPrice: "$70", packagePrice: "$480", description: "Chest laser hair removal treatment" },
      { name: "Abdomen/Stomach Area", trialPrice: "$45", sessionPrice: "$70", packagePrice: "$480", description: "Abdomen and stomach laser hair removal" },
      { name: "Full Buttocks", trialPrice: "$80", sessionPrice: "$120", packagePrice: "$820", description: "Complete buttocks laser hair removal" },
      { name: "Brazilian", trialPrice: "$55", sessionPrice: "$80", packagePrice: "$580", description: "Brazilian laser hair removal for men" },
      { name: "Full Brazilian", trialPrice: "$70", sessionPrice: "$100", packagePrice: "$720", description: "Complete Brazilian laser hair removal for men" }
    ]
  };

  const eyelashExtensionServices = {
    fullSetStyles: [
      { name: "Japanese Lash", price: "$56", originalPrice: "$70", description: "Soft, natural, weightless. Effect: Neat, defined, like your lashes but better." },
      { name: "KaTun Style", price: "$96", originalPrice: "$120", description: "Thai celeb-inspired cat-eye lift. Effect: Sexy cat-eye + doll-like charm." },
      { name: "2D Angel Lash", price: "$64", originalPrice: "$80", description: "Two lashes per natural lash. Fluttery look. Effect: Light, airy, romantic." },
      { name: "Kim K Style", price: "$108", originalPrice: "$135", description: "Dark, spiky, wet lash effect. Effect: Intense, edgy, eye-catching." },
      { name: "3D Russian Volume", price: "$72", originalPrice: "$90", description: "Triple fans, moderate volume. Effect: Fuller with a soft-focus finish." },
      { name: "Lash Lift (Perm)", price: "$56", originalPrice: "$70", description: "Natural lash curl enhancement. Effect: Open, refreshed eyes." },
      { name: "4D/5D Russian Volume", price: "$84", originalPrice: "$105", description: "Ultra-fine, bold volume. Effect: Fluffy, full, lightweight." },
      { name: "6D Russian Volume", price: "$92", originalPrice: "$115", description: "Most Voluminous Russian set. Effect: Bold, dark, yet soft." },
      { name: "3D/4D Camellia Lash", price: "$76", originalPrice: "$95", description: "Multi-length fans, wispy texture. Effect: Flirty, feminine, dimensional." },
      { name: "5D/6D/7D Camellia Lash Set", price: "$84", originalPrice: "$105", description: "More volume & texture. Effect: Airy, elegant, full of movement." }
    ],
    lashRemoval: [
      { name: "Removal", price: "$10", description: "Gentle removal of lash extensions without damaging natural lashes. Safe removal with oil-based solution. Gentle on your natural lashes." },
      { name: "Cluster Lash Removal", price: "$30", description: "For thick, heavy cluster lashes done elsewhere. Removed with care to avoid damage." }
    ],
    lashTouchUps: {
      description: "Maintain your lash perfection with gentle refills, recommended every 2-3 weeks for lasting fullness.",
      classicAndLight: [
        { duration: "2nd week", price: "from $45" },
        { duration: "3rd week", price: "from $50" }
      ],
      mediumToFull: [
        { duration: "2nd week", price: "from $60" },
        { duration: "3rd week", price: "from $70" }
      ],
      signature: [
        { duration: "2nd week", price: "from $65" },
        { duration: "3rd week", price: "from $75" }
      ]
    },
    notes: [
      "Touch-ups require at least 50% of extensions, otherwise a full set applies",
      "Arrive with clean lashes. Removal available before new set",
      "Custom lash maps tailored to your eye shape & lifestyle"
    ]
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#3a2c1b' }}>
      <Header />
      
      {/* Page Title */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-dream text-8xl font-medium text-white mb-4">Pricing</h1>
        </div>
      </section>

      {/* Services Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* First Row - Hair Wash and Waxing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Hair Wash Services Column */}
            <div className="bg-white rounded-2xl p-8">
              {/* Header with Title and Image */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  <img 
                    src={headSpaImage} 
                    alt="Hair Wash Services"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h2 className="font-dream text-4xl font-bold" style={{ color: '#3a2c1b' }}>Head Spa Services</h2>
              </div>
              
              {/* Hair Services List */}
              <div className="space-y-8">
                {hairServices.map((service, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center justify-between mb-2">
                    <h3 className="font-garet text-xl font-black" style={{ color: '#3a2c1b' }}>{service.name}</h3>
                      <div className="text-right">
                        <span className="font-dream text-2xl font-bold" style={{ color: '#3a2c1b' }}>{service.price}</span>
                      </div>
                    </div>
                    <p className="font-garet text-gray-700 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-garet text-sm text-gray-600">Duration: {service.duration}</span>
                    </div>
                    
                    {/* Includes Section */}
                    <div className="mb-4">
                      <h4 className="font-garet font-semibold text-base mb-2" style={{ color: '#3a2c1b' }}>Includes:</h4>
                      <div className="space-y-1">
                        {service.includes.map((item, idx) => {
                          // Handle empty lines for spacing
                          if (item === "") {
                            return <div key={idx} className="h-2"></div>;
                          }
                          // Handle phase headers (lines ending with :)
                          if (item.endsWith(":")) {
                            return (
                              <div key={idx} className="font-garet text-sm font-semibold mt-3 mb-1" style={{ color: '#3a2c1b' }}>
                                {item}
                              </div>
                            );
                          }
                          // Handle regular items (with or without bullet)
                          return (
                            <div key={idx} className="font-garet text-sm text-gray-600 flex items-center">
                              {!item.startsWith("•") && <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>}
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Add-On Rituals Section */}
                    {service.addOnRituals && (
                      <div className="mb-4">
                        <h4 className="font-garet font-semibold text-base mb-2" style={{ color: '#3a2c1b' }}>ADD-ON RITUALS</h4>
                        
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <h5 className="font-garet font-medium text-sm mb-1 min-h-10">Hand / Foot / Shoulder Massage</h5>
                            <ul className="space-y-1">
                              {Object.entries(service.addOnRituals.handFootShoulder).map(([duration, price]) => (
                                <li key={duration} className="font-garet text-sm text-gray-600 flex items-center">
                                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                  {duration} - {price}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-garet font-medium text-sm mb-1 min-h-10">Facial Massage</h5>
                            <ul className="space-y-1">
                              {Object.entries(service.addOnRituals.facialMassage).map(([duration, price]) => (
                                <li key={duration} className="font-garet text-sm text-gray-600 flex items-center">
                                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                  {duration} - {price}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="font-garet text-sm text-gray-600">
                            Scratching {service.addOnRituals.scratching}
                          </div>
                          <div className="font-garet text-sm text-gray-600">
                            Hair Styling {service.addOnRituals.hairStyling}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Notes Section */}
                    {service.notes && (
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {service.notes.map((note, idx) => (
                            <li key={idx} className="font-garet text-sm text-gray-500 italic">
                              • {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button className="font-garet rounded-full" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>Book Hair Service</Button>
              </div>
            </div>

            {/* Waxing Services Column */}
            <div className="bg-white rounded-2xl p-8">
              {/* Header with Title and Image */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  <img 
                    src={waxingImage} 
                    alt="Waxing Services"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h2 className="font-dream text-4xl font-bold" style={{ color: '#3a2c1b' }}>Waxing Services</h2>
              </div>
              
              {/* Ladies Waxing Section */}
              <div className="mb-12">
                <h3 className="font-garet text-2xl font-bold mb-6" style={{ color: '#3a2c1b' }}>Ladies Waxing</h3>
                <div className="space-y-4">
                  {ladiesWaxingServices.map((service, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex-1">
                        <h4 className="font-garet font-semibold text-base" style={{ color: '#3a2c1b' }}>{service.name}</h4>
                        <p className="font-garet text-sm text-gray-600">{service.description}</p>
                        <span className="font-garet text-xs text-gray-500">Duration: {service.duration}</span>
                      </div>
                      <div className="text-right ml-4">
                        <span className="font-dream text-lg font-bold" style={{ color: '#3a2c1b' }}>{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gentlemen's Waxing Section */}
              <div className="mb-8">
                <h3 className="font-garet text-2xl font-bold mb-6" style={{ color: '#3a2c1b' }}>Gentlemen's Waxing</h3>
                <div className="space-y-4">
                  {gentlemensWaxingServices.map((service, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div className="flex-1">
                        <h4 className="font-garet font-semibold text-base" style={{ color: '#3a2c1b' }}>{service.name}</h4>
                        <p className="font-garet text-sm text-gray-600">{service.description}</p>
                        <span className="font-garet text-xs text-gray-500">Duration: {service.duration}</span>
                      </div>
                      <div className="text-right ml-4">
                        <span className="font-dream text-lg font-bold" style={{ color: '#3a2c1b' }}>{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-1 font-garet text-sm text-gray-600">
                  <li>• All waxing is performed by trained professionals using premium hard wax for minimal pain</li>
                  <li>• We use high-quality, hypoallergenic wax that's gentle on sensitive skin</li>
                  <li>• Comfortable packages & membership perks available - inquire at front desk</li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <Button className="font-garet rounded-full" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>Book Waxing Service</Button>
              </div>
            </div>
            
          </div>

          {/* Second Row - Laser Hair Removal and Eyelash Extensions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Laser Hair Removal Services Column */}
            <div className="bg-white rounded-2xl p-8">
              {/* Header with Title and Image */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  <img 
                    src={laserHairRemovalImage} 
                    alt="Laser Hair Removal Services"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h2 className="font-dream text-4xl font-bold" style={{ color: '#3a2c1b' }}>Laser Hair Removal</h2>
              </div>
              
              {/* Ladies Laser Hair Removal Section */}
              <div className="mb-12">
                <h3 className="font-garet text-2xl font-bold mb-6" style={{ color: '#3a2c1b' }}>For Ladies</h3>
                <p className="font-garet text-sm text-gray-600 mb-4 italic">Enjoy hair-free, silky-smooth skin that keeps you confident, comfortable, and effortlessly beautiful in every moment of your daily life.</p>
                
                {/* Pricing Header */}
                <div className="grid grid-cols-4 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="font-garet font-semibold text-sm" style={{ color: '#3a2c1b' }}>Treatment Area</div>
                  <div className="font-garet font-semibold text-sm text-center" style={{ color: '#3a2c1b' }}>1st Trial</div>
                  <div className="font-garet font-semibold text-sm text-center" style={{ color: '#3a2c1b' }}>1st Session</div>
                  <div className="font-garet font-semibold text-sm text-center" style={{ color: '#3a2c1b' }}>10+2 Sessions</div>
                </div>
                
                <div className="space-y-2">
                  {laserHairRemovalServices.ladies.map((service, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 py-3 border-b border-gray-200">
                      <div className="flex-1">
                        <h4 className="font-garet font-semibold text-sm" style={{ color: '#3a2c1b' }}>{service.name}</h4>
                      </div>
                      <div className="text-center">
                        <span className="font-dream text-sm font-bold" style={{ color: '#3a2c1b' }}>{service.trialPrice}</span>
                      </div>
                      <div className="text-center">
                        <span className="font-dream text-sm font-bold" style={{ color: '#3a2c1b' }}>{service.sessionPrice}</span>
                      </div>
                      <div className="text-center">
                        <span className="font-dream text-sm font-bold" style={{ color: '#3a2c1b' }}>{service.packagePrice}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gentlemen's Laser Hair Removal Section */}
              <div className="mb-8">
                <h3 className="font-garet text-2xl font-bold mb-6" style={{ color: '#3a2c1b' }}>For Gentlemen</h3>
                <p className="font-garet text-sm text-gray-600 mb-4 italic">Long-lasting smoothness, less regrowth, and a clean, confident look without daily shaving.</p>
                
                {/* Pricing Header */}
                <div className="grid grid-cols-4 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="font-garet font-semibold text-sm" style={{ color: '#3a2c1b' }}>Treatment Area</div>
                  <div className="font-garet font-semibold text-sm text-center" style={{ color: '#3a2c1b' }}>1st Trial</div>
                  <div className="font-garet font-semibold text-sm text-center" style={{ color: '#3a2c1b' }}>1st Session</div>
                  <div className="font-garet font-semibold text-sm text-center" style={{ color: '#3a2c1b' }}>10+2 Sessions</div>
                </div>
                
                <div className="space-y-2">
                  {laserHairRemovalServices.gentlemen.map((service, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 py-3 border-b border-gray-200">
                      <div className="flex-1">
                        <h4 className="font-garet font-semibold text-sm" style={{ color: '#3a2c1b' }}>{service.name}</h4>
                      </div>
                      <div className="text-center">
                        <span className="font-dream text-sm font-bold" style={{ color: '#3a2c1b' }}>{service.trialPrice}</span>
                      </div>
                      <div className="text-center">
                        <span className="font-dream text-sm font-bold" style={{ color: '#3a2c1b' }}>{service.sessionPrice}</span>
                      </div>
                      <div className="text-center">
                        <span className="font-dream text-sm font-bold" style={{ color: '#3a2c1b' }}>{service.packagePrice}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-1 font-garet text-sm text-gray-600">
                  <li>• Results vary depending on hair type, skin tone, and treatment area</li>
                  <li>• A course of 6-8 sessions is typically recommended for optimal results</li>
                  <li>• Advanced laser technology ensures safe and effective hair removal</li>
                  <li>• Free consultation available to determine the best treatment plan</li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <Button className="font-garet rounded-full" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>Book Laser Hair Removal</Button>
              </div>
            </div>
            {/* Eyelash Extension Services Column */}
            <div className="bg-white rounded-2xl p-8">
              {/* Header with Title and Image */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  <img 
                    src={lashImage} 
                    alt="Eyelash Extension Services"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h2 className="font-dream text-4xl font-bold" style={{ color: '#3a2c1b' }}>Eyelash Extensions</h2>
              </div>
              
              {/* Full Set Styles Section */}
              <div className="mb-12">
                <h3 className="font-garet text-2xl font-bold mb-6" style={{ color: '#3a2c1b' }}>Full Set Styles</h3>
                <p className="font-garet text-sm text-gray-600 mb-6 italic">Custom lash styles by certified artists, using premium gentle materials.</p>
                
                <div className="space-y-4">
                  {eyelashExtensionServices.fullSetStyles.map((service, index) => (
                    <div key={index} className="py-4 border-b border-gray-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-garet font-semibold text-base" style={{ color: '#3a2c1b' }}>{service.name}</h4>
                        <div className="text-right">
                          <span className="font-dream text-lg font-bold" style={{ color: '#3a2c1b' }}>{service.price}</span>
                          <span className="font-garet text-sm text-gray-500 line-through ml-2">(was {service.originalPrice})</span>
                        </div>
                      </div>
                      <p className="font-garet text-sm text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lash Removal Section */}
              <div className="mb-12">
                <h3 className="font-garet text-2xl font-bold mb-6" style={{ color: '#3a2c1b' }}>Lash Removal</h3>
                <p className="font-garet text-sm text-gray-600 mb-6 italic">Gentle removal of lash extensions without damaging natural lashes.</p>
                
                <div className="space-y-4">
                  {eyelashExtensionServices.lashRemoval.map((service, index) => (
                    <div key={index} className="flex items-start justify-between py-3 border-b border-gray-200">
                      <div className="flex-1">
                        <h4 className="font-garet font-semibold text-base" style={{ color: '#3a2c1b' }}>{service.name}</h4>
                        <p className="font-garet text-sm text-gray-600">{service.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <span className="font-dream text-lg font-bold" style={{ color: '#3a2c1b' }}>{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lash Touch-Ups Section */}
              <div className="mb-8">
                <h3 className="font-garet text-2xl font-bold mb-6" style={{ color: '#3a2c1b' }}>Lash Touch-Ups</h3>
                <p className="font-garet text-sm text-gray-600 mb-6 italic">{eyelashExtensionServices.lashTouchUps.description}</p>
                
                <div className="space-y-6">
                  {/* Classic & Light Volume Styles */}
                  <div>
                    <h4 className="font-garet font-semibold text-base mb-3" style={{ color: '#3a2c1b' }}>Classic & Light Volume Styles</h4>
                    <div className="text-sm text-gray-600">
                      <span className="font-garet">(1D, 2D, 3D)</span>
                    </div>
                    <div className="space-y-1 mt-2">
                      {eyelashExtensionServices.lashTouchUps.classicAndLight.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-garet text-sm">• {item.duration}:</span>
                          <span className="font-garet text-sm font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Medium to Full Volume Styles */}
                  <div>
                    <h4 className="font-garet font-semibold text-base mb-3" style={{ color: '#3a2c1b' }}>Medium to Full Volume Styles</h4>
                    <div className="text-sm text-gray-600">
                      <span className="font-garet">(4D, 5D, 6D, Camellia)</span>
                    </div>
                    <div className="space-y-1 mt-2">
                      {eyelashExtensionServices.lashTouchUps.mediumToFull.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-garet text-sm">• {item.duration}:</span>
                          <span className="font-garet text-sm font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signature Styles */}
                  <div>
                    <h4 className="font-garet font-semibold text-base mb-3" style={{ color: '#3a2c1b' }}>Signature Styles</h4>
                    <div className="text-sm text-gray-600">
                      <span className="font-garet">(KaTun, KimK)</span>
                    </div>
                    <div className="space-y-1 mt-2">
                      {eyelashExtensionServices.lashTouchUps.signature.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-garet text-sm">• {item.duration}:</span>
                          <span className="font-garet text-sm font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes Section */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-1 font-garet text-sm text-gray-600">
                  {eyelashExtensionServices.notes.map((note, index) => (
                    <li key={index}>• {note}</li>
                  ))}
                </ul>
              </div>

              <div className="text-center mt-8">
                <Button className="font-garet rounded-full" style={{ backgroundColor: '#3a2c1b', color: '#FAF8F4' }}>Book Eyelash Extension</Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}