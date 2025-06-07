
import React, { useRef } from "react";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="human-intuition" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>Intuition</span>
            </div>
            <h2 className="section-title mb-6">Beyond Algorithms to Real Intelligence</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Allied, we move beyond pre-programmed automation. Our systems are designed to understand context, learn dynamically, and adapt to real-world interactions — just like a human would. This creates AI-driven solutions that aren’t just smart but truly aware.
            </p>
            <ul className="space-y-4">
              {[
                "Learns from real-world data and continuously improves its performance",
                " Understands context to make human-centric decisions, not just predictions",
                "Adapts to new environments and tasks autonomously",
                "Responds with emotional and situational intelligence"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Image container div has been removed */}
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
