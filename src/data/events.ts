export type CalendarEvent = {
  title: string;
  dateLabel?: string;
  start?: Date;
  end?: Date;
  desc: string;
};

const calendarEvents: CalendarEvent[] = [
  {
    title: "Leadership Learning Seminars for New Club Officers",
    dateLabel: "April – June 2026",
    start: new Date(2026, 3, 1),
    end: new Date(2026, 5, 30),
    desc: "A continuing leadership development series for newly elected club officers.",
  },
  {
    title: "Joint District Investiture",
    dateLabel: "July 4, 2026",
    start: new Date(2026, 6, 4),
    end: new Date(2026, 6, 4),
    desc: "A district-wide investiture ceremony for the new leadership team.",
  },
  {
    title: "Tropical Twilight Networking and Awards",
    dateLabel: "July 25, 2026",
    start: new Date(2026, 6, 25),
    end: new Date(2026, 6, 25),
    desc: "A flagship experience focused on fellowship, impact, and youth leadership.",
  },
  {
    title: "ADDR'S Visit to Clusters",
    dateLabel: "Date TBD",
    desc: "A cluster visit programme to strengthen engagement and district presence.",
  },
  {
    title: "International Youth Day",
    dateLabel: "Date TBD",
    desc: "A youth-focused celebration of service, leadership, and global citizenship.",
  },
  {
    title: "Membership Seminar",
    dateLabel: "Date TBD",
    desc: "A seminar focused on membership growth, retention, and club strengthening.",
  },
  {
    title: "Board Meeting",
    dateLabel: "Date TBD",
    desc: "A district leadership board meeting to review programmes and strategy.",
  },
  {
    title: "State of The District Address",
    dateLabel: "Date TBD",
    desc: "A state-of-the-district address highlighting progress and priorities.",
  },
  {
    title: "Opening of DLAC Registration",
    dateLabel: "Date TBD",
    desc: "Registration opens for the District Learnng Assembly and Conference programme.",
  },
  {
    title: "District Membership Drive",
    dateLabel: "Date TBD",
    desc: "A focused district drive to welcome and onboard new members.",
  },
  {
    title: "National Volunteers Day & Pints of Impact",
    dateLabel: "Date TBD",
    desc: "A combined volunteer appreciation and community impact celebration.",
  },
  {
    title: "DRR'S Visit",
    dateLabel: "Date TBD",
    desc: "A district-wide visit programme by the DRR to engage clubs and members.",
  },
  {
    title: "Zone Institute (Uganda)",
    dateLabel: "Date TBD",
    desc: "A zone-based leadership and learning institute in Uganda.",
  },
  {
    title: "Career Guidance and Mentorship",
    dateLabel: "Date TBD",
    desc: "A mentorship and career guidance programme for young leaders.",
  },
  {
    title: "First Quarter District Board Meeting",
    dateLabel: "Date TBD",
    desc: "The first quarterly board meeting of the district leadership team.",
  },
  {
    title: "State of the District Address – Quarter One in Focus",
    dateLabel: "Date TBD",
    desc: "A review of district achievements and priorities for the quarter.",
  },
  {
    title: "District Newsletter Release – First Quarter",
    dateLabel: "Date TBD",
    desc: "Release of the district's first-quarter newsletter and updates.",
  },
];

const today = () => {
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  return base;
};

function normalizeEvents(eventsList: CalendarEvent[]) {
  return [...eventsList].sort((a, b) => {
    if (a.start instanceof Date && b.start instanceof Date) {
      return a.start.getTime() - b.start.getTime();
    }
    if (a.start instanceof Date) return -1;
    if (b.start instanceof Date) return 1;
    return a.title.localeCompare(b.title);
  });
}

export function getUpcomingEvents(eventsList: CalendarEvent[], limit?: number) {
  const now = today();
  const upcoming = normalizeEvents(eventsList).filter(
    (event) =>
      (event.start instanceof Date && event.start >= now) ||
      !event.start,
  );

  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;
}

export function getEventDates(eventsList: CalendarEvent[]) {
  return eventsList.flatMap((event) => {
    if (!(event.start instanceof Date) || !(event.end instanceof Date)) {
      return [];
    }

    const dates: Date[] = [];
    const current = new Date(event.start);
    while (current <= event.end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return dates;
  });
}

export function getEventsByDate(eventsList: CalendarEvent[], date: Date) {
  return eventsList.filter(
    (event) =>
      event.start instanceof Date &&
      event.end instanceof Date &&
      date >= event.start &&
      date <= event.end,
  );
}

export default calendarEvents;
