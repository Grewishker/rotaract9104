import { useState } from "react";
import PageHero from "../components/PageHero";

const clubs = [
  { name: "RAC University of Ghana, Legon", region: "Greater Accra", charter: 2012, meeting: "Wednesdays, 6:00 PM", venue: "UG Campus" },
  { name: "RAC KNUST", region: "Ashanti", charter: 2010, meeting: "Thursdays, 5:30 PM", venue: "KNUST Campus" },
  { name: "RAC Accra Metro", region: "Greater Accra", charter: 2015, meeting: "Tuesdays, 6:00 PM", venue: "Accra City Hotel" },
  { name: "RAC Cape Coast", region: "Central", charter: 2013, meeting: "Mondays, 5:00 PM", venue: "UCC Campus" },
  { name: "RAC Tamale", region: "Northern", charter: 2016, meeting: "Fridays, 5:00 PM", venue: "Tamale Community Centre" },
  { name: "RAC Takoradi", region: "Western", charter: 2014, meeting: "Wednesdays, 5:30 PM", venue: "Takoradi Hub" },
];

const regions = ["All Regions", "Greater Accra", "Ashanti", "Central", "Northern", "Western"];

const ClubLocatorPage = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");

  const filtered = clubs.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchRegion = region === "All Regions" || c.region === region;
    return matchSearch && matchRegion;
  });

  return (
    <div>
      <PageHero breadcrumb="Contact" title="Club Locator" subtitle="Find a Rotaract club near you" />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-3 mb-8 flex-wrap">
            <input type="text" placeholder="Search clubs..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 min-w-[200px] border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-yellow-400" />
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="border border-blue-200 rounded px-3 py-2 focus:outline-none focus:border-yellow-400">
              {regions.map((r) => <option key={r}>{r}</option>)}
            </select>
            <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition">Search</button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <div key={c.name} className="border border-blue-100 rounded-lg p-6 hover:-translate-y-1 hover:shadow-lg transition">
                <h3 className="font-display font-bold text-blue-800 mb-2">{c.name}</h3>
                <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-2 py-0.5 rounded mb-3">{c.region}</span>
                <p className="text-gray-500 text-sm">Chartered: {c.charter}</p>
                <p className="text-gray-500 text-sm">Meets: {c.meeting}</p>
                <p className="text-gray-500 text-sm">Venue: {c.venue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClubLocatorPage;
