import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import { Calendar } from "../components/ui/calendar";
import heroAboutImg from "../assets/hero-about.jpg";

const events = [
  {
    title: "District Assembly",
    dateLabel: "June 5, 2026",
    start: new Date(2026, 5, 5),
    end: new Date(2026, 5, 5),
    desc: "District planning assembly for incoming club officers and event committees.",
  },
  {
    title: "Club Officers Training",
    dateLabel: "June 18–19, 2026",
    start: new Date(2026, 5, 18),
    end: new Date(2026, 5, 19),
    desc: "Two-day leadership training for club presidents, secretaries, and treasurers.",
  },
  {
    title: "Blood Donation Campaign",
    dateLabel: "June 25, 2026",
    start: new Date(2026, 5, 25),
    end: new Date(2026, 5, 25),
    desc: "District-wide blood donation drive with the Ghana Health Service.",
  },
  {
    title: "Green Ghana Tree Planting",
    dateLabel: "July 10, 2026",
    start: new Date(2026, 6, 10),
    end: new Date(2026, 6, 10),
    desc: "Environmental service day planting trees and promoting sustainability.",
  },
  {
    title: "Membership Engagement Week",
    dateLabel: "July 22–24, 2026",
    start: new Date(2026, 6, 22),
    end: new Date(2026, 6, 24),
    desc: "Cluster-driven membership and fellowship activities across District 9104.",
  },
];

function getDatesInRange(start: Date, end: Date) {
  const dates = [];
  const current = new Date(start);

  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 5, 18));

  const eventDates = useMemo(
    () => events.flatMap((event) => getDatesInRange(event.start, event.end)),
    [],
  );

  const selectedEvents = useMemo(
    () => events.filter((event) => selectedDate >= event.start && selectedDate <= event.end),
    [selectedDate],
  );

  return (
    <div>
      <PageHero breadcrumb="Events" title="District Event Calendar" subtitle="Stay up to date with all district events and activities" image={heroAboutImg} />
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.5fr_0.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex-1 items-center justify-center gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Interactive calendar</p>
                  <h2 className="font-display text-primary text-3xl font-bold mt-2">June 2026 events</h2>
                </div>
                <p className="mt-2 text-slate-500 text-sm">Tap any marked date to view details.</p>
              </div>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiers={{ event: eventDates }}
                modifiersClassNames={{ event: "bg-secondary/10 text-primary-dark" }}
                defaultMonth={new Date(2026, 5)}
                size='lg'
              />
            </div>

            <aside className="space-y-6">
              <HighlightBox title="Selected date">
                {selectedEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedEvents.map((event) => (
                      <div key={event.title} className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{event.dateLabel}</p>
                        <h3 className="font-semibold text-primary mt-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{event.desc}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-100">No events scheduled for the selected date.</p>
                )}
              </HighlightBox>
              <HighlightBox title="Upcoming events">
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.title} className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{event.dateLabel}</p>
                      <h3 className="font-semibold text-primary mt-2">{event.title}</h3>
                    </div>
                  ))}
                </div>
              </HighlightBox>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
