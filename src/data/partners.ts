// Global Hope India partners and projects that accept designated giving.
//
// SECURITY: partners are identified as "<Name> in India" ONLY. Never publish the
// state, city or region a partner serves in — several serve in areas where being
// publicly identified with a location carries real risk. This is why the naming
// changed from the old Givebutter pages, which named locations.
//
// `campaign` must match a slug in the donations pipeline's campaigns.json, or the
// give form will 400 on checkout.

export interface Partner {
  slug: string;
  /** Display name — "<Name> in India" form only. */
  name: string;
  /** One-line description carried over from the partner's original page. */
  tagline: string;
  /** Campaign slug in the donations pipeline. */
  campaign: string;
  image: string;
  /** 'partner' shows under Indian Partners; 'project' under Projects. */
  kind: 'partner' | 'project';
  /** Introduction paragraphs, carried over from the partner's original page and
   *  de-identified per the security rule above. */
  intro: string[];
}

const IMG = 'https://assets.spiritmediapublishing.com/images';

export const PARTNERS: Partner[] = [
  { slug: 'achu', name: 'Achu in India', tagline: 'Creating pathways to success through education', campaign: 'ghi-achu', image: `${IMG}/ghi-partner-achu.webp`, kind: 'partner', intro: [
      'Our partner, Achu, in India believes in the importance of education. Being a former youth pastor, social worker, and entrepreneur, his ministry focuses on the spiritual and social needs of his community.',
      'Education is one of the focal points of their ministry. One of Achu\'s missions is to seek resources to provide education to theological students and orphans in need.',
      'With the help of Global Hope India, two teachers were recently hired and both are very committed to teaching and guiding the students, even with limited resources. Additionally, one of the teachers can teach music, which is also a need at the moment.',
      'The Church also sends missionaries to other mission fields with the mission of proclaiming God’s Kingdom and helping the needs of orphans, students, farmers, and the underprivileged in the communities they minister.',
      'Each can foresee success because of the generosity of the people supporting them. Help us continue creating pathways for them, through your generosity and prayers.',
      'Current funding needs:',
      '$360 per month - salary sponsorship for 2 faculty members at Theological College',
      '$193 per month for 1 orphan - educational sponsorship, 12 orphan students need sponsorship for one academic year.',
      'To get updates on Pastor Achu and his ministry, please visit https://globalhopeindia.org',
    ] },
  { slug: 'amit', name: 'Amit in India', tagline: 'Sharing the good news in villages and mountains', campaign: 'ghi-amit', image: `${IMG}/ghi-partner-amit.webp`, kind: 'partner', intro: [
      'Pastor Amit built the Good News Foundation in 2013 with the mission of sharing the Gospel to far-flung and dangerous places. He started his mission of planting churches in mountains, villages, and slums.',
      'In his effort and passion to spread the Good News, he was able to plant a church in a small village. More so, the foundation was able to provide walking sticks for the elders in that village.',
      'For a decade, the mission of the Good News Foundation did not change yet it continues to expand. To support the mission, transportation and communication is an urgent need. Also, livelihood programs for the pastor and their families would be beneficial to help them in their missionary work and daily living. Thank you for being our partner in this great work for the Lord.',
      'Current funding needs:',
      '2 Motorcycles for transportation in villages',
      'Literature and reading materials',
      'Mobile phones for communication',
      'Livelihood for pastors and their families for daily sustenance',
      'To get updates on Pastor Amit and the Good News Foundation, please visit globalhopeindia.org.',
    ] },
  { slug: 'anil', name: 'Anil in India', tagline: 'A physician for the body and soul', campaign: 'ghi-anil', image: `${IMG}/ghi-partner-anil.webp`, kind: 'partner', intro: [
      'In 1990, Dr Anil started Bridge of Hope with the mission of providing a holistic transformation to children, women, and elders.',
      'Bridge of Hope strives to enhance life by stopping the cycle of poverty, illiteracy, unemployment, and untreated diseases through the provision of education, job-oriented skill training, and access to quality health care.',
      'Among their projects include education for children, sports ministry for children and youth, vocational skills training for young women, a hospital with specialty health care services, and care for Leprosy patients.',
      'For 30 years, Bridge of Hope has worked for the healing of body and soul on the most vulnerable – the children, women, and the elderly. With your generosity, more people will be healed and saved.',
      'Current funding needs:',
      'Sports Ministry - sports items and equipment',
      'Hospital Equipment - Hematology analyzer, pulse oximeters, oxygen concentrators',
      'Furnishing for the hospital\'s second floor - 20 patient beds, 20 couches, 20 chairs and 2 trolleys',
      'Van for patient transportation',
      'For updates on the projects of Bridge of Hope please visit globalhopeindia.org.',
    ] },
  { slug: 'bernardshaw', name: 'Bernardshaw in India', tagline: 'A call for discipleship — in Scripture and action', campaign: 'ghi-bernardshaw', image: `${IMG}/ghi-partner-bernardshaw.webp`, kind: 'partner', intro: [
      'Join us in supporting God\'s work in India.',
      'The church\'s dedication and passion for proclaiming God\'s word includes church planting, pastoral and leadership training, discipleship training, and a Bible college. They actively create ways to share the Gospel through film, sports, and youth ministry.',
      'Through the help of Global Hope India, the ministry has planted churches in many unreached villages and remote rural areas.',
      'But the word of God will be more powerful if it is shown in action. Part of the mission of the church is to attend to the needs of widows and abandoned children, through free education, medical missions, and clean water projects in tribal communities.',
      'Together with other pastors, they have been actively working in different communities to spread the Gospel and to support the needs of the community.',
      'Be a part of sharing the Gospel and making it alive in unreached villages and remote areas. The ministry is seeking support for -',
      'Current funding needs:',
      'Construction of a temporary shelter for Bible school',
      'Assistance for 5 pastors mission expenses',
      'Motorcycle for 2 pastors travelling to far-flung villages',
      'Borewell projects',
      'For updates on this ministry in India, visit https://globalhopeindia.org/impact/',
    ] },
  { slug: 'dbm', name: 'DBM in India', tagline: 'Transforming the lives of deaf individuals through education, food and shelter', campaign: 'ghi-dbm', image: `${IMG}/ghi-partner-dbm.webp`, kind: 'partner', intro: [
      'DBM is located in India. Established in 1987, DBM aims to provide free education and accommodation for Deaf children.',
      'With the headship of Pastor Y, Deaf Church Pastor, together with her wife, Sister A who serves as the Administrator of DBM (family photo shown above), it has received three (3) President of India’s National Awards and countless recognitions for its outstanding service to the Deaf community. Indeed, they have created a positive impact not only on the lives of the deaf individuals they serve but to the whole country as well.',
      'Currently, 73 Deaf children are in the Deaf School along with more than 200 Deaf church members receiving free education and accommodation. DBM has room for more, but daily basic expenses slow down their journey of helping the Deaf community. To feed each child costs $25 a month, this amount is enough to transform the life of one deaf child.',
      'Current funding needs:',
      '$25 per month for 19 students - covering food, education, and healthcare needs',
      'Learn more about DBM here and their journey in creating a place to be a gateway to Heaven, where God’s presence is felt by every Deaf individual.',
    ] },
  { slug: 'drs', name: 'Dr S in India', tagline: 'Proclaiming the gospel is a mission with action', campaign: 'ghi-drs', image: `${IMG}/ghi-partner-drs.webp`, kind: 'partner', intro: [
      'In 2007, Dr S started his ministry in India. His missionary work evolves in church planting, child care, education, and employment-readiness programs.',
      'Yearly his ministry was able to support:',
      '292 children were given a home',
      '685 students were assisted with tuition fees',
      '1,300 young adults have been trained in a skills program',
      '50 young people completed church planting training',
      'These numbers have continuously grown over the years which means the mission is expanding. Dr S is looking forward to bringing the message of the Gospel and his missionary works to districts and villages. It will only be made possible with your generous donations and continued support.',
      'Current funding needs:',
      'For the new campus - 100 Bunk beds, 400 mattresses, 50 dining tables, 20 cots for house moms, and school furniture',
      'For children\'s homes - 20 homes cost $35,000 each',
      'Church Planter seminar - 2 conference cost is $5000',
      '2 School buses - for the third campus cost is $35000 each',
      '750 chairs for the auditorium - total cost is $43,500',
      '4000 Bible for church planters = $15,000',
      'To get updates on Dr S and his ministry please visit globalhopeindia.org',
    ] },
  { slug: 'kasbe', name: 'Kasbe in India', tagline: "Strengthening the family and home with God's Word", campaign: 'ghi-kasbe', image: `${IMG}/ghi-partner-kasbe.webp`, kind: 'partner', intro: [
      'Pastor Kasbe is the current pastor of Grace Bible Church in India, established in 2013. The ministry is working on sharing the Gospel with non-believers.',
      'With the hope of reaching more people to share the Good News, Pastor Kasbe regularly conducts family worship services, Sunday school for children, Bible study, and night vigils.',
      'Families are welcoming them into their homes to praise, worship, and listen to God\'s word',
      'Sunday school - children participate in worship services',
      'With the ministry\'s hard work and passion for sharing the Gospel, more and more people are now coming forward. This growth of believers requires a bigger place to gather, worship, and receive God\'s word. With that, Grace Bible Church is knocking on your doors to make this possible.',
      'Current funding needs:',
      '$260 per month - ministry service hall rental',
      '$600 per month - ministry fund for administration and personnel support',
      'To get updates on the ministry, please visit globalhopeindia.org',
    ] },
  { slug: 'kel', name: 'KEL in India', tagline: 'Overcoming persecution in pursuit of the mission', campaign: 'ghi-kel', image: `${IMG}/ghi-partner-kel.webp`, kind: 'partner', intro: [
      'Pastor K. Zakkariah has been doing missionary work since 1985. He has faced many troubles and persecution in doing his ministry in India. Prayers and courage are his weapons to overcome all these.',
      'Pastor K. Zakkariah has been pastoring thousands of people by proclaiming the Gospel and with the help of Global Hope India, SHM (KEL Home), his ministry, various projects have been created for the benefit of the communities in need. Aside from distributing the Holy bible, they also distribute food, blankets, and other necessities for children and widows.',
      'The primary mission is expanding the preaching of the Gospel through church planting where a translation of the Holy Bible in Telegu is highly needed. This will help more people understand deeply the Good News.',
      'As they continuously ask for prayers for their protection and strength against persecution in doing God’s mission, they are also seeking financial support for the furtherance of the mission of proclaiming God’s Kingdom to every soul.',
      'Current funding needs:',
      'Gospel Van for pastors',
      'Holy Bible in Telugu',
      'Church building construction',
      'Training programs for church planting',
      'To get updates on the ministry of Pastor Kel, please visit https://globalhopeindia.org/',
    ] },
  { slug: 'manoj', name: 'Manoj in India', tagline: 'Giving hope through the gospel and acting on it to help others', campaign: 'ghi-manoj', image: `${IMG}/ghi-partner-manoj.webp`, kind: 'partner', intro: [
      'Pastor Manoj, a philanthropist and an entrepreneur, clearly saw the urgent need to help children, women, the elderly and tribal communities. He started finding ways to help them through spiritual and social approaches.',
      'In 2002, he founded Rays of Hope. He reached out to people in need through evangelization, church planting, and Bible school. At the same time, they created programs to address the needs of orphans, women, and elders such as food, shelter, and foster families and livelihood projects.',
      'Pastor Manoj is asking for your continuous prayers and support for their ongoing programs to ensure the lifelong holistic transformation of each individual they are helping. Apart from this, a huge project is on its way - the development of the CITY OF HOPE.',
      'To learn more about this project, please read here.',
    ] },
  { slug: 'mayon', name: 'Mayon in India', tagline: 'Impacting lives through evangelization and education', campaign: 'ghi-mayon', image: `${IMG}/ghi-partner-mayon.webp`, kind: 'partner', intro: [
      'A school teacher for five years, a school head teacher for four years, and a missionary in Delhi for three years, Pastor Mayon combined his passion for education and evangelization to share the Good News in words and action among the people in India.',
      'Pastor Mayon and his church built a mission school called his school. It was built due to the inadequacy of quality education in the village. In addition to school fees assistance, they were able to provide water supply through a temporary plastic water tank to address the basic and daily needs for cleaning water. Before its installation, people will need to walk to a nearby spring to fetch water.',
      'Photos of before and after the temporary plastic water tank installation',
      'In his commitment to the mission of preaching the Gospel, Pastor Mayon continues to nourish the spiritual needs of the people. Bible preaching, evangelical youth camps, baptism, and Bible distribution are being held regularly. Most recently, Pastor Mayon is planting a church in a tribe in a neighbouring country. In his latest evangelization, 31 individuals received water baptism.',
      'Some of the newly baptized youth',
      'Pastor Mayon is knocking on your generous heart as they continue the mission of evangelization and education. Their current projects that need funding are Bibles, school furniture & facilities, and bore well drilling for the use of the whole community. All prayers and support are highly appreciated.',
      'Current funding need:',
      'Bibles for distribution',
      '30 benches and desks for his school',
      'Power supply for 12 classrooms',
      'Sanitary toilet for the school',
      'Student fee sponsorships',
      'Rain harvesting water tanks or bore well drilling',
      'To learn more about Pastor Mayon and his ministry please visit globalhopeindia.org',
    ] },
  { slug: 'raja', name: 'Raja in India', tagline: 'A heart for orphans, the disabled, and people suffering from leprosy', campaign: 'ghi-raja', image: `${IMG}/ghi-partner-raja.webp`, kind: 'partner', intro: [
      'Pastor Raja has been extending love and care to people in need for years now. With a Master’s degree in Social Work plus a passion for proclaiming the Gospel, Pastor Raja was able to help and support orphans, persons with disability, and the leper community.',
      'With the help of Global Hope India, he has been supporting a leper colony, medical missions for people with disabilities, providing education and care for orphans, and a special school for the mentally challenged.',
      'Pastor Raja is beyond grateful for your continuous prayers and support for his ministry. A lot has been accomplished and yet a lot is still to be done for these children and persons in need. Help us transform their lives as we give them hope despite life\'s challenges.',
      'Current funding needs:',
      'Church building construction at India and tribe villages',
      'Bible distribution',
      'Borewells for drought-affected villages',
      'School for orphans and poor',
      'Special School for mentally challenged',
      'Sustainable agricultural development and livelihood programs',
      'For more updates on Pastor Raja\'s untiring work in India, please visit https://globalhopeindia.org/impact/',
    ] },
  { slug: 'sekhar', name: 'Sekhar in India', tagline: 'A compassionate crusader for the poor, orphans, widows and lepers', campaign: 'ghi-sekhar', image: `${IMG}/ghi-partner-sekhar.webp`, kind: 'partner', intro: [
      'Pastor Sekhar is a long-term partner in India. His missionary work stands on three principles: Soap, Soup, and Salvation – taking care of the body and soul.',
      'Together with his wife Sharon (photo above), they regularly conduct personal house visits to share the Gospel, pray over sessions, and even host Gospel meetings in tribal communities. The ministry also conducts regular medical camps and feeding programs.',
      'In November 2023 alone, with your generous donation, these have been accomplished:',
      'Feeding Progam',
      'Preaching the Gospel to villages',
      'Assisting Widowed Mothers',
      'Prayer Gathering',
      'Pastor Sekhar is continuously asking for prayers for his church and spiritual strength to keep working for the Lord.',
      'Let’s join them in prayer as they continue to reach more people to share God\'s providence and miracles through your generous donation.',
      'Current funding needs:',
      'Church planting',
      'Feeding programs for the poor and needy',
      'Home for senior citizens',
      'To learn more about Pastor Sekhar\'s missions, please visit https://globalhopeindia.org',
    ] },
  { slug: 'shepherds-house', name: "The Shepherd's House", tagline: 'A home of prayer, peace and hope', campaign: 'ghi-shepherds-house', image: `${IMG}/ghi-partner-shepherds-house.webp`, kind: 'project', intro: [
      'The Shepherd’s House Ministry is being built as a church facility and home for Pastor Canary and his family (photo above) to further serve the neighboring communities in North East India.',
      'Before the building of this facility, Pastor Canary has been spreading God’s word to his family, friends, and neighbors by distributing Bibles and preaching the Gospel. As a missionary, his words and actions have transformed lives and people started accepting the love of Jesus.',
      'Raising funds for the construction is challenging enough, how much more if it is in the midst of ethnic wars, burning villages, and intense gunfire? Due to the threat to the lives of the workers, construction has been delayed. Adding to this, there is also a threat of loss of construction supplies and damage to the construction itself. Despite all these, Pastor Canary and the people of the community continue to rise with strong faith that God is with them building the Sheperd’s House piece by piece.',
      'Aside from the construction funds needed to build the Shepherd’s House, basic needs for missionary work such as transportation, food, blanket distribution, and utilities are also needed.',
      'Current funding needs:',
      '$850 per month - travel expenses and rentals for the mission, food, blankets, and emergency lights for distribution.',
      'For updates on the construction of the Shepherd\'s House, please visit globalhopeindia.org',
    ] },
];

export const partnerBySlug = (slug: string) => PARTNERS.find((p) => p.slug === slug);
