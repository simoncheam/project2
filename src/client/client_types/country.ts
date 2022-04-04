

// US summary
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


// us country series

export interface CountrySeries {
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
    metricsTimeseries?: (MetricsTimeseriesEntity)[] | null;
    actualsTimeseries?: (ActualsTimeseriesEntity)[] | null;
    riskLevelsTimeseries?: (RiskLevelsTimeseriesEntity)[] | null;
    cdcTransmissionLevelTimeseries?: (CdcTransmissionLevelTimeseriesEntity)[] | null;
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
    weeklyCovidAdmissionsPer100k: number;
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
    hsaHospitalBeds: HsaHospitalBedsOrHospitalBeds;
    icuBeds: IcuBeds;
    hsaIcuBeds: HsaIcuBedsOrIcuBeds;
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
    // weeklyCovidAdmissions: number;
}
export interface HsaHospitalBedsOrHospitalBeds {
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
export interface HsaIcuBedsOrIcuBeds {
    capacity?: null;
    currentUsageTotal?: null;
    currentUsageCovid?: null;
}
export interface Annotations {
}
export interface MetricsTimeseriesEntity {
    testPositivityRatio?: number | null;
    caseDensity?: number | null;
    weeklyNewCasesPer100k?: number | null;
    contactTracerCapacityRatio?: number | null;
    infectionRate?: number | null;
    infectionRateCI90?: number | null;
    icuCapacityRatio?: number | null;
    bedsWithCovidPatientsRatio?: number | null;
    weeklyCovidAdmissionsPer100k?: number | null;
    date: string;
    vaccinationsInitiatedRatio?: number | null;
    vaccinationsCompletedRatio?: number | null;
    vaccinationsAdditionalDoseRatio?: number | null;
}
export interface ActualsTimeseriesEntity {
    cases: number;
    deaths: number;
    positiveTests?: number | null;
    negativeTests?: number | null;
    contactTracers?: number | null;
    hospitalBeds: HospitalBeds1;
    hsaHospitalBeds: HsaHospitalBedsOrHospitalBeds;
    icuBeds: IcuBeds1;
    hsaIcuBeds: HsaIcuBedsOrIcuBeds;
    newCases?: number | null;
    newDeaths?: number | null;
    vaccinesAdministeredDemographics?: null;
    vaccinationsInitiatedDemographics?: null;
    date: string;
    vaccinesDistributed?: number | null;
    vaccinationsInitiated?: number | null;
    vaccinationsCompleted?: number | null;
    vaccinationsAdditionalDose?: number | null;
    vaccinesAdministered?: number | null;
}
export interface HospitalBeds1 {
    capacity?: number | null;
    currentUsageTotal?: number | null;
    currentUsageCovid?: number | null;
    weeklyCovidAdmissions?: number | null;
}
export interface IcuBeds1 {
    capacity?: number | null;
    currentUsageTotal?: number | null;
    currentUsageCovid?: number | null;
}
export interface RiskLevelsTimeseriesEntity {
    overall: number;
    caseDensity: number;
    date: string;
}
export interface CdcTransmissionLevelTimeseriesEntity {
    date: string;
    cdcTransmissionLevel: number;
}
