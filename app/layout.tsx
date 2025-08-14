import type { Metadata } from 'next'
import { Inter, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansSC = Noto_Sans_SC({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '宠物毛发吸尘器专家 | Autobot专业手持式吸尘器 - 彻底解决宠物掉毛困扰',
  description: '专业宠物毛发吸尘器，强力吸附猫狗毛发，手持便携设计，静音运行。Autobot品牌专业推荐，有效清洁沙发、地毯、车内宠物毛发，让您的家居环境更清洁舒适。',
  keywords: '宠物毛发吸尘器,猫毛吸尘器,狗毛吸尘器,手持式吸尘器,便携吸尘器,宠物清洁,autobot吸尘器,宠物用品,家居清洁,无线吸尘器',
  authors: [{ name: 'Autobot.im', url: 'https://autobot.im' }],
  creator: 'Autobot.im',
  publisher: 'Autobot.im',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://autobot.im'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/zh-cn',
      'en-US': '/en-us',
    },
  },
  openGraph: {
    title: '宠物毛发吸尘器专家 | Autobot专业手持式吸尘器',
    description: '专业宠物毛发吸尘器，强力吸附猫狗毛发，手持便携设计，静音运行。有效清洁沙发、地毯、车内宠物毛发。',
    url: 'https://autobot.im',
    siteName: 'Autobot宠物毛发吸尘器',
    images: [
      {
        url: '/og-pet-vacuum.jpg',
        width: 1200,
        height: 630,
        alt: '宠物毛发吸尘器产品图',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '宠物毛发吸尘器专家 | Autobot专业手持式吸尘器',
    description: '专业宠物毛发吸尘器，强力吸附猫狗毛发，手持便携设计，静音运行。',
    images: ['/twitter-pet-vacuum.jpg'],
    creator: '@autobot_im',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://autobot.im/#organization",
        "name": "Autobot",
        "url": "https://autobot.im",
        "logo": {
          "@type": "ImageObject",
          "url": "https://autobot.im/logo.png",
          "width": 200,
          "height": 60
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+86-400-123-4567",
          "contactType": "customer service",
          "availableLanguage": ["Chinese", "English"]
        },
        "sameAs": [
          "https://weibo.com/autobot",
          "https://www.xiaohongshu.com/autobot"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://autobot.im/#website",
        "url": "https://autobot.im",
        "name": "Autobot宠物毛发吸尘器专家",
        "description": "专业宠物毛发吸尘器，强力吸附猫狗毛发，手持便携设计，静音运行。",
        "publisher": {
          "@id": "https://autobot.im/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://autobot.im/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://autobot.im/#pet-hair-vacuum",
        "name": "Autobot宠物毛发专用吸尘器",
        "description": "专业设计的宠物毛发吸尘器，采用强力电机和专业刷头，有效清除猫狗毛发，手持便携，静音运行。",
        "brand": {
          "@type": "Brand",
          "name": "Autobot"
        },
        "manufacturer": {
          "@id": "https://autobot.im/#organization"
        },
        "category": "宠物用品/清洁工具",
        "offers": {
          "@type": "Offer",
          "url": "https://autobot.im/products/pet-hair-vacuum",
          "priceCurrency": "CNY",
          "price": "299.00",
          "priceValidUntil": "2024-12-31",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@id": "https://autobot.im/#organization"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2847",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "张女士"
            },
            "reviewBody": "非常好用的宠物毛发吸尘器，我家金毛掉毛严重，用了这个吸尘器后沙发和地毯都很干净。"
          }
        ]
      }
    ]
  }

  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <div id="root">
          {children}
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  )
}