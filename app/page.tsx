export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Voice-to-Code Generator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}