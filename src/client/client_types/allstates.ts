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
    cases: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio;
    deaths: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio;
    positiveTests?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio1 | null;
    negativeTests?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio2 | null;
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
    testPositivityRatio?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio3 | null;
    caseDensity: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio;
    weeklyNewCasesPer100k: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio;
    contactTracerCapacityRatio?: ContactTracersOrContactTracerCapacityRatio1 | null;
    infectionRate: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio;
    infectionRateCI90: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio;
    icuCapacityRatio?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI907 | null;
    bedsWithCovidPatientsRatio?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI908 | null;
    weeklyCovidAdmissionsPer100k?: null;
    vaccinationsInitiatedRatio?: null;
    vaccinationsCompletedRatio?: null;
    vaccinationsAdditionalDoseRatio?: null;
}
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio {
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
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio1 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (AnomaliesEntity | null)[] | null;
}
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio2 {
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
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrDeathsOrPositiveTestsOrNegativeTestsOrTestPositivityRatio3 {
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

// ! AllStatesSeries

export interface AllStatesSeries {
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
    communityLevels: CommunityLevels;
    actuals: Actuals;
    annotations: Annotations;
    lastUpdatedDate: string;
    url: string;
    metricsTimeseries?: (MetricsTimeseriesEntity)[] | null;
    actualsTimeseries?: (ActualsTimeseriesEntity)[] | null;
    riskLevelsTimeseries?: (RiskLevelsTimeseriesEntity)[] | null;
    cdcTransmissionLevelTimeseries?: (CdcTransmissionLevelTimeseriesEntity)[] | null;
    communityLevelsTimeseries?: (CommunityLevelsTimeseriesEntity)[] | null;
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
export interface CommunityLevels {
    cdcCommunityLevel?: null;
    canCommunityLevel?: number | null;
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
    cases: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths;
    deaths: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths;
    positiveTests?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths1 | null;
    negativeTests?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths2 | null;
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
    testPositivityRatio?: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths3 | null;
    caseDensity: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths;
    weeklyNewCasesPer100k: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths;
    contactTracerCapacityRatio?: ContactTracersOrContactTracerCapacityRatio1 | null;
    infectionRate: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths;
    infectionRateCI90: CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths;
    icuCapacityRatio?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI907 | null;
    bedsWithCovidPatientsRatio?: DeathsOrPositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatioOrCasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI908 | null;
    weeklyCovidAdmissionsPer100k?: null;
    vaccinationsInitiatedRatio?: null;
    vaccinationsCompletedRatio?: null;
    vaccinationsAdditionalDoseRatio?: null;
}
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths {
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
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths1 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (AnomaliesEntity | null)[] | null;
}
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths2 {
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
export interface CasesOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90OrPositiveTestsOrNegativeTestsOrTestPositivityRatioOrDeaths3 {
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
    cases?: number | null;
    deaths?: number | null;
    positiveTests?: number | null;
    negativeTests?: number | null;
    contactTracers?: number | null;
    hospitalBeds: HospitalBeds;
    hsaHospitalBeds: HsaHospitalBedsOrHospitalBeds;
    icuBeds: IcuBeds;
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
export interface RiskLevelsTimeseriesEntity {
    overall: number;
    caseDensity: number;
    date: string;
}
export interface CdcTransmissionLevelTimeseriesEntity {
    date: string;
    cdcTransmissionLevel: number;
}
export interface CommunityLevelsTimeseriesEntity {
    cdcCommunityLevel?: null;
    canCommunityLevel?: number | null;
    date: string;
}
