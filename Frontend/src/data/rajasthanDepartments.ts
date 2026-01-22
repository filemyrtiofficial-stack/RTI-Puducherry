/**
 * Puducherry Departments organized by sections
 * Used for RTI department listing page
 * Structure matches Telangana/Delhi format for consistent rendering
 */

export interface JammuAndKashmirDepartmentSection {
  category: string;
  items: string[];
}

// Alias for Rajasthan (using same structure as Puducherry)
export type DepartmentSection = JammuAndKashmirDepartmentSection;

export const jammuAndKashmirDepartments: JammuAndKashmirDepartmentSection[] = [
  {
    category: 'RTI Puducherry Health & Family Welfare',
    items: [
      'RTI Puducherry Health & Family Welfare Department',
      'RTI Puducherry Directorate of Health & Family Welfare Services',
      'RTI Puducherry Indira Gandhi Government General Hospital & PGI',
      'RTI Puducherry Directorate of Medical Education',
      'RTI Puducherry AYUSH Directorate',
    ]},
  {
    category: 'RTI Puducherry Education & Skill Development',
    items: [
      'RTI Puducherry School Education Department',
      'RTI Puducherry Directorate of School Education',
      'RTI Puducherry Higher & Technical Education Department',
      'RTI Puducherry Directorate of Higher & Technical Education',
      'RTI Puducherry Directorate of Collegiate Education',
    ]},
  {
    category: 'RTI Puducherry Revenue & District Administration',
    items: [
      'RTI Puducherry Revenue Department',
      'RTI Puducherry District Collectorate, Puducherry',
      'RTI Puducherry Taluk Offices',
      'RTI Puducherry Directorate of Survey & Land Records',
      'RTI Puducherry Registration Department',
    ]},
  {
    category: 'RTI Puducherry Public Works & Infrastructure',
    items: [
      'RTI Puducherry Public Works Department (PWD)',
      'RTI Puducherry Electricity Department',
      'RTI Puducherry Public Health Engineering Department (PHED)',
      'RTI Puducherry Roads & Bridges Division',
    ]},
  {
    category: 'RTI Puducherry Home, Police & Law',
    items: [
      'RTI Puducherry Home Department',
      'RTI Puducherry Police Department, Puducherry',
      'RTI Puducherry Fire & Emergency Services',
      'RTI Puducherry Prison Department',
      'RTI Puducherry Prosecution Department',
    ]},
  {
    category: 'RTI Puducherry Local Administration & Municipalities',
    items: [
      'RTI Puducherry Local Administration Department',
      'RTI Puducherry Puducherry Municipality',
      'RTI Puducherry Oulgaret Municipality',
      'RTI Puducherry Commune Panchayats',
      'RTI Puducherry Town & Country Planning Department',
    ]},
  {
    category: 'RTI Puducherry Agriculture & Rural Economy',
    items: [
      'RTI Puducherry Agriculture Department',
      'RTI Puducherry Horticulture Department',
      'RTI Puducherry Fisheries Department',
      'RTI Puducherry Animal Husbandry & Veterinary Services',
      'RTI Puducherry Agricultural Marketing Board',
    ]},
  {
    category: 'RTI Puducherry Industries, Labour & Employment',
    items: [
      'RTI Puducherry Industries & Commerce Department',
      'RTI Puducherry Labour Department',
      'RTI Puducherry Employment Exchange',
      'RTI Puducherry Factories & Boilers Inspectorate',
    ]},
  {
    category: 'RTI Puducherry Social Welfare & Community Services',
    items: [
      'RTI Puducherry Social Welfare Department',
      'RTI Puducherry Directorate of Women & Child Development',
      'RTI Puducherry Adi Dravidar Welfare Department',
      'RTI Puducherry Minority Welfare Department',
      'RTI Puducherry Department for the Welfare of Differently Abled Persons',
    ]},
  {
    category: 'RTI Puducherry Transport & Communication',
    items: [
      'RTI Puducherry Transport Department',
      'RTI Puducherry Regional Transport Office (RTO)',
      'RTI Puducherry Motor Vehicles Department',
      'RTI Puducherry Ports Department',
    ]},
  {
    category: 'RTI Puducherry Finance & Taxation',
    items: [
      'RTI Puducherry Finance Department',
      'RTI Puducherry Commercial Taxes Department (GST)',
      'RTI Puducherry Excise Department',
      'RTI Puducherry Treasury & Accounts Department',
    ]},
  {
    category: 'RTI Puducherry Environment & Climate',
    items: [
      'RTI Puducherry Forest Department',
      'RTI Puducherry Department of Environment & Climate Change',
      'RTI Puducherry Puducherry Pollution Control Committee (PPCC)',
    ]},
  {
    category: 'RTI Puducherry Information Technology & Governance',
    items: [
      'RTI Puducherry Planning & Research Department',
      'RTI Puducherry Information Technology Department',
      'RTI Puducherry Directorate of Economics & Statistics',
      'RTI Puducherry National Informatics Centre (NIC), Puducherry',
    ]},
  {
    category: 'RTI Puducherry RTI Authorities & Information Commission',
    items: [
      'RTI Puducherry State Information Commission, Puducherry',
      'RTI Puducherry RTI Cell – Chief Secretariat',
      'RTI Puducherry Public Information Officers (Department-wise)',
    ]},
];

// Export for Rajasthan (using Puducherry structure)
export const rajasthanDepartments: DepartmentSection[] = jammuAndKashmirDepartments;

