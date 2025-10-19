const vueApp=Vue.createApp({
    data(){
        return{
           
            RotatingText: ["Electronics Engineer", "Software Developer"],
            CurrentIndex:0,
            CV:"https://drive.google.com/file/d/1vZ5b4O0_LiZb5_9V5ot53bWgBmkUZVLp/view?usp=sharing",
            CvVisible:true,
            AboutVisible:[],
            About: [
              
                { type: "Education", text: "Bachelor of Science in Electronics Engineering. Universidad Rafael Belloso Chacin (2020-2024)" },
                { type: "Education", text: "Master of Science in Automation and Control. URBE (Present)" },
                { type:"Education", text:"Intensive English Course. University of Houston (2020)"},
                {type: "Education", text: "Introduction to power electronics. University of Colorado Boulder"},
                {type:"Education",text:"Introduction to Software Engineering. IBM"},
                {type:"Education",text:"Introduction to Cloud Computing. IBM"},
                {type:"Education",text:"Introduction to Cloud Development with Html, Css and Javascript. IBM"},
                {Type:"Languagues", text:"Spanish (Native)"},
                {Type:"Languagues", text:"English (C2)"},
                {Type:"Languagues", text:"German (A2)"},

            ],
           
            servicios: [
                { nombre: "Evaluación Inicial", descripcion: "Sesión de diagnóstico inicial con análisis personalizado y configuración del dispositivo.", precio: "$50 USD" },
                { nombre: "Terapia Básica", descripcion: "Programa estándar de electroestimulación y monitoreo de rodilla.", precio: "$200 USD por mes" },
                { nombre: "Terapia Avanzada", descripcion: "Incluye personalización completa, análisis de datos y soporte prioritario.", precio: "$350 USD por mes" },
                { nombre: "Plan Profesional", descripcion: "Acceso a dispositivos múltiples con soporte técnico avanzado.", precio: "$800 USD por mes" },
                { nombre: "Alquiler de Dispositivo", descripcion: "Alquiler mensual del sistema completo de StimBoy para uso personal o profesional.", precio: "$150 USD por mes" }
              ],
              projects:[
                {type:"projects", 
                text:"This project implements a Wi-Fi-controlled car with noise and smoke sensors to detect environmental anomalies. Real-time data is transmitted to the remote controller, providing critical insights. Developed in C++, it ensures efficient performance and seamless system integration.",
                //This project implements a Wi-Fi-controlled car with noise and smoke sensors to detect environmental anomalies. Real-time data is transmitted to the remote controller, providing critical insights. Developed in C++, it ensures efficient performance and seamless system integration.
                type:"projects",text2:" The Portable Monitoring and Treatment System Controller with Electrostimulation assists patients with mobility impairments using three ESP32-based devices communicating via Wi-Fi. It integrates gyroscopes and sensors for motion tracking, controls EMS/TENS stimulation, and features a remote controller for therapy management. Developed in C++, it ensures efficient performance and system integration. "
                
             ,type:"projects",
             //StimBoyWeb is a web-based user manual and documentation platform detailing the StimBoy project’s design, functionality, and development. Built with CSS, JavaScript, HTML, Bootstrap, and Vue.js, it provides clear, structured, and user-friendly documentation.
             type:"projects",
             
             // StimBoyWeb is an enhanced version of the original StimBoy project, designed to improve the monitoring and treatment experience with electrostimulation. This new version enables data transmission to the cloud for visualization on a web platform, integrating a portal that seamlessly connects the microcontroller with the user for a unique and personalized experience. The implementation leverages technologies such as CSS, JavaScript, HTML, Firebase, C++, Bootstrap, and Vue.js, ensuring a smooth and intuitive interaction.
             text3:"ConverLastor is a web application I developed using Vue.js that provides real-time unit conversions for mass, length, and volume, leveraging the Math.js library for high-precision calculations. In addition to unit conversions, the application features a multilingual translation module, allowing users to translate text seamlessly between different languages.",
             text4:"StimBoyWeb is a web-based user manual and documentation platform detailing the StimBoy project’s design, functionality, and development. Built with CSS, JavaScript, HTML, Bootstrap, and Vue.js, it provides clear, structured, and user-friendly documentation. ",
             text5:"StimboyWeb Portal, StimBoyWeb is an enhanced version of the original StimBoy project, designed to improve the monitoring and treatment experience with electrostimulation. This new version enables data transmission to the cloud for visualization on a web platform, integrating a portal that seamlessly connects the microcontroller with the user for a unique and personalized experience. The implementation leverages technologies such as CSS, JavaScript, HTML, Firebase, C++, Bootstrap, and Vue.js, ensuring a smooth and intuitive interaction.", 
             type:"projects",
             //StimboyWeb Portal, StimBoyWeb is an enhanced version of the original StimBoy project, designed to improve the monitoring and treatment experience with electrostimulation. This new version enables data transmission to the cloud for visualization on a web platform, integrating a portal that seamlessly connects the microcontroller with the user for a unique and personalized experience. The implementation leverages technologies such as CSS, JavaScript, HTML, Firebase, C++, Bootstrap, and Vue.js, ensuring a smooth and intuitive interaction. 
             text6:"Enhaced machine for monitoring and automation (EMMA-mk1) is an intelligent system designed for real-time monitoring and automation tasks. It is remotely controlled through a web portal, where all sensor data is displayed live using WebSockets. The system is powered by a Raspberry Pi. ", type:"projects",
             text7:"CLU is a modular system focused on Machine Learning, designed to learn and adapt within virtual or physical environments. It uses Deep Q-Learning (DQN) to make decisions and improve performance over time through interaction and experience. CLU can be trained in simulation and then deployed in real-world systems, enabling intelligent navigation, obstacle avoidance, and goal-oriented behavior.",type:"projects",
             text8:"EMMA-MK2 (Enhanced Modular Mobile Assistant – Mark II) represents the second iteration of the EMMA project, exploring the integration of ROS (Robot Operating System) with virtual simulation environments such as Gazebo and RViz. This version focuses on three key phases SLAM, Computer Vision, and Object Manipulation to demonstrate core robotic concepts like mapping, perception, and motion control.", type:"projects",
            },
        ],
              isVisible:[],
              ProjectVisible:[],
              AboutT: false,
              ProjectTitle:false,
              me:false,
              fullText: "Made with ",  // Texto completo a escribir
              typedText: "",  // Texto que se va mostrando
             typingSpeed: 150,  // Velocidad de tipeo en ms
              deletingSpeed: 100, // Velocidad de borrado en ms
             delayBeforeDelete: 2000, // Tiempo antes de borrar
             currentIndex: 0, // Índice del texto
             isDeleting: false, // Estado de escritura/borrado
        };
    },
    computed:{
        rotatingText(){
            return this.RotatingText[this.CurrentIndex];
        }
    },
    mounted(){
        this.AboutVisible= new Array(this.About.length).fill(false);
        this.isVisible = new Array(this.servicios.length).fill(false);
       
        this.ProjectVisible= new Array(this.projects.length).fill(false);
        window.addEventListener("scroll",this.handleScroll);
        
        setInterval(() => {
            this.CurrentIndex = (this.CurrentIndex + 1) % this.RotatingText.length;
          }, 5000);

        this.startTypingEffect();
    },
    methods:{
        goStimboyPortal() {
            window.location.href = "https://stimboy-1ca74.web.app";
        },

        goconverlastor() {
            window.location.href = "https://kikex22.github.io/converlastor/";
        },
        gostimboyweb() {
            window.location.href = "https://kikex22.github.io/StimboyWeb2/";
        },
        goEmma(){
            window.location.href="https://github.com/kikex22/EMMA-mk1";
        },
        Clu(){
            window.location.href="https://github.com/kikex22/CLU";
        },
        goEmmaMK2(){
            window.location.href="https://github.com/kikex22/EMMA-MK2";
        },
        startTypingEffect() {
            setInterval(() => {
                if (!this.isDeleting) {
                    // Agrega letras progresivamente
                    if (this.currentIndex < this.fullText.length) {
                        this.typedText += this.fullText[this.currentIndex];
                        this.currentIndex++;
                    } else {
                        // Espera antes de borrar
                        setTimeout(() => { this.isDeleting = true; }, this.delayBeforeDelete);
                    }
                } else {
                    // Borra letras progresivamente
                    if (this.typedText.length > 0) {
                        this.typedText = this.typedText.slice(0, -1);
                    } else {
                        // Reinicia el proceso
                        this.isDeleting = false;
                        this.currentIndex = 0;
                    }
                }
            }, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
        },
        handleScroll() {
            if (this.$refs.AboutT) {
              const tituloTop = this.$refs.AboutT.getBoundingClientRect().top;
              const windowHeight = window.innerHeight;
              if (tituloTop < windowHeight - 200) {
                this.AboutT = true;
              }
            }
            if (this.$refs.me) {
                const tituloTop = this.$refs.me.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (tituloTop < windowHeight - 200) {
                  this.me = true;
                }
              }
            if (this.$refs.ProjectTitle) {
                const tituloTop = this.$refs.ProjectTitle.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (tituloTop < windowHeight - 200) {
                  this.ProjectTitle = true;
                }
              }
            this.$refs.fadeSections?.forEach((section, index) => {
                const top = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 200) {
                    this.AboutVisible[index] = true;
                }
                }
            );
            this.$refs.fadeProject?.forEach((section, index) => {
                const top = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 300) {
                    this.ProjectVisible[index] = true;
                }
                }
            );
        
        
        },
        downloadCV(){
            const link=document.createElement("a");
            link.href=this.CV;
            link.download="Angel Oberto cv.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
       
        
    },
   
});

vueApp.mount("#app");