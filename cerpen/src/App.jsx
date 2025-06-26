import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Star, Heart } from "lucide-react";
import cover from "./assets/cover.png";
import cover2 from "./assets/cover2.png";
import cover3 from "./assets/cover3.png";
import cover4 from "./assets/cover4.png";
import cover5 from "./assets/cover5.png";
import cover6 from "./assets/cover6.png";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stories = [
    {
      id: 1,
      title: "Petualangan di Hutan Mistis",
      content: `Salatiga, sebuah kota kecil di lereng Gunung Merbabu, terasa terlalu tenang bagi Nina. Ia baru seminggu berada di sini, tapi rindu pada hiruk pikuk Medan sudah menyesakkan dadanya. Jalan-jalan yang lengang, suara kendaraan yang jarang terdengar, serta udara sejuk yang menusuk tulang membuat Nina merasa jauh dari rumah. 
      Sebagai mahasiswa baru jurusan Bimbingan dan Konseling, Nina datang ke Salatiga dengan semangat. Ia ingin menjadi seseorang yang bisa memahami dan membantu orang lain. Tapi siapa sangka, justru dirinya sendiri yang kini butuh bantuan.
      <br/>
      <br/>
      Bahasa orang-orang di sekitarnya terdengar lembut, bahkan terlalu lembut. Kadang ia harus memiringkan kepala untuk bisa menangkap maksud ucapan dosen atau teman-temannya. Ketika ia berbicara dengan logat khas Medan yang tegas dan lantang, orang-orang hanya tersenyum canggung. Beberapa terlihat kaget, meskipun tak ada yang menegurnya langsung.
`,
      image: cover,
    },
    {
      id: 2,
      title: "Petualangan di Hutan Mistis",
      content: `Keesokan hari di kantin kampus, Nina duduk sendiri. Nasi pecel yang disodorkan padanya hanya ia sentuh sedikit. "Manis kali, kok bisa ya sayur dikasih gula begini," gumamnya pelan. Rasa asing menjalar dari lidahnya sampai ke hati. Ia mulai jarang keluar kamar, dan hanya menjawab singkat saat Rara, teman sekamarnya di kos, mengajaknya bicara.
 <br/>
      <br/>
      “Lagi capek aja, Ra,” ucap Nina suatu sore, sambil terus menatap layar ponselnya.
Padahal bukan capek. Ia merasa kosong. Bahkan kelas yang dulu ia impikan terasa membingungkan. Dalam diskusi kelompok, Nina sering berkomentar jujur dan langsung, sesuatu yang biasa di keluarganya. Tapi di sini, teman-temannya lebih memilih mengangguk sopan dan berdiam. Ada yang terlihat tak nyaman. Seorang teman bahkan pernah berkata, “Kamu kayak marah ya, padahal cuma ngobrol.”
`,
      image: cover2,
    },
    {
      id: 3,
      title: "Petualangan di Hutan Mistis",
      content: `Ucapan itu menghantam keras. Sejak saat itu, Nina semakin memilih diam. Ia lebih banyak mengamati dan menyimpan segalanya dalam hati. Rasa tidak cocok itu terus tumbuh, hingga suatu hari, seorang dosen berkata dengan lembut, “Nina, saya perhatikan kamu tampak tidak bersemangat. Ada yang ingin kamu bicarakan?”
      <br/>
      <br/>
      Nina hanya tersenyum lemah. Ia tidak tahu harus mulai dari mana.
Malam itu, ia menangis. Bukan karena dosen itu salah, tapi karena beliau benar. Ia merasa gagal. Gagal beradaptasi, gagal berteman, gagal menjadi versi terbaik dari dirinya. Ia merindukan rumah, keluarganya, makanan pedas yang membakar lidah, dan suasana penuh tawa yang meledak-ledak tanpa perlu merasa sungkan.`,
      image: cover2,
    },
    {
      id: 4,
      title: "Petualangan di Hutan Mistis",
      content: `Di bawah cahaya remang kamar kos, Nina menulis pesan panjang untuk orang tuanya. Ia memohon izin untuk pulang dan pindah kampus. Ia merasa tidak sanggup. Tapi setelah selesai menulis, ia hanya menatap pesan itu dalam diam. Jarinya menggantung di atas tombol kirim. Tak ada yang terjadi malam itu selain air mata yang mengalir pelan dan isi hati yang mengendap dalam draft.
“Kenapa hidupku berubah secepat ini hanya karena tempat?” pikirnya. Ia merasa seperti benih yang ditanam di tanah asing, tidak tumbuh, hanya membusuk perlahan.
`,
      image: cover3,
    },
    {
      id: 5,
      title: "Petualangan di Hutan Mistis",
      content: `Keesokan paginya, Nina duduk termenung di dapur kos. Sinar matahari masuk malu-malu dari celah jendela. Ia menggenggam cangkir teh hangat yang tak disentuh sejak tadi.
Rara masuk pelan. “Nina, kamu nggak kuliah hari ini?” tanyanya sambil menuang air.
“Enggak. Males,” jawab Nina tanpa menoleh.
Rara duduk di seberangnya. “Boleh cerita?” tanyanya pelan.
Nina diam lama, tapi akhirnya mengangguk pelan. Ia mulai bercerita, awalnya terbata, kemudian mengalir. Tentang rasa asing, tentang logat yang jadi jurang, tentang makanan yang tak bisa diterima lidah, tentang perasaan selalu salah dan berbeda.
Rara mendengarkan dengan tenang, tidak menyela. Sesekali ia hanya mengangguk atau tersenyum lembut. “Aku ngerti, Nin. Aku juga dulu ke Jogja dan rasanya aneh banget. Tapi lama-lama, kita bisa belajar,” ujarnya.`,
      image: cover4,
    },
    {
      id: 6,
      title: "Petualangan di Hutan Mistis",
      content: `Keesokan paginya, Nina duduk termenung di dapur kos. Sinar matahari masuk malu-malu dari celah jendela. Ia menggenggam cangkir teh hangat yang tak disentuh sejak tadi.
Hari-hari berikutnya, Rara mulai mengajak Nina keluar. Mereka ke pasar tradisional, membeli tempe goreng hangat dan cilok pedas yang, walaupun tak sepedas makanan Medan, setidaknya bisa membuat Nina tersenyum. Mereka mampir ke warung soto, dan Rara memperkenalkan Nina pada berbagai istilah Jawa yang terdengar asing tapi lucu.
Nina mulai mencoba lagi. Ia ikut kelompok diskusi kecil, meski masih kaku. Ia mulai bertanya di kelas, meski suaranya pelan. Ia mulai menyapa beberapa teman dan bahkan mengoreksi cara bicaranya agar lebih bisa dipahami. Meski belum sepenuhnya merasa cocok, setidaknya ia tidak merasa sendirian.`,
      image: cover5,
    },
    {
      id: 7,
      title: "Petualangan di Hutan Mistis",
      content: `Suatu sore, Bu Rini, pemilik kos, memanggil Nina yang sedang membaca di ruang tamu. “Nduk, sini temani Ibu sebentar,” ajaknya sambil menyiapkan teh.
Nina duduk di samping Bu Rini, menikmati semilir angin yang membelai pelan.
“Kamu pintar, Nduk. Ibu tahu kamu kuat. Tapi kuat itu bukan berarti harus selalu bisa sendiri,” kata Bu Rini dengan suara lembut. “Tempat baru memang butuh waktu. Tapi kamu akan kuat karena kamu mencoba. dan yang mencoba, selalu lebih maju dari yang hanya diam.”
<br/>
Kata-kata itu menghantam pelan tapi dalam. Air mata Nina mengalir, tapi kali ini bukan karena kesedihan. Ia merasa dimengerti, dihargai. Pelan-pelan, luka yang ia rasakan mulai sembuh, digantikan semangat yang perlahan kembali tumbuh.
Sejak hari itu, Nina menulis jurnal harian. Ia mulai merekam video kecil tentang kesehariannya sebagai mahasiswa perantauan—cerita tentang pasar tradisional, tentang logat yang ia pelajari, tentang makanan yang ia cicipi, bahkan tentang kesepian yang akhirnya mengajarkannya arti keberanian.
Ia ikut komunitas debat, bukan lagi untuk membuktikan diri, tapi untuk belajar memahami cara pandang orang lain. Ia tidak lagi takut salah, karena kini ia tahu: salah adalah bagian dari tumbuh.
`,
      image: cover6,
    },
    {
      id: 8,
      title: "Petualangan di Hutan Mistis",
      content: `Nina tidak hanya beradaptasi. Ia mulai menginspirasi. Beberapa mahasiswa baru dari luar daerah mulai mendatanginya, bertanya dan curhat. Ia mendengarkan mereka dengan sabar, seperti dulu Rara mendengarkannya.
Langkah kecil yang dulu ia buat dengan berat hati kini berubah menjadi langkah penuh percaya diri. Salatiga tak lagi terasa asing. Ia bukan rumah, memang. Tapi kini, Salatiga adalah tempat di mana Nina tumbuh.
Culture shock bukan akhir. Bukan pula alasan untuk menyerah. Bagi Nina, itu adalah pintu. Pintu menuju versi dirinya yang lebih kuat, lebih bijak, dan lebih terbuka.
Semua itu dimulai dari satu langkah kecil, di kota kecil, oleh hati yang memilih untuk tidak berhenti.`,
      image: cover6,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, [stories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex items-center justify-center px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-amber-300/20"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <BookOpen className="mx-auto h-20 w-20 text-amber-600 mb-6 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
              Langkah Kecil di Kota Baru
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sebuah perjalanan menemukan jati diri di tengah perbedaan budaya dan
            tantangan kehidupan perantauan
          </p>

          <div className="flex items-center justify-center gap-4 text-amber-600">
            <Star
              className="h-6 w-6 fill-current animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <Star
              className="h-6 w-6 fill-current animate-bounce"
              style={{ animationDelay: "200ms" }}
            />
            <Star
              className="h-6 w-6 fill-current animate-bounce"
              style={{ animationDelay: "400ms" }}
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Story Carousel Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Perjalanan Nina Menemukan Rumah Baru
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Ikuti kisah inspiratif tentang adaptasi, persahabatan, dan
              pertumbuhan pribadi
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 backdrop-blur-sm border border-amber-200">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {stories.map((story, index) => (
                  <div key={story.id} className="w-full flex-shrink-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Story Content */}
                      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="space-y-6">
                          <p
                            className="text-lg md:text-xl text-amber-800 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: story.content }}
                          ></p>
                        </div>
                      </div>

                      {/* Story Image */}
                      <div className="flex-1 relative p-4 flex items-center justify-center">
                        <div className="aspect-[4/6] w-full">
                          <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-amber-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-amber-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-amber-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-amber-600 scale-125"
                      : "bg-amber-300 hover:bg-amber-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-800 to-amber-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <BookOpen className="mx-auto h-12 w-12 mb-4 opacity-80" />
          <p className="text-lg opacity-90">Tiorida Hutabarat © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
