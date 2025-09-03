// Utility to map exam codes to exam details
import examDetails from '../data/fortigateExamDetails';
import FortinetAnalyzer from '../data/fortiAnalyzerExamDetails';
import FortinetSIM from '../data/fortiSIEMExamDetails';
import FortinetEDR from '../data/fortiEDR';
import FortinetSOAR from '../data/fortiSOAR';
import FortinetFCP from '../data/fortigateAdministrator';
import FortinetAnalyzeAdmin from '../data/fortiAnalyuzeAdmin';
import FortinetAuthenticator from '../data/FortiAuthenticatorAdministrator';
import FortinetClientEMS from '../data/FortiClientEMSAdministrator';
import FortinetManager from '../data/FortiManagerAdministrator';
import FortinetNAC from '../data/fortiNACExamDetails';
import FortinetSwitch from '../data/fortiSwitchExamDetails';
import FortinetWireless from '../data/fortiWirelessExamDetails';
import FortinetAWSCloud from '../data/fortigateAWSCloudSecurity';
import FortinetAzureCloud from '../data/fortigateAzureCloudSecurity';
import FortinetGoogleCloud from '../data/fortigateGoogleCloudSecurity';
import Fortigate76Administrator from '../data/fortigate76Administrator';
import FortiMail76Administrator from '../data/fortiMail74Administrator';
import FortiWeb74Administrator from '../data/fortiWeb74Administrator';
import fortinetNSE7OTSecurity72 from '../data/fortinetNSE7OTSecurity72';
import fortinetFCSSAdvancedAnalytics67 from '../data/fortinetFCSSAdvancedAnalytics67';
import fortinetFCSSSecurityOperations74 from '../data/fortinetFCSSSecurityOperations74';
import fortiEnterpriceFirewall from '../data/fortiEnterpriceFirewall';
import fortinetNSE7LANEdgeExamDetails from '../data/fortinetNSE7LANEdgeExamDetails';
import fortinetFCSSLANEdge76Architect from '../data/fortinetFCSSLANEdge76Architect';
import fortinetFCSSNetworkSecurity76Support from '../data/fortinetFCSSNetworkSecurity76Support';
import fortinetFCSSSDWAN76Architect from '../data/fortinetFCSSSDWAN76Architect';
import fortinetFCSSFortiSASE25Administrator from '../data/fortinetFCSSFortiSASE25Administrator';
import fortinetFCSSPublicCloudSecurity76Architect from '../data/fortinetFCSSPublicCloudSecurity76Architect';
import fortinetNSE8NetworkSecurityExpert8 from '../data/fortinetNSE8NetworkSecurityExpert8';
import fortinetNSE8PracticalExam from '../data/fortinetNSE8PracticalExam';

const examMapping = {
  'FCP_FGT_AD-7.6': examDetails,
  'FCP_FAZ_AN-7.4': FortinetAnalyzer,
  'FCP_FortiSIEM-7.2': FortinetSIM,
  'FCP_FEDR_AD-7.6': FortinetEDR,
  'NSE6_FSR-7.3': FortinetSOAR,
  'FCP_FGT_7.6': FortinetFCP,
  'FCP_FAZ_AD-7.4': FortinetAnalyzeAdmin,
  'FCP_FAC_AD': FortinetAuthenticator,
  'FCP_FCT_AD-7.4': FortinetClientEMS,
  'FCP_FMG_AD-7.6': FortinetManager,
  'NSE6_FNC-7.2': FortinetNAC,
  'NSE6_FSW-7.2': FortinetSwitch,
  'FCP_FWF_AD-7.4': FortinetWireless,
  'FCP_WCS_AD-7.4': FortinetAWSCloud,
  'FCP_ZCS_AD-7.4': FortinetAzureCloud,
  'FCP_GCS_AD-7.6': FortinetGoogleCloud,
  'FCP_FGT_AD-76': Fortigate76Administrator,
  'FCP_FML_AD-7.4': FortiMail76Administrator,
  'FCP_FWB_AD-7.4': FortiWeb74Administrator,
  'NSE7_OTS-7.2': fortinetNSE7OTSecurity72,
  'FCSS_ADA_AR-6.7': fortinetFCSSAdvancedAnalytics67,
  'FCSS_SOC_AN-7.4': fortinetFCSSSecurityOperations74,
  'FCSS_EFW_AD-7.4': fortiEnterpriceFirewall,
  'NSE7_LED-7.0': fortinetNSE7LANEdgeExamDetails,
  'FCSS_LED_AR-7.6': fortinetFCSSLANEdge76Architect,
  'FCSS_NST_SE-7.6': fortinetFCSSNetworkSecurity76Support,
  'FCSS_SDW-7.6-AR': fortinetFCSSSDWAN76Architect,
  'FCSS_SASE_AD-25': fortinetFCSSFortiSASE25Administrator,
  'FCSS_CDS_AR-7.6': fortinetFCSSPublicCloudSecurity76Architect,
  'NSE8_WRT': fortinetNSE8NetworkSecurityExpert8,
  'NSE8_PRAC': fortinetNSE8PracticalExam
};

export const getExamDetailsByCode = (examCode) => {
  return examMapping[examCode] || null;
};

export const getExamCode = (examDetails) => {
  return Object.keys(examMapping).find(
    key => examMapping[key] === examDetails
  );
};
