"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Home,
  MessageSquare,
  AlertCircle,
  BarChart3,
  Settings,
  MonitorCheck,
  ChevronDown,
  ChevronUp,
  Camera,
  Brain,
  Search,
  Shield,
  Zap,
  Database,
  ExternalLink,
} from "lucide-react"

/* ─── Quick-nav card data ─── */
const NAV_CARDS = [
  {
    href: "/",
    icon: Home,
    label: "Dashboard",
    color: "#16A34A",
    bg: "rgba(22,163,74,0.10)",
    description:
      "Live camera feeds, summary statistics, video indexing queue and recent alerts at a glance.",
  },
  {
    href: "/conversation",
    icon: MessageSquare,
    label: "Conversation",
    color: "#0891B2",
    bg: "rgba(8,145,178,0.10)",
    description:
      'Natural-language query interface. Ask questions like "Show me people near the exit after 10 PM" and let the AI respond.',
  },
  {
    href: "/alerts",
    icon: AlertCircle,
    label: "Alerts",
    color: "#D97706",
    bg: "rgba(217,119,6,0.10)",
    description:
      "View, filter and manage security alerts. Configure thresholds and notification rules for each camera.",
  },
  {
    href: "/analytics",
    icon: BarChart3,
    label: "Analytics",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.10)",
    description:
      "Time-series charts, detection frequency histograms and performance metrics for the AI pipeline.",
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Settings",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.10)",
    description:
      "Manage user preferences, system configuration, camera setup and privacy controls.",
  },
  {
    href: "/test-dashboard",
    icon: MonitorCheck,
    label: "Test Dashboard",
    color: "#78716C",
    bg: "rgba(120,113,108,0.10)",
    description:
      "Developer testing page for validating camera feeds, API responses and pipeline components.",
  },
]

/* ─── Key features ─── */
const FEATURES = [
  {
    icon: Camera,
    title: "Live Camera Monitoring",
    description:
      "Stream and monitor multiple CCTV feeds simultaneously with real-time AI annotations on every frame.",
  },
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description:
      "YOLOv11 + OpenVINO object detection identifies people, vehicles and events with hardware-accelerated inference.",
  },
  {
    icon: Search,
    title: "Natural Language Querying",
    description:
      "Describe what you're looking for in plain English. The BLIP-2 captioning model and FAISS vector search retrieve matching footage instantly.",
  },
  {
    icon: AlertCircle,
    title: "Smart Alerting",
    description:
      "Configurable alert rules trigger on detected events. Alerts are timestamped and tied to the originating camera.",
  },
  {
    icon: Database,
    title: "Video Indexing",
    description:
      "Footage is automatically captioned and indexed in MongoDB + FAISS so every second of video becomes searchable.",
  },
  {
    icon: Shield,
    title: "Privacy Controls",
    description:
      "Built-in privacy settings let administrators mask regions, control retention periods and manage data access.",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description:
      "Track detection counts, alert frequency, system load and query latency with live updating charts.",
  },
]

/* ─── FAQ data ─── */
const FAQS = [
  {
    question: "How do I add a new camera to the system?",
    answer:
      'Go to Settings → Camera Setup, click "Add Camera" and enter the RTSP stream URL, camera name and location. The system will begin ingesting and indexing the feed automatically.',
  },
  {
    question: "How do I search footage using natural language?",
    answer:
      'Navigate to the Conversation page and type your query in the chat input — for example, "Show me anyone wearing a red jacket near the main entrance after 6 PM". The AI will process your query and return timestamped footage clips that match.',
  },
  {
    question: "What does the video indexing queue on the Dashboard show?",
    answer:
      "The queue shows video segments currently being processed by the AI captioning pipeline. Each entry displays the camera source, timestamp and indexing status. Indexed clips become immediately searchable.",
  },
  {
    question: "How are alerts triggered?",
    answer:
      "Alerts fire when the object-detection model identifies an event that matches a configured rule (e.g., person detected in a restricted zone, loitering threshold exceeded). Rules are created and managed on the Alerts page.",
  },
  {
    question: "Can I adjust the AI detection sensitivity?",
    answer:
      "Yes. In Settings → System Config you can tune the detection confidence threshold, maximum tracked objects per frame and the re-identification similarity score.",
  },
  {
    question: "How do I change the application theme?",
    answer:
      "Open Settings and use the Appearance toggle at the top of the page to switch between Light, Dark and System themes.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "The application is optimized for modern Chromium-based browsers (Chrome 110+, Edge 110+) and Firefox 115+. Safari 16+ is also supported.",
  },
  {
    question: "Where can I find system performance metrics?",
    answer:
      "The Analytics page shows detection frequency, alert trends, query latency and pipeline throughput charts. The Dashboard summary cards also display live counts for cameras, alerts and indexed clips.",
  },
  {
    question: "How do I reset my password or update profile information?",
    answer:
      "Go to Settings → User Settings to update your display name, email address or password.",
  },
  {
    question: "What should I do if a camera feed is not appearing?",
    answer:
      "Check that the RTSP URL is reachable from the server, verify the camera credentials in Settings → Camera Setup, and review the backend logs for connection errors. The Test Dashboard page can help diagnose stream issues.",
  },
]

/* ─── FAQ Accordion item ─── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          gap: "12px",
        }}
        aria-expanded={open}
      >
        <span
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--color-text)",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        {open ? (
          <ChevronUp
            style={{ width: "16px", height: "16px", flexShrink: 0, color: "var(--color-primary)" }}
          />
        ) : (
          <ChevronDown
            style={{ width: "16px", height: "16px", flexShrink: 0, color: "var(--color-text-faint)" }}
          />
        )}
      </button>
      {open && (
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.65,
            paddingBottom: "14px",
          }}
        >
          {answer}
        </p>
      )}
    </div>
  )
}

/* ─── Section heading ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "1.0625rem",
        fontWeight: 700,
        color: "var(--color-text)",
        marginBottom: "16px",
      }}
    >
      {children}
    </h2>
  )
}

/* ─── Island wrapper ─── */
function Island({
  children,
  style,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        padding: "24px",
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Main export ─── */
export function HelpContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap-section)" }}>

      {/* ── Hero banner ── */}
      <Island
        style={{
          background: "linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 60%)",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "var(--radius-md)",
            background: "linear-gradient(135deg, #15803D 0%, #16A34A 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: "0 0 0 4px var(--color-primary-glow)",
          }}
        >
          <Brain style={{ width: "26px", height: "26px", color: "#fff" }} />
        </div>
        <div>
          <h1
            style={{
              fontSize: "1.375rem",
              fontWeight: 800,
              color: "var(--color-text)",
              marginBottom: "4px",
            }}
          >
            Help &amp; Documentation
          </h1>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
            Everything you need to get started with Terminal AI Surveillance — quick navigation,
            feature guides and answers to common questions.
          </p>
        </div>
      </Island>

      {/* ── Quick navigation ── */}
      <Island>
        <SectionHeading>Quick Navigation</SectionHeading>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--color-text-muted)",
            marginBottom: "20px",
            lineHeight: 1.55,
          }}
        >
          Click any card below to jump directly to that section of the application.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {NAV_CARDS.map(({ href, icon: Icon, label, color, bg, description }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "16px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                background: "var(--color-surface-raised)",
                textDecoration: "none",
                transition: "box-shadow 150ms, border-color 150ms",
              }}
              className="help-nav-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "var(--radius-sm)",
                    background: bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon style={{ width: "17px", height: "17px", color }} />
                </div>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                  }}
                >
                  {label}
                </span>
                <ExternalLink
                  style={{
                    width: "13px",
                    height: "13px",
                    color: "var(--color-text-faint)",
                    marginLeft: "auto",
                    flexShrink: 0,
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </Link>
          ))}
        </div>
      </Island>

      {/* ── Getting started ── */}
      <Island>
        <SectionHeading>Getting Started</SectionHeading>
        <ol
          style={{
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            margin: 0,
          }}
        >
          {[
            {
              step: "Add your cameras",
              detail: (
                <>
                  Go to{" "}
                  <Link href="/settings" style={{ fontWeight: 600 }}>
                    Settings → Camera Setup
                  </Link>{" "}
                  and add your RTSP camera stream URLs. Each camera needs a unique name and location label.
                </>
              ),
            },
            {
              step: "Monitor the Dashboard",
              detail: (
                <>
                  The{" "}
                  <Link href="/" style={{ fontWeight: 600 }}>
                    Dashboard
                  </Link>{" "}
                  shows live feeds, summary counters and the AI indexing queue. Verify your cameras appear here and show a live status.
                </>
              ),
            },
            {
              step: "Configure alert rules",
              detail: (
                <>
                  Open the{" "}
                  <Link href="/alerts" style={{ fontWeight: 600 }}>
                    Alerts
                  </Link>{" "}
                  page and create rules that define what events should trigger a notification (e.g., person in restricted zone, vehicle after hours).
                </>
              ),
            },
            {
              step: "Query your footage",
              detail: (
                <>
                  Use the{" "}
                  <Link href="/conversation" style={{ fontWeight: 600 }}>
                    Conversation
                  </Link>{" "}
                  page to search indexed footage using plain English. The more footage has been indexed, the richer the search results.
                </>
              ),
            },
            {
              step: "Review analytics",
              detail: (
                <>
                  Head to{" "}
                  <Link href="/analytics" style={{ fontWeight: 600 }}>
                    Analytics
                  </Link>{" "}
                  to track detection trends, alert frequency and AI pipeline performance over time.
                </>
              ),
            },
          ].map(({ step, detail }, i) => (
            <li key={i} style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
              <span style={{ fontWeight: 700, color: "var(--color-text)" }}>{step}. </span>
              {detail}
            </li>
          ))}
        </ol>
      </Island>

      {/* ── Key features ── */}
      <Island>
        <SectionHeading>Key Features</SectionHeading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              style={{
                display: "flex",
                gap: "12px",
                padding: "14px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                background: "var(--color-surface-raised)",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--color-primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon style={{ width: "17px", height: "17px", color: "var(--color-primary)" }} />
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "4px" }}>
                  {title}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", lineHeight: 1.55, margin: 0 }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Island>

      {/* ── FAQ ── */}
      <Island>
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <div>
          {FAQS.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </Island>

      {/* Hover styles */}
      <style>{`
        .help-nav-card:hover {
          box-shadow: var(--shadow-md) !important;
          border-color: var(--color-border-strong) !important;
        }
      `}</style>
    </div>
  )
}
