import type { Lang } from './site'

export interface SampleCopy {
  hotel: {
    title: string
    description: string
    ogAlt: string
    banner: string
    back: string
    navOverview: string
    navStay: string
    navPlace: string
    kicker: string
    heroText: string
    overviewTitle: string
    overview: string
    stayTitle: string
    stayLead: string
    stayLabel: string
    placeTitle: string
    place: string
    missingTitle: string
    missingNote: string
    missingValue: string
    missing: string[]
  }
  shop: {
    title: string
    description: string
    ogAlt: string
    banner: string
    back: string
    kicker: string
    name: string
    hero: string
    productsTitle: string
    products: { name: string; text: string }[]
    priceNote: string
    orderTitle: string
    order: string
    orderButton: string
    noteTitle: string
    note: string
  }
  portfolio: {
    title: string
    description: string
    ogAlt: string
    banner: string
    back: string
    kicker: string
    name: string
    role: string
    intro: string
    workTitle: string
    projects: { title: string; text: string }[]
    contactTitle: string
    contact: string
    emailLabel: string
  }
}

const th = {
  hotel: {
    title: 'ผลงานตัวอย่าง: แลนดิ้งเพจ {hotel} | Tawan B.',
    description:
      'หน้าจำลองของ {hotel} โรงแรม {rooms} ห้อง ที่อำเภอ{district} จังหวัด{province} ไม่ใช่เว็บไซต์ทางการและไม่รับจองห้อง',
    ogAlt: 'ผลงานตัวอย่าง แลนดิ้งเพจ {hotel}',
    banner: 'ผลงานตัวอย่าง — หน้านี้เป็นแบบจำลอง ไม่ใช่เว็บไซต์ทางการของ {hotel}',
    back: 'กลับหน้าบริการของ Tawan B.',
    navOverview: 'ภาพรวม',
    navStay: 'ห้องพัก',
    navPlace: 'ที่ตั้ง',
    kicker: 'โรงแรม {rooms} ห้อง',
    heroText: '{hotel} ตั้งอยู่ที่อำเภอ{district} จังหวัด{province} {country} หน้านี้ไม่เปิดให้จองห้อง',
    overviewTitle: 'ภาพรวม',
    overview:
      'โรงแรม {rooms} ห้อง ในอำเภอ{district} จังหวัด{province} Tawan Boonma เจ้าของและ CEO เป็นผู้ดูแลระบบ PMS และงานไอทีของที่พัก หน้านี้เป็นตัวอย่างแลนดิ้งเพจ จึงยังไม่รับการจอง',
    stayTitle: 'ห้องพัก',
    stayLead: 'โรงแรมมี {rooms} ห้อง ช่องสี่เหลี่ยมด้านล่างมีเท่ากับจำนวนห้อง แต่หน้าตัวอย่างนี้ยังไม่มีประเภทห้องหรือราคาเข้าพัก',
    stayLabel: '{rooms} ห้อง',
    placeTitle: 'ที่ตั้ง',
    place: 'อำเภอ{district} จังหวัด{province} {country} ตัวอย่างนี้ยังไม่มีเลขที่อยู่',
    missingTitle: 'สิ่งที่ยังไม่ระบุ',
    missingNote: 'ในงานจริง ช่องเหล่านี้จะใส่ข้อมูลที่ลูกค้าส่งมาเท่านั้น ไม่เติมข้อมูลสมมติ',
    missingValue: 'ยังไม่ระบุ',
    missing: ['ประเภทห้อง', 'ราคาเข้าพัก', 'เบอร์โทร', 'เลขที่อยู่', 'ลิงก์จอง']
  },
  shop: {
    title: 'ผลงานตัวอย่าง: แลนดิ้งเพจร้านค้า | Tawan B.',
    description: 'หน้าจำลองสำหรับร้านค้าออนไลน์ขนาดเล็ก ชื่อร้าน สินค้า และราคาเป็นข้อมูลสมมติทั้งหมด',
    ogAlt: 'ผลงานตัวอย่าง แลนดิ้งเพจร้านค้า',
    banner: 'ผลงานตัวอย่าง — ร้าน สินค้า และราคาในหน้านี้เป็นข้อมูลจำลองทั้งหมด',
    back: 'กลับหน้าบริการของ Tawan B.',
    kicker: 'ร้านค้าออนไลน์ขนาดเล็ก',
    name: 'ร้านตัวอย่าง',
    hero: 'ตัวอย่างแลนดิ้งเพจสำหรับร้านเล็ก ไม่มีร้านนี้จริง และไม่มีระบบสั่งซื้อ',
    productsTitle: 'สินค้าตัวอย่าง',
    products: [
      { name: 'สินค้าตัวอย่าง 1', text: 'คำอธิบายสินค้าจะมาจากร้าน ในหน้านี้ยังไม่มีรายละเอียดจริง' },
      { name: 'สินค้าตัวอย่าง 2', text: 'คำอธิบายสินค้าจะมาจากร้าน ในหน้านี้ยังไม่มีรายละเอียดจริง' },
      { name: 'สินค้าตัวอย่าง 3', text: 'คำอธิบายสินค้าจะมาจากร้าน ในหน้านี้ยังไม่มีรายละเอียดจริง' }
    ],
    priceNote: 'ราคายังไม่กำหนด',
    orderTitle: 'การสั่งซื้อในตัวอย่าง',
    order: 'ปุ่มด้านล่างไม่ได้เชื่อมกับการชำระเงิน ไม่มีตะกร้าสินค้า และไม่มีที่อยู่จัดส่ง เพราะนี่ไม่ใช่ร้านจริง',
    orderButton: 'อ่านหมายเหตุตัวอย่าง',
    noteTitle: 'หมายเหตุ',
    note: 'งานจริงจะใส่ชื่อร้าน รูปสินค้า ราคา และช่องทางสั่งซื้อที่ลูกค้าให้มาเท่านั้น'
  },
  portfolio: {
    title: 'ผลงานตัวอย่าง: เว็บพอร์ตโฟลิโอ | Tawan B.',
    description: 'โครงหน้าพอร์ตโฟลิโอจำลอง ชื่อ ผลงาน และอีเมลในหน้านี้ไม่ใช่ของบุคคลจริง',
    ogAlt: 'ผลงานตัวอย่าง เว็บพอร์ตโฟลิโอ',
    banner: 'ผลงานตัวอย่าง — ชื่อ ผลงาน และช่องทางติดต่อในหน้านี้เป็นข้อมูลจำลองทั้งหมด',
    back: 'กลับหน้าบริการของ Tawan B.',
    kicker: 'โครงเว็บพอร์ตโฟลิโอ',
    name: 'ชื่อตัวอย่าง',
    role: 'ตัวอย่างอาชีพ',
    intro: 'หน้านี้เป็นโครงสำหรับแนะนำตัวและโชว์งาน ไม่ได้เป็นบุคคลจริง',
    workTitle: 'งานที่เลือกมาแสดง',
    projects: [
      { title: 'โปรเจกต์ตัวอย่าง 1', text: 'คำอธิบายสั้นจะมาจากเจ้าของผลงาน ตอนนี้เป็นข้อความจำลอง' },
      { title: 'โปรเจกต์ตัวอย่าง 2', text: 'คำอธิบายสั้นจะมาจากเจ้าของผลงาน ตอนนี้เป็นข้อความจำลอง' },
      { title: 'โปรเจกต์ตัวอย่าง 3', text: 'คำอธิบายสั้นจะมาจากเจ้าของผลงาน ตอนนี้เป็นข้อความจำลอง' }
    ],
    contactTitle: 'ติดต่อในตัวอย่าง',
    contact: 'อีเมลด้านล่างไม่ใช่กล่องจดหมายจริง งานจริงจะใส่ช่องทางที่เจ้าของเว็บให้มา',
    emailLabel: 'อีเมลตัวอย่าง'
  }
} satisfies SampleCopy

const en = {
  hotel: {
    title: 'Sample project: {hotel} landing page | Tawan B.',
    description:
      'A mock landing page for {hotel}, a {rooms}-room hotel in {district}, {province}. Not the official site, and it does not take bookings.',
    ogAlt: 'Sample project: {hotel} landing page',
    banner: 'Sample project — this page is a mockup, not the official website of {hotel}',
    back: 'Back to Tawan B.’s services',
    navOverview: 'Overview',
    navStay: 'Rooms',
    navPlace: 'Location',
    kicker: 'A {rooms}-room hotel',
    heroText: '{hotel} is in {district}, {province}, {country}. This page does not take bookings.',
    overviewTitle: 'Overview',
    overview:
      'A {rooms}-room hotel in {district}, {province}, {country}. Tawan Boonma, the owner and CEO, leads the hotel’s custom property-management system and IT work. This sample landing page does not take bookings.',
    stayTitle: 'Rooms',
    stayLead: 'The hotel has {rooms} rooms. The squares below match that count. This sample does not list room types or rates.',
    stayLabel: '{rooms} rooms',
    placeTitle: 'Location',
    place: '{district}, {province}, {country}. This sample does not include a street address.',
    missingTitle: 'Not specified in this sample',
    missingNote: 'On a real project these fields are filled only with details the client provides. They are not invented.',
    missingValue: 'Not specified',
    missing: ['Room types', 'Nightly rate', 'Phone number', 'Street address', 'Booking link']
  },
  shop: {
    title: 'Sample project: online-shop landing page | Tawan B.',
    description: 'A mock landing page for a small online shop. The shop name, products, and prices are entirely fictional.',
    ogAlt: 'Sample project: online-shop landing page',
    banner: 'Sample project — the shop, products, and prices on this page are entirely made up',
    back: 'Back to Tawan B.’s services',
    kicker: 'Small online shop',
    name: 'Sample Shop',
    hero: 'A sample landing page for a small shop. This shop is not a real business, and there is no checkout.',
    productsTitle: 'Sample products',
    products: [
      { name: 'Sample product 1', text: 'A real shop would write this description. There is no real detail here.' },
      { name: 'Sample product 2', text: 'A real shop would write this description. There is no real detail here.' },
      { name: 'Sample product 3', text: 'A real shop would write this description. There is no real detail here.' }
    ],
    priceNote: 'Price TBD',
    orderTitle: 'Ordering on this sample',
    order: 'The button below is not connected to a payment, a cart, or a shipping address, because this is not a real shop.',
    orderButton: 'Read the sample note',
    noteTitle: 'Note',
    note: 'A real project would use only the shop name, photos, prices, and order links the client provides.'
  },
  portfolio: {
    title: 'Sample project: portfolio website | Tawan B.',
    description: 'A mock portfolio layout. The name, the projects, and the email on this page are not a real person.',
    ogAlt: 'Sample project: portfolio website',
    banner: 'Sample project — the name, the work, and the contact details on this page are entirely made up',
    back: 'Back to Tawan B.’s services',
    kicker: 'Portfolio layout',
    name: 'Sample Name',
    role: 'Sample role',
    intro: 'This is a layout for an introduction and selected work. It is not a real person.',
    workTitle: 'Selected work',
    projects: [
      { title: 'Sample project 1', text: 'A short description would come from the person. This line is a placeholder.' },
      { title: 'Sample project 2', text: 'A short description would come from the person. This line is a placeholder.' },
      { title: 'Sample project 3', text: 'A short description would come from the person. This line is a placeholder.' }
    ],
    contactTitle: 'Contact on this sample',
    contact: 'The email below is not a real inbox. A real site would use the contact the owner provides.',
    emailLabel: 'Sample email'
  }
} satisfies SampleCopy

export const samples: Record<Lang, SampleCopy> = { th, en }
