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
      '$360 per month - salary sponsorship for 2 faculty members at a theological college',
      '$193 per month for 1 orphan - educational sponsorship, 12 orphan students need sponsorship for one academic year.',
      'To get updates on Pastor Achu and his ministry, please visit https://globalhopeindia.org',
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
  { slug: 'kel', name: 'KEL in India', tagline: 'Overcoming persecution in pursuit of the mission', campaign: 'ghi-kel', image: `${IMG}/ghi-partner-kel.webp`, kind: 'partner', intro: [
      'Pastor Z has been doing missionary work since 1985. He has faced many troubles and persecution in doing his ministry in India. Prayers and courage are his weapons to overcome all these.',
      'Pastor Z has been pastoring thousands of people by proclaiming the Gospel and with the help of Global Hope India, SHM (the home), his ministry, various projects have been created for the benefit of the communities in need. Aside from distributing the Holy bible, they also distribute food, blankets, and other necessities for children and widows.',
      'The primary mission is expanding the preaching of the Gospel through church planting where a translation of the Holy Bible in the local language is highly needed. This will help more people understand deeply the Good News.',
      'As they continuously ask for prayers for their protection and strength against persecution in doing God’s mission, they are also seeking financial support for the furtherance of the mission of proclaiming God’s Kingdom to every soul.',
      'Current funding needs:',
      'Gospel Van for pastors',
      'Holy Bible in the local language',
      'Church building construction',
      'Training programs for church planting',
      'To get updates on the ministry of Pastor Kel, please visit https://globalhopeindia.org/',
    ] },
  { slug: 'manoj', name: 'Manoj in India', tagline: 'Giving hope through the gospel and acting on it to help others', campaign: 'ghi-manoj', image: `${IMG}/ghi-partner-manoj.webp`, kind: 'partner', intro: [
      'Pastor Manoj, a philanthropist and an entrepreneur, clearly saw the urgent need to help children, women, the elderly and tribal communities. He started finding ways to help them through spiritual and social approaches.',
      'In 2002, he founded the ministry in India. He reached out to people in need through evangelization, church planting, and Bible school. At the same time, they created programs to address the needs of orphans, women, and elders such as food, shelter, and foster families and livelihood projects.',
      'Pastor Manoj is asking for your continuous prayers and support for their ongoing programs to ensure the lifelong holistic transformation of each individual they are helping. Apart from this, a huge project is on its way - the development of the the ministry in India.',
      'To learn more about this project, please read here.',
    ] },
  // NOTE (2026-08-31): restored as its own designation after being folded into
  // Village Development at the Givebutter cutover. Copy below is grounded in the
  // original Givebutter campaign (givebutter.com/NorthEastHealthcareFund), whose
  // ONLY text was the tagline: "An ethnic violence left a tribe fleeing for their
  // lives and seek refuge in relief camps." That campaign carried no body copy,
  // no funding-needs breakdown and no project photos — so none are invented here.
  // It ran to $76,360 of a $100,000 goal across 45 supporters and is now CLOSED
  // on Givebutter. Kevin/GHI to confirm the work is ongoing and supply real copy
  // and a photograph; the image here is GHI's existing medical-camp photograph,
  // reused as a placeholder.
  //
  // NAMING — SETTLED, do not re-flag. Kevin ruled 2026-08-31: keep the Manipur
  // name. The "never name a location" rule at the top of this file protects
  // NAMED PARTNERS (a person identifiable with a place); it does not extend to a
  // crisis-relief PROJECT, whose name is the crisis. This is why the blog slugs
  // were scrubbed on 2026-08-06 (301s in public/_redirects) while this page keeps
  // its name. Follows the Givebutter campaign it came from, "Manipur Crisis
  // Relief Fund".
  // Body copy is verbatim from that campaign; goal $5,000, raised $0, 0 supporters,
  // closed on Givebutter. Image is GHI's own campaign cover from that page.
  { slug: 'manipur-relief', name: 'Manipur Crisis Relief', tagline: 'Emergency aid for displaced families in India', campaign: 'ghi-manipur-relief', image: `${IMG}/ghi-project-manipur-relief.webp`, kind: 'project', intro: [
      'Homes burned. Families displaced. People trapped, hungry, and sick. The crisis in Manipur, India is happening right now — and thousands of families need food, medicine, and shelter today.',
      'Global Hope India works through local partners already living and serving in the region, so that relief reaches families through people the community knows and trusts. Gifts to this fund are designated to that work, receipted and reported as such.',
    ] },
  { slug: 'ne-healthcare', name: 'North East Healthcare', tagline: 'Care for families driven from home by ethnic violence', campaign: 'ghi-ne-healthcare', image: 'https://cdn.sanity.io/images/r33r2z1j/production/a7047e93eb1370b0e8d473b2057cbd817a8f0755-1640x924.webp', kind: 'project', intro: [
      'Ethnic violence in North East India left a tribe fleeing for their lives, taking refuge in relief camps. The North East Healthcare Fund exists to meet the medical needs of those families — people who left home with nothing and now depend entirely on what relief reaches the camps.',
      'Global Hope India works through local partners already living and serving in the region, so that care arrives from people the community knows and trusts. Gifts to this fund are designated to that work, receipted and reported as such.',
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
      'a special school for mentally challenged',
      'Sustainable agricultural development and livelihood programs',
      'For more updates on Pastor Raja\'s untiring work in India, please visit https://globalhopeindia.org/impact/',
    ] },
  { slug: 'sekhar', name: 'Sekhar in India', tagline: 'A compassionate crusader for the poor, orphans, widows and lepers', campaign: 'ghi-sekhar', image: `${IMG}/ghi-partner-sekhar.webp`, kind: 'partner', intro: [
      'Pastor Sekhar is a long-term partner in India. His missionary work stands on three principles: Soap, Soup, and Salvation – taking care of the body and soul.',
      'Together with his wife (photo above), they regularly conduct personal house visits to share the Gospel, pray over sessions, and even host Gospel meetings in tribal communities. The ministry also conducts regular medical camps and feeding programs.',
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
      'The Shepherd’s House Ministry is being built as a church facility and home for Pastor C and his family (photo above) to further serve the neighboring communities in India.',
      'Before the building of this facility, Pastor C has been spreading God’s word to his family, friends, and neighbors by distributing Bibles and preaching the Gospel. As a missionary, his words and actions have transformed lives and people started accepting the love of Jesus.',
      'Raising funds for the construction is challenging enough, how much more if it is in the midst of ethnic wars, burning villages, and intense gunfire? Due to the threat to the lives of the workers, construction has been delayed. Adding to this, there is also a threat of loss of construction supplies and damage to the construction itself. Despite all these, Pastor C and the people of the community continue to rise with strong faith that God is with them building the Sheperd’s House piece by piece.',
      'Aside from the construction funds needed to build the Shepherd’s House, basic needs for missionary work such as transportation, food, blanket distribution, and utilities are also needed.',
      'Current funding needs:',
      '$850 per month - travel expenses and rentals for the mission, food, blankets, and emergency lights for distribution.',
      'For updates on the construction of the Shepherd\'s House, please visit globalhopeindia.org',
    ] },
];

export const partnerBySlug = (slug: string) => PARTNERS.find((p) => p.slug === slug);
