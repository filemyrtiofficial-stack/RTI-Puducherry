/**
 * Maps department names to their corresponding PDF file paths
 * Handles variations in PDF file naming conventions
 */

interface PDFMapping {
  [key: string]: string;
}

// Helper function to create PDF path from state, category and department
// Returns the relative path that can be used with import.meta.url or fetch
const createPDFPath = (state: string, category: string, fileName: string): string => {
  // For Vite, we'll use the path relative to src/assets
  return `${state}/${category}/${fileName}`;
};


// Helper function to detect state from department name
const detectState = (departmentName: string): string => {
  // Check for Puducherry in department name
  if (departmentName.toLowerCase().includes('puducherry')) {
    return 'puducherry';
  }
  // Check for Tamil Nadu in department name
  if (departmentName.toLowerCase().includes('tamil')) {
    return 'tamil-nadu';
  }
  // Default to current state (Tamil Nadu)
  return 'tamil-nadu';
};

// Mapping of department display names to PDF file names
const departmentToPDFMap: PDFMapping = {
  // RTI Delhi Police & Security
  'RTI Delhi Police': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Police.pdf'),
  'RTI Delhi Fire Services Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Fire Services Department.pdf'),
  'RTI Delhi Prisons Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Prisoners Department.pdf'),
  'RTI Delhi Home Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Home Department.pdf'),
  'RTI Delhi Judicial Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Judicial Department.pdf'),
  'RTI Delhi Law, Justice & Legislative Affairs Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Law, Justice & Legislative Affairs Department.pdf'),
  'RTI Delhi Disaster Management Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For  Delhi Disaster Management Department.pdf'),

  // RTI Delhi Municipal & Housing
  'RTI Delhi Municipal Corporation (MCD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Municipal Corporation (MCD).pdf'),
  'RTI Delhi Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Urban Development Department.pdf'),
  'RTI Delhi Housing & Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Housing & Urban Development Department.pdf'),
  'RTI Delhi Public Works Department (PWD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Public Works Department (PWD).pdf'),
  'RTI Delhi Rural Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Rural Development Department.pdf'),

  // RTI Delhi Utilities & Infrastructure
  'RTI Delhi Jal Board (DJB)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Templare For Delhi Jal Board (DJB).pdf'),
  'RTI Delhi Transco Limited (DTL)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Transco Limited (DTL).pdf'),
  'RTI Delhi Power Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Delhi Power Department.pdf'),
  'RTI Delhi Water Supply Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Water Supply Department.pdf'),
  'RTI Delhi Ground Water Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Ground Water Department.pdf'),
  'RTI Delhi Irrigation & Flood Control Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Irrigation & Flood Control Department.pdf'),
  'RTI Delhi Renewable Energy Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Renewable Energy Department.pdf'),

  // RTI Delhi Government Services
  'RTI Delhi Revenue Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Revenue Department.pdf'),
  'RTI Delhi Education Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Education Department.pdf'),
  'RTI Delhi Health & Family Welfare Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Health & Family Welfare.pdf'),
  'RTI Delhi Transport Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Transport Department.pdf'),
  'RTI Delhi Finance Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Finance Department.pdf'),
  'RTI Delhi Registration & Stamps Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Registration & Stamps Department.pdf'),
  'RTI Delhi Planning Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Planning Department.pdf'),

  // RTI Delhi Social Welfare
  'RTI Delhi Social Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Social Welfare Department.pdf'),
  'RTI Delhi Scheduled Castes & Scheduled Tribes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Scheduled Castes & Scheduled Tribes Welfare Department.pdf'),
  'RTI Delhi Women & Child Development Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Women & Child Development Department.pdf'),
  'RTI Delhi Backward Classes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Backward Classes Welfare Department.pdf'),
  'RTI Delhi Minority Affairs Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Minority Affairs Department.pdf'),
  'RTI Delhi Youth & Sports Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Youth & Sports Department.pdf'),

  // RTI Delhi Commerce & Industry
  'RTI Delhi Labour Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Labour Department.pdf'),
  'RTI Delhi Industries Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Industries Department.pdf'),
  'RTI Delhi Value Added Tax Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Value Added Tax Department.pdf'),
  'RTI Delhi Food, Civil Supplies & Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Food, Civil Supplies & Consumer Affairs Department.pdf'),
  'RTI Delhi Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Consumer Affairs Department.pdf'),
  'RTI Delhi Cooperation Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Cooperation Department.pdf'),
  'RTI Delhi Agricultural Marketing Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Agricultural Marketing Department.pdf'),

  // RTI Delhi Environment & Resources
  'RTI Delhi Environment Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Environment Department.pdf'),
  'RTI Delhi Forest & Wildlife Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Forest & Wildlife Department.pdf'),
  'RTI Delhi Mines & Geology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Mines & Geology Department.pdf'),
  'RTI Delhi Science & Technology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Science & Technology Department.pdf'),

  // RTI Delhi Culture & Tourism
  'RTI Delhi Tourism Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Tourism Department.pdf'),
  'RTI Delhi Art, Culture & Languages Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Art, Culture & Languages Department.pdf'),
  'RTI Delhi Archaeology Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Archaeology Department.pdf'),
  'RTI Delhi Handloom & Handicrafts Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Handloom & Handicrafts Department.pdf'),

  // RTI Delhi Information & Technology
  'RTI Delhi Information & Publicity Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information & Publicity Department.pdf'),
  'RTI Delhi Information Technology Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information Technology Department.pdf'),
  'RTI Delhi Telecommunications Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Telecommunications Department.pdf'),
  'RTI Delhi Postal Services Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Postal Services Department.pdf'),

  // RTI Delhi Financial Services
  'RTI Delhi Banking & Financial Services Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Banking & Financial Services Department.pdf'),
  'RTI Delhi Insurance Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Insurance Department.pdf'),
  'RTI Delhi Pension Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Pension Department.pdf'),

  // ========== TELANGANA DEPARTMENTS ==========
  // RTI Telangana Police & Security
  'RTI Telangana Police Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Police Department.pdf'),
  'RTI Telangana Fire Services Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Fire Services Department.pdf'),
  'RTI Telangana Prisons Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Prisons Department.pdf'),
  'RTI Telangana Home Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Home Department.pdf'),
  'RTI Telangana Law Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Law Department.pdf'),
  'RTI Telangana Disaster Management Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Disaster Management Department.pdf'),

  // RTI Telangana Municipal & Housing (Note: folder name has typo "Muncipal")
  'RTI Greater Hyderabad Municipal Corporation (GHMC)': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Greater Hyderabad Municipal Corporation (GHMC).pdf'),
  'RTI Telangana Municipal Administration & Urban Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Municipal Administration & Urban Development Department (MA&UD).pdf'),
  'RTI Telangana Housing Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Housing Department.pdf'),
  'RTI Telangana Public Works Department (PWD)': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Public Works Department (PWD).pdf'),
  'RTI Telangana Panchayat Raj & Rural Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Panchayat Raj & Rural Development Department.pdf'),
  'RTI Telangana Urban Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Urban Development Department.pdf'),

  // RTI Telangana Utilities & Infrastructure
  'RTI Telangana Energy Department': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana Energy Department.pdf'),
  'RTI Telangana State Transmission Corporation (TSTRANSCO)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Transmission Corporation (TSTRANSCO).pdf'),
  'RTI Telangana State Power Generation Corporation (TSGENCO)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Power Generation Corporation (TSGENCO).pdf'),
  'RTI Telangana State Southern Power Distribution Company (TSSPDCL)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Southern Power Distribution Company (TSSPDCL).pdf'),
  'RTI Telangana State Northern Power Distribution Company (TSNPDCL)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Northern Power Distribution Company (TSNPDCL).pdf'),
  'RTI Telangana Irrigation & CAD Department': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana Irrigation & CAD Department.pdf'),

  // RTI Telangana Government Services
  'RTI Telangana Secretariat': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Secretariat.pdf'),
  'RTI Telangana Revenue Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Revenue Department.pdf'),
  'RTI Telangana Education Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Education Department.pdf'),
  'RTI Telangana Health & Family Welfare Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Health & Family Welfare Department.pdf'),
  'RTI Telangana Transport Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Transport Department.pdf'),
  'RTI Telangana Finance Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Finance Department.pdf'),
  'RTI Telangana Registration & Stamps Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Registration & Stamps Department.pdf'),
  'RTI Telangana Planning Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Planning Department.pdf'),

  // RTI Telangana Social Welfare (Note: folder name has typo "Telanganga")
  'RTI Telangana Social Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Social Welfare Department.pdf'),
  'RTI Telangana Scheduled Castes Development Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Scheduled Castes Development Department.pdf'),
  'RTI Telangana Scheduled Tribes Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Scheduled Tribes Welfare Department.pdf'),
  'RTI Telangana Women & Child Development Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Women & Child Development Department.pdf'),
  'RTI Telangana Backward Classes Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Backward Classes Welfare Department.pdf'),
  'RTI Telangana Minority Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Minority Welfare Department.pdf'),
  'RTI Telangana Youth & Sports Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Youth & Sports Department.pdf'),

  // RTI Telangana Commerce & Industry
  'RTI Telangana Labour Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA LABOUR DEPARTMENT.pdf'),
  'RTI Telangana Industries & Commerce Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA INDUSTRIES & COMMERCE DEPARTMENT.pdf'),
  'RTI Telangana Commercial Taxes Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA COMMERCIAL TAXES DEPARTMENT.pdf'),
  'RTI Telangana Food & Civil Supplies Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA FOOD & CIVIL SUPPLIES DEPARTMENT.pdf'),
  'RTI Telangana Agriculture & Cooperation Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA AGRICULTURE & COOPERATION DEPARTMENT.pdf'),
  'RTI Telangana Handlooms & Textiles Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA HANDLOOMS & TEXTILES DEPARTMENT.pdf'),

  // RTI Telangana Environment & Resources
  'RTI Telangana Environment Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA ENVIRONMENT DEPARTMENT.pdf'),
  'RTI Telangana Forest Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA FOREST DEPARTMENT.pdf'),
  'RTI Telangana Mines & Geology Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA MINES & GEOLOGY DEPARTMENT.pdf'),
  'RTI Telangana Water Resources Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA WATER RESOURCES DEPARTMENT.pdf'),

  // RTI Telangana Culture & Tourism
  'RTI Telangana Tourism & Culture Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA TOURISM & CULTURE DEPARTMENT.pdf'),
  'RTI Telangana Information & Public Relations Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA INFORMATION & PUBLIC RELATIONS DEPARTMENT.pdf'),
  'RTI Telangana Archaeology Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA ARCHAEOLOGY DEPARTMENT.pdf'),
  'RTI Telangana Endowments Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA ENDOWMENTS DEPARTMENT.pdf'),

  // RTI Telangana Information & Technology
  'RTI Telangana Information Technology Department': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA INFORMATION TECHNOLOGY DEPARTMENT.pdf'),
  'RTI Telangana State Technology Services (TSTS)': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE TECHNOLOGY SERVICES (TSTS).pdf'),
  'RTI Telangana State FibreNet Limited': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE FIBRENET LIMITED.pdf'),
  'RTI Telangana State Innovation Cell': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE INNOVATION CELL.pdf'),

  // RTI Telangana Education & Health
  'RTI Telangana School Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA SCHOOL EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Higher Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA HIGHER EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Technical Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA TECHNICAL EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Medical & Health Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA MEDICAL & HEALTH DEPARTMENT.pdf'),
  'RTI Telangana State Medical Services & Infrastructure Development Corporation (TSMSIDC)': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA STATE MEDICAL SERVICES & INFRASTRUCTURE DEVELOPMENT CORPORATION (TSMSIDC).pdf'),

  // ========== Tamil Nadu DEPARTMENTS ==========
  // All Tamil Nadu PDFs are in: /assets/PDF/RTI_Jammu_and_Kashmir_FULL_CERTIFIED_FINAL/
  // Organized in subfolders by category
  

  // ========== TAMIL NADU DEPARTMENTS ==========
  // All Tamil Nadu PDFs are in: /assets/PDF/
  'RTI Tamil Nadu Adi Dravidar & Tribal Welfare Department': 'RTI_Tamil_Nadu_Adi_Dravidar_&_Tribal_Welfare_Department.pdf',
  'RTI Tamil Nadu Agriculture & Farmers Welfare Department': 'RTI_Tamil_Nadu_Agriculture_&_Farmers_Welfare_Department.pdf',
  'RTI Tamil Nadu Animal Husbandry, Dairying & Fisheries Department': 'RTI_Tamil_Nadu_Animal_Husbandry,_Dairying_&_Fisheries_Department.pdf',
  'RTI Tamil Nadu Backward Classes, Most Backward Classes & Minorities Welfare Department': 'RTI_Tamil_Nadu_Backward_Classes,_Most_Backward_Classes_&_Minorities_Welfare_Department.pdf',
  'RTI Tamil Nadu Commercial Taxes & Registration Department': 'RTI_Tamil_Nadu_Commercial_Taxes_&_Registration_Department.pdf',
  'RTI Tamil Nadu Election Department': 'RTI_Tamil_Nadu_Election_Department.pdf',
  'RTI Tamil Nadu Energy Department': 'RTI_Tamil_Nadu_Energy_Department.pdf',
  'RTI Tamil Nadu Finance Department': 'RTI_Tamil_Nadu_Finance_Department.pdf',
  'RTI Tamil Nadu Forest & Environment Department': 'RTI_Tamil_Nadu_Forest_&_Environment_Department.pdf',
  'RTI Tamil Nadu General Administration Department': 'RTI_Tamil_Nadu_General_Administration_Department.pdf',
  'RTI Tamil Nadu Health & Family Welfare Department': 'RTI_Tamil_Nadu_Health_&_Family_Welfare_Department.pdf',
  'RTI Tamil Nadu Higher Education Department': 'RTI_Tamil_Nadu_Higher_Education_Department.pdf',
  'RTI Tamil Nadu Home, Prohibition & Excise Department': 'RTI_Tamil_Nadu_Home,_Prohibition_&_Excise_Department.pdf',
  'RTI Tamil Nadu Housing & Urban Development Department': 'RTI_Tamil_Nadu_Housing_&_Urban_Development_Department.pdf',
  'RTI Tamil Nadu Industries Department': 'RTI_Tamil_Nadu_Industries_Department.pdf',
  'RTI Tamil Nadu Information & Public Relations Department': 'RTI_Tamil_Nadu_Information_&_Public_Relations_Department.pdf',
  'RTI Tamil Nadu Information Technology Department': 'RTI_Tamil_Nadu_Information_Technology_Department.pdf',
  'RTI Tamil Nadu Labour Welfare & Skill Development Department': 'RTI_Tamil_Nadu_Labour_Welfare_&_Skill_Development_Department.pdf',
  'RTI Tamil Nadu Law, Courts & Prisons Department': 'RTI_Tamil_Nadu_Law,_Courts_&_Prisons_Department.pdf',
  'RTI Tamil Nadu Planning, Development & Special Initiatives Department': 'RTI_Tamil_Nadu_Planning,_Development_&_Special_Initiatives_Department.pdf',
  'RTI Tamil Nadu Police Department': 'RTI_Tamil_Nadu_Police_Department.pdf',
  'RTI Tamil Nadu Public Works Department': 'RTI_Tamil_Nadu_Public_Works_Department.pdf',
  'RTI Tamil Nadu Registration Department': 'RTI_Tamil_Nadu_Registration_Department.pdf',
  'RTI Tamil Nadu Revenue & Disaster Management Department': 'RTI_Tamil_Nadu_Revenue_&_Disaster_Management_Department.pdf',
  'RTI Tamil Nadu Rural Development & Panchayat Raj Department': 'RTI_Tamil_Nadu_Rural_Development_&_Panchayat_Raj_Department.pdf',
  'RTI Tamil Nadu School Education Department': 'RTI_Tamil_Nadu_School_Education_Department.pdf',
  'RTI Tamil Nadu Social Welfare & Nutritious Meal Programme Department': 'RTI_Tamil_Nadu_Social_Welfare_&_Nutritious_Meal_Programme_Department.pdf',
  'RTI Tamil Nadu Technical Education Department': 'RTI_Tamil_Nadu_Technical_Education_Department.pdf',
  'RTI Tamil Nadu Tourism, Culture & Religious Endowments Department': 'RTI_Tamil_Nadu_Tourism,_Culture_&_Religious_Endowments_Department.pdf',
  'RTI Tamil Nadu Transport Department': 'RTI_Tamil_Nadu_Transport_Department.pdf',
  'RTI Tamil Nadu Water Resources Department': 'RTI_Tamil_Nadu_Water_Resources_Department.pdf',
  'RTI Tamil Nadu Women & Child Development Department': 'RTI_Tamil_Nadu_Women_&_Child_Development_Department.pdf',
  'RTI Tamil Nadu Youth Welfare & Sports Development Department': 'RTI_Tamil_Nadu_Youth_Welfare_&_Sports_Development_Department.pdf',

  // Puducherry Departments
  'RTI Puducherry Health & Family Welfare Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Health_and_Family_Welfare_Department.pdf',
  'RTI Puducherry Directorate of Health & Family Welfare Services': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Directorate_of_Health_and_Family_Welfare_Services.pdf',
  'RTI Puducherry Indira Gandhi Government General Hospital & PGI': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Indira_Gandhi_Government_General_Hospital_and_PGI.pdf',
  'RTI Puducherry Directorate of Medical Education': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Directorate_of_Medical_Education.pdf',
  'RTI Puducherry AYUSH Directorate': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_AYUSH_Directorate.pdf',
  'RTI Puducherry School Education Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_School_Education_Department.pdf',
  'RTI Puducherry Directorate of School Education': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Directorate_of_School_Education.pdf',
  'RTI Puducherry Higher & Technical Education Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Higher_and_Technical_Education_Department.pdf',
  'RTI Puducherry Directorate of Higher & Technical Education': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Directorate_of_Higher_and_Technical_Education.pdf',
  'RTI Puducherry Directorate of Collegiate Education': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Directorate_of_Collegiate_Education.pdf',
  'RTI Puducherry Revenue Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Revenue_Department.pdf',
  'RTI Puducherry District Collectorate, Puducherry': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_District_Collectorate_Puducherry.pdf',
  'RTI Puducherry Taluk Offices': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Taluk_Offices.pdf',
  'RTI Puducherry Directorate of Survey & Land Records': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Directorate_of_Survey_and_Land_Records.pdf',
  'RTI Puducherry Registration Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Registration_Department.pdf',
  'RTI Puducherry Public Works Department (PWD)': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Public_Works_Department_(PWD).pdf',
  'RTI Puducherry Electricity Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Electricity_Department.pdf',
  'RTI Puducherry Public Health Engineering Department (PHED)': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Public_Health_Engineering_Department_(PHED).pdf',
  'RTI Puducherry Roads & Bridges Division': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Roads_and_Bridges_Division.pdf',
  'RTI Puducherry Home Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Home_Department.pdf',
  'RTI Puducherry Police Department, Puducherry': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Police_Department_Puducherry.pdf',
  'RTI Puducherry Fire & Emergency Services': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Fire_and_Emergency_Services.pdf',
  'RTI Puducherry Prison Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Prison_Department.pdf',
  'RTI Puducherry Prosecution Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Prosecution_Department.pdf',
  'RTI Puducherry Local Administration Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Local_Administration_Department.pdf',
  'RTI Puducherry Puducherry Municipality': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Puducherry_Municipality.pdf',
  'RTI Puducherry Oulgaret Municipality': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Oulgaret_Municipality.pdf',
  'RTI Puducherry Commune Panchayats': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Commune_Panchayats.pdf',
  'RTI Puducherry Town & Country Planning Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Town_and_Country_Planning_Department.pdf',
  'RTI Puducherry Agriculture Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Agriculture_Department.pdf',
  'RTI Puducherry Horticulture Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Horticulture_Department.pdf',
  'RTI Puducherry Fisheries Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Fisheries_Department.pdf',
  'RTI Puducherry Animal Husbandry & Veterinary Services': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Animal_Husbandry_and_Veterinary_Services.pdf',
  'RTI Puducherry Agricultural Marketing Board': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Agricultural_Marketing_Board.pdf',
  'RTI Puducherry Industries & Commerce Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Industries_and_Commerce_Department.pdf',
  'RTI Puducherry Labour Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Labour_Department.pdf',
  'RTI Puducherry Employment Exchange': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Employment_Exchange.pdf',
  'RTI Puducherry Factories & Boilers Inspectorate': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Factories_and_Boilers_Inspectorate.pdf',
  'RTI Puducherry Social Welfare Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Social_Welfare_Department.pdf',
  'RTI Puducherry Directorate of Women & Child Development': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Directorate_of_Women_and_Child_Development.pdf',
  'RTI Puducherry Adi Dravidar Welfare Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Adi_Dravidar_Welfare_Department.pdf',
  'RTI Puducherry Minority Welfare Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Minority_Welfare_Department.pdf',
  'RTI Puducherry Department for the Welfare of Differently Abled Persons': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Department_for_the_Welfare_of_Differently_Abled_Persons.pdf',
  'RTI Puducherry Transport Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Transport_Department.pdf',
  'RTI Puducherry Regional Transport Office (RTO)': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Regional_Transport_Office_(RTO).pdf',
  'RTI Puducherry Motor Vehicles Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Motor_Vehicles_Department.pdf',
  'RTI Puducherry Ports Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Ports_Department.pdf',
  'RTI Puducherry Finance Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Finance_Department.pdf',
  'RTI Puducherry Commercial Taxes Department (GST)': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Commercial_Taxes_Department_(GST).pdf',
  'RTI Puducherry Excise Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Excise_Department.pdf',
  'RTI Puducherry Treasury & Accounts Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Treasury_and_Accounts_Department.pdf',
  'RTI Puducherry Forest Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Forest_Department.pdf',
  'RTI Puducherry Department of Environment & Climate Change': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Department_of_Environment_and_Climate_Change.pdf',
  'RTI Puducherry Puducherry Pollution Control Committee (PPCC)': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Puducherry_Pollution_Control_Committee_(PPCC).pdf',
  'RTI Puducherry Planning & Research Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Planning_and_Research_Department.pdf',
  'RTI Puducherry Information Technology Department': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Information_Technology_Department.pdf',
  'RTI Puducherry Directorate of Economics & Statistics': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Directorate_of_Economics_and_Statistics.pdf',
  'RTI Puducherry National Informatics Centre (NIC), Puducherry': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_National_Informatics_Centre_(NIC)_Puducherry.pdf',
  'RTI Puducherry State Information Commission, Puducherry': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_State_Information_Commission_Puducherry.pdf',
  'RTI Puducherry RTI Cell – Chief Secretariat': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_RTI_Cell_–_Chief_Secretariat.pdf',
  'RTI Puducherry Public Information Officers (Department-wise)': 'RTI_Puducherry_ALL_Departments/RTI_Puducherry_Public_Information_Officers_(Department-wise).pdf',
};

/**
 * Get the state from a department name
 * @param departmentName - The display name of the department
 * @returns The state name ('telangana', 'tamil-nadu', 'puducherry', or 'delhi')
 */
export const getStateFromDepartment = (departmentName: string): string => {
  return detectState(departmentName);

  };

/**
 * Get the PDF path for a given department name
 * @param departmentName - The display name of the department
 * @returns The path to the PDF file, or null if not found
 */
export const getPDFPath = (departmentName: string): string | null => {
  return departmentToPDFMap[departmentName] || null;
};

/**
 * Check if a PDF exists for a given department
 * @param departmentName - The display name of the department
 * @returns True if PDF mapping exists, false otherwise
 */
export const hasPDF = (departmentName: string): boolean => {
  return departmentName in departmentToPDFMap;
};

