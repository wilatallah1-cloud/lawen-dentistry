"use client";

import dynamic from "next/dynamic";

const VapiWidget = dynamic(
  () =>
    import("@vapi-ai/client-sdk-react").then((mod) => ({
      default: mod.VapiWidget,
    })),
  { ssr: false }
);

export function ChatWidget() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@vapi-ai/client-sdk-react/dist/client-sdk-react.css"
      />
      <style>{`
        @media (max-width: 1279px) {
          div[style*="z-index: 9999"][style*="position: fixed"] {
            bottom: 4.5rem !important;
          }
        }
      `}</style>
      <VapiWidget
        publicKey="64beed82-5806-471a-b426-27eb647ef69e"
        assistantId="27bb82b4-2cf0-4040-a0ed-ac0f8e46adaa"
        mode="chat"
        theme="light"
        position="bottom-right"
        size="compact"
        borderRadius="large"
        accentColor="#1B2A4A"
        ctaButtonColor="#D4A843"
        ctaButtonTextColor="#1B2A4A"
        baseBgColor="#FAF8F5"
        title="Lawen Dentistry"
        chatFirstMessage="Hello! Welcome to Lawen Dentistry — your Halifax dental care team. How can we help you today? / Bonjour! Bienvenue chez Lawen Dentistry. Comment puis-je vous aider aujourd'hui?"
        chatPlaceholder="Tapez votre message... / Type your message..."
        chatEmptyMessage="Commencez une conversation / Start a conversation"
      />
    </>
  );
}
