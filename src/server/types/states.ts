export interface AllStatesSummary {
    fips: string;
    country: string;
    state: string;
    county?: null;
    hsa?: null;
    hsaName?: null;
    level: string;
    lat?: null;
    locationId: string;
    long?: null;
    population: number;
    hsaPopulation?: number | null;
    metrics: Metrics;
    riskLevels: RiskLevels;
    cdcTransmissionLevel: number;
    actuals: Actuals;
    annotations: Annotations;
    lastUpdatedDate: string;
    url: string;
}
export interface Metrics {
    testPositivityRatio?: number | null;
    testPositivityRatioDetails: TestPositivityRatioDetails;
    caseDensity: number;
    weeklyNewCasesPer100k: number;
    contactTracerCapacityRatio?: null;
    infectionRate: number;
    infectionRateCI90: number;
    icuCapacityRatio?: number | null;
    bedsWithCovidPatientsRatio?: number | null;
    weeklyCovidAdmissionsPer100k?: number | null;
    vaccinationsInitiatedRatio?: number | null;
    vaccinationsCompletedRatio?: number | null;
    vaccinationsAdditionalDoseRatio?: number | null;
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
    positiveTests?: number | null;
    negativeTests?: number | null;
    contactTracers?: number | null;
    hospitalBeds: HospitalBeds;
    hsaHospitalBeds: HsaHospitalBedsOrHospitalBeds;
    icuBeds: IcuBeds;
    hsaIcuBeds: HsaIcuBedsOrIcuBeds;
    newCases: number;
    newDeaths: number;
    vaccinesDistributed?: number | null;
    vaccinationsInitiated?: number | null;
    vaccinationsCompleted?: number | null;
    vaccinationsAdditionalDose?: number | null;
    vaccinesAdministered?: number | null;
    vaccinesAdministeredDemographics?: null;
    vaccinationsInitiatedDemographics?: null;
}
export interface HospitalBeds {
    capacity?: number | null;
    currentUsageTotal?: number | null;
    currentUsageCovid?: number | null;
    weeklyCovidAdmissions?: number | null;
}
export interface HsaHospitalBedsOrHospitalBeds {
    capacity?: null;
    currentUsageTotal?: null;
    currentUsageCovid?: null;
    weeklyCovidAdmissions?: null;
}
export interface IcuBeds {
    capacity?: number | null;
    currentUsageTotal?: number | null;
    currentUsageCovid?: number | null;
}
export interface HsaIcuBedsOrIcuBeds {
    capacity?: null;
    currentUsageTotal?: null;
    currentUsageCovid?: null;
}
export interface Annotations {
    cases: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests;
    deaths: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests;
    positiveTests?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests1 | null;
    negativeTests?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests2 | null;
    contactTracers?: ContactTracersOrContactTracerCapacityRatio | null;
    hospitalBeds?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90 | null;
    hsaHospitalBeds?: null;
    icuBeds?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI901 | null;
    hsaIcuBeds?: null;
    newCases?: NewCasesOrNewDeaths | null;
    newDeaths?: NewCasesOrNewDeaths1 | null;
    vaccinesDistributed?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI902 | null;
    vaccinationsInitiated?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI903 | null;
    vaccinationsCompleted?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI904 | null;
    vaccinationsAdditionalDose?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI905 | null;
    vaccinesAdministered?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI906 | null;
    testPositivityRatio?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests3 | null;
    caseDensity: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests;
    weeklyNewCasesPer100k: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests;
    contactTracerCapacityRatio?: ContactTracersOrContactTracerCapacityRatio1 | null;
    infectionRate: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests;
    infectionRateCI90: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests;
    icuCapacityRatio?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI907 | null;
    bedsWithCovidPatientsRatio?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI908 | null;
    weeklyCovidAdmissionsPer100k?: null;
    vaccinationsInitiatedRatio?: null;
    vaccinationsCompletedRatio?: null;
    vaccinationsAdditionalDoseRatio?: null;
}
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (AnomaliesEntity | null)[] | null;
}
export interface SourcesEntity {
    type: string;
    url: string;
    name: string;
}
export interface AnomaliesEntity {
    date: string;
    type: string;
    original_observation: number;
}
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests1 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (AnomaliesEntity | null)[] | null;
}
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests2 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (AnomaliesEntity | null)[] | null;
}
export interface ContactTracersOrContactTracerCapacityRatio {
    sources?: (SourcesEntity1)[] | null;
    anomalies?: (null)[] | null;
}
export interface SourcesEntity1 {
    type: string;
    url?: null;
    name?: null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI901 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface NewCasesOrNewDeaths {
    sources?: (null)[] | null;
    anomalies?: (AnomaliesEntity1)[] | null;
}
export interface AnomaliesEntity1 {
    date: string;
    type: string;
    original_observation: number;
}
export interface NewCasesOrNewDeaths1 {
    sources?: (null)[] | null;
    anomalies?: (AnomaliesEntity1)[] | null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI902 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI903 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI904 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI905 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI906 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrNegativeTestsOrTestPositivityRatioOrPositiveTests3 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (AnomaliesEntity | null)[] | null;
}
export interface ContactTracersOrContactTracerCapacityRatio1 {
    sources?: (SourcesEntity1)[] | null;
    anomalies?: (null)[] | null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI907 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}
export interface DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI908 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
}



