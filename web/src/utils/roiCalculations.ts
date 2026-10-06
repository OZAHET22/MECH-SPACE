export interface RoiInputs {
  monthlyLaborCost: number;
  operatorsReplaced: number;
  shifts: number;
  currentDefectRate: number;
  targetDefectRate: number;
  volume: number;
  productValue: number;
  systemCost: number;
}

export interface RoiResults {
  annualLaborSavings: number;
  defectReduction: number;
  annualQualitySavings: number;
  totalAnnualSavings: number;
  paybackPeriod: number;
  fiveYearSavings: number;
  roiPercentage: number;
}

export const calculateROI = (inputs: RoiInputs): RoiResults => {
  const {
    monthlyLaborCost,
    operatorsReplaced,
    shifts,
    currentDefectRate,
    targetDefectRate,
    volume,
    productValue,
    systemCost,
  } = inputs;

  const annualLaborSavings = monthlyLaborCost * operatorsReplaced * 12 * shifts;
  const defectReduction = Math.max(0, currentDefectRate - targetDefectRate);
  const annualQualitySavings = volume * (defectReduction / 100) * productValue;
  const totalAnnualSavings = annualLaborSavings + annualQualitySavings;

  // Prevent division by zero
  const paybackPeriod = totalAnnualSavings > 0 ? systemCost / (totalAnnualSavings / 12) : 0;
  const fiveYearSavings = (totalAnnualSavings * 5) - systemCost;
  const roiPercentage = systemCost > 0 ? (fiveYearSavings / systemCost) * 100 : 0;

  return {
    annualLaborSavings,
    defectReduction,
    annualQualitySavings,
    totalAnnualSavings,
    paybackPeriod,
    fiveYearSavings,
    roiPercentage,
  };
};
