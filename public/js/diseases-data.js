// Comprehensive disease database with descriptions, symptoms, and treatments
const diseasesDatabase = {
  'Flu': {
    description: 'The flu (influenza) is a contagious respiratory illness caused by influenza viruses. It affects the nose, throat, and lungs, spreading through droplets when infected people cough or sneeze.',
    symptoms: ['fever', 'cough', 'fatigue', 'body pain', 'headache', 'sore throat'],
    treatments: ['Rest and stay hydrated', 'Antiviral medications (Oseltamivir/Tamiflu)', 'Over-the-counter painkillers for fever and body aches', 'Warm fluids and throat lozenges', 'Annual flu vaccination for prevention']
  },
  'Common Cold': {
    description: 'The common cold is a mild viral infection of the upper respiratory tract caused by various viruses. It is self-limiting and typically resolves within 7-10 days.',
    symptoms: ['runny nose', 'sneezing', 'sore throat', 'cough', 'headache', 'fatigue'],
    treatments: ['Rest and hydration', 'Warm liquids and honey for sore throat', 'Saline nasal drops or sprays', 'Vitamin C supplements', 'Over-the-counter decongestants']
  },
  'COVID-19': {
    description: 'COVID-19 is an infectious disease caused by the SARS-CoV-2 virus. It can range from asymptomatic to severe, with older adults and those with underlying conditions at higher risk.',
    symptoms: ['fever', 'dry cough', 'loss of smell', 'loss of taste', 'fatigue', 'shortness of breath'],
    treatments: ['Isolation and rest', 'Supportive care with fluids and rest', 'Oxygen therapy for severe cases', 'COVID-19 vaccines and boosters', 'Consult healthcare provider for antiviral options']
  },
  'Malaria': {
    description: 'Malaria is a life-threatening disease caused by Plasmodium parasites transmitted through mosquito bites. Common in tropical regions, it requires immediate medical attention.',
    symptoms: ['fever', 'chills', 'sweating', 'headache', 'body pain', 'fatigue'],
    treatments: ['Antimalarial drugs (Artemisinin-based combination therapy)', 'Prompt medical diagnosis through blood tests', 'Supportive care with fluids', 'Mosquito preventive measures', 'Follow-up treatment as prescribed']
  },
  'Dengue': {
    description: 'Dengue is a viral infection transmitted by Aedes mosquitoes. It causes severe flu-like symptoms and can rarely progress to dengue hemorrhagic fever.',
    symptoms: ['high fever', 'joint pain', 'rash', 'headache', 'body pain', 'eye pain'],
    treatments: ['No specific cure; supportive care is primary', 'Pain relief with acetaminophen (avoid NSAIDs)', 'Adequate hydration', 'Rest during recovery phase', 'Monitor for dengue hemorrhagic fever symptoms']
  },
  'Typhoid': {
    description: 'Typhoid fever is caused by Salmonella typhi bacteria, usually contracted through contaminated food or water. It is preventable with vaccination.',
    symptoms: ['fever', 'abdominal pain', 'weakness', 'headache', 'body pain', 'loss of appetite'],
    treatments: ['Antibiotic therapy (Cephalosporins or Fluoroquinolones)', 'Hydration and electrolyte replacement', 'Rest and supportive care', 'Typhoid vaccination for prevention', 'Surgical intervention if complications develop']
  },
  'Cholera': {
    description: 'Cholera is an acute intestinal infection caused by Vibrio cholerae bacteria. Severe dehydration is the main concern and can be life-threatening without treatment.',
    symptoms: ['diarrhea', 'vomiting', 'dehydration', 'abdominal pain', 'weakness', 'rapid heartbeat'],
    treatments: ['Oral rehydration solution (ORS) - primary treatment', 'Intravenous fluids for severe dehydration', 'Antibiotics to reduce duration', 'Electrolyte replacement', 'Cholera vaccination and sanitation measures']
  },
  'Tuberculosis': {
    description: 'Tuberculosis (TB) is an infectious disease caused by Mycobacterium tuberculosis. It primarily affects the lungs but can affect other organs. Treatment requires several months of antibiotics.',
    symptoms: ['cough', 'weight loss', 'night sweats', 'fatigue', 'chest pain', 'fever'],
    treatments: ['Multi-drug TB therapy (6-month course minimum)', 'First-line drugs: Isoniazid, Rifampicin, Pyrazinamide', 'Directly observed therapy (DOT)', 'Nutritional support', 'TB preventive therapy for contacts']
  },
  'Asthma': {
    description: 'Asthma is a chronic inflammatory airway disease characterized by reversible airflow obstruction. Triggers include allergens, exercise, and infections.',
    symptoms: ['shortness of breath', 'chest tightness', 'cough', 'wheezing', 'difficulty sleeping'],
    treatments: ['Inhaled corticosteroids (controller medication)', 'Quick-relief inhalers (bronchodilators)', 'Identify and avoid triggers', 'Asthma action plan', 'Regular monitoring and peak flow checks']
  },
  'Bronchitis': {
    description: 'Bronchitis is inflammation of the airways in the lungs. Acute bronchitis usually follows upper respiratory infections and is typically viral.',
    symptoms: ['cough', 'fatigue', 'chest discomfort', 'shortness of breath', 'sore throat'],
    treatments: ['Rest and hydration', 'Cough suppressants or expectorants', 'Humidifier for moist air', 'Avoid smoke and irritants', 'Antibiotics only if bacterial infection confirmed']
  },
  'Pneumonia': {
    description: 'Pneumonia is an infection causing inflammation in lung alveoli, leading to fluid accumulation. It can be bacterial, viral, or fungal and requires medical evaluation.',
    symptoms: ['fever', 'cough', 'chest pain', 'shortness of breath', 'fatigue'],
    treatments: ['Antibiotics for bacterial pneumonia', 'Supportive care with rest and fluids', 'Oxygen therapy if needed', 'Chest physiotherapy', 'Pneumonia vaccines for prevention']
  },
  'Sinusitis': {
    description: 'Sinusitis is inflammation of the sinus cavities, usually due to infection or allergies. It causes facial pressure and nasal symptoms.',
    symptoms: ['headache', 'blocked nose', 'facial pain', 'runny nose', 'cough'],
    treatments: ['Nasal saline rinses', 'Decongestants and antihistamines', 'Antibiotics if bacterial (confirmed by signs)', 'Nasal corticosteroid sprays', 'Humidification and hydration']
  },
  'Migraine': {
    description: 'Migraine is a neurological disorder characterized by intense, debilitating headaches often accompanied by other symptoms. Triggers vary among individuals.',
    symptoms: ['severe headache', 'nausea', 'sensitivity to light', 'sensitivity to sound', 'vomiting'],
    treatments: ['Triptan medications (sumatriptan, rizatriptan)', 'NSAIDs for pain relief', 'Preventive medications (propranolol, topiramate)', 'Rest in dark, quiet room', 'Identify and avoid personal triggers']
  },
  'Hypertension': {
    description: 'Hypertension (high blood pressure) is a chronic condition where blood pressure is persistently elevated, increasing heart disease and stroke risk.',
    symptoms: ['headache', 'dizziness', 'chest pain', 'shortness of breath', 'fatigue'],
    treatments: ['ACE inhibitors or ARBs', 'Beta-blockers', 'Diuretics', 'Calcium channel blockers', 'Lifestyle changes: low sodium diet, exercise, stress reduction']
  },
  'Diabetes Type 1': {
    description: 'Type 1 diabetes is an autoimmune condition where the pancreas cannot produce insulin. It requires lifelong insulin therapy and careful glucose monitoring.',
    symptoms: ['increased thirst', 'frequent urination', 'weight loss', 'fatigue', 'blurred vision'],
    treatments: ['Insulin injections or pump therapy', 'Blood glucose monitoring', 'Carbohydrate counting and meal planning', 'Regular exercise', 'Regular health check-ups']
  },
  'Diabetes Type 2': {
    description: 'Type 2 diabetes occurs when the body cannot use insulin effectively. It is often linked to lifestyle factors and can develop gradually.',
    symptoms: ['fatigue', 'blurred vision', 'increased thirst', 'frequent urination', 'slow wound healing'],
    treatments: ['Oral antidiabetic medications', 'Metformin as first-line agent', 'GLP-1 agonists for weight management', 'Lifestyle modifications: diet and exercise', 'Regular glucose monitoring']
  },
  'Hypothyroidism': {
    description: 'Hypothyroidism is underactive thyroid function, resulting in low thyroid hormone levels. It slows metabolism and causes various symptoms.',
    symptoms: ['weight gain', 'fatigue', 'cold intolerance', 'dry skin', 'constipation'],
    treatments: ['Thyroid hormone replacement (Levothyroxine)', 'Regular TSH monitoring', 'Stable dosage once adjusted', 'Adequate iodine intake', 'Regular check-ups to adjust dose']
  },
  'Hyperthyroidism': {
    description: 'Hyperthyroidism is overactive thyroid function, producing excess thyroid hormones. It accelerates metabolism and causes multiple symptoms.',
    symptoms: ['weight loss', 'rapid heartbeat', 'heat intolerance', 'nervousness', 'tremor'],
    treatments: ['Antithyroid medications (PTU or Methimazole)', 'Beta-blockers for symptom relief', 'Radioactive iodine therapy', 'Thyroidectomy in some cases', 'Regular TSH monitoring']
  },
  'Anemia': {
    description: 'Anemia is a condition with insufficient healthy red blood cells or hemoglobin, reducing oxygen delivery to tissues.',
    symptoms: ['fatigue', 'pale skin', 'dizziness', 'shortness of breath', 'weakness'],
    treatments: ['Iron supplements for iron-deficiency anemia', 'Vitamin B12 or folate supplementation', 'Dietary modifications (iron-rich foods)', 'Treatment of underlying cause', 'Blood transfusion if severe']
  },
  'Arthritis': {
    description: 'Arthritis is inflammation of joints, with osteoarthritis and rheumatoid arthritis as common types. It causes pain, swelling, and reduced mobility.',
    symptoms: ['joint pain', 'swelling', 'stiffness', 'reduced range of motion'],
    treatments: ['NSAIDs for pain and inflammation', 'Physical therapy and exercise', 'Corticosteroid injections', 'Disease-modifying antirheumatic drugs (DMARDs)', 'Hot/cold therapy']
  },
  'Osteoporosis': {
    description: 'Osteoporosis is decreased bone density, increasing fracture risk. It develops silently and is common in postmenopausal women.',
    symptoms: ['back pain', 'fracture risk', 'weakness', 'reduced height', 'poor posture'],
    treatments: ['Bisphosphonates (alendronate)', 'Calcium and vitamin D supplementation', 'Weight-bearing exercises', 'HRT in some postmenopausal women', 'Fall prevention measures']
  },
  'Kidney Stones': {
    description: 'Kidney stones are hard mineral deposits in kidneys that can cause severe pain when passing through urinary tract.',
    symptoms: ['back pain', 'blood in urine', 'vomiting', 'urinary urgency', 'nausea'],
    treatments: ['Pain management with NSAIDs', 'Adequate hydration and fluid intake', 'Alpha-blockers to aid stone passage', 'Dietary modifications (reduce sodium, limit animal protein)', 'Extracorporeal shock wave lithotripsy if needed']
  },
  'Liver Cirrhosis': {
    description: 'Cirrhosis is advanced liver scarring from chronic injury, progressively impairing liver function.',
    symptoms: ['fatigue', 'yellow skin', 'abdominal pain', 'swelling', 'weight loss'],
    treatments: ['Treat underlying cause (hepatitis, alcohol)', 'Diuretics for ascites management', 'Protein restriction if encephalopathy', 'Beta-blockers for portal hypertension', 'Liver transplant evaluation']
  },
  'Hepatitis A': {
    description: 'Hepatitis A is acute inflammation of the liver caused by HAV virus, transmitted through food/water. It is self-limiting without chronic effects.',
    symptoms: ['fever', 'yellow skin', 'fatigue', 'abdominal pain', 'dark urine'],
    treatments: ['Rest and supportive care', 'Adequate nutrition and hydration', 'Avoid alcohol and hepatotoxic drugs', 'Hepatitis A vaccine for prevention', 'Monitor for fulminant hepatitis']
  },
  'Hepatitis B': {
    description: 'Hepatitis B is chronic viral infection transmitted through blood/body fluids. Some patients develop chronic infection with liver complications.',
    symptoms: ['fatigue', 'dark urine', 'yellow skin', 'abdominal pain'],
    treatments: ['Antiviral medications (nucleoside analogues)', 'Monitor liver function regularly', 'Hepatitis B vaccination for contacts', 'Avoid alcohol', 'Hepatologist follow-up']
  },
  'Hepatitis C': {
    description: 'Hepatitis C is often acquired through blood transfusions or injection drug use. Direct-acting antivirals can cure most cases.',
    symptoms: ['fatigue', 'abdominal pain', 'dark urine', 'jaundice', 'joint pain'],
    treatments: ['Direct-acting antivirals (sofosbuvir, ledipasvir)', '8-12 week treatment course', 'High cure rates (>95%)', 'Regular liver function monitoring', 'Treat early before cirrhosis']
  },
  'Gastritis': {
    description: 'Gastritis is inflammation of the stomach lining, often caused by H. pylori infection or NSAIDs.',
    symptoms: ['abdominal pain', 'nausea', 'bloating', 'loss of appetite', 'indigestion'],
    treatments: ['Proton pump inhibitors (omeprazole)', 'H. pylori eradication therapy if positive', 'Avoid NSAIDs and alcohol', 'Bland diet', 'Antacids for symptom relief']
  },
  'Peptic Ulcer': {
    description: 'Peptic ulcers are open sores in stomach or duodenal lining, usually caused by H. pylori or NSAIDs.',
    symptoms: ['abdominal pain', 'burning sensation', 'nausea', 'vomiting', 'dark stool'],
    treatments: ['Proton pump inhibitors', 'H. pylori eradication therapy', 'Avoid NSAIDs', 'Antacids and H2-blockers', 'Surgery if perforation or severe bleeding']
  },
  'Irritable Bowel Syndrome': {
    description: 'IBS is a functional GI disorder causing abdominal pain and irregular bowel habits without structural abnormalities.',
    symptoms: ['abdominal pain', 'bloating', 'diarrhea', 'constipation', 'mucus in stool'],
    treatments: ['Dietary modifications (low FODMAP diet)', 'Stress management and exercise', 'Antispasmodics for cramping', 'Laxatives or antidiarrheals as needed', 'Cognitive behavioral therapy']
  },
  'Crohn Disease': {
    description: 'Crohn disease is chronic inflammatory bowel disease affecting digestive tract, causing severe inflammation and complications.',
    symptoms: ['diarrhea', 'weight loss', 'abdominal pain', 'fever', 'blood in stool'],
    treatments: ['Anti-TNF biologics (infliximab, adalimumab)', 'Corticosteroids for flare-ups', 'Aminosalicylates', 'Dietary modifications', 'Surgery for severe complications']
  },
  'Ulcerative Colitis': {
    description: 'Ulcerative colitis is chronic inflammation limited to colon and rectum, causing ulcers and bloody diarrhea.',
    symptoms: ['diarrhea', 'abdominal pain', 'blood in stool', 'urgency', 'weight loss'],
    treatments: ['Aminosalicylates (mesalamine)', 'Corticosteroids for flares', 'Immunosuppressants', 'Biologics for moderate/severe disease', 'Colectomy if severe']
  },
  'Appendicitis': {
    description: 'Appendicitis is acute inflammation of the appendix, requiring emergency surgery. Early intervention prevents rupture and complications.',
    symptoms: ['abdominal pain', 'fever', 'nausea', 'loss of appetite', 'vomiting'],
    treatments: ['Emergency appendectomy (surgical removal)', 'Antibiotic therapy', 'IV fluids and pain management', 'Pre-operative imaging confirmation', 'Close monitoring post-surgery']
  },
  'Pancreatitis': {
    description: 'Pancreatitis is inflammation of the pancreas, often severe and life-threatening. Causes include gallstones and alcohol.',
    symptoms: ['abdominal pain', 'vomiting', 'fever', 'elevated lipase and amylase'],
    treatments: ['Hospitalization with supportive care', 'NPO status (nothing by mouth)', 'IV fluids and pain management', 'Treat underlying cause', 'Monitor for complications']
  },
  'Gallstones': {
    description: 'Gallstones are solid deposits in the gallbladder, often asymptomatic but can cause severe pain if they obstruct the bile duct.',
    symptoms: ['abdominal pain', 'nausea', 'vomiting', 'back pain', 'right shoulder pain'],
    treatments: ['Conservative management if asymptomatic', 'Cholecystectomy (gallbladder removal) if symptomatic', 'NSAIDs for pain', 'Low-fat diet', 'Ursodeoxycholic acid for dissolution attempts']
  },
  'Obesity': {
    description: 'Obesity is excess body fat affecting health. It increases risk for multiple chronic diseases including diabetes and heart disease.',
    symptoms: ['weight gain', 'fatigue', 'shortness of breath', 'joint stress', 'psychological impact'],
    treatments: ['Caloric deficit diet and exercise', 'Behavioral modification therapy', 'Weight loss medications (GLP-1 agonists)', 'Bariatric surgery for severe cases', 'Nutritionist counseling']
  },
  'Depression': {
    description: 'Depression is a mood disorder with persistent sadness and loss of interest. It significantly impacts daily functioning and requires treatment.',
    symptoms: ['fatigue', 'sleep problems', 'depression', 'loss of interest', 'hopelessness'],
    treatments: ['Antidepressants (SSRIs, SNRIs)', 'Psychotherapy (CBT, IPT)', 'Lifestyle changes: exercise, sleep, nutrition', 'Support groups', 'Crisis help if suicidal']
  },
  'Anxiety Disorder': {
    description: 'Anxiety disorder involves excessive worry and fear impacting daily life. It includes generalized anxiety, panic disorder, and phobias.',
    symptoms: ['anxiety', 'restlessness', 'rapid heartbeat', 'shortness of breath', 'tremor'],
    treatments: ['SSRIs or SNRIs as first-line', 'Benzodiazepines for acute relief', 'Cognitive behavioral therapy', 'Relaxation techniques', 'Regular exercise and stress management']
  },
  'Bipolar Disorder': {
    description: 'Bipolar disorder is characterized by alternating manic and depressive episodes. Mood episodes are extreme and affect functioning.',
    symptoms: ['mood swings', 'irritability', 'depression', 'euphoria', 'risky behavior'],
    treatments: ['Mood stabilizers (lithium, valproate)', 'Atypical antipsychotics', 'Psychotherapy', 'Sleep hygiene', 'Regular monitoring and medication compliance']
  },
  'Schizophrenia': {
    description: 'Schizophrenia is a serious psychiatric disorder with hallucinations, delusions, and disturbed thinking. Early treatment is crucial.',
    symptoms: ['hallucinations', 'delusion', 'disorganized speech', 'negative symptoms'],
    treatments: ['Antipsychotic medications (first or second-generation)', 'Psychosocial interventions', 'Supported employment', 'Family education', 'Regular monitoring']
  },
  'Parkinson Disease': {
    description: 'Parkinson disease is a progressive neurodegenerative disorder affecting movement due to dopamine loss.',
    symptoms: ['tremor', 'slow movement', 'stiffness', 'balance problems', 'rigidity'],
    treatments: ['Levodopa (L-DOPA) and carbidopa', 'Dopamine agonists', 'MAO inhibitors', 'Physical therapy', 'Deep brain stimulation in advanced cases']
  },
  'Alzheimer Disease': {
    description: 'Alzheimer disease is progressive dementia characterized by amyloid plaque accumulation in the brain, causing cognitive decline.',
    symptoms: ['memory loss', 'confusion', 'difficulty thinking', 'language problems'],
    treatments: ['Cholinesterase inhibitors (donepezil)', 'NMDA antagonists (memantine)', 'Cognitive stimulation', 'Supportive care', 'Behavioral management']
  },
  'Epilepsy': {
    description: 'Epilepsy is a neurological disorder with recurrent seizures. Seizure control requires anticonvulsant medications.',
    symptoms: ['seizures', 'loss of consciousness', 'confusion', 'convulsions'],
    treatments: ['Anticonvulsant medications (valproate, lamotrigine, levetiracetam)', 'Seizure trigger identification', 'Ketogenic diet in some cases', 'Neurosurgery for drug-resistant epilepsy', 'Safety precautions']
  },
  'Stroke': {
    description: 'Stroke is sudden brain damage from blood flow disruption. Time-sensitive treatment prevents disability.',
    symptoms: ['confusion', 'weakness', 'speech difficulty', 'facial drooping', 'vision loss'],
    treatments: ['Thrombolytic therapy (tPA) for ischemic stroke', 'Thrombectomy for large vessel occlusion', 'Antiplatelet/anticoagulant therapy', 'Rehabilitation therapy', 'Risk factor modification']
  },
  'Heart Attack': {
    description: 'Heart attack (myocardial infarction) is sudden death of heart muscle from blood flow blockage. It is a medical emergency.',
    symptoms: ['chest pain', 'shortness of breath', 'sweating', 'nausea', 'arm pain'],
    treatments: ['Emergency angioplasty or thrombolysis', 'Aspirin and antiplatelet agents', 'Beta-blockers and ACE inhibitors', 'Cardiac rehabilitation', 'Risk factor modification']
  },
  'Coronary Artery Disease': {
    description: 'CAD is atherosclerosis of coronary arteries reducing blood flow to heart, causing angina or infarction.',
    symptoms: ['chest pain', 'shortness of breath', 'fatigue', 'palpitations'],
    treatments: ['Statins for cholesterol', 'Antiplatelet therapy (aspirin)', 'Beta-blockers for angina', 'ACE inhibitors', 'Coronary angioplasty/stenting if needed']
  },
  'Atherosclerosis': {
    description: 'Atherosclerosis is plaque deposition in arterial walls, narrowing vessels and increasing thrombosis risk.',
    symptoms: ['chest pain', 'fatigue', 'leg pain', 'intermittent claudication'],
    treatments: ['Statins and ezetimibe', 'Antiplatelet agents (aspirin, clopidogrel)', 'ACE inhibitors and beta-blockers', 'Lifestyle modification', 'Angioplasty/stent if critical stenosis']
  },
  'Varicose Veins': {
    description: 'Varicose veins are dilated leg veins from valvular insufficiency causing pain and cosmetic concerns.',
    symptoms: ['leg pain', 'swelling', 'visible veins', 'heaviness', 'skin discoloration'],
    treatments: ['Compression stockings', 'Sclerotherapy or laser ablation', 'Radiofrequency ablation', 'Elevation and exercise', 'Surgical ligation if severe']
  },
  'Hemorrhoids': {
    description: 'Hemorrhoids are swollen rectal veins causing pain, itching, and bleeding. Internal or external types.',
    symptoms: ['pain', 'bleeding', 'itching', 'swelling', 'anal protrusion'],
    treatments: ['High-fiber diet and stool softeners', 'Topical creams and suppositories', 'Sitz baths', 'Rubber band ligation', 'Hemorrhoidectomy for severe cases']
  },
  'Glaucoma': {
    description: 'Glaucoma is optic nerve damage from elevated intraocular pressure, leading to vision loss and blindness if untreated.',
    symptoms: ['eye pain', 'vision loss', 'blurred vision', 'halos around lights'],
    treatments: ['Prostaglandin analogs (eye drops)', 'Beta-blockers and alpha-agonists', 'Carbonic anhydrase inhibitors', 'Laser trabeculoplasty', 'Trabeculectomy if needed']
  },
  'Cataract': {
    description: 'Cataracts are lens opacification causing progressive vision loss. Age-related cataracts are most common.',
    symptoms: ['blurred vision', 'cloudy vision', 'vision loss', 'glare sensitivity'],
    treatments: ['Phacoemulsification surgery', 'Intraocular lens implant', 'Early detection and monitoring', 'UV protection prevention', 'Postoperative care']
  },
  'Conjunctivitis': {
    description: 'Conjunctivitis (pink eye) is inflammation of the conjunctiva from viral, bacterial, or allergic causes.',
    symptoms: ['eye redness', 'itching', 'tearing', 'discharge', 'light sensitivity'],
    treatments: ['Antibiotic eye drops for bacterial', 'Antiviral for viral (supportive care)', 'Antihistamines for allergic', 'Warm compresses', 'Avoid contact lenses during infection']
  },
  'Otitis Media': {
    description: 'Otitis media is middle ear infection causing ear pain and hearing loss, common in children.',
    symptoms: ['ear pain', 'hearing loss', 'fever', 'fluid drainage'],
    treatments: ['Antibiotic therapy (amoxicillin)', 'Pain management (acetaminophen)', 'Decongestants', 'Watchful waiting for some viral cases', 'Myringotomy if effusion persists']
  },
  'Tonsillitis': {
    description: 'Tonsillitis is inflammation of the tonsils from viral or bacterial infection causing severe throat pain.',
    symptoms: ['sore throat', 'fever', 'difficulty swallowing', 'swollen tonsils', 'headache'],
    treatments: ['Antibiotics for streptococcal (penicillin/amoxicillin)', 'Supportive care for viral', 'Pain relievers and throat lozenges', 'Rest and hydration', 'Tonsillectomy if recurrent']
  },
  'Laryngitis': {
    description: 'Laryngitis is voice box inflammation from viral infection or voice strain causing hoarseness.',
    symptoms: ['hoarseness', 'sore throat', 'dry cough', 'voice loss', 'throat discomfort'],
    treatments: ['Voice rest (most important)', 'Steam inhalation', 'Avoid irritants and smoke', 'Warm fluids', 'Rarely antibiotics if bacterial']
  },
  'Pharyngitis': {
    description: 'Pharyngitis is throat inflammation from viral or bacterial infection causing sore throat and pain.',
    symptoms: ['sore throat', 'fever', 'headache', 'difficulty swallowing', 'body ache'],
    treatments: ['Antibiotics if streptococcal (confirmed by test)', 'Pain relievers and throat lozenges', 'Warm salt water gargling', 'Rest and hydration', 'Supportive care if viral']
  },
  'Measles': {
    description: 'Measles is highly contagious viral infection causing fever and characteristic rash. Prevention through MMR vaccine is crucial.',
    symptoms: ['fever', 'rash', 'cough', 'runny nose', 'Koplik spots'],
    treatments: ['Supportive care (rest, fluids)', 'Vitamin A supplementation', 'Fever management', 'No specific antiviral cure', 'MMR vaccine prevents disease']
  },
  'Mumps': {
    description: 'Mumps is viral infection causing parotid gland swelling and systemic symptoms. Vaccine prevents most cases.',
    symptoms: ['fever', 'swelling', 'headache', 'jaw pain', 'malaise'],
    treatments: ['Supportive care and pain management', 'Rest and hydration', 'No specific treatment', 'Complications monitoring (meningitis, orchitis)', 'MMR vaccine prevention']
  },
  'Rubella': {
    description: 'Rubella (German measles) is contagious viral infection with rash and joint symptoms, prevented by MMR vaccine.',
    symptoms: ['rash', 'fever', 'joint pain', 'adenopathy', 'mild symptoms'],
    treatments: ['Supportive care', 'Pain management', 'Rest and isolation', 'No specific treatment', 'MMR vaccine prevents disease and complications']
  },
  'Chickenpox': {
    description: 'Chickenpox is highly contagious viral infection with characteristic fluid-filled blisters recovering in 1-2 weeks.',
    symptoms: ['rash', 'fever', 'itching', 'fluid-filled vesicles', 'malaise'],
    treatments: ['Supportive care and hydration', 'Antihistamines for itching', 'Acyclovir for severe/high-risk cases', 'Avoid scratching to prevent scarring', 'Varicella vaccine prevention']
  },
  'Shingles': {
    description: 'Shingles is recurrent varicella-zoster causing painful dermatomal rash. Post-herpetic neuralgia is common complication.',
    symptoms: ['rash', 'pain', 'itching', 'burning', 'dermatomal distribution'],
    treatments: ['Antivirals (acyclovir, famciclovir, valacyclovir)', 'Pain management with analgesics', 'Gabapentin for neuropathic pain', 'Topical treatments', 'Shingrix vaccine for prevention']
  },
  'Polio': {
    description: 'Poliomyelitis is viral infection affecting motor neurons, causing paralysis in severe cases. Vaccine has eliminated it in most countries.',
    symptoms: ['weakness', 'fever', 'muscle pain', 'paralysis', 'stiffness'],
    treatments: ['Supportive care and respiratory support if needed', 'Physical rehabilitation', 'No specific cure', 'Polio vaccine for prevention', 'Global vaccination efforts ongoing']
  },
  'Rabies': {
    description: 'Rabies is fatal viral infection transmitted through animal bites. Post-exposure prophylaxis is life-saving if given promptly.',
    symptoms: ['fever', 'anxiety', 'confusion', 'hydrophobia', 'encephalitis'],
    treatments: ['Post-exposure prophylaxis (vaccine + immunoglobulin) if given promptly', 'Supportive care', 'Milwaukee Protocol (experimental)', 'Prevention through animal awareness', 'Immediate care for any animal bite']
  },
  'HIV/AIDS': {
    description: 'HIV is a retrovirus spreading through body fluids, progressively damaging immune system. Antiretroviral therapy allows normal lifespan.',
    symptoms: ['weight loss', 'fever', 'fatigue', 'opportunistic infections'],
    treatments: ['Antiretroviral therapy (combination of drugs)', 'CD4 and viral load monitoring', 'Opportunistic infection prophylaxis', 'Adherence to medication crucial', 'Regular specialist follow-up']
  },
  'Syphilis': {
    description: 'Syphilis is bacterial infection with progressive stages if untreated. Early treatment prevents serious complications.',
    symptoms: ['rash', 'ulcers', 'fever', 'lymphadenopathy', 'systemic symptoms'],
    treatments: ['Penicillin (benzathine penicillin G)', 'Early treatment essential for cure', 'Alternative antibiotics if allergic', 'Partner notification and treatment', 'Monitoring for treatment failure']
  },
  'Gonorrhea': {
    description: 'Gonorrhea is bacterial sexually transmitted infection causing urogenital symptoms. Antibiotic resistance increasing.',
    symptoms: ['burning urination', 'discharge', 'pain', 'pelvic pain', 'arthritis'],
    treatments: ['Ceftriaxone + azithromycin or doxycycline', 'Single-dose therapy', 'Partner treatment essential', 'Test of cure after treatment', 'Prevention through safe sex']
  },
  'Chlamydia': {
    description: 'Chlamydia is common sexually transmitted bacterial infection, often asymptomatic but causing complications if untreated.',
    symptoms: ['burning urination', 'pain', 'discharge', 'pelvic pain', 'cervicitis'],
    treatments: ['Azithromycin single dose or doxycycline course', 'Partner treatment required', 'Avoiding sexual contact during treatment', 'Follow-up testing', 'Condom prevention']
  },
  'Ebola': {
    description: 'Ebola virus disease is severe with high mortality rate. Supportive care and infection control are primary management.',
    symptoms: ['fever', 'bleeding', 'vomiting', 'rash', 'organ failure'],
    treatments: ['Supportive care (fluids, blood products, organ support)', 'Experimental vaccines under development', 'Strict isolation and PPE', 'High mortality despite treatment', 'Prevention through contact precautions']
  },
  'Zika Virus': {
    description: 'Zika is mosquito-borne virus causing fever and rash, with serious congenital complications including microcephaly.',
    symptoms: ['fever', 'rash', 'joint pain', 'headache', 'eye pain'],
    treatments: ['Supportive care (no specific antiviral)', 'Pain and fever management', 'Hydration and rest', 'Mosquito prevention crucial', 'Pregnant women need close monitoring']
  },
  'Yellow Fever': {
    description: 'Yellow fever is mosquito-borne virus with high mortality if progressing to hemorrhagic phase. Vaccine available and effective.',
    symptoms: ['fever', 'yellow skin', 'vomiting', 'bleeding', 'organ failure'],
    treatments: ['Supportive care and management of bleeding', 'No specific antiviral cure', 'Yellow fever vaccine for prevention', 'Avoid transmitting to others', 'Mosquito control crucial']
  },
  'Leprosy': {
    description: 'Leprosy (Hansen disease) is chronic bacterial infection affecting skin and nerves. Early treatment prevents disability.',
    symptoms: ['skin lesions', 'numbness', 'weakness', 'nerve thickening'],
    treatments: ['Multi-drug therapy (MDT)', 'Rifampicin, dapsone, clofazimine', 'Long-term treatment required', 'Disability prevention important', 'WHO standardized therapy']
  },
  'Plague': {
    description: 'Plague is severe bacterial infection with high mortality if untreated. Three forms: bubonic, pneumonic, and septicemic.',
    symptoms: ['fever', 'swelling', 'chills', 'weakness', 'rapid progression'],
    treatments: ['Antibiotics (streptomycin, gentamicin, doxycycline)', 'Early treatment critical for survival', 'Supportive care', 'Isolation precautions', 'Prevention through rodent control']
  },
  'Whooping Cough': {
    description: 'Whooping cough (pertussis) is bacterial infection with severe paroxysmal cough. Vaccine prevents disease.',
    symptoms: ['severe cough', 'vomiting', 'fatigue', 'whoop sound', 'apnea'],
    treatments: ['Azithromycin early in course', 'Supportive care', 'Hospitalization for infants', 'Pertussis vaccine (DTaP) prevention', 'Post-exposure prophylaxis for contacts']
  },
  'Tetanus': {
    description: 'Tetanus is neurotoxin-mediated infection from Clostridium tetani causing severe muscle rigidity and spasms.',
    symptoms: ['muscle stiffness', 'spasms', 'fever', 'trismus', 'opisthotonus'],
    treatments: ['Tetanus immunoglobulin', 'Antibiotics (metronidazole or penicillin)', 'Supportive care and intubation', 'Toxoid booster vaccination', 'Prevention through vaccination (Td booster every 10 years)']
  },
  'Botulism': {
    description: 'Botulism is neurotoxin (botulinum) poisoning causing descending paralysis from contaminated food or wound.',
    symptoms: ['muscle weakness', 'vision problems', 'difficulty swallowing', 'paralysis'],
    treatments: ['Botulism antitoxin early', 'Supportive care and mechanical ventilation', 'Avoid tobramycin and aminoglycosides', 'Food handling safety', 'Supportive care until toxin metabolized']
  },
  'Food Poisoning': {
    description: 'Food poisoning is acute gastroenteritis from contaminated food with infectious or toxic agents.',
    symptoms: ['vomiting', 'diarrhea', 'abdominal pain', 'fever', 'nausea'],
    treatments: ['Hydration and electrolyte replacement (ORS)', 'Rest and bland diet', 'Antimotility agents contraindicated in bloody diarrhea', 'Antibiotics if severe bacterial (Culture-directed)', 'Food safety practices']
  },
  'Heat Stroke': {
    description: 'Heat stroke is life-threatening hyperthermia with CNS dysfunction. Rapid cooling is critical.',
    symptoms: ['high fever', 'confusion', 'fainting', 'no sweating', 'coma'],
    treatments: ['Immediate cooling (ice water immersion, evaporative cooling)', 'IV fluids and electrolyte management', 'Organ support if complications', 'Hospitalization required', 'Prevention through hydration and rest']
  },
  'Hypothermia': {
    description: 'Hypothermia is core temperature drop below 35°C causing cardiac and neurologic dysfunction.',
    symptoms: ['low body temperature', 'shivering', 'confusion', 'drowsiness', 'paradoxical undressing'],
    treatments: ['Gradual rewarming (avoid rapid rewarming)', 'Warm IV fluids', 'ECMO/bypass if severe', 'CPR even if pulseless', 'Comprehensive supportive care']
  },
  'Dehydration': {
    description: 'Dehydration is fluid loss exceeding intake, causing electrolyte imbalances and multiple organ effects.',
    symptoms: ['dry mouth', 'dizziness', 'fatigue', 'thirst', 'dark urine'],
    treatments: ['Oral rehydration solution (ORS)', 'IV fluids if unable to drink', 'Electrolyte monitoring', 'Treating underlying cause', 'Prevention through adequate intake']
  },
  'Allergic Rhinitis': {
    description: 'Allergic rhinitis is allergic inflammation of nasal passages causing nasal symptoms.',
    symptoms: ['sneezing', 'runny nose', 'itching', 'nasal congestion'],
    treatments: ['Intranasal corticosteroids (first-line)', 'Antihistamines (oral or intranasal)', 'Allergen avoidance', 'Immunotherapy for severe cases', 'Environmental controls']
  },
  'Eczema': {
    description: 'Eczema (atopic dermatitis) is chronic inflammatory skin condition with itching and barrier dysfunction.',
    symptoms: ['itching', 'dry skin', 'rash', 'lichenification', 'skin infections'],
    treatments: ['Emollients and moisturizers (essential)', 'Topical corticosteroids for inflammation', 'Topical calcineurin inhibitors', 'Phototherapy for severe cases', 'Trigger identification and avoidance']
  },
  'Psoriasis': {
    description: 'Psoriasis is chronic autoimmune skin condition with red, scaly plaques. Multiple treatment options available.',
    symptoms: ['rash', 'dry skin', 'scaling', 'itching', 'plaques'],
    treatments: ['Topical corticosteroids and vitamin D analogues', 'Systemic treatments for moderate/severe', 'Biologics (TNF inhibitors, IL-17/23 inhibitors)', 'Phototherapy', 'Lifestyle modifications']
  },
  'Acne': {
    description: 'Acne is chronic inflammatory pilosebaceous condition common in adolescents with comedones and pustules.',
    symptoms: ['pimples', 'oily skin', 'inflammation', 'comedones', 'cystic lesions'],
    treatments: ['Topical retinoids and benzoyl peroxide', 'Oral antibiotics for moderate acne', 'Hormonal therapy for females', 'Isotretinoin for severe case', 'Proper skin hygiene']
  }
};

// For diseases without detailed descriptions, use a template
function getDiseasesData() {
  return diseasesDatabase;
}

// Get single disease data
function getDiseaseData(diseaseName) {
  return diseasesDatabase[diseaseName] || {
    description: 'Medical condition that requires professional diagnosis and treatment.',
    symptoms: ['Consult healthcare provider for symptoms'],
    treatments: ['Consult healthcare provider for treatment options']
  };
}
