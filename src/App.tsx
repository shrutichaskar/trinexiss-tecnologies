import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'motion/react';
import { askBot } from './services/geminiService';
import { 
  Bot, 
  Cpu, 
  Shield, 
  Globe, 
  Database, 
  MessageSquare, 
  Zap, 
  MapPin,
  Clock,
  Paperclip,
  ArrowRight, 
  Check,
  Star,
  Send,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Search,
  MoreHorizontal,
  X,
  Menu,
  Plus,
  Users,
  UserCheck,
  Megaphone,
  CheckCircle2,
  TrendingUp,
  Target,
  Eye,
  Briefcase,
  Headset,
  ShoppingCart,
  Brain,
  User,
  Cpu as CpuIcon,
  Zap as ZapIcon,
  Link as LinkIcon,
  BarChart3,
  Share2,
  Sun,
  Mail,
  Image as ImageIcon,
  UserPlus,
  FileSearch,
  Building2,
  ClipboardList,
  ShieldCheck,
  Wallet
} from 'lucide-react';

// --- Logo Component ---
const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="shrink-0">
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L90 85 H10 L50 10 Z" stroke="white" strokeWidth="8" />
        <path d="M50 35 L70 75 H30 L50 35 Z" fill="white" />
      </svg>
    </div>
    <div className="flex flex-col leading-tight">
      <span className="text-[26px] font-bold tracking-tight text-white leading-none">TRINEXISS</span>
      <span className="text-[10px] font-bold tracking-[0.38em] text-white/50 leading-none mt-1">TECHNOLOGIES</span>
    </div>
  </div>
);

// --- Navbar Component ---
const Navbar = ({ activeNav, onNavClick, onScheduleClick }: { activeNav: string, onNavClick: (link: string) => void, onScheduleClick?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Services', 'Use Cases', 'Portfolio', 'Team', 'About', 'Careers', 'Blog', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-4 bg-brand-bg/95 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <button onClick={() => onNavClick('Home')} className="shrink-0 pointer-cursor">
          <Logo />
        </button>

        {/* Global Navigation Links - Always Horizontal */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 ml-auto mr-4 lg:mr-10">
          {links.map((link) => (
            <button 
              key={link} 
              onClick={() => onNavClick(link)}
              className={`text-[10px] sm:text-[12px] lg:text-[15px] font-medium transition-all cursor-pointer whitespace-nowrap ${activeNav === link ? 'text-brand-secondary' : 'text-white/90 hover:text-white'}`}
            >
              {link}
            </button>
          ))}
        </div>

        <button 
          onClick={onScheduleClick}
          className="shrink-0 bg-brand-secondary text-[#03010c] font-bold px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8 lg:py-3 rounded-[12px] text-[10px] sm:text-[12px] lg:text-[14px] hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-secondary/20"
        >
          Schedule a Demo
        </button>
      </div>
    </nav>
  );
};

// --- Diagram Component ---
const RobotDiagram = () => {
  const nodes = [
    { icon: Shield, label: 'SECURITY', pos: 'top-[10%] left-[20%]' },
    { icon: Cpu, label: 'PROCESSING', pos: 'top-[10%] left-[60%]' },
    { icon: Globe, label: 'API', pos: 'top-[45%] -left-10' },
    { icon: Database, label: 'DATA SOURCE', pos: 'top-[45%] -right-10' },
    { icon: User, label: 'CUSTOMER', pos: 'bottom-[10%] left-[20%]' },
    { icon: Zap, label: 'WORKFLOW', pos: 'bottom-[10%] left-[60%]' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center p-12">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Lines from center to nodes */}
        {nodes.map((_, i) => (
          <motion.line 
            key={i}
            x1="50%" y1="50%" 
            x2={i === 0 ? "28%" : i === 1 ? "68%" : i === 2 ? "10%" : i === 3 ? "90%" : i === 4 ? "28%" : "68%"}
            y2={i === 0 || i === 1 ? "18%" : i === 2 || i === 3 ? "50%" : "82%"}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        ))}
      </svg>

      {/* Central Core */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="w-32 h-32 glass rounded-3xl flex items-center justify-center relative z-20 border-brand-secondary/30 shadow-[0_0_50px_rgba(56,189,248,0.2)]"
      >
        <div className="absolute inset-0 bg-brand-secondary/10 blur-2xl rounded-full animate-pulse" />
        <Bot className="text-brand-secondary w-16 h-16" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-brand-secondary rounded-full border-2 border-brand-bg -translate-y-1/2 translate-x-1/2" />
      </motion.div>

      {/* Peripheral Nodes */}
      {nodes.map((node, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + (i * 0.1) }}
          className={`absolute ${node.pos} bg-[#0A0F1E] border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-2 min-w-[100px] shadow-2xl z-10 group hover:border-brand-secondary/30 transition-all`}
        >
          <div className="p-3 bg-white/5 rounded-xl text-white group-hover:text-brand-secondary transition-colors">
             <node.icon className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-black tracking-widest text-white/40 uppercase group-hover:text-white transition-colors">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

// --- Dynamic Background Component ---
const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#03010c]">
      {/* 3D Grid System */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 209, 255, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 209, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'rotateX(60deg) translateY(-20%) scale(2)',
            transformOrigin: 'top center',
            maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
          }}
        />
      </div>

      {/* Floating Automation Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-secondary rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5,
              scale: Math.random() * 2
            }}
            animate={{
              y: [null, '-=100%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            style={{
              boxShadow: '0 0 10px #00D1FF'
            }}
          />
        ))}
      </div>

      {/* Atmospheric Glows */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-[#6366f1]/5 blur-[150px] rounded-full" />
    </div>
  );
};

// --- Floating 3D Shapes Deco ---
const Floating3DShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[10%] w-32 h-32 border border-brand-primary/20 rounded-xl opacity-20"
        style={{ transformStyle: 'preserve-3d' }}
      />
      <motion.div
        animate={{
          rotateX: [0, 360],
          x: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] left-[5%] w-48 h-48 border border-brand-secondary/10 rounded-full opacity-10"
      />
      <motion.div
        animate={{
          rotate: [0, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[15%] w-24 h-24 border-2 border-dashed border-white/5 rounded-lg opacity-20"
      />
    </div>
  );
};

// --- Stat Counter Component ---
const Counter = ({ value, label, suffix = '' }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = 20;
      const increment = (end / duration) * stepTime;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-6xl font-black text-brand-primary mb-2 tracking-tighter text-glow italic">
        {count}{suffix}
      </div>
      <div className="text-brand-text-body/60 font-bold uppercase tracking-[0.2em] text-[9px]">{label}</div>
    </div>
  );
};

// --- Service Card Component ---
const ServiceCard = ({ 
  title, 
  icon: Icon, 
  desc, 
  items, 
  clickable, 
  hoverBorder, 
  iconBg, 
  iconText, 
  iconHover, 
  color,
  onClick 
}: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={clickable ? { y: -12, scale: 1.02 } : {}}
    viewport={{ once: true }}
    transition={{ 
      type: "spring",
      stiffness: 300,
      damping: 20
    }}
    onClick={onClick}
    className={`glass p-10 rounded-[40px] border-white/5 group transition-all flex flex-col h-full bg-white/[0.02] ${clickable ? `cursor-pointer ${hoverBorder} hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]` : ''}`}
  >
    <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-all duration-500 ${clickable ? `${iconHover} group-hover:text-white` : ''}`}>
      <Icon className={`w-8 h-8 ${iconText} group-hover:text-white transition-colors`} />
    </div>
    <h4 className="text-2xl font-bold mb-4 tracking-tight text-white">{title}</h4>
    <p className="text-brand-text-body text-sm font-medium leading-relaxed mb-10 flex-grow">{desc}</p>
    <ul className="space-y-3 pt-8 border-t border-brand-border">
      {items.map((item: string, idx: number) => (
        <li key={idx} className={`flex items-center gap-3 text-[10px] font-bold ${iconText} uppercase tracking-[0.1em]`}>
           <div className={`w-1.5 h-1.5 ${color === 'brand-primary' ? 'bg-brand-primary' : 'bg-brand-secondary'} rounded-full shadow-[0_0_8px_#6C63FF]`} />
           {item}
        </li>
      ))}
    </ul>
    {clickable && (
      <div className="mt-10 flex items-center justify-between">
         <span className={`${iconText} text-[10px] font-bold uppercase tracking-widest`}>Explore Deep Dive</span>
         <ArrowRight className={`w-5 h-5 ${iconText} transform group-hover:translate-x-2 transition-transform`} />
      </div>
    )}
  </motion.div>
);

const services = [
  { 
    id: 'bot',
    title: 'AI & Automation', 
    icon: Bot, 
    desc: 'Custom Trinexiss Bots, Zapier/n8n workflows, and intelligent automation to streamline your business operations.',
    items: ['Trinexiss Bot Creation', 'Zapier & n8n Workflows', 'No-code Software Solutions'],
    clickable: true,
    color: 'brand-secondary',
    hoverBorder: 'hover:border-brand-secondary/40',
    iconBg: 'bg-brand-secondary/10',
    iconText: 'text-brand-secondary',
    iconHover: 'group-hover:bg-brand-secondary'
  },
  { 
    id: 'saas',
    title: 'SaaS Development', 
    icon: Globe, 
    desc: 'End-to-end SaaS application development featuring high-performance models like FinTrack and HealthSync.',
    items: ['FinTrack Financial Systems', 'HealthSync Patient Portals', 'Enterprise Dashboards'],
    clickable: true,
    color: 'brand-secondary',
    hoverBorder: 'hover:border-brand-secondary/40',
    iconBg: 'bg-brand-secondary/10',
    iconText: 'text-brand-secondary',
    iconHover: 'group-hover:bg-brand-secondary'
  },
  { 
    id: 'technical',
    title: 'Technical Services', 
    icon: CpuIcon, 
    desc: 'Comprehensive IT infrastructure, cloud management, and custom software engineering for modern enterprises.',
    items: ['IT Infrastructure Setup', 'Cloud Migration & Management', 'Custom Software Engineering'],
    clickable: true,
    color: 'brand-primary',
    hoverBorder: 'hover:border-brand-primary/40',
    iconBg: 'bg-brand-primary/10',
    iconText: 'text-brand-primary',
    iconHover: 'group-hover:bg-brand-primary'
  },
  { 
    id: 'resourcing',
    title: 'Resourcing & Hiring', 
    icon: Users, 
    desc: 'Strategic talent acquisition and resource management to build high-performing technical teams.',
    items: ['Contractual & Permanent Staffing', 'Technical Talent Sourcing', 'Executive Search'],
    clickable: true,
    color: 'brand-primary',
    hoverBorder: 'hover:border-brand-primary/40',
    iconBg: 'bg-brand-primary/10',
    iconText: 'text-brand-primary',
    iconHover: 'group-hover:bg-brand-primary'
  },
  { 
    id: 'hr',
    title: 'HR Services', 
    icon: UserCheck, 
    desc: 'End-to-end human resource management, from onboarding to compliance and organizational development.',
    items: ['Employee Onboarding', 'HR Compliance & Policy', 'Performance Management'],
    clickable: true,
    color: 'brand-secondary',
    hoverBorder: 'hover:border-brand-secondary/40',
    iconBg: 'bg-brand-secondary/10',
    iconText: 'text-brand-secondary',
    iconHover: 'group-hover:bg-brand-secondary'
  },
  { 
    id: 'marketing',
    title: 'Digital Marketing', 
    icon: Megaphone, 
    desc: 'Performance-driven marketing strategies including SEO, PPC, and social media advertising.',
    items: ['Facebook & Google Ads', 'SEO Optimization', 'GTM & GA4 Setup'],
    clickable: true,
    color: 'brand-primary',
    hoverBorder: 'hover:border-brand-primary/40',
    iconBg: 'bg-brand-primary/10',
    iconText: 'text-brand-primary',
    iconHover: 'group-hover:bg-brand-primary'
  }
];

// --- Chat Widget Component ---
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: 'Hello! I am your Trinexiss Bot from Trinexiss Technologies. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const history = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' as const : 'model' as const,
      parts: [{ text: msg.content }]
    })).slice(1); // Exclude initial greeting from history or include it if needed. 
    // Gemini history doesn't usually start with system instructions here if we use systemInstruction in config.

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const aiResponse = await askBot(userMessage, history);
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: aiResponse || "I'm sorry, I couldn't process that request at this moment." 
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Our neural links are experiencing temporary interference. Please re-establish contact in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[400px] max-w-[calc(100vw-80px)] h-[600px] max-h-[calc(100vh-160px)] glass rounded-[40px] overflow-hidden flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-brand-primary/20"
          >
            {/* Header */}
            <div className="p-8 bg-brand-elevated border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center relative">
                  <Bot className="text-brand-primary w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-secondary rounded-full border-2 border-brand-bg animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Trinexiss Bot</h4>
                  <p className="text-[8px] font-bold text-brand-secondary uppercase tracking-widest italic">Core Protocol Active</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-6 scrollbar-hide bg-brand-bg">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[24px] text-xs font-medium leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary text-white rounded-tr-none font-bold' 
                      : 'bg-brand-section text-brand-text-body rounded-tl-none border border-brand-border shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-brand-section p-5 rounded-[24px] rounded-tl-none border border-brand-border flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-8 border-t border-brand-border bg-brand-section">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Enter Query..."
                  className="w-full bg-brand-bg border border-brand-border p-5 pr-16 rounded-2xl focus:outline-none focus:border-brand-primary/50 text-white text-xs font-bold uppercase tracking-widest transition-all placeholder:text-brand-text-body/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center hover:bg-brand-hover active:scale-95 transition-all disabled:opacity-30 disabled:grayscale"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(108,99,255,0.3)] z-[110] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        {isOpen ? <X className="w-8 h-8 relative z-10" /> : <MessageSquare className="w-8 h-8 relative z-10 fill-current" />}
      </motion.button>
    </div>
  );
};

// --- Technical Diagrams for Use Cases ---
  const FinTrackDiagram = () => (
  <div className="relative w-full aspect-video bg-brand-section rounded-3xl overflow-hidden border border-brand-border p-8 group">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,99,255,0.05)_0%,transparent_70%)]" />
    <div className="absolute top-4 right-6 flex gap-2">
      <div className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[8px] font-black uppercase text-brand-primary">Live Environment</div>
      <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase text-white/40">v4.2.0</div>
    </div>
    <div className="relative z-10 grid grid-cols-4 items-center h-full gap-4">
      {[
        { label: 'Data Ingestion', icon: Database, color: 'text-brand-secondary', value: '8.4k req/s' },
        { label: 'AES-256 Gate', icon: Shield, color: 'text-white', value: 'Encrypted' },
        { label: 'Neural Engine', icon: Cpu, color: 'text-brand-primary', value: 'Processing' },
        { label: 'Capital Pulse', icon: TrendingUp, color: 'text-white', value: '+14% ROI' },
      ].map((step, i) => (
        <div key={i} className="flex flex-col items-center gap-4 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className={`w-16 h-16 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center ${step.color} shadow-2xl transition-all duration-500 group-hover:border-brand-primary/40`}
          >
            <step.icon className="w-8 h-8" />
          </motion.div>
          <div className="text-center space-y-1">
             <div className="text-[8px] font-black uppercase tracking-widest text-brand-text-body/40 leading-none">{step.label}</div>
             <div className="text-[7px] font-bold text-brand-secondary uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">{step.value}</div>
          </div>
          {i < 3 && (
            <div className="absolute top-1/3 -right-1/2 w-full h-[1px] bg-gradient-to-r from-brand-primary/30 to-transparent overflow-hidden">
               <motion.div 
                 animate={{ x: ['-100%', '100%'] }} 
                 transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                 className="w-1/2 h-full bg-brand-primary shadow-[0_0_15px_#6C63FF]"
               />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const SupportAIDiagram = () => (
  <div className="relative w-full aspect-video bg-brand-section rounded-3xl overflow-hidden border border-brand-border p-8">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,99,255,0.05)_0%,transparent_70%)]" />
    <div className="relative z-10 flex flex-col justify-center gap-8 h-full">
      <div className="flex justify-between items-center px-12">
        <div className="flex flex-col items-center gap-2">
           <div className="w-12 h-12 rounded-xl bg-brand-elevated flex items-center justify-center text-white"><Users className="w-6 h-6" /></div>
           <span className="text-[8px] font-black uppercase tracking-widest text-brand-text-body/30">User Query</span>
        </div>
        <div className="flex flex-col items-center gap-2">
           <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary"><Bot className="w-6 h-6" /></div>
           <span className="text-[8px] font-black uppercase tracking-widest text-brand-primary">Trinexiss Bot</span>
        </div>
        <div className="flex flex-col items-center gap-2">
           <div className="w-12 h-12 rounded-xl bg-brand-elevated flex items-center justify-center text-brand-secondary"><CheckCircle2 className="w-6 h-6" /></div>
           <span className="text-[8px] font-black uppercase tracking-widest text-brand-text-body/30">Resolution</span>
        </div>
      </div>
      <div className="h-px bg-brand-border w-full relative">
        <motion.div 
          animate={{ x: ['0%', '100%'] }} 
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-0 w-20 h-px bg-brand-primary shadow-[0_0_15px_#6C63FF]"
        />
      </div>
    </div>
  </div>
);

const HealthSyncDiagram = () => (
  <div className="relative w-full aspect-video bg-brand-section rounded-3xl overflow-hidden border border-brand-border p-8">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,99,255,0.05)_0%,transparent_70%)]" />
    <div className="relative z-10 flex items-center justify-center h-full">
       <div className="relative p-12 border border-brand-primary/30 rounded-full animate-[spin_10s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-brand-bg border border-brand-primary rounded-xl">
             <Zap className="w-6 h-6 text-brand-primary" />
          </div>
          <div className="w-48 h-48 rounded-full border border-brand-border flex items-center justify-center">
             <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl"
             />
             <div className="absolute text-[10px] font-black text-white italic uppercase tracking-[0.3em]">HIPAA SECURE</div>
          </div>
       </div>
    </div>
  </div>
);

// --- ROI Engine Component ---
const ROIEngine = () => {
  const [metrics, setMetrics] = useState({
    hours: 20,
    rate: 50,
    employees: 5,
    potential: 60
  });

  const monthlySavings = metrics.hours * metrics.rate * metrics.employees * (metrics.potential / 100) * 4;
  const annualSavings = monthlySavings * 12;

  return (
    <section className="section-compact px-6 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(88,101,242,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.5em] mb-4">ROI Engine</div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase text-glow">Calculate Your <span className="text-brand-primary">Automation ROI</span></h2>
          <p className="text-base md:text-lg text-brand-text-body max-w-xl mx-auto font-medium uppercase tracking-tight leading-relaxed">
            See how much time and capital your business can reclaim by implementing Trinexiss Bots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-stretch">
          {/* Controls */}
          <div className="glass card-padding rounded-[48px] space-y-10 border-brand-border h-full flex flex-col justify-center">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { label: 'Manual Task Hours (Per Week/Employee)', key: 'hours', suffix: 'h', max: 40 },
                  { label: 'Average Hourly Rate ($)', key: 'rate', suffix: '$', max: 200 },
                  { label: 'Number of Employees', key: 'employees', suffix: '', max: 100 },
                  { label: 'Automation Potential (%)', key: 'potential', suffix: '%', max: 100 }
                ].map((item) => (
                  <div key={item.key} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-[9px] font-black text-brand-text-body/60 uppercase tracking-widest leading-none">{item.label}</label>
                      <span className="text-brand-secondary font-black italic text-sm">{metrics[item.key as keyof typeof metrics]}{item.suffix}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max={item.max} 
                      value={metrics[item.key as keyof typeof metrics]}
                      onChange={(e) => setMetrics({...metrics, [item.key]: parseInt(e.target.value)})}
                      className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-secondary"
                    />
                  </div>
                ))}
             </div>
             <p className="text-brand-text-body/20 text-[9px] font-bold uppercase tracking-widest text-center italic">*Estimates based on industry averages for Trinexiss Bot performance.</p>
          </div>

          {/* Results */}
          <div className="bg-brand-primary card-padding rounded-[48px] text-white flex flex-col justify-between shadow-[0_40px_100px_-20px_rgba(88,101,242,0.4)]">
             <div className="space-y-8">
                <div>
                   <div className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 opacity-70">Monthly Savings</div>
                   <div className="text-5xl md:text-6xl font-black tracking-tighter italic text-glow">${monthlySavings.toLocaleString()}</div>
                </div>
                <div>
                   <div className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 opacity-70">Annual Reclaimed Capital</div>
                   <div className="text-6xl md:text-7xl font-black tracking-tighter italic border-b-2 border-white/20 pb-4 text-glow">${annualSavings.toLocaleString()}</div>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                   <div className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-70">Efficiency Impact</div>
                   <div className="text-xl font-black italic">+{metrics.potential}% Productivity</div>
                </div>
                <div>
                   <div className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-70">Hours Reclaimed Per Year</div>
                   <div className="text-xl font-black italic">{(metrics.hours * metrics.employees * (metrics.potential / 100) * 52).toLocaleString()} hrs</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Consultation Modal Component ---
const ConsultationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setSelectedFile(null);
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-bg/95 backdrop-blur-xl"
          />
          
            <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-6xl glass rounded-[60px] border-brand-border relative overflow-hidden flex flex-col lg:flex-row shadow-[0_50px_200px_rgba(0,0,0,0.8)] max-h-[90vh]"
          >
            {/* Side Info */}
            <div className="hidden lg:flex flex-col justify-between p-16 bg-brand-primary w-[420px] text-white overflow-hidden relative shrink-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                 <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-glow">Consultation Engine</div>
                 <h2 className="text-5xl font-black italic uppercase leading-[0.9] tracking-tighter mb-8">Architect <br />Your <span className="text-white/40">Success.</span></h2>
                 
                 <div className="space-y-10 mt-20">
                    <div className="flex gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-brand-primary transition-all">
                          <Brain className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">Expert AI Protocol</h4>
                          <p className="text-white/70 text-[11px] font-medium leading-relaxed">Strategy sessions with our lead neural architects.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-brand-primary transition-all">
                          <Cpu className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">SaaS Architecture</h4>
                          <p className="text-white/70 text-[11px] font-medium leading-relaxed">Scalable frameworks built for global modernity.</p>
                       </div>
                    </div>
                    <div className="flex gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-brand-primary transition-all">
                          <TrendingUp className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="text-[10px] font-black uppercase tracking-widest mb-1">Growth Scaling</h4>
                          <p className="text-white/70 text-[11px] font-medium leading-relaxed">Digital performance strategies that drive ROI.</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mt-12">
                 Neural Link Established: {new Date().getFullYear()}
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 p-8 md:p-16 overflow-y-auto relative scroll-smooth CustomScrollbar">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white/20 hover:text-white hover:bg-white/5 transition-all z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-12">
                 <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">Contact <span className="text-brand-secondary">Information</span></h3>
                 <p className="text-brand-text-body font-bold text-xs uppercase tracking-widest">Connect with our engineering hub below.</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                >
                  <div className="w-24 h-24 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary mb-4">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-4xl font-black text-white italic uppercase">Request Transmitted</h4>
                  <p className="text-brand-text-body text-sm font-bold uppercase tracking-widest max-w-sm">Our neural architects will review your project and re-establish contact within 24 hours.</p>
                </motion.div>
              ) : (
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-8" onSubmit={handleSubmit}>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">First Name</label>
                    <input required type="text" placeholder="John" name="firstName" className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Last Name</label>
                    <input required type="text" placeholder="Doe" name="lastName" className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all" />
                  </div>
                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                    <input required type="email" placeholder="info@trinexiss.com" name="email" className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all" />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Request Type</label>
                    <div className="relative">
                      <select name="type" className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 pr-12 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all appearance-none">
                        <option className="bg-brand-bg">Get a Quote</option>
                        <option className="bg-brand-bg">Partnership Probe</option>
                        <option className="bg-brand-bg">Technical Inquiry</option>
                        <option className="bg-brand-bg">General Exploration</option>
                      </select>
                      <MoreHorizontal className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Service Interested In</label>
                    <div className="relative">
                      <select name="service" className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 pr-12 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all appearance-none">
                        <option className="bg-brand-bg">AI & Automation</option>
                        <option className="bg-brand-bg">Custom SaaS</option>
                        <option className="bg-brand-bg">Digital Analytics</option>
                        <option className="bg-brand-bg">Digital Marketing</option>
                        <option className="bg-brand-bg">Strategic Sourcing</option>
                      </select>
                      <MoreHorizontal className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Estimated Budget</label>
                    <div className="relative">
                      <select name="budget" className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 pr-12 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all appearance-none">
                        <option className="bg-brand-bg">$50 - $500</option>
                        <option className="bg-brand-bg">$500 - $2,000</option>
                        <option className="bg-brand-bg">$2,000 - $5,000</option>
                        <option className="bg-brand-bg">$5,000 - $10,000</option>
                        <option className="bg-brand-bg">$10,000+</option>
                      </select>
                      <MoreHorizontal className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-3 md:col-span-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Message / Project Details</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your project or specific requirements..." className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all resize-none"></textarea>
                  </div>

                  <div className="space-y-4 md:col-span-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
                       <Paperclip className="w-4 h-4" /> Attachment (Project Brief, RFP, etc.)
                    </label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-4 bg-brand-bg border border-brand-border rounded-2xl p-2 pr-5 group hover:border-brand-primary transition-all cursor-pointer overflow-hidden"
                    >
                       <input 
                         type="file" 
                         ref={fileInputRef} 
                         className="hidden" 
                         onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                       />
                       <div className="bg-brand-secondary text-brand-bg font-black px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest">Choose File</div>
                       <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest truncate">
                         {selectedFile ? selectedFile.name : 'No file chosen'}
                       </span>
                    </div>
                  </div>

                  <div className="md:col-span-2 pt-6 pb-20 flex flex-col gap-6">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-secondary text-brand-bg font-black py-7 rounded-3xl text-[14px] uppercase tracking-[0.4em] hover:brightness-110 active:scale-95 transition-all shadow-[0_20px_60px_rgba(56,189,248,0.3)] shadow-brand-secondary/20 flex items-center justify-center gap-4 group disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-brand-bg border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>Submit Request <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></>
                      )}
                    </button>
                    
                    <button 
                      type="button"
                      onClick={onClose}
                      className="w-full py-4 text-[10px] font-black text-white/40 hover:text-white uppercase tracking-[0.4em] transition-colors"
                    >
                      Return to Website
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Team Section Component ---
// --- Team Section Component ---
const TeamSection = () => {
  const team = [
    {
      name: "Shruti Chaskar",
      role: "CEO & Founder",
      category: "Leadership",
      color: "text-brand-secondary",
      bg: "bg-brand-secondary/10",
      bio: "Visionary behind Trinexiss, driving innovation in AI and automation for over a decade with a mission to empower digital-first enterprises."
    },
    {
      name: "Siddharth Sharma",
      role: "Lead Neural Architect",
      category: "Engineering",
      color: "text-brand-primary",
      bg: "bg-brand-primary/10",
      bio: "Master of scalable AI infrastructures and distributed neural systems, ensuring technical excellence across all AI protocols."
    },
    {
      name: "Vikram Malhotra",
      role: "SaaS Product Lead",
      category: "Product",
      color: "text-brand-cyan",
      bg: "bg-brand-cyan/10",
      bio: "Architecting modern software solutions that solve complex enterprise logic with focus on scalability and global modernity."
    },
    {
      name: "Ananya Iyer",
      role: "Head of Digital Growth",
      category: "Strategy",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      bio: "Driving global scale through ROI-focused digital performance marketing and data-centric growth frameworks."
    }
  ];

  return (
    <section id="team" className="py-32 px-6 lg:px-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary text-glow">Neural Network</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none mb-4">Meet Our <br /><span className="text-brand-secondary">Core Team</span></h2>
            <p className="text-brand-text-body font-bold text-xs uppercase tracking-widest max-w-lg">Visionary leadership driving the evolution of AI-powered digital enterprises across global territories.</p>
          </div>
          
          <div className="flex gap-4">
             <div className="glass p-6 rounded-3xl border-brand-border text-center">
                <div className="text-2xl font-black text-white italic">10+</div>
                <div className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">Years Exp.</div>
             </div>
             <div className="glass p-6 rounded-3xl border-brand-border text-center">
                <div className="text-2xl font-black text-white italic">50+</div>
                <div className="text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] mt-2">Specialists</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass p-8 rounded-[40px] border-brand-border hover:border-brand-primary/40 transition-all duration-500 h-full flex flex-col relative overflow-hidden bg-white/[0.01]">
                {/* Status Dot */}
                <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
                
                <div className="mb-8">
                  <div className={`inline-block px-3 py-1 rounded-full ${member.bg} ${member.color} text-[7px] font-black uppercase tracking-[0.2em] mb-6 border border-white/5`}>
                    {member.category}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1 uppercase italic leading-none tracking-tighter group-hover:text-brand-secondary transition-colors">{member.name}</h3>
                  <p className="text-white/30 font-bold text-[8px] uppercase tracking-[0.3em]">{member.role}</p>
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                     <p className="text-brand-text-body/60 text-[10px] font-medium leading-relaxed mb-8">
                        {member.bio}
                     </p>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-2.5">
                       <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/20 hover:text-white hover:bg-brand-primary transition-all cursor-pointer">
                          <Users className="w-3.5 h-3.5" />
                       </div>
                       <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/20 hover:text-white hover:bg-brand-secondary transition-all cursor-pointer">
                          <ArrowRight className="w-3.5 h-3.5" />
                       </div>
                    </div>
                    <div className="text-[7px] font-black uppercase tracking-tighter text-white/10">P.0{i + 1}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Careers Overlay Component ---
const CareersOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState('All Roles');
  const [applyingFor, setApplyingFor] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const tabs = ['All Roles', 'Engineering', 'AI / ML', 'Design', 'Sales', 'Operations'];

  const jobs = [
    { department: 'AI / ML', title: 'Senior AI Engineer', isNew: true, desc: 'Design and deploy large-scale AI agents and automation pipelines for enterprise clients.', tags: ['Python', 'LLMs', 'PyTorch', 'MLOps'], location: 'Remote / Pune' },
    { department: 'Engineering', title: 'Full Stack Developer', isNew: true, desc: 'Build scalable web platforms and dashboards that power our AI automation products.', tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'], location: 'Remote / Pune' },
    { department: 'AI / ML', title: 'NLP Research Scientist', isNew: false, desc: 'Advance our NLP capabilities — fine-tune language models and build intelligent pipelines.', tags: ['NLP', 'Transformers', 'Python', 'Research'], location: 'Remote' },
    { department: 'Design', title: 'UI/UX Designer', isNew: true, desc: 'Craft beautiful, intuitive interfaces for our AI-powered products and client dashboards.', tags: ['Figma', 'Prototyping', 'Design Systems'], location: 'Pune / Hybrid' },
    { department: 'Sales', title: 'Enterprise Sales Manager', isNew: false, desc: 'Drive enterprise partnerships and close deals with Fortune 500 clients across India and GCC.', tags: ['B2B Sales', 'CRM', 'Negotiation'], location: 'Pune' },
    { department: 'Operations', title: 'AI Automation Consultant', isNew: false, desc: 'Work with clients to analyse workflows, identify automation opportunities, and deliver results.', tags: ['Consulting', 'Process Design', 'Client Mgmt'], location: 'Remote / Pune' },
  ];

  const filteredJobs = activeTab === 'All Roles' ? jobs : jobs.filter(j => j.department === activeTab);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-[#08080F] overflow-y-auto no-scrollbar pb-20"
        >
          {/* Header/Close */}
          <div className="sticky top-0 z-[110] flex justify-between items-center px-8 py-6 bg-[#08080F]/80 backdrop-blur-md border-b border-white/5">
             <Logo />
             <div className="flex gap-4">
               {applyingFor && (
                 <button 
                   onClick={() => setApplyingFor(null)}
                   className="px-6 py-2 rounded-full glass border-white/10 text-[10px] font-black text-white hover:bg-white/10 uppercase tracking-widest transition-all"
                 >
                   Back to Job List
                 </button>
               )}
               <button 
                  onClick={onClose}
                  className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-white"
                >
                  <X className="w-6 h-6" />
                </button>
             </div>
          </div>

          <AnimatePresence mode="wait">
            {!applyingFor ? (
              <motion.div
                key="job-list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Hero */}
                <section className="relative pt-24 pb-20 px-6 text-center border-b border-white/5 bg-gradient-to-br from-[#0F0F1A] to-[#131328] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full px-5 py-1.5 mb-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary text-glow">Recruitment Portal</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 text-white text-glow">
                      BUILDING THE <span className="text-brand-primary">NEXT</span><br />FRONTIER
                    </h1>
                    <p className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.2em] max-w-xl mx-auto mb-12 leading-relaxed">
                      Join the neural network of innovators shaping the future of AI automation. Top-tier technical talent wanted for high-impact roles.
                    </p>

                    <div className="flex justify-center gap-12 md:gap-24 flex-wrap">
                      <div className="text-center">
                        <div className="text-4xl font-black italic text-white mb-1">12+</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-white/30 italic">Open Roles</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-black italic text-white mb-1">50+</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-white/30 italic">Team Members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-black italic text-white mb-1">100%</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-white/30 italic">Remote Friendly</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Filter Tabs */}
                <section className="sticky top-[89px] z-20 py-6 px-6 bg-[#08080F]/90 backdrop-blur-xl border-b border-white/5 flex gap-3 overflow-x-auto no-scrollbar justify-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`shrink-0 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                        activeTab === tab 
                        ? 'bg-brand-primary/20 border-brand-primary text-brand-primary shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                        : 'bg-transparent border-white/10 text-white/40 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </section>

                {/* Job Grid */}
                <section className="py-20 px-6 max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="glass p-8 rounded-[32px] border border-white/5 hover:border-brand-primary/40 transition-all group relative overflow-hidden bg-white/[0.01]"
                      >
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex justify-between items-start mb-6">
                          <span className="text-[9px] font-black bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-3 py-1 rounded-full uppercase tracking-widest">
                            {job.department}
                          </span>
                          {job.isNew && (
                            <span className="text-[9px] font-black bg-[#00D4AA]/10 text-[#00D4AA] border border-[#00D4AA]/20 px-3 py-1 rounded-full uppercase tracking-widest">
                              New
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-4 group-hover:text-brand-primary transition-colors">{job.title}</h3>
                        <p className="text-white/40 text-xs font-medium leading-relaxed mb-8">{job.desc}</p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {job.tags.map(tag => (
                            <span key={tag} className="text-[8px] font-black bg-white/5 text-white/40 px-2 py-1 rounded-md uppercase tracking-[0.2em] border border-white/5">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            {job.location}
                          </div>
                          <button 
                            onClick={() => setApplyingFor(job.title)}
                            className="text-[10px] font-black text-brand-primary uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2 group/btn"
                          >
                             Apply Now <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            ) : (
              <motion.div
                key="application-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-24 px-6 min-h-screen flex flex-col items-center justify-center p-4"
              >
                <div className="max-w-3xl w-full mb-12 text-center">
                   <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 mb-8">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary">Application Terminal</span>
                   </div>
                   <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter mb-4 leading-tight">
                     SUBMIT YOUR <span className="text-brand-primary">APPLICATION</span>
                   </h2>
                   <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] max-w-md mx-auto leading-relaxed">
                      Fill in your details and we'll get back to you within 48 hours. <br />
                      Position: <span className="text-white">{applyingFor}</span>
                   </p>
                </div>

                <div className="glass p-8 md:p-16 rounded-[48px] border border-white/5 bg-[#0F0F1A] max-w-4xl w-full relative overflow-hidden shadow-2xl">
                   <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-primary via-[#6366f1] to-brand-secondary" />
                  
                   {isSuccess ? (
                     <div className="text-center py-20">
                        <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-8 animate-bounce">
                           ✅
                        </div>
                        <h3 className="text-3xl font-black text-white italic uppercase mb-4">Transmission Successful</h3>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed mb-10">Your metadata has been successfully added to our neural vetting queue. Our specialists will synchronize with you within 48 hours.</p>
                        <button 
                           onClick={() => { setApplyingFor(null); setIsSuccess(false); }}
                           className="bg-brand-primary text-white font-black px-12 py-5 rounded-full text-[11px] uppercase tracking-[0.3em]"
                        >
                           Return to Core
                        </button>
                     </div>
                   ) : (
                     <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">First Name</label>
                              <input required type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-white/5" placeholder="Priya" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Last Name</label>
                              <input required type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-white/5" placeholder="Sharma" />
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Email Address</label>
                              <input required type="email" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-white/5" placeholder="priya@example.com" />
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Phone Number</label>
                              <input required type="tel" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-white/5" placeholder="+91 98765 43210" />
                           </div>
                        </div>

                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Role Applying For</label>
                           <div className="relative">
                             <select defaultValue={applyingFor || ''} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white text-sm focus:border-brand-primary outline-none transition-all appearance-none cursor-pointer">
                                {jobs.map(j => <option key={j.title} value={j.title} className="bg-[#0F0F1A]">{j.title}</option>)}
                             </select>
                             <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                                <ArrowRight className="w-4 h-4 rotate-90" />
                             </div>
                           </div>
                        </div>

                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">LinkedIn / Portfolio URL</label>
                           <input type="url" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-white/5" placeholder="https://linkedin.com/in/yourname" />
                        </div>

                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Resume / CV</label>
                           <input 
                             type="file" 
                             ref={fileInputRef} 
                             className="hidden" 
                             accept=".pdf,.doc,.docx"
                             onChange={(e) => {
                               const file = e.target.files?.[0];
                               if (file) setSelectedFileName(file.name);
                             }}
                           />
                           <div 
                             onClick={() => fileInputRef.current?.click()}
                             className={`border-2 border-dashed rounded-[32px] p-12 text-center transition-all cursor-pointer bg-white/[0.01] ${selectedFileName ? 'border-brand-primary/60 bg-brand-primary/5' : 'border-white/10 hover:border-brand-primary/40'}`}
                           >
                              <div className={`text-3xl mb-4 ${selectedFileName ? 'text-emerald-400' : 'text-brand-primary'}`}>
                                {selectedFileName ? '📄' : '📎'}
                              </div>
                              <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed">
                                 {selectedFileName ? (
                                   <span className="text-white">Selected: {selectedFileName}</span>
                                 ) : (
                                   <>
                                     <span className="text-brand-primary text-glow">Click to upload</span> or drag & drop Resume <br />
                                     <span className="text-white/10 italic">PDF, DOCX — MAX 5MB</span>
                                   </>
                                 )}
                              </p>
                           </div>
                        </div>

                        <div className="space-y-3">
                           <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Why Trinexiss? (Optional)</label>
                           <textarea rows={4} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white text-sm focus:border-brand-primary outline-none transition-all placeholder:text-white/5" placeholder="Tell us what excites you about this role..."></textarea>
                        </div>

                        <button 
                           type="submit"
                           disabled={isSubmitting}
                           className="w-full bg-brand-primary text-white font-black py-6 rounded-full text-[12px] uppercase tracking-[0.4em] hover:brightness-110 active:scale-95 transition-all shadow-[0_20px_60px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                           {isSubmitting ? (
                             <>Transmitting Data... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                           ) : (
                             <>Submit Application <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></>
                           )}
                        </button>
                     </form>
                   )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer mini */}
          <footer className="py-12 px-6 text-center text-white/10 text-[8px] font-black uppercase tracking-[1em]">
            © 2026 Trinexiss Technologies — Reciprocal Recruiting Terminal
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---
export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [activeDeepDive, setActiveDeepDive] = useState<'bot' | 'saas' | 'technical' | 'resourcing' | 'hr' | 'marketing' | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showCareers, setShowCareers] = useState(false);

  const handleNavClick = (link: string) => {
    setActiveNav(link);
    setActiveDeepDive(null);
    if (link === 'Careers') {
      setShowCareers(true);
      // We keep activeNav 'Home' or whatever it was if careers is just an overlay?
      // Actually the user wants sections. Let's treat Careers as a section if they click it.
    } else {
      setShowCareers(false);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  
  // --- Digital Marketing Deep Dive View ---
  const MarketingDeepDive = () => {
    const theme = {
      accent: 'text-violet-400',
      bg: 'bg-violet-400/10',
      border: 'border-violet-400/10',
      hoverBg: 'hover:bg-violet-400',
      hoverAccent: 'group-hover:text-violet-400',
      fill: 'fill-violet-400',
      glow: 'shadow-[0_0_30px_rgba(167,139,250,0.15)]'
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="w-full"
      >
        <button 
          onClick={() => {
            setActiveDeepDive(null);
            window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-2 ${theme.accent} text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all`}
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
        </button>

        {/* Header Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase leading-[0.9]">
                Digital <br />
                <span className={theme.accent}>Marketing</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl font-medium leading-relaxed">
                Performance-driven marketing strategies helping your business attract the right audience and achieve measurable growth online.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-violet-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Digital Marketing"
                className="rounded-[40px] border border-white/10 grayscale-0 group-hover:grayscale-0 transition-all shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { value: '3x', label: 'ROI Improvement', desc: 'Performance-backed results' },
            { value: '60%', label: 'Organic Traffic', desc: 'Visibility growth' },
            { value: '40%', label: 'Lower Cost/Lead', desc: 'Optimised spend' }
          ].map((stat, i) => (
            <div key={i} className={`glass p-8 rounded-[32px] border-white/5 text-center transition-all hover:border-violet-400/20 ${theme.glow}`}>
              <div className={`text-4xl font-black ${theme.accent} mb-1 italic`}>{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">{stat.label}</div>
              <div className="text-white/30 text-[10px] font-medium italic">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* What we offer Grid */}
        <div className="mb-40">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>What We Offer</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: BarChart3, title: 'Facebook & Google Ads', desc: 'We create and manage high-performing paid campaigns across Facebook and Google — with precise audience targeting, compelling creatives, and continuous optimisation to maximise every rupee of ad spend.' },
              { icon: Sun, title: 'SEO optimisation', desc: 'We help your business rank higher on search engines through keyword research, on-page optimisation, technical SEO audits, and authoritative link building — driving sustainable organic traffic long-term.' },
              { icon: Mail, title: 'GTM & GA4 setup', desc: 'We configure Google Tag Manager and GA4 to give you accurate, actionable data — setting up event tracking, conversion goals, and clean data flows so you can make smarter marketing decisions with confidence.' },
              { icon: ImageIcon, title: 'Performance reporting', desc: 'We deliver clear, comprehensive reports that translate complex marketing data into meaningful insights — covering campaign results, traffic analysis, conversions, and ROI to keep you fully informed at all times.' }
            ].map((feature, i) => (
              <div key={i} className={`bg-white/[0.02] border border-white/10 p-12 rounded-[50px] group ${theme.hoverBg} transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.accent} mb-8 group-hover:bg-white transition-colors`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-black text-white italic uppercase mb-4 group-hover:text-brand-bg transition-colors">{feature.title}</h4>
                <p className="text-white/40 text-lg font-medium leading-relaxed group-hover:text-brand-bg/60 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <div className="glass p-16 rounded-[60px] border-black/5 mb-40 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-violet-400 opacity-5 blur-3xl`} />
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>Real-World Example</div>
          <div>
            <h3 className="text-4xl font-bold uppercase mb-6 tracking-tighter text-slate-900">Google Ads & SEO — <span className={theme.accent}>e-commerce brand scaling from 0 to 10k monthly visitors</span></h3>
            <p className="text-xl text-slate-500 font-medium mb-16 max-w-4xl">A new e-commerce brand had no online visibility and was struggling to generate sales. Here is exactly how our digital marketing strategy transformed their presence in 90 days:</p>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-900">
              {[
                'Audit & strategy built',
                'Google Ads launched',
                'SEO optimised',
                'GA4 & GTM configured',
                '10k visitors & 3x ROI'
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${idx === 4 ? `bg-violet-400 text-white border-violet-400 shadow-lg` : 'border-slate-200 text-slate-400 font-black'}`}>
                    {step}
                  </div>
                  {idx < 4 && <ArrowRight className="w-4 h-4 text-slate-200" />}
                </div>
              ))}
            </div>

            <div className="mt-20 bg-slate-50 border border-slate-100 p-10 rounded-3xl">
               <div className={`text-[10px] font-black ${theme.accent} uppercase tracking-widest mb-4`}>Outcome — achieved in 90 days</div>
               <p className="text-slate-900 text-lg font-medium italic leading-relaxed">
                  "The brand grew from zero online presence to 10,000 monthly visitors, achieved a 3x return on ad spend, reduced cost per lead by 42%, and ranked on page one of Google for 15 target keywords — all within the first 90 days of the campaign."
               </p>
            </div>
          </div>
        </div>

        {/* Marketing Services Grid */}
        <div className="mb-20">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40 text-center`}>Our Digital Marketing Services</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Facebook & Google Ads', desc: 'Data-driven paid campaigns that maximise reach and ROI.' },
              { title: 'SEO optimisation', desc: 'Sustainable organic growth through proven SEO strategies.' },
              { title: 'GTM & GA4 setup', desc: 'Accurate tracking and analytics for smarter decisions.' },
              { title: 'Performance reporting', desc: 'Clear, actionable reports turning data into business insights.' }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-[40px] border-white/5 hover:border-violet-400/20 transition-all">
                 <div className="w-2 h-2 bg-violet-400 rounded-full mb-6" />
                 <h5 className="text-xl font-black text-white italic uppercase mb-4">{s.title}</h5>
                 <p className="text-white/40 text-[11px] font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-40 text-center">
          <button 
            onClick={() => {
              setActiveDeepDive(null);
              window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-4 ${theme.accent} text-[12px] font-black uppercase tracking-[0.5em] hover:gap-8 transition-all group`}
          >
            <ArrowRight className="w-6 h-6 rotate-180" /> Back to All Solutions
          </button>
        </div>
      </motion.div>
    );
  };

  // --- HR Deep Dive View ---
  const HRDeepDive = () => {
    const theme = {
      accent: 'text-sky-400',
      bg: 'bg-sky-400/10',
      border: 'border-sky-400/10',
      hoverBg: 'hover:bg-sky-400',
      hoverAccent: 'group-hover:text-sky-400',
      fill: 'fill-sky-400',
      glow: 'shadow-[0_0_30px_rgba(56,189,248,0.15)]'
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="w-full"
      >
        <button 
          onClick={() => {
            setActiveDeepDive(null);
            window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-2 ${theme.accent} text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all`}
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
        </button>

        {/* Header Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-[0.9]">
                HR <br />
                <span className={theme.accent}>Services</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl font-medium leading-relaxed">
                Empowering your business to build stronger teams, stay fully compliant, and create a thriving workplace culture.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-sky-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1521737706096-784826ae08b1?auto=format&fit=crop&q=80&w=1200" 
                alt="HR Services"
                className="rounded-[40px] border border-white/10 grayscale group-hover:grayscale-0 transition-all shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { value: '100%', label: 'Compliance', desc: 'Risk mitigation' },
            { value: '40%', label: 'Faster Onboarding', desc: 'Rapid productivity' },
            { value: '60%', label: 'Fewer Errors', desc: 'Managed precision' }
          ].map((stat, i) => (
            <div key={i} className={`glass p-8 rounded-[32px] border-white/5 text-center transition-all hover:border-sky-400/20 ${theme.glow}`}>
              <div className={`text-4xl font-black ${theme.accent} mb-1 italic`}>{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">{stat.label}</div>
              <div className="text-white/30 text-[10px] font-medium italic">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* What we offer Grid */}
        <div className="mb-40">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>What We Offer</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: UserPlus, title: 'Employee onboarding', desc: 'We design smooth, structured onboarding experiences from documentation and induction to system access and team integration — reducing time-to-productivity and improving early retention.' },
              { icon: ShieldCheck, title: 'HR compliance & policy', desc: 'We help businesses stay fully compliant with employment laws — drafting legally sound HR policies, conducting compliance audits, and protecting your business, people, and reputation at every level.' },
              { icon: BarChart3, title: 'Performance management', desc: 'We build effective performance frameworks that align individual goals with business objectives — setting clear KPIs, conducting appraisals, and fostering a culture of continuous improvement.' },
              { icon: Wallet, title: 'Payroll & benefits admin', desc: 'We manage payroll and employee benefits with complete accuracy and compliance — handling salaries, tax deductions, pensions, and leave so your people are paid correctly and on time, every time.' }
            ].map((feature, i) => (
              <div key={i} className={`bg-white/[0.02] border border-white/10 p-12 rounded-[50px] group ${theme.hoverBg} transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.accent} mb-8 group-hover:bg-white transition-colors`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-black text-white italic uppercase mb-4 group-hover:text-brand-bg transition-colors">{feature.title}</h4>
                <p className="text-white/40 text-lg font-medium leading-relaxed group-hover:text-brand-bg/60 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <div className="glass p-16 rounded-[60px] border-white/5 mb-40 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-sky-400 opacity-5 blur-3xl`} />
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>Real-World Example</div>
          <div>
            <h3 className="text-4xl font-black italic uppercase mb-6 tracking-tighter text-white">HR compliance & onboarding — <span className={theme.accent}>80-person company with no formal HR system</span></h3>
            <p className="text-xl text-white/40 font-medium mb-16 max-w-4xl">A growing company had no structured HR processes — onboarding was inconsistent, policies were outdated, and payroll was managed manually via spreadsheets. Here is how we transformed their HR operations:</p>
            
            <div className="flex flex-wrap items-center gap-6 text-white">
              {[
                'HR audit conducted',
                'Policies drafted',
                'Onboarding designed',
                'Payroll automated',
                'Fully compliant & live'
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${idx === 4 ? `bg-sky-400 text-brand-bg border-sky-400` : 'border-white/10 text-white/40 font-black'}`}>
                    {step}
                  </div>
                  {idx < 4 && <ArrowRight className="w-4 h-4 text-white/10" />}
                </div>
              ))}
            </div>

            <div className="mt-20 bg-black/40 border border-white/10 p-10 rounded-3xl">
               <div className={`text-[10px] font-black ${theme.accent} uppercase tracking-widest mb-4`}>Outcome — implemented in 4 weeks</div>
               <p className="text-white text-lg font-medium italic leading-relaxed">
                  "The company went from zero formal HR structure to a fully compliant, professionally managed operation — with a structured onboarding programme, legally sound policy handbook, automated payroll, and a performance review framework, all within 4 weeks."
               </p>
            </div>
          </div>
        </div>

        {/* HR Services Grid (as requested in screenshot) */}
        <div className="mb-20">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40 text-center`}>Our HR Services</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Employee onboarding', desc: 'Structured, welcoming onboarding that sets every hire up for success.' },
              { title: 'HR compliance & policy', desc: 'Legally sound policies and compliance audits for full protection.' },
              { title: 'Performance management', desc: 'KPI frameworks and appraisal systems that drive high performance.' },
              { title: 'Payroll & benefits admin', desc: 'Accurate, compliant payroll and benefits managed end-to-end.' }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-[40px] border-white/5 hover:border-sky-400/20 transition-all">
                 <div className="w-2 h-2 bg-sky-400 rounded-full mb-6" />
                 <h5 className="text-xl font-black text-white italic uppercase mb-4">{s.title}</h5>
                 <p className="text-white/40 text-[11px] font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-40 text-center">
          <button 
            onClick={() => {
              setActiveDeepDive(null);
              window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-4 ${theme.accent} text-[12px] font-black uppercase tracking-[0.5em] hover:gap-8 transition-all group`}
          >
            <ArrowRight className="w-6 h-6 rotate-180" /> Back to All Solutions
          </button>
        </div>
      </motion.div>
    );
  };

  // --- Resourcing Deep Dive View ---
  const ResourcingDeepDive = () => {
    const theme = {
      accent: 'text-pink-400',
      bg: 'bg-pink-400/10',
      border: 'border-pink-400/10',
      hoverBg: 'hover:bg-pink-400',
      hoverAccent: 'group-hover:text-pink-400',
      fill: 'fill-pink-400',
      glow: 'shadow-[0_0_30px_rgba(244,63,94,0.15)]'
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="w-full"
      >
        <button 
          onClick={() => {
            setActiveDeepDive(null);
            window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-2 ${theme.accent} text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all`}
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
        </button>

        {/* Header Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase leading-[0.9]">
                Resourcing & <br />
                <span className={theme.accent}>Hiring</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl font-medium leading-relaxed">
                Strategic talent acquisition and resource management to build high-performing technical teams.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-pink-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1521737706096-784826ae08b1?auto=format&fit=crop&q=80&w=1200" 
                alt="Resourcing"
                className="rounded-[40px] border border-white/10 grayscale group-hover:grayscale-0 transition-all shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { value: '48hrs', label: 'Shortlist Time', desc: 'Rapid identification' },
            { value: '95%', label: 'Retention', desc: 'Cultural alignment' },
            { value: '500+', label: 'Professionals', desc: 'Proven track record' }
          ].map((stat, i) => (
            <div key={i} className={`glass p-8 rounded-[32px] border-white/5 text-center transition-all hover:border-pink-400/20 ${theme.glow}`}>
              <div className={`text-4xl font-black ${theme.accent} mb-1 italic`}>{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">{stat.label}</div>
              <div className="text-white/30 text-[10px] font-medium italic">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* What we offer Grid */}
        <div className="mb-40">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>What We Offer</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: FileSearch, title: 'Contractual & permanent staffing', desc: 'We provide flexible staffing solutions for both short-term contracts and long-term permanent roles — sourcing, vetting, and placing the right talent quickly, efficiently, and with precision.' },
              { icon: UserPlus, title: 'Technical talent sourcing', desc: 'We identify and attract top-tier professionals across software development, cloud, data science, and AI — using deep industry networks and rigorous assessments beyond job boards.' },
              { icon: Building2, title: 'Executive search', desc: 'We find exceptional senior leaders and C-suite executives through a thorough, confidential search process — connecting you with visionary leaders who drive innovation and deliver results.' },
              { icon: ClipboardList, title: 'Resource augmentation', desc: 'We extend your existing teams with skilled professionals on demand — giving you the flexibility to scale up quickly for new projects without the overhead of permanent hiring.' }
            ].map((feature, i) => (
              <div key={i} className={`bg-white/[0.02] border border-white/10 p-12 rounded-[50px] group ${theme.hoverBg} transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.accent} mb-8 group-hover:bg-white transition-colors`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-black text-white italic uppercase mb-4 group-hover:text-brand-bg transition-colors">{feature.title}</h4>
                <p className="text-white/40 text-lg font-medium leading-relaxed group-hover:text-brand-bg/60 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <div className="glass p-16 rounded-[60px] border-white/5 mb-40 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-pink-400 opacity-5 blur-3xl`} />
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>Real-World Example</div>
          <div>
            <h3 className="text-4xl font-black italic uppercase mb-6 tracking-tighter text-white">Technical talent sourcing — <span className={theme.accent}>scaling a fintech startup's engineering team</span></h3>
            <p className="text-xl text-white/40 font-medium mb-16 max-w-4xl">A fast-growing fintech startup needed to hire 5 senior engineers within 3 weeks to meet a critical product launch deadline. Here is exactly how we delivered:</p>
            
            <div className="flex flex-wrap items-center gap-6 text-white">
              {[
                'Role briefing session',
                'Network & sourcing',
                'Technical screening',
                'Client interviews',
                '5 engineers placed'
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${idx === 4 ? `bg-pink-400 text-brand-bg border-pink-400` : 'border-white/10 text-white/40 font-black'}`}>
                    {step}
                  </div>
                  {idx < 4 && <ArrowRight className="w-4 h-4 text-white/10" />}
                </div>
              ))}
            </div>

            <div className="mt-20 bg-black/40 border border-white/10 p-10 rounded-3xl">
               <div className={`text-[10px] font-black ${theme.accent} uppercase tracking-widest mb-4`}>Outcome — delivered in 18 days</div>
               <p className="text-white text-lg font-medium italic leading-relaxed">
                  "All 5 senior engineers were sourced, screened, interviewed, and onboarded within 18 days — enabling the startup to hit their product launch deadline on time, with a high-performing team that remained fully retained at the 12-month mark."
               </p>
            </div>
          </div>
        </div>

        {/* Resourcing Services Grid */}
        <div className="mb-20">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40 text-center`}>Our Resourcing Services</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Contractual & permanent staffing', desc: 'Flexible hiring solutions for both short and long-term needs.' },
              { title: 'Technical talent sourcing', desc: 'Top-tier tech professionals sourced from deep industry networks.' },
              { title: 'Executive search', desc: 'Confidential search for senior leaders and C-suite executives.' },
              { title: 'Resource augmentation', desc: 'On-demand skilled professionals to extend your existing teams.' }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-[40px] border-white/5 hover:border-pink-400/20 transition-all">
                 <div className="w-2 h-2 bg-pink-400 rounded-full mb-6" />
                 <h5 className="text-xl font-black text-white italic uppercase mb-4">{s.title}</h5>
                 <p className="text-white/40 text-[11px] font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-40 text-center">
          <button 
            onClick={() => {
              setActiveDeepDive(null);
              window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-4 ${theme.accent} text-[12px] font-black uppercase tracking-[0.5em] hover:gap-8 transition-all group`}
          >
            <ArrowRight className="w-6 h-6 rotate-180" /> Back to All Solutions
          </button>
        </div>
      </motion.div>
    );
  };


  // --- Technical Deep Dive View ---
  const TechnicalDeepDive = () => {
    const theme = {
      accent: 'text-orange-400',
      bg: 'bg-orange-400/10',
      border: 'border-orange-400/10',
      hoverBg: 'hover:bg-orange-400',
      hoverAccent: 'group-hover:text-orange-400',
      fill: 'fill-orange-400',
      glow: 'shadow-[0_0_30px_rgba(251,146,60,0.15)]'
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="w-full"
      >
        <button 
          onClick={() => {
            setActiveDeepDive(null);
            window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-2 ${theme.accent} text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all`}
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
        </button>

        {/* Header Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase leading-[0.9]">
                Technical <br />
                <span className={theme.accent}>Services</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl font-medium leading-relaxed">
                Reliable, secure, and scalable technology foundations that power your business forward.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
                alt="Technical Services"
                className="rounded-[40px] border border-white/10 grayscale group-hover:grayscale-0 transition-all shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { value: '99.9%', label: 'System Uptime', desc: 'Enterprise reliability' },
            { value: '50%', label: 'Cost Reduction', desc: 'Resource optimisation' },
            { value: '24/7', label: 'IT Support', desc: 'Active monitoring' }
          ].map((stat, i) => (
            <div key={i} className={`glass p-8 rounded-[32px] border-white/5 text-center transition-all hover:border-orange-400/20 ${theme.glow}`}>
              <div className={`text-4xl font-black ${theme.accent} mb-1 italic`}>{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">{stat.label}</div>
              <div className="text-white/30 text-[10px] font-medium italic">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* What we offer Grid */}
        <div className="mb-40">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>What We Offer</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Briefcase, title: 'IT infrastructure setup', desc: 'We design and deploy robust IT infrastructure including network configuration, server setup, hardware procurement, and security implementation — building a solid foundation for your operations.' },
              { icon: Globe, title: 'Cloud migration & management', desc: 'We guide your business through a seamless transition to AWS, Google Cloud, or Azure — with zero data loss, minimal downtime, and ongoing cloud optimisation post-migration.' },
              { icon: CpuIcon, title: 'Custom software engineering', desc: 'We engineer bespoke software tailored to your business challenges — from enterprise applications and internal tools to complex backend systems, all built to your exact specifications.' },
              { icon: Share2, title: 'System integration', desc: 'We connect your platforms, tools, and third-party services into one unified ecosystem — eliminating data silos, reducing manual work, and ensuring all systems communicate seamlessly.' }
            ].map((feature, i) => (
              <div key={i} className={`bg-white/[0.02] border border-white/10 p-12 rounded-[50px] group ${theme.hoverBg} transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.accent} mb-8 group-hover:bg-white transition-colors`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-black text-white italic uppercase mb-4 group-hover:text-brand-bg transition-colors">{feature.title}</h4>
                <p className="text-white/40 text-lg font-medium leading-relaxed group-hover:text-brand-bg/60 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <div className="glass p-16 rounded-[60px] border-white/5 mb-40 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-orange-400 opacity-5 blur-3xl`} />
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>Real-World Example</div>
          <div>
            <h3 className="text-4xl font-black italic uppercase mb-6 tracking-tighter text-white">Cloud migration — <span className={theme.accent}>mid-size enterprise moving from on-premise to AWS</span></h3>
            <p className="text-xl text-white/40 font-medium mb-16 max-w-4xl">A 200-person company was running ageing on-premise servers causing frequent downtime and high maintenance costs. Here is how we migrated them to the cloud safely and efficiently:</p>
            
            <div className="flex flex-wrap items-center gap-6 text-white">
              {[
                'Infrastructure audit',
                'Migration plan built',
                'Data transferred to AWS',
                'Systems tested & verified',
                'Live with zero downtime'
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${idx === 4 ? `bg-orange-400 text-brand-bg border-orange-400` : 'border-white/10 text-white/40 font-black'}`}>
                    {step}
                  </div>
                  {idx < 4 && <ArrowRight className="w-4 h-4 text-white/10" />}
                </div>
              ))}
            </div>

            <div className="mt-20 bg-black/40 border border-white/10 p-10 rounded-3xl">
               <div className={`text-[10px] font-black ${theme.accent} uppercase tracking-widest mb-4`}>Outcome — completed in 3 weeks</div>
               <p className="text-white text-lg font-medium italic leading-relaxed">
                  "The company achieved 99.9% uptime, reduced IT infrastructure costs by 47%, eliminated hardware maintenance entirely, and gained real-time cloud monitoring — all with zero disruption to daily business operations during the migration."
               </p>
            </div>
          </div>
        </div>

        {/* Technical Services Grid */}
        <div className="mb-20">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40 text-center`}>Our Technical Services</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'IT infrastructure setup', desc: 'Reliable networks, servers, and security built for your business.' },
              { title: 'Cloud migration & management', desc: 'Seamless move to AWS, GCP, or Azure with zero data loss.' },
              { title: 'Custom software engineering', desc: 'Bespoke enterprise software built to your exact requirements.' },
              { title: 'System integration', desc: 'All your platforms connected into one seamless ecosystem.' }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-[40px] border-white/5 hover:border-orange-400/20 transition-all">
                 <div className="w-2 h-2 bg-orange-400 rounded-full mb-6" />
                 <h5 className="text-xl font-black text-white italic uppercase mb-4">{s.title}</h5>
                 <p className="text-white/40 text-[11px] font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-40 text-center">
          <button 
            onClick={() => {
              setActiveDeepDive(null);
              window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-4 ${theme.accent} text-[12px] font-black uppercase tracking-[0.5em] hover:gap-8 transition-all group`}
          >
            <ArrowRight className="w-6 h-6 rotate-180" /> Back to All Solutions
          </button>
        </div>
      </motion.div>
    );
  };


  // --- Bot Deep Dive View ---
  const BotDeepDive = () => {
    const theme = {
      accent: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
      border: 'border-cyan-400/10',
      hoverBg: 'hover:bg-cyan-400',
      hoverAccent: 'group-hover:text-cyan-400',
      fill: 'fill-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(34,211,238,0.15)]'
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="w-full"
      >
        <button 
          onClick={() => {
            setActiveDeepDive(null);
            window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-2 ${theme.accent} text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all`}
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
        </button>

        {/* Header Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase leading-[0.9]">
                Trinexiss Bot <br />
                <span className={theme.accent}>Creation</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl font-medium leading-relaxed">
                Intelligent neural agents that think, decide, and act on your behalf — automating complex tasks 24/7.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Bot Creation"
                className="rounded-[40px] border border-white/10 grayscale group-hover:grayscale-0 transition-all shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { value: '24/7', label: 'Always Active', desc: 'Syncing protocols' },
            { value: '80%', label: 'Less Manual', desc: 'Efficiency gains' },
            { value: '10x', label: 'Faster Cycles', desc: 'Instantaneous data' }
          ].map((stat, i) => (
            <div key={i} className={`glass p-8 rounded-[32px] border-white/5 text-center transition-all hover:border-cyan-400/20 ${theme.glow}`}>
              <div className={`text-4xl font-black ${theme.accent} mb-1 italic`}>{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">{stat.label}</div>
              <div className="text-white/30 text-[10px] font-medium italic">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* What is a Bot Grid */}
        <div className="mb-40">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>What is a Trinexiss Bot?</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: CpuIcon, title: 'Thinks independently', desc: 'Bots use large language models to understand context, analyze situations, and make intelligent decisions without constant human input.' },
              { icon: ZapIcon, title: 'Acts automatically', desc: 'They execute multi-step tasks autonomously — sending emails, updating databases, triggering workflows — all without manual intervention.' },
              { icon: LinkIcon, title: 'Connects your tools', desc: 'Bots integrate with your existing platforms — CRM, email, Slack, databases — acting as the intelligent glue between all your systems.' },
              { icon: BarChart3, title: 'Learns and improves', desc: 'Over time, bots learn from feedback and patterns — continuously improving their accuracy, relevance, and performance for your business.' }
            ].map((feature, i) => (
              <div key={i} className={`bg-white/[0.02] border border-white/10 p-12 rounded-[50px] group ${theme.hoverBg} transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.accent} mb-8 group-hover:bg-white transition-colors`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-black text-white italic uppercase mb-4 group-hover:text-brand-bg transition-colors">{feature.title}</h4>
                <p className="text-white/40 text-lg font-medium leading-relaxed group-hover:text-brand-bg/60 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <div className="glass p-16 rounded-[60px] border-white/5 mb-40 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-cyan-400 opacity-5 blur-3xl`} />
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>Real-World Case Study</div>
          <div>
            <h3 className="text-4xl font-black italic uppercase mb-6 tracking-tighter text-white">Customer support bot — <span className={theme.accent}>e-commerce store</span></h3>
            <p className="text-xl text-white/40 font-medium mb-16 max-w-4xl">A customer messages your store asking "Where is my order?" — here is exactly what the bot does automatically, in seconds:</p>
            
            <div className="flex flex-wrap items-center gap-6 text-white">
              {[
                'Customer asks question',
                'Bot reads message',
                'Checks order database',
                'Fetches tracking info',
                'Sends personalised reply'
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${idx === 4 ? `bg-cyan-400 text-brand-bg border-cyan-400` : 'border-white/10 text-white/40 font-black'}`}>
                    {step}
                  </div>
                  {idx < 4 && <ArrowRight className="w-4 h-4 text-white/10" />}
                </div>
              ))}
            </div>

            <div className="mt-20 bg-black/40 border border-white/10 p-10 rounded-3xl">
               <div className={`text-[10px] font-black ${theme.accent} uppercase tracking-widest mb-4`}>Bot reply — generated in 1.2 seconds</div>
               <p className="text-white text-lg font-medium italic leading-relaxed">
                  "Hi Sarah! Your order #4521 was dispatched on 30 April and is currently out for delivery. Expected arrival: today by 6 PM. Track it here: [link]. Let me know if you need anything else!"
               </p>
            </div>
          </div>
        </div>

        {/* Hero Diagram */}
        <div className="text-center mb-40">
           <div className="inline-flex gap-4 items-center glass px-8 py-4 rounded-3xl border-white/10 mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Bot System Architecture</span>
           </div>
           <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
              {[
                { icon: User, title: 'User input', desc: 'Message, trigger or event' },
                { icon: Brain, title: 'Neural brain', desc: 'Understands, reasons, decides' },
                { icon: CheckCircle2, title: 'Action taken', desc: 'Task executed automatically' }
              ].map((node, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-[32px] bg-white/[0.03] border border-white/10 flex items-center justify-center ${theme.accent} mb-6">
                      <node.icon className="w-10 h-10" />
                    </div>
                    <h5 className="text-xl font-black text-white italic uppercase mb-2">{node.title}</h5>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">{node.desc}</p>
                  </div>
                  {i < 2 && <ArrowRight className="w-8 h-8 text-white/10 hidden md:block" />}
                </React.Fragment>
              ))}
           </div>
        </div>

        {/* ROI Engine Section */}
        <div className="mb-40 pt-40 border-t border-white/5">
          <ROIEngine />
        </div>

        {/* Bot Services Grid */}
        <div className="mb-20">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40 text-center`}>Our AI Agent Services</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI Bot Creation', desc: 'Custom intelligent agents built for your specific business processes and goals.' },
              { title: 'Zapier & n8n Workflows', desc: 'Automated pipelines connecting all your tools without manual work.' },
              { title: 'No-Code Solutions', desc: 'Powerful software built fast, without writing a single line of code.' },
              { title: 'Custom AI Integrations', desc: 'AI embedded directly into your existing platforms and systems.' }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-[40px] border-white/5 hover:border-cyan-400/20 transition-all">
                 <div className="w-2 h-2 bg-cyan-400 rounded-full mb-6" />
                 <h5 className="text-xl font-black text-white italic uppercase mb-4">{s.title}</h5>
                 <p className="text-white/40 text-[11px] font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-40 text-center">
          <button 
            onClick={() => {
              setActiveDeepDive(null);
              window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-4 ${theme.accent} text-[12px] font-black uppercase tracking-[0.5em] hover:gap-8 transition-all group`}
          >
            <ArrowRight className="w-6 h-6 rotate-180" /> Back to All Solutions
          </button>
        </div>
      </motion.div>
    );
  };

  // --- SaaS Deep Dive View ---
  const SaaSDeepDive = () => {
    const theme = {
      accent: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
      border: 'border-emerald-400/10',
      hoverBg: 'hover:bg-emerald-400',
      hoverAccent: 'group-hover:text-emerald-400',
      fill: 'fill-emerald-400',
      glow: 'shadow-[0_0_30px_rgba(52,211,153,0.15)]'
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        className="w-full"
      >
        <button 
          onClick={() => {
            setActiveDeepDive(null);
            window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-2 ${theme.accent} text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all`}
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Solutions
        </button>

        {/* Header Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase leading-[0.9]">
                SaaS <br />
                <span className={theme.accent}>Development</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-xl font-medium leading-relaxed">
                End-to-end SaaS application development using modern stacks — delivering fast, scalable software.
              </p>
            </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-emerald-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200" 
                        alt="SaaS Development Architecture"
                        className="rounded-[40px] border border-white/10 grayscale group-hover:grayscale-0 transition-all shadow-2xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { value: '100%', label: 'Custom Built', desc: 'Performance architectures' },
            { value: '3x', label: 'Faster Delivery', desc: 'Rapid prototyping' },
            { value: '99.9%', label: 'Uptime', desc: 'Enterprise reliability' }
          ].map((stat, i) => (
            <div key={i} className={`glass p-8 rounded-[32px] border-white/5 text-center transition-all hover:border-emerald-400/20 ${theme.glow}`}>
              <div className={`text-4xl font-black ${theme.accent} mb-1 italic`}>{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">{stat.label}</div>
              <div className="text-white/30 text-[10px] font-medium italic">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* What is SaaS Development Grid */}
        <div className="mb-40">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>Engineering Excellence</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Globe, title: 'Custom web applications', desc: 'We design and build fully customised web applications using React and Node.js — fast, responsive, and tailored to your exact business requirements.' },
              { icon: ZapIcon, title: 'Firebase integration', desc: 'We integrate Firebase to provide real-time syncing, secure authentication, cloud storage, and serverless backend infrastructure for your application.' },
              { icon: Database, title: 'Database architecture', desc: 'We design robust, scalable database structures — relational or NoSQL — built for performance, data integrity, and long-term growth without costly rebuilds.' },
              { icon: CheckCircle2, title: 'Scalable cloud solutions', desc: 'We deploy cloud-based infrastructure with auto-scaling, high availability, and cost efficiency — handling everything from launch traffic to enterprise-level demand.' }
            ].map((feature, i) => (
              <div key={i} className={`bg-white/[0.02] border border-white/10 p-12 rounded-[50px] group ${theme.hoverBg} transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} flex items-center justify-center ${theme.accent} mb-8 group-hover:bg-white transition-colors`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-3xl font-black text-white italic uppercase mb-4 group-hover:text-brand-bg transition-colors">{feature.title}</h4>
                <p className="text-white/40 text-lg font-medium leading-relaxed group-hover:text-brand-bg/60 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <div className="glass p-16 rounded-[60px] border-white/5 mb-40 relative overflow-hidden shadow-xl">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-emerald-400 opacity-5 blur-3xl`} />
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40`}>Real-World Case Study</div>
          <div>
            <h3 className="text-4xl font-black italic uppercase mb-6 tracking-tighter text-white">Project management SaaS — <span className={theme.accent}>built for a growing startup</span></h3>
            <p className="text-xl text-white/40 font-medium mb-16 max-w-4xl">A startup needed a custom SaaS platform for their team to manage tasks, track progress, and collaborate in real time. Here is how we built and delivered it end-to-end:</p>
            
            <div className="flex flex-wrap items-center gap-6 text-white">
              {[
                'Requirements & design',
                'React frontend built',
                'Node.js backend setup',
                'Firebase integrated',
                'Deployed & live'
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${idx === 4 ? `bg-emerald-400 text-brand-bg border-emerald-400` : 'border-white/10 text-white/40 font-black'}`}>
                    {step}
                  </div>
                  {idx < 4 && <ArrowRight className="w-4 h-4 text-white/10" />}
                </div>
              ))}
            </div>

            <div className="mt-20 bg-black/40 border border-white/10 p-10 rounded-3xl">
               <div className={`text-[10px] font-black ${theme.accent} uppercase tracking-widest mb-4`}>Outcome — delivered in 6 weeks</div>
               <p className="text-white text-lg font-medium italic leading-relaxed">
                  "The startup launched a fully functional SaaS platform with real-time collaboration, user authentication, role-based access, and a scalable cloud backend — supporting 500+ users from day one with zero downtime."
               </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className={`${theme.accent} text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-40 text-center`}>Our SaaS Development Services</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Custom web applications', desc: 'Fully bespoke apps built with React and Node.js for your business.' },
              { title: 'Firebase integration', desc: 'Real-time sync, authentication, and serverless backend setup.' },
              { title: 'Database architecture', desc: 'Scalable, high-performance database design and optimisation.' },
              { title: 'Scalable cloud solutions', desc: 'Auto-scaling cloud infrastructure for high availability and growth.' }
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-[40px] border-white/5 hover:border-emerald-400/20 transition-all shadow-md">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full mb-6" />
                 <h5 className="text-xl font-black text-white italic uppercase mb-4">{s.title}</h5>
                 <p className="text-white/40 text-[11px] font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-40 text-center">
          <button 
            onClick={() => {
              setActiveDeepDive(null);
              window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-4 ${theme.accent} text-[12px] font-black uppercase tracking-[0.5em] hover:gap-8 transition-all group`}
          >
            <ArrowRight className="w-6 h-6 rotate-180" /> Back to All Solutions
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent selection:bg-brand-secondary selection:text-[#03010c] relative overflow-x-hidden font-sans text-brand-text-body">
      <DynamicBackground />
      <Navbar 
        activeNav={activeNav}
        onNavClick={handleNavClick}
        onScheduleClick={() => setIsConsultationOpen(true)} 
      />

      <main className="pt-24 min-h-screen">
        <AnimatePresence mode="wait">
          {activeNav === 'Home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* --- HERO SECTION --- */}
              <section id="home" className="relative min-h-screen flex items-center px-6 lg:px-24 pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(88,101,242,0.08)_0%,transparent_50% preview)] pointer-events-none" />
                
                <div className="max-w-[1600px] mx-auto w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left/Content Column */}
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="lg:col-span-7 flex flex-col"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 w-fit mb-10">
                        <Zap className="w-3.5 h-3.5 text-brand-secondary" />
                        <span className="text-[10px] font-black text-brand-secondary tracking-[0.2em] uppercase">Empowering Women in Tech</span>
                      </div>
                      
                      <div className="flex flex-col gap-6 mb-10">
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.8] tracking-tighter text-white uppercase italic text-glow">
                          AI-Powered <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary font-black">Automation</span> <br /> 
                          & Growth
                        </h1>
                      </div>
                      
                      <p className="text-lg md:text-xl text-brand-text-body max-w-xl font-medium leading-relaxed mb-10">
                        Trinexiss Technologies is a <span className="text-white font-bold decoration-brand-primary decoration-4 underline-offset-4">women-led</span> innovation hub helping enterprises scale with custom AI agents and automated workflows.
                      </p>
                      
                      <div className="flex flex-wrap gap-5">
                        <button 
                          onClick={() => setIsConsultationOpen(true)}
                          className="btn-primary"
                        >
                          Schedule Consultation
                        </button>
                        <button 
                          onClick={() => handleNavClick('Team')}
                          className="bg-white/[0.03] border border-white/10 text-white font-bold px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all active:scale-95"
                        >
                          Meet Our Team
                        </button>
                      </div>
                    </motion.div>

                    {/* Right Extra Decorative Space - Now with Big 3D Image */}
                    <div className="hidden lg:col-span-5 lg:flex justify-center items-center relative">
                       <motion.div 
                        initial={{ opacity: 0, x: 50, rotateY: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, rotateY: -10, scale: 1 }}
                        whileHover={{ rotateY: 0, rotateX: 5, scale: 1.02 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative w-full aspect-[4/5] max-w-[500px]"
                        style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
                       >
                          {/* Main 3D Card Container */}
                          <motion.div
                            animate={{ 
                               y: [0, -15, 0],
                               rotateX: [0, 1, 0],
                               rotateY: [-5, -2, -5]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full h-full glass border-white/10 rounded-[60px] p-3 overflow-hidden shadow-[0_80px_150px_rgba(37,99,235,0.3)] group"
                            style={{ transformStyle: 'preserve-3d' }}
                          >
                            <img 
                              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                              alt="Neural AI Intelligence" 
                              className="w-full h-full object-cover rounded-[48px] brightness-110 contrast-110 active:scale-95 transition-all duration-500 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#03010c]/80 via-transparent to-brand-primary/20 opacity-60" />
                            
                            {/* Inner Highlight HUD */}
                            <div className="absolute inset-8 border-2 border-white/5 rounded-[40px] pointer-events-none" style={{ transform: 'translateZ(20px)' }} />
                            
                            {/* Floating Stats Label */}
                            <motion.div 
                              animate={{ 
                                y: [0, 10, 0],
                                x: [0, 5, 0]
                              }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute bottom-12 left-12 bg-white/5 backdrop-blur-2xl p-6 rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                              style={{ transform: 'translateZ(60px)' }}
                            >
                               <div className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] mb-1">Neural Core</div>
                               <div className="text-3xl font-black text-white italic">Active</div>
                               <div className="mt-2 flex gap-1">
                                 {[1, 2, 3, 4].map(i => (
                                   <div key={i} className="w-1 h-3 bg-brand-primary/50 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                 ))}
                               </div>
                            </motion.div>

                            {/* Top Floating Badge */}
                            <motion.div 
                              animate={{ y: [0, -10, 0] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute top-12 right-12 bg-brand-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                              style={{ transform: 'translateZ(40px)' }}
                            >
                               <span className="text-[9px] font-bold text-white uppercase tracking-widest whitespace-nowrap">Quantum Compute v2.0</span>
                            </motion.div>
                          </motion.div>

                          {/* Orbiting Ring */}
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-20 border border-white/5 rounded-full -z-10"
                          />
                          <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(88,101,242,0.15)_0%,transparent_70%)] -z-20 blur-3xl opacity-50" />
                       </motion.div>
                    </div>
                  </div>
                </div>
              </section>

              {/* --- STATS SECTION --- */}
              <section className="py-24 border-y border-white/5 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-white">
                  <Counter value={50} label="Partners" suffix="+" />
                  <Counter value={98} label="Success rate" suffix="%" />
                  <Counter value={12} label="Countries" />
                  <Counter value={24} label="Availability" suffix="/7" />
                </div>
              </section>

              {/* Quick Services Preview for Home Page */}
              <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                   <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
                      <div>
                        <div className="text-brand-primary text-xs font-black uppercase tracking-[0.4em] mb-4">Core Expertise</div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-none text-white">Our Leading <br /><span className="text-brand-secondary">Solutions</span></h2>
                      </div>
                      <button 
                        onClick={() => handleNavClick('Services')}
                        className="text-white/40 hover:text-brand-secondary font-black uppercase tracking-widest text-[10px] border-b border-white/10 pb-2 transition-all"
                      >
                        View All Services →
                      </button>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {services.slice(0, 3).map((service, i) => (
                        <ServiceCard key={i} {...service} onClick={() => { setActiveDeepDive(service.id as any); handleNavClick('Services'); }} />
                      ))}
                   </div>
                </div>
              </section>

              {/* Content Trust / Featured Section */}
              <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto text-center">
                   <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 italic uppercase text-white">Trusted by Industry Leaders</h2>
                   <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
                      {['MICROSOFT', 'GOOGLE', 'OPENAI', 'AMAZON', 'META'].map(brand => (
                        <span key={brand} className="text-2xl font-black tracking-tighter text-white">{brand}</span>
                      ))}
                   </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeNav === 'Services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {!activeDeepDive ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                  <div className="max-w-2xl">
                    <div className="text-brand-secondary text-xs font-bold uppercase tracking-[0.4em] mb-4">Our Core Expertise</div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                      Scalable <span className="text-brand-secondary">Solutions</span> <br /> 
                      Built for Modernity.
                    </h2>
                  </div>
                  <p className="text-brand-text-body max-w-sm text-sm font-medium leading-relaxed border-l border-brand-border pl-10">
                    We deliver the technical edge required to lead in competitive markets through rigorous engineering and strategic innovation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {services.map((s, i) => (
                    <ServiceCard 
                      key={i} 
                      {...s} 
                      onClick={() => s.clickable && setActiveDeepDive(s.id as any)} 
                    />
                  ))}
                </div>
              </motion.div>
            ) : activeDeepDive === 'bot' ? (
              <BotDeepDive key="bot" />
            ) : activeDeepDive === 'saas' ? (
              <SaaSDeepDive key="saas" />
            ) : activeDeepDive === 'technical' ? (
              <TechnicalDeepDive key="technical" />
            ) : activeDeepDive === 'resourcing' ? (
              <ResourcingDeepDive key="resourcing" />
            ) : activeDeepDive === 'hr' ? (
              <HRDeepDive key="hr" />
            ) : (
              <MarketingDeepDive key="marketing" />
            )}
          </AnimatePresence>
        </div>
              </section>
            </motion.div>
          )}

          {activeNav === 'Portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* --- PORTFOLIO & TECHNICAL ARCHITECTURES --- */}
      <section className="py-40 px-6 relative border-t border-brand-border bg-brand-bg">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-32">
              <div className="text-brand-secondary text-xs font-black uppercase tracking-[0.4em] mb-4">The Trinexiss Portfolio</div>
              <h2 className="text-5xl md:text-[90px] font-black tracking-tighter mb-8 italic uppercase leading-none text-white">Flagship <span className="text-brand-secondary">Blueprints</span></h2>
              <p className="text-xl text-brand-text-body max-w-xl mx-auto font-medium uppercase tracking-tight">Enterprise architectures engineered for global scalability.</p>
           </div>

           <div className="space-y-24">
              {[
                { 
                  id: 'fintrack',
                  title: 'FinTrack SaaS', 
                  category: 'Fintech Infrastructure',
                  desc: 'A robust financial intelligence platform processing multi-currency streams with millisecond latency and banking-grade security.',
                  diagram: FinTrackDiagram,
                  features: ['Real-time Ledger Sync', 'Tax Vectoring Engine', 'Multi-tenant Isolation'],
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                },
                { 
                  id: 'support-agent',
                  title: 'AI Customer Support', 
                  category: 'LLM Integration',
                  desc: 'Autonomous support agents utilizing RAG (Retrieval-Augmented Generation) to handle 90% of service requests without human intervention.',
                  diagram: SupportAIDiagram,
                  features: ['Natural Language Processing', 'Knowledge Graph Sync', '24/7 Availability'],
                  image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1000"
                },
                { 
                  id: 'healthsync',
                  title: 'HealthSync Ecosystem', 
                  category: 'Med-Tech Solutions',
                  desc: 'HIPAA-compliant data mesh connecting patient biometrics to clinical workflows with predictive triage modeling.',
                  diagram: HealthSyncDiagram,
                  features: ['Biometric Stream Analysis', 'Clinician Command Center', 'Encrypted Data Hub'],
                  image: "https://images.unsplash.com/photo-1576091160550-217359971f8b?auto=format&fit=crop&q=80&w=1000"
                }
              ].map((caseStudy, i) => (
                <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                   <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-60">Vector {i + 1}: {caseStudy.category}</div>
                      <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8 text-white">{caseStudy.title}</h3>
                      <p className="text-lg text-brand-text-body font-medium leading-relaxed mb-10 max-w-lg">{caseStudy.desc}</p>
                      <div className="flex flex-wrap gap-4">
                         {caseStudy.features.map((f, idx) => (
                           <div key={idx} className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-[10px] font-black text-brand-text-body/50 uppercase tracking-widest">{f}</div>
                         ))}
                      </div>
                   </div>
                   <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <caseStudy.diagram />
                      <div className="absolute -bottom-6 -right-6 glass p-6 border-brand-border rounded-2xl flex items-center gap-4 bg-brand-bg shadow-xl">
                         <div className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">System Active</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
              </section>
            </motion.div>
          )}

          {activeNav === 'Use Cases' && (
            <motion.div
              key="use-cases"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* --- AI USE CASES & SUCCESS STORIES --- */}
      <section id="use-cases" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-brand-secondary text-xs font-black uppercase tracking-[0.4em] mb-4">Real-World Impact</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic text-white">AI Use Cases & <span className="text-brand-secondary">Success Stories</span></h2>
            <p className="text-xl text-brand-text-body max-w-3xl mx-auto font-medium uppercase tracking-tight leading-relaxed">
              Discover how Trinexiss Technologies leverages cutting-edge AI to solve complex business challenges across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                industry: "Retail & E-Commerce",
                title: "E-Commerce Personalization",
                icon: ShoppingCart,
                impact: "How we helped a fashion retailer increase conversion by 35% using AI-driven product recommendations and automated customer support.",
                challenge: "High cart abandonment rates and overwhelmed support teams during peak seasons.",
                solution: "Implemented a custom Trinexiss Bot that provides personalized styling advice and handles 80% of routine inquiries.",
                results: ["35% Increase in Conversion", "60% Reduction in Support Costs", "92% Customer Satisfaction"]
              },
              {
                industry: "HR & Staffing",
                title: "AI-Driven Recruitment",
                icon: Briefcase,
                impact: "Streamlining the hiring process for a global tech firm by automating resume screening and initial candidate engagement.",
                challenge: "Processing 5,000+ applications monthly with a small HR team.",
                solution: "Developed an AI workflow that screens candidates based on technical skills and soft-skill alignment.",
                results: ["75% Faster Time-to-Hire", "40% Lower Cost-per-Hire", "Bias-Free Initial Screening"]
              },
              {
                industry: "Finance & B2B",
                title: "Predictive Sales Analytics",
                icon: TrendingUp,
                impact: "Empowering a B2B SaaS company to predict churn and identify upsell opportunities with 90% accuracy.",
                challenge: "Fragmented data across multiple platforms making it impossible to predict customer behavior.",
                solution: "Centralized data into a custom dashboard with machine learning models for behavior prediction.",
                results: ["20% Reduction in Churn", "15% Increase in Upsell Revenue", "Real-time Decision Dashboards"]
              },
              {
                industry: "Customer Service",
                title: "24/7 Intelligent Support",
                icon: Headset,
                impact: "Transforming customer experience for a logistics provider with multilingual Trinexiss Bots available around the clock.",
                challenge: "Inconsistent support quality across different time zones and languages.",
                solution: "Deployed advanced LLM-based Trinexiss Bots capable of handling complex logistics queries in 12 languages.",
                results: ["Zero Wait Time", "24/7 Global Availability", "Consistent Brand Voice"]
              }
            ].map((useCase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="glass p-10 rounded-[48px] border-brand-border relative group hover:border-brand-secondary/40 hover:shadow-[0_20px_60px_rgba(56,189,248,0.15)] transition-all flex flex-col h-full bg-white/[0.02]"
              >
                {/* Industry Tag */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                    <useCase.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-[0.3em]">{useCase.industry}</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-none mt-1">{useCase.title}</h3>
                  </div>
                </div>

                <p className="text-brand-text-body font-medium leading-relaxed mb-10 text-lg">
                  "{useCase.impact}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 flex-grow">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">The Challenge</h4>
                    <p className="text-brand-text-body text-sm font-medium leading-relaxed">{useCase.challenge}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.4em]">The Solution</h4>
                    <p className="text-brand-text-body text-sm font-medium leading-relaxed">{useCase.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="space-y-4 pt-8 border-t border-brand-border">
                  <h4 className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Key Results</h4>
                  <div className="flex flex-wrap gap-3">
                    {useCase.results.map((result, idx) => (
                      <div key={idx} className="bg-brand-secondary/5 border border-brand-secondary/20 rounded-full px-4 py-2 flex items-center gap-2">
                        <Check className="w-3 h-3 text-brand-secondary" />
                        <span className="text-[10px] font-black text-brand-secondary uppercase tracking-widest">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-32 px-6 relative border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="text-brand-primary text-xs font-bold uppercase tracking-[0.4em] mb-4">Our Portfolio</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white">Showcasing Our <span className="text-brand-primary text-glow">Impact.</span></h2>
            <p className="text-xl text-brand-text-body max-w-2xl mx-auto font-medium leading-relaxed">Pioneering digital excellence through rigorous engineering and strategic innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                tag: "AI Automation", 
                title: "EcoStream AI", 
                desc: "An intelligent supply chain optimization platform that reduced waste by 35% for a global logistics firm.",
                stack: ["Python", "TensorFlow", "Zapier"],
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
              },
              { 
                tag: "SaaS Development", 
                title: "FinTrack SaaS", 
                desc: "A comprehensive fintech dashboard for real-time expense tracking and automated tax reporting.",
                stack: ["React", "Node.js", "Firebase"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
              },
              { 
                tag: "Digital Marketing", 
                title: "MarketPulse", 
                desc: "A data-driven marketing campaign that achieved 4x ROI for a leading e-commerce brand.",
                stack: ["SEO", "Google Ads", "Analytics"],
                image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000"
              },
              { 
                tag: "Customer Support", 
                title: "SupportAI Nexus", 
                desc: "AI-powered patient support system with automated appointment scheduling and symptom triage.",
                stack: ["Zendesk", "AI Chatbot", "Integrations"],
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000"
              },
              { 
                tag: "CRM & E-Commerce", 
                title: "RetailFlow", 
                desc: "Custom Shopify integration with automated inventory management and personalized customer journeys.",
                stack: ["Shopify", "Liquid", "Automation"],
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
              },
              { 
                tag: "Data & Reporting", 
                title: "DataViz Pro", 
                desc: "Executive reporting suite providing real-time business intelligence across multiple data sources.",
                stack: ["Looker Studio", "BigQuery", "SQL"],
                image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1000"
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="group glass rounded-[40px] overflow-hidden border-brand-border hover:border-brand-primary/40 hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] transition-all flex flex-col h-full bg-white/[0.01]"
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-bg/10 to-brand-bg opacity-40" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-bg to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-[0.3em] mb-2">{project.tag}</div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{project.title}</h3>
                  <p className="text-brand-text-body text-sm font-medium leading-relaxed mb-8 flex-grow">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-brand-border">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[9px] font-bold text-brand-text-body/30 border border-brand-border px-2.5 py-1 rounded-full uppercase tracking-widest">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
              </section>
            </motion.div>
          )}

          {activeNav === 'Team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TeamSection />
            </motion.div>
          )}

          {activeNav === 'About' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="pb-32 relative"
            >
              <Floating3DShapes />
              
              {/* --- About Header (Image 1 style) --- */}
              <section className="pt-32 pb-24 px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                  <motion.h1 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="text-5xl md:text-[120px] font-black mb-8 tracking-[-0.05em] text-white leading-none uppercase italic"
                  >
                    About <span className="text-brand-primary text-glow">Trinexiss</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-3xl text-brand-text-body font-medium leading-relaxed max-w-3xl mx-auto"
                  >
                    A team of innovators, engineers, and strategists dedicated to redefining business efficiency through <span className="text-brand-secondary">intelligent technology</span>.
                  </motion.p>
                </div>
              </section>

              {/* --- Our Story (Image 2 style) --- */}
              <section id="our-story" className="px-6 lg:px-24 py-20 relative z-10">
                <div className="max-w-[1800px] mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    {/* Image Column with 3D Effect */}
                    <div className="relative group p-4">
                      <motion.div 
                        whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
                        className="rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative border border-white/10 transition-all duration-500 ease-out"
                        style={{ perspective: '2000px' }}
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                          alt="Trinexiss Team" 
                          className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#03010c] via-transparent to-transparent opacity-60" />
                      </motion.div>
                      
                      {/* Women-Led Badge */}
                      <motion.div 
                        initial={{ opacity: 0, x: -30, rotateY: -20 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        whileHover={{ scale: 1.05, translateZ: 50, rotateY: 5 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                        className="absolute -bottom-10 right-6 lg:right-10 bg-[#0c0d16] p-8 rounded-[32px] border border-brand-primary/20 flex items-center gap-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-20 min-w-[320px]"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/20 shadow-[0_0_20px_rgba(0,209,255,0.2)]">
                          <Users size={32} />
                        </div>
                        <div>
                          <div className="text-xl font-black text-white leading-tight uppercase italic">Women-Led</div>
                          <div className="text-[11px] text-brand-secondary font-black uppercase tracking-[0.2em] mt-1">100% Female Founders</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Column */}
                    <div>
                      <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter">Our Story</h2>
                      <div className="space-y-8 text-brand-text-body font-medium leading-[1.6] text-xl opacity-90">
                        <p>
                          Trinexiss Technologies is a pioneering innovation hub <span className="text-brand-primary font-bold">led by women</span>. All four of our founders are visionary women with sound experience in AI and automation.
                        </p>
                        <p>
                          We believe that <span className="text-brand-primary font-bold">diverse leadership</span> drives superior innovation. Our team of 10+ experts works together to redefine business efficiency through intelligent technology.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pt-16 border-t border-white/5">
                        <motion.div 
                          whileHover={{ y: -10, scale: 1.05 }}
                          className="space-y-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-[0_0_40px_rgba(37,99,235,0.15)] border border-brand-primary/20">
                            <Target size={28} />
                          </div>
                          <div>
                            <h4 className="text-2xl font-black text-white tracking-tight mb-4 uppercase italic">Our Mission</h4>
                            <p className="text-sm text-brand-text-body/50 leading-relaxed font-bold uppercase tracking-widest">
                              To empower businesses with intelligent tools that drive sustainable growth and operational excellence.
                            </p>
                          </div>
                        </motion.div>
                        <motion.div 
                          whileHover={{ y: -10, scale: 1.05 }}
                          className="space-y-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-300"
                        >
                          <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-[0_0_40px_rgba(37,99,235,0.15)] border border-brand-primary/20">
                            <Eye size={28} />
                          </div>
                          <div>
                            <h4 className="text-2xl font-black text-white tracking-tight mb-4 uppercase italic">Our Vision</h4>
                            <p className="text-sm text-brand-text-body/50 leading-relaxed font-bold uppercase tracking-widest">
                              To be the most trusted partner for digital transformation in the AI-driven era.
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeNav === 'Careers' && (
            <motion.div
              key="careers"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
            >
              {/* --- CAREERS SECTION --- */}
      <section id="careers" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[60px] border border-white/5 p-12 md:p-32 overflow-hidden relative shadow-[0_50px_150px_rgba(0,0,0,0.4)]"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

            <div className="flex flex-col items-center text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-12">
                <div className="w-2 h-2 bg-[#6366f1] rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Join Our Team</span>
              </div>

              <h2 className="text-6xl md:text-[100px] font-black italic text-white uppercase tracking-tighter leading-[0.9] mb-12">
                Building The <span className="text-[#6366f1]">Next</span> <br />
                Frontier
              </h2>

              <p className="text-white/40 text-xs md:text-sm font-black uppercase tracking-[0.3em] max-w-2xl mx-auto mb-20 leading-relaxed">
                We are always scouting for top-tier technical talent to <br className="hidden md:block" /> build high-performing neural systems.
              </p>

              <button 
                onClick={() => setShowCareers(true)}
                className="bg-[#6366f1] text-white font-black px-16 py-7 rounded-full text-[13px] uppercase tracking-[0.3em] hover:brightness-110 active:scale-95 transition-all shadow-[0_20px_50px_rgba(99,102,241,0.4)]"
              >
                Explore Open Vectors
              </button>
            </div>
          </motion.div>
        </div>
              </section>
            </motion.div>
          )}

          {activeNav === 'Blog' && (
            <motion.div
              key="blog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <Floating3DShapes />
              
              {/* --- BLOG SECTION --- */}
      <section id="blog" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-3xl">
              <div className="text-brand-secondary text-xs font-black uppercase tracking-[0.4em] mb-6 text-glow">Intelligence Feed</div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none text-white mb-8">Our <span className="text-brand-secondary text-glow">Blog</span></h1>
              <p className="text-white/90 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">Insights, trends, and thought leadership from the experts at Trinexiss.</p>
            </div>
            <button className="text-brand-secondary border-b-2 border-brand-secondary/20 pb-2 text-[10px] font-black uppercase tracking-[0.3em] hover:border-brand-secondary transition-all">View All Intelligence</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'The Future of AI Agents in Business Automation', 
                date: 'April 10, 2024', 
                author: 'Anya Sharma',
                category: 'AI & Automation',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
              },
              { 
                title: 'Scaling Your SaaS: Lessons from the Frontlines', 
                date: 'April 5, 2024', 
                author: 'Priya Mishra',
                category: 'SaaS Development',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
              },
              { 
                title: 'Mastering GA4 for Performance Marketing', 
                date: 'March 28, 2024', 
                author: 'Elena Rodriguez',
                category: 'Marketing',
                image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
              }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15, rotateY: 8, rotateX: -2, scale: 1.02 }}
                style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-[40px] p-6 hover:bg-white/[0.05] hover:border-brand-primary/20 transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.4)] cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8 shadow-2xl" style={{ transform: 'translateZ(30px)' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#03010c] via-transparent to-transparent opacity-80" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-150 group-hover:scale-100">
                      <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center shadow-[0_0_30px_rgba(0,209,255,0.4)]">
                        <ArrowRight className="w-8 h-8 text-[#03010c]" />
                      </div>
                   </div>
                </div>
                
                <div style={{ transform: 'translateZ(15px)' }}>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-brand-secondary" />
                        <span className="text-white/60 text-[9px] font-black uppercase tracking-widest">{post.date}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <User className="w-3 h-3 text-brand-primary" />
                        <span className="text-white/60 text-[9px] font-black uppercase tracking-widest">{post.author}</span>
                     </div>
                  </div>
                  <h4 className="text-2xl font-black text-white italic group-hover:text-brand-secondary transition-colors mb-6 leading-tight uppercase">{post.title}</h4>
                  <p className="text-white/40 text-xs font-medium leading-relaxed mb-8 flex-grow">
                    Discover how {post.category.toLowerCase()} is evolving and what it means for your business strategy in 2024.
                  </p>
                  <button className="flex items-center gap-3 text-brand-secondary text-[10px] font-black uppercase tracking-widest group-hover:gap-5 transition-all">
                    Initialize Report <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
              </section>
            </motion.div>
          )}

          {activeNav === 'Contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* --- CTAs & SOCIAL --- */}
      <section id="contact" className="py-32 px-6 border-t border-brand-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.03)_0%,transparent_40%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Left Side: Info */}
              <div>
                 <div className="text-brand-secondary text-xs font-black uppercase tracking-[0.4em] mb-4">Contact Nexus</div>
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 italic uppercase leading-none">Let's <br /><span className="text-brand-secondary">Sync</span> Systems</h2>
                 
                 <div className="space-y-12 mb-16">
                    <div className="flex gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-brand-border flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-bg transition-all duration-300">
                          <MapPin className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Global Headquarters</h4>
                          <p className="text-white text-sm font-bold leading-relaxed max-w-xs">
                             Office No 1044, Gera's Imperium Rise, Hinjewadi Phase 2, Maharashtra – 411057
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-brand-border flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-bg transition-all duration-300">
                          <Mail className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Digital Correspondence</h4>
                          <p className="text-white text-lg font-black italic tracking-tight">info@trinexiss.com</p>
                       </div>
                    </div>

                    <div className="flex gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-brand-border flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-bg transition-all duration-300">
                          <Clock className="w-6 h-6" />
                       </div>
                       <div>
                          <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Operational Hours</h4>
                          <p className="text-white text-sm font-bold uppercase tracking-widest">Mon–Sat: 9:00 AM – 7:00 PM IST</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right Side: Professional Form */}
              <div className="glass p-12 rounded-[60px] border-brand-border relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary opacity-10 blur-3xl" />
                 <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Identity</label>
                          <input type="text" placeholder="Full Name" className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all" />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Secure Email</label>
                          <input type="email" placeholder="example@domain.com" className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all" />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Inquiry Vector</label>
                       <select className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all appearance-none">
                          <option className="bg-brand-bg">Trinexiss Bot Development</option>
                          <option className="bg-brand-bg">SaaS Architecture</option>
                          <option className="bg-brand-bg">Workflow Automation</option>
                          <option className="bg-brand-bg">Strategic Hiring</option>
                       </select>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Transmission Data</label>
                       <textarea rows={4} placeholder="Describe your mission..." className="w-full bg-white/[0.02] border border-brand-border rounded-2xl p-5 text-white text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-secondary/50 focus:bg-white/[0.05] transition-all resize-none"></textarea>
                    </div>
                    <button className="w-full bg-brand-secondary text-brand-bg font-black py-6 rounded-2xl text-[12px] uppercase tracking-[0.3em] hover:brightness-110 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4 group">
                       Submit Request <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>
    </motion.div>
  )}
</AnimatePresence>
</main>

      <footer className="pt-32 pb-16 px-6 border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <Logo />
                <div>
                  <div className="text-white font-black text-xl tracking-tighter leading-none mb-1">TRINEXISS</div>
                  <div className="text-[8px] text-brand-text-body font-black uppercase tracking-[0.4em]">Technologies</div>
                </div>
              </div>
              <p className="text-brand-text-body text-sm font-bold leading-relaxed max-w-xs opacity-80">
                Empowering businesses with AI-driven automation, cutting-edge SaaS solutions, and performance-focused digital marketing.
              </p>
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-6 py-2">
                <span className="text-[11px] font-bold text-brand-primary uppercase tracking-widest">Women-Led Organization</span>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} className="text-brand-text-body/40 hover:text-white transition-colors transform hover:scale-110 transition-transform">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-white font-black text-lg mb-8">Services</h4>
              <ul className="space-y-4">
                {['AI & Automation', 'SaaS Development', 'Use Cases', 'Digital Marketing', 'Data & Reporting'].map(item => (
                  <li key={item}>
                    <button onClick={() => handleNavClick('Services')} className="text-brand-text-body text-sm font-bold hover:text-brand-primary transition-colors opacity-80">{item}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-white font-black text-lg mb-8">Company</h4>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', nav: 'About' },
                  { name: 'Our Team', nav: 'Team' },
                  { name: 'Careers', nav: 'Careers' },
                  { name: 'Portfolio', nav: 'Portfolio' },
                  { name: 'Blog', nav: 'Blog' },
                  { name: 'Contact', nav: 'Contact' }
                ].map(item => (
                  <li key={item.name}>
                    <button onClick={() => handleNavClick(item.nav)} className="text-brand-text-body text-sm font-bold hover:text-brand-primary transition-colors opacity-80">{item.name}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="text-white font-black text-lg mb-8">Contact Us</h4>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-brand-text-body text-xs font-bold leading-relaxed opacity-80">
                    Office No 1044, Gera's Imperium Rise, Hinjewadi Phase 2, Maharashtra – 411057
                  </span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-brand-text-body text-xs font-bold opacity-80">info@trinexiss.com</span>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-brand-text-body text-xs font-bold opacity-80">Mon–Sat: 9:00 AM – 7:00 PM IST</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[10px] font-black text-brand-text-body/60 uppercase tracking-[0.4em]">
              © 2026 Trinexiss Technologies. All rights reserved.
            </div>
            <div className="flex gap-8">
               {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
                 <a key={item} href="#" className="text-[9px] font-black text-brand-text-body/60 hover:text-white uppercase tracking-widest transition-colors">{item}</a>
               ))}
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      <CareersOverlay isOpen={showCareers} onClose={() => setShowCareers(false)} />
    </div>
  );
}
