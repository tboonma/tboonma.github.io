import type { Lang, PackageId, SampleId, SocialId } from './site'

export interface NavItem {
  id: string
  href: string
  label: string
}

export interface Copy {
  meta: { title: string; description: string; ogAlt: string }
  skip: string
  langLabel: string
  langTh: string
  langEn: string
  menuOpen: string
  menuClose: string
  primaryCta: string
  navLabel: string
  nav: NavItem[]
  hero: {
    eyebrow: string
    title: string
    lede: string
    support: string
    secondaryCta: string
    photoAlt: string
  }
  facts: { k: string; v: string }[]
  services: {
    eyebrow: string
    title: string
    intro: string
    items: { id: PackageId; title: string; text: string; points: string[] }[]
  }
  packages: {
    eyebrow: string
    title: string
    intro: string
    priceNote: string
    includesLabel: string
    note: string
    items: { id: PackageId; title: string; audience: string; includes: string[] }[]
  }
  showcase: {
    eyebrow: string
    title: string
    intro: string
    badge: string
    view: string
    items: { id: SampleId; title: string; text: string }[]
  }
  process: {
    eyebrow: string
    title: string
    intro: string
    steps: { title: string; text: string }[]
  }
  faq: {
    eyebrow: string
    title: string
    items: { q: string; a: string }[]
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    items: { title: string; meta: string; text: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    text: string
    emailLabel: string
    fastworkLabel: string
    socialLabel: string
  }
  social: Record<SocialId, string>
  newTab: string
  footer: { navLabel: string; blurb: string }
  notFound: { title: string; text: string; home: string }
}

const th = {
  meta: {
    title: 'Tawan B. | รับทำแลนดิ้งเพจและเว็บพอร์ตโฟลิโอ',
    description:
      'Tawan Boonma รับทำแลนดิ้งเพจและเว็บพอร์ตโฟลิโอผ่าน Fastwork เจ้าของและ CEO ของ THE iKON APARTMENT โรงแรม 36 ห้อง ที่พัฒนานิคม ลพบุรี',
    ogAlt: 'Tawan B. รับทำแลนดิ้งเพจและเว็บพอร์ตโฟลิโอ'
  },
  skip: 'ข้ามไปยังเนื้อหา',
  langLabel: 'ภาษา',
  langTh: 'ไทย',
  langEn: 'EN',
  menuOpen: 'เปิดเมนู',
  menuClose: 'ปิดเมนู',
  primaryCta: 'จ้างฉันบน Fastwork',
  navLabel: 'ส่วนของหน้า',
  nav: [
    { id: 'services', href: '#services', label: 'บริการ' },
    { id: 'packages', href: '#packages', label: 'ราคา' },
    { id: 'showcase', href: '#showcase', label: 'ตัวอย่างงาน' },
    { id: 'process', href: '#process', label: 'ขั้นตอน' },
    { id: 'faq', href: '#faq', label: 'คำถาม' },
    { id: 'about', href: '#about', label: 'เกี่ยวกับ' },
    { id: 'contact', href: '#contact', label: 'ติดต่อ' }
  ],
  hero: {
    eyebrow: 'Tawan B. · Tawan Boonma',
    title: 'รับทำแลนดิ้งเพจและเว็บพอร์ตโฟลิโอ',
    lede: 'เจ้าของและ CEO ของ {hotel} โรงแรม {rooms} ห้อง ในอำเภอ{district} จังหวัด{province}',
    support:
      'เป็นผู้ดูแลระบบ PMS (ระบบจัดการโรงแรม) ที่ทำขึ้นเฉพาะสำหรับที่พักนี้ รวมถึงงานไอที และรับทำแลนดิ้งเพจกับเว็บพอร์ตโฟลิโอผ่าน Fastwork',
    secondaryCta: 'ติดต่อทางอีเมล',
    photoAlt: 'ภาพ Tawan Boonma สวมเสื้อเชิ้ตขาวและเนคไทสีเข้ม ยืนกลางแจ้ง'
  },
  facts: [
    { k: 'โรงแรม', v: '{hotel}' },
    { k: 'ขนาดและที่ตั้ง', v: '{rooms} ห้อง · {district} {province}' },
    { k: 'งานที่ดูแล', v: 'PMS และไอทีของโรงแรม' }
  ],
  services: {
    eyebrow: 'บริการ',
    title: 'สองแบบที่รับทำ',
    intro: 'รับแลนดิ้งเพจหน้าเดียว และเว็บพอร์ตโฟลิโอ ขอบเขตสุดท้ายคุยกันบน Fastwork',
    items: [
      {
        id: 'landing',
        title: 'แลนดิ้งเพจ',
        text: 'หน้าเดียวสำหรับแนะนำธุรกิจ สิ่งที่มี และทางติดต่อ เหมาะกับโรงแรม ร้านค้า หรือสตูดิโอที่ต้องการหน้าเว็บตรงไปตรงมา',
        points: [
          'โครงหน้าสำหรับเล่าว่าธุรกิจทำอะไร',
          'จุดให้ติดต่อหรือลิงก์ที่คุณส่งมา',
          'ที่วางรูปและข้อความของคุณ',
          'ภาษาไทย ภาษาอังกฤษ หรือทั้งคู่ ตามข้อความที่คุณส่งมา'
        ]
      },
      {
        id: 'portfolio',
        title: 'เว็บพอร์ตโฟลิโอ',
        text: 'เว็บแนะนำตัว มีส่วนผลงานและช่องทางติดต่อ เหมาะกับฟรีแลนซ์หรือผู้เชี่ยวชาญที่ต้องโชว์งาน',
        points: [
          'ส่วนแนะนำตัว ผลงาน และติดต่อ',
          'ที่สำหรับงานที่คุณเลือกมาแสดง',
          'เลย์เอาต์สำหรับมือถือและจอใหญ่',
          'ภาษาไทย ภาษาอังกฤษ หรือทั้งคู่ ตามข้อความที่คุณส่งมา'
        ]
      }
    ]
  },
  packages: {
    eyebrow: 'แพ็กเกจและราคา',
    title: 'จุดเริ่มต้นสองแบบ',
    intro: 'ตัวเลขด้านล่างเป็นที่ว่างสำหรับราคา ราคายืนยันบน Fastwork หลังจากสรุปขอบเขตงาน',
    priceNote: 'ราคายังไม่กำหนด',
    includesLabel: 'ขอบเขตตั้งต้น',
    note: 'โดเมน โฮสติ้ง การถ่ายรูป และการเขียนข้อความใหม่ ไม่ได้อยู่ในรายการนี้ ถ้าต้องการ ให้คุยรวมในขอบเขตงาน',
    items: [
      {
        id: 'landing',
        title: 'แลนดิ้งเพจ',
        audience: 'สำหรับธุรกิจที่ต้องการหน้าเดียว',
        includes: [
          'หน้าเว็บหน้าเดียว',
          'เลย์เอาต์สำหรับมือถือและจอใหญ่',
          'ชื่อหน้าและคำอธิบายเบื้องต้น',
          'ลิงก์ติดต่อตามที่คุณให้มา'
        ]
      },
      {
        id: 'portfolio',
        title: 'เว็บพอร์ตโฟลิโอ',
        audience: 'สำหรับคนที่ต้องแนะนำตัวและโชว์งาน',
        includes: [
          'หน้าแนะนำตัว ส่วนผลงาน และส่วนติดต่อ',
          'เลย์เอาต์สำหรับมือถือและจอใหญ่',
          'ชื่อหน้าและคำอธิบายเบื้องต้น',
          'ลิงก์ติดต่อตามที่คุณให้มา'
        ]
      }
    ]
  },
  showcase: {
    eyebrow: 'ตัวอย่างงาน',
    title: 'สามหน้าจำลอง',
    intro:
      'ทั้งสามชิ้นเป็นผลงานตัวอย่างที่ทำขึ้นเพื่อให้เห็นแนวทาง ไม่ใช่เว็บของลูกค้า และไม่ใช่เว็บที่ส่งมอบแล้ว',
    badge: 'ผลงานตัวอย่าง',
    view: 'ดูหน้าตัวอย่าง',
    items: [
      {
        id: 'ikon',
        title: 'แลนดิ้งเพจโรงแรม {hotel}',
        text: 'หน้าแนะนำโรงแรม {rooms} ห้อง ที่อำเภอ{district} จังหวัด{province} ใช้เฉพาะข้อเท็จจริงที่มีอยู่ ส่วนที่ยังไม่มีจะเว้นไว้'
      },
      {
        id: 'shop',
        title: 'แลนดิ้งเพจร้านค้าออนไลน์',
        text: 'หน้าตัวอย่างสำหรับร้านเล็ก ชื่อร้าน สินค้า และราคาเป็นข้อมูลจำลองทั้งหน้า'
      },
      {
        id: 'portfolio',
        title: 'เว็บพอร์ตโฟลิโอส่วนตัว',
        text: 'โครงหน้าแนะนำตัวและผลงาน ชื่อและผลงานในหน้านี้เป็นข้อมูลจำลอง'
      }
    ]
  },
  process: {
    eyebrow: 'ขั้นตอน',
    title: 'จากคุยงานถึงส่งเว็บ',
    intro: 'สี่ขั้นนี้เป็นวิธีทำงาน จำนวนวันไม่ได้กำหนดไว้ล่วงหน้า',
    steps: [
      {
        title: 'คุยงาน',
        text: 'เล่าว่าเป็นธุรกิจอะไร และต้องการแลนดิ้งเพจหรือเว็บพอร์ตโฟลิโอ'
      },
      {
        title: 'สรุปขอบเขต',
        text: 'ตกลงจำนวนหน้า ภาษา และเนื้อหาที่คุณจะส่งมา ราคาอยู่ในขั้นนี้'
      },
      {
        title: 'ลงมือทำ',
        text: 'จัดหน้าและสร้างเว็บตามเนื้อหาที่คุณส่งมา'
      },
      {
        title: 'ส่งงาน',
        text: 'คุณตรวจหน้าเว็บ แล้วรับงานตามที่ตกลงกันไว้'
      }
    ]
  },
  faq: {
    eyebrow: 'คำถาม',
    title: 'คำถามที่พบบ่อย',
    items: [
      {
        q: 'รับทำเว็บแบบไหน?',
        a: 'ตอนนี้รับสองแบบ คือแลนดิ้งเพจหน้าเดียว และเว็บพอร์ตโฟลิโอ'
      },
      {
        q: 'ราคาเท่าไหร่?',
        a: 'ยังไม่มีตัวเลขจริงบนหน้านี้ ราคาที่เห็นอย่าง {priceLanding} เป็นที่ว่าง ราคาของแต่ละงานยืนยันบน Fastwork หลังจากสรุปขอบเขต'
      },
      {
        q: 'ตัวอย่างงานเป็นของลูกค้าจริงไหม?',
        a: 'ไม่ใช่ ทั้งสามหน้าเป็นผลงานตัวอย่าง หน้า {hotel} ใช้ชื่อ จำนวนห้อง และที่ตั้งจริงของโรงแรม ซึ่งเป็นของผู้รับงานเอง แต่ไม่ใช่เว็บทางการของโรงแรม อีกสองหน้าเป็นข้อมูลสมมติทั้งหมด'
      },
      {
        q: 'ทำได้ทั้งภาษาไทยและอังกฤษไหม?',
        a: 'ได้ เมื่อคุณส่งข้อความของแต่ละภาษาที่จะขึ้นบนเว็บ'
      },
      {
        q: 'ต้องเตรียมอะไรบ้าง?',
        a: 'ชื่อธุรกิจ เรื่องที่อยากให้หน้าเว็บเล่า และรูปถ่ายถ้ามี ถ้ายังไม่มีรูป จะเว้นที่สำหรับรูปไว้ ไม่ใส่รูปสมมติให้ดูเหมือนของจริง'
      },
      {
        q: 'เริ่มอย่างไร?',
        a: 'กด «จ้างฉันบน Fastwork» หรือส่งอีเมลมาที่ {email}'
      }
    ]
  },
  about: {
    eyebrow: 'เกี่ยวกับ',
    title: 'เกี่ยวกับ Tawan',
    intro: 'งานหลักตอนนี้คือโรงแรมของตัวเอง และงานเว็บที่รับบน Fastwork',
    items: [
      {
        title: '{hotel}',
        meta: 'เจ้าของและ CEO · {district} {province}',
        text: 'โรงแรม {rooms} ห้อง เป็นผู้ดูแลระบบ PMS ที่ทำขึ้นเฉพาะสำหรับโรงแรม และงานไอทีของที่พัก'
      },
      {
        title: 'Agoda',
        meta: 'ฝึกงานวิศวกรซอฟต์แวร์ฟูลสแตก · กรุงเทพฯ · มิ.ย.–ก.ค. 2022',
        text: 'ทำเครื่องมือภายในด้าน .NET profiling รวมถึงแพ็กเกจสำหรับวินิจฉัยบริการอื่น และแอปสำหรับสั่งให้บริการเหล่านั้นเก็บข้อมูลโปรเซส'
      },
      {
        title: 'Agoda',
        meta: 'ฝึกงานพาร์ตไทม์ วิศวกรซอฟต์แวร์ฟูลสแตก · กรุงเทพฯ · ส.ค.–ธ.ค. 2022',
        text: 'ทำงานกับผลิตภัณฑ์ Agoda Homes ทั้งโปรโมชันรายสัปดาห์และรายเดือน การแจ้งเตือนโฮสต์เรื่องการจองแบบ Booking On Request และการข้ามขั้นตอนโปรไฟล์ถ้าโฮสต์มีข้อมูลครบ'
      },
      {
        title: 'มหาวิทยาลัยเกษตรศาสตร์',
        meta: 'Software and Knowledge Engineering',
        text: 'เคยศึกษาหลักสูตร Software and Knowledge Engineering ที่มหาวิทยาลัยเกษตรศาสตร์'
      }
    ]
  },
  contact: {
    eyebrow: 'ติดต่อ',
    title: 'เริ่มงานได้จากที่นี่',
    text: 'จ้างผ่าน Fastwork หรือส่งอีเมลมาได้เลย ช่องทางโซเชียลด้านล่างเป็นบัญชีที่มีอยู่แล้ว',
    emailLabel: 'อีเมล',
    fastworkLabel: 'Fastwork',
    socialLabel: 'โซเชียล'
  },
  social: {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter'
  },
  newTab: 'เปิดในแท็บใหม่',
  footer: {
    navLabel: 'ท้ายหน้า',
    blurb: 'แลนดิ้งเพจและเว็บพอร์ตโฟลิโอ'
  },
  notFound: {
    title: 'ไม่พบหน้านี้',
    text: 'หน้าที่ขอไว้ไม่มีอยู่',
    home: 'ไปหน้าแรก'
  }
} satisfies Copy

const en = {
  meta: {
    title: 'Tawan B. | Landing pages and portfolio websites',
    description:
      'Tawan Boonma builds landing pages and portfolio websites on Fastwork. Owner and CEO of THE iKON APARTMENT, a 36-room hotel in Phattha Nikhom, Lopburi.',
    ogAlt: 'Tawan B. — landing pages and portfolio websites'
  },
  skip: 'Skip to content',
  langLabel: 'Language',
  langTh: 'ไทย',
  langEn: 'EN',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  primaryCta: 'Hire me on Fastwork',
  navLabel: 'On this page',
  nav: [
    { id: 'services', href: '#services', label: 'Services' },
    { id: 'packages', href: '#packages', label: 'Pricing' },
    { id: 'showcase', href: '#showcase', label: 'Samples' },
    { id: 'process', href: '#process', label: 'Process' },
    { id: 'faq', href: '#faq', label: 'FAQ' },
    { id: 'about', href: '#about', label: 'About' },
    { id: 'contact', href: '#contact', label: 'Contact' }
  ],
  hero: {
    eyebrow: 'Tawan B. · Tawan Boonma',
    title: 'Landing pages and portfolio websites',
    lede: 'Owner and CEO of {hotel}, a {rooms}-room hotel in {district}, {province}, {country}.',
    support:
      "He leads the hotel's custom property-management system (PMS) and IT work, and he builds landing pages and portfolio websites on Fastwork.",
    secondaryCta: 'Email me',
    photoAlt: 'Tawan Boonma outdoors, wearing a white shirt and a dark tie'
  },
  facts: [
    { k: 'Hotel', v: '{hotel}' },
    { k: 'Size and place', v: '{rooms} rooms · {district}, {province}' },
    { k: 'What he leads', v: 'Custom PMS and IT' }
  ],
  services: {
    eyebrow: 'Services',
    title: 'Two kinds of sites',
    intro: 'A one-page landing page, or a portfolio website. The final scope is agreed on Fastwork.',
    items: [
      {
        id: 'landing',
        title: 'Landing page',
        text: 'A single page that introduces a business, what it offers, and how to get in touch. A direct fit for a hotel, a shop, or a studio.',
        points: [
          'A structure that says what the business does',
          'A contact point or a link you provide',
          'Room for your own photos and words',
          'Thai, English, or both, using the wording you send'
        ]
      },
      {
        id: 'portfolio',
        title: 'Portfolio website',
        text: 'A personal site with an introduction, selected work, and a way to get in touch. A fit for freelancers and specialists who need to show work.',
        points: [
          'Introduction, selected work, and contact',
          'Space for the projects you choose to show',
          'A layout for phones and larger screens',
          'Thai, English, or both, using the wording you send'
        ]
      }
    ]
  },
  packages: {
    eyebrow: 'Packages and pricing',
    title: 'Two starting points',
    intro: 'The figures below are placeholders. The price is confirmed on Fastwork after the scope is agreed.',
    priceNote: 'Price TBD',
    includesLabel: 'Starting scope',
    note: 'A domain, hosting, photography, and newly written copy are not in this list. If you need them, say so when the scope is agreed.',
    items: [
      {
        id: 'landing',
        title: 'Landing page',
        audience: 'For a business that needs a single page',
        includes: [
          'One single-page website',
          'A layout for phones and larger screens',
          'A basic page title and description',
          'Contact links you provide'
        ]
      },
      {
        id: 'portfolio',
        title: 'Portfolio website',
        audience: 'For an introduction and selected work',
        includes: [
          'An introduction, selected work, and contact',
          'A layout for phones and larger screens',
          'A basic page title and description',
          'Contact links you provide'
        ]
      }
    ]
  },
  showcase: {
    eyebrow: 'Samples',
    title: 'Three mock pages',
    intro: 'These three pages are samples made to show the approach. They are not client websites, and they are not delivered projects.',
    badge: 'Sample project',
    view: 'View the sample',
    items: [
      {
        id: 'ikon',
        title: '{hotel} hotel landing page',
        text: 'A page for the {rooms}-room hotel in {district}, {province}. It uses only facts that are already known. Anything unknown is left blank.'
      },
      {
        id: 'shop',
        title: 'Small online-shop landing page',
        text: 'A sample for a small shop. The shop name, products, and prices are entirely made up.'
      },
      {
        id: 'portfolio',
        title: 'Personal portfolio',
        text: 'A layout for an introduction and selected work. The name and the projects on that page are made up.'
      }
    ]
  },
  process: {
    eyebrow: 'Process',
    title: 'From the first conversation to handoff',
    intro: 'These four steps are how a project runs. The number of days is not fixed in advance.',
    steps: [
      {
        title: 'Talk',
        text: 'You describe the business and whether you need a landing page or a portfolio site.'
      },
      {
        title: 'Agree the scope',
        text: 'We agree the pages, the languages, and the content you will send. The price is set in this step.'
      },
      {
        title: 'Build',
        text: 'The page is laid out and built from the content you provided.'
      },
      {
        title: 'Hand off',
        text: 'You review the page, then receive the work that was agreed.'
      }
    ]
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Common questions',
    items: [
      {
        q: 'What do you make?',
        a: 'Two kinds of sites right now: a one-page landing page, and a portfolio website.'
      },
      {
        q: 'How much does it cost?',
        a: 'There is no real figure on this page yet. A price such as {priceLanding} is a placeholder. Each project is priced on Fastwork after the scope is agreed.'
      },
      {
        q: 'Are the samples real client work?',
        a: 'No. All three are sample projects. The {hotel} page uses the real name, room count, and location of the hotel he owns, but it is not the hotel’s official website. The shop and the portfolio page are entirely fictional.'
      },
      {
        q: 'Can a site be in Thai and English?',
        a: 'Yes. A page can be Thai, English, or both, using the wording you provide for each language.'
      },
      {
        q: 'What do you need from me?',
        a: 'The business name, what the page should say, and photos if you have them. If there are no photos yet, the layout leaves room for them instead of using pretend pictures.'
      },
      {
        q: 'How do we start?',
        a: 'Use “Hire me on Fastwork”, or email {email}.'
      }
    ]
  },
  about: {
    eyebrow: 'About',
    title: 'About Tawan',
    intro: 'His current work is his own hotel, plus the websites he takes on Fastwork.',
    items: [
      {
        title: '{hotel}',
        meta: 'Owner and CEO · {district}, {province}',
        text: 'A {rooms}-room hotel. He leads its custom property-management system (PMS) and its IT work.'
      },
      {
        title: 'Agoda',
        meta: 'Full-stack software engineer, internship · Bangkok · June–July 2022',
        text: 'Built internal .NET profiling tools, including a diagnostic package for other services and an app that asked those services to capture processes.'
      },
      {
        title: 'Agoda',
        meta: 'Full-stack software engineer, part-time internship · Bangkok · August–December 2022',
        text: 'Worked on the Agoda Homes product: weekly and monthly promotions, host notifications for Booking On Request, and skipping the profile step when a host’s details were already complete.'
      },
      {
        title: 'Kasetsart University',
        meta: 'Software and Knowledge Engineering',
        text: 'Studied Software and Knowledge Engineering at Kasetsart University.'
      }
    ]
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start here',
    text: 'Hire through Fastwork, or send an email. The social accounts below are the ones already on this site.',
    emailLabel: 'Email',
    fastworkLabel: 'Fastwork',
    socialLabel: 'Social'
  },
  social: {
    linkedin: 'LinkedIn',
    github: 'GitHub',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter'
  },
  newTab: 'opens in a new tab',
  footer: {
    navLabel: 'Footer',
    blurb: 'Landing pages and portfolio websites'
  },
  notFound: {
    title: 'Page not found',
    text: 'That page does not exist.',
    home: 'Go to the home page'
  }
} satisfies Copy

export const copy: Record<Lang, Copy> = { th, en }
