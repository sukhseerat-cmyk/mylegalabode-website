import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AppLayout from "./components/layout/AppLayout.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/about/page.tsx";
import ProblemPage from "./pages/problem/page.tsx";
import SolutionPage from "./pages/solution/page.tsx";
import FeaturesPage from "./pages/features/page.tsx";
import DemoPage from "./pages/demo/page.tsx";
import ContactPage from "./pages/contact/page.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          {/* Auth callback outside layout */}
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* All app pages inside the shared layout */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/problem" element={<ProblemPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
Now build the Home page:
