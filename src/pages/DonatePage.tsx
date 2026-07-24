import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import donateImg from "../assets/donate.jpg";
import heroAboutImg from "../assets/hero-about.jpg";
import { FaMobileAlt, FaUniversity, FaMoneyBillWave, FaBuilding, FaGlobe, FaPhone, FaUser, FaHashtag } from "react-icons/fa";

const DonatePage = () => {
  const bankAccounts = [
    {
      bank: "Ecobank",
      currency: "GHS",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "1441001178053",
      type: "Cedi Account",
      phone1: "+233 24 483 3280",
      phone2: "+233 20 817 3934",
      icon: <FaBuilding />
    },
    {
      bank: "Ecobank",
      currency: "USD",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "3441002222578",
      type: "USD Account",
      icon: <FaGlobe />
    },
    {
      bank: "Fidelity Bank",
      currency: "GHS",
      accountName: "Rotaract District 9104",
      accountNumber: "0043040001281",
      type: "Cedi Account",
      icon: <FaUniversity />
    },
    {
      bank: "Fidelity Bank",
      currency: "USD",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "195 116 094 0412",
      type: "USD Account",
      icon: <FaUniversity />
    },
    {
      bank: "First Bank",
      currency: "GHS",
      accountName: "Rotaract District 9104",
      accountNumber: "0043040001281",
      type: "Cedi Account",
      icon: <FaBuilding />
    },
    {
      bank: "First Bank",
      currency: "USD",
      accountName: "ROTARACT DISTRICT 9104",
      accountNumber: "209 016 094 0411",
      type: "USD Account",
      icon: <FaBuilding />
    }
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-primary mb-4">District Accounts</h2>
            <p className="text-gray-600 text-lg">Support Rotaract District 9104's mission to serve communities across Ghana</p>
          </div>

          {/* Bank Accounts */}
          <div className="mb-12">
            <h3 className="font-display font-bold text-2xl text-primary mb-6 flex items-center gap-3">
              <FaUniversity className="text-accent600" /> Bank Transfers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bankAccounts.map((account, index) => (
                <div key={index} className="bg-white border border-secondary/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-accent600 text-2xl">{account.icon}</span>
                    <div>
                      <h4 className="font-display font-bold text-lg text-primary">{account.bank}</h4>
                      <p className="text-sm text-gray-500">{account.type}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold text-gray-700">Currency:</span> {account.currency}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-gray-700">Account Name:</span> {account.accountName}
                    </p>
                    <p className="text-sm font-mono bg-gray-50 p-2 rounded border border-secondary/10">
                      <span className="font-semibold text-gray-700">Account Number:</span> {account.accountNumber}
                    </p>
                    {account.phone1 && (
                      <div className="text-sm">
                        <span className="font-semibold text-gray-700">Phone:</span> {account.phone1}
                        {account.phone2 && <span className="block ml-6">{account.phone2}</span>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Money */}
          <div className="mb-12">
            <h3 className="font-display font-bold text-2xl text-primary mb-6 flex items-center gap-3">
              <FaMobileAlt className="text-accent600" /> Mobile Money (Ghana)
            </h3>
            <div className="max-w-md bg-gradient-to-r from-primary-dark to-primary text-white rounded-lg p-6 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaMobileAlt className="text-secondary text-xl" />
                  <div>
                    <p className="text-sm opacity-80">MoMo Number</p>
                    <p className="font-mono font-bold text-lg">{mobileMoney.number}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUser className="text-secondary text-xl" />
                  <div>
                    <p className="text-sm opacity-80">Name</p>
                    <p className="font-semibold">{mobileMoney.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaHashtag className="text-secondary text-xl" />
                  <div>
                    <p className="text-sm opacity-80">Merchant Code</p>
                    <p className="font-mono font-bold">{mobileMoney.merchantCode}</p>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-3 mt-2">
                  <p className="text-sm opacity-80">Account Name</p>
                  <p className="font-semibold">{mobileMoney.accountName}</p>
                  <p className="text-sm opacity-80 mt-1">Account Number (USD)</p>
                  <p className="font-mono font-bold">{mobileMoney.accountNumber}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Where Your Donation Goes */}
          <HighlightBox title="Where Your Donation Goes">
            <p>Every donation directly supports Rotaract District 9104's service projects, including health outreaches, literacy campaigns, environmental initiatives, and professional development programs. Your generosity helps us create lasting impact in communities across Ghana.</p>
          </HighlightBox>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;