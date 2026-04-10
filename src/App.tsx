import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutRotaryPage from "./pages/AboutRotaryPage";
import AboutRotaractPage from "./pages/AboutRotaractPage";
import AboutDistrictPage from "./pages/AboutDistrictPage";
import DRRPage from "./pages/DRRPage";
import TeamPage from "./pages/TeamPage";
import SignatureProjectsPage from "./pages/SignatureProjectsPage";
import ClubProjectsPage from "./pages/ClubProjectsPage";
import ProfDevPage from "./pages/ProfDevPage";
import ServiceNoticesPage from "./pages/ServiceNoticesPage";
import BlogPage from "./pages/BlogPage";
import DRRVisitsPage from "./pages/DRRVisitsPage";
import FlyersPage from "./pages/FlyersPage";
import GalleryPage from "./pages/GalleryPage";
import DistrictNewslettersPage from "./pages/DistrictNewslettersPage";
import RINewsPage from "./pages/RINewsPage";
import ZoneUpdatesPage from "./pages/ZoneUpdatesPage";
import RIUpdatesPage from "./pages/RIUpdatesPage";
import VideosPage from "./pages/VideosPage";
import DLACPage from "./pages/DLACPage";
import CalendarPage from "./pages/CalendarPage";
import ClubLocatorPage from "./pages/ClubLocatorPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about/rotary-international" element={<AboutRotaryPage />} />
            <Route path="/about/rotaract" element={<AboutRotaractPage />} />
            <Route path="/about/district-9104" element={<AboutDistrictPage />} />
            <Route path="/about/drr" element={<DRRPage />} />
            <Route path="/about/team" element={<TeamPage />} />
            <Route path="/projects/signature" element={<SignatureProjectsPage />} />
            <Route path="/projects/club-projects" element={<ClubProjectsPage />} />
            <Route path="/projects/professional-dev" element={<ProfDevPage />} />
            <Route path="/projects/service-notices" element={<ServiceNoticesPage />} />
            <Route path="/media/blog" element={<BlogPage />} />
            <Route path="/media/drr-visits" element={<DRRVisitsPage />} />
            <Route path="/media/flyers" element={<FlyersPage />} />
            <Route path="/media/gallery" element={<GalleryPage />} />
            <Route path="/media/newsletters/district" element={<DistrictNewslettersPage />} />
            <Route path="/media/newsletters/ri-news" element={<RINewsPage />} />
            <Route path="/media/newsletters/zone-updates" element={<ZoneUpdatesPage />} />
            <Route path="/media/ri-updates" element={<RIUpdatesPage />} />
            <Route path="/media/videos" element={<VideosPage />} />
            <Route path="/events/dlac" element={<DLACPage />} />
            <Route path="/events/calendar" element={<CalendarPage />} />
            <Route path="/events/flyers" element={<FlyersPage />} />
            <Route path="/contact/club-locator" element={<ClubLocatorPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
