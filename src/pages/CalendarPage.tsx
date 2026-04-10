import { useState } from "react";
import PageHero from "../components/PageHero";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const daysInMonth = 30; // June 2025
const startDay = 0; // Sunday
const eventDays = [5, 13, 14, 15, 22, 28];
const today = 10;

const events = [
  { date: "June 5", title: "District Assembly", desc: "Pre-conference district assembly for all club officers." },
  { date: "June 13–15", title: "DLAC 2025", desc: "Annual District Leadership and Conference in Accra." },
  { date: "June 22", title: "Club Officers Training", desc: "Training for incoming 2025–26 club officers." },
  { date: "June 28", title: "Free Eye Screening", desc: "Community eye screening in partnership with local hospitals." },
];

const CalendarPage = () => {
  const [month] = useState("June 2025");
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  return (
    <div>
      <PageHero breadcrumb="Events" title="District Event Calendar" subtitle="Stay up to date with all district events and activities" />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <button className="text-blue-800 hover:text-blue-600"><FaChevronLeft /></button>
            <h2 className="font-display font-bold text-blue-800 text-2xl">{month}</h2>
            <button className="text-blue-800 hover:text-blue-600"><FaChevronRight /></button>
          </div>
          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d} className="py-2">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {blanks.map((b) => <div key={`b${b}`} />)}
            {days.map((d) => (
              <div key={d} className={`h-12 flex flex-col items-center justify-center rounded text-sm ${d === today ? "bg-blue-900 text-white font-bold" : eventDays.includes(d) ? "bg-blue-100" : ""}`}>
                {d}
                {eventDays.includes(d) && d !== today && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-0.5" />}
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-4">
            <h3 className="font-display font-bold text-blue-800 text-xl">Events This Month</h3>
            {events.map((e) => (
              <div key={e.title} className="border-l-4 border-yellow-400 pl-4 py-2">
                <p className="text-yellow-600 text-xs font-semibold">{e.date}</p>
                <h4 className="font-semibold text-blue-800">{e.title}</h4>
                <p className="text-gray-500 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
