


export interface CountrySummary {
    fips: string;
    country: string;
    state?: null;
    county?: null;
    hsa?: null;
    hsaName?: null;
    level: string;
    lat?: null;
    locationId: string;
    long?: null;
    population: number;
    hsaPopulation?: null;
    metrics: Metrics;
    riskLevels: RiskLevels;
    cdcTransmissionLevel: number;
    actuals: Actuals;
    annotations: Annotations;
    lastUpdatedDate: string;
    url?: null;
}
export interface Metrics {
    testPositivityRatio: number;
    testPositivityRatioDetails: TestPositivityRatioDetails;
    caseDensity: number;
    weeklyNewCasesPer100k: number;
    contactTracerCapacityRatio?: null;
    infectionRate: number;
    infectionRateCI90: number;
    icuCapacityRatio: number;
    bedsWithCovidPatientsRatio: number;
    vaccinationsInitiatedRatio: number;
    vaccinationsCompletedRatio: number;
    vaccinationsAdditionalDoseRatio: number;
}

export interface TestPositivityRatioDetails {
    source: string;
}
export interface RiskLevels {
    overall: number;
    testPositivityRatio: number;
    caseDensity: number;
    contactTracerCapacityRatio: number;
    infectionRate: number;
    icuCapacityRatio: number;
}
export interface Actuals {
    cases: number;
    deaths: number;
    positiveTests: number;
    negativeTests: number;
    contactTracers: number;
    hospitalBeds: HospitalBeds;
    hsaHospitalBeds: HsaHospitalBeds;
    icuBeds: IcuBeds;
    hsaIcuBeds: HsaIcuBeds;
    newCases: number;
    newDeaths: number;
    vaccinesDistributed: number;
    vaccinationsInitiated: number;
    vaccinationsCompleted: number;
    vaccinationsAdditionalDose: number;
    vaccinesAdministered: number;
    vaccinesAdministeredDemographics?: null;
    vaccinationsInitiatedDemographics?: null;
}
export interface HospitalBeds {
    capacity: number;
    currentUsageTotal: number;
    currentUsageCovid: number;
    weeklyCovidAdmissions?: null;
}

export interface HsaHospitalBeds {
    capacity?: null;
    currentUsageTotal?: null;
    currentUsageCovid?: null;
    weeklyCovidAdmissions?: null;
}

export interface IcuBeds {
    capacity: number;
    currentUsageTotal: number;
    currentUsageCovid: number;
}
export interface HsaIcuBeds {
    capacity?: null;
    currentUsageTotal?: null;
    currentUsageCovid?: null;
}
export interface Annotations {
    cases: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    deaths: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    positiveTests?: null;
    negativeTests?: null;
    contactTracers?: null;
    hospitalBeds?: null;
    hsaHospitalBeds?: null;
    icuBeds?: null;
    hsaIcuBeds?: null;
    newCases?: null;
    newDeaths: NewDeaths;
    vaccinesDistributed: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    vaccinationsInitiated: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    vaccinationsCompleted: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    vaccinationsAdditionalDose: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    vaccinesAdministered: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    testPositivityRatio?: null;
    caseDensity: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    weeklyNewCasesPer100k: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    contactTracerCapacityRatio?: null;
    infectionRate: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    infectionRateCI90: CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    icuCapacityRatio?: null;
    bedsWithCovidPatientsRatio?: null;
    vaccinationsInitiatedRatio?: null;
    vaccinationsCompletedRatio?: null;
    vaccinationsAdditionalDoseRatio?: null;
}
export interface CasesOrDeathsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface SourcesEntity {
    type: string;
    url: string;
    name: string;
}
export interface NewDeaths {
    sources?: (null)[] | null;
    anomalies?: (AnomaliesEntity)[] | null;
}
export interface AnomaliesEntity {
    date: string;
    type: string;
    original_observation: number;
}
