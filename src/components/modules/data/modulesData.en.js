export const modulesDataEN = {
  "Net Discovery": {
    "Endpoints and Servers": {
      description: "Automated discovery of end devices and servers within the corporate network.",
      features: [
        "Complete hardware and software inventory.",
        "Automatic synchronization with Aleph Manager CMDB.",
        "Configurable synchronization rules.",
        "Multiplatform agent."
      ],
      icon: "server"
    },
    "Networking": {
      description: "Dynamic inventory of network equipment (routers, switches) and network topology analysis.",
      features: [
        "Detection via SNMP v2, v2c and v3.",
        "Detection of device characteristics, interface status and connection speed.",
        "Automatic synchronization with Aleph Manager CMDB.",
        "Customizable synchronization rules."
      ],
      icon: "network"
    }
  },
  "GRC (Governance, Risk and Compliance)": {
    "CMDB": {
      description: "Centralized and dynamic repository of technological assets and configuration relationships. The CMDB module allows modeling the technological infrastructure, identifying dependencies and maintaining updated and reliable information for risk management and compliance.",
      features: [
        "Automated registration of technological assets (servers, networks, applications, endpoints).",
        "Visualization of relationships between components and cross-impact.",
        "Integration with automatic discovery systems (Net Discovery).",
        "Version control and change traceability.",
        "Synchronization with other GRC modules for risk analysis, incidents and compliance."
      ],
      icon: "database"
    },
    "Information Asset Classification": {
      description: "Allows classification of technological and information assets according to security, criticality and value criteria for the organization. This module facilitates regulatory compliance and strengthens risk management by establishing clear protection and treatment priorities.",
      features: [
        "Assignment of confidentiality, integrity and availability levels (C-I-A).",
        "Application of customizable taxonomies according to internal policies.",
        "Automatic classification based on rules or integration with CMDB.",
        "Visualization of classified assets by criticality level.",
        "Report generation for audit, compliance and risk management.",
        "Fully configurable: allows adapting methodologies, classification criteria, rating scales and data structures according to each organization's needs."
      ],
      icon: "tag"
    },
    "Operational Risk Analysis": {
      description: "Allows identifying, assessing and managing operational risks that may affect processes and organizational structures. This module provides a clear view of non-technical risk maps, facilitating decision making and regulatory compliance.",
      features: [
        "Identification of potential events according to processes or organizational units.",
        "Impact and probability assessment through qualitative and/or quantitative methodologies.",
        "Definition of mitigating controls and monitoring of their effectiveness.",
        "Recording of action plans, assigned responsible parties and committed dates.",
        "Integration with historical event database to feed risk matrices.",
        "Highly configurable: allows adapting methodologies, scales, survey questions and risk structure to each organization."
      ],
      icon: "bar-chart"
    },
    "Technological Risk Analysis": {
      description: "Facilitates the identification, assessment and treatment of risks associated with technological infrastructure, critical systems and digital services. This module contributes to strengthening operational resilience and regulatory compliance through a structured and adaptable approach.",
      features: [
        "Assessment of threats and vulnerabilities on technological assets.",
        "Impact and probability estimation adjustable according to asset type.",
        "Associations with existing controls and definition of mitigation plans.",
        "Recording of responsible parties, committed dates and progress status.",
        "Visualization of risks by criticality and asset type.",
        "Highly configurable: allows defining analysis methodologies, evaluation criteria, measurement scales and specific workflows."
      ],
      icon: "shield"
    },
    "Dependency Tree": {
      description: "Allows visual modeling of relationships between processes, assets, services and organizational units, to understand their level of interdependence and anticipate the impact of incidents or failures. This module is key for operational continuity analysis, risks and criticality assessment.",
      features: [
        "Hierarchical visualization of dependencies between business and technology components.",
        "Establishment of relationships between items defined in the CMDB and Business Model.",
        "Integration with Technological Risks, Operational Risks, BIA and Classification modules.",
        "Possibility to build trees according to different dimensions (operational, technological, regulatory).",
        "Fully configurable: allows defining node types, attributes, levels, allowed relationships and visualization rules."
      ],
      icon: "git-merge"
    },
    "Operational Risk Event Database": {
      description: "Allows recording, importing, querying and exporting loss events associated with operational risks. This module provides historical traceability, regulatory compliance and supports risk analysis based on real events that occurred in the organization.",
      features: [
        "Manual registration or bulk import of events through .txt, .csv or .xls files.",
        "Assignment of categories, causes, impacts and dates to each event.",
        "Export of the database in accordance with regulatory requirements.",
        "Data quality control: event editing according to allowed dates, event ID validation, and duplicate control.",
        "Parameterization of the event structure, including entity codes, date ranges, and editing permissions.",
        "Fully configurable: allows defining fields to capture, import sources and processing rules according to the regulatory or internal framework."
      ],
      icon: "alert-circle"
    },
    "Digital Financial Services Analysis": {
      description: "Allows evaluating risks associated with digital channels used by the entity, such as online banking, mobile banking and electronic wallets. This module supports regulatory compliance and strengthens technological risk management applied to digital financial operations.",
      features: [
        "Identification and survey of assets categorized as Digital Financial Services.",
        "Assignment of regulatory, technical and security requirements.",
        "Compliance management through forms and control monitoring.",
        "Recording of periodicity, responsible parties, evidence and findings.",
        "Highly configurable: allows defining scenarios, requirements, criticality, compliance levels, periodicities and responsible parties."
      ],
      icon: "credit-card"
    },
    "Third Party Delegation Analysis": {
      description: "Allows evaluating the degree of compliance of technological services delegated to external providers, based on the regulatory, contractual and operational requirements defined for each service type. This module facilitates periodic supervision of providers and traceability of their obligations.",
      features: [
        "Structured registration of outsourced services and associated providers.",
        "Assignment of specific requirements to each service according to criticality and service type.",
        "Compliance evaluation by requirement.",
        "Upload and control of evidence, comments, findings and follow-up by internal or external references.",
        "Management of review periodicity, control status and assigned responsible parties.",
        "Action plans linked to unmet requirements, with responsible parties and resolution dates.",
        "Highly configurable: allows defining service types, requirements, compliance scales, customized forms and follow-up rules adapted to regulations and internal policies."
      ],
      icon: "users"
    },
    "Compliance": {
      description: "Allows centralized management of controls, regulations and internal and external audits applicable to the entity. This module provides traceability on regulatory compliance and facilitates supervision of constantly evolving regulatory obligations.",
      features: [
        "Registration of applicable regulations (regulatory, internal or external) with their corresponding detail.",
        "Association of controls to assets, processes or responsible areas.",
        "Compliance management by control: compliance, evidence, periodicity and responsible parties.",
        "Follow-up of findings, observations and action plans derived from audits or reviews.",
        "Visualization of expirations, alerts and upcoming controls to execute.",
        "Fully configurable: allows defining regulations, controls, compliance statuses, periodicities, responsible parties and evidence structures adapted to current regulations."
      ],
      icon: "check-circle"
    },
    "Incident Database": {
      description: "Allows recording, managing and monitoring incidents affecting the entity's technology or security. This module centralizes key information for response, analysis and continuous improvement, and integrates with the technological risk module.",
      features: [
        "Structured registration of incidents with details of date, area, type, cause and consequences.",
        "Customizable categorization and classification by incident type (technological, security, regulatory, etc.).",
        "Recording of responsible parties, actions taken, resolution deadlines and current status.",
        "Association of the incident to affected assets, services, processes or units.",
        "Action history, comments and related documentation.",
        "Highly configurable: allows defining categories, workflows, custom fields, criticality levels and closure criteria."
      ],
      icon: "file-text"
    },
    "Cyber Incidents Database": {
      description: "Allows registering, managing, and tracking specific cybersecurity incidents that may compromise the confidentiality, integrity, or availability of the organization's information and digital services. This module provides full traceability and supports compliance with regulatory requirements in cybersecurity.",
      features: [
        "Structured registration of cyber incidents with details such as date, origin, attack vector, compromised assets, and severity.",
        "Customizable categorization by type of cyber incident (phishing, ransomware, data leakage, denial of service, intrusion, etc.).",
        "Association of the cyber incident with technological assets, critical services, or affected processes.",
        "Registration of responsible parties, containment, eradication, and recovery actions, with full traceability of the incident lifecycle.",
        "Fully configurable: allows defining criticality levels, workflows, custom fields, roles, and management metrics tailored to the organization's security policy."
      ],
      icon: "shield-off"
    },
    "Vulnerability Management": {
      description: "Allows recording, analyzing and monitoring technical vulnerabilities detected in the technological infrastructure. This module centralizes information about weaknesses, facilitates their treatment and allows prioritizing corrective actions according to asset criticality and failure severity.",
      features: [
        "Registration of vulnerabilities detected through external scanners, audits or manual input.",
        "Association of vulnerabilities to technological assets defined in the CMDB.",
        "Classification by severity, asset criticality and treatment status.",
        "Follow-up of corrective actions, responsible parties, target dates and results.",
        "Possibility to document exceptions, recurrences and internal validations."
      ],
      icon: "activity"
    }
  },
  "Business Continuity": {
    "BIA (Business Impact Analysis)": {
    "description": "Allows identifying essential processes and analyzing the impacts of their unavailability over time.",
    "features": [
    "Impact assessment across different parameterizable dimensions (legal, reputational, financial, operational, etc.).",
    "Definition of time scales and impacts associated with each.",
    "Manual or automatic calculation of MTPD (Maximum Tolerable Period of Disruption).",
    "Identification of critical applications, necessary resources, and interdependencies for each process or sub-process.",
    "Management of surveys to stakeholders and approval workflows.",
    "Fully configurable: allows defining variables, scales, responsible parties, impact types, and customized survey structures."
    ],
    "icon": "target"
    },
    "RIA (Risk Impact Analysis)": {
    "description": "Complements the BIA, focused on identifying risks that could affect the continuity of critical processes.",
    "features": [
    "Identification of threats and vulnerabilities to key processes and resources.",
    "Estimation of probability and impact using quantitative or qualitative methodologies.",
    "Association with existing controls and definition of mitigation plans.",
    "Integration with BIA, Scenarios, and Dependency Tree.",
    "Configuration adaptable to internal methodologies and regulations."
    ],
    "icon": "alert-triangle"
    },
    "Scenarios": {
    "description": "Allows defining and managing different types of disruptive scenarios that can affect operational continuity, such as technological failures, natural disasters, or regulatory events. This module links scenarios to processes, assets, and strategies to evaluate response capacity in different situations.",
    "features": [
    "Registration of critical scenarios tailored to the entity's reality.",
    "Association with affected processes, areas, assets, and services.",
    "Linking with continuity strategies and recovery plans.",
    "Highly configurable: allows defining scenario types, analysis dimensions, metrics, and exposure levels."
    ],
    "icon": "layers"
    },
    "Strategies": {
    "description": "Documents and organizes the response strategies planned for each scenario or critical process. This module structures the lines of action during interruptions, assigns responsibilities, and ensures consistency with continuity plans.",
    "features": [
    "Registration of continuity strategies by process, scenario, or business unit.",
    "Detail of preventive measures, response actions, and alternative resources.",
    "Association with BIA results and defined scenarios.",
    "Assignment of responsible parties, priority levels, and recovery objectives.",
    "Fully configurable: allows defining strategy structure, categories, action types, and responsible parties according to the adopted continuity methodology."
    ],
    "icon": "award"
    },
    "Continuity Plans": {
    "description": "Documentation and activation of operational plans associated with scenarios or critical processes.",
    "features": [
    "Registration of continuity plans linked to processes and scenarios.",
    "Activation details: steps, responsible parties, alternative resources, and estimated times.",
    "Association with BIA analysis (criticality, MTPD, critical resources).",
    "Evidence management and status tracking.",
    "Configuration of structure, actions, responsible parties, and review frequency."
    ],
    "icon": "book"
    },
    "Recovery Plans": {
    "description": "Focused on the restoration of affected business processes.",
    "features": [
    "Registration of specific procedures by critical process.",
    "Definition of alternative resources and temporary recovery measures.",
    "Association with responsible parties, target times, and strategies.",
    "Status tracking and periodic review."
    ],
    "icon": "rotate-cw"
    },
    "Disaster Recovery Plans (DRP)": {
    "description": "Technical procedures to restore technological and operational services after disasters.",
    "features": [
    "Registration of technical plans associated with disaster scenarios.",
    "Detail of technical steps, times, responsible parties, and necessary resources.",
    "Association with assets, services, and critical sites defined in the BIA.",
    "Status tracking and activation workflows.",
    "Complete configuration for documentation and responsible parties."
    ],
    "icon": "refresh-cw"
    },
    "Communication Plans": {
    "description": "Defines communication protocols during incidents and crises.",
    "features": [
    "Registration of internal and external communication channels.",
    "Templates for messages to employees, clients, regulators, and suppliers.",
    "Definition of spokespersons, responsible parties, and approval protocols.",
    "Association with scenarios, BCP, and DRP.",
    "Management of communication evidence and post-event reports."
    ],
    "icon": "message-square"
    },
    "Business Continuity Plans (BCP)": {
    "description": "Consolidate strategies, recovery plans, and communication into a single framework.",
    "features": [
    "Integration of BIA, RIA, Scenarios, Strategies, and DRP.",
    "Structured documentation with responsible parties, resources, and timelines.",
    "Versioning, traceability, and evidence storage.",
    "Formal validation and approval by Senior Management.",
    "Association with regulatory standards."
    ],
    "icon": "clipboard"
    },
    "Testing and Drills": {
    "description": "Allows validation of continuity plans and strategies.",
    "features": [
    "Registration of different test types: tabletop, functional, comprehensive drills.",
    "Definition of objectives, scope, responsible parties, and participants.",
    "Recording of results, findings, and lessons learned.",
    "Tracking of resulting improvement plans.",
    "Association with continuity and recovery plans."
    ],
    "icon": "test-tube"
    }
    },
    "Expected Credit Loss": {
    "Expected Credit Loss": {
    "description": "Allows calculating and documenting expected credit loss on credit portfolios, in accordance with IFRS 9 guidelines and local regulations. The solution integrates imports of operations and payments, portfolio segmentation, parameter calculation (PD, LGD, EAD), classification by stages, and results documentation, ensuring complete process traceability.",
    "features": [
    "Bulk import of historical operations and payments in standardized format.",
    "Portfolio segmentation through dynamic and customizable filters.",
    "PD calculation by month and 12-month PD according to defined rules and applied segmentation.",
    "LGD calculation by segment, considering effective rates, payments made, and present value.",
    "Automatic classification into stages 1, 2, and 3 with configurable criteria (by days or months of delay).",
    "Panel to complete the expected loss table by segment and stage, and save historical results.",
    "Fully configurable: allows defining segmentation criteria, file structures, calculation parameters, default rules, applicable rates, and review workflows adapted to the entity's policies."
    ],
    "icon": "dollar-sign"
    }
  },
  /* Onboarding temporarily disabled - uncomment to reactivate
  "Onboarding": {
    "Module in Development": {
      "description": "Solution under development. Coming soon with complete functionalities for customer onboarding process.",
      "features": [
        "Process under construction.",
        "Information temporarily unavailable.",
        "More details coming soon."
      ],
      "icon": "settings"
    }
  },
  */
  "Customer File": {
    "Customer File Templates": {
      description: "Allows defining and managing parameterizable templates for different types of customers, centralizing the documentary and information requirements needed for customer onboarding, updates, and regulatory compliance of the file. The module provides flexibility to adapt requirements according to customer type, risk profile, or specific conditions defined by the entity.",
      features: [
        "Creation of multiple file templates (Individual, Legal Entity, or others defined by the entity)",
        "Definition of requirements per template",
        "Data type configuration",
        "Definition of mandatory requirements",
        "Management of document validity and expiration",
        "Configuration of minimum number of required files",
        "Document and information approval workflow",
        "Definition of conditional rules for requirements",
        "Historical record of changes and full traceability of file modifications",
        "Fully configurable: allows adapting documentary structures, validations, business rules, approval workflows, and conditions according to internal policies and applicable regulations"
      ],
      icon: "file-plus"
    },
    "Customer File Management": {
      description: "Allows centralized management of the documentary and information file for each customer, facilitating operational follow-up, validation, and documentary compliance required by the entity.",
      features: [
        "Customer search by ID or other parameterizable criteria",
        "Association of customers to file templates",
        "Automatic visualization of pending, complete, expired, or rejected requirements",
        "Upload of documentation and data associated with the customer",
        "Validation and approval of requirements by authorized users",
        "Management of documentary statuses and operational follow-up",
        "Control of documentary expirations and automatic alert generation",
        "Complete history of actions performed on the file",
        "Integration with Customer Database and AML/CFT modules",
        "Fully configurable: allows adapting workflows, statuses, permissions, and validations according to each entity's operations"
      ],
      icon: "folder-open"
    },
    "File Compliance": {
      description: "Allows viewing the general state of documentary compliance for all of the entity's customers, providing consolidated indicators for strategic and operational monitoring.",
      features: [
        "Visualization of the overall documentary compliance percentage",
        "Customer indicators",
        "Compliance distribution",
        "Identification of documentary trends and deviations",
        "Integration with alerts and documentary management workflows",
        "Generation of reports and executive dashboards"
      ],
      icon: "pie-chart"
    },
    "Incomplete Customers": {
      description: "Allows identifying and managing customers with incomplete, expired, or pending validation files, facilitating the daily operational work of responsible teams.",
      features: [
        "Operational list of customers with documentary non-compliance",
        "Visualization of compliance level per customer",
        "Identification of missing documentation, expired documentation, pending information, and rejected requirements",
        "Prioritization of customers by criticality or risk level",
        "Operational management by responsible parties or teams",
        "Integration with automatic alerts and regularization workflows"
      ],
      icon: "user-x"
    },
    "Document Alerts": {
      description: "Allows generating and managing automatic alerts associated with documentary non-compliance or inconsistencies detected in the customer file.",
      features: [
        "Automatic generation of alerts for missing documentation, expired documentation, rejected documentation, and incomplete information",
        "Association of alerts with the affected customer and the corresponding requirement",
        "Alert status management: Pending, Under Review, and Resolved",
        "Assignment of responsible parties and resolution follow-up",
        "Historical record and complete traceability of each alert",
        "Integration with operational workflows and AML/CFT modules",
        "Fully configurable: allows defining generation rules, criticality, responsible parties, statuses, and resolution times according to the entity's internal policies"
      ],
      icon: "bell"
    }
  },
  "AML/CFT (Anti-Money Laundering and Counter-Terrorism Financing)": {
    "Customer Database": {
      description: "The module centralizes all necessary information about the entity's customers, integrating identifying data, segmentation, classification and updated status. It is the starting point for risk analysis, operation monitoring and compliance with regulatory obligations regarding AML/CFT.",
      features: [
        "Bulk data import from core or external systems (banking, ERP, etc.).",
        "Configurable fields: personal, tax, contact, sector, activity, customer type, etc.",
        "Automatic or manual assignment of risk segment and operational status.",
        "Historical record of customer data changes and updates.",
        "Consolidated customer view with access to their file, associated operations and alerts.",
        "Fully configurable: allows defining data structure, load sources, custom attributes, update rules and internal validations."
      ],
      icon: "user"
    },
    "Transaction Database": {
      description: "The transaction database concentrates all financial movements made by customers, functioning as a key source for operational analysis and automated monitoring within the AML/CFT framework. Its design allows integrating data from multiple systems and maintaining complete traceability on each recorded operation.",
      features: [
        "Bulk import of movements from transactional systems (banking core, digital channels, etc.).",
        "Structured registration of operations: date, channel, type, currency, amount, accounts involved, among others.",
        "Automatic association of each operation with its corresponding customer.",
        "Configurable categorization by operation type, channel used, product or risk level.",
        "Visualization of transaction history by customer, with advanced filters.",
        "Fully configurable: data structure, load frequency, filters, validations and custom fields adaptable to each entity."
      ],
      icon: "credit-card"
    },
    "Lists": {
      description: "Allows administering and consulting in a centralized manner the lists of observed persons and entities, including both external (official) lists and internal lists generated by the entity itself. It integrates with the customer and transaction databases to activate automated controls and due diligence actions for relevant matches.",
      features: [
        "Automatic update of external lists (FIU, UN, OFAC, FATF, among others) through API integration.",
        "Possibility to create and maintain internal lists according to own criteria (rejected customers, background, blacklists, etc.).",
        "Automated detection of matches with customers, related persons and counterparts.",
        "Flexible matching rules: exact, partial, by name, document, alias or other identifiers.",
        "Registration and traceability of match analysis: result, evidence, actions taken and assigned responsible party.",
        "Association with automatic alerts and enhanced due diligence flows.",
        "Fully configurable: sources, update frequency, list structure, matching criteria and treatment flows adaptable to each entity."
      ],
      icon: "list"
    },
    "Alert Scoring": {
      "description": "Allows for automatic risk-based definition of the number of days allocated for processing each alert from the date of detection, based on customer characteristics and transaction details. This enables the establishment of proportional deadlines according to criticality levels, optimizing prioritization and compliance with the entity's established timelines.",
      "features": [
        "Automatic assignment of maximum alert processing deadlines based on customer risk level, transaction nature, and other configurable factors.",
        "Alert score calculation using entity-defined rules and weightings (customer risk matrix, transaction type, amount, channel, list matches, alert history, etc.).",
        "Alert classification into levels (low, medium, high, critical), each with associated deadlines from detection date.",
        "Clear visualization of processing deadlines for each alert, with internal warnings for approaching or missed deadlines.",
        "Historical record of applied scoring, formulas used, detection date, deadline date, and assigned responsible parties.",
        "Fully configurable: considered variables, scoring structure, criticality scales, maximum analysis times, and reevaluation policies."
      ],
      "icon": "clock"
    },
    "Transaction Profile": {
      "description": "Establishes the expected financial behavior for each customer based on their characteristics and history, enabling automatic detection of significant deviations that may indicate unusual or suspicious transactions. The transaction profile serves as a dynamic and configurable reference for monitoring purposes.",
      "features": [
        "Automatic generation of expected profiles per customer based on segment, activity, history, and risk level.",
        "Considered variables: transaction frequency, type and volume, channels used, destinations, fund origins, among others.",
        "Periodic profile updates based on configurable rules or key events (risk reclassification, activity increases, etc.).",
        "Automated comparison between expected profiles and actual behavior to identify relevant deviations.",
        "Direct integration with Transaction Monitoring module to feed rules and generate alerts for deviations.",
        "Clear visualization of expected vs. actual transaction profiles, with traceability of profile evolution over time.",
        "Fully configurable: profile structure, tolerance thresholds, update frequency, comparison rules, and alert generation criteria."
      ],
      "icon": "activity"
    },
    "Risk Matrix": {
      description: "Allows evaluating and classifying each customer's risk level through a configurable matrix based on multiple parameterizable variables such as economic activity, jurisdiction, linking channel, transactional behavior and other relevant factors.",
      features: [
        "Automatic evaluation of customer risk based on parameters defined by the entity.",
        "Dynamic calculation of risk level from configurable formulas, weightings and scales.",
        "Programmed periodic review and possibility of reclassification by events.",
        "Recording of risk history and justifications for audit.",
        "Highly configurable: allows defining matrix structure, variables to consider, scores, risk ranges and update rules according to internal policies or FIU regulations."
      ],
      icon: "filter"
    },
    "Transactional Monitoring": {
      description: "Allows continuous supervision of customer operations based on configurable formulas, risk profiles and list matches, generating alerts that must be managed according to internal procedures and current regulations. Centralizes the generation, analysis and documentation of alerts in an environment with complete traceability.",
      features: [
        "Automatic generation of alerts from defined formulas on transactions, lists and behaviors.",
        "Fully configurable rules engine: allows creating multiple conditions using customer, channel, amount, frequency, etc. variables.",
        "Manual registration of alerts by analysts or compliance officers.",
        "Assignment of alerts to responsible analysts, with status, time and priority control.",
        "Operational flow with review, approval, comments, attachment of supporting documentation and formal closure.",
        "Customizable alert statuses: open, in analysis, escalated, approved, closed, archived.",
        "Fully configurable: allows defining generation rules, workflows, closure criteria, involved roles and traceability of each action performed."
      ],
      icon: "eye"
    },
    "Reporting Regimes": {
      description: "Allows generating, managing and submitting reports required by regulatory bodies regarding AML/CFT. Centralizes the preparation of files in required formats, with data validation, duplicate control and complete traceability of the process.",
      features: [
        "Automated generation of reports according to regimes established by the FIU or other regulatory entities.",
        "Integration with customer, transaction, alert and file databases to extract required data.",
        "Internal validations prior to submission: mandatory fields, consistency, duplicates and technical structure.",
        "Recording of versions, generation dates, responsible parties and file status (draft, validated, submitted).",
        "Submission history with evidence of sending and acknowledgment, if applicable.",
        "Fully configurable: allows activating or deactivating regimes, defining fields to include, output structure and extraction logic according to current or future regulations."
      ],
      icon: "file-text"
    }
  },
"Audit": {
  "Requirements Catalog": {
    description: "Allows structuring regulations, communications, standards, or policies into evaluable requirements.",
    features: [
      "Catalog registration with version, effective date, and description.",
      "Breakdown into individual requirements.",
      "Association with articles, clauses, or regulatory sections.",
      "Definition of criticality or priority.",
      "Parameterization of the applicable compliance scale.",
      "Fully configurable according to internal or regulatory methodology."
    ],
    icon: "book"
  },
  "Compliance Scales": {
    description: "Allows defining the levels of compliance that will be used to evaluate the requirements of each catalog.",
    features: [
      "Configuration of statuses (Compliant, Non-compliant, Partial, Not applicable, etc.).",
      "Ability to assign weightings.",
      "Definition of overall compliance calculation rules.",
      "Configuration of mandatory or exclusion criteria.",
      "Adaptable to different regulatory frameworks."
    ],
    icon: "check-square"
  },
  "Assessment Projects": {
    description: "Allows executing specific assessments based on a selected catalog, maintaining autonomy over imported requirements.",
    features: [
      "Base catalog selection.",
      "Automatic import of requirements.",
      "Ability to add new requirements.",
      "Editing or exclusion of imported requirements (based on permissions).",
      "Definition of scope by areas or processes.",
      "Assignment of internal or external stakeholders.",
      "Project status configuration (draft, in progress, completed, approved).",
      "Start and end date tracking."
    ],
    icon: "clipboard-list"
  },
  "Evaluation and Evidence": {
    description: "Allows recording the compliance level of each requirement within the project and maintaining full traceability.",
    features: [
      "Selection of compliance level according to the defined scale.",
      "Upload and storage of documentary evidence.",
      "Recording of comments and observations.",
      "Comparative history between assessments.",
      "Full traceability between catalog, project, and results."
    ],
    icon: "file-text"
  },
  "Monitoring and Action Plans": {
    description: "Allows managing deviations identified during the assessment through corrective actions and continuous follow-up.",
    features: [
      "Generation of corrective actions linked to non-conforming requirements.",
      "Assignment of responsible parties and due dates.",
      "Status tracking (open, in progress, overdue, closed).",
      "Automatic overdue alerts.",
      "Recording of new evidence for closure."
    ],
    icon: "activity"
  },
  "Reporting and Executive Dashboards": {
    description: "Provides a consolidated view of regulatory compliance through indicators and executive dashboards.",
    features: [
      "Overall compliance percentage by project.",
      "Indicators by area or stakeholder.",
      "Comparison between projects and periods.",
      "Export for external audit or regulator.",
      "Executive dashboard with overall status."
    ],
    icon: "bar-chart"
  }
},
};

export const categoriesListEN = Object.keys(modulesDataEN);