import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ConceptNotePage from './pages/ConceptNotePage';
import DomainsPage from './pages/DomainsPage';
import RegistrationFeesPage from './pages/RegistrationFeesPage';
import CancellationPolicyPage from './pages/CancellationPolicyPage';
import SubmissionGuidelinesPage from './pages/SubmissionGuidelinesPage';
import SubmissionReviewPoliciesPage from './pages/SubmissionReviewPoliciesPage';
import CallForAbstractsPage from './pages/CallForAbstractsPage';
import ImportantDatesPage from './pages/ImportantDatesPage';
import ContactInformationPage from './pages/ContactInformationPage';
import EltaiPage from './pages/EltaiPage';
import MITADTUniversityPage from './pages/MITADTUniversityPage';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme/domains" element={<DomainsPage />} />
        <Route path="/theme/concept-note" element={<ConceptNotePage />} />
        
        {/* Submit Routes */}
        <Route path="/submit/call-for-abstracts" element={<CallForAbstractsPage />} />
        <Route path="/submit/submission-guidelines" element={<SubmissionGuidelinesPage />} />
        <Route path="/submit/review-policies" element={<SubmissionReviewPoliciesPage />} />
        <Route path="/submit/important-dates" element={<ImportantDatesPage />} />

        {/* Programme Routes */}
        <Route path="/programme/schedule" element={<ComingSoon title="Schedule" />} />
        <Route path="/programme/sessions" element={<ComingSoon title="Parallel Sessions" />} />
        <Route path="/programme/speakers" element={<ComingSoon title="Speakers" />} />

        {/* Highlights Routes */}
        <Route path="/highlights/scholarships" element={<ComingSoon title="Scholarships" />} />
        <Route path="/highlights/publications" element={<ComingSoon title="Publications" />} />
        <Route path="/highlights/awards" element={<ComingSoon title="Awards" />} />

        {/* Register Routes */}
        <Route path="/register/registration-fees" element={<RegistrationFeesPage />} />
        <Route path="/register/cancellation-policy" element={<CancellationPolicyPage />} />

        {/* Travel Routes */}
        <Route path="/travel/reach" element={<ComingSoon title="How to Reach Us" />} />
        <Route path="/travel/accommodation" element={<ComingSoon title="Accommodation" />} />
        <Route path="/travel/visit" element={<ComingSoon title="Places to Visit" />} />

        {/* Organizers Routes */}
        <Route path="/organizers/eltai" element={<EltaiPage />} />
        <Route path="/organizers/mit-adt-university" element={<MITADTUniversityPage />} />
        <Route path="/organizers/partners" element={<ComingSoon title="Organising Partners" />} />
        <Route path="/organizers/committee" element={<ComingSoon title="Organising Committee" />} />

        {/* Contact Routes */}
        <Route path="/contact/contact-information" element={<ContactInformationPage />} />
        <Route path="/contact/help" element={<ComingSoon title="Help Desk" />} />
        <Route path="/contact/faq" element={<ComingSoon title="FAQ" />} />

        {/* Catch all */}
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Routes>
    </Layout>
  );
}
