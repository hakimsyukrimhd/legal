
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
  X
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
    { name: 'Mengapa Kami', href: '#kenapa' },
    { name: 'Profil', href: '#profil' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              Nusa<span className="text-blue-600">Legal</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-600' : 'text-slate-600 md:text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/6281261617763" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Konsultasi Sekarang
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-900' : 'text-slate-900'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6281261617763"
              className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-xl text-lg font-bold mt-4"
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover" 
        alt="Justice Scales"
      />
    </div>

    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="md:max-w-2xl">
        <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 backdrop-blur-md px-4 py-2 rounded-full mb-6">
          <ShieldCheck className="text-blue-400" size={18} />
          <span className="text-blue-100 text-xs font-semibold uppercase tracking-wider">Terpercaya & Berlisensi</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Hadapi Masalah Hukum Keluarga dengan <span className="text-blue-400">Tenang & Pasti</span>.
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
          Nusa Legal Konsultan hadir untuk memberikan solusi hukum yang profesional, aman, dan berempati. Kami melindungi hak dan masa depan Anda serta keluarga dengan integritas penuh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a 
            href="https://wa.me/6281261617763" 
            className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-900/20"
          >
            <MessageCircle size={24} />
            <span>Konsultasi WhatsApp</span>
          </a>
          <a 
            href="#layanan" 
            className="flex items-center justify-center space-x-2 bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-all shadow-lg"
          >
            <span>Lihat Layanan Kami</span>
          </a>
        </div>
      </div>
    </div>
    
    {/* Floating Badge */}
    <div className="hidden lg:block absolute bottom-10 right-10 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl z-20 animate-bounce-slow">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-600 p-3 rounded-xl">
          <Scale className="text-white" size={24} />
        </div>
        <div className="text-left">
          <p className="text-white font-bold text-lg">100+ Kasus</p>
          <p className="text-slate-300 text-sm">Selesai dengan Baik</p>
        </div>
      </div>
    </div>
  </header>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group flex flex-col h-full">
    <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <Icon className="text-blue-600 group-hover:text-white transition-colors" size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{description}</p>
    <a 
      href={`https://wa.me/6281261617763?text=Halo%20Nusa%20Legal,%20saya%20ingin%20tanya%20tentang%20${encodeURIComponent(title)}`} 
      className="text-blue-600 font-bold flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
    >
      <span>Konsultasi Layanan</span>
      <ChevronDown className="-rotate-90" size={16} />
    </a>
  </div>
);

const Services = () => (
  <section id="layanan" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Layanan Kami</h2>
        <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Solusi Hukum Keluarga yang Komprehensif</p>
        <p className="text-lg text-slate-600">Kami fokus memberikan pendampingan hukum pada aspek-aspek krusial dalam kehidupan keluarga Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard 
          icon={Users} 
          title="Perceraian" 
          description="Pendampingan proses gugatan atau permohonan cerai dengan pendekatan yang meminimalisir konflik emosional."
        />
        <ServiceCard 
          icon={HeartHandshake} 
          title="Hak Asuh Anak" 
          description="Memperjuangkan kepentingan terbaik bagi anak Anda untuk memastikan hak pengasuhan yang adil dan legal."
        />
        <ServiceCard 
          icon={Scale} 
          title="Waris" 
          description="Penyelesaian sengketa atau pembagian harta warisan secara transparan sesuai ketentuan hukum yang berlaku."
        />
        <ServiceCard 
          icon={ShieldCheck} 
          title="Konsultasi Hukum" 
          description="Diskusi mendalam untuk memahami posisi hukum Anda dan merencanakan langkah strategis yang paling aman."
        />
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="kenapa" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl z-10 relative"
              alt="Professional Meeting"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 w-32 h-32 rounded-3xl -z-10"></div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Keunggulan Kami</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Mengapa Memercayakan Masalah Anda kepada Kami?</p>
          
          <div className="space-y-6">
            {[
              { title: 'Pendekatan Profesional & Etis', desc: 'Kami menjunjung tinggi kode etik advokat dalam setiap langkah pendampingan.' },
              { title: 'Privasi Klien Terjaga', desc: 'Setiap informasi dan dokumen yang Anda bagikan bersifat rahasia dan terlindungi sepenuhnya.' },
              { title: 'Transparansi Proses & Biaya', desc: 'Tidak ada biaya tersembunyi. Kami menjelaskan skema biaya di awal secara detail.' },
              { title: 'Pendampingan dari Awal hingga Selesai', desc: 'Kami mendampingi Anda di setiap tahap, mulai dari mediasi hingga putusan akhir.' }
            ].map((feature, i) => (
              <div key={i} className="flex space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
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
  <section className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">Skema Layanan</h2>
      <p className="text-3xl md:text-4xl font-extrabold mb-12">Fleksibel & Terjangkau</p>
      
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl">
        <p className="text-xl mb-6">Kami memahami setiap kasus memiliki tingkat kompleksitas yang berbeda.</p>
        <div className="text-5xl font-bold text-blue-400 mb-4">Konsultasi Awal Gratis</div>
        <p className="text-slate-400 mb-8">Biaya jasa profesional (Success Fee) disesuaikan dengan tingkat kerumitan perkara. Kami mengutamakan kejelasan nilai investasi hukum Anda sejak hari pertama.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="text-green-500" size={20} />
            <span>Tanpa Biaya Admin</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="text-green-500" size={20} />
            <span>Bisa Cicilan Sesuai Tahapan</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="text-green-500" size={20} />
            <span>Kontrak Kerja Jelas</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Profile = () => (
  <section id="profil" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
        <div className="md:w-1/3 flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
            className="w-full aspect-[4/5] object-cover rounded-2xl shadow-lg"
            alt="Lawyer Profile"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Profil Profesional</h2>
          <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Mhd. Hakim Syukri, S.H.</h3>
          <p className="text-lg text-blue-600 font-medium mb-6">Konsultan Utama Hukum Keluarga</p>
          <p className="text-slate-600 leading-relaxed mb-6 italic">
            "Masalah hukum keluarga bukan sekadar urusan berkas, tapi soal masa depan individu. Fokus utama saya adalah memberikan kepastian hukum dengan cara yang paling bermartabat bagi semua pihak."
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Pengalaman</p>
              <p className="text-slate-900 font-bold">10+ Tahun di Hukum Perdata</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Spesialisasi</p>
              <p className="text-slate-900 font-bold">Mediasi & Litigasi Keluarga</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-extrabold text-slate-900 mb-16">Apa Kata Mereka?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Klien A", role: "Ibu Rumah Tangga", text: "Proses perceraian saya berjalan sangat lancar. Saya tidak merasa diintimidasi oleh proses hukum karena tim Nusa Legal menjelaskan semuanya dengan sangat manusiawi." },
          { name: "Klien B", role: "Profesional", text: "Sangat puas dengan penanganan hak asuh anak. Transparansi biayanya patut diacungi jempol, tidak ada biaya siluman di tengah jalan." },
          { name: "Klien C", role: "Pengusaha", text: "Masalah waris keluarga yang sudah berlarut-larut bertahun-tahun akhirnya selesai dalam waktu kurang dari 6 bulan berkat mediasi tim." }
        ].map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-lg">★</span>)}
            </div>
            <p className="text-slate-600 italic mb-6">"{t.text}"</p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">{t.name[0]}</div>
              <div>
                <p className="text-sm font-bold text-slate-900">{t.name} (Anonim)</p>
                <p className="text-xs text-slate-400">{t.role}</p>
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
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-slate-900 hover:text-blue-600 transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 leading-relaxed animate-fade-in-down">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Pertanyaan yang Sering Diajukan</h2>
      <div className="space-y-4">
        <FAQItem 
          question="Apakah konsultasi bersifat rahasia?" 
          answer="Ya, mutlak. Segala informasi yang dibicarakan dalam sesi konsultasi dilindungi oleh kerahasiaan hubungan antara konsultan hukum dan klien." 
        />
        <FAQItem 
          question="Berapa lama proses hukum keluarga biasanya berlangsung?" 
          answer="Durasi sangat bergantung pada jenis perkara. Kasus perceraian kesepakatan bisa selesai dalam 2-3 bulan, namun kasus sengketa waris yang kompleks bisa lebih lama. Kami akan memberikan estimasi waktu di awal." 
        />
        <FAQItem 
          question="Bagaimana sistem pembayarannya?" 
          answer="Kami menggunakan sistem termin yang jelas. Pembayaran biasanya dibagi menjadi biaya awal (Retainer) dan biaya jasa per tahapan proses (Success Fee) agar tidak memberatkan klien." 
        />
        <FAQItem 
          question="Apakah bisa konsultasi secara online?" 
          answer="Bisa. Kami melayani konsultasi via Zoom, Google Meet, atau Video Call WhatsApp untuk memudahkan Anda yang memiliki keterbatasan waktu atau jarak." 
        />
      </div>
    </div>
  </section>
);

const ClosingCTA = () => (
  <section className="py-24 relative overflow-hidden bg-blue-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Siap Mengambil Langkah Pertama Menuju Solusi?</h2>
      <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Jangan biarkan masalah keluarga membebani pikiran Anda. Kami di sini untuk mendampingi dan memberikan kepastian hukum yang Anda butuhkan.</p>
      <a 
        href="https://wa.me/6281261617763" 
        className="inline-flex items-center space-x-3 bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-2xl"
      >
        <MessageCircle size={28} />
        <span>Hubungi Kami via WhatsApp</span>
      </a>
    </div>
    {/* Abstract Background Element */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 lg:col-span-1">
          <span className="text-2xl font-bold text-white mb-6 block">
            Nusa<span className="text-blue-500">Legal</span>
          </span>
          <p className="text-sm leading-relaxed mb-6">
            Nusa Legal Konsultan adalah penyedia jasa hukum khusus keluarga yang berorientasi pada integritas dan kenyamanan klien di Indonesia.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Navigasi</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Beranda</a></li>
            <li><a href="#layanan" className="hover:text-blue-500 transition-colors">Layanan Hukum</a></li>
            <li><a href="#profil" className="hover:text-blue-500 transition-colors">Profil Konsultan</a></li>
            <li><a href="#faq" className="hover:text-blue-500 transition-colors">Bantuan (FAQ)</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Hubungi Kami</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <Phone size={18} className="text-blue-500 flex-shrink-0" />
              <span>0812 6161 7763</span>
            </li>
            <li className="flex items-start space-x-3">
              <Mail size={18} className="text-blue-500 flex-shrink-0" />
              <span>hakimsyukri.mhd@gmail.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <Clock size={18} className="text-blue-500 flex-shrink-0" />
              <span>Senin - Jumat: 09:00 - 17:00<br/>Sabtu: By Appointment</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Lokasi</h4>
          <li className="flex items-start space-x-3 text-sm">
            <MapPin size={18} className="text-blue-500 flex-shrink-0" />
            <span>Jakarta Selatan, Indonesia<br/>(Melayani Klien Seluruh Indonesia)</span>
          </li>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-900 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Nusa Legal Konsultan. All rights reserved.</p>
        <p className="italic">Disclaimer: Informasi di website ini bukan nasihat hukum formal sampai kontrak ditandatangani.</p>
      </div>
    </div>
  </footer>
);

const FloatingWA = () => (
  <a 
    href="https://wa.me/6281261617763" 
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
    aria-label="Chat via WhatsApp"
  >
    <MessageCircle size={32} />
  </a>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Profile />
      <Testimonial />
      <FAQ />
      <ClosingCTA />
      <Footer />
      <FloatingWA />
      
      {/* Utility Styles for custom animations if needed */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.3s ease-out; }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s infinite ease-in-out; }
      `}</style>
    </div>
  );
}
