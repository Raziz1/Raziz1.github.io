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
import TeslaLogo from "../assets/Tesla_Logo.webp";
import TeslaBackground from "../assets/Megapack.webp";

import TacoTruck from "../assets/gallery/Taco_Truck.webp";
import HarbingerNight from "../assets/gallery/Harbinger_Night.webp";
import NordSpaceTeam from "../assets/gallery/nordspace-team.webp";
import LaunchSite from "../assets/gallery/launch-site.webp";
import HVRender from "../assets/gallery/HV-render.webp";
import Accumulator from "../assets/gallery/accumulator.webp";
import HVDCDCTesting from "../assets/gallery/dcdc-testing.webp";

const experiences = [
      {
      id: 1,
      org: 'Tesla',
      role: 'Electronics Design Intern',
      duration: 'May 2026 - Present',
      image: TeslaBackground,
      logo: TeslaLogo,
      link: 'https://www.tesla.com/',
      description: [
        '🔋 Megapack'
      ],
      skills: ['Altium', 'LTSpice', 'LV Electronics']
      // NEW: GALLERY DATA ADDED HERE
      //gallery: [HarbingerBackground, HarbingerBackground, HarbingerBackground]
    },
    {
      id: 2,
      org: 'Harbinger Motors',
      role: 'Power Electronics Intern',
      duration: 'Sept 2025 - April 2026',
      image: HarbingerBackground,
      logo: HarbingerLogo,
      link: 'https://harbingermotors.com/',
      description: [
        '⚡ OBC & SSCB'
      ],
      skills: ['PLECS', 'Altium', 'Power Electronics'],
      // NEW: GALLERY DATA ADDED HERE
      gallery: [TacoTruck, HarbingerNight]
    },
    {
      id: 3,
      org: 'NordSpace',
      role: 'Avionics & Electrical Engineer Intern',
      duration: 'May 2025 - Aug 2025',
      image: NordSpaceBackground,
      logo: NordSpaceLogo,
      link: 'https://www.nordspace.com/',
      description: [
        '🚀 Taiga Rocket'
      ],
      skills: ['KiCad', 'Fusion360'],
      gallery: [NordSpaceTeam, LaunchSite]
    },
    {
      id: 4,
      org: 'Ford',
      role: 'Hardware Development Intern',
      duration: 'May 2024 - Aug 2024',
      image: FordImage,
      logo: FordLogo,
      link: 'https://www.ford.ca/',
      description: [
        '🛜 TCU Hardware' 
      ],
      skills: ['Siemens Mentor Graphics', 'PyVisa']
    },
    {
      id: 5,
      org: 'Ciena',
      role: 'NPI Hardware Intern',
      duration: 'Sept 2023 - Apr 2024',
      image: CienaHW,
      logo: CienaLogo,
      link: 'https://www.ciena.ca/',
      description: [
        '⚡ Wavelogic 6'
      ],
      skills: ['Cadence Allegro', 'OrCAD Capture CIS', 'MATLAB', 'C', 'SPI', 'I2C']
    },
    {
      id: 6,
      org: 'Ciena',
      role: 'Electro-optics Firmware Intern',
      duration: 'May 2023 - Aug 2023',
      image: 'https://images.mktw.net/im-758893?width=1280&size=1.97',
      logo: CienaLogo,
      link: 'https://www.ciena.ca/',
      description: [
        '⚡ Wavelogic 6'
      ],
      skills: ['MATLAB', 'C', 'Java', 'Javascript']
    },
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
      org: 'McMaster University',
      role: 'B. Eng Electrical Engineering',
      duration: 'Sept 2021 - Present',
      image: JHEBuilding,
      logo: MacCrest,
      link: 'https://www.macengsociety.ca/'
    }
  ];

  export default experiences;
