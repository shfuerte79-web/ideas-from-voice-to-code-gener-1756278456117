import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '```json
[
  {
    "title": "Voice-Driven API Integration Tool",
    "description": "أداة تتيح للمستخدمين إنشاء تكاملات API باستخدام الأوامر الصوتية، مما يسهل على المطورين إضافة وظائف جديدة إلى تطبيقاتهم بسرعة.",
    "mvp_plan": "1. تطوير واجهة مستخدم بسيطة لتلقي الأوامر الصوتية. 2. استخدام مكتبة لتحويل الأوامر الصوتية إلى نص. 3. إنشاء نموذج أولي يترجم الأوامر إلى استدعاءات API. 4. اختبار الأداة مع بعض واجهات API الشائعة."
  },
  {
    "title": "Voice-Based Code Review Assistant",
    "description": "مساعد ذكي يقوم بمراجعة الكود بناءً على الأوامر الصوتية، مما يساعد المطورين على تحسين جودة الكود بشكل أسرع.",
    "mvp_plan": "1. بناء نموذج أولي يستخدم الذكاء الاصطناعي لتحليل الكود. 2. تطوير واجهة صوتية بسيطة لتلقي الأوامر. 3. دمج أدوات تحليل الكود الشائعة. 4. إجراء اختبارات مع مجموعة من المطورين."
  },
  {
    "title": "Voice Command Debugging Tool",
    "description": "أداة تتيح للمطورين استخدام الأوامر الصوتية لتحديد الأخطاء وإصلاحها في الكود، مما يسهل عملية تصحيح الأخطاء.",
    "mvp_plan": "1. تطوير واجهة مستخدم صوتية لتلقي أوامر التصحيح. 2. استخدام تقنيات الذكاء الاصطناعي لتحديد الأخطاء الشائعة. 3. بناء نموذج أولي يمكنه تقديم اقتراحات إصلاح بناءً على الأوامر الصوتية. 4. اختبار الأداة مع مجموعة من المطورين."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}