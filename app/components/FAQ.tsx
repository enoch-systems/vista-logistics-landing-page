"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"                   

export default function FAQ() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-indigo-900">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What if i don't know anything about importing?</AccordionTrigger>
            <AccordionContent>
             That's fine — this course is designed for beginners. We walk you through every step. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How soon will i start seeing profits?</AccordionTrigger>
            <AccordionContent>
            Many students make their first profit within 4‑6 weeks if they follow the steps. It depends on effort & how fast you act. That's why we advice you register today. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>is ₦10,000 really all i need?</AccordionTrigger>
            <AccordionContent>
              Yes — that's the enrollment fee. The ₦20,000 bonus (if you are among first 20) will help you start the actual importation. Any extra costs (shipping, customs, etc.) will depend on product & quantity, but we teach you how to manage them. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do i claim the  ₦20,000 if i register now?</AccordionTrigger>
            <AccordionContent>
             Immediately after registering with ₦10,000 you will join the masterclass then create an Alipay account linked to your 1688 account, the ₦20,000 will be credited instantly and automatically to your Alipay account details to enable you start importing goods immediately as part of your first practical. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What happens after i enroll?</AccordionTrigger>
            <AccordionContent>
              You get access to online materials, join the student community, get live support, and you can start implementing immediately. 
            </AccordionContent>
          </AccordionItem>
         
        </Accordion>
      </div>
      <footer className="mt-16 text-center text-sm text-blue-400">
        © 2026 Vista Express Logistics
      </footer>
    </section>
  )
}
