'use client'

import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ShareRouteDialog({ url }) {
    const [copied, setCopied] = useState(false)
    const router = useRouter()

    const currentOrigin = window.location.origin;
    const originWithoutSlash = currentOrigin.endsWith('/') ? currentOrigin.slice(0, -1) : currentOrigin;

    const handleCopy = () => {
        navigator.clipboard.writeText(originWithoutSlash + url).then(() => {
            console.log('Route URL copied to clipboard');
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 800)
        }).catch(console.error);
    }

    const handleGoToURL = () => {
        if(false){
            window.location.href = url
        }else{
            // router.push(url)
            window.open(originWithoutSlash + url, '_blank'); // '_blank' opens the URL in a new tab
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full" variant="default">Share Route</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            value={originWithoutSlash + url || ""}
                            defaultValue={originWithoutSlash + url || ""}
                            readOnly
                        />
                    </div>
                    <Button type="submit" size="sm" className="px-3 relative" onClick={!copied ? handleCopy : () => {}}>
                        <span className="sr-only">Copy</span>
                        {copied ? (
                            <>
                                <Check className="h-4 w-4 transition-transform duration-300 transform scale-125" />
                                <span className="bg-black p-1 px-2 text-sm rounded-md absolute top-[-40px] transition-transform duration-300 transform">
                                    Copied
                                </span>
                            </>
                        ) : (
                            <Copy className="h-4 w-4 transition-transform duration-300 transform" />
                        )}
                    </Button>
                </div>
                <DialogFooter className="justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="destructive">
                            Close
                        </Button>
                    </DialogClose>
                        <Button className="mb-4" type="button" variant="outline" onClick={handleGoToURL}>
                            Go to url
                        </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
