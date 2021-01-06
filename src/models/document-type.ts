/* tslint:disable */
/* eslint-disable */
/**
 * Regula Document Reader Web API
 * Documents recognition as easy as reading two bytes.  # Clients: * [JavaScript](https://github.com/regulaforensics/DocumentReader-web-js-client) client for the browser and node.js based on axios * [Java](https://github.com/regulaforensics/DocumentReader-web-java-client) client compatible with jvm and android * [Python](https://github.com/regulaforensics/DocumentReader-web-python-client) 3.5+ client * [C#](https://github.com/regulaforensics/DocumentReader-web-csharp-client) client for .NET & .NET Core 
 *
 * The version of the OpenAPI document: 5.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Possible values for document types
 * @export
 * @enum {string}
 */
export enum DocumentType {
    NOT_DEFINED = 0,
    PASSPORT = 11,
    IDENTITY_CARD = 12,
    DIPLOMATIC_PASSPORT = 13,
    SERVICE_PASSPORT = 14,
    SEAMANS_IDENTITY_DOCUMENT = 15,
    IDENTITY_CARD_FOR_RESIDENCE = 16,
    TRAVEL_DOCUMENT = 17,
    OTHER = 99,
    VISA_ID2 = 29,
    VISA_ID3 = 30,
    NATIONAL_IDENTITY_CARD = 20,
    SOCIAL_IDENTITY_CARD = 21,
    ALIENS_IDENTITY_CARD = 22,
    PRIVILEGED_IDENTITY_CARD = 23,
    RESIDENCE_PERMIT_IDENTITY_CARD = 24,
    ORIGIN_CARD = 25,
    EMERGENCY_PASSPORT = 26,
    ALIENS_PASSPORT = 27,
    ALTERNATIVE_IDENTITY_CARD = 28,
    AUTHORIZATION_CARD = 32,
    BEGINNER_PERMIT = 33,
    BORDER_CROSSING_CARD = 34,
    CHAUFFEUR_LICENSE = 35,
    CHAUFFEUR_LICENSE_UNDER_18 = 36,
    CHAUFFEUR_LICENSE_UNDER_21 = 37,
    COMMERCIAL_DRIVING_LICENSE = 38,
    COMMERCIAL_DRIVING_LICENSE_INSTRUCTIONAL_PERMIT = 39,
    COMMERCIAL_DRIVING_LICENSE_UNDER_18 = 40,
    COMMERCIAL_DRIVING_LICENSE_UNDER_21 = 41,
    COMMERCIAL_INSTRUCTION_PERMIT = 42,
    COMMERCIAL_NEW_PERMIT = 43,
    CONCEALED_CARRY_LICENSE = 44,
    CONCEALED_FIREARM_PERMIT = 45,
    CONDITIONAL_DRIVING_LICENSE = 46,
    DEPARTMENT_OF_VETERANS_AFFAIRS_IDENTITY_CARD = 47,
    DIPLOMATIC_DRIVING_LICENSE = 48,
    DRIVING_LICENSE = 49,
    DRIVING_LICENSE_INSTRUCTIONAL_PERMIT = 50,
    DRIVING_LICENSE_INSTRUCTIONAL_PERMIT_UNDER_18 = 51,
    DRIVING_LICENSE_INSTRUCTIONAL_PERMIT_UNDER_21 = 52,
    DRIVING_LICENSE_LEARNERS_PERMIT = 53,
    DRIVING_LICENSE_LEARNERS_PERMIT_UNDER_18 = 54,
    DRIVING_LICENSE_LEARNERS_PERMIT_UNDER_21 = 55,
    DRIVING_LICENSE_NOVICE = 56,
    DRIVING_LICENSE_NOVICE_UNDER_18 = 57,
    DRIVING_LICENSE_NOVICE_UNDER_21 = 58,
    DRIVING_LICENSE_REGISTERED_OFFENDER = 59,
    DRIVING_LICENSE_RESTRICTED_UNDER_18 = 60,
    DRIVING_LICENSE_RESTRICTED_UNDER_21 = 61,
    DRIVING_LICENSE_TEMPORARY_VISITOR = 62,
    DRIVING_LICENSE_TEMPORARY_VISITOR_UNDER_18 = 63,
    DRIVING_LICENSE_TEMPORARY_VISITOR_UNDER_21 = 64,
    DRIVING_LICENSE_UNDER_18 = 65,
    DRIVING_LICENSE_UNDER_21 = 66,
    EMPLOYMENT_DRIVING_PERMIT = 67,
    ENHANCED_CHAUFFEUR_LICENSE = 68,
    ENHANCED_CHAUFFEUR_LICENSE_UNDER_18 = 69,
    ENHANCED_CHAUFFEUR_LICENSE_UNDER_21 = 70,
    ENHANCED_COMMERCIAL_DRIVING_LICENSE = 71,
    ENHANCED_DRIVING_LICENSE = 72,
    ENHANCED_DRIVING_LICENSE_UNDER_18 = 73,
    ENHANCED_DRIVING_LICENSE_UNDER_21 = 74,
    ENHANCED_IDENTITY_CARD = 75,
    ENHANCED_IDENTITY_CARD_UNDER_18 = 76,
    ENHANCED_IDENTITY_CARD_UNDER_21 = 77,
    ENHANCED_OPERATORS_LICENSE = 78,
    FIREARMS_PERMIT = 79,
    FULL_PROVISIONAL_LICENSE = 80,
    FULL_PROVISIONAL_LICENSE_UNDER_18 = 81,
    FULL_PROVISIONAL_LICENSE_UNDER_21 = 82,
    GENEVA_CONVENTIONS_IDENTITY_CARD = 83,
    GRADUATED_DRIVING_LICENSE_UNDER_18 = 84,
    GRADUATED_DRIVING_LICENSE_UNDER_21 = 85,
    GRADUATED_INSTRUCTION_PERMIT_UNDER_18 = 86,
    GRADUATED_INSTRUCTION_PERMIT_UNDER_21 = 87,
    GRADUATED_LICENSE_UNDER_18 = 88,
    GRADUATED_LICENSE_UNDER_21 = 89,
    HANDGUN_CARRY_PERMIT = 90,
    IDENTITY_AND_PRIVILEGE_CARD = 91,
    IDENTITY_CARD_MOBILITY_IMPAIRED = 92,
    IDENTITY_CARD_REGISTERED_OFFENDER = 93,
    IDENTITY_CARD_TEMPORARY_VISITOR = 94,
    IDENTITY_CARD_TEMPORARY_VISITOR_UNDER_18 = 95,
    IDENTITY_CARD_TEMPORARY_VISITOR_UNDER_21 = 96,
    IDENTITY_CARD_UNDER_18 = 97,
    IDENTITY_CARD_UNDER_21 = 98,
    IGNITION_INTERLOCK_PERMIT = 100,
    IMMIGRANT_VISA = 101,
    INSTRUCTION_PERMIT = 102,
    INSTRUCTION_PERMIT_UNDER_18 = 103,
    INSTRUCTION_PERMIT_UNDER_21 = 104,
    INTERIM_DRIVING_LICENSE = 105,
    INTERIM_IDENTITY_CARD = 106,
    INTERMEDIATE_DRIVING_LICENSE = 107,
    INTERMEDIATE_DRIVING_LICENSE_UNDER_18 = 108,
    INTERMEDIATE_DRIVING_LICENSE_UNDER_21 = 109,
    JUNIOR_DRIVING_LICENSE = 110,
    LEARNER_INSTRUCTIONAL_PERMIT = 111,
    LEARNER_LICENSE = 112,
    LEARNER_LICENSE_UNDER_18 = 113,
    LEARNER_LICENSE_UNDER_21 = 114,
    LEARNER_PERMIT = 115,
    LEARNER_PERMIT_UNDER_18 = 116,
    LEARNER_PERMIT_UNDER_21 = 117,
    LIMITED_LICENSE = 118,
    LIMITED_PERMIT = 119,
    LIMITED_TERM_DRIVING_LICENSE = 120,
    LIMITED_TERM_IDENTITY_CARD = 121,
    LIQUOR_IDENTITY_CARD = 122,
    NEW_PERMIT = 123,
    NEW_PERMIT_UNDER_18 = 124,
    NEW_PERMIT_UNDER_21 = 125,
    NON_US_CITIZEN_DRIVING_LICENSE = 126,
    OCCUPATIONAL_DRIVING_LICENSE = 127,
    ONEIDA_TRIBE_OF_INDIANS_IDENTITY_CARD = 128,
    OPERATOR_LICENSE = 129,
    OPERATOR_LICENSE_UNDER_18 = 130,
    OPERATOR_LICENSE_UNDER_21 = 131,
    PERMANENT_DRIVING_LICENSE = 132,
    PERMIT_TO_REENTER = 133,
    PROBATIONARY_AUTO_LICENSE = 134,
    PROBATIONARY_DRIVING_LICENSE_UNDER_18 = 135,
    PROBATIONARY_DRIVING_LICENSE_UNDER_21 = 136,
    PROBATIONARY_VEHICLE_SALES_PERSON_LICENSE = 137,
    PROVISIONAL_DRIVING_LICENSE = 138,
    PROVISIONAL_DRIVING_LICENSE_UNDER_18 = 139,
    PROVISIONAL_DRIVING_LICENSE_UNDER_21 = 140,
    PROVISIONAL_LICENSE = 141,
    PROVISIONAL_LICENSE_UNDER_18 = 142,
    PROVISIONAL_LICENSE_UNDER_21 = 143,
    PUBLIC_PASSENGER_CHAUFFEUR_LICENSE = 144,
    RACING_AND_GAMING_COMISSION_CARD = 145,
    REFUGEE_TRAVEL_DOCUMENT = 146,
    RENEWAL_PERMIT = 147,
    RESTRICTED_COMMERCIAL_DRIVER_LICENSE = 148,
    RESTRICTED_DRIVER_LICENSE = 149,
    RESTRICTED_PERMIT = 150,
    SEASONAL_PERMIT = 151,
    SEASONAL_RESIDENT_IDENTITY_CARD = 152,
    SEASONAL_CITIZEN_IDENTITY_CARD = 153,
    SEX_OFFENDER = 154,
    SOCIAL_SECURITY_CARD = 155,
    TEMPORARY_DRIVING_LICENSE = 156,
    TEMPORARY_DRIVING_LICENSE_UNDER_18 = 157,
    TEMPORARY_DRIVING_LICENSE_UNDER_21 = 158,
    TEMPORARY_IDENTITY_CARD = 159,
    TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD = 160,
    TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD_UNDER_18 = 161,
    TEMPORARY_INSTRUCTION_PERMIT_IDENTITY_CARD_UNDER_21 = 162,
    TEMPORARY_VISITOR_DRIVING_LICENSE = 163,
    TEMPORARY_VISITOR_DRIVING_LICENSE_UNDER_18 = 164,
    TEMPORARY_VISITOR_DRIVING_LICENSE_UNDER_21 = 165,
    UNIFORMED_SERVICES_IDENTITY_CARD = 166,
    VEHICLE_SALES_PERSON_LICENSE = 167,
    WORKER_IDENTIFICATION_CREDENTIAL = 168,
    COMMERCIAL_DRIVING_LICENSE_NOVICE = 169,
    COMMERCIAL_DRIVING_LICENSE_NOVICE_UNDER_18 = 170,
    COMMERCIAL_DRIVING_LICENSE_NOVICE_UNDER_21 = 171,
    PASSPORT_CARD = 172,
    PASSPORT_RESIDENT_CARD = 173,
    PERSONAL_IDENTIFICATION_VERIFICATION = 174,
    TEMPORARY_OPERATOR_LICENSE = 175,
    DRIVING_LICENSE_UNDER_19 = 176,
    IDENTITY_CARD_UNDER_19 = 177,
    VISA = 178,
    TEMPORARY_PASSPORT = 179,
    VOTING_CARD = 180,
    HEALTH_CARD = 181,
    CERTIFICATE_OF_CITIZENSHIP = 182,
    ADDRESS_CARD = 183,
    AIRPORT_IMMIGRATION_CARD = 184,
    ALIEN_REGISTRATION_CARD = 185,
    APEH_CARD = 186,
    COUPON_TO_DRIVING_LICENSE = 187,
    CREW_MEMBER_CERTIFICATE = 188,
    DOCUMENT_FOR_RETURN = 189,
    E_CARD = 190,
    EMPLOYMENT_CARD = 191,
    HKSAR_IMMIGRATION_FORM = 192,
    IMMIGRANT_CARD = 193,
    LABOUR_CARD = 194,
    LAISSEZ_PASSER = 195,
    LAWYER_IDENTITY_CERTIFICATE = 196,
    LICENSE_CARD = 197,
    PASSPORT_STATELESS = 198,
    PASSPORT_CHILD = 199,
    PASSPORT_CONSULAR = 200,
    PASSPORT_DIPLOMATIC_SERVICE = 201,
    PASSPORT_OFFICIAL = 202,
    PASSPORT_PROVISIONAL = 203,
    PASSPORT_SPECIAL = 204,
    PERMISSION_TO_THE_LOCAL_BORDER_TRAFFIC = 205,
    REGISTRATION_CERTIFICATE = 206,
    SEDESOL_CARD = 207,
    SOCIAL_CARD = 208,
    TB_CARD = 209,
    VEHICLE_PASSPORT = 210,
    W_DOCUMENT = 211,
    DIPLOMATIC_IDENTITY_CARD = 212,
    CONSULAR_IDENTITY_CARD = 213,
    INCOME_TAX_CARD = 214,
    RESIDENCE_PERMIT = 215,
    DOCUMENT_OF_IDENTITY = 216,
    BORDER_CROSSING_PERMIT = 217,
    PASSPORT_LIMITED_VALIDITY = 218,
    SIM_CARD = 219,
    TAX_CARD = 220,
    COMPANY_CARD = 221,
    DOMESTIC_PASSPORT = 222,
    IDENTITY_CERTIFICATE = 223,
    RESIDENT_ID_CARD = 224,
    ARMED_FORCES_IDENTITY_CARD = 225,
    PROFESSIONAL_CARD = 226,
    REGISTRATION_STAMP = 227,
    DRIVER_CARD = 228,
    DRIVER_TRAINING_CERTIFICATE = 229,
    QUALIFICATION_DRIVING_LICENSE = 230,
    MEMBERSHIP_CARD = 231,
    PUBLIC_VEHICLE_DRIVER_AUTHORITY_CARD = 232,
    MARINE_LICENSE = 233,
    TEMPORARY_LEARNER_LICENSE = 234,
    TEMPORARY_COMMERCIAL_DRIVING_LICENSE = 235,
    INTERIM_INSTRUCTIONAL_PERMIT = 236,
    CERTIFICATE_OF_COMPETENCY = 237,
    CERTIFICATE_OF_PROFICIENCY = 238
}



