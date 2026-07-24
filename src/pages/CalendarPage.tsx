import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import HighlightBox from "../components/HighlightBox";
import { Calendar } from "../components/ui/calendar";
import heroAboutImg from "../assets/heroImages/july calenda.png";
import calendarEvents, { getEventDates, getEventsByDate } from "../data/events";

const events = calendarEvents;

function getDatesInRange(start?: Date, end?: Date) {
  if (!(start instanceof Date) || !(end instanceof Date)) {
    return [];
  }

  const dates = [];
  const current = new Date(start);

  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(() => new Date());

  const sortedEvents = useMemo(
    () =>
      [...events].sort((a, b) => {
        if (!a.start && !b.start) return 0;
        if (!a.start) return 1;
        if (!b.start) return -1;
        return a.start.getTime() - b.start.getTime();
      }),
    [],
  );

  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const upcomingEvents = useMemo(
    () =>
      sortedEvents.filter(
        (event) =>
          (event.start instanceof Date && event.start >= today) ||
          !event.start,
      ),
    [sortedEvents, today],
  );

  const visibleEvents = useMemo(
    () => (showAllEvents ? upcomingEvents : upcomingEvents.slice(0, 5)),
    [showAllEvents, upcomingEvents],
  );

  const eventDates = useMemo(() => getEventDates(sortedEvents), [sortedEvents]);

  const selectedEvents = useMemo(
    () => getEventsByDate(sortedEvents, selectedDate),
    [selectedDate, sortedEvents],
  );

  // Get current month and year for display
  const currentMonthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <div>
      <PageHero 
        breadcrumb="Events" 
        title="District Event Calendar"
        subtitle="Stay up to date with all district events and activities" 
        image={heroAboutImg}
      />
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.5fr_0.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Interactive calendar</p>
                <h2 className="font-display text-primary text-3xl font-bold mt-2">{currentMonthName}</h2>
                <p className="mt-2 text-slate-500 text-sm">Highlighted dates have activities. Click a date to see what is scheduled.</p>
              </div>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => setSelectedDate(date ?? new Date())}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                modifiers={{ event: eventDates }}
                modifiersClassNames={{ event: "bg-primary text-white rounded-full font-semibold relative" }}
                components={{
                  DayContent: ({ date }) => {
                    const hasEvent = eventDates.some(
                      (eventDate) => eventDate.toDateString() === date.toDateString(),
                    );

                    return (
                      <div className="relative flex h-full w-full items-center justify-center">
                        <span>{date.getDate()}</span>
                        {hasEvent && (
                          <span className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                        )}
                      </div>
                    );
                  },
                }}
                defaultMonth={new Date()}
                size='lg'
              />
            </div>

            <aside className="space-y-6">
              <HighlightBox title={`Events on ${selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`}>
                {selectedEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedEvents.map((event) => (
                      <div key={event.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{event.dateLabel || "Date TBD"}</p>
                        <h3 className="font-semibold text-primary mt-2">{event.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">{event.desc}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500">No events scheduled for the selected date.</p>
                )}
              </HighlightBox>
              <HighlightBox title={showAllEvents ? "All upcoming events" : "Upcoming events"}>
                <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                  {visibleEvents.length > 0 ? (
                    visibleEvents.map((event) => (
                      <div key={event.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{event.dateLabel || "Date TBD"}</p>
                        <h3 className="font-semibold text-primary mt-2">{event.title}</h3>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500">No upcoming events to display.</p>
                  )}
                </div>
                {upcomingEvents.length > 5 && (
                  <button
                    type="button"
                    onClick={() => setShowAllEvents((value) => !value)}
                    className="mt-4 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    {showAllEvents ? "Show fewer events" : "Show all events"}
                  </button>
                )}
              </HighlightBox>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;