// single state series

export interface SingleStateSeries {
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
    hsaPopulation?: null;
    metrics: Metrics;
    riskLevels: RiskLevels;
    cdcTransmissionLevel: number;
    actuals: Actuals;
    annotations: Annotations;
    lastUpdatedDate: string;
    url: string;
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
    weeklyCovidAdmissions: number;
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
    cases: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    deaths: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    positiveTests: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    negativeTests: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    contactTracers: ContactTracersOrContactTracerCapacityRatio;
    hospitalBeds: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    hsaHospitalBeds?: null;
    icuBeds: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    hsaIcuBeds?: null;
    newCases?: null;
    newDeaths: NewDeaths;
    vaccinesDistributed: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    vaccinationsInitiated: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    vaccinationsCompleted: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    vaccinationsAdditionalDose: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    vaccinesAdministered: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    testPositivityRatio: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    caseDensity: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    weeklyNewCasesPer100k: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    contactTracerCapacityRatio: ContactTracersOrContactTracerCapacityRatio;
    infectionRate: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    infectionRateCI90: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    icuCapacityRatio: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    bedsWithCovidPatientsRatio: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    weeklyCovidAdmissionsPer100k?: null;
    vaccinationsInitiatedRatio?: null;
    vaccinationsCompletedRatio?: null;
    vaccinationsAdditionalDoseRatio?: null;
}
export interface CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (AnomaliesEntity)[] | null;
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
export interface PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
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
export interface NewDeaths {
    sources?: (null)[] | null;
    anomalies?: (AnomaliesEntity)[] | null;
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


// single state summary
export interface SingleStateSummary {
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
    hsaPopulation?: null;
    metrics: Metrics;
    riskLevels: RiskLevels;
    cdcTransmissionLevel: number;
    actuals: Actuals;
    annotations: Annotations;
    lastUpdatedDate: string;
    url: string;
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
    weeklyCovidAdmissions: number;
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
    cases: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    deaths: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    positiveTests: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    negativeTests: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    contactTracers: ContactTracersOrContactTracerCapacityRatio;
    hospitalBeds: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    hsaHospitalBeds?: null;
    icuBeds: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    hsaIcuBeds?: null;
    newCases?: null;
    newDeaths: NewDeaths;
    vaccinesDistributed: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    vaccinationsInitiated: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    vaccinationsCompleted: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    vaccinationsAdditionalDose: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    vaccinesAdministered: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    testPositivityRatio: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    caseDensity: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    weeklyNewCasesPer100k: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    contactTracerCapacityRatio: ContactTracersOrContactTracerCapacityRatio;
    infectionRate: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    infectionRateCI90: CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90;
    icuCapacityRatio: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    bedsWithCovidPatientsRatio: PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio;
    weeklyCovidAdmissionsPer100k?: null;
    vaccinationsInitiatedRatio?: null;
    vaccinationsCompletedRatio?: null;
    vaccinationsAdditionalDoseRatio?: null;
}
export interface CasesOrDeathsOrCaseDensityOrWeeklyNewCasesPer100kOrInfectionRateOrInfectionRateCI90 {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (AnomaliesEntity)[] | null;
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
export interface PositiveTestsOrNegativeTestsOrHospitalBedsOrIcuBedsOrVaccinesDistributedOrVaccinationsInitiatedOrVaccinationsCompletedOrVaccinationsAdditionalDoseOrVaccinesAdministeredOrTestPositivityRatioOrIcuCapacityRatioOrBedsWithCovidPatientsRatio {
    sources?: (SourcesEntity)[] | null;
    anomalies?: (null)[] | null;
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
export interface NewDeaths {
    sources?: (null)[] | null;
    anomalies?: (AnomaliesEntity)[] | null;
}


