"use client"

import { motion } from "framer-motion"

// ─── Tool icons with brand colors ───────────────────────────────────────────────
// Official SVG paths sourced from Simple Icons (simpleicons.org) where available.
// Generic icons used for niche tools without public SVG brand assets.
const TOOLS: Record<string, { color: string; icon: React.ReactNode }> = {
  // --- Signals & Intent ---
  // JobFeeder: no public SVG — briefcase icon
  JobFeeder:      { color: "#FF6B35", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"/></svg> },
  // RB2B: no public SVG — target/crosshair icon
  RB2B:           { color: "#6366F1", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg> },
  // Factors.ai: no public SVG — bar chart / analytics icon
  "Factors.ai":   { color: "#00D4AA", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/></svg> },
  // Common Room: no public SVG — community / people icon
  "Common Room":  { color: "#FF5C35", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg> },
  // Vector: no public SVG — compass / direction icon
  Vector:         { color: "#7C3AED", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/></svg> },
  // Unify: no public SVG — merge / link icon
  Unify:          { color: "#4F46E5", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/><path d="M17 3l4 3-4 3"/><path d="M7 21l-4-3 4-3"/></svg> },

  // --- AI Agents & LLMs ---
  // OpenAI / ChatGPT — official Simple Icons path
  ChatGPT:        { color: "#10A37F", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z"/></svg> },
  // Anthropic / Claude — official Simple Icons path (stylised "A")
  Claude:         { color: "#D97706", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M17.3041 3.541h-3.6718l6.696 16.918H24zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456z"/></svg> },
  // RelevanceAI: no public SVG — brain / AI icon
  RelevanceAI:    { color: "#8B5CF6", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2a9 9 0 0 0-9 9c0 3.07 1.54 5.77 3.89 7.4L6 22h12l-.89-3.6A8.973 8.973 0 0 0 21 11a9 9 0 0 0-9-9zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg> },
  // Perplexity — official Simple Icons path
  Perplexity:     { color: "#20B2AA", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z"/></svg> },

  // --- Prospecting & Enrichment ---
  // Apollo.io — official Simple Icons path (circle with "A" cutout)
  Apollo:         { color: "#4F46E5", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12,0C5.372,0 0,5.373 0,12 0,18.628 5.372,24 12,24 18.627,24 24,18.628 24,12A12.014,12.014 0 0 0 23.527,8.657 0.6,0.6 0 0 0 22.4,9.066C22.663,10.009 22.8,10.994 22.8,12A10.73,10.73 0 0 1 19.637,19.637 10.729,10.729 0 0 1 12,22.8 10.73,10.73 0 0 1 4.363,19.637 10.728,10.728 0 0 1 1.2,12 10.73,10.73 0 0 1 4.363,4.363 10.728,10.728 0 0 1 12,1.2C14.576,1.2 17.013,2.096 18.958,3.74A1.466,1.466 0 1 0 19.82,2.9 11.953,11.953 0 0 0 12,0ZM10.56,5.88 6.36,16.782H8.99L9.677,14.934H13.646L12.927,12.892H10.314L12.014,8.201 15.038,16.781H17.669L13.47,5.88Z"/></svg> },
  // Clay — stylised mountain shape
  Clay:           { color: "#58C4F7", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M2 20h20L12 4 2 20zm3.5-2L12 7.5 18.5 18H5.5z"/></svg> },
  // FullEnrich: no public SVG — database / enrich icon
  FullEnrich:     { color: "#CCBF00", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><ellipse cx="12" cy="5.5" rx="8" ry="3.5"/><path d="M4 5.5v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5"/><path d="M4 10.5v5c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-5"/><path d="M4 15.5V19c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5v-3.5"/></svg> },
  // Ocean.io: no public SVG — wave icon
  "Ocean.io":     { color: "#3B82F6", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/><path d="M2 17c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/><path d="M2 7c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/></svg> },
  // Sales Navigator / LinkedIn — official Simple Icons path
  "Sales Navigator": { color: "#0A66C2", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },

  // --- Sequencing & Outreach ---
  // Instantly — lightning bolt icon
  Instantly:      { color: "#3B82F6", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z"/></svg> },
  // Smartlead — shield icon
  Smartlead:      { color: "#10B981", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/></svg> },
  // Lemlist — envelope / email icon
  Lemlist:        { color: "#9333EA", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
  // Reply.io — reply arrow icon
  "Reply.io":     { color: "#2563EB", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg> },

  // --- Automation & Operations ---
  // n8n — official Simple Icons path (connected nodes)
  n8n:            { color: "#EA4B71", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632"/></svg> },
  // HubSpot — official Simple Icons path (sprocket with nodes)
  HubSpot:        { color: "#FF7A59", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.196 2.196 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 0 0-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.978 1.978 0 0 0-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207z"/></svg> },
  // Airtable — official Simple Icons path
  Airtable:       { color: "#18BFFF", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257zM23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z"/></svg> },
  // Make (formerly Integromat) — official Simple Icons path
  Make:           { color: "#6D29D9", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576z"/></svg> },
  // Notion — official Simple Icons path
  Notion:         { color: "#000000", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg> },

  // --- Content & Collateral ---
  // Figma — official Simple Icons path
  Figma:          { color: "#F24E1E", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg> },
  // Canva — official Simple Icons path
  Canva:          { color: "#00C4CC", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"/></svg> },
  // Miro — official Simple Icons path
  Miro:           { color: "#FFD02F", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 6.985 6.949 24h3.494L17 5.494 13.899 24h3.493L24 3.672 17.392 0z"/></svg> },
  // Qwilr: no public SVG — document / page icon
  Qwilr:          { color: "#00B8D9", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-4.5-5.5L12 18l-1.5-3.5L7 13l3.5-1.5L12 8l1.5 3.5L17 13l-3.5 1.5z"/></svg> },
  // Loom — official Simple Icons path (starburst / flower)
  Loom:           { color: "#625DF5", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M24 10.665h-7.018l6.078-3.509-1.335-2.312-6.078 3.509 3.508-6.077L16.843.94l-3.508 6.077V0h-2.67v7.018L7.156.94 4.844 2.275l3.509 6.077-6.078-3.508L.94 7.156l6.078 3.509H0v2.67h7.017L.94 16.844l1.335 2.313 6.077-3.508-3.509 6.077 2.312 1.335 3.509-6.078V24h2.67v-7.017l3.508 6.077 2.312-1.335-3.509-6.078 6.078 3.509 1.335-2.313-6.077-3.508h7.017v-2.67H24zm-12 4.966a3.645 3.645 0 1 1 0-7.29 3.645 3.645 0 0 1 0 7.29z"/></svg> },
}

// ─── Cluster data — 6 categories ────────────────────────────────────────────────
const CLUSTERS = [
  { label: "Signals & Intent",         tools: ["JobFeeder", "RB2B", "Factors.ai", "Common Room", "Vector", "Unify"] },
  { label: "AI Agents & LLMs",         tools: ["ChatGPT", "Claude", "RelevanceAI", "Perplexity"] },
  { label: "Prospecting & Enrichment", tools: ["Apollo", "Clay", "FullEnrich", "Ocean.io", "Sales Navigator"] },
  { label: "Sequencing & Outreach",    tools: ["Instantly", "Smartlead", "Lemlist", "Unify", "Reply.io"] },
  { label: "Automation & Operations",  tools: ["n8n", "HubSpot", "Airtable", "Make", "Notion"] },
  { label: "Content & Collateral",     tools: ["Figma", "Canva", "Miro", "Qwilr", "Loom"] },
]

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ─── Main component ─────────────────────────────────────────────────────────────
export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative bg-[#0a0e1a] px-6"
      style={{ paddingTop: "15vh", paddingBottom: "15vh" }}
    >
      {/* Background grid */}
      <div className="dot-grid absolute inset-0 opacity-20" />

      {/* Orbs */}
      <div
        className="glow-orb absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 700, height: 700, backgroundColor: "rgba(13,207,207,0.06)", filter: "blur(150px)" }}
      />
      <div
        className="glow-orb absolute left-[15%] top-[30%] rounded-full"
        style={{ width: 400, height: 400, backgroundColor: "rgba(13,207,207,0.04)", filter: "blur(120px)", animationDelay: "-4s" }}
      />
      <div
        className="glow-orb absolute right-[15%] top-[65%] rounded-full"
        style={{ width: 400, height: 400, backgroundColor: "rgba(13,207,207,0.04)", filter: "blur(120px)", animationDelay: "-7s" }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 text-center lg:mb-20"
        >
          <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#0dcfcf]">
            Infrastructure
          </span>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built on a Best-in-Class{" "}
            <span className="text-[#0dcfcf]">Tech Stack</span>
          </h2>
          <p className="mx-auto max-w-[640px] text-base leading-relaxed text-white/60 lg:text-lg">
            Built with advanced frameworks and tools to deliver seamless,
            high-performance solutions for modern businesses.
          </p>
        </motion.div>

        {/* === Neural Hub Layout === */}
        <div className="relative">
          {/* Top row — 3 clusters */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CLUSTERS.slice(0, 3).map((c, i) => (
              <ClusterCard key={c.label} label={c.label} tools={c.tools} index={i} />
            ))}
          </div>

          {/* Neural line between rows */}
          <div className="relative my-6 py-4 lg:my-8 lg:py-6">
            {/* Horizontal neural line */}
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-[#0dcfcf]/30 to-transparent" />
              <motion.div
                className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-[#0dcfcf]/60 to-transparent"
                animate={{ left: ["-15%", "115%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
            </div>

            {/* Vertical ticks connecting to cards above & below */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              {[25, 50, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute top-0 h-full w-px bg-gradient-to-b from-[#0dcfcf]/20 via-[#0dcfcf]/10 to-[#0dcfcf]/20"
                  style={{ left: `${pct}%` }}
                />
              ))}
            </div>
          </div>

          {/* Bottom row — 3 clusters */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CLUSTERS.slice(3).map((c, i) => (
              <ClusterCard key={c.label} label={c.label} tools={c.tools} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Cluster card ───────────────────────────────────────────────────────────────
function ClusterCard({
  label,
  tools,
  index,
}: {
  label: string
  tools: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: index < 3 ? -30 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.08 * index, ease: EASE }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm lg:p-6"
    >
      <span className="mb-4 inline-flex items-center rounded-md bg-[#0dcfcf]/10 px-3 py-1 text-[0.75rem] font-bold uppercase tracking-wider text-[#0dcfcf]">
        {label}
      </span>

      <div className="mt-3 flex flex-wrap gap-2.5">
        {tools.map((name, ti) => (
          <ToolPill key={name} name={name} delay={0.08 * index + 0.04 * ti} />
        ))}
      </div>
    </motion.div>
  )
}

// ─── Tool pill — monochrome idle → brand color hover ────────────────────────────
function ToolPill({ name, delay }: { name: string; delay: number }) {
  const info = TOOLS[name]
  const brandColor = info?.color || "#0dcfcf"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay, ease: EASE }}
      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 transition-all duration-300 hover:scale-105 hover:bg-white/[0.12]"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${brandColor}50`
        e.currentTarget.style.boxShadow = `0 0 20px ${brandColor}25`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = ""
        e.currentTarget.style.boxShadow = ""
      }}
    >
      {info?.icon && (
        <span
          style={{ color: brandColor }}
          className="opacity-40 transition-opacity duration-300 group-hover:opacity-100"
        >
          {info.icon}
        </span>
      )}
      <span className="text-xs font-medium text-white/50 transition-colors duration-300 group-hover:text-white">
        {name}
      </span>
    </motion.div>
  )
}
