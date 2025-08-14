'use client'

import React, { useState, useEffect } from 'react'
import { 
  Star, Shield, Zap, Volume2, Battery, Award, Users, CheckCircle, ArrowRight, Play,
  Heart, Home, Car, Sofa, PawPrint, Clock, Phone, Mail, MapPin, TrendingUp,
  Target, Microscope, Wind, Settings, Gauge, Filter, Brush, ShoppingCart, ExternalLink
} from 'lucide-react'

export default function PetHairVacuumLanding() {
  const [activeTab, setActiveTab] = useState('features')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [stats, setStats] = useState({ customers: 0, satisfaction: 0, hairRemoved: 0, timesSaved: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ customers: 50000, satisfaction: 98, hairRemoved: 1000000, timesSaved: 500000 })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">Autobot</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">产品特色</a>
              <a href="#technology" className="text-gray-700 hover:text-blue-600 transition-colors">核心技术</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition-colors">用户评价</a>
              <a href="https://autobot.im/products/pet-hair-vacuum" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center">
                立即购买 <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-sm">50,000+用户五星好评</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-yellow-300">宠物毛发</span><br />
                  <span>终极解决方案</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100">
                  Autobot专业宠物毛发吸尘器 - 99.9%毛发清除率
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "30秒彻底清洁沙发毛发",
                  "静音运行 < 45分贝", 
                  "无线便携，续航60分钟"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://autobot.im/products/pet-hair-vacuum" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  立即抢购 ¥299 <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <button onClick={() => setIsVideoPlaying(true)} className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />观看演示视频
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                {[
                  { icon: Shield, text: "2年质保", color: "text-green-400" },
                  { icon: Zap, text: "7天无理由退换", color: "text-yellow-400" },
                  { icon: Heart, text: "全国包邮", color: "text-red-400" }
                ].map(({ icon: Icon, text, color }, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                    <PawPrint className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Autobot宠物毛发专用吸尘器</h3>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">¥299</div>
                    <div className="text-gray-500 line-through">原价 ¥599</div>
                    <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">限时5折优惠</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: stats.customers, suffix: '+', label: '满意客户', color: 'text-yellow-400' },
              { value: stats.satisfaction, suffix: '%', label: '客户满意度', color: 'text-green-400' },
              { value: (stats.hairRemoved / 1000000).toFixed(1), suffix: 'M+', label: '毛发清除量(根)', color: 'text-blue-400' },
              { value: (stats.timesSaved / 1000).toFixed(0), suffix: 'K+', label: '节省清洁时间(小时)', color: 'text-purple-400' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心问题 */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              宠物掉毛让您<span className="text-red-600">头疼不已？</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              每个宠物主人都面临的共同困扰，现在有了完美解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sofa, title: "沙发毛发清理困难", desc: "传统吸尘器对沙发、床单上的宠物毛发束手无策，毛发深嵌织物纤维中，普通清洁工具难以彻底清除。", issue: "清洁效率低下，费时费力", color: "border-red-500", iconColor: "text-red-500", issueColor: "text-red-600" },
              { icon: Car, title: "车内毛发清洁难题", desc: "带宠物出行后，车座椅、地毯上的毛发难以清理，影响车内环境和乘坐体验，专业清洗费用昂贵。", issue: "影响驾驶环境，清洗成本高", color: "border-orange-500", iconColor: "text-orange-500", issueColor: "text-orange-600" },
              { icon: Home, title: "家居环境毛发飞舞", desc: "宠物毛发到处飞舞，地毯、窗帘、家具缝隙都有毛发，传统清洁方式无法彻底解决，影响家居美观。", issue: "影响居住品质，清洁不彻底", color: "border-yellow-500", iconColor: "text-yellow-500", issueColor: "text-yellow-600" },
              { icon: Users, title: "家人过敏健康问题", desc: "宠物毛发容易引起家人过敏反应，特别是儿童和老人，长期接触可能导致呼吸道问题和皮肤过敏。", issue: "威胁家人健康，影响生活质量", color: "border-green-500", iconColor: "text-green-500", issueColor: "text-green-600" },
              { icon: Clock, title: "清洁耗时费力", desc: "每天花费大量时间清理宠物毛发，使用多种清洁工具效果仍不理想，严重影响日常生活和工作效率。", issue: "浪费宝贵时间，效率低下", color: "border-blue-500", iconColor: "text-blue-500", issueColor: "text-blue-600" },
              { icon: PawPrint, title: "宠物应激反应", desc: "传统吸尘器噪音大，容易让宠物产生恐惧和应激反应，影响宠物身心健康，清洁时需要将宠物隔离。", issue: "影响宠物健康，清洁受限", color: "border-purple-500", iconColor: "text-purple-500", issueColor: "text-purple-600" }
            ].map((problem, i) => (
              <div key={i} className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${problem.color}`}>
                <div className={`${problem.iconColor} mb-4`}>
                  <problem.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.desc}</p>
                <div className={`text-sm ${problem.issueColor} font-semibold`}>
                  ❌ {problem.issue}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">这些问题，Autobot宠物毛发吸尘器一次性全部解决！</h3>
              <p className="text-lg opacity-90">专业设计，针对宠物毛发特点，彻底解决您的清洁困扰</p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品特色 */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">革命性</span>宠物毛发清洁技术
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Autobot独创的专利技术，让宠物毛发清洁变得前所未有的简单高效
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              {[
                {
                  icon: Microscope,
                  title: "专利毛发分离技术",
                  desc: "独创的螺旋式毛发分离系统，通过特殊的气流设计和刷毛结构，能够深入织物纤维，将嵌入的宠物毛发彻底分离并吸除。",
                  features: ["99.9%毛发清除率，远超同类产品", "适用于各种织物材质，不损伤表面"],
                  bgColor: "from-blue-50 to-purple-50",
                  iconBg: "bg-blue-600"
                },
                {
                  icon: Wind,
                  title: "智能气流控制系统", 
                  desc: "采用变频电机和智能气流控制技术，根据不同清洁场景自动调节吸力大小，确保最佳清洁效果的同时降低能耗。",
                  features: ["三档吸力调节，适应不同清洁需求", "智能感应，自动优化清洁效果"],
                  bgColor: "from-green-50 to-blue-50",
                  iconBg: "bg-green-600"
                }
              ].map((tech, i) => (
                <div key={i} className={`bg-gradient-to-r ${tech.bgColor} p-8 rounded-2xl`}>
                  <div className="flex items-center mb-4">
                    <div className={`${tech.iconBg} p-3 rounded-full mr-4`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{tech.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{tech.desc}</p>
                  <div className="space-y-2">
                    {tech.features.map((feature, j) => (
                      <div key={j} className="flex items-center text-sm text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Settings className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">专利技术展示</h3>
                  <p className="text-blue-100">国家认证专利技术</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 p-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">专利技术</div>
                <div className="text-sm">国家认证</div>
              </div>
            </div>
          </div>

          {/* 立即购买CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">立即体验革命性清洁技术</h3>
              <p className="text-xl mb-6 opacity-90">限时特价 ¥299，原价 ¥599，立省 ¥300</p>
              <a href="https://autobot.im/products/pet-hair-vacuum" className="bg-yellow-400 text-gray-900 px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors inline-flex items-center">
                <ShoppingCart className="w-6 h-6 mr-3" />
                立即购买，享受清洁新体验
                <ArrowRight className="w-6 h-6 ml-3" />
              </a>
              <div className="mt-4 text-sm opacity-75">
                ✅ 全国包邮 ✅ 7天无理由退换 ✅ 2年质保服务
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}