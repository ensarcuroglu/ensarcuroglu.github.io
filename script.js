// script.js

// Örnek basit Quiz mantığı
const quizData = [
    {
      question: "Gözdenin En Sevgiği Renk?",
      answers: ["Pembe", "Kırmızı", "Yeşil", "Siyah"],
      correct: 0 // Pembe
    },
    {
      question: "En sevdiği turşu türü hangisi?",
      answers: ["Kornişon", "Salatalık", "Biber", "Gabalak"],
      correct: 3 // Gabalak
    },
    {
      question: "Aldığım ilk hediye?",
      answers: ["Kolye", "T-Shirt", "Mum", "Küpe"],
      correct: 2 // Mum
    },
    {
      question: "Benim en sevdiğim tatlı hangisi?",
      answers: ["Baklava", "Tiramisu", "San Sebastian", "Kurabiye"],
      correct: 2 // San Sebastian
    },
    {
      question: "En sevdiğim müzik türü nedir?",
      answers: ["Rock", "Rap", "Pop", "Klasik"],
      correct: 1 // Rap
    },
    {
      question: "Beni en çok hangi durumda mutlu edersin?",
      answers: ["Tatlı bir sürpriz yapınca", "Sarıldığında", "Komik bir şey söylediğinde", "Dışarı çıkmayı teklif ettiğinde"],
      correct: 1 // Sarıldığında
    },
    {
      question: "Sence bir gün seni en mutlu edecek hayalim ne?",
      answers: ["Dünyayı gezmek", "Birlikte yaşlanmak", "Büyük bir ev sahibi olmak", "Hayalimizdeki işi yapmak"],
      correct: 0 // Dünyayı gezmek
    },
    {
      question: "Sence bir gün seni en mutlu edecek hayalim ne?",
      answers: ["Dünyayı gezmek", "Birlikte yaşlanmak", "Büyük bir ev sahibi olmak", "Hayalimizdeki işi yapmak"],
      correct: 0 // Dünyayı gezmek
    }
  ];
  
  function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizData.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("quiz-question");
  
      const questionText = document.createElement("h3");
      questionText.textContent = (index + 1) + ". " + q.question;
      questionDiv.appendChild(questionText);
  
      q.answers.forEach((answer, i) => {
        const label = document.createElement("label");
        label.style.display = "block";
  
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "question" + index;
        input.value = i;
  
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        questionDiv.appendChild(label);
      });
  
      quizContainer.appendChild(questionDiv);
    });
  }
  
  function showQuizResults() {
    let score = 0;
    quizData.forEach((q, index) => {
      const radios = document.getElementsByName("question" + index);
      radios.forEach(radio => {
        if (radio.checked && parseInt(radio.value) === q.correct) {
          score++;
        }
      });
    });
    alert("Quiz sonucunuz: " + score + "/" + quizData.length);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("heartsCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];
    function createHeart() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 2,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.5
        };
    }
    function drawHeart(h) {
        ctx.fillStyle = `rgba(255, 105, 180, ${h.opacity})`;
        ctx.beginPath();
        ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
        ctx.fill();
    }
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hearts.forEach(h => {
            h.y += h.speed;
            if (h.y > canvas.height) {
                Object.assign(h, createHeart());
            }
            drawHeart(h);
        });
        requestAnimationFrame(update);
    }
    for (let i = 0; i < 50; i++) hearts.push(createHeart());
    update();
});

  
  // Sayfa yüklendiğinde quiz yükleyelim
  document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("quiz-container")) {
      loadQuiz();
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".complete-btn");
  
    buttons.forEach(button => {
      button.addEventListener("click", (e) => {
        const card = e.target.parentElement;
        card.classList.toggle("completed");
  
        // Butonun metnini değiştir
        if (card.classList.contains("completed")) {
          button.textContent = "Tamamlandı ✓";
        } else {
          button.textContent = "Tamamlandı";
        }
      });
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-plan-form");
    const container = document.querySelector(".container");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Sayfanın yeniden yüklenmesini önler
  
      // Form verilerini al
      const title = document.getElementById("plan-title").value.trim();
      const description = document.getElementById("plan-description").value.trim();
  
      if (title && description) {
        // Yeni kart oluştur
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML = `
          <h2>${title}</h2>
          <p>${description}</p>
          <button class="complete-btn">Tamamlandı</button>
        `;
  
        // Yeni kartı listeye ekle
        container.insertBefore(newCard, form.parentElement);
  
        // Formu sıfırla
        form.reset();
      }
    });
  
    // Mevcut ve yeni eklenen tamamlandı butonlarını işlemek
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("complete-btn")) {
        const card = e.target.parentElement;
        card.classList.toggle("completed");
  
        // Buton metni değişimi
        e.target.textContent = card.classList.contains("completed") ? "Tamamlandı ✓" : "Tamamlandı";
      }
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".reveal-btn");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const answer = button.nextElementSibling; // Cevap span'ını seç
  
        if (answer.style.display === "none") {
          answer.style.display = "inline"; // Cevabı göster
          button.textContent = "Cevabı Gizle"; // Buton metnini güncelle
        } else {
          answer.style.display = "none"; // Cevabı gizle
          button.textContent = "Cevabı Göster"; // Buton metnini eski haline getir
        }
      });
    });
  });
  