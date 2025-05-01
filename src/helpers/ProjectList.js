import HVController from "../assets/hv_controller.webp";
import HVDCDC from "../assets/hvdcdc.webp";
import HVCharger from "../assets/HV_Charger.webp";
import frontController from "../assets/front_controller.webp";
import bluetoothSpeaker from "../assets/Bluetooth_Speaker_Render.webp";
import PCBBusinessCard from "../assets/PCB_Business_Card_Blender.webp";
import SolarPCB from "../assets/Solar_PCB_Render.webp";
import AudioAmplifier from "../assets/audio_amplifier.webp";
import LIDARScan from "../assets/LIDAR_scan.webp";
import WeatherStation from "../assets/weather-news.webp";
import SpeedTrapPoster from "../assets/speed-trap-poster.webp";
import EvoBornePoster from "../assets/evoborne-poster.webp";
import HillClimbPoster from "../assets/hill-climb-remake.webp";
import StealthGamePoster from "../assets/stealth_game.webp";
import FreeRTOS from "../assets/FreeRTOS.webp";
import NUCELO_MCU from "../assets/NUCELO_MCU.webp";
import deltahacks9 from "../assets/deltahacks9.webp";
import news_feed from "../assets/news-feed.webp";
import desktop_computer from "../assets/desktop-computer.webp";
import SpeedTrapOST from "../assets/SpeedTrap_OST.webp";
import ItalianWedge from "../assets/Italian_Wedge.mp3";

const projects = [
  {
    id: 1,
    title: 'HV Charger',
    group: 'hardware',
    description: "The PCB design for the HV charger for MAC EV 6",
    image: HVCharger,
    imageType: 'landscape-img',
    link: 'https://macformularacing.com/',
    badge_1: 'Altium',
    badge_2: 'PCB',
  },
  {
      id: 2,
      title: 'HV DCDC',
      group: 'hardware',
      description: "The PCB design for the HV DCDC converter for MAC EV 6",
      image: HVDCDC,
      imageType: 'landscape-img',
      link: 'https://macformularacing.com/',
      badge_1: 'Altium',
      badge_2: 'PCB',
    },
    {
      id: 3,
      title: 'HV Controller',
      group: 'hardware',
      description: 'The PCB design for the high voltage controller for MAC EV V',
      image: HVController,
      imageType: 'landscape-img',
      link: 'https://macformularacing.com/',
      badge_1: 'Altium',
      badge_2: 'PCB',
    },
    {
      id: 4,
      title: 'Front Controller',
      group: 'hardware',
      description: 'The PCB design for the front controller for MAC EV V',
      image: frontController,
      imageType: 'landscape-img',
      link: 'https://macformularacing.com/',
      badge_1: 'Altium',
      badge_2: 'PCB',
    },
    {
      id: 5,
      title: 'Bluetooth Speaker',
      group: 'hardware',
      description: 'A bluetooth speaker (5 watt) PCB built around an ESP32 C3',
      image: bluetoothSpeaker,
      imageType: 'landscape-img',
      link: 'https://github.com/Raziz1/Bluetooth-Speaker',
      badge_1: 'KiCad',
      badge_2: 'ESP32',
    },
    {
      id: 6,
      title: 'PCB Business Card',
      group: 'hardware',
      description: 'A PCB Business Card designed in KiCad. Features NFC capabilities',
      image: PCBBusinessCard,
      imageType: 'landscape-img',
      link: 'https://github.com/Raziz1/PCB_Business_Card',
      badge_1: 'KiCad',
      badge_2: 'NFC',
    },
    {
        id: 7,
        title: "Solar PCB",
        group: "hardware",
        description: "Solar-powered PCB for charging dual 18650 lithium-ion batteries and running a low-power Arduino application",
        image: SolarPCB,
        imageType: 'landscape-img',
        link: "https://github.com/Raziz1/Solar_PCB",
        badge_1: "KiCad",
        badge_2: "Arduino",
      },
      {
        id: 8,
        title: "Audio Amplifier",
        group: "hardware",
        description: "An audio amplifier designed in Altium Designer for a 30 watt car speaker. Characterized and simulated in LTspice",
        image: AudioAmplifier,
        imageType: 'landscape-img',
        link: "https://github.com/Raziz1/Audio_Amplifier",
        badge_1: "Altium",
        badge_2: "LTspice",
      },
      {
        id: 9,
        title: "LIDAR Mapping",
        group: "hardware",
        description: "A 3D spatial mapping LIDAR system built around the TI MSP432E401Y micrcontroller in conjunction with MATLAB to visualize the data",
        image: LIDARScan,
        link: "https://github.com/Raziz1/Spatial_Mapping_LIDAR",
        badge_1: "MATLAB",
        imageType: 'landscape-img',
        badge_2: "C",
      },
      {
        id: 10,
        title: "Arduino Weather Station",
        group: "hardware",
        description: "A TFT display that shows the current weather using an API & a Wifi module for the Arduino board",
        image: WeatherStation,
        imageType: 'small-cards-img',
        link: "https://github.com/Raziz1/Arduino_Weatherstation",
        badge_1: "Arduino",
        badge_2: "C++",
      },
      {
        id: 11,
        title: "Speed Trap",
        group: "games",
        description: "A high speed racing game where swarms of cops chase your vehicle. Featuring a variety of customizable vehicles, day and night cycles, and a live leaderboard. This project was developed in the Unity Game engine using the C# scripting language. This game currently has 250+ downloads on the Google Play Store.",
        image: SpeedTrapPoster,
        imageType: "card-img-projects",
        link: "https://play.google.com/store/apps/details?id=com.DefaultCompany.SpeedTrap",
        badge_1: "Unity",
        badge_2: "C#"
      },
      {
        id: 12,
        title: "EvoBorne",
        group: "games",
        description: "An arcade missile dodging game featuring a variety of vehicles. This was all developed in Android Studio while utilizing Java and the Processing graphics library. This game was my first game launched all the way back in 2020 on the Google Play Store.",
        image: EvoBornePoster,
        imageType: "card-img-projects",
        link: "https://play.google.com/store/apps/details?id=processing.test.spaceship_game",
        badge_1: "Java",
        badge_2: "Box2D"
      },
      {
        id: 13,
        title: "Hill Climbing Remake",
        group: "games",
        description: "A remake of the Hill Climb Racing mobile game using the Box2D physics engine. This game utilizes perlin noise to dynamically generate terrain. This game also features various maps, vehicles, upgrades, and background music.",
        image: HillClimbPoster,
        imageType: "card-img-projects",
        link: "https://github.com/Raziz1/Hill-Climbing_Processing",
        badge_1: "Java",
        badge_2: "Box2D"
      },
      {
        id: 14,
        title: "Stealth Game",
        group: "games",
        description: "A quick stealth game with the A* pathfinding algorithm implemented. It was designed using C++ and the SFML graphics library.",
        image: StealthGamePoster,
        imageType: "card-img-projects",
        link: "https://github.com/Raziz1/Stealth_Game",
        badge_1: "C++",
        badge_2: "SFML"
      },
      {
        id: 15,
        title: "Hands-on FreeRTOS",
        group: "other",
        description: "Exploration of FreeRTOS (Real-time operating system) on a NUCLEO-F767ZI micrcontroller.",
        image: FreeRTOS, // import this at the top
        imageType: "small-cards-img",
        link: "https://github.com/Raziz1/Hands-On-FreeRTOS",
        badge_1: "FreeRTOS",
        badge_2: "C",
      },
      {
        id: 16,
        title: "STM32F767ZI Driver",
        group: "other",
        description: "NUCLEO-F767ZI embedded driver development based on a Udemy course. The driver functionality includes GPIO, SPI, I2C, and UART.",
        image: NUCELO_MCU, // import this at the top
        imageType: "small-cards-img",
        link: "https://github.com/Raziz1/STM32F767ZI_Driver",
        badge_1: "STM32",
        badge_2: "C",
      },
      {
        id: 17,
        title: "DeltaHacks 9",
        group: "other",
        description: "A blood alcohol concentration calculator that keeps track of drinks throughougt the night and actively updates your BAC based on time",
        image: deltahacks9, // import this at the top
        imageType: "small-cards-img",
        link: "https://github.com/Micnasr/Alcohol-Monitor",
        badge_1: "ReactJS",
        badge_2: "Firebase",
      },
      {
        id: 18,
        title: "2SI3 Projects",
        group: "other",
        description: "McMaster University's 'Data Structures & Algorithms' (2SI3) course. Linked lists, binary search trees, and hash tables.",
        image: "https://img.icons8.com/external-becris-flat-becris/512/null/external-algorithm-data-science-becris-flat-becris.png",
        imageType: "small-cards-img",
        link: "https://github.com/Raziz1/COMPENG_2SI3",
        badge_1: "C++",
        badge_2: "VS Studio",
      },
      {
        id: 19,
        title: "School Display",
        group: "other",
        description: "Created a informative school display that webscrapes using Java and the Twitter API. The display retrieves news, weather, bus schedules, snow day predictor, and tweets.",
        image: news_feed, // import this at the top
        imageType: "small-cards-img",
        link: "https://github.com/Raziz1/School_Display",
        badge_1: "Twitter API",
        badge_2: "Processing",
      },
      {
        id: 20,
        title: "Audio Visualizer",
        group: "other",
        description: "A simple audio visualizer that uses Fast Fourier Transform to visualize audio input from your microphone",
        image: desktop_computer, // import this at the top
        imageType: "small-cards-img",
        link: "https://github.com/Raziz1/Audio_Visualizer",
        badge_1: "Minim",
        badge_2: "Processing",
      },
      {
        id: 21,
        title: "Sorting Algorithms",
        group: "other",
        description: "Visualizing basic sorting algorithms using C++ & the SFML graphics library",
        image: "https://img.icons8.com/fluency/512/null/sort-by.png",
        imageType: "small-cards-img",
        link: "https://github.com/Raziz1/Basic_Sorting_Algorithms",
        badge_1: "C++",
        badge_2: "SFML",
      },
      {
        id: 22,
        title: "The Italian Wedge",
        group: "music",
        description: "My first ever piece produced for my game 'Speed Trap'. You have to start somewhere!",
        image: SpeedTrapOST,
        imageType: "small-cards-img",
        audio: ItalianWedge,
        badge_1: "Audio",
        badge_2: "Original"
      }
  ];

  export default projects;
