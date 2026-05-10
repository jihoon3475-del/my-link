"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
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

export default function Page() {
  const [links, setLinks] = useState<LinkItem[]>(dummyLinks)
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !url.trim()) {
      alert("제목과 URL을 모두 입력해주세요.")
      return
    }

    let finalUrl = url.trim()
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
      title: title.trim(),
      url: finalUrl,
      faviconUrl: `https://s2.googleusercontent.com/s2/favicons?domain=${domain}`,
      clickCount: 0,
      createdAt: new Date().toISOString(),
    }

    setLinks([newLink, ...links])
    
    // 리셋
    setTitle("")
    setUrl("")
    setOpen(false)
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 p-6 sm:py-16 overflow-hidden">
      <div className="flex w-full max-w-md flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
        {/* Action Buttons (Top) */}
        <div className="flex justify-center w-full sm:absolute sm:top-0 sm:right-[-4rem] sm:w-auto sm:justify-end z-50 mt-[-1rem] sm:mt-0">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<Button className="rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-slate-900/90 hover:bg-slate-900 dark:bg-white/90 dark:hover:bg-white text-white dark:text-slate-900 font-bold px-6 py-6 backdrop-blur-md" />}>
                <Plus className="mr-2 h-5 w-5" />
                새 링크 추가
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-3xl w-[95vw] border-0 shadow-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">새 링크 추가</DialogTitle>
                <DialogDescription>
                  추가할 링크의 제목과 URL을 입력해주세요.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddLink} className="space-y-5 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="font-semibold text-slate-700 dark:text-slate-300">링크 제목</Label>
                  <Input
                    id="title"
                    placeholder="예: Instagram, 포트폴리오"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="rounded-xl h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus-visible:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url" className="font-semibold text-slate-700 dark:text-slate-300">URL (웹 주소)</Label>
                  <Input
                    id="url"
                    placeholder="예: instagram.com/myprofile"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="rounded-xl h-12 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus-visible:ring-primary/50"
                  />
                  <p className="text-xs text-slate-500 font-medium ml-1">
                    http:// 또는 https:// 가 없으면 자동으로 추가됩니다.
                  </p>
                </div>
                <DialogFooter className="pt-4 flex-col sm:flex-row gap-3">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)} className="rounded-xl h-12 w-full sm:w-auto">
                    취소
                  </Button>
                  <Button type="submit" className="rounded-xl h-12 font-bold shadow-md hover:shadow-lg transition-all w-full sm:w-auto">
                    저장하기
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Profile Header */}
        <div className="flex flex-col items-center gap-5 mt-4 sm:mt-8">
          <div className="relative group">
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white dark:bg-slate-800 text-4xl font-black text-slate-800 dark:text-white shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10 z-10 transition-transform duration-500 group-hover:scale-105">
              M
            </div>
            {/* Subtle glow behind the avatar */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-primary/60 to-primary/10 rounded-3xl blur-xl opacity-40 mix-blend-multiply dark:mix-blend-screen -z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
          </div>
          <div className="text-center space-y-1.5">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">MyLink</h1>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              디지털 명함, 모든 링크를 한 곳에.
            </p>
          </div>
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
              <Card className="flex items-center p-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:shadow-xl hover:shadow-primary/5 cursor-pointer border-0 ring-1 ring-slate-200 dark:ring-slate-800 rounded-2xl group inset-0 backdrop-blur-sm bg-white/60 dark:bg-slate-900/60">
                {link.faviconUrl ? (
                  <img
                    src={link.faviconUrl}
                    alt={`${link.title} icon`}
                    className="h-10 w-10 rounded-full bg-slate-50 dark:bg-slate-800 object-contain p-2 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-500 group-hover:rotate-[360deg]"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex-shrink-0 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-500 group-hover:rotate-[360deg]" />
                )}
                <span className="flex-1 text-center font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors duration-300">
                  {link.title}
                </span>
                <div className="h-10 w-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
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
