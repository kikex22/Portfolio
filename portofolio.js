const vueApp=Vue.createApp({
    data(){
        return{
           
            RotatingText: ["Electronics Engineer", "Web Developer"],
            CurrentIndex:0,
            CV:"https://drive.google.com/file/d/1nqVVysdRg8AX9gmmf4gNtsSlMwbiTQKA/view?usp=sharing",
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
                text:" My thesis project involved the development of a Portable Monitoring and Treatment System Controller with Electrostimulation for patients suffering from mobility impairments and muscular injuries. The system comprises three interconnected devices based on ESP32 microcontrollers, leveraging Wi-Fi communication for seamless integration and control. One device is responsible for measuring the knee angle, featuring the MPU6050 as the primary sensor. Another device manages EMS (Electrical Muscle Stimulation) and TENS (Transcutaneous Electrical Nerve Stimulation), incorporating various instrumentation amplifiers and DC boost converters to regulate the stimulation signals. The third device serves as a remote controller, receiving data from the knee angle sensor and transmitting the necessary commands to the EMS/TENS unit, ensuring the therapy starts, operates, and stops correctly. This interaction is visualized and controlled through an LCD screen with buttons and a joystick, all communicating via Wi-Fi protocols",
             type:"projects",text2:"StimBoyWeb is an enhanced version of the original StimBoy project, designed to improve the monitoring and treatment experience with electrostimulation. This new version enables data transmission to the cloud for visualization on a web platform, integrating a portal that seamlessly connects the microcontroller with the user for a unique and personalized experience. The implementation leverages technologies such as CSS, JavaScript, HTML, Firebase, C++, Bootstrap, and Vue.js, ensuring a smooth and intuitive interaction. "
             ,type:"projects",
             text3:"This project features a remote-controlled car utilizing Wi-Fi communication protocols for a stable and long-range connection. In addition to its controlled mobility, the vehicle is equipped with noise and smoke sensors that detect environmental anomalies. The collected data is transmitted in real-time to the remote controller, providing crucial information to the user. The system is implemented using C++, ensuring efficient performance and seamless integration of components. ",
            },
        ],
              isVisible:[],
              ProjectVisible:[],
              AboutT: false,
              ProjectTitle:false,
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