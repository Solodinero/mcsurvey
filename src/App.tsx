/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ClipboardList, MessageSquare, Gift, CheckCircle2, Ticket, Star, Zap, TrendingUp } from "lucide-react";

const BRAND_BLUE = "#026CDF";
const BRAND_NAVY = "#014DA1";
const CTA_URL = "https://linkthem.net/aff_c?offer_id=4104&aff_id=153946";
const LOGO_URL = "https://www.dropbox.com/scl/fi/2847b8fbsfpi4xufzno6y/logo.webp?rlkey=hatjzazlkg75sp7tu3oftxpk1&st=g7a1zfmn&raw=1";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(() => 
    Math.floor(100 + Math.random() * 900) + "-" + Math.floor(100 + Math.random() * 900) + "-" + Math.floor(100 + Math.random() * 900)
  );
  const [activeUsers] = useState(() => 
    Math.floor(100 + Math.random() * 51) + 100
  );

  useEffect(() => {
    // Preload the main brand logo
    const img = new Image();
    img.src = LOGO_URL;
    
    const handleLoad = () => setIsReady(true);
    const handleError = () => setIsReady(true); // Proceed even on error

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);
    }

    // Safety timeout to ensure page loads within 1.5s regardless of image status
    const timeout = setTimeout(() => setIsReady(true), 1500);

    return () => {
      clearTimeout(timeout);
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, []);

  const handleCTA = () => {
    window.location.href = CTA_URL;
  };

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 5);
  const formattedExpiry = `${(expiryDate.getMonth() + 1).toString().padStart(2, '0')}/${expiryDate.getDate().toString().padStart(2, '0')}/${expiryDate.getFullYear()}`;

  return (
    <>
      <AnimatePresence mode="wait">
        {!isReady && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] bg-[#026CDF] flex items-center justify-center"
          >
            {/* Minimal loader or just the background to prevent flash */}
            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-white rounded-full blur-3xl"
                />
                <motion.img 
                  src={LOGO_URL}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-16 md:h-24 w-auto relative z-10 drop-shadow-2xl rounded-full bg-white p-3"
                  alt="Loading Logo"
                />
              </div>
              <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="min-h-screen bg-[#026CDF] font-sans text-white selection:bg-white selection:text-[#026CDF] relative overflow-hidden"
      >
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-black/10 rounded-full blur-[180px]"></div>
        <div className="absolute top-[20%] right-[10%] w-px h-[60%] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Live Urgency Bar */}
      <div className="bg-white text-[#026CDF] py-3 text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] relative z-50 shadow-md">
        <div className="flex items-center justify-center gap-4 animate-pulse">
          <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 fill-[#026CDF]" /> {activeUsers} Users active now</span>
          <span className="opacity-30">|</span>
          <span className="hidden md:flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-[#026CDF]" /> Trending reward in your area</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md py-4 md:py-6 px-6 sticky top-0 z-[100] border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-full shadow-lg">
              <img 
                src={LOGO_URL} 
                alt="Brand Logo" 
                className="h-7 md:h-9 w-auto rounded-full"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-16 overflow-x-hidden relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block mb-10 md:mb-16 group w-full max-w-lg"
          >
            {/* Discount Visual - Ticketmaster themed - Advanced Ticket Card */}
            <motion.button 
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                boxShadow: "0 60px 100px -20px rgba(0,0,0,0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCTA}
              className="relative w-full aspect-[1.6/1] bg-white/10 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden transition-shadow duration-700 border border-white/20 cursor-pointer text-left block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              
              {/* Holographic effect */}
              <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 bg-[linear-gradient(110deg,#ffffff_20%,transparent_40%,#ffffff_60%,transparent_80%)] bg-[length:200%_100%] animate-[shimmer_8s_infinite_linear]"></div>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
              
              {/* Perforation line */}
              <div className="absolute right-[22%] top-0 bottom-0 w-px border-r border-dashed border-white/20 opacity-50"></div>
              <div className="absolute right-[22%] top-[-10px] w-5 h-5 bg-[#026cdf] rounded-full shadow-inner transform translate-x-1/2"></div>
              <div className="absolute right-[22%] bottom-[-10px] w-5 h-5 bg-[#026cdf] rounded-full shadow-inner transform translate-x-1/2"></div>

              <div className="flex justify-between items-start h-full flex-col relative z-20">
                <div className="flex justify-between w-full items-start">
                  <div className="space-y-4">
                    <div className="bg-white p-2 rounded-2xl shadow-md inline-block">
                      <img 
                        src={LOGO_URL} 
                        alt="Brand Logo" 
                        className="h-8 md:h-12 w-auto rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-white/50 font-medium tracking-widest bg-white/10 px-2 py-1 rounded block">
                      NO: {ticketNumber}
                    </div>
                  </div>
                  <div className="text-white text-right">
                    <motion.p 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-4xl md:text-7xl font-black drop-shadow-lg font-display tracking-tighter"
                    >
                      $1000
                    </motion.p>
                    <div className="flex flex-col items-end">
                      <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-white mt-1">Discount Pass</p>
                      <p className="text-[8px] md:text-[10px] uppercase font-bold text-white/40 mt-1">Expires: {formattedExpiry}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-between items-end">
                  <div>
                    <h4 className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Ticket Type</h4>
                    <p className="text-white font-black text-xl md:text-3xl tracking-tight font-display uppercase">PRIORITY PASS</p>
                    <div className="flex gap-1 mt-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          </motion.div>

          <div className="max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-[0.95] tracking-tighter font-display uppercase"
            >
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">$1000</span> <br />
              Event Discount
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-lg md:text-2xl mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              The ultimate reward for fans. Complete <span className="text-white font-bold">4-5 simple deals</span> today and unlock your verified <span className="text-white font-bold">$1000 ticket discount</span>.
            </motion.p>

            <motion.div
               animate={{ scale: [1, 1.02, 1] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 50px 100px -20px rgba(0,0,0,0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCTA}
                className="group relative bg-white text-[#026CDF] font-black text-xl md:text-3xl py-5 md:py-8 px-10 md:px-14 rounded-2xl md:rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] hover:bg-white/95 transition-all flex items-center gap-4 mx-auto font-display tracking-tight uppercase overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#026CDF]/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative z-10">Start Reward Claim</span> 
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 stroke-[4] relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-3 text-white/40 font-bold uppercase text-[10px] md:text-sm tracking-[0.3em]"
            >
               Verification spots available
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-24 md:mb-40 py-16 px-4 md:px-8 bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 md:mb-24 font-display tracking-tight text-white uppercase">Start Your Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            <ProcessCard 
              icon={<ClipboardList className="w-10 h-10 md:w-14 md:h-14 text-white" />}
              title="Select Deals"
              description="Complete at least 4-5 quick tasks to verify your interest"
              number="01"
              delay={0.1}
            />
            <ProcessCard 
              icon={<MessageSquare className="w-10 h-10 md:w-14 md:h-14 text-white" />}
              title="Verify Email"
              description="Confirm your details for instant secure reward delivery"
              number="02"
              delay={0.2}
            />
            <ProcessCard 
              icon={<Gift className="w-10 h-10 md:w-14 md:h-14 text-white" />}
              title="Get Discount"
              description="Your $1000 reward will be activated for any event"
              number="03"
              delay={0.3}
            />
          </div>
        </section>

        {/* Why Participate Section */}
        <section className="bg-white/5 rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 shadow-2xl border border-white/10 mb-16 md:mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full -mr-24 -mt-24 md:-mr-32 -mt-32 blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 font-display tracking-tight text-white uppercase">Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
            {[
              "Qualify for a $1000 discount reward",
              "Access to concerts, sports, and theater",
              "Instant digital delivery to your inbox",
              "Valid for any upcoming live event",
              "Early access to partner deals"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all group"
              >
                <div className="bg-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <span className="font-bold text-white/90 text-base md:text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center pb-20 md:pb-32">
          <motion.div
            whileHover={{ y: -5 }}
            className="inline-block w-full max-w-sm md:max-w-none px-4"
          >
            <button
              onClick={handleCTA}
              className="w-full md:w-auto bg-white text-[#026CDF] font-black text-2xl md:text-3xl py-6 md:py-8 px-8 md:px-16 rounded-2xl md:rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] hover:bg-white/95 transition-all transform hover:scale-[1.02] font-display tracking-tight uppercase"
            >
              CLAIM YOUR $1000 REWARD
            </button>
          </motion.div>
          <p className="mt-6 md:mt-8 text-sm md:text-base text-white/40 font-medium tracking-wide uppercase">Limited time offer. Completion of 4-5 deals required. Rewards is guaranteed.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-10 md:py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 md:gap-3 opacity-80">
            <div className="bg-white p-1 rounded-full">
              <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="h-6 md:h-8 w-auto rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 text-[10px] md:text-sm text-white/40 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <p className="text-xs md:text-sm text-white/20 font-medium text-center uppercase tracking-tighter">© 2026 Rewards Program. All rights reserved.</p>
        </div>
      </footer>
      </motion.div>
    </>
  );
}

function ProcessCard({ icon, title, description, number, delay }: { icon: React.ReactNode, title: string, description: string, number: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="relative bg-white/5 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] border border-white/10 flex flex-col items-center text-center group hover:shadow-[0_50px_90px_-20px_rgba(255,255,255,0.05)] transition-all overflow-hidden"
    >
      <div className="absolute top-4 right-8 text-5xl md:text-7xl font-display font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
        {number}
      </div>
      <div className="bg-white/10 p-8 rounded-[2rem] mb-10 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 shadow-inner">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-black mb-6 font-display tracking-tight text-white uppercase">{title}</h3>
      <p className="text-white/60 text-lg leading-relaxed font-semibold">{description}</p>
    </motion.div>
  );
}

