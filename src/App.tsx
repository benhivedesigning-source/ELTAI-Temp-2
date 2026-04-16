import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

        {/* Programme Routes - Restricted */}
        <Route path="/programme/schedule" element={<Navigate to="/" replace />} />
        <Route path="/programme/sessions" element={<Navigate to="/" replace />} />
        <Route path="/programme/speakers" element={<Navigate to="/" replace />} />

        {/* Highlights Routes - Restricted */}
        <Route path="/highlights/scholarships" element={<Navigate to="/" replace />} />
        <Route path="/highlights/publications" element={<Navigate to="/" replace />} />
        <Route path="/highlights/awards" element={<Navigate to="/" replace />} />

        {/* Register Routes */}
        <Route path="/register/registration-fees" element={<RegistrationFeesPage />} />
        <Route path="/register/cancellation-policy" element={<CancellationPolicyPage />} />

        {/* Travel Routes - Restricted */}
        <Route path="/travel/reach" element={<Navigate to="/" replace />} />
        <Route path="/travel/accommodation" element={<Navigate to="/" replace />} />
        <Route path="/travel/visit" element={<Navigate to="/" replace />} />

        {/* Organizers Routes */}
        <Route path="/organizers/eltai" element={<EltaiPage />} />
        <Route path="/organizers/mit-adt-university" element={<MITADTUniversityPage />} />
        <Route path="/organizers/partners" element={<Navigate to="/" replace />} />
        <Route path="/organizers/committee" element={<Navigate to="/" replace />} />

        {/* Contact Routes */}
        <Route path="/contact/contact-information" element={<ContactInformationPage />} />
        <Route path="/contact/help" element={<Navigate to="/" replace />} />
        <Route path="/contact/faq" element={<Navigate to="/" replace />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
