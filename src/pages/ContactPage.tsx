import PageHero from "../components/PageHero";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTiktok, 
  FaSnapchat,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaMobile,
  FaGlobe,
  FaBuilding,
  FaMapMarkerAlt,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import heroAboutImg from "../assets/hero-about.jpg";

const ContactPage = () => {
  const socialLinks = [
    { 
      name: "TikTok", 
      icon: FaTiktok, 
      handle: "Rotaract District 9104",
      url: "https://vm.tiktok.com/ZS9rVmfpgCbU3-AUnZp/",
      color: "hover:bg-black"
    },
    // { 
    //   name: "Snapchat", 
    //   icon: FaSnapchat, 
    //   handle: "rotaract_d9104",
    //   url: "https://www.snapchat.com/add/rdistrict9104",
    //   color: "hover:bg-yellow-500"
    // },
    { 
      name: "Instagram", 
      icon: FaInstagram, 
      handle: "ROTARACT GHANA",
      url: "https://www.instagram.com/rotaract_d9104/",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      handle: "Rotaract D9104",
      url: "https://www.linkedin.com/company/rotaract-ghana/",
      color: "hover:bg-blue-500"
    },
    {
      name: "Youtube",
      icon: FaYoutube,
      handle: "rotaractdistrict9104",
      url: "https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2F%40rotaractdistrict9104%3Fsi%3D-OyFk48D0uo70qgF%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnsDbKTURiCtrZ116wILT0sJOel8SCK6ezDANJnT6jUaA1grnqwNPXJgjdyHc_aem_oolG_FVbk4ac6NMS2IUI0A&e=AUDuNCooM0mtZj7CHTtH8JzXhzFhYLhFaS1H_Efj9t-vFFW0KMDC6ZSIPTVfL3J0EeQCvnHv0VG4ZC4QEPZgjvVLUZPIk25ONha--kD7wkOOcWbDGVCLAfEZTGg6_4jLHB6fNq8",
      color: "hover:bg-red-500"
    }

  ];

  const bankAccounts = [
    {
      bank: "Ecobank",
      currency: "GHS",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "1441001178053",
      type: "Cedi Account",
      phone: "+233 24 483 3280",
      phone2: "+233 20 817 3934",
      icon: FaBuilding,
    },
    {
      bank: "Fidelity Bank",
      currency: "GHS",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "1441001178053",
      type: "Cedi Account",
      icon: FaUniversity,
    },
    {
      bank: "Ecobank",
      currency: "USD",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "3441002222578",
      type: "USD Account",
      icon: FaGlobe,
    },
    {
      bank: "First Bank",
      currency: "GHS",
      accountName: "Rotaract District 9104",
      accountNumber: "0043040001281",
      type: "Cedi Account",
      icon: FaBuilding,
    },
    {
      bank: "First Bank",
      currency: "USD",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "209 016 094 0411",
      type: "USD Account",
      icon: FaGlobe,
    },
    {
      bank: "Fidelity Bank",
      currency: "USD",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "195 116 094 0412",
      type: "USD Account",
      icon: FaUniversity,
    },
  ];

  const mobileMoney = {
    number: "0246691883",
    name: "Rotaract District 9104",
    merchantCode: "583947",
    accountName: "Rotaract District 9104",
    accountNumber: "0042060001694"
  };

  return (
    <div>
      {/* <PageHero breadcrumb="Contact" title="Contact Us" subtitle="Get in touch with Rotaract District 9104" image={heroAboutImg} /> */}
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-dark to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get in touch with Rotaract District 9104
          </p>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Email Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary">For Official Communication</h2>
              <p className="text-gray-500 mt-2">Drop us a line at:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a 
                href="mailto:drr.d9104@gmail.com"
                className="flex items-center gap-4 bg-gray-50 hover:bg-accent600/10 p-4 rounded-xl transition-all group"
              >
                <div className="w-12 h-12 bg-accent600/10 rounded-full flex items-center justify-center group-hover:bg-accent600 group-hover:text-white transition-all">
                  <HiOutlineMail className="text-2xl text-accent600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">DRR Office</p>
                  <p className="font-medium text-gray-800">drr.d9104@gmail.com</p>
                </div>
              </a>
              <a 
                href="mailto:secretariat.d9104@gmail.com"
                className="flex items-center gap-4 bg-gray-50 hover:bg-accent600/10 p-4 rounded-xl transition-all group"
              >
                <div className="w-12 h-12 bg-accent600/10 rounded-full flex items-center justify-center group-hover:bg-accent600 group-hover:text-white transition-all">
                  <HiOutlineMail className="text-2xl text-accent600 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Secretariat</p>
                  <p className="font-medium text-gray-800">secretariat.d9104@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-gradient-to-r from-primary-dark to-primary rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center text-white mb-8">
              <h2 className="text-2xl font-bold">Follow Us</h2>
              <p className="opacity-90 mt-2">Stay connected with us on social media</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-6 rounded-xl text-center transition-all group"
                >
                  <div className="flex justify-center mb-3">
                    <social.icon className="text-4xl text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-white font-semibold text-lg">{social.name}</div>
                  <div className="text-white/80 text-sm mt-1">@{social.handle}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Money Section */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary">Mobile Money (Ghana)</h2>
              <p className="text-gray-500 mt-2">Send donations via mobile money</p>
            </div>
            <div className="max-w-lg mx-auto bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                  <FaMobile />
                </div>
                <div>
                  <p className="text-sm text-green-700 font-medium">MoMo Number</p>
                  <p className="text-xl font-bold text-green-800">{mobileMoney.number}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="text-sm font-semibold text-gray-800">{mobileMoney.name}</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Merchant Code</p>
                  <p className="text-sm font-semibold text-gray-800">{mobileMoney.merchantCode}</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3 col-span-2">
                  <p className="text-xs text-gray-500">Account Name</p>
                  <p className="text-sm font-semibold text-gray-800">{mobileMoney.accountName}</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3 col-span-2">
                  <p className="text-xs text-gray-500">Account Number (USD)</p>
                  <p className="text-sm font-semibold text-gray-800">{mobileMoney.accountNumber}</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Bank Accounts Section */}
          {/* <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary">District Accounts</h2>
              <p className="text-gray-500 mt-2">Support our projects through bank transfers</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <FaBuilding className="text-blue-600 text-xl" />
                  <div>
                    <h3 className="font-bold text-gray-800">Ecobank</h3>
                    <p className="text-xs text-gray-500">Cedi Account</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Name</p>
                    <p className="text-sm font-semibold text-gray-800">ROTARACT DISTRICT 9104</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Number</p>
                    <p className="text-sm font-mono font-bold text-gray-800">1441001178053</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm font-medium text-gray-800">+233 24 483 3280</p>
                    <p className="text-sm font-medium text-gray-800">+233 20 817 3934</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <FaUniversity className="text-purple-600 text-xl" />
                  <div>
                    <h3 className="font-bold text-gray-800">Fidelity Bank</h3>
                    <p className="text-xs text-gray-500">Cedi Account</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Name</p>
                    <p className="text-sm font-semibold text-gray-800">ROTARACT DISTRICT 9104</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Number</p>
                    <p className="text-sm font-mono font-bold text-gray-800">1441001178053</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <FaGlobe className="text-green-600 text-xl" />
                  <div>
                    <h3 className="font-bold text-gray-800">Ecobank</h3>
                    <p className="text-xs text-gray-500">USD Account</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Name</p>
                    <p className="text-sm font-semibold text-gray-800">ROTARACT DISTRICT 9104</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Number</p>
                    <p className="text-sm font-mono font-bold text-gray-800">3441002222578</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <FaBuilding className="text-amber-600 text-xl" />
                  <div>
                    <h3 className="font-bold text-gray-800">First Bank</h3>
                    <p className="text-xs text-gray-500">Cedi Account</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Name</p>
                    <p className="text-sm font-semibold text-gray-800">Rotaract District 9104</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Number</p>
                    <p className="text-sm font-mono font-bold text-gray-800">0043040001281</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                <div className="flex items-center gap-3 mb-4">
                  <FaGlobe className="text-teal-600 text-xl" />
                  <div>
                    <h3 className="font-bold text-gray-800">First Bank</h3>
                    <p className="text-xs text-gray-500">USD Account</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Name</p>
                    <p className="text-sm font-semibold text-gray-800">ROTARACT DISTRICT 9104</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Number</p>
                    <p className="text-sm font-mono font-bold text-gray-800">209 016 094 0411</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
                <div className="flex items-center gap-3 mb-4">
                  <FaUniversity className="text-violet-600 text-xl" />
                  <div>
                    <h3 className="font-bold text-gray-800">Fidelity Bank</h3>
                    <p className="text-xs text-gray-500">USD Account</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Name</p>
                    <p className="text-sm font-semibold text-gray-800">ROTARACT DISTRICT 9104</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Account Number</p>
                    <p className="text-sm font-mono font-bold text-gray-800">195 116 094 0412</p>
                  </div>
                </div>
              </div>
            </div> 
          </div>*/}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;