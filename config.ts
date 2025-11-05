export const PROFILE_NAME = 'خباب سيف الدين يوسف طه'
export const BIO = 'طالب هندسة شبكات ومهتم في الذكاء الاصطناعي التوليدي و n8n'
export const INTRO = '💬 متحمس للتقنية وهندسة الشبكات، أسعى أدمج بين الذكاء الصناعي والبنية التحتية الرقمية عشان أقدّم حلول ذكية ترفع من كفاءة الأعمال.'
// ضع مسار صورتك داخل مجلد public ثم عرّف المسار هنا مثل '/avatar.jpg'
export const AVATAR: string | null = 'https://www2.0zz0.com/2025/11/04/20/857927636.png'
export const EMAIL = 'you@example.com'
// مثال: 9665XXXXXXXX بدون +
export const WHATSAPP = '9665XXXXXXXX'

export type Certificate = { title: string; image?: string }
export const CERTIFICATES: Certificate[] = [
  { title: 'Google IT Support', image: 'https://www2.0zz0.com/2025/11/04/21/939240743.png' },
  { title: 'شهادة 2', image: 'https://www2.0zz0.com/2025/11/04/21/927985155.png' },
  { title: 'شهادة 3', image: 'https://www2.0zz0.com/2025/11/04/22/152559476.png' },
  { title: 'شهادة 4', image: 'https://up6.cc/2025/10/176229388992341.png' },
  { title: 'شهادة 5', image: 'https://www2.0zz0.com/2025/11/04/22/654161576.png' },
]

export type Project = {
  title: string
  description: string
  link?: string
  github?: string
  image?: string
  tags?: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'وكيل ذكاء صناعي صوتي',
    description: 'وكيل صوتي بالذكاء الاصطناعي يتحدث بجميع اللهجات بدقة عالية',
    image: 'https://www2.0zz0.com/2025/11/05/09/437864315.png',
    tags: ['AI', 'Voice', 'Arabic'],
  },
  {
    title: 'صَميم',
    description: 'مشروع وكالة (Agency) نقدّم خدمات رقمية، وخدمات الذكاء الاصطناعي، وحلولاً مخصّصة للشركات',
    image: 'https://www2.0zz0.com/2025/11/04/19/222002206.png',
    link: 'https://samem-sd.netlify.app/',
  },
  {
    title: 'نظام محكم لإدارة المهام',
    description: 'منصة لإدارة المهام مع واجهة حديثة وروابط عامة للتجربة',
    link: 'https://mohkam-44w9r.kinsta.page/',
    image: 'https://www2.0zz0.com/2025/11/04/19/701831049.png',
    tags: ['Tasks', 'Management', 'Web'],
  },
  {
    title: 'مشروع عافيتي',
    description: 'قريباً — جاري الإنشاء',
    image: 'https://www2.0zz0.com/2025/11/04/19/110780379.png',
    tags: ['Soon'],
  }
]
