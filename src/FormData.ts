import {MBFormData} from "@/types"

const FormData : MBFormData = {
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
    path: "ip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:{0}",
    questions: [
      {type:"ontology", code: "HP:0001507", terminology: "local_terms", value: "Growth abnormality at birth", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:0" },
      {type:"ontology", code: "HP:0000256", terminology: "local_terms", value: "Macrocephaly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:1" },
      {type:"ontology", code: "HP:0000252", terminology: "local_terms", value: "Microcephaly", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:2" },
      {type:"ontology", code: "HP:0000098", terminology: "local_terms", value: "Tall stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:3" },
      {type:"ontology", code: "HP:0001519", terminology: "local_terms", value: "Disproportionate tall stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:4" },
      {type:"ontology", code: "HP:0003498", terminology: "local_terms", value: "Disproportionate short stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:5" },
      {type:"ontology", code: "HP:0004322", terminology: "local_terms", value: "Short stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:6" },
      {type:"ontology", code: "HP:0008873", terminology: "local_terms", value: "Disproportionate short-limb short stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:7" },
      {type:"ontology", code: "HP:0003521", terminology: "local_terms", value: "Disproportionate short-trunk short stature", path: "tip2toe.v0/symptom_sign_screening_questionnaire/any_event:0/post-natal_growth:8" }
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
  



}

export default FormData
  

