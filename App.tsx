
import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Check, 
  Star, 
  MessageCircle, 
  ChevronDown,
  Globe,
  Zap,
  Play,
  ShoppingBag,
  CreditCard,
  Lock,
  ArrowRight,
  Send,
  Wifi,
  Users,
  Layers,
  Monitor,
  Trophy,
  Film,
  Menu,
  X,
  ChevronUp
} from 'lucide-react';
import { PLANS, MOVIE_POSTERS, SPORTS_POSTERS, SUPPORTED_DEVICES, FAQS } from './constants';
import { ComparisonTable } from './components/ComparisonTable';
import { PlanRecommender } from './components/PlanRecommender';

const App: React.FC = () => {
  const [deviceCount, setDeviceCount] = useState<1 | 2 | 3>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateFinalPrice = (basePrice: number) => {
    const multiplier = deviceCount === 1 ? 1 : deviceCount === 2 ? 1.7 : 2.4;
    return Math.round(basePrice * multiplier * 100) / 100;
  };

  const navLinks = [
    { name: 'Startseite', href: '#home' },
    { name: 'Sport', href: '#sports' },
    { name: 'Filme', href: '#movies' },
    { name: 'Geräte', href: '#devices' },
    { name: 'Abos', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const DeviceIcon = ({ name }: { name: string }) => {
    switch (name) {
      case 'Tv': return <Tv className="w-8 h-8 md:w-10 md:h-10 text-red-600" />;
      case 'Zap': return <Zap className="w-8 h-8 md:w-10 md:h-10 text-red-600" />;
      case 'Smartphone': return <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-red-600" />;
      case 'Monitor': return <Monitor className="w-8 h-8 md:w-10 md:h-10 text-red-600" />;
      case 'Layers': return <Layers className="w-8 h-8 md:w-10 md:h-10 text-red-600" />;
      default: return <Tv className="w-8 h-8 md:w-10 md:h-10 text-red-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050111] text-white selection:bg-red-600 selection:text-white font-['Inter'] scroll-smooth overflow-x-hidden">
      
      {/* Sales Scarcity Bar */}
      <div className="bg-red-600 py-2.5 px-4 text-center text-[9px] md:text-xs font-black uppercase tracking-[0.15em] md:tracking-[0.25em] relative z-[110] shadow-[0_4px_20px_rgba(220,38,38,0.5)]">
        🔥 ANGEBOT DER WOCHE: 12 MONATE FÜR NUR €59.99 + 24H TEST GRATIS! 🔥
      </div>

      {/* Navigation */}
      <nav className={`fixed top-10 md:top-11 left-0 right-0 z-[100] transition-all duration-500 px-2 md:px-8 ${scrolled ? 'top-0' : ''}`}>
        <div className={`max-w-7xl mx-auto h-16 md:h-20 flex items-center justify-between px-4 md:px-10 rounded-xl md:rounded-2xl border border-white/5 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-2xl rounded-none border-b border-red-600/20 shadow-2xl' : 'bg-white/5 backdrop-blur-xl'}`}>
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg md:rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-red-600/30">
              <Tv className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-xl md:text-3xl font-black tracking-tighter uppercase italic">IPTV<span className="text-red-600">AGIL</span></span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-slate-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-red-500 transition-colors uppercase">{link.name}</a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden sm:block bg-red-600 hover:bg-red-500 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(220,38,38,0.4)] uppercase">
              Jetzt Testen
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-red-500 transition-colors bg-white/5 rounded-lg"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-black border border-white/10 rounded-2xl p-6 backdrop-blur-3xl shadow-3xl animate-in fade-in slide-in-from-top-4 duration-300 z-[120]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold hover:text-red-500 py-3 border-b border-white/5 uppercase"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 bg-red-600 py-4 rounded-xl font-black text-center uppercase shadow-lg shadow-red-600/20">
                Jetzt Kostenlos Testen
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 md:pt-64 pb-20 md:pb-40 px-4 md:px-6 overflow-hidden" id="home">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050111]/80 to-[#050111]"></div>
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-75 scale-110"
            alt="Sports Hero"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center px-2">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 text-[10px] md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-10 animate-bounce-slow">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
              #1 PREMIUM IPTV DEUTSCHLAND
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase italic">
              Alle Kanäle. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white">Keine Grenzen.</span>
            </h1>
            
            <p className="text-base md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed font-medium px-4">
              Erleben Sie <span className="text-white font-extrabold underline decoration-red-600">alle PPV Kanäle</span>, Bundesliga, Formel 1 & neueste Filme in kristallklarem 4K. 
              Stabilste Server in Europa – <span className="text-red-500 font-black">GARANTIERT.</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-16 md:mb-20 px-4">
              <button className="bg-red-600 hover:bg-red-500 px-8 md:px-14 py-5 md:py-7 rounded-xl md:rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 md:gap-4 transition-all hover:scale-105 shadow-[0_25px_60px_rgba(220,38,38,0.4)] group">
                <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
                ABO SICHERN
              </button>
              <button className="bg-white/5 hover:bg-white/10 px-8 md:px-12 py-5 md:py-7 rounded-xl md:rounded-2xl font-black text-lg md:text-xl backdrop-blur-2xl border border-white/20 flex items-center justify-center gap-3 md:gap-4 transition-all hover:scale-105">
                <Play className="w-6 h-6 md:w-7 md:h-7 fill-red-600 text-red-600" />
                GRATIS TEST
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-12 py-6 md:py-8 px-6 md:px-12 glass rounded-2xl md:rounded-3xl border border-white/10 w-full md:w-fit mx-auto">
              <div className="flex flex-col items-center gap-2">
                 <div className="flex gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                 </div>
                 <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">4.9/5 Trustpilot</span>
              </div>
              <div className="hidden md:block h-12 w-px bg-white/10"></div>
              <div className="flex items-center gap-3 md:gap-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg md:rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-green-500" />
                 </div>
                 <div className="text-left">
                    <span className="block text-xs md:text-sm font-black text-white uppercase tracking-wider">7 Tage Garantie</span>
                    <span className="block text-[9px] md:text-[10px] text-slate-500 font-bold">Geld-zurück Versprechen</span>
                 </div>
              </div>
              <div className="hidden md:block h-12 w-px bg-white/10"></div>
              <div className="flex items-center gap-3 md:gap-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600/20 rounded-lg md:rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                 </div>
                 <div className="text-left">
                    <span className="block text-xs md:text-sm font-black text-white uppercase tracking-wider">Sofort-Aktivierung</span>
                    <span className="block text-[9px] md:text-[10px] text-slate-500 font-bold">In unter 5 Minuten</span>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* Auto-Scrolling Sports Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#08041a] overflow-hidden" id="sports">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 px-4">
             <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tighter italic">Enjoy all your <span className="text-blue-600">sports content</span></h2>
             <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">Watch live football, Formula 1, tennis, and more on top sports channels like <span className="text-white font-bold">ESPN, Ziggo Sport, and beIN Sports</span>.</p>
          </div>
          
          <div className="relative w-full overflow-hidden flex">
            <div className="flex animate-marquee whitespace-nowrap gap-4 md:gap-6 py-4">
               {SPORTS_POSTERS.map((sport, i) => (
                  <div key={i} className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[2/3] w-48 md:w-72 flex-shrink-0 border border-red-600/50 shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
                     <img src={sport.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt={sport.title} />
                     <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-600 text-white text-[8px] md:text-[10px] font-black px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg uppercase tracking-widest">{sport.badge}</div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4 md:p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                        <h4 className="text-sm md:text-xl font-black uppercase tracking-tighter">{sport.title}</h4>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Movies Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 overflow-hidden" id="movies">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 px-4">
             <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 uppercase tracking-tighter italic">Best Movies & Series with <span className="text-blue-600">IPTVAGIL</span></h2>
             <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">Access thousands of on-demand movies, popular series, and new releases – all in crystal-clear <span className="text-white font-bold">4K quality</span>.</p>
          </div>
          
          <div className="relative w-full overflow-hidden flex">
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-4 md:gap-6 py-4">
               {MOVIE_POSTERS.map((movie, i) => (
                  <div key={i} className="group relative rounded-xl md:rounded-2xl overflow-hidden aspect-[2/3] w-40 md:w-60 flex-shrink-0 border border-red-600 shadow-xl hover:-translate-y-4 transition-all duration-500 cursor-pointer">
                     <img src={movie} className="w-full h-full object-cover" alt="Movie" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-current" />
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Devices Section */}
      <section className="py-24 px-4 md:px-6 bg-[#08041a]" id="devices">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">Unterstützte <span className="text-red-600">Geräte</span></h2>
            <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto">Ein Abo für alle Ihre Geräte. Schauen Sie IPTV wo immer Sie sind.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 px-4">
            {SUPPORTED_DEVICES.map((device, i) => (
              <div key={i} className="glass p-6 md:p-8 rounded-[2rem] border-white/5 flex flex-col items-center text-center group hover:border-red-600/50 transition-all">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <DeviceIcon name={device.icon} />
                </div>
                <h4 className="text-sm md:text-lg font-black mb-2 uppercase tracking-wider">{device.name}</h4>
                <p className="text-[10px] md:text-xs text-slate-500 font-bold leading-relaxed">{device.brands}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative" id="pricing">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-red-600/10 blur-[150px] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 uppercase tracking-tighter italic">Wähle deinen <span className="text-red-600">Plan</span></h2>
            <p className="text-base md:text-xl text-slate-400 max-w-xl mx-auto mb-10 md:mb-16 px-4">Über 18.000 Kanäle + Alle PPV-Events weltweit inklusive.</p>
            
            <div className="inline-flex flex-wrap justify-center p-2 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 gap-2 md:gap-3 mb-10 mx-auto">
              {[1, 2, 3].map((num) => (
                <button 
                  key={num}
                  onClick={() => setDeviceCount(num as any)}
                  className={`px-6 md:px-12 py-3 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all ${deviceCount === num ? 'bg-red-600 text-white shadow-2xl' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                >
                  {num} {num === 1 ? 'Gerät' : 'Geräte'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
            {PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`relative p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border flex flex-col transition-all duration-500 hover:-translate-y-6 ${
                  plan.highlight 
                  ? 'bg-gradient-to-b from-red-600/20 to-slate-900/60 border-red-600 shadow-[0_40px_80px_rgba(220,38,38,0.25)] sm:scale-105 z-10' 
                  : 'bg-white/5 border-white/10 backdrop-blur-sm'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-5 left-1/2 -translate-x-1/2 px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.1em] md:tracking-[0.15em] uppercase whitespace-nowrap ${
                    plan.highlight ? 'bg-red-600 shadow-2xl animate-pulse' : 'bg-slate-700'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-8 md:mb-12 text-center">
                  <h3 className="text-base md:text-lg font-black mb-6 md:mb-8 uppercase tracking-[0.2em] text-slate-300 italic">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-xl md:text-2xl font-black text-red-500">€</span>
                    <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">{calculateFinalPrice(plan.basePrice).toString().split('.')[0]}</span>
                    <span className="text-xl md:text-2xl font-black text-white">.{calculateFinalPrice(plan.basePrice).toString().split('.')[1] || '99'}</span>
                  </div>
                  <p className="text-[10px] md:text-[11px] font-black text-slate-500 mt-4 md:mt-6 uppercase tracking-[0.2em] md:tracking-[0.3em]">Alles inklusive</p>
                </div>

                <div className="space-y-4 md:space-y-5 mb-10 md:mb-14 flex-grow">
                  {[
                    { text: plan.features.channels, icon: Tv },
                    { text: plan.features.vod, icon: Film },
                    { text: 'Alle PPV & Match-Days', icon: Trophy, color: 'text-yellow-500' },
                    { text: plan.features.quality, icon: Check, color: 'text-red-500' },
                    { text: 'Anti-Freeze v5.2 Optimized', icon: Zap, color: 'text-red-600' },
                    { text: 'VPN-Schutz Inklusive', icon: ShieldCheck, color: 'text-green-500' },
                    { text: 'Priority Support 24/7', icon: MessageCircle }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 md:gap-5 text-xs md:text-sm font-bold text-slate-200">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <feat.icon className={`w-3 h-3 md:w-4 md:h-4 ${feat.color || 'text-slate-500'}`} />
                      </div>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.25em] transition-all flex items-center justify-center gap-2 md:gap-3 ${
                  plan.highlight 
                  ? 'bg-red-600 hover:bg-red-500 shadow-xl shadow-red-600/40 text-white' 
                  : 'bg-white/10 hover:bg-white/20'
                }`}>
                  JETZT SICHERN
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            ))}
          </div>
          
          <PlanRecommender />
        </div>
      </section>

      {/* 24H Trial Banner */}
      <section className="py-16 md:py-20 px-4 md:px-6 overflow-hidden">
         <div className="max-w-7xl mx-auto glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 border-red-600/30 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left relative">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-red-600/10 blur-[80px] md:blur-[100px] pointer-events-none"></div>
            <div className="relative">
               <h3 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 uppercase tracking-tighter italic">Noch nicht <span className="text-red-600">überzeugt?</span></h3>
               <p className="text-lg md:text-xl text-slate-400 font-medium max-w-lg mb-6 md:mb-8">Testen Sie unseren Service 24 Stunden lang völlig <span className="text-white font-bold">kostenlos</span> und überzeugen Sie sich von der Qualität.</p>
               <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-green-500 font-black uppercase text-[10px] md:text-sm tracking-widest">
                  <Check className="w-4 h-4 md:w-5 md:h-5" />
                  Keine Kreditkarte erforderlich
               </div>
            </div>
            <button className="w-full md:w-auto bg-red-600 hover:bg-red-500 px-8 md:px-16 py-6 md:py-8 rounded-xl md:rounded-[2rem] font-black text-lg md:text-2xl shadow-[0_20px_50px_rgba(220,38,38,0.4)] transition-all hover:scale-105 flex items-center justify-center gap-3 md:gap-4 group">
               JETZT GRATIS TESTEN
               <MessageCircle className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-12 transition-transform" />
            </button>
         </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-black text-center mb-12 md:mb-20 uppercase tracking-[0.15em] md:tracking-[0.2em] italic">Detaillierter <span className="text-red-600">Vergleich</span></h2>
          <ComparisonTable />
        </div>
      </section>

      {/* FAQ Section - NEW (Last main section before footer) */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-[#08041a]/50" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic">Häufig gestellte <span className="text-red-600">Fragen</span></h2>
            <p className="text-slate-400 text-base md:text-xl">Alles, was Sie über unseren IPTV-Service wissen müssen.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`glass border-white/5 rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 ${openFaq === idx ? 'border-red-600/30 bg-white/5 shadow-2xl' : 'hover:bg-white/[0.02]'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg md:text-xl font-black transition-colors ${openFaq === idx ? 'text-red-500' : 'text-slate-200 group-hover:text-white'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === idx ? 'bg-red-600 rotate-180' : 'bg-white/5'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100 p-6 md:p-8 pt-0' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Global Support */}
      <div className="fixed left-4 md:left-8 bottom-6 md:bottom-10 flex flex-col gap-3 md:gap-5 z-[100]">
           <a href="https://t.me/iptvagil" target="_blank" className="w-11 h-11 md:w-14 md:h-14 bg-[#26A5E4] rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all group relative border border-white/10">
              <Send className="w-5 h-5 md:w-7 md:h-7" />
              <span className="hidden md:block absolute left-18 bg-black/90 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md border border-white/10">Telegram Support</span>
           </a>
           <a href="https://signal.me/iptvagil" target="_blank" className="w-11 h-11 md:w-14 md:h-14 bg-[#3273DC] rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all group relative border border-white/10">
              <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
              <span className="hidden md:block absolute left-18 bg-black/90 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-md border border-white/10">Signal Support</span>
           </a>
           <div className="w-11 h-0.5 md:w-14 bg-white/10 mx-auto rounded-full"></div>
           <div className="hidden sm:flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 glass rounded-xl border-white/5">
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Support Live</span>
           </div>
      </div>

      {/* Main WhatsApp Support */}
      <div className="fixed right-4 md:right-8 bottom-6 md:bottom-10 flex flex-col items-end gap-3 md:gap-4 z-[100]">
        <div className="hidden sm:flex bg-white text-black px-4 md:px-6 py-2.5 md:py-4 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-[0.1em] shadow-2xl mb-1 md:mb-2 items-center gap-2 md:gap-3 animate-float relative">
           <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
           Fragen? Chatten Sie mit uns!
           <div className="absolute top-full right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
        </div>
        <a href="https://wa.me/your-number" target="_blank" className="w-14 h-14 md:w-20 md:h-20 bg-[#25D366] rounded-xl md:rounded-[2rem] flex items-center justify-center text-white shadow-[0_15px_30px_rgba(37,211,102,0.4)] md:shadow-[0_25px_50px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all border-2 md:border-4 border-white/20">
          <MessageCircle className="w-8 h-8 md:w-11 md:h-11 fill-current" />
        </a>
      </div>

      {/* Footer */}
      <footer className="pt-20 md:pt-40 pb-10 md:pb-20 px-4 md:px-6 bg-black border-t border-red-600/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 mb-16 md:mb-32">
          <div className="sm:col-span-2">
            <span className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-6 md:mb-10 block italic">IPTV<span className="text-red-600">AGIL</span></span>
            <p className="text-slate-400 max-w-md mb-8 md:mb-12 text-base md:text-lg leading-relaxed font-medium">
              Premium IPTV Entertainment aus Deutschland für die ganze Welt. Über 18.000 Kanäle, stabile 4K Streams und sofortige Aktivierung.
            </p>
            <div className="space-y-6 md:space-y-8">
               <h5 className="text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-500">Sicher bezahlen mit:</h5>
               <div className="flex flex-wrap gap-6 md:gap-10 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 md:h-6" alt="Visa" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 md:h-6" alt="Mastercard" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 md:h-6" alt="Paypal" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" className="h-4 md:h-6" alt="Bitcoin" />
                  <div className="text-white font-black text-lg md:text-xl italic tracking-tighter">iDEAL</div>
               </div>
            </div>
          </div>
          <div className="sm:col-span-1">
            <h4 className="font-black text-sm uppercase tracking-widest text-white mb-8 md:mb-12">Service</h4>
            <ul className="space-y-4 md:space-y-6 text-slate-500 font-bold uppercase text-[10px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em]">
              {navLinks.map(link => (
                <li key={link.name}><a href={link.href} className="hover:text-red-500 transition-colors uppercase">{link.name}</a></li>
              ))}
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase">Reseller</a></li>
            </ul>
          </div>
          <div className="sm:col-span-1">
            <h4 className="font-black text-sm uppercase tracking-widest text-white mb-8 md:mb-12">Support</h4>
            <ul className="space-y-4 md:space-y-6 text-slate-500 font-bold uppercase text-[10px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em]">
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase">Telegram Chat</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase">WhatsApp Direct</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase">Signal Private</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors uppercase">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <p className="text-slate-600 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-center md:text-left">© 2024 IPTVAGIL Premium. Designed for Ultimate Entertainment.</p>
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12">
             <div className="flex items-center gap-2 md:gap-3 text-green-500 font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em]">
                <Lock className="w-4 h-4 md:w-5 md:h-5" />
                256-BIT SSL SICHER
             </div>
             <div className="flex items-center gap-2 md:gap-3 text-red-600 font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em]">
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                KÄUFERSCHUTZ
             </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        html {
           scroll-padding-top: 80px;
           scroll-behavior: smooth;
        }
        @media (min-width: 768px) {
           html {
              scroll-padding-top: 100px;
           }
        }
      `}</style>
    </div>
  );
};

export default App;
