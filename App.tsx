
import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  ChevronDown, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  CheckCircle2,
  Menu,
  X,
  Lock,
  ArrowRight,
  Award,
  Zap
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Keunggulan', href: '#kenapa' },
    { name: 'Profil', href: '#profil' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        setIsOpen(false);
        const navHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Nusa<span className="text-blue-600">Legal</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-semibold transition-all hover:text-blue-600 ${scrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/6281261617763" 
              className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1"
            >
              Mulai Konsultasi
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[110] transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-between items-center p-6 border-b">
          <span className="text-2xl font-black tracking-tighter text-slate-900">Nusa<span className="text-blue-600">Legal</span></span>
          <button onClick={() => setIsOpen(false)} className="p-2 text-slate-900"><X size={30} /></button>
        </div>
        <div className="p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 space-y-4">
            <a
              href="https://wa.me/6281261617763"
              className="flex items-center justify-center space-x-3 w-full bg-green-600 text-white p-5 rounded-2xl text-lg font-bold shadow-xl active:scale-95 transition-all"
            >
              <MessageCircle size={24} />
              <span>WhatsApp Kami</span>
            </a>
            <p className="text-center text-slate-400 text-sm italic">"Kami menjaga privasi Anda sepenuhnya."</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-900">
    {/* Background elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover opacity-60" 
        alt="Justice Scales"
      />
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] z-0"></div>
    </div>

    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-500/20 backdrop-blur-xl px-4 py-2 rounded-full">
            <Award className="text-blue-400" size={18} />
            <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">Kantor Hukum Spesialis Keluarga</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Selesaikan Masalah Hukum Keluarga dengan <span className="text-blue-500">Tenang & Bermartabat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            Privasi Anda adalah prioritas kami. Dapatkan pendampingan hukum yang jujur, transparan, dan berorientasi pada hasil terbaik bagi masa depan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a 
              href="https://wa.me/6281261617763" 
              className="group flex items-center justify-center space-x-3 bg-green-500 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-green-600 transition-all shadow-2xl hover:shadow-green-500/30 transform hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
              <span>Konsultasi via WhatsApp</span>
            </a>
            <a 
              href="#layanan" 
              className="flex items-center justify-center space-x-3 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <span>Lihat Layanan</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
            <div className="text-left border-l-2 border-blue-600 pl-4">
              <p className="text-white font-black text-2xl">100%</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Confidential</p>
            </div>
            <div className="text-left border-l-2 border-blue-600 pl-4">
              <p className="text-white font-black text-2xl">10+</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Tahun Pengalaman</p>
            </div>
            <div className="text-left border-l-2 border-blue-600 pl-4">
              <p className="text-white font-black text-2xl">500+</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Klien Terbantu</p>
            </div>
          </div>
        </div>

        {/* Floating Trust Card / Form Mockup */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full"></div>
          <div className="relative bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Lock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-lg leading-none">Keamanan Data</h4>
                  <p className="text-slate-500 text-sm">Privasi klien dilindungi penuh</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900">Jadwalkan Sesi Konsultasi Gratis</h3>
                <p className="text-slate-600">Ceritakan masalah Anda, kami berikan gambaran solusi hukum awal.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="text" 
                    placeholder="Nama Lengkap" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="Nomor WhatsApp (Aktif)" 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                  <button className="w-full bg-slate-900 text-white p-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                    Kirim Permintaan Konsultasi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-600/5 hover:-translate-y-2 transition-all group flex flex-col h-full">
    <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300">
      <Icon className="text-blue-600 group-hover:text-white transition-colors" size={32} />
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-slate-500 mb-8 leading-relaxed flex-grow text-lg">{description}</p>
    <a 
      href={`https://wa.me/6281261617763?text=Halo%20Nusa%20Legal,%20saya%20ingin%20tanya%20tentang%20${encodeURIComponent(title)}`} 
      className="inline-flex items-center space-x-3 text-slate-900 font-bold group/btn"
    >
      <span className="group-hover/btn:mr-2 transition-all">Hubungi Konsultan</span>
      <ArrowRight size={20} className="text-blue-600" />
    </a>
  </div>
);

const Services = () => (
  <section id="layanan" className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs px-4 py-1.5 bg-blue-50 rounded-full">Layanan Hukum</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Solusi Berfokus pada Hasil</h2>
        <p className="text-xl text-slate-500 font-light">Pendampingan penuh untuk menjaga hak-hak Anda di dalam maupun di luar pengadilan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard 
          icon={Users} 
          title="Perceraian" 
          description="Selesaikan proses perceraian dengan bermartabat. Kami fokus pada percepatan prosedur dan perlindungan hak-hak Anda."
        />
        <ServiceCard 
          icon={HeartHandshake} 
          title="Hak Asuh Anak" 
          description="Memastikan masa depan dan kesejahteraan anak melalui pengasuhan yang adil dan legal sesuai kepentingan terbaik anak."
        />
        <ServiceCard 
          icon={Scale} 
          title="Waris & Hibah" 
          description="Pembagian aset keluarga yang adil dan transparan. Menghindari sengketa berkepanjangan antar anggota keluarga."
        />
        <ServiceCard 
          icon={ShieldCheck} 
          title="Konsultasi Strategis" 
          description="Dapatkan panduan langkah-langkah hukum yang aman sebelum Anda mengambil keputusan besar dalam keluarga."
        />
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="kenapa" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[3rem] shadow-2xl"
              alt="Professional Consultation"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
              <p className="text-4xl font-black mb-1">98%</p>
              <p className="text-slate-400 text-sm uppercase tracking-widest leading-tight">Kepuasan<br/>Klien Kami</p>
            </div>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-0"></div>
        </div>
        
        <div className="lg:w-1/2 space-y-10">
          <div className="space-y-4">
            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">Standard Profesional</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Keadilan yang Dirancang Secara Manusiawi</h2>
          </div>
          
          <div className="grid gap-10">
            {[
              { 
                title: 'Kerahasiaan Mutlak', 
                desc: 'Setiap detil kasus Anda aman di tangan kami. Kami menjamin privasi digital dan fisik dokumen Anda.',
                icon: <Lock className="text-blue-600" />
              },
              { 
                title: 'Biaya Terukur & Transparan', 
                desc: 'Tidak ada kejutan biaya di tengah jalan. Anda tahu apa yang Anda bayar sejak sesi pertama.',
                icon: <Zap className="text-blue-600" />
              },
              { 
                title: 'Advokat Berlisensi Resmi', 
                desc: 'Kami bukan sekadar konsultan, tapi praktisi hukum yang diakui oleh negara dan organisasi profesi.',
                icon: <Award className="text-blue-600" />
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: 'group-hover:text-white transition-colors' })}
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-lg">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
    {/* Background Glow */}
    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="space-y-4 mb-16">
        <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-xs">Skema Kerjasama</span>
        <h2 className="text-4xl md:text-5xl font-black">Investasi Hukum yang Jelas</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">
            Sesi Pertama Gratis
          </div>
          
          <div className="space-y-10">
            <h3 className="text-3xl font-bold">Konsultasi Awal Tanpa Resiko</h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Kami akan mendengarkan masalah Anda selama 30 menit secara gratis untuk memetakan solusi awal. Setelah itu, kami akan memberikan penawaran biaya tetap yang adil.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 py-10 border-y border-white/10">
              <div className="space-y-2">
                <CheckCircle2 className="text-blue-500 mx-auto" size={32} />
                <p className="font-bold">Tanpa Deposit Awal</p>
              </div>
              <div className="space-y-2">
                <CheckCircle2 className="text-blue-500 mx-auto" size={32} />
                <p className="font-bold">Opsi Pembayaran Bertahap</p>
              </div>
              <div className="space-y-2">
                <CheckCircle2 className="text-blue-500 mx-auto" size={32} />
                <p className="font-bold">Laporan Mingguan</p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/6281261617763" 
                className="inline-flex items-center space-x-4 bg-white text-slate-950 px-12 py-6 rounded-2xl text-xl font-black hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <span>Dapatkan Estimasi Biaya</span>
                <ChevronDown className="-rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Profile = () => (
  <section id="profil" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-16 p-10 md:p-16 rounded-[4rem] bg-slate-50 border border-slate-100">
        <div className="md:w-[40%] flex-shrink-0 relative group">
          <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-xl group-hover:bg-blue-600/10 transition-all"></div>
          <img 
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
            className="w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl relative"
            alt="Mhd. Hakim Syukri"
          />
        </div>
        <div className="md:w-[60%] space-y-8">
          <div className="space-y-2">
            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">Managing Partner</span>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none">Mhd. Hakim Syukri, S.H.</h3>
          </div>
          
          <div className="h-1 w-20 bg-blue-600"></div>
          
          <p className="text-2xl text-slate-700 leading-relaxed font-light italic">
            "Hukum keluarga adalah tentang menjembatani konflik dengan martabat. Kami tidak hanya menyelesaikan kasus di kertas, tapi memastikan transisi hidup Anda berjalan sehalus mungkin."
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
            <div className="space-y-2">
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Keahlian Khusus</p>
              <div className="flex flex-wrap gap-2">
                {['Mediasi', 'Litigasi Perdata', 'Hukum Waris'].map(skill => (
                  <span key={skill} className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-slate-900">{skill}</span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Kontak Langsung</p>
              <p className="text-slate-900 font-black text-lg">hakimsyukri.mhd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 space-y-4">
        <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">Ulasan Klien</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Hasil Nyata bagi Klien Kami</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { 
            name: "H. Kurniawan", 
            role: "Entrepreneur", 
            text: "Tim Nusa Legal sangat detail menangani sengketa aset waris keluarga kami. Mereka memprioritaskan mediasi sebelum litigasi, yang menyelamatkan hubungan keluarga kami." 
          },
          { 
            name: "Ny. Sari", 
            role: "Profesional", 
            text: "Sangat tenang menghadapi proses cerai karena didampingi tim yang sangat suportif. Mereka menjelaskan semua hak saya tanpa ada yang ditutupi." 
          },
          { 
            name: "Bpk. Aditya", 
            role: "Klien Perdata", 
            text: "Transparansi biayanya luar biasa. Saya tahu persis progres kasus saya setiap minggu tanpa harus bertanya. Profesionalisme tingkat tinggi." 
          }
        ].map((t, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all">
            <div className="text-blue-600 mb-6 flex space-x-1">
              {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">"{t.text}"</p>
            <div className="flex items-center space-x-4 border-t border-slate-50 pt-8">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center font-black text-white text-xl">
                {t.name[0]}
              </div>
              <div>
                <p className="font-black text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group border-b border-slate-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-500 text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-32 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 space-y-4">
        <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs">Pusat Informasi</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Pertanyaan Umum</h2>
      </div>
      <div className="space-y-2">
        <FAQItem 
          question="Apakah konsultasi saya dijamin kerahasiaannya?" 
          answer="Ya. Berdasarkan Kode Etik Advokat dan kebijakan internal kami, seluruh percakapan dan dokumen yang diberikan klien dilindungi oleh hak imunitas dan kerahasiaan profesi yang sangat ketat." 
        />
        <FAQItem 
          question="Bagaimana jika saya berdomisili di luar kota?" 
          answer="Kami melayani klien dari seluruh wilayah Indonesia melalui konsultasi virtual via Zoom, Google Meet, atau Video Call WhatsApp. Penandatanganan dokumen bisa dilakukan secara digital atau via kurir." 
        />
        <FAQItem 
          question="Berapa lama estimasi penyelesaian kasus?" 
          answer="Durasi sangat bergantung pada kooperatifitas para pihak. Perceraian tanpa sengketa biasanya selesai dalam 2-3 bulan. Untuk kasus dengan sengketa aset, kami akan memberikan 'Legal Timeline' di awal kerjasama." 
        />
        <FAQItem 
          question="Apakah ada biaya tersembunyi?" 
          answer="Sama sekali tidak. Sebelum memulai kerjasama, kami memberikan surat penawaran biaya (Fee Proposal) yang merinci seluruh biaya jasa, biaya administrasi pengadilan, hingga sukses fee jika ada." 
        />
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-600 z-0"></div>
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-12">
      <h2 className="text-4xl md:text-7xl font-black text-white leading-tight max-w-4xl mx-auto">
        Amankan Hak Anda dan Keluarga Hari Ini.
      </h2>
      <p className="text-2xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
        Satu sesi konsultasi dapat memberikan kejernihan bagi seluruh masa depan Anda. Jangan menunda perlindungan hukum Anda.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a 
          href="https://wa.me/6281261617763" 
          className="group bg-white text-blue-600 px-12 py-7 rounded-[2rem] text-2xl font-black hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 flex items-center space-x-4"
        >
          <MessageCircle size={32} />
          <span>Mulai Chat Sekarang</span>
        </a>
        <div className="text-white flex items-center space-x-4">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-600 bg-slate-200"></div>
            ))}
          </div>
          <span className="font-bold">Beberapa klien sedang berkonsultasi</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <span className="text-3xl font-black text-white tracking-tighter">
            Nusa<span className="text-blue-500">Legal</span>
          </span>
          <p className="text-lg leading-relaxed font-light">
            Mendedikasikan profesionalisme hukum untuk melindungi integritas keluarga Indonesia melalui pendekatan yang cerdas dan empatik.
          </p>
          <div className="flex space-x-4">
            {/* Social icons could go here */}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Layanan</h4>
          <ul className="space-y-4 font-bold">
            <li><a href="#layanan" className="hover:text-white transition-colors">Pendampingan Cerai</a></li>
            <li><a href="#layanan" className="hover:text-white transition-colors">Sengketa Hak Asuh</a></li>
            <li><a href="#layanan" className="hover:text-white transition-colors">Pembagian Warisan</a></li>
            <li><a href="#layanan" className="hover:text-white transition-colors">Mediasi Keluarga</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Hubungi Konsultan</h4>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4 group">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Phone size={18} className="text-blue-500 group-hover:text-white" />
              </div>
              <span className="font-bold text-slate-200">0812 6161 7763</span>
            </li>
            <li className="flex items-start space-x-4 group">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Mail size={18} className="text-blue-500 group-hover:text-white" />
              </div>
              <span className="font-bold text-slate-200">hakimsyukri.mhd@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Jam Operasional</h4>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Senin - Jumat</span>
              <span className="text-slate-200 font-bold">09:00 - 17:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sabtu</span>
              <span className="text-slate-200 font-bold">09:00 - 12:00</span>
            </li>
            <li className="flex justify-between">
              <span>Minggu</span>
              <span className="text-blue-500 font-bold italic underline">Emergency Only</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">© 2024 Nusa Legal Konsultan. Semua Hak Dilindungi.</p>
        <div className="flex space-x-8 text-sm uppercase tracking-widest font-black">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingWA = () => (
  <a 
    href="https://wa.me/6281261617763" 
    className="fixed bottom-8 right-8 z-[200] group"
    aria-label="Konsultasi Langsung via WhatsApp"
  >
    <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/40 transition-all animate-pulse"></div>
    <div className="relative bg-green-500 text-white p-5 rounded-full shadow-2xl transform transition-all group-hover:scale-110 group-hover:-rotate-12 flex items-center justify-center">
      <MessageCircle size={38} />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat Konsultan Sekarang
      </span>
    </div>
  </a>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Privacy Bar */}
      <div className="bg-slate-50 border-y border-slate-200 py-6 relative z-30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
            <Lock size={20} />
            <span className="font-bold text-xs uppercase tracking-tighter">100% Rahasia</span>
          </div>
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
            <ShieldCheck size={20} />
            <span className="font-bold text-xs uppercase tracking-tighter">Terlisensi PERADI</span>
          </div>
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
            <Zap size={20} />
            <span className="font-bold text-xs uppercase tracking-tighter">Respon Cepat 24/7</span>
          </div>
          <div className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
            <CheckCircle2 size={20} />
            <span className="font-bold text-xs uppercase tracking-tighter">Hasil Teruji</span>
          </div>
        </div>
      </div>

      <Services />
      <Features />
      <Pricing />
      <Profile />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWA />
      
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
}
