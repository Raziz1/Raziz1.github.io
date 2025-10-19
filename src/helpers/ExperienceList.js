import FordImage from "../assets/Ford_EV.webp";
import FordLogo from "../assets/Ford_logo.webp";
import CienaHW from "../assets/ciena_hw.webp";
import CienaLogo from "../assets/Ciena_logo.webp";
import MACFEPCB from "../assets/MAC_FE_PCB.webp";
import MACFormula from "../assets/mac_formula.webp";
import MacEV from "../assets/mac_ev.webp";
import MacCar from "../assets/mac_formula_car.webp";
import JHEBuilding from "../assets/jhe_building.webp";
import MacCrest from "../assets/mac_crest.webp";
import NordSpaceLogo from "../assets/NordSpace_Logo.webp";
import NordSpaceBackground from "../assets/NordSpace_Background.webp";
import HarbingerLogo from "../assets/Harbinger_Logo.webp";
import HarbingerBackground from "../assets/Harbinger_Background.webp";

import NordSpaceTeam from "../assets/gallery/nordspace-team.webp";
import LaunchSite from "../assets/gallery/launch-site.webp";
import HVRender from "../assets/gallery/HV-render.webp";
import Accumulator from "../assets/gallery/accumulator.webp";
import HVDCDCTesting from "../assets/gallery/dcdc-testing.webp";

const experiences = [
      {
      id: 1,
      org: 'Harbinger Motors',
      role: 'Power Electronics Intern',
      duration: 'Sept 2025 - Present',
      image: HarbingerBackground,
      logo: HarbingerLogo,
      link: 'https://harbingermotors.com/',
      description: [
        '.. Coming Soon ..'
      ],
      skills: ['PLECS', 'Altium', 'Power Electronics']
      // NEW: GALLERY DATA ADDED HERE
      //gallery: [HarbingerBackground, HarbingerBackground, HarbingerBackground]
    },
    {
      id: 2,
      org: 'NordSpace',
      role: 'Avionics & Electrical Engineer Intern',
      duration: 'May 2025 - Aug 2025',
      image: NordSpaceBackground,
      logo: NordSpaceLogo,
      link: 'https://www.nordspace.com/',
      description: [
        'Supported avionics and electrical systems for Canada’s first commercial liquid suborbital rocket, from ground testing to launch.',
        'Tested and validated the telemetry system, ensuring reliable real-time data collection during flight and ground operations.',
        'Developed wireless GSE systems with redundant fiber-optic communication and ruggedized enclosures for field reliability.',
        'Designed, manufactured, and validated rocket wiring and umbilical harnesses, creating cost-effective, reliable solutions and producing detailed KiCad diagrams for integration.'
      ],
      skills: ['KiCad', 'Fusion360'],
      gallery: [NordSpaceTeam, LaunchSite]
    },
    {
      id: 3,
      org: 'Ford',
      role: 'Hardware Development Intern',
      duration: 'May 2024 - Aug 2024',
      image: FordImage,
      logo: FordLogo,
      link: 'https://www.ford.ca/',
      description: [
        'Collaborated on ECU design and validation, encompassing microcontrollers, flash memory, DDR memory, processor interfaces, and power circuits.',
        'Automated testing procedures using Python with pyvisa library, integrating electronic test instruments (DMM, Oscilloscopes) through SCPI commands',
        'Performed in-vehicle testing to validate hardware performance under real-world conditions.',
        'Conducted Worst-Case Circuit Analysis (WCCA) on schematics to ensure the reliability of ECU.'
      ],
      skills: ['Siemens Mentor Graphics', 'PyVisa']
    },
    {
      id: 4,
      org: 'Ciena',
      role: 'NPI Hardware Intern',
      duration: 'Sept 2023 - Apr 2024',
      image: CienaHW,
      logo: CienaLogo,
      link: 'https://www.ciena.ca/',
      description: [
        "Designed test PCBs for Ciena's Wavelogic 6 transmitter and receiver, focusing on analog circuitry (amplifiers, logarithmic amplifiers) and digital interfaces (I2C, SPI). Conducted SPICE simulations and physical testing.",
        "Executed schematic design and PCB layout using Cadence for projects including Raspberry Pi Compute Module 4 integration, an analog muxing board, and enhancements to a high-current muxing design.",
        "Led calibration and validation efforts for test hardware PCBs using lab equipment (DMM, SMU, Oscilloscopes).",
        "Implemented software sequences for testing the high-speed optical capabilities of product PCBs through the use of MATLAB, C, and the SSH protocol."
      ],
      skills: ['Cadence Allegro', 'OrCAD Capture CIS', 'MATLAB', 'SPI', 'I2C']
    },
    {
      id: 5,
      org: 'Ciena',
      role: 'Electro-optics Firmware Intern',
      duration: 'May 2023 - Aug 2023',
      image: 'https://images.mktw.net/im-758893?width=1280&size=1.97',
      logo: CienaLogo,
      link: 'https://www.ciena.ca/',
      description: [
        'Member of Ciena’s Wavelogic 6 optical firmware team developing code (C) for Ciena’s next generation of coherent optical modems',
        'Designing and implementing the low-level software required to control the DSP assisted coherent optical modem',
        'Developed tools and interfaces required to support the integration, testing, and verification of the product that was utilized by engineers, technicians, and clients',
        'Automated and restructured existing web tool interfaces, resulting in a 50% reduction in overhead files'
      ],
      skills: ['MATLAB', 'C', 'Java', 'Javascript']
    },
    {
      id: 6,
      org: 'Mac Formula Electric',
      role: 'High Voltage Electronics Lead',
      duration: 'May 2024 - Present',
      image: MACFEPCB,
      logo: MACFormula,
      link: 'https://macformularacing.com/',
      description: [
        'Led design and implementation of high voltage PCB’s for an electric Formula One vehicle, managing a team of 10 students.',
        'Designed key automotive power systems, including a HV DC-DC converter, EV charger, and an HV battery controller.',
        'Conducted thermal and electrical stress testing on the DC-DC converter using a programmable load to evaluate sustained performance under load.'
      ],
      skills: ['Altium', 'LTSpice', 'MATLAB'],
      gallery: [HVRender, Accumulator, HVDCDCTesting]
    },
    {
      id: 7,
      org: 'Mac Formula Electric',
      role: 'Electrical Engineer',
      duration: 'May 2023 - Apr 2024',
      image: MacEV,
      logo: MACFormula,
      link: 'https://macformularacing.com/',
      description: [
        'Collaborating across various team disciplines with the design and implementation of the electrical systems for a high-performance, competition-ready electric Formula One-class vehicle',
        'Engaged in all aspects of PCB bringup, from schematic design and PCB layout to BOM management and overseeing board manufacturing, culminating in physical testing to ensure functionality and reliability',
        'Led the redesign of a low voltage controller, central to vehicle startup, safety features like BSPD, control of low voltage sensors, and responsible for running motor control algorithms. Additionally it enabled seamless communication via CAN bus with multiple vehicle components and ensured safety through shutdown circuit connections',
        'Redesigned a high voltage controller responsible for safety/fault circuitry and precharge/discharge power management'
      ],
      skills: ['Altium', 'LTSpice', 'MATLAB'],
    },
    {
      id: 8,
      org: 'Mac Formula Electric',
      role: 'Embedded Software Engineer',
      duration: 'Sept 2021 - Aug 2023',
      image: MacCar,
      logo: MACFormula,
      link: 'https://macformularacing.com/',
      description: [
        'Designing, developing & debugging the embedded software used to control various vehicle functions',
        'Aided in interfacing the thermal management system with the battery management system (Orion BMS) utilizing a NUCLEO (STM32) development board, CAN communication, and an event scheduler',
        'Developing a custom user-friendly ADC library for various uses within the vehicle (thermal management system, steering sensors, brake sensors, etc...)',
        'Optimizing C code for STM32 microcontrollers and targeting the ARM Cortex M7'
      ],
      skills: ['STM32', 'C', 'C++'],
    },
    {
      id: 9,
      org: 'McMaster University',
      role: 'B. Eng Electrical Engineering',
      duration: 'Sept 2021 - Present',
      image: JHEBuilding,
      logo: MacCrest,
      link: 'https://www.macengsociety.ca/'
    }
  ];

  export default experiences;
