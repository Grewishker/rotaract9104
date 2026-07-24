import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Search, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Filter,
  Building2,
  Grid3x3,
  List,
  Sparkles,
  User,
  Award,
  Calendar,
  Clock,
  Link,
  Info
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};

const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// All 16 regions of Ghana
const GHANA_REGIONS = [
  "Ahafo",
  "Ashanti", 
  "Bono",
  "Bono East",
  "Central",
  "Eastern",
  "Greater Accra",
  "North East",
  "Northern",
  "Oti",
  "Savannah",
  "Upper East",
  "Upper West",
  "Volta",
  "Western",
  "Western North"
];

// Complete list of 64 clubs - 48 with full data, 16 with basic data
const clubs = [
  // Clubs 1-48: Full Data
  { 
    id: 1, 
    name: "Rotaract Club of UENR", 
    president: "Kankam Boadu Hilda", 
    region: "Bono", 
    status: "active",
    chartered: "2016",
    meetingDay: "Saturday, 6:00pm",
    venue: "LTS 1, UENR campus",
    email: "rotaractuenr65@gmail.com",
    membership: 19,
    contact: "Sandra Achiaa Adu-Gyamfi",
    contactNumber: "+233 59 491 1821",
    type: "Institutional",
    socials: "Rotaractuenr (TikTok & Instagram)",
    socialLinks: { tiktok: "Rotaractuenr", instagram: "Rotaractuenr" },
    hasFullData: true
  },
  { 
    id: 2, 
    name: "Rotaract Club of Accra-Teshie Nungua", 
    president: "Anna Mensah", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2024",
    meetingDay: "Sunday, 4:30 for 5 pm",
    venue: "Marketing Consumer Insights Ltd",
    email: "Rotaractteshienugua@gmail.com",
    membership: 24,
    contact: "Ella Atule",
    contactNumber: "+233 55 796 0773",
    type: "Community",
    socials: "rocatn",
    socialLinks: { instagram: "rocatn", facebook: "rocatn", tiktok: "rocatn" },
    hasFullData: true
  },
  { 
    id: 3, 
    name: "Rotaract Club of Accra Ring Road Central", 
    president: "Charlotte Mensah", 
    region: "Greater Accra", 
    status: "active",
    chartered: "1995",
    meetingDay: "Wednesdays, 6 for 6:30",
    venue: "Sesnas Patisserie",
    email: "info@rotaractrrc.org",
    email2: "rotaractclubrrc@gmail.com",
    membership: 77,
    contact: "Nana Ama Pobee",
    contactNumber: "054 573 0977",
    type: "Community",
    socials: "rrcrotaract",
    socialLinks: { instagram: "rrcrotaract", facebook: "rrcrotaract" },
    hasFullData: true
  },
  { 
    id: 4, 
    name: "Rotaract Club of Accra-East Legon", 
    president: "Ruth Beulah Awotwe", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2020",
    meetingDay: "Fridays, 6:30pm for 7pm",
    venue: "Former Rotary D9102 Secretariat",
    email: "rotaracteastlegon@gmail.com",
    membership: 79,
    contact: "Emmanuel Owusu",
    contactNumber: "+233 20 144 5928",
    type: "Community",
    socials: "eastlegonrotaract",
    website: "https://rocael.com/",
    socialLinks: { 
      instagram: "eastlegonrotaract", 
      facebook: "eastlegonrotaract", 
      tiktok: "eastlegonrotaract",
      twitter: "rocael_23",
      linkedin: "Rotaract Club of Accra-East Legon"
    },
    hasFullData: true
  },
  { 
    id: 5, 
    name: "Rotaract Club of Tema", 
    president: "RP Elizabeth T-Botchway", 
    region: "Greater Accra", 
    status: "active",
    chartered: "1997",
    meetingDay: "Every other Tuesdays, 6:30 for 7:00pm",
    venue: "Rotary Center (Tema Community 5)",
    email: "temarotaract@gmail.com",
    membership: 27,
    contact: "Rtr Kekeli",
    contactNumber: "+233 27 329 4063",
    type: "Community",
    socials: "Rotaractcluboftemamain",
    socialLinks: { instagram: "Rotaractcluboftemamain", facebook: "Rotaractcluboftemamain" },
    hasFullData: true
  },
  { 
    id: 6, 
    name: "Rotaract E-Club of One World", 
    president: "Akofa Mortty", 
    region: "Greater Accra", 
    status: "active",
    chartered: "18/10/2020",
    meetingDay: "Sunday 6:30pm for 7:00pm",
    venue: "Google Meets",
    email: "rotaractoneworld@gmail.com",
    membership: 40,
    contact: "Pamela Anim Asiedu",
    contactNumber: "0547994264",
    type: "Community (E-Club)",
    socials: "linktr.ee/rotaract_eclub_oneworld",
    socialLinks: { linktree: "rotaract_eclub_oneworld" },
    hasFullData: true
  },
  { 
    id: 7, 
    name: "Rotaract Club of Ghana Christian University College", 
    president: "Amoh Isaac Melchizedek", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2026",
    meetingDay: "Sunday 6:00 pm for 6:30pm",
    venue: "GCUC campus",
    email: "rotaractclubofghanachristianun@gmail.com",
    membership: 16,
    contact: "Edward Afful",
    contactNumber: "0596081748",
    type: "Institutional",
    socials: "Rotaract Club of GCUC",
    socialLinks: { instagram: "Rotaract Club of GCUC", facebook: "Rotaract Club of GCUC" },
    hasFullData: true
  },
  { 
    id: 8, 
    name: "Rotaract Club of Wa", 
    president: "Kala Ronald Stevens", 
    region: "Upper West", 
    status: "active",
    chartered: "2025",
    meetingDay: "Every other Sundays, 5:00pm for 5:30pm",
    venue: "Kalgaston's First and Last Gardens",
    email: "rotaractclubofwa@gmail.com",
    membership: 19,
    contact: "Victoria Dery",
    contactNumber: "0246179935",
    type: "Community",
    socials: "Rotaract.Club.Wa",
    socialLinks: { instagram: "Rotaract.Club.Wa", facebook: "Rotaract.Club.Wa" },
    hasFullData: true
  },
  { 
    id: 9, 
    name: "Rotaract Club of Accra-East", 
    president: "RP Flora Puopele", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2010",
    meetingDay: "Every other Tuesdays, 6:00 for 6:30pm",
    venue: "Sesna's Patisserie",
    email: "accraeastrotaract@gmail.com",
    membership: 58,
    contact: "PE Nathan Ankamah",
    contactNumber: "+233 27 221 4028",
    type: "Community",
    socials: "rotaractaccraeast",
    socialLinks: { instagram: "rotaractaccraeast", facebook: "rotaractaccraeast" },
    hasFullData: true
  },
  { 
    id: 10, 
    name: "Rotaract Club of Accra-Adabraka", 
    president: "Magdalene Naa Korkoi Tettey", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2003",
    meetingDay: "Sunday - 4:30 for 5:00 pm",
    venue: "Synergies Institute",
    email: "rcaccraadabraka@gmail.com",
    membership: 15,
    contact: "Rtr Bob",
    contactNumber: "0245010674",
    type: "Community",
    socials: "Rotaract club of Accra-Adabraka",
    socialLinks: { instagram: "Rotaract club of Accra-Adabraka", facebook: "Rotaract club of Accra-Adabraka" },
    hasFullData: true
  },
  { 
    id: 11, 
    name: "Rotaract Club of UPSA", 
    president: "Bright Soka", 
    region: "Greater Accra", 
    status: "active",
    chartered: "1994",
    meetingDay: "Monday, 6:00 pm",
    venue: "UPSA Campus (LBC Block)",
    email: "rotaractupsa@gmail.com",
    membership: 32,
    contact: "Owusu Anane Kelvin",
    contactNumber: "0545333134",
    type: "Institutional",
    socials: "Rotaractupsa",
    socialLinks: { instagram: "Rotaractupsa", facebook: "Rotaractupsa" },
    hasFullData: true
  },
  { 
    id: 12, 
    name: "Rotaract E-club of Ghana", 
    president: "Susana Asantewaa Onomah", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2021",
    meetingDay: "Sundays (6:45 for 7pm)",
    venue: "Virtual",
    email: "rotaracteclubofghana@gmail.com",
    membership: 71,
    contact: "Agnes Peprah Ankomah",
    contactNumber: "0597569020",
    type: "E-club",
    socials: "rotaract_eclub_ghana",
    socialLinks: { 
      instagram: "rotaract_eclub_ghana", 
      linkedin: "Rotaract E-club of Ghana" 
    },
    hasFullData: true
  },
  { 
    id: 13, 
    name: "Rotaract Club of Accra Osu-RE", 
    president: "Richard Osei Asamoah", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2007",
    meetingDay: "Fridays, 6:30pm for 7:00pm",
    venue: "Christ the King Parish Hall",
    email: "Rotaractclub.osu.re@gmail.com",
    membership: 24,
    contact: "PP Delali",
    contactNumber: "+233 55 700 0245",
    type: "Community",
    socials: "rotaractaccraosure",
    socialLinks: { instagram: "rotaractaccraosure" },
    hasFullData: true
  },
  { 
    id: 14, 
    name: "Rotaract Club of Adentan", 
    president: "Clement Badu-Nyarko", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2001",
    meetingDay: "Thursdays, 6:30pm",
    venue: "Sesnas Patisserie 37",
    email: "Rotaractadentan@gmail.com",
    membership: 42,
    contact: "Valerie",
    contactNumber: "027 386 3164",
    type: "Community",
    socials: "Rotaract Club of Adentan",
    socialLinks: { 
      instagram: "Rotaract Club of Adentan", 
      facebook: "Rotaract Club of Adentan",
      linkedin: "Rotaract Club of Adentan"
    },
    hasFullData: true
  },
  { 
    id: 15, 
    name: "Rotaract Club of Adenta Central", 
    president: "LETICIA EWOENAM AMETOR", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2017",
    meetingDay: "FRIDAYS 6:30 for 7:00",
    venue: "ZARRRD CUISINE (RITZ JUNCTION)",
    email: "rotaractclubofadentacentral@gmail.com",
    membership: 50,
    contact: "Joojo",
    contactNumber: "050 878 3128",
    type: "Community",
    socials: "Rotaract Club of Adenta Central",
    socialLinks: { 
      instagram: "Rotaract Club of Adenta Central", 
      facebook: "Rotaract Club of Adenta Central",
      linkedin: "Rotaract Club of Adenta Central",
      tiktok: "Rotaract Club_Adenta Central"
    },
    hasFullData: true
  },
  { 
    id: 16, 
    name: "Rotaract Club of Accra-Dome", 
    president: "Helen Adwoa Asomaniwaa Buabin", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2025",
    meetingDay: "1st and 3rd Saturdays, 5:30 for 6:00pm",
    venue: "GSP HOTEL, Kwabenya (Beside Kwabenya KFC)",
    email: "rotaractaccradome@gmail.com",
    membership: 28,
    contact: "PE Grace Aboagyewaa",
    contactNumber: "0548422804",
    type: "Community",
    socials: "rota_dome",
    socialLinks: { 
      instagram: "rota_dome", 
      linkedin: "Rotaract club of Accra-Dome" 
    },
    hasFullData: true
  },
  { 
    id: 17, 
    name: "Rotaract Club of Accra-Airport", 
    president: "Louisa Banzini Mahama", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2023",
    meetingDay: "1st and 3rd Wednesday, 6:00pm for 6:30pm",
    venue: "Sesna's patisserie",
    email: "rotaractclubofaccraairport@gmail.com",
    membership: 40,
    contact: "Sediam Esi Wilson",
    contactNumber: "024 987 0307",
    type: "Community",
    socials: "rotaractairport",
    socialLinks: { instagram: "rotaractairport" },
    hasFullData: true
  },
  { 
    id: 18, 
    name: "Rotaract Club Of Regional Maritime University", 
    president: "Alugbo Joana Mornah", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2017",
    meetingDay: "Thursday 4:30 for 5:00",
    venue: "Transport department RMU",
    email: "rotaractclubrmu@gmail.com",
    membership: 22,
    contact: "Vanessa",
    contactNumber: "0548428263",
    type: "Institutional",
    socials: "Rotaractrmu_live",
    socialLinks: { 
      instagram: "Rotaractrmu_live", 
      tiktok: "rmurotaractrmu _live" 
    },
    hasFullData: true
  },
  { 
    id: 19, 
    name: "Rotaract Club of Kumasi", 
    president: "Kingsford Amoah", 
    region: "Ashanti", 
    status: "active",
    chartered: "2017",
    meetingDay: "Sunday 4:30 PM for 5:00 PM",
    venue: "Cultural Center, Bantama",
    email: "rotaractclubofkumasi@gmail.com",
    membership: 38,
    contact: "Sakina Mohammed",
    contactNumber: "0247602131",
    type: "Community",
    socials: "KumasiRotaract",
    socialLinks: { 
      facebook: "RotaractClubofKumasi", 
      instagram: "KumasiRotaract",
      tiktok: "KumasiRotaract"
    },
    hasFullData: true
  },
  { 
    id: 20, 
    name: "Rotaract Club of Sunyani", 
    president: "Ganiu Moro", 
    region: "Bono", 
    status: "active",
    chartered: "2020",
    meetingDay: "Wednesday, 6:00 pm",
    venue: "Sunyani Technical University",
    email: "rotaractclubofsunyani@gmail.com",
    membership: 17,
    contact: "Theresah Apraku",
    contactNumber: "0548287649",
    type: "Community",
    socials: "Rotaract club of Sunyani",
    socialLinks: { facebook: "Rotaract club of Sunyani" },
    hasFullData: true
  },
  { 
    id: 21, 
    name: "Rotaract Club of Accra-South", 
    president: "Patrick Kofi Amanor", 
    region: "Greater Accra", 
    status: "active",
    chartered: "24th April, 2009",
    meetingDay: "Thursdays, 6:30pm for 7pm",
    venue: "Cafe Bar Noir & GHAFES",
    email: "rotaractclubofaccrasouth@gmail.com",
    membership: 16,
    contact: "PE Christian",
    contactNumber: "0279144662",
    type: "Community",
    socials: "asrotaract",
    socialLinks: { 
      instagram: "asrotaract", 
      facebook: "Rotaract Club of Accra-South",
      tiktok: "asrotaract_"
    },
    hasFullData: true
  },
  { 
    id: 22, 
    name: "Rotaract Club of Ashesi University", 
    president: "Elsa Hagan", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2024",
    meetingDay: "Wednesdays (7pm)",
    venue: "Ashesi Campus",
    email: "ashesi.rotaract@ashesi.edu.gh",
    membership: 34,
    contact: "Elsa Hagan",
    contactNumber: "0551364880",
    type: "Institutional",
    socials: "rotaract_ashesi",
    socialLinks: { 
      instagram: "rotaract_ashesi", 
      linkedin: "Rotaract Club of Ashesi" 
    },
    hasFullData: true
  },
  { 
    id: 23, 
    name: "Rotaract Club of Tema-Community 25", 
    president: "Xorlali Agorsor", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2025",
    meetingDay: "Saturdays 6:00 pm",
    venue: "Tema-Community 25 estate junction, opposite papas pizza",
    email: "rotaract.temacommunity25@gmail.com",
    membership: 26,
    contact: "Rtr Dorothy",
    contactNumber: "0243868706",
    type: "Community",
    socials: "rotaract_tema25",
    socialLinks: { instagram: "rotaract_tema25", facebook: "rotaract_tema25" },
    hasFullData: true
  },
  { 
    id: 24, 
    name: "Rotaract Club of Accra-Labone", 
    president: "Elorm Dagadu (Kaiser)", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2002",
    meetingDay: "Friday, 6:30 pm",
    venue: "37 Officers' Mess, Nursing and Midwifery",
    email: "rotaractclubofaccralabone@gmail.com",
    membership: 35,
    contact: "Mabel Odoom",
    contactNumber: "0594786968",
    type: "Community",
    socials: "rotaractaccralabone",
    socialLinks: { linktree: "rotaractaccralabone" },
    hasFullData: true
  },
  { 
    id: 25, 
    name: "Rotaract Club of University of Ghana", 
    president: "Priscilla Adjei-Fordjour", 
    region: "Greater Accra", 
    status: "active",
    chartered: "1973",
    meetingDay: "Sundays, 3:30 for 4pm",
    venue: "Engineering school conference room",
    email: "ugrotaractclub@gmail.com",
    membership: 60,
    contact: "Joan Azuntaba",
    contactNumber: "059 201 0598",
    type: "Institutional",
    socials: "rotaract_ug",
    socialLinks: { 
      instagram: "rotaract_ug?igsh=M2g5eG14OTd4OGVu" 
    },
    hasFullData: true
  },
  { 
    id: 26, 
    name: "Rotaract Club of St. Louis College of Education", 
    president: "Innocential Afrakomah Oppong", 
    region: "Ashanti", 
    status: "active",
    chartered: "2022",
    meetingDay: "Sunday, 2:30pm",
    venue: "LR1, St.Louis campus",
    email: "rotaractuenrslce@gmail.com",
    membership: 25,
    contact: "Afriyie Abena",
    contactNumber: "0594716537",
    type: "Institutional",
    socials: "Rotaractuenr",
    socialLinks: { tiktok: "Rotaractuenr", instagram: "Rotaractuenr" },
    hasFullData: true
  },
  { 
    id: 27, 
    name: "Rotaract Club of GIMPA", 
    president: "Meshach Abeka Deveer", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2026",
    meetingDay: "Friday 3pm",
    venue: "New Business School",
    email: "rotaractgimpa@gmail.com",
    membership: 20,
    contact: "Rtr Meshach (CP)",
    contactNumber: "0241182613",
    type: "Institutional",
    socials: "Rotaract club of GIMPA",
    socialLinks: { instagram: "Rotaract club of GIMPA" },
    hasFullData: true
  },
  { 
    id: 28, 
    name: "Rotaract Club of Takoradi", 
    president: "Robert Kafui Agbanaglo", 
    region: "Western", 
    status: "active",
    chartered: "2006",
    meetingDay: "Sunday - 4:30 for 5:00pm",
    venue: "Road safety adjacent Telecel",
    email: "rotaract9104.takoradi@gmail.com",
    membership: 28,
    contact: "Clarabelle Andoh",
    contactNumber: "0557589930",
    type: "Community",
    socials: "rotaract_taadi",
    socialLinks: { 
      instagram: "rotaract_taadi", 
      facebook: "rotaract_taadi",
      tiktok: "rotaracttaadi"
    },
    hasFullData: true
  },
  { 
    id: 29, 
    name: "Rotaract Club of UCC", 
    president: "Kwakye Clara Dorothy Agyeman", 
    region: "Central", 
    status: "active",
    chartered: "1988",
    meetingDay: "Sunday 2pm",
    venue: "LT1",
    email: "rotaractclubofucc@gmail.com",
    membership: 101,
    contact: "Rtr Akwasi",
    contactNumber: "0532930430",
    type: "Institutional",
    socials: "Rotaract UCC",
    socialLinks: { instagram: "Rotaract UCC", facebook: "Rotaract UCC" },
    hasFullData: true
  },
  { 
    id: 30, 
    name: "Rotaract Club of Accra La East", 
    president: "Felicity Adorkor Anang", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2022",
    meetingDay: "1st and 3rd Sundays, 3:30 for 4:00pm",
    venue: "Cherlyans Restaurant (Tse Addo)",
    email: "rotaractclubaccralaeast@gmail.com",
    membership: 26,
    contact: "CP Julian",
    contactNumber: "020 990 4693",
    type: "Community",
    socials: "Rotaract club of Accra La East",
    socialLinks: { instagram: "Rotaract club of Accra La East" },
    hasFullData: true
  },
  { 
    id: 31, 
    name: "Rotaract Club of Weija", 
    president: "Elikplim K. Dunyoh", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2023",
    meetingDay: "Sundays. 3:30pm for 4:00pm",
    venue: "Ucoms, SCC Junction",
    email: "rocweija@gmail.com",
    membership: 21,
    contact: "IPP Queena",
    contactNumber: "0573399005",
    type: "Community",
    socials: "rocweija",
    socialLinks: { 
      facebook: "rocweija", 
      instagram: "rocweija",
      twitter: "rocweija" 
    },
    hasFullData: true
  },
  { 
    id: 32, 
    name: "Rotaract Club of Accra Agri-Eco", 
    president: "Prince Osei", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2024",
    meetingDay: "Saturdays 4pm for 4:30pm",
    venue: "Sunlodge hotel-Tesano",
    email: "rcofaccraagrieco@gmail.com",
    membership: 22,
    contact: "0248666052",
    contactNumber: "0248666052",
    type: "Community",
    socials: "",
    socialLinks: {},
    hasFullData: true
  },
  { 
    id: 33, 
    name: "Rotaract Club of Adenta Fafraha", 
    president: "Kofi Sarfo-Ababio", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2026",
    meetingDay: "Sundays, 4:00pm for 4:30pm",
    venue: "Jefkings Palace Hotel, Fafraha",
    email: "rotaractclubofadentafafraha@gmail.com",
    membership: 17,
    contact: "Kofi Sarfo-Ababio",
    contactNumber: "0557673520",
    type: "Community",
    socials: "Rotaract Club Of Adenta Fafraha",
    socialLinks: { instagram: "Rotaract Club Of Adenta Fafraha" },
    hasFullData: true
  },
  { 
    id: 34, 
    name: "Rotaract Club of KNUST", 
    president: "Daniella Opare Ayim", 
    region: "Ashanti", 
    status: "active",
    chartered: "2006",
    meetingDay: "Sundays, 3:00pm for 3:30pm",
    venue: "Central Classroom Block",
    email: "rotaractknust7@gmail.com",
    membership: 25,
    contact: "Abigail",
    contactNumber: "053 061 6558",
    type: "Institutional",
    socials: "Rotaract club of KNUST",
    socialLinks: { 
      tiktok: "Rotaract club of KNUST", 
      facebook: "Rotaract club of KNUST",
      instagram: "Rotaract club of KNUST" 
    },
    hasFullData: true
  },
  { 
    id: 35, 
    name: "Rotaract Club of UMaT Essikado Campus", 
    president: "Faruzatu Tahiru", 
    region: "Western", 
    status: "active",
    chartered: "2024",
    meetingDay: "Saturday, 4pm",
    venue: "Classroom",
    email: "rcumatessikadocampus@gmail.com",
    membership: 14,
    contact: "IPP Benjamin Ametam",
    contactNumber: "0257375075",
    type: "Institutional",
    socials: "Rotaract Club of UMaT Essikado Campus-Takoradi",
    socialLinks: { linkedin: "Rotaract Club of UMaT Essikado Campus-Takoradi" },
    hasFullData: true
  },
  { 
    id: 36, 
    name: "Rotaract Club of Koforidua Technical University", 
    president: "Rtr Ebenezer Kwaku Frimpong", 
    region: "Eastern", 
    status: "active",
    chartered: "2022",
    meetingDay: "Sundays 4 pm to 5pm",
    venue: "KTU campus",
    email: "rotaractclubofktu@gmail.com",
    membership: 20,
    contact: "Rtr Ebenezer",
    contactNumber: "0536820452",
    type: "Institutional",
    socials: "Rotaract club of KTU",
    socialLinks: { tiktok: "Rotaract club of KTU" },
    hasFullData: true
  },
  { 
    id: 37, 
    name: "Rotaract Club of Obuasi", 
    president: "Charles Adu Sarkodie (Koffi Adu)", 
    region: "Ashanti", 
    status: "active",
    chartered: "2021",
    meetingDay: "Fortnightly on Sundays, 4 for 4:30 p.m.",
    venue: "Obuasi Sports Club (OSC)",
    email: "rotaractclub.obuasi@gmail.com",
    membership: 18,
    contact: "Rtr Akua Bonnah",
    contactNumber: "0249935056",
    type: "Community",
    socials: "Rotaract Club of Obuasi",
    socialLinks: { facebook: "Rotaract Club of Obuasi", instagram: "Rotaract Club of Obuasi" },
    hasFullData: true
  },
  { 
    id: 38, 
    name: "Rotaract Club of UBIDS", 
    president: "Nuokore Isaac", 
    region: "Upper West", 
    status: "active",
    chartered: "2018",
    meetingDay: "Sundays, 3:00pm for 3:30pm",
    venue: "Campus premises",
    email: "rotaractclubofubids@gmail.com",
    membership: 30,
    contact: "IPP Raymond",
    contactNumber: "0593619702",
    type: "Institutional",
    socials: "Rotaract club of UBIDS",
    socialLinks: { 
      tiktok: "Rotaract club of UBIDS", 
      facebook: "Rotaract club of UBIDS",
      instagram: "Rotaract club of UBIDS" 
    },
    hasFullData: true
  },
  { 
    id: 39, 
    name: "Rotaract Club of UDS Nyankpala Campus", 
    president: "Rtr Chentiwuni Alhassan", 
    region: "Northern", 
    status: "active",
    chartered: "2025",
    meetingDay: "Sundays 3:30pm for 4pm",
    venue: "UDS Nyankpala campus",
    email: "rotaryclubofnyankpala@gmail.com",
    membership: 16,
    contact: "Rtr Chentiwuni",
    contactNumber: "0597 304 114",
    type: "Institutional",
    socials: "Rotaract Club of UDS NYC",
    socialLinks: { 
      tiktok: "Rotaract Club of UDS NYC", 
      instagram: "Rotaract Club of UDS NYC",
      facebook: "Rotaract Club of UDS NYC" 
    },
    hasFullData: true
  },
  { 
    id: 40, 
    name: "Rotaract Club of UDS Tamale", 
    president: "Issahaku Santia Hikmatu", 
    region: "Northern", 
    status: "active",
    chartered: "2012",
    meetingDay: "Sundays, 4 for 4:30 pm",
    venue: "UDS Tamale campus",
    email: "udsrotaract@gmail.com",
    membership: 25,
    contact: "Rtr. Ibrahim",
    contactNumber: "0500017636",
    type: "Institutional",
    socials: "Rotaract Club of UDS Tamale",
    socialLinks: { 
      instagram: "Rotaract Club of UDS Tamale", 
      facebook: "Rotaract Club of UDS Tamale",
      tiktok: "Rotaract Club of UDS Tamale",
      linkedin: "Rotaract Club of UDS Tamale",
      twitter: "Rotaract Club of UDS Tamale" 
    },
    hasFullData: true
  },
  { 
    id: 41, 
    name: "Rotaract Club of Kumasi-Ayigya", 
    president: "Bernice Boamah", 
    region: "Ashanti", 
    status: "active",
    chartered: "2024",
    meetingDay: "Fridays, 6:30 p.m.",
    venue: "PPAG Hall, KNUST",
    email: "rotakumasiayigya@gmail.com",
    membership: 23,
    contact: "Rtr Gerald Sasraku",
    contactNumber: "0546937948",
    type: "Community",
    socials: "Rotaract Club of Kumasi-Ayigya",
    socialLinks: { 
      tiktok: "Rotaract Club of Kumasi-Ayigya", 
      facebook: "Rotaract Club of Kumasi-Ayigya",
      instagram: "Rotaract Club of Kumasi-Ayigya" 
    },
    hasFullData: true
  },
  { 
    id: 42, 
    name: "Rotaract Club of Aflao", 
    president: "Emmanuel Dzimadzor", 
    region: "Volta", 
    status: "active",
    chartered: "2017",
    meetingDay: "Thursday 6:30pm for 7:00pm",
    venue: "Makavo Hotel",
    email: "rotaract.aflao@gmail.com",
    membership: 18,
    contact: "Daniel Fumey",
    contactNumber: "0543030412",
    type: "Community",
    socials: "",
    socialLinks: {},
    hasFullData: true
  },
  { 
    id: 43, 
    name: "Rotaract Club of Winneba", 
    president: "Albert Asiamah Antwi", 
    region: "Central", 
    status: "active",
    chartered: "2024",
    meetingDay: "Thursdays, 6:00pm for 6:30pm",
    venue: "Munch box, ECG junction",
    email: "rotaractwinneba@gmail.com",
    membership: 36,
    contact: "Rtr Denis (CP)",
    contactNumber: "+233 50 836 3478",
    type: "Community",
    socials: "Rotaract club of Winneba",
    socialLinks: { instagram: "Rotaract club of Winneba" },
    hasFullData: true
  },
  { 
    id: 44, 
    name: "Rotaract Club of Accra-Osu Oxford Street", 
    president: "Aryee Kingsley AyiQuaye", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2018",
    meetingDay: "Fridays. 6:00pm for 6:30pm",
    venue: "Sesnas Pastisserie (37)",
    email: "rotaractaoos@gmail.com",
    membership: 25,
    contact: "Rtr.Abigail",
    contactNumber: "+233 55 710 9226",
    type: "Community",
    socials: "rcaoos",
    socialLinks: { linktree: "rcaoos" },
    hasFullData: true
  },
  { 
    id: 45, 
    name: "Rotaract Club of University of Health and Allied Sciences-Ho", 
    president: "Theophilus Mensah-Sebuabe", 
    region: "Volta", 
    status: "active",
    chartered: "2015",
    meetingDay: "Fridays. 6:00pm for 6:30pm",
    venue: "Trafalgar Campus",
    email: "Rotaractuhas24@gmail.com",
    membership: 48,
    contact: "Theophilus",
    contactNumber: "+233 54 504 3790",
    type: "Institutional",
    socials: "rotaractuhas2023",
    socialLinks: { instagram: "rotaractuhas2023" },
    hasFullData: true
  },
  { 
    id: 46, 
    name: "Rotaract Club of Tema Meridian", 
    president: "Elikem Asem", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2001",
    meetingDay: "Thursdays. 6:30pm for 7:00pm",
    venue: "Tema Rotary Center",
    email: "rotameridian@gmail.com",
    membership: 41,
    contact: "Elikem",
    contactNumber: "0593172914",
    type: "Community",
    socials: "rotameridian",
    socialLinks: { instagram: "rotameridian", facebook: "rotameridian" },
    hasFullData: true
  },
  { 
    id: 47, 
    name: "Rotaract Club of Ho", 
    president: "Increason Eric Delator", 
    region: "Volta", 
    status: "active",
    chartered: "2012",
    meetingDay: "Thursdays. 6:30pm",
    venue: "Rotary Community Centre",
    email: "horotaract@gmail.com",
    membership: 38,
    contact: "Increason",
    contactNumber: "0540233082",
    type: "Community",
    socials: "horotaract",
    socialLinks: { instagram: "horotaract", facebook: "horotaract" },
    hasFullData: true
  },
  { 
    id: 48, 
    name: "Rotaract Club of Accra-Airport East", 
    president: "Richmond Addo", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2026",
    meetingDay: "1st, 2nd and 4th Sunday, 3:00pm for 3:30pm",
    venue: "Dolcevita Chocolate Limited",
    email: "rotaractclubairporteast@gmail.com",
    membership: 22,
    contact: "Anastasia",
    contactNumber: "+233 26 027 3186",
    type: "Community",
    socials: "RotaractclubofAccraAirportEast",
    socialLinks: { tiktok: "RotaractclubofAccraAirportEast" },
    hasFullData: true
  },
  { 
    id: 49, 
    name: "Rotaract Club of Accra Bluecrest College", 
    president: "PETER ACQUAYE BLAY", 
    region: "Greater Accra", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 50, 
    name: "Rotaract Club of Accra Technical University", 
    president: "Nicholas Dzidula Dornyo", 
    region: "Greater Accra", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 51, 
    name: "Rotaract Club of Wisconsin International University College, Ghana", 
    president: "Racheal Talata Ayagri", 
    region: "Greater Accra", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 52, 
    name: "Rotaract Club of Accra Cantonment East", 
    president: "Sadat Nablah Abdulai", 
    region: "Greater Accra", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 53, 
    name: "Rotaract Club of Accra Dansoman", 
    president: "Robert Kwamin", 
    region: "Greater Accra", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 54, 
    name: "Rotaract Club of Ada", 
    president: "Raphael Kwabena Angmortey", 
    region: "Greater Accra", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 55, 
    name: "Rotaract Club of Academic City University", 
    president: "Amazing Naa Dedei Quaye", 
    region: "Greater Accra", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 56, 
    name: "Rotaract Club of UMaT", 
    president: "Boadu Forster Abboah", 
    region: "Western", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 57, 
    name: "Rotaract Club of UESD-Somanya", 
    president: "Aaron Tawiah Blagodzi", 
    region: "Eastern", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 58, 
    name: "Rotaract Club of Techiman", 
    president: "ELVIS JULIAN ATIAH", 
    region: "Bono East", 
    status: "active",
    chartered: "2019",
    meetingDay: "Wednesday, 6pm",
    venue: "Encom Hotel (Main)",
    email: "techimanrotaractclub@gmail.com",
    membership: 13,
    contact: "Kuugan Eugene",
    contactNumber: "0246268525",
    type: "Community",
    socials: "Rotaract Club of Techiman",
    socialLinks: { facebook: "Rotaract Club of Techiman" },
    hasFullData: true
  },
  { 
    id: 59, 
    name: "Rotaract Club of Atebubu College of Education", 
    president: "Tenku Felix", 
    region: "Bono East", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 60, 
    name: "Rotaract Club of Tamale", 
    president: "Nashiru Mashkura", 
    region: "Northern", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 61, 
    name: "Rotaract Club of UHAS-Hohoe", 
    president: "Erica Akyere Nana Afua Quaye", 
    region: "Volta", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 62, 
    name: "Rotaract Club of Wesley College", 
    president: "Nana Kwabena Amankwa Yeboah", 
    region: "Ashanti", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 63, 
    name: "Rotaract Club of UEW", 
    president: "FRIMPONG SAMUEL JNR", 
    region: "Central", 
    status: "active", 
    hasFullData: false 
  },
  { 
    id: 64, 
    name: "Rotaract Club of Central University", 
    president: "Abigail Hagan", 
    region: "Greater Accra", 
    status: "active",
    chartered: "2026",
    meetingDay: "Fridays, 5pm",
    venue: "Central University Main Block F",
    email: "rotaractcentraluniversity@gmail.com",
    membership: 32,
    contact: "Abigail Hagan",
    contactNumber: "0577566812",
    type: "Institutional ",
    socials: "Rotaract Club of Central University College",
    hasFullData: true 
  },
  // New Club: Rotaract Club of Kasoa
  { 
    id: 65, 
    name: "Rotaract Club of Kasoa", 
    president: "Amanda Abankwah", 
    region: "Greater Accra", 
    status: "active",
    chartered: "Yet to be chartered",
    meetingDay: "Sundays, 4:00pm (two weeks in person and two weeks online)",
    venue: "boom blossom, Melcom annex (new market road)",
    email: "rotaractkasoa@gmail.com",
    membership: null, // Not provided
    contact: "Enoch Caleb Nii Ayi Ankrah",
    contactNumber: "0545936781",
    type: "Community",
    socials: "Rotaract Club of Kasoa",
    socialLinks: { tiktok: "Rotaract Club of Kasoa", instagram: "Rotaract Club of Kasoa" },
    hasFullData: true
  },
]

// Get region color mapping for all 16 regions
const getRegionColor = (region) => {
  const colors = {
    "Ahafo": "bg-amber-100 text-amber-700",
    "Ashanti": "bg-green-100 text-green-700",
    "Bono": "bg-red-100 text-red-700",
    "Bono East": "bg-pink-100 text-pink-700",
    "Central": "bg-yellow-100 text-yellow-700",
    "Eastern": "bg-indigo-100 text-indigo-700",
    "Greater Accra": "bg-blue-100 text-blue-700",
    "North East": "bg-cyan-100 text-cyan-700",
    "Northern": "bg-teal-100 text-teal-700",
    "Oti": "bg-purple-100 text-purple-700",
    "Savannah": "bg-lime-100 text-lime-700",
    "Upper East": "bg-orange-100 text-orange-700",
    "Upper West": "bg-amber-100 text-amber-700",
    "Volta": "bg-violet-100 text-violet-700",
    "Western": "bg-emerald-100 text-emerald-700",
    "Western North": "bg-sky-100 text-sky-700",
  };
  return colors[region] || "bg-gray-100 text-gray-700";
};

// Get region emoji
const getRegionEmoji = (region) => {
  const emojis = {
    "Ahafo": "",
    "Ashanti": "",
    "Bono": "",
    "Bono East": "",
    "Central": "",
    "Eastern": "",
    "Greater Accra": "",
    "North East": "",
    "Northern": "",
    "Oti": "",
    "Savannah": "",
    "Upper East": "",
    "Upper West": "",
    "Volta": "",
    "Western": "",
    "Western North": "",
  };
  return emojis[region] || "";
};

const ITEMS_PER_PAGE = 12;

const ClubLocatorPage = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedClub, setSelectedClub] = useState(null);

  // Filter clubs based on search, region, and status
  const filtered = useMemo(() => {
    return clubs.filter((c) => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                         c.president.toLowerCase().includes(search.toLowerCase());
      const matchRegion = region === "All Regions" || c.region === region;
      const matchStatus = filterStatus === "all" || c.status === filterStatus;
      return matchSearch && matchRegion && matchStatus;
    });
  }, [search, region, filterStatus]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedClubs = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterChange = (setter) => (value) => {
    setter(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getRegionCount = (regionName) => {
    if (regionName === "All Regions") return clubs.length;
    return clubs.filter(c => c.region === regionName).length;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-dark to-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find a Rotaract Club</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover {clubs.length} Rotaract clubs across all 16 regions of Ghana and connect with young leaders in your community
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stats Bar */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-primary">{clubs.length}</div>
              <div className="text-sm text-gray-500">Total Clubs</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600">{clubs.filter(c => c.status === 'active').length}</div>
              <div className="text-sm text-gray-500">Active Clubs</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-accent600">{new Set(clubs.map(c => c.region)).size}</div>
              <div className="text-sm text-gray-500">Regions Covered</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{clubs.filter(c => c.president).length}</div>
              <div className="text-sm text-gray-500">Presidents Listed</div>
            </div>
          </div> */}

          {/* Regional Distribution */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Regional Distribution</h3>
            <div className="flex flex-wrap gap-2">
              {GHANA_REGIONS.map((r) => {
                const count = getRegionCount(r);
                if (count === 0) return null;
                return (
                  <button
                    key={r}
                    onClick={() => {
                      setRegion(r);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      region === r 
                        ? getRegionColor(r) + " ring-2 ring-offset-2 ring-accent600" 
                        : getRegionColor(r) + " hover:scale-105"
                    }`}
                  >
                    {getRegionEmoji(r)} {r} ({count})
                  </button>
                );
              })}
              <button
                onClick={() => {
                  setRegion("All Regions");
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  region === "All Regions" 
                    ? "bg-primary text-white ring-2 ring-offset-2 ring-accent600" 
                    : "bg-gray-200 text-gray-600 hover:scale-105"
                }`}
              >
                All ({clubs.length})
              </button>
            </div>
          </div>

          {/* Search and Filter Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search clubs by name or president..." 
                  value={search} 
                  onChange={(e) => handleFilterChange(setSearch)(e.target.value)} 
                  className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-accent600 focus:ring-2 focus:ring-accent600/20 transition-all"
                />
              </div>
              
              {/* Region Filter */}
              <div className="relative min-w-[200px]">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select 
                  value={region} 
                  onChange={(e) => handleFilterChange(setRegion)(e.target.value)} 
                  className="w-full pl-12 pr-10 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-accent600 focus:ring-2 focus:ring-accent600/20 transition-all appearance-none bg-white"
                >
                  <option value="All Regions">All 16 Regions ({clubs.length})</option>
                  {GHANA_REGIONS.map((r) => {
                    const count = getRegionCount(r);
                    if (count === 0) return null;
                    return (
                      <option key={r} value={r}>
                        {getRegionEmoji(r)} {r} ({count})
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow-md text-accent600" : "text-gray-400 hover:text-gray-600"}`}
                  title="Grid view"
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow-md text-accent600" : "text-gray-400 hover:text-gray-600"}`}
                  title="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              <span>{filtered.length} club{filtered.length !== 1 ? 's' : ''} found</span>
              {search && <span className="text-accent600">· "{search}"</span>}
              {region !== "All Regions" && <span className="text-accent600">· {region}</span>}
            </div>
          </motion.div>

          {/* Clubs Grid/List */}
          <AnimatedSection className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10" : "space-y-3 mb-10"}>
            {paginatedClubs.map((club) => (
              <motion.div
                key={club.id}
                variants={fadeInUp}
                whileHover={{ y: viewMode === "grid" ? -4 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${
                  viewMode === "list" ? "flex items-center p-4 gap-4" : "p-5"
                }`}
                onClick={() => setSelectedClub(selectedClub?.id === club.id ? null : club)}
              >
                {viewMode === "grid" ? (
                  // Grid View
                  <>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-primary text-sm group-hover:text-accent600 transition-colors line-clamp-2 flex-1">
                        {club.name}
                      </h3>
                      <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full ml-1 flex-shrink-0">
                        #{club.id}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${getRegionColor(club.region)}`}>
                        <MapPin size={12} />
                        {club.region}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                        <Sparkles size={10} />
                        Active
                      </span>
                      {club.hasFullData && club.membership && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
                          <Users size={10} />
                          {club.membership}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg mb-2">
                      <User size={14} className="text-accent600 flex-shrink-0" />
                      <span className="truncate">President: {club.president}</span>
                    </div>

                    {club.hasFullData ? (
                      <>
                        {club.chartered && (
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Calendar size={12} />
                            <span>Chartered: {club.chartered}</span>
                          </div>
                        )}

                        {/* Expandable Details */}
                        <AnimatePresence>
                          {selectedClub?.id === club.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                                {club.meetingDay && (
                                  <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Clock size={12} className="text-accent600" />
                                    <span>{club.meetingDay}</span>
                                  </div>
                                )}
                                {club.venue && (
                                  <div className="flex items-start gap-2 text-xs text-gray-600">
                                    <MapPin size={12} className="text-accent600 mt-0.5" />
                                    <span>{club.venue}</span>
                                  </div>
                                )}
                                {club.email && (
                                  <a href={`mailto:${club.email}`} className="flex items-center gap-2 text-xs text-accent600 hover:underline">
                                    <Mail size={12} />
                                    <span>{club.email}</span>
                                  </a>
                                )}
                                {club.contact && club.contactNumber && (
                                  <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Phone size={12} className="text-accent600" />
                                    <span>{club.contact}: {club.contactNumber}</span>
                                  </div>
                                )}
                                {club.type && (
                                  <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Building2 size={12} className="text-accent600" />
                                    <span>{club.type}</span>
                                  </div>
                                )}
                                {club.socials && (
                                  <div className="flex items-center gap-2 text-xs text-gray-600">
                                    <Link size={12} className="text-accent600" />
                                    <span className="truncate">{club.socials}</span>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-2 text-xs text-accent600">
                          <span className="cursor-pointer">Click for details</span>
                        </div>
                      </>
                    ) : (
                      // Basic Data - "More info coming soon"
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                          <Info size={14} />
                          <span>More info coming soon</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  // List View
                  <>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-primary text-sm group-hover:text-accent600 transition-colors">
                          {club.name}
                        </h3>
                        <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full flex-shrink-0">
                          #{club.id}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${getRegionColor(club.region)}`}>
                          <MapPin size={10} />
                          {club.region}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                          Active
                        </span>
                        {club.hasFullData && club.membership && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                            <Users size={10} />
                            {club.membership}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                          <User size={12} />
                          {club.president}
                        </span>
                        {club.hasFullData && club.chartered && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                            <Calendar size={10} />
                            {club.chartered}
                          </span>
                        )}
                        {!club.hasFullData && (
                          <span className="inline-flex items-center gap-1 text-xs text-amber-600">
                            <Info size={10} />
                            More info soon
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <Award size={14} />
                      <span>Rotaract</span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <Search size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No clubs found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2.5 rounded-xl border border-gray-200 hover:border-accent600 hover:bg-accent600/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={18} />
              </motion.button>
              
              {[...Array(Math.min(totalPages, 7))].map((_, i) => {
                let pageNum;
                if (totalPages <= 7) {
                  pageNum = i + 1;
                } else if (currentPage <= 4) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 3) {
                  pageNum = totalPages - 6 + i;
                } else {
                  pageNum = currentPage - 3 + i;
                }
                
                if (pageNum > 0 && pageNum <= totalPages) {
                  return (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-9 h-9 rounded-xl font-semibold text-sm transition-all ${
                        currentPage === pageNum
                          ? "bg-accent600 text-white shadow-md"
                          : "border border-gray-200 hover:border-accent600 text-gray-600"
                      }`}
                    >
                      {pageNum}
                    </motion.button>
                  );
                }
                return null;
              })}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-xl border border-gray-200 hover:border-accent600 hover:bg-accent600/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={18} />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default ClubLocatorPage;