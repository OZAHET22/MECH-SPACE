"use client";

import { useState } from "react";

export const RoiCalculator = () => {
  const [laborCost, setLaborCost] = useState(50000);
  const [shifts, setShifts] = useState(2);
  const [defectRate, setDefectRate] = useState(5);
  const [volume, setVolume] = useState(100000);

  const systemCost = 2500000;

  const annualSavings = (laborCost * shifts * 2) + (volume * (defectRate / 100) * 0.5);
  const paybackPeriod = (systemCost / annualSavings) * 12;
  const fiveYearSavings = (annualSavings * 5) - systemCost;
  const efficiencyGain = 100 - defectRate;

  const formatter = new Intl.NumberFormat('en-IN');
  const currencyFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

  const handleDownload = () => {
    const reportContent = `MECH SPACE AUTOMATION - ROI DETAILED REPORT
--------------------------------------------------
Generated on: ${new Date().toLocaleString()}

INPUTS:
- Avg labor cost per operator: ${currencyFormatter.format(laborCost)}
- Shifts per day: ${shifts}
- Current defect rate: ${defectRate.toFixed(1)}%
- Annual production volume: ${formatter.format(volume)} units

CALCULATED RESULTS:
- Estimated System Cost: ${currencyFormatter.format(systemCost)}
- Annual Savings: ${currencyFormatter.format(annualSavings)}
- Payback Period: ${Math.max(0.1, paybackPeriod).toFixed(1)} months
- 5-Year Savings: ${fiveYearSavings >= 0 ? '+' : ''}${currencyFormatter.format(fiveYearSavings)}
- Efficiency Target: ${efficiencyGain.toFixed(1)}%
--------------------------------------------------
Thank you for choosing Mech Space Automation!`;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "MechSpace_ROI_Report.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid md:grid-cols-2 rounded-lg border border-border-light overflow-hidden bg-bg-primary text-text-high">
      
      {/* LEFT PANEL: INPUTS */}
      <div className="p-8">
        <h3 className="font-barlow-condensed text-3xl font-bold uppercase tracking-wide mb-8 text-text-high">ROI Calculator</h3>
        
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2 font-rajdhani font-semibold">
              <label className="text-text-medium">Avg labor cost per operator</label>
              <span className="text-accent-primary">{currencyFormatter.format(laborCost)}</span>
            </div>
            <input
              type="range"
              min="10000"
              max="200000"
              step="1000"
              value={laborCost}
              onChange={(e) => setLaborCost(Number(e.target.value))}
              className="w-full accent-accent-primary cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2 font-rajdhani font-semibold">
              <label className="text-text-medium">Shifts per day</label>
              <span className="text-accent-primary">{shifts}</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={shifts}
              onChange={(e) => setShifts(Number(e.target.value))}
              className="w-full accent-accent-primary cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2 font-rajdhani font-semibold">
              <label className="text-text-medium">Current defect rate (%)</label>
              <span className="text-accent-primary">{defectRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={defectRate}
              onChange={(e) => setDefectRate(Number(e.target.value))}
              className="w-full accent-accent-primary cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2 font-rajdhani font-semibold">
              <label className="text-text-medium">Annual production volume</label>
              <span className="text-accent-primary">{formatter.format(volume)} units</span>
            </div>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="5000"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full accent-accent-primary cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: RESULTS */}
      <div className="bg-bg-surface p-8 border-t md:border-t-0 md:border-l border-border-light flex flex-col justify-center">
        <h3 className="font-barlow-condensed text-2xl font-bold uppercase tracking-wide mb-8 text-text-high">Estimated Results</h3>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b border-border-light pb-4">
            <span className="font-rajdhani font-medium text-text-medium">Payback Period</span>
            <span className="font-barlow-condensed text-3xl font-bold text-text-high">{Math.max(0.1, paybackPeriod).toFixed(1)} months</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-border-light pb-4">
            <span className="font-rajdhani font-medium text-text-medium">5-Year Savings</span>
            <span className="font-barlow-condensed text-3xl font-bold text-[#22c55e]">
              {fiveYearSavings >= 0 ? '+' : ''}{currencyFormatter.format(fiveYearSavings)}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-border-light pb-4">
            <span className="font-rajdhani font-medium text-text-medium">Efficiency Target</span>
            <span className="font-barlow-condensed text-3xl font-bold text-text-high">{efficiencyGain.toFixed(1)}%</span>
          </div>
        </div>

        <button 
          onClick={handleDownload}
          className="mt-12 bg-accent-primary hover:bg-accent-hover text-white font-barlow-condensed font-bold py-4 px-6 rounded transition-colors w-full uppercase tracking-wider text-lg"
        >
          Download Detailed Report
        </button>
      </div>
    </div>
  );
};
