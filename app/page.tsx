"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card } from "@/components/ui/card"

const formSchema = z.object({
  title: z.string().min(1, { message: "링크 제목을 입력해주세요." }),
  url: z.string()
    .min(1, { message: "URL을 입력해주세요." })
    .regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/, { message: "유효한 URL 형식이 아닙니다." })
})

type FormValues = z.infer<typeof formSchema>
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { dummyLinks, LinkItem } from "@/data/links"
import Link from "next/link"
import { Plus } from "lucide-react"
import { doc, setDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
export default function Page() {
  const [links, setLinks] = useState<LinkItem[]>(dummyLinks)
  const [open, setOpen] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      url: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    let finalUrl = data.url.trim()
    if (!finalUrl.startsWith("http://") && !finalUrl.startsWith("https://")) {
      finalUrl = `https://${finalUrl}`
    }

    // 간단한 도메인 추출 (favicon api용)
    let domain = ""
    try {
      const parsed = new URL(finalUrl)
      domain = parsed.hostname
    } catch (err) {
      domain = finalUrl.replace("https://", "").split("/")[0]
    }

    const newLink: LinkItem = {
      id: Date.now().toString(),
      title: data.title.trim(),
      url: finalUrl,
      faviconUrl: `https://s2.googleusercontent.com/s2/favicons?domain=${domain}`,
      clickCount: 0,
      createdAt: new Date().toISOString(),
    }

    try {
      // Firestore에 문서 저장 (경로: users/anonymous/links/{id})
      const linkRef = doc(db, "users", "anonymous", "links", newLink.id)
      await setDoc(linkRef, newLink)

      setLinks([newLink, ...links])
      
      // 리셋
      form.reset()
      setOpen(false)
    } catch (error) {
      console.error("Error adding document: ", error)
      // 필요 시 에러 처리 (예: Toast 알림)
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center bg-slate-50 dark:bg-slate-950 p-6 sm:py-16 overflow-hidden font-sans">
      <div className="flex w-full max-w-md flex-col gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm ring-4 ring-white dark:ring-slate-800 z-10 overflow-hidden">
              {/* Dummy avatar */}
              <img src="https://api.dicebear.com/7.x/micah/svg?seed=Jihoon&backgroundColor=f0f9ff" alt="avatar" className="w-full h-full object-cover" />
            </div>
            {/* Subtle shadow ring */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.1)] -z-10"></div>
          </div>
          <div className="text-center space-y-1 mt-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">지훈</h1>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-3 whitespace-pre-line">
              {"디지털 명함, 모든 링크를 한 곳에."}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center w-full mt-4">
          <Dialog open={open} onOpenChange={(isOpen) => {
            setOpen(isOpen);
            if (!isOpen) form.reset();
          }}>
            <DialogTrigger render={<Button className="w-full rounded-sm shadow-md hover:shadow-lg transition-all duration-300 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium px-6 py-6 text-base tracking-wide" />}>
                <Plus className="mr-2 h-5 w-5" />
                새로운 링크 추가하기
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-2xl w-[95vw] border-0 shadow-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">새로운 링크 추가하기</DialogTitle>
                <DialogDescription>
                  추가할 링크의 제목과 URL을 입력해주세요.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="font-semibold text-slate-700 dark:text-slate-300">링크 제목</Label>
                  <Input
                    id="title"
                    placeholder="예: Instagram"
                    {...form.register("title")}
                    className="rounded-xl h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus-visible:ring-primary/50"
                  />
                  {form.formState.errors.title && (
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                      {form.formState.errors.title.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url" className="font-semibold text-slate-700 dark:text-slate-300">URL (웹 주소)</Label>
                  <Input
                    id="url"
                    placeholder="예: instagram.com/caesiumy"
                    {...form.register("url")}
                    className="rounded-xl h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus-visible:ring-primary/50"
                  />
                  {form.formState.errors.url && (
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                      {form.formState.errors.url.message}
                    </p>
                  )}
                </div>
                <DialogFooter className="pt-4 flex-col sm:flex-row gap-3">
                  <Button type="button" variant="outline" onClick={() => { setOpen(false); form.reset(); }} className="rounded-xl h-12 w-full sm:w-auto">
                    취소
                  </Button>
                  <Button type="submit" className="rounded-xl h-12 font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto bg-[#3b82f6] hover:bg-[#2563eb] text-white">
                    저장하기
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Link List */}
        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <Card className="relative flex items-center p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer border border-slate-200 dark:border-slate-800 rounded-sm bg-white dark:bg-slate-900 shadow-sm group">
                <div className="absolute left-4">
                  {link.faviconUrl ? (
                    <img
                      src={link.faviconUrl}
                      alt={`${link.title} icon`}
                      className="h-8 w-8 rounded-full object-contain"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex-shrink-0" />
                  )}
                </div>
                <span className="w-full text-center font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#3b82f6] transition-colors duration-200">
                  {link.title}
                </span>
              </Card>
            </Link>
          ))}
          {links.length === 0 && (
            <div className="text-center p-8 text-slate-500 delay-500 animate-in fade-in">
              등록된 링크가 없습니다.
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="mt-8 mb-4 text-center animate-in fade-in duration-1000 fill-mode-both" style={{ animationDelay: `${(links.length + 1) * 150 + 300}ms` }}>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider">POWERED BY MYLINK</p>
        </div>
      </div>
    </div>
  )
}
