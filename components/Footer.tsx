"use client"

import { Mail, Phone, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">تیم توسعه وب</h3>
            <p className="text-muted-foreground leading-relaxed">
              ما با تخصص و تجربه، بهترین خدمات را در زمینه توسعه وب و آموزش برنامه‌نویسی ارائه می‌دهیم.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">خدمات</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>طراحی وبسایت</li>
              <li>آموزش برنامه‌نویسی</li>
              <li>مشاوره تخصصی</li>
              <li>پشتیبانی فنی</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">تماس با ما</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@webteam.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>021-12345678</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageSquare className="w-4 h-4" />
                <span>پشتیبانی آنلاین</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">© 2024 تیم توسعه وب. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
