"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  RefreshCw,
  X,
  Minus,
  Square,
  Computer,
  FileText,
  Settings,
  User,
} from "lucide-react"

export default function WindowsLinktree() {
  const [isStarting, setIsStarting] = useState(true)
  const [startupProgress, setStartupProgress] = useState(0)
  const [showTooltip, setShowTooltip] = useState<number | null>(null)
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [loadingBlocks, setLoadingBlocks] = useState<number[]>([])
  const [currentTime, setCurrentTime] = useState("")
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Effect for Windows XP startup animation
  useEffect(() => {
    if (isStarting) {
      setLoadingBlocks([0, 1, 2])

      const progressTimer = setInterval(() => {
        setStartupProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer)
            setTimeout(() => {
              setIsStarting(false)
            }, 200)
            return 100
          }
          return prev + 10
        })
      }, 10)

      const blocksTimer = setInterval(() => {
        setLoadingBlocks((prev) => {
          const newBlocks = prev.map((block) => (block + 1) % 15)
          return newBlocks
        })
      }, 50)

      return () => {
        clearInterval(progressTimer)
        clearInterval(blocksTimer)
      }
    }
  }, [isStarting])

  // Effect to update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  // Initialize audio
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const audio = new Audio()
        audio.addEventListener("canplaythrough", () => {
          setAudioLoaded(true)
        })
        audio.addEventListener("error", (e) => {
          console.warn("Audio failed to load:", e)
          setAudioLoaded(false)
        })
        audio.src = "/sounds/windows-xp-click.mp3"
        audioRef.current = audio
      } catch (error) {
        console.warn("Audio initialization failed:", error)
        setAudioLoaded(false)
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  // Play click sound
  const playClickSound = () => {
    if (audioRef.current && audioLoaded) {
      try {
        audioRef.current.currentTime = 0
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((e) => {
            console.warn("Audio play failed:", e)
          })
        }
      } catch (error) {
        console.warn("Failed to play click sound:", error)
      }
    }
  }

  // Social links data
  const socialLinks = [
    {
      id: 1,
      name: "Instagram",
      url: "https://www.instagram.com/prod.took/",
      icon: "/icons/instagram-classic.png",
      description: "Follow",
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://x.com/prodtook_",
      icon: "/icons/twitter-classic.png",
      description: "Follow",
    },
    {
      id: 3,
      name: "SoundCloud",
      url: "https://soundcloud.com/2ook",
      icon: "/icons/soundcloud-official.png",
      description: "Listen",
    },
    {
      id: 4,
      name: "YouTube",
      url: "https://www.youtube.com/@p-took",
      icon: "/icons/youtube-retro-tv.png",
      description: "Watch",
    },
    {
      id: 5,
      name: "Discord",
      url: "#",
      icon: "/icons/discord-official.png",
      description: "Find",
    },
  ]

  // Windows XP startup screen
  if (isStarting) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-md text-center relative">
          <div className="mb-10">
            <Image src="/windows-xp-logo.png" alt="Windows XP" width={200} height={80} className="mx-auto" />
          </div>

          <p className="text-white text-xs mb-8 opacity-80">Copyright © Microsoft Corporation. All rights reserved.</p>

          <div className="w-full bg-[#0a246a] h-6 rounded-sm overflow-hidden border border-[#3b6ea5] relative mb-2">
            <div
              className="h-full bg-[#3b6ea5] transition-all duration-100 ease-linear"
              style={{ width: `${startupProgress}%` }}
            >
              {loadingBlocks.map((position, index) => (
                <div
                  key={index}
                  className="absolute top-0 h-full w-4 bg-[#5588c8]"
                  style={{
                    left: `${position * 6.66}%`,
                    opacity: 0.8,
                    boxShadow: "0 0 4px rgba(255, 255, 255, 0.5)",
                  }}
                ></div>
              ))}
            </div>
          </div>

          <p className="text-white text-sm mt-4 font-normal tracking-wide">Starting Windows...</p>

          <div className="absolute bottom-[-80px] left-0 right-0 text-center">
            <p className="text-white text-[10px] opacity-60">
              Microsoft® Windows XP™ Professional
              <br />
              Version 2002
              <br />
              Service Pack 3
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Main Windows Vista Linktree
  return (
    <div
      className="min-h-screen p-4 flex items-center justify-center"
      style={{
        backgroundImage: `url('/vista-aurora.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100vh",
        overflow: "auto",
      }}
    >
      {/* STRUCTURE COMPLÈTEMENT REFAITE - APPROCHE HTML PURE */}
      <div className="w-full max-w-4xl">
        <table cellSpacing="0" cellPadding="0" style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {/* TITRE */}
            <tr>
              <td colSpan={2} style={{ padding: 0 }}>
                <div
                  className="bg-gradient-to-r from-[#0a246a] via-[#0b2e88] to-[#0a246a] flex items-center justify-between px-2 py-1"
                  style={{ border: "2px solid #0a246a", borderBottom: "none" }}
                >
                  <div className="flex items-center">
                    <Image src="/icons/control-panel.png" alt="My Links" width={16} height={16} className="mr-2" />
                    <span className="text-white text-xs font-bold">My Links - Linktree</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-black bg-[#c4c4c4] hover:bg-[#e1e1e1] px-1 rounded-none border border-[#919191] border-t-white border-l-white">
                      <Minus className="h-3 w-3" />
                    </button>
                    <button className="text-black bg-[#c4c4c4] hover:bg-[#e1e1e1] px-1 rounded-none border border-[#919191] border-t-white border-l-white">
                      <Square className="h-3 w-3" />
                    </button>
                    <button
                      className="text-black bg-[#c4c4c4] hover:bg-[#e1e1e1] px-1 rounded-none border border-[#919191] border-t-white border-l-white"
                      onClick={() => {
                        setIsStarting(true)
                        setStartupProgress(0)
                      }}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            {/* MENU */}
            <tr>
              <td colSpan={2} style={{ padding: 0 }}>
                <div
                  className="bg-[#ece9d8] flex items-center px-2 py-1"
                  style={{ border: "2px solid #0a246a", borderTop: "none", borderBottom: "1px solid #aca899" }}
                >
                  <div className="flex items-center gap-4">
                    <button className="text-black text-xs hover:underline hover:bg-[#f1efe2] px-1 py-0.5 rounded-none">
                      File
                    </button>
                    <button className="text-black text-xs hover:underline hover:bg-[#f1efe2] px-1 py-0.5 rounded-none">
                      Edit
                    </button>
                    <button className="text-black text-xs hover:underline hover:bg-[#f1efe2] px-1 py-0.5 rounded-none">
                      View
                    </button>
                    <button className="text-black text-xs hover:underline hover:bg-[#f1efe2] px-1 py-0.5 rounded-none">
                      Favorites
                    </button>
                    <button className="text-black text-xs hover:underline hover:bg-[#f1efe2] px-1 py-0.5 rounded-none">
                      Tools
                    </button>
                    <button className="text-black text-xs hover:underline hover:bg-[#f1efe2] px-1 py-0.5 rounded-none">
                      Help
                    </button>
                  </div>
                </div>
              </td>
            </tr>

            {/* NAVIGATION */}
            <tr>
              <td colSpan={2} style={{ padding: 0 }}>
                <div
                  className="bg-[#ece9d8] flex items-center px-2 py-1"
                  style={{ border: "2px solid #0a246a", borderTop: "none", borderBottom: "1px solid #aca899" }}
                >
                  <button className="p-1 rounded-none border border-[#aca899] hover:bg-[#f1efe2] mr-1">
                    <ChevronLeft className="h-4 w-4 text-[#6d6d6d]" />
                  </button>
                  <button className="p-1 rounded-none border border-[#aca899] hover:bg-[#f1efe2] mr-1">
                    <ChevronRight className="h-4 w-4 text-[#6d6d6d]" />
                  </button>
                  <button className="p-1 rounded-none border border-[#aca899] hover:bg-[#f1efe2] mr-1">
                    <ArrowUp className="h-4 w-4 text-[#6d6d6d]" />
                  </button>

                  <div className="flex items-center bg-white border border-[#7a7a7a] rounded-none px-2 py-1 ml-2 flex-1">
                    <span className="text-xs text-[#444]">My Links</span>
                  </div>

                  <button
                    className="p-1 rounded-none border border-[#aca899] hover:bg-[#f1efe2] ml-2"
                    onClick={() => {
                      setIsStarting(true)
                      setStartupProgress(0)
                    }}
                  >
                    <RefreshCw className="h-4 w-4 text-[#6d6d6d]" />
                  </button>
                </div>
              </td>
            </tr>

            {/* CONTENU */}
            <tr>
              <td
                style={{
                  width: "200px",
                  verticalAlign: "top",
                  background: "linear-gradient(to bottom, #ece9d8, #d6d2c2)",
                  borderLeft: "2px solid #0a246a",
                  borderRight: "1px solid #aca899",
                  padding: 0,
                }}
              >
                {/* Profile section */}
                <div className="flex flex-col items-center p-3">
                  <div className="w-24 h-24 mb-2 relative rounded-full overflow-hidden border-2 border-[#0a246a] shadow-md">
                    <Image
                      src="/profile-took.png"
                      alt="Took"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center 20%",
                      }}
                    />
                  </div>
                  <h2 className="text-[#0a246a] text-lg font-bold">Took</h2>
                  <p className="text-xs text-center mt-1 text-[#555]">Artist</p>
                </div>

                {/* Windows XP style tasks */}
                <div className="mt-2">
                  <h3 className="text-[#0a246a] text-xs font-bold px-2 py-1 bg-[#e3e1d4] border-t border-[#fff] border-b border-[#aca899]">
                    System Tasks
                  </h3>

                  <div className="mt-2 space-y-1 px-2">
                    <div className="flex items-center px-2 py-1 hover:bg-[#e3e1d4] cursor-pointer">
                      <Computer className="h-4 w-4 text-[#0a246a] mr-2" />
                      <span className="text-xs">My Computer</span>
                    </div>
                    <div className="flex items-center px-2 py-1 hover:bg-[#e3e1d4] cursor-pointer">
                      <FileText className="h-4 w-4 text-[#0a246a] mr-2" />
                      <span className="text-xs">My Documents</span>
                    </div>
                    <div className="flex items-center px-2 py-1 hover:bg-[#e3e1d4] cursor-pointer">
                      <Settings className="h-4 w-4 text-[#0a246a] mr-2" />
                      <span className="text-xs">Control Panel</span>
                    </div>
                    <div className="flex items-center px-2 py-1 hover:bg-[#e3e1d4] cursor-pointer">
                      <User className="h-4 w-4 text-[#0a246a] mr-2" />
                      <span className="text-xs">User Account</span>
                    </div>
                  </div>
                </div>
              </td>
              <td
                style={{
                  backgroundColor: "white",
                  padding: "16px",
                  verticalAlign: "top",
                  borderRight: "2px solid #0a246a",
                }}
              >
                <h1 className="text-[#0a246a] text-xl font-normal mb-6 border-b border-[#ece9d8] pb-2">
                  My Social Links
                </h1>

                {/* Social links grid */}
                <div className="grid grid-cols-3 gap-8">
                  {/* First row */}
                  <a
                    href="https://www.instagram.com/prod.took/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:opacity-80 transition-opacity"
                    onClick={playClickSound}
                  >
                    <Image src="/icons/instagram-classic.png" alt="Instagram" width={64} height={64} className="mb-2" />
                    <span className="text-[#0a246a] font-bold text-sm">Instagram</span>
                    <span className="text-xs text-gray-600">Follow</span>
                  </a>

                  <a
                    href="https://x.com/prodtook_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:opacity-80 transition-opacity"
                    onClick={playClickSound}
                  >
                    <Image src="/icons/twitter-classic.png" alt="Twitter" width={64} height={64} className="mb-2" />
                    <span className="text-[#0a246a] font-bold text-sm">Twitter</span>
                    <span className="text-xs text-gray-600">Follow</span>
                  </a>

                  <a
                    href="https://soundcloud.com/2ook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:opacity-80 transition-opacity"
                    onClick={playClickSound}
                  >
                    <Image
                      src="/icons/soundcloud-official.png"
                      alt="SoundCloud"
                      width={64}
                      height={64}
                      className="mb-2"
                    />
                    <span className="text-[#0a246a] font-bold text-sm">SoundCloud</span>
                    <span className="text-xs text-gray-600">Listen</span>
                  </a>

                  {/* Second row */}
                  <a
                    href="https://www.youtube.com/@p-took"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:opacity-80 transition-opacity"
                    onClick={playClickSound}
                  >
                    <Image src="/icons/youtube-retro-tv.png" alt="YouTube" width={64} height={64} className="mb-2" />
                    <span className="text-[#0a246a] font-bold text-sm">YouTube</span>
                    <span className="text-xs text-gray-600">Watch</span>
                  </a>

                  <div
                    className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => {
                      playClickSound()
                      alert("Discord: dotmijj")
                    }}
                  >
                    <Image src="/icons/discord-official.png" alt="Discord" width={64} height={64} className="mb-2" />
                    <span className="text-[#0a246a] font-bold text-sm">Discord</span>
                    <span className="text-xs text-gray-600">Find</span>
                  </div>

                  {/* Empty cell to match the grid */}
                  <div></div>
                </div>
              </td>
            </tr>

            {/* BARRE DE STATUT - COMPLÈTEMENT REFAITE */}
            <tr>
              <td
                colSpan={2}
                style={{
                  backgroundColor: "#ece9d8",
                  borderLeft: "2px solid #0a246a",
                  borderRight: "2px solid #0a246a",
                  borderBottom: "2px solid #0a246a",
                  borderTop: "1px solid #aca899",
                  height: "22px",
                  padding: "0 8px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>
                  <span style={{ fontSize: "11px", color: "#333", fontFamily: "Tahoma, sans-serif" }}>5 items</span>
                  <span style={{ fontSize: "11px", color: "#333", fontFamily: "Tahoma, sans-serif" }}>
                    {currentTime}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
