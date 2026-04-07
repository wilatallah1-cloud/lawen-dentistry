import type { Locale } from "./locale";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      aesthetic: "Cosmetic",
      services: "Services",
      pricing: "Pricing",
      promotions: "Promotions",
      faq: "FAQ",
      contact: "Contact",
      bookNow: "Book Now",
      call: "Call",
      book: "Book",
      location: "Location",
      allAesthetic: "All Cosmetic Services",
      injectables: "Teeth Whitening",
      radiofrequency: "Veneers & Bonding",
      lasers: "Smile Makeovers",
      lipolysis: "Cosmetic Contouring",
      liquidBBL: "Gum Reshaping",
      hairStim: "Dental Bonding",
      blepharoplasty: "Porcelain Crowns",
      facialContouring: "Full Mouth Restoration",
      penisFillers: "",
      scrotox: "",
      holetox: "",
      penisEnhancement: "",
      faqPenile: "",
      sexualHealth: "",
      allMedical: "All General Services",
      consultation: "New Patient Exam",
      familyMedicine: "Preventative Dentistry",
      minorEmergency: "Emergency Dental Care",
      mentalHealth: "Sedation Dentistry",
      hormonotherapy: "TMJ Treatment",
      weightManagement: "Periodontics",
      medicalAesthetic: "Cosmetic Dentistry",
      medicalServices: "General Dentistry",
      sexualHealthLabel: "",
    },
    footer: {
      tagline:
        "Your trusted dental care partner in Halifax. We treat our patients as family, providing comprehensive and current dental care in a warm, professional environment.",
      visitUs: "Visit Us",
      callUs: "Call Us",
      emailUs: "Email Us",
      hours: "Hours",
      hoursDetail: "Mon-Fri: 8:00 AM - 5:00 PM",
      satSun: "Sat-Sun: Closed",
      bookAppointment: "Book Your Appointment",
      blog: "Blog",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      conditions: "Accessibility",
    },
    service: {
      bookConsultation: "Book Your Appointment",
      bookEvaluation: "Book an Evaluation",
      whyChoose: "Why Choose Lawen Dentistry",
      ourTreatments: "Our Treatments",
      ourProcess: "Our Process",
      patientTestimonials: "Patient Testimonials",
      rated: "Rated",
      byPatients: "by our patients",
      faq: "Frequently Asked Questions",
      readyTitle: "Ready to start your",
      transformation: "smile transformation?",
      bookToday: "Book your appointment today",
      formSubtitle:
        "Free consultation \u2014 less than 1 minute to book your visit",
      fullName: "Full Name *",
      emailAddress: "Email Address *",
      phoneNumber: "Phone Number",
      interestedIn: "What are you interested in? *",
      selectTreatment: "Select a service",
      submit: "Submit",
      confidential: "Your information is 100% confidential and secure",
    },
    hero: {
      excellenceIn: "Excellence in",
      medicine: "Dentistry",
      subtitle: "Two Halifax Locations \u2014 Comprehensive Dental Care for the Whole Family",
      description:
        "At Lawen Dentistry, our mission is to treat you as our family and friends. Led by Dr. T. Daniel Lawen, DDS, we deliver the most comprehensive and current dental care in a warm, professional environment across two convenient Halifax locations.",
      privateMedicine: "Our Services",
      medicalAesthetic: "Book Appointment",
    },
    about: {
      badge: "About Our Practice",
      title: "Lawen Dentistry :",
      titleHighlight: "Your Trusted",
      titleEnd: "Partner in Dental Care",
      p1: "We\u2019re dedicated to caring for you as we would our own families. Our entire team works hard to provide you with exceptional dental care. We believe that knowledge, compassion, and excellence are vital to patient care.",
      p2: "Choose the Lawen Dentistry that\u2019s most convenient for your family. Whichever location you choose, you\u2019ll get the same professional dental services, the same in-house digital dental technology, and the same friendly welcome, every time. We can serve you in English, French, and Arabic.",
      patientCentered: "Patient-Centered",
      patientCenteredDesc: "Personalized care for every family member",
      compassionate: "Award-Winning",
      compassionateDesc: "Halifax Community Votes Winner & ThreeBest Rated",
      allAges: "All Ages",
      allAgesDesc: "From children\u2019s first visit to complex adult care",
      excellence: "Advanced Technology",
      excellenceDesc: "iTero digital scanner, OP300 3D X-ray, intraoral cameras",
      inclusive: "Two Locations",
      inclusiveDesc:
        "Spring Garden Road and Mumford Road, serving all of Halifax",
    },
    doctor: {
      name: "Dr. T. Daniel Lawen",
      role: "Doctor of Dental Surgery (DDS)",
      bio: "Dr. Lawen has had a lifelong passion for dentistry. Born and raised in Halifax, he graduated from Dalhousie University with distinction in Chemistry, then earned his DDS degree (4th in his class). He specializes in cosmetic dentistry, implantology, and Invisalign, and has trained at the Kois Center, Dawson Academy, and Misch International Implant Institute.",
      years: "Locations",
      patients: "Invisalign Provider",
      certifications: "Dental Services",
    },
    services: {
      badge: "Our Specialized Services",
      title: "Comprehensive Dental",
      titleHighlight: "Care & Excellence",
      subtitle:
        "From preventative care to advanced cosmetic and restorative treatments, designed with your comfort and smile goals at the heart of everything we do.",
      familyMedicine: "Invisalign",
      familyMedicineDesc:
        "Straighten your smile discreetly with clear aligners. Dr. Lawen has been an Invisalign provider since 2006 and holds Diamond Provider status based on volume and quality of cases.",
      injectables: "Cosmetic Dentistry",
      injectablesDesc:
        "Transform your smile with veneers, bonding, whitening, and Bioclear cosmetic restorations. Every treatment is tailored to enhance your natural beauty and confidence.",
      weightManagement: "Dental Implants",
      weightManagementDesc:
        "Permanent tooth replacement that looks, feels, and functions like natural teeth. Dr. Lawen trained at the Misch International Implant Institute and Hands On Institute.",
      laserTreatments: "Sedation Dentistry",
      laserTreatmentsDesc:
        "Anxiety-free dental care with safe, effective sedation options. Relax while we take care of your smile in complete comfort.",
      preventiveScreenings: "Children\u2019s Dentistry",
      preventiveScreeningsDesc:
        "Gentle, friendly dental care designed to make your child\u2019s experience positive from their very first visit. Building healthy habits early.",
      bodyContouring: "Emergency Dental Care",
      bodyContouringDesc:
        "Toothache, broken tooth, or dental trauma? We provide prompt emergency appointments to get you out of pain and back to normal.",
      penileAndBBL: "Preventative Dentistry",
      penileAndBBLDesc:
        "Comprehensive exams, cleanings, digital x-rays, and hygiene care to keep your teeth healthy and catch issues before they become serious.",
      consultation: "Book Appointment",
      startingAt: "Starting at",
      consultationRequired: "Call for Details",
      learnMore: "Learn More",
      notSure: "Not sure which service is right for you?",
      scheduleConsultation: "Schedule a Consultation",
    },
    beforeAfter: {
      badge: "Smile Transformations",
      title: "Real Smiles,",
      titleHighlight: "Real Confidence",
      subtitle:
        "See the life-changing results our patients achieve with personalized dental treatments tailored to their unique smile goals.",
      beforeAfterLabel: "Before & After",
      available: "Available at consultation",
      before: "Before",
      after: "After",
      dermalFillers: "Invisalign",
      lipEnhancement: "Smile Alignment",
      lipDesc: "Discreet clear aligner treatment for a beautifully straight smile",
      botox: "Teeth Whitening",
      foreheadCrows: "Professional Brightening",
      botoxDesc: "Dramatically brighter, whiter smile with professional-grade treatment",
      bodyContouringTitle: "Dental Implants",
      abdomen: "Permanent Restoration",
      bodyContouringDesc:
        "Natural-looking tooth replacement that restores your full smile",
      laserTreatment: "Cosmetic Dentistry",
      skinRejuvenation: "Full Smile Makeover",
      laserDesc:
        "Complete smile transformation with veneers, Bioclear bonding, and contouring",
      disclaimer:
        "Individual results may vary. Actual patient photos available during your personal consultation.",
    },
    certifications: {
      badge: "Trusted & Recognized",
      title: "Recognized by",
      titleHighlight: "Patients &",
      titleEnd: "Industry Leaders",
      subtitle:
        "Lawen Dentistry\u2019s commitment to excellence is recognized by patients and prestigious dental organizations across Canada",
      obesityCanada: "Community Votes Winner",
      obesityCanadaDesc: "Voted best dental practice by the Halifax community (2021)",
      calibre: "Diamond Invisalign Provider",
      calibreDesc: "Provider since 2006. Platinum 2019-2020, Diamond since 2021",
      worldlink: "ThreeBest Rated",
      worldlinkDesc: "Independently verified as one of Halifax\u2019s top dental practices",
      certified: "Recognized",
      certifiedExcellence: "Award-Winning Practice",
      trustedPartners: "5-Star Patient Reviews",
      qualityAssurance: "Advanced Technology",
    },
    testimonials: {
      badge: "Patient Stories",
      title: "What Our",
      titleHighlight: "Patients",
      titleEnd: "Say",
      subtitle:
        "Real experiences from real patients who trust Lawen Dentistry with their smiles",
    },
    faqSection: {
      badge: "Frequently Asked Questions",
      title: "Your Questions",
      titleHighlight: "Answered",
      subtitle:
        "Find answers to common questions about our dental services and what to expect at our practice.",
      stillHaveQuestions: "Still Have Questions?",
      stillHaveQuestionsDesc:
        "We\u2019re here to help! Contact us for personalized answers to your specific questions about our dental services.",
      contactUs: "Contact Us",
    },
    cta: {
      badge: "Get Started Today",
      title: "Ready for Your",
      titleHighlight: "Best Smile",
      titleEnd: "?",
      subtitle:
        "Book your appointment today and experience the Lawen Dentistry difference. Two Halifax locations, one standard of excellence.",
      bookAppointment: "Book Your Appointment",
    },
  },
};

export type Translations = typeof translations.en;

export function useTranslations(locale: Locale): Translations {
  return translations[locale] as Translations;
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] as Translations;
}
