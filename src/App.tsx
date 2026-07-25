import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RootLayout } from './components/layout/RootLayout';
import { ErrorBoundary } from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const Productions = lazy(() => import('./pages/Productions'));
const Corporate = lazy(() => import('./pages/Corporate'));
const AttractionsIndex = lazy(() => import('./pages/AttractionsIndex'));
const AttractionDetail = lazy(() => import('./pages/AttractionDetail'));
const Festival = lazy(() => import('./pages/Festival'));
const BarMitzvah = lazy(() => import('./pages/BarMitzvah'));
const Education = lazy(() => import('./pages/Education'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const ArticlesIndex = lazy(() => import('./pages/ArticlesIndex'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="טוען...">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-sand-200 border-t-ember-500" />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="productions" element={<Productions />} />
            <Route path="corporate" element={<Corporate />} />
            <Route path="attractions" element={<AttractionsIndex />} />
            <Route path="attractions/:slug" element={<AttractionDetail />} />
            <Route path="festival" element={<Festival />} />
            <Route path="bar-mitzvah" element={<BarMitzvah />} />
            <Route path="education" element={<Education />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="articles" element={<ArticlesIndex />} />
            <Route path="articles/:slug" element={<ArticleDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
