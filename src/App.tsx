/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ChevronRight, ClipboardList, MessageSquare, Gift, CheckCircle2 } from "lucide-react";

const MCDONALDS_RED = "#DA291C";
const MCDONALDS_YELLOW = "#FFC72C";
const CTA_URL = "https://giftclick.org/aff_c?offer_id=3730&aff_id=141984&source=Denny";
const LOGO_URL = "https://www.dropbox.com/scl/fi/5z6415ze75ji4upu61o27/530-5307245_mcdonalds-logo-transparent-background-vector-clipart-removebg-preview.png?rlkey=h2erlqffc2sutpgek4o5n8rvs&st=zmceiupy&raw=1";

export default function App() {
  const handleCTA = () => {
    window.location.href = CTA_URL;
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900 selection:bg-[#FFC72C] selection:text-[#DA291C]">
      {/* Header */}
      <header className="bg-[#DA291C] py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="McDonald's Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="text-white font-black text-xl tracking-tight font-display">McDonald's <span className="font-medium opacity-80">Survey</span></span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-20 overflow-x-hidden">
        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block mb-8 md:mb-12 group w-full max-w-lg"
          >
            {/* Gift Card Visual - Landscape */}
            <div className="relative w-full aspect-[1.58/1] bg-[#DA291C] rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-[0_20px_50px_-15px_rgba(218,41,28,0.3)] md:shadow-[0_35px_60px_-15px_rgba(218,41,28,0.3)] overflow-hidden transform group-hover:rotate-1 transition-transform duration-500 border-2 md:border-4 border-[#FFC72C]">
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="absolute -bottom-10 -right-10 md:-bottom-20 -right-20 w-32 h-32 md:w-64 md:h-64 bg-[#FFC72C] opacity-10 rounded-full blur-2xl md:blur-3xl"></div>
              
              <div className="flex justify-between items-start h-full flex-col">
                <div className="flex justify-between w-full items-start">
                  <img 
                    src={LOGO_URL} 
                    alt="McDonald's Logo" 
                    className="h-10 md:h-20 w-auto drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-white text-right">
                    <p className="text-3xl md:text-6xl font-black drop-shadow-xl font-display tracking-tighter">$750</p>
                    <p className="text-[10px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-extrabold opacity-90 mt-0.5 md:mt-1">Gift Card</p>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-black text-lg md:text-3xl tracking-tight drop-shadow-md font-display">McDonald's</p>
                      <div className="flex gap-1 md:gap-1.5 mt-1 md:mt-3">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="flex gap-0.5 md:gap-1">
                            {[...Array(4)].map((_, j) => (
                              <div key={j} className="w-1 h-1 md:w-2 md:h-2 bg-white/40 rounded-full"></div>
                            ))}
                            {i < 3 && <div className="w-1 md:w-2"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-8 w-8 md:h-12 md:w-12 border border-white/30 md:border-2 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 md:w-6 md:h-6 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ 
                y: [0, -5, 0],
                rotate: [12, 15, 12]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 md:-top-6 -right-6 bg-[#FFC72C] text-[#DA291C] font-black px-3 py-1.5 md:px-6 md:py-3 rounded-lg md:rounded-2xl shadow-xl border-2 md:border-4 border-white transform rotate-12 z-10 text-xs md:text-lg font-display"
            >
              LIMITED TIME!
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-7xl font-black text-gray-900 mb-4 md:mb-6 leading-[1.1] md:leading-[0.95] tracking-tighter font-display"
            >
              Get a <span className="text-[#DA291C] drop-shadow-sm">$750</span> <br />
              McDonald's Reward
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-lg md:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-medium px-4 md:px-0"
            >
              Complete our quick survey about your dining experience to qualify for a <span className="text-gray-900 font-bold">$750 gift card</span>.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(218,41,28,0.5)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCTA}
              className="bg-[#DA291C] text-white font-black text-xl md:text-2xl py-4 md:py-6 px-8 md:px-12 rounded-xl md:rounded-2xl shadow-[0_20px_40px_-10px_rgba(218,41,28,0.4)] hover:bg-[#C22419] transition-all flex items-center gap-2 md:gap-3 mx-auto font-display tracking-tight"
            >
              Start Survey Now <ChevronRight className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
            </motion.button>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 md:mb-16 font-display tracking-tight text-gray-900">Simple 3-Step Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ProcessCard 
              icon={<ClipboardList className="w-8 h-8 md:w-10 md:h-10 text-[#DA291C]" />}
              title="Take the Survey"
              description="Answer a few quick questions about your McDonald's dining experience"
              delay={0.1}
            />
            <ProcessCard 
              icon={<MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-[#DA291C]" />}
              title="Share Feedback"
              description="Tell us about your favorite menu items and visit frequency"
              delay={0.2}
            />
            <ProcessCard 
              icon={<Gift className="w-8 h-8 md:w-10 md:h-10 text-[#DA291C]" />}
              title="Get Rewarded"
              description="Qualify for your $750 McDonald's gift card after completing the survey"
              delay={0.3}
            />
          </div>
        </section>

        {/* Why Participate Section */}
        <section className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] md:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.05)] border border-gray-100 mb-16 md:mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#FFC72C]/5 rounded-full -mr-24 -mt-24 md:-mr-32 -mt-32 blur-3xl"></div>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8 md:mb-12 font-display tracking-tight">Why Participate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10">
            {[
              "Qualify for a $750 McDonald's gift card",
              "Complete a quick qualification process",
              "Instant digital delivery",
              "Help improve McDonald's services",
              "Valid at any McDonald's location"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 md:gap-5 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-50 hover:border-[#FFC72C]/40 hover:bg-[#FFC72C]/5 transition-all group"
              >
                <div className="bg-[#FFC72C]/20 p-2 md:p-3 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-[#DA291C]" />
                </div>
                <span className="font-bold text-gray-800 text-base md:text-lg">{item}</span>
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
              className="w-full md:w-auto bg-[#FFC72C] text-[#DA291C] font-black text-2xl md:text-3xl py-6 md:py-8 px-8 md:px-16 rounded-2xl md:rounded-[2rem] shadow-[0_20px_40px_-10px_rgba(255,199,44,0.4)] md:shadow-[0_30px_60px_-15px_rgba(255,199,44,0.5)] hover:bg-[#F2BD24] transition-all transform hover:scale-105 font-display tracking-tighter"
            >
              CLAIM YOUR $750 NOW
            </button>
          </motion.div>
          <p className="mt-6 md:mt-8 text-sm md:text-base text-gray-400 font-medium tracking-wide">No purchase necessary. Terms and conditions apply.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10 md:py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2 md:gap-3 grayscale opacity-60">
            <img 
              src={LOGO_URL} 
              alt="McDonald's Logo" 
              className="h-6 md:h-8 w-auto"
              referrerPolicy="no-referrer"
            />
            <span className="font-black text-gray-700 text-base md:text-lg font-display tracking-tight">McDonald's</span>
          </div>
          <div className="flex gap-4 md:gap-8 text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#DA291C] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#DA291C] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#DA291C] transition-colors">Support</a>
          </div>
          <p className="text-xs md:text-sm text-gray-400 font-medium text-center">© 2026 McDonald's Survey Rewards. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ProcessCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all"
    >
      <div className="bg-[#FFC72C]/10 p-6 rounded-3xl mb-8 group-hover:scale-110 group-hover:bg-[#FFC72C]/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 font-display tracking-tight text-gray-900">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed font-medium">{description}</p>
    </motion.div>
  );
}
