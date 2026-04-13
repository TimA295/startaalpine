/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomOrder from "@/components/CustomOrder";
import ProductGrid from "@/components/ProductGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <CustomOrder />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
