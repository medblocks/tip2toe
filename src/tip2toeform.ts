import {MBFormData} from "@/types"

const _practitionerForm : MBFormData = {
  overview:{
    title: "Overview",
    description: "",
    slug:"overview",
    path:"",
    questions: []
  },
  individual:{
    title: "Individual",
    description: "",
    slug:"individual",
    path:"",
    questions: []
  },
  this_is_me:{
    title: "This is me",
    description: "",
    slug:"this-is-me",
    path:"",
    questions: []
  },
  family_history:{
    title: "Family History",
    description: "",
    slug:"family-history",
    path:"",
    questions: []
  },
  pregnancy: {
    title: "Pregnancy",
    description: "",
    slug:"pregnancy",
    path:"tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:{0}",
    questions: [
      {type:"ontology", code: "HP:0001562", terminology: "local_terms", value: "Oligohydramnios", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:0" },
      {type:"ontology", code: "HP:0001561", terminology: "local_terms", value: "Polyhydramnios", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:1" },
      {type:"ontology", code: "HP:0011436", terminology: "local_terms", value: "Abnormal maternal serum screening", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:2" },
      {type:"ontology", code: "HP:0034058", terminology: "local_terms", value: "Abnormal fetal morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:3" },
      {type:"ontology", code: "HP:0011425", terminology: "local_terms", value: "Fetal ultrasound soft marker", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:4" },
      {type:"ontology", code: "HP:0034059", terminology: "local_terms", value: "Abnormal fetal physiology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:5" },
      {type:"ontology", code: "HP:0001511", terminology: "local_terms", value: "Intrauterine growth retardation", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:6" },
      {type:"ontology", code: "HP:0003517", terminology: "local_terms", value: "Fetal overgrowth", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:7" },
      {type:"ontology", code: "HP:0001558", terminology: "local_terms", value: "Decreased fetal movement", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:8" },
      {type:"ontology", code: "HP:0010519", terminology: "local_terms", value: "Increased fetal movement", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:9" },
      {type:"ontology", code: "HP:0001194", terminology: "local_terms", value: "Abnormalities of placenta or umbilical cord", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:10" },
      {type:"ontology", code: "HP:0002686", terminology: "local_terms", value: "Prenatal maternal (health) abnormality (Describe in Clinical summary above)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:11" },
      {type:"ontology", code: "HP:0030246", terminology: "local_terms", value: "Maternal first trimester fever", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:12" },
      {type:"ontology", code: "HP:0009800", terminology: "local_terms", value: "Maternal diabetes", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:13" },
      {type:"ontology", code: "HP:0011437", terminology: "local_terms", value: "Maternal autoimmune disease (Describe in Clinical summary above)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:14" },
      {type:"ontology", code: "HP:0100622", terminology: "local_terms", value: "Maternal seizure (during pregnancy)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:15" },
      {type:"ontology", code: "HP:0011438", terminology: "local_terms", value: "Maternal teratogenic exposure (Describe in Clinical summary above)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:16" },
      {type:"ontology", code: "HP:0100603", terminology: "local_terms", value: "Toxemia of pregnancy", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:17" },
      {type:"ontology", code: "HP:0200067", terminology: "local_terms", value: "Recurrent spontaneous abortion in previous pregnancies", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/pregnancy:18" }    
    ]
  },
  delivery: {
    title: "Delivery",
    description: "",
    slug:"delivery",
    path:"tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:{0}",
    questions: [
      {type:"ontology", code: "HP:0001787", terminology: "local_terms", value: "Abnormal delivery", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:0" },
      {type:"ontology", code: "HP:0025116", terminology: "local_terms", value: "Fetal distress", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:1" },
      {type:"ontology", code: "HP:0030917", terminology: "local_terms", value: "Low APGAR score", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:2" },
      {type:"ontology", code: "HP:0011410", terminology: "local_terms", value: "Caesarian section", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:3" },
      {type:"ontology", code: "HP:0011411", terminology: "local_terms", value: "Forceps delivery", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:4" },
      {type:"ontology", code: "HP:0011412", terminology: "local_terms", value: "Ventouse delivery", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:5" },
      {type:"ontology", code: "HP:0001623", terminology: "local_terms", value: "Breech presentation", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:6" },
      {type:"ontology", code: "HP:0012498", terminology: "local_terms", value: "Nuchal cord/Umbilical cord wrapped around the baby's neck", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/delivery:7" }
    ]
  },
  neonatal_period_complications: {
    title: 'Neonatal period complications',
    description: "",
    slug: 'neonatal-period-complications',
    path:"tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:{0}",
    questions: [
      {type:"ontology", code: "HP:0002643", terminology: "local_terms", value: "Neonatal respiratory distress", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:0" },
      {type:"ontology", code: "HP:0008872", terminology: "local_terms", value: "Feeding difficulties in infancy", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:1" },
      {type:"ontology", code: "HP:0011471", terminology: "local_terms", value: "Gastrostomy tube feeding in infancy", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:2" },
      {type:"ontology", code: "HP:0000952", terminology: "local_terms", value: "Significant jaundice (e.g., requiring treatment)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:3" },
      {type:"ontology", code: "HP:0001998", terminology: "local_terms", value: "Neonatal hypoglycemia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:4" },
      {type:"ontology", code: "HP:0032807", terminology: "local_terms", value: "Neonatal seizure", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:5" },
      {type:"ontology", code: "HP:0001319", terminology: "local_terms", value: "Neonatal hypotonia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:6" },
      {type:"ontology", code: "HP:0032169", terminology: "local_terms", value: "Severe infection", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:7" },
      {type:"ontology", code: "HP:0002803", terminology: "local_terms", value: "Congenital contracture", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/neonatal_period_complications:8" },
    ]
  },
  growth_at_birth: {
    title: "Growth at birth",
    description: "",
    slug: "growth-at-birth",
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/growth_at_birth:{0}",
    questions: [
      {type:"ontology", code: "HP:0001507", terminology: "local_terms", value: "Growth abnormality at birth", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/growth_at_birth:0" },
      {type:"ontology", code: "HP:0001518", terminology: "local_terms", value: "Small for gestational age", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/growth_at_birth:1" },
      {type:"ontology", code: "HP:0001520", terminology: "local_terms", value: "Large for gestational age", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/growth_at_birth:2" },
      {type:"ontology", code: "HP:0000256", terminology: "local_terms", value: "Macrocephaly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/growth_at_birth:3" },
      {type:"ontology", code: "HP:0000252", terminology: "local_terms", value: "Microcephaly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/growth_at_birth:4" },
      {type:"ontology", code: "HP:0001528", terminology: "local_terms", value: "Hemihypertrophy", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/growth_at_birth:5" },
      {type:"ontology", code: "HP:0000158", terminology: "local_terms", value: "Macroglossia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/growth_at_birth:6" }
    ]
  },
  post_natal_growth: {
    title: 'Post-natal growth',
    description: "",
    slug: 'post-natal-growth',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:{0}",
    questions: [
      {type:"ontology", code: "HP:0001507", terminology: "local_terms", value: "Growth abnormality at birth", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:0" },
      {type:"ontology", code: "HP:0000256", terminology: "local_terms", value: "Macrocephaly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:1" },
      {type:"ontology", code: "HP:0000252", terminology: "local_terms", value: "Microcephaly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:2" },
      {type:"ontology", code: "HP:0000098", terminology: "local_terms", value: "Tall stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:3" },
      {type:"ontology", code: "HP:0001519", terminology: "local_terms", value: "Disproportionate tall stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:4" },
      {type:"ontology", code: "HP:0003498", terminology: "local_terms", value: "Disproportionate short stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:5" },
      {type:"ontology", code: "HP:0004322", terminology: "local_terms", value: "Short stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:6" },
      {type:"ontology", code: "HP:0008873", terminology: "local_terms", value: "Disproportionate short-limb short stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:7" },
      {type:"ontology", code: "HP:0003521", terminology: "local_terms", value: "Disproportionate short-trunk short stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post_natal_growth:8" }
    ]
  },
  facial_morphology: {
    title: 'Facial morphology',
    description: "",
    slug: 'facial-morphology',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:{0}",
    questions: [
      {type:"ontology", code: "HP:0001999", terminology: "local_terms", value: "Abnormal facial shape", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:0" },
      {type:"ontology", code: "HP:0000306", terminology: "local_terms", value: "Abnormality of the chin", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:1" },
      {type:"ontology", code: "HP:0000347", terminology: "local_terms", value: "Micrognathia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:2" },
      {type:"ontology", code: "HP:0000277", terminology: "local_terms", value: "Abnormal mandible morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:3" },
      {type:"ontology", code: "HP:0000326", terminology: "local_terms", value: "Abnormality of the maxilla", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:4" },
      {type:"ontology", code: "HP:0000290", terminology: "local_terms", value: "Abnormality of the forehead", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:5" },
      {type:"ontology", code: "HP:0011220", terminology: "local_terms", value: "Prominent forehead", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:6" },
      {type:"ontology", code: "HP:0000340", terminology: "local_terms", value: "Sloping forehead", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:7" },
      {type:"ontology", code: "HP:0000520", terminology: "local_terms", value: "Proptosis", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:8" },
      {type:"ontology", code: "HP:0000316", terminology: "local_terms", value: "Hypertelorism", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:9" },
      {type:"ontology", code: "HP:0000601", terminology: "local_terms", value: "Hypotelorism", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:10" },
      {type:"ontology", code: "HP:0000492", terminology: "local_terms", value: "Abnormal eyelid morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:11" },
      {type:"ontology", code: "HP:0008050", terminology: "local_terms", value: "Abnormality of the palpebral fissures", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:12" },
      {type:"ontology", code: "HP:0000286", terminology: "local_terms", value: "Epicanthus", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:13" },
      {type:"ontology", code: "HP:0000506", terminology: "local_terms", value: "Telecanthus", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:14" },
      {type:"ontology", code: "HP:0010938", terminology: "local_terms", value: "Abnormality of the external nose", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:15" },
      {type:"ontology", code: "HP:0011800", terminology: "local_terms", value: "Midface retrusion (Flat midface)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:16" },
      {type:"ontology", code: "HP:0000154", terminology: "local_terms", value: "Wide mouth", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:17" },
      {type:"ontology", code: "HP:0012471", terminology: "local_terms", value: "Thick vermilion border", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:18" },
      {type:"ontology", code: "HP:0000233", terminology: "local_terms", value: "Thin vermilion border", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:19" },
      {type:"ontology", code: "HP:0000319", terminology: "local_terms", value: "Smooth philtrum", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:20" },
      {type:"ontology", code: "HP:0000322", terminology: "local_terms", value: "Short philtrum", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:21" },
      {type:"ontology", code: "HP:0000343", terminology: "local_terms", value: "Long philtrum", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:22" },
      {type:"text", terminology: "local_terms", value: "Comment", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/facial_morphology:23/comment" },
    ]
  },
  eyes: {
    title: 'Eyes',
    description: "",
    slug: 'eyes',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:{0}",
    questions: [
      {type:"ontology", code: "HP:0000478", terminology: "local_terms", value: "Abnormality of the eye", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:0" },
      {type:"ontology", code: "HP:0012372", terminology: "local_terms", value: "Abnormal eye morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:1" },
      {type:"ontology", code: "HP:0000525", terminology: "local_terms", value: "Abnormal iris morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:2" },
      {type:"ontology", code: "HP:0000505", terminology: "local_terms", value: "Visual impairment", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:3" },
      {type:"ontology", code: "HP:0030669", terminology: "local_terms", value: "Abnormal ocular adnexa morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:4" },
      {type:"ontology", code: "HP:0000479", terminology: "local_terms", value: "Abnormality of the retina", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:5" },
      {type:"ontology", code: "HP:0000501", terminology: "local_terms", value: "Glaucoma", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:6" },
      {type:"ontology", code: "HP:0000486", terminology: "local_terms", value: "Strabismus", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:7" },
      {type:"ontology", code: "HP:0000518", terminology: "local_terms", value: "Cataract", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:8" },
      {type:"ontology", code: "HP:0000526", terminology: "local_terms", value: "Aniridia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:9" },
      {type:"ontology", code: "HP:0000589", terminology: "local_terms", value: "Coloboma", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:10" },
      {type:"ontology", code: "HP:0000568", terminology: "local_terms", value: "Microphthalmia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:11" },
      {type:"ontology", code: "HP:0000639", terminology: "local_terms", value: "Nystagmus", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:12" },
      {type:"ontology", code: "HP:0000508", terminology: "local_terms", value: "Ptosis", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:13" },
      {type:"ontology", code: "HP:0000613", terminology: "local_terms", value: "Photophobia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:14" },
      {type:"ontology", code: "HP:0000587", terminology: "local_terms", value: "Abnormality of the optic nerve", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/eyes:15" },
    ]
  },
  mouth_teeth: {
    title: 'Mouth/teeth',
    description: "",
    slug: 'mouthteeth',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:{0}",
    questions: [
      {type:"ontology", code: "HP:0000163", terminology: "local_terms", value: "Abnormal oral cavity morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:0" },
      {type:"ontology", code: "HP:0000175", terminology: "local_terms", value: "Cleft palate", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:1" },
      {type:"ontology", code: "HP:0410030", terminology: "local_terms", value: "Cleft lip", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:2" },
      {type:"ontology", code: "HP:0000202", terminology: "local_terms", value: "Cleft/palate", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:3" },
      {type:"ontology", code: "HP:0000168", terminology: "local_terms", value: "Abnormality of the gingiva", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:4" },
      {type:"ontology", code: "HP:0000218", terminology: "local_terms", value: "High palate", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:5" },
      {type:"ontology", code: "HP:0000164", terminology: "local_terms", value: "Abnormality of the dentition", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:6" },
      {type:"ontology", code: "HP:0006483", terminology: "local_terms", value: "Abnormal number of teeth", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:7" },
      {type:"ontology", code: "HP:0006482", terminology: "local_terms", value: "Abnormal dental morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:8" },
      {type:"ontology", code: "HP:0000682", terminology: "local_terms", value: "Abnormal dental enamel morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:9" },
      {type:"ontology", code: "HP:0000157", terminology: "local_terms", value: "Abnormality of the tongue", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/mouth_teeth:10" },
    ]
  },
  nose: {
    title: 'Nose',
    description: "",
    slug: 'nose',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/nose:{0}",
    questions: [
      {type:"ontology", code: "HP:0005105", terminology: "local_terms", value: "Abnormal nasal morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/nose:0" },
    ]
  },
  ears: {
    title: 'Ears',
    description: "",
    slug: 'ears',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/ears:{0}",
    questions: [
      {type:"ontology", code: "HP:0000407", terminology: "local_terms", value: "Sensorineural hearing impairment", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/ears:0" },
      {type:"ontology", code: "HP:0000405", terminology: "local_terms", value: "Conductive hearing impairment", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/ears:1" },
      {type:"ontology", code: "HP:0000377", terminology: "local_terms", value: "Abnormality of the pinna", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/ears:2" },
      {type:"ontology", code: "HP:0000369", terminology: "local_terms", value: "Low-set ears", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/ears:3" },
      {type:"ontology", code: "HP:0000400", terminology: "local_terms", value: "Macrotia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/ears:4" },
      {type:"ontology", code: "HP:0008551", terminology: "local_terms", value: "Microtia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/ears:5" },
    ]
  },
  central_nervous_system_neuromuscular_system_cognition: {
    title: 'Central nervous system + neuromuscular system + cognition',
    description: "",
    slug: 'central-nervous-system-neuromuscular-system-cognition',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:{0}",
    questions: [
      {type:"ontology", code: "HP:0000707", terminology: "local_terms", value: "Abnormality of the nervous system", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:0" },
      {type:"ontology", code: "HP:0012443", terminology: "local_terms", value: "Abnormality of brain morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:1" },
      {type:"ontology", code: "HP:0002194", terminology: "local_terms", value: "Delayed gross motor development", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:2" },
      {type:"ontology", code: "HP:0001263", terminology: "local_terms", value: "Global developmental delay", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:3" },
      {type:"ontology", code: "HP:0001256", terminology: "local_terms", value: "Intellectual disability, mild", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:4" },
      {type:"ontology", code: "HP:0002342", terminology: "local_terms", value: "Intellectual disability, moderate", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:5" },
      {type:"ontology", code: "HP:0002187", terminology: "local_terms", value: "Intellectual disability, profound", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:6" },
      {type:"ontology", code: "HP:0010864", terminology: "local_terms", value: "Intellectual disability, severe", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:7" },
      {type:"ontology", code: "HP:0006887", terminology: "local_terms", value: "Intellectual disability, progressive", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/central_nervous_system_neuromuscular_system_cognition:8" },    
    ]
  },
  behavioral_abnormality: {
    title: 'Behavioral abnormality',
    description: "",
    slug: 'behavioral-abnormality',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/behavioral_abnormality:{0}",
    questions: [
      {type:"ontology", code: "HP:0000729", terminology: "local_terms", value: "Autistic behavior", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/behavioral_abnormality:0"},
      {type:"ontology", code: "HP:0007018", terminology: "local_terms", value: "Attention deficit hyperactivity disorder", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/behavioral_abnormality:1"},
      {type:"ontology", code: "HP:0100716", terminology: "local_terms", value: "Self-injurious behavior", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/behavioral_abnormality:2"},
      {type:"ontology", code: "HP:0000718", terminology: "local_terms", value: "Aggressive behavior", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/behavioral_abnormality:3"},
    ]
  },
  speech: {
    title: 'Speech',
    description: "",
    slug: 'speech',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/speech:{0}",
    questions: [
      {type:"ontology", code: "HP:0000750", terminology: "local_terms", value: "Delayed speech and language development", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/speech:0"},
      {type:"ontology", code: "HP:0002465", terminology: "local_terms", value: "Poor speech", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/speech:1"},
      {type:"ontology", code: "HP:0001344", terminology: "local_terms", value: "Absent speech", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/speech:2"},
    ]
  },
  seizures: {
    title: 'Seizures',
    description: "",
    slug: 'seizures',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/seizures:{0}",
    questions: [
      {type:"ontology", code: "HP:0001250", terminology: "local_terms", value: "Seizure", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/seizures:0"},
      {type:"ontology", code: "HP:0032807", terminology: "local_terms", value: "Neonatal seizure", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/seizures:1"},
      {type:"ontology", code: "HP:0002349", terminology: "local_terms", value: "Focal aware seizure", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/seizures:2"},
      {type:"ontology", code: "HP:0002197", terminology: "local_terms", value: "Generalized onset seizure", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/seizures:3"},
      {type:"ontology", code: "HP:0002353", terminology: "local_terms", value: "EEG abnormality", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/seizures:4"},
    ]
  },
  muscles: {
    title: 'Muscles',
    description: "",
    slug: 'muscles',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:{0}",
    questions: [
      {type:"ontology", code: "HP:0003011", terminology: "local_terms", value: "Abnormality of the musculature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:0"},
      {type:"ontology", code: "HP:0001324", terminology: "local_terms", value: "Muscle weakness", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:1"},
      {type:"ontology", code: "HP:0003808", terminology: "local_terms", value: "Abnormal muscle tone", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:2"},
      {type:"ontology", code: "HP:0001276", terminology: "local_terms", value: "Hypertonia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:3"},
      {type:"ontology", code: "HP:0001252", terminology: "local_terms", value: "Hypotonia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:4"},
      {type:"ontology", code: "HP:0001371", terminology: "local_terms", value: "Flexion contracture", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:5"},
      {type:"ontology", code: "HP:0002804", terminology: "local_terms", value: "Arthrogryposis multiplex congenita", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:6"},
      {type:"ontology", code: "HP:0003560", terminology: "local_terms", value: "Muscular dystrophy", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:7"},
      {type:"ontology", code: "HP:0003457", terminology: "local_terms", value: "EMG abnormality", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:8"},
      {type:"ontology", code: "HP:0011804", terminology: "local_terms", value: "Abnormal muscle physiology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/muscles:9"},
    ]
  },
  skeleton: {
    title: 'Skeleton',
    description: "",
    slug: 'skeleton',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skeleton:{0}",
    questions: [
      {type:"ontology", code: "HP:0002652", terminology: "local_terms", value: "Skeletal dysplasia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skeleton:0"},
    ]
  },
  head_and_neck: {
    title: 'head and neck',
    description: "",
    slug: 'head-and-neck',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/head_and_neck:{0}",
    questions: [
      {type:"ontology", code: "HP:0000929", terminology: "local_terms", value: "Abnormal skull", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/head_and_neck:0"},
      {type:"ontology", code: "HP:0001363", terminology: "local_terms", value: "Craniosynostosis", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/head_and_neck:1"},
      {type:"ontology", code: "HP:0011329", terminology: "local_terms", value: "Abnormality of cranial sutures", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/head_and_neck:2"},
      {type:"ontology", code: "HP:0000470", terminology: "local_terms", value: "Short neck", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/head_and_neck:3"},
      {type:"ontology", code: "HP:0000475", terminology: "local_terms", value: "Broad neck", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/head_and_neck:4"},
    ]
  },
  trunk: {
    title: 'trunk',
    description: "",
    slug: 'trunk',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:{0}",
    questions: [
      {type:"ontology", code: "HP:0000765", terminology: "local_terms", value: "Abnormal thorax morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:0"},
      {type:"ontology", code: "HP:0000925", terminology: "local_terms", value: "Abnormality of the vertebral column", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:1"},
      {type:"ontology", code: "HP:0002650", terminology: "local_terms", value: "Scoliosis", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:2"},
      {type:"ontology", code: "HP:0003272", terminology: "local_terms", value: "Abnormal hip bone morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:3"},
      {type:"ontology", code: "HP:0002827", terminology: "local_terms", value: "Hip dislocation", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:4"},
      {type:"ontology", code: "HP:0000782", terminology: "local_terms", value: "Abnormal scapula morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:5"},
      {type:"ontology", code: "HP:0003043", terminology: "local_terms", value: "Abnormal shoulder morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:6"},
      {type:"ontology", code: "HP:0000766", terminology: "local_terms", value: "Abnormal sternum morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/trunk:7"},
    ]
  },
  upper_limbs: {
    title: 'Upper Limbs',
    description: "",
    slug: 'upper-limbs',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/upper_limbs:{0}",
    questions: [
      {type:"ontology", code: "HP:0002817", terminology: "local_terms", value: "Abnormality of the upper limb", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/upper_limbs:0"},
      {type:"ontology", code: "HP:0002818", terminology: "local_terms", value: "Abnormality of the radius", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/upper_limbs:1"},
      {type:"ontology", code: "HP:0002997", terminology: "local_terms", value: "Abnormality of the ulna", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/upper_limbs:2"},
      {type:"ontology", code: "HP:0009811", terminology: "local_terms", value: "Abnormality of the elbow", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/upper_limbs:3"},
    ]
  },
  hands_fingers_and_thumbs: {
    title: 'Hands, Fingers, and Thumbs',
    description: "",
    slug: 'hands-fingers-and-thumbs',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:{0}",
    questions: [
      {type:"ontology", code: "HP:0000954", terminology: "local_terms", value: "Single transverse palmar crease", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:0"},
      {type:"ontology", code: "HP:0001177", terminology: "local_terms", value: "Preaxial hand polydactyly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:1"},
      {type:"ontology", code: "HP:0100259", terminology: "local_terms", value: "Postaxial hand polydactyly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:2"},
      {type:"ontology", code: "HP:0001156", terminology: "local_terms", value: "Brachydactyly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:3"},
      {type:"ontology", code: "HP:0100807", terminology: "local_terms", value: "Long fingers (Arachnodactyly)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:4"},
      {type:"ontology", code: "HP:0100257", terminology: "local_terms", value: "Cleft hand (Ectrodactyly)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:5"},
      {type:"ontology", code: "HP:0006265", terminology: "local_terms", value: "Aplasia/Hypoplasia of fingers", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:6"},
      {type:"ontology", code: "HP:0009601", terminology: "local_terms", value: "Aplasia/Hypoplasia of thumb", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:7"},
      {type:"ontology", code: "HP:0011304", terminology: "local_terms", value: "Broad thumb", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:8"},
      {type:"ontology", code: "HP:0001159", terminology: "local_terms", value: "Syndactyly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:9"},
      {type:"ontology", code: "HP:0004099", terminology: "local_terms", value: "Macrodactyly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:10"},
      {type:"ontology", code: "HP:0010557", terminology: "local_terms", value: "Overlapping fingers", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:11"},
      {type:"ontology", code: "HP:0001212", terminology: "local_terms", value: "Prominent fingertip pads", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hands_fingers_and_thumbs:12"}
    ]
  },
  lower_limb: {
    title: 'Lower Limb',
    description: "",
    slug: 'lower-limbs',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/lower_limb:{0}",
    questions: [
      {type:"ontology", code: "HP:0002814", terminology: "local_terms", value: "Abnormality of the lower limb", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/lower_limb:0"},
      {type:"ontology", code: "HP:0002992", terminology: "local_terms", value: "Abnormality of tibia morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/lower_limb:1"},
      {type:"ontology", code: "HP:0002991", terminology: "local_terms", value: "Abnormality of fibula morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/lower_limb:2"},
      {type:"ontology", code: "HP:0003045", terminology: "local_terms", value: "Abnormality of the patella morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/lower_limb:3"}
    ]
  },
  feet_toes: {
    title: 'Feet & Toes',
    description: "",
    slug: 'feettoes',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:{0}",
    questions: [
      {type:"ontology", code: "HP:0001830", terminology: "local_terms", value: "Postaxial foot polydactyly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:0"},
      {type:"ontology", code: "HP:0001841", terminology: "local_terms", value: "Preaxial foot polydactyly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:1"},
      {type:"ontology", code: "HP:0001831", terminology: "local_terms", value: "Brachydactyly of the foot", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:2"},
      {type:"ontology", code: "HP:0010511", terminology: "local_terms", value: "Long toe", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:3"},
      {type:"ontology", code: "HP:0010173", terminology: "local_terms", value: "Aplasia/Hypoplasia of phalanges of toes", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:4"},
      {type:"ontology", code: "HP:0008110", terminology: "local_terms", value: "Equinovarus deformity", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:5"},
      {type:"ontology", code: "HP:0001159", terminology: "local_terms", value: "Syndactyly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:6"},
      {type:"ontology", code: "HP:0010055", terminology: "local_terms", value: "Broad hallux", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:7"},
      {type:"ontology", code: "HP:0010097", terminology: "local_terms", value: "Bifid distal phalanx of hallux", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:8"},
      {type:"ontology", code: "HP:0001845", terminology: "local_terms", value: "Overlapping toes", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/feet_toes:9"}
    ]
  },
  airways: {
    title: 'Airways',
    description: "",
    slug: 'airways',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/airways:{0}",
    questions: [
      {type:"ontology", code: "HP:0010640", terminology: "local_terms", value: "Abnormality of the nasal cavity", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/airways:0"},
      {type:"ontology", code: "HP:0002778", terminology: "local_terms", value: "Abnormal tracheal morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/airways:1"},
      {type:"ontology", code: "HP:0002088", terminology: "local_terms", value: "Abnormal lung morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/airways:2"},
      {type:"ontology", code: "HP:0025423", terminology: "local_terms", value: "Abnormal larynx morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/airways:3"},
      {type:"ontology", code: "HP:0006536", terminology: "local_terms", value: "Airway obstruction", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/airways:4"},
      {type:"ontology", code: "HP:0005957", terminology: "local_terms", value: "Breathing dysregulation", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/airways:5"},
      {type:"ontology", code: "HP:0002094", terminology: "local_terms", value: "Dyspnea", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/airways:6"},
    ]
  },
  heart_great_vessels: {
    title: 'Heart and Great Vessels',
    description: "",
    slug: 'heartgreat-vessels',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:{0}",
    questions: [
      {type:"ontology", code: "HP:0001627", terminology: "local_terms", value: "Abnormal heart morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:0"},
      {type:"ontology", code: "HP:0001671", terminology: "local_terms", value: "Abnormal cardiac septum morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:1"},
      {type:"ontology", code: "HP:0001631", terminology: "local_terms", value: "Atrial septal defect", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:2"},
      {type:"ontology", code: "HP:0001629", terminology: "local_terms", value: "Ventricular septal defect", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:3"},
      {type:"ontology", code: "HP:0006695", terminology: "local_terms", value: "Atrioventricular canal defect", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:4"},
      {type:"ontology", code: "HP:0001636", terminology: "local_terms", value: "Tetralogy of Fallot", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:5"},
      {type:"ontology", code: "HP:0011675", terminology: "local_terms", value: "Arrhythmia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:6"},
      {type:"ontology", code: "HP:0001638", terminology: "local_terms", value: "Cardiomyopathy", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:7"},
      {type:"ontology", code: "HP:0000822", terminology: "local_terms", value: "Hypertension", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/heart_great_vessels:8"}
    ]
  },
  kidney_and_urinary_tract: {
    title: 'Kidneys and Urinary Tract',
    description: "",
    slug: 'kidneys-and-urinary-tract',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/kidney_and_urinary_tract:{0}",
    questions: [
      {type:"ontology", code: "HP:0000077", terminology: "local_terms", value: "Abnormality of the kidneys", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/kidney_and_urinary_tract:0"},
      {type:"ontology", code: "HP:0000104", terminology: "local_terms", value: "Renal agenesis", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/kidney_and_urinary_tract:1"},
      {type:"ontology", code: "HP:0000079", terminology: "local_terms", value: "Abnormality of the urinary system", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/kidney_and_urinary_tract:2"},
      {type:"ontology", code: "HP:0000107", terminology: "local_terms", value: "Renal cysts", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/kidney_and_urinary_tract:3"},
      {type:"ontology", code: "HP:0000105", terminology: "local_terms", value: "Enlarged kidney", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/kidney_and_urinary_tract:4"},
      {type:"ontology", code: "HP:0012211", terminology: "local_terms", value: "Abnormal kidney function", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/kidney_and_urinary_tract:5"}
    ]
  },
  genitalia: {
    title: 'Genitalia',
    description: "",
    slug: 'genitalia',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/genitalia:{0}",
    questions: [
      {type:"ontology", code: "HP:0000811", terminology: "local_terms", value: "Abnormal external genitalia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/genitalia:0"},
      {type:"ontology", code: "HP:0000812", terminology: "local_terms", value: "Abnormal internal genitalia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/genitalia:1"},
      {type:"ontology", code: "HP:0000028", terminology: "local_terms", value: "Cryptorchidism", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/genitalia:2"},
      {type:"ontology", code: "HP:0000047", terminology: "local_terms", value: "Hypospadias", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/genitalia:3"},
      {type:"ontology", code: "HP:0000062", terminology: "local_terms", value: "Ambiguous genitalia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/genitalia:4"},
      {type:"ontology", code: "HP:0000078", terminology: "local_terms", value: "Abnormality of genital system", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/genitalia:5"}
    ]
  },
  liver_and_spleen: {
    title: 'Liver and Spleen',
    description: "",
    slug: 'liver-and-spleen',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/liver_and_spleen:{0}",
    questions: [
      {type:"ontology", code: "HP:0001392", terminology: "local_terms", value: "Abnormality of the liver", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/liver_and_spleen:0"},
      {type:"ontology", code: "HP:0001410", terminology: "local_terms", value: "Decreased liver function", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/liver_and_spleen:1"},
      {type:"ontology", code: "HP:0002240", terminology: "local_terms", value: "Hepatomegaly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/liver_and_spleen:2"},
      {type:"ontology", code: "HP:0001407", terminology: "local_terms", value: "Hepatic cysts", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/liver_and_spleen:3"},
      {type:"ontology", code: "HP:0001743", terminology: "local_terms", value: "Abnormality of the spleen", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/liver_and_spleen:4"},
      {type:"ontology", code: "HP:0001744", terminology: "local_terms", value: "Splenomegaly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/liver_and_spleen:5"}
    ]
  },
  skin: {
    title: 'Skin',
    description: "",
    slug: 'skin',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:{0}",
    questions: [
      {type:"ontology", code: "HP:0000951", terminology: "local_terms", value: "Abnormality of the skin", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:0"},
      {type:"ontology", code: "HP:0001000", terminology: "local_terms", value: "Abnormality of skin pigmentation", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:1"},
      {type:"ontology", code: "HP:0007565", terminology: "local_terms", value: "Multiple cafe-au-lait spots", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:2"},
      {type:"ontology", code: "HP:0001480", terminology: "local_terms", value: "Freckling (axillary or inguinal)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:3"},
      {type:"ontology", code: "HP:0100669", terminology: "local_terms", value: "Abnormal pigmentation of the oral mucosa", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:4"},
      {type:"ontology", code: "HP:0031447", terminology: "local_terms", value: "Penile freckling", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:5"},
      {type:"ontology", code: "HP:0008066", terminology: "local_terms", value: "Abnormal blistering of the skin", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:6"},
      {type:"ontology", code: "HP:0011276", terminology: "local_terms", value: "Vascular skin abnormality", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:7"},
      {type:"ontology", code: "HP:0002745", terminology: "local_terms", value: "Oral leucoplakia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:8"},
      {type:"ontology", code: "HP:0002558", terminology: "local_terms", value: "Supernumerary nipple", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:9"},
      {type:"ontology", code: "HP:0008069", terminology: "local_terms", value: "Neoplasm of the skin", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:10"},
      {type:"ontology", code: "HP:0000958", terminology: "local_terms", value: "Dry skin", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:11"},
      {type:"ontology", code: "HP:0000964", terminology: "local_terms", value: "Eczema", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/skin:12"}
    ]
  },
  hair_nails: {
    title: 'Hair and Nails',
    description: "",
    slug: 'hairnails',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hair_nails:{0}",
    questions: [
      {type:"ontology", code: "HP:0001595", terminology: "local_terms", value: "Abnormal hair morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hair_nails:0"},
      {type:"ontology", code: "HP:0002216", terminology: "local_terms", value: "Premature greying of hair", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hair_nails:1"},
      {type:"ontology", code: "HP:0000664", terminology: "local_terms", value: "Synophrys", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hair_nails:2"},
      {type:"ontology", code: "HP:0000534", terminology: "local_terms", value: "Abnormal eyebrow morphology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hair_nails:3"},
      {type:"ontology", code: "HP:0001597", terminology: "local_terms", value: "Abnormality of the nails", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/hair_nails:4"}
    ]
  },
  endocrine_metabolic: {
    title: 'Endocrine and Metabolic',
    description: "",
    slug: 'endocrinemetabolic',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:{0}",
    questions: [
      {type:"ontology", code: "HP:0000819", terminology: "local_terms", value: "Diabetes mellitus", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:0"},
      {type:"ontology", code: "HP:0001988", terminology: "local_terms", value: "Recurrent hypoglycemia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:1"},
      {type:"ontology", code: "HP:0004902", terminology: "local_terms", value: "Congenital lactic acidosis", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:2"},
      {type:"ontology", code: "HP:0000821", terminology: "local_terms", value: "Hypothyroidism", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:3"},
      {type:"ontology", code: "HP:0000828", terminology: "local_terms", value: "Abnormality of the parathyroid gland", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:4"},
      {type:"ontology", code: "HP:0012093", terminology: "local_terms", value: "Abnormality of endocrine pancreas physiology", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:5"},
      {type:"ontology", code: "HP:0000864", terminology: "local_terms", value: "Abnormality of the hypothalamus-pituitary axis", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:6"},
      {type:"ontology", code: "HP:0000834", terminology: "local_terms", value: "Abnormality of the adrenal glands", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:7"},
      {type:"ontology", code: "HP:0000826", terminology: "local_terms", value: "Precocious puberty", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:8"},
      {type:"ontology", code: "HP:0000823", terminology: "local_terms", value: "Delayed puberty", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/endocrine_metabolic:9"}
    ]
  },
  connective_tissue: {
    title: 'Connective Tissue',
    description: "",
    slug: 'connective-tissue',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:{0}",
    questions: [
      {type:"ontology", code: "HP:0001382", terminology: "local_terms", value: "Joint hypermobility", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:0"},
      {type:"ontology", code: "HP:0001763", terminology: "local_terms", value: "Pes planus", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:1"},
      {type:"ontology", code: "HP:0001373", terminology: "local_terms", value: "Joint dislocation", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:2"},
      {type:"ontology", code: "HP:0000978", terminology: "local_terms", value: "Bruising susceptibility", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:3"},
      {type:"ontology", code: "HP:0001030", terminology: "local_terms", value: "Fragile skin", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:4"},
      {type:"ontology", code: "HP:0001065", terminology: "local_terms", value: "Striae distensae", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:5"},
      {type:"ontology", code: "HP:0002617", terminology: "local_terms", value: "Aneurysm (Vascular dilatation)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:6"},
      {type:"ontology", code: "HP:0100790", terminology: "local_terms", value: "Hernia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:7"},
      {type:"ontology", code: "HP:0008067", terminology: "local_terms", value: "Abnormally lax or hyperextensible skin", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:8"},
      {type:"ontology", code: "HP:0000973", terminology: "local_terms", value: "Cutis laxa", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/connective_tissue:9"}
    ]
  },
  immune_system_blood: {
    title: 'Immune System and Blood',
    description: "",
    slug: 'immune-systemblood',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/immune_system_blood:{0}",
    questions: [
      {type:"ontology", code: "HP:0004313", terminology: "local_terms", value: "Decreased circulating antibody level", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/immune_system_blood:0"},
      {type:"ontology", code: "HP:0002960", terminology: "local_terms", value: "Autoimmunity", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/immune_system_blood:1"},
      {type:"ontology", code: "HP:0012647", terminology: "local_terms", value: "Abnormal inflammatory response", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/immune_system_blood:2"},
      {type:"ontology", code: "HP:0001903", terminology: "local_terms", value: "Anemia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/immune_system_blood:3"},
      {type:"ontology", code: "HP:0001882", terminology: "local_terms", value: "Leukopenia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/immune_system_blood:4"},
      {type:"ontology", code: "HP:0001873", terminology: "local_terms", value: "Thrombocytopenia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/immune_system_blood:5"},
      {type:"ontology", code: "HP:0001929", terminology: "local_terms", value: "Abnormality of coagulation", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/immune_system_blood:6"}
    ]
  },
  gastrointestinal: {
    title: 'Gastrointestinal',
    description: "",
    slug: 'gastrointestinal',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:{0}",
    questions: [
      {type:"ontology", code: "HP:0002608", terminology: "local_terms", value: "Celiac disease", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:0"},
      {type:"ontology", code: "HP:0002013", terminology: "local_terms", value: "Vomiting", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:1"},
      {type:"ontology", code: "HP:0002020", terminology: "local_terms", value: "Gastroesophageal reflux", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:2"},
      {type:"ontology", code: "HP:0002014", terminology: "local_terms", value: "Diarrhea", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:3"},
      {type:"ontology", code: "HP:0002019", terminology: "local_terms", value: "Constipation", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:4"},
      {type:"ontology", code: "HP:0011968", terminology: "local_terms", value: "Feeding difficulties", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:5"},
      {type:"ontology", code: "HP:0002015", terminology: "local_terms", value: "Dysphagia", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:6"},
      {type:"ontology", code: "HP:0012718", terminology: "local_terms", value: "Morphological abnormality of the gastrointestinal tract", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/gastrointestinal:7"}
    ]
  },
  cancer_malignancy_benign_tumor: {
    title: 'Cancer, Malignancy, Benign Tumor',
    description: "",
    slug: 'cancermalignancy-benign-tumor',
    path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/cancer_malignancy_benign_tumor:{0}",
    questions: [
      {type:"ontology", code: "HP:0002664", terminology: "local_terms", value: "Neoplasm (Benign or malignant)", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/cancer_malignancy_benign_tumor:0"},
      {type:"ontology", code: "HP:0004377", terminology: "local_terms", value: "Hematological neoplasm", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/cancer_malignancy_benign_tumor:1"}
    ]
  },
  summary:{
    title: "summary",
    description: "",
    slug:"summary",
    path:"",
    questions: []
  },
}

const _patientForm : MBFormData ={
  overview:{
    title: "Overview",
    description: "",
    slug:"overview",
    path:"",
    questions: []
  },
  this_is_me:{
    title: "This is me",
    description: "",
    slug:"this-is-me",
    path:"",
    questions: []
  },
  summary:{
    title: "summary",
    description: "",
    slug:"summary",
    path:"",
    questions: []
  },
}

const ONTOLOGY = {
  options: [
    { code: "at0023", value: "Yes", terminology: "local" },
    { code: "at0024", value: "No", terminology: "local" },
    { code: "at0027", value: "Unknown", terminology: "local" }
  ],
  default: { code: "at0027", value: "Unknown", terminology: "local" }
}

export { _practitionerForm, _patientForm, ONTOLOGY }
  

