import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import BatchScan from '../pages/BatchScan';
import DocScanner from '../pages/DocScanner';
import ExportShare from '../pages/ExportShare';
import AdvFilters from '../pages/AdvFilters';
import SignStamp from '../pages/SignStamp';
import { AnimatePresence } from 'framer-motion';

function AnimtedRouter() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DocScanner />} />
        <Route path="/SignStamp" element={<SignStamp />} />
        <Route path="/BatchScan" element={<BatchScan />} />
        <Route path="/AdvFilters" element={<AdvFilters />} />
        <Route path="/ExportShare" element={<ExportShare />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimtedRouter;
