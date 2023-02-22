var quiz = {
    user: "Dave",
    questions: [
      {
        text: "Bilangan Biner adalah system bilangan?",
        responses: [{ text: "Basis 2 yaitu 1 dan 2" }, { text: "Basis 2 yaitu 0 dan 1", correct: true }, { text: "Basis 2 yaitu 0 dan 2" }, { text: "Basis 3 yaitu 0 dan 1" }],
      },

      {
        text: "Bilangan Oktal adalah system bilangan?",
        responses: [{ text: "Basis 8 yaitu 0,1,2,3,4,5,6,7", correct: true }, { text: "Basis 8 yaitu 1,2,3,4,5,6,7,8" }, { text: "Basis 8 yaitu 0,1,2,4,5,6,7,8" }, { text: "Basis 7 yaitu 0,1,2,3,4,5,6,7" }],
      },

      {
        text: "Sistem bilangan berbasis 3 adalah?",
        responses: [{ text: "Binary" }, { text: "Ternary", correct: true }, { text: "Quartenary" }, { text: "Quinary" }],
      },

      {
        text: "Sistem bilangan berbasis 5 adalah _________",
        responses: [{ text: "Quinary", correct: true }, { text: "Quartenary" }, { text: "Senary" }, { text: "Binary" }],
      },

      {
        text: "Komponen ini digunakan untuk menyimpan data sementara ketika sistem dijalankan dan dapat diakses secara acak (random). Komponen tersebut adalah?",
        responses: [{ text: "I/O port" }, { text: "HDD" }, { text: "RAM", correct: true }, { text: "ROM" }],
      },

      {
        text: "Perangkat keras yang dihubungkan ke komputer untuk meningkatkan kegunaannya disebut dengan?",
        responses: [{ text: "ROM" }, { text: "Mikroprosesor" }, { text: "Periferal", correct: true }, { text: "CPU" }],
      },

      {
        text: "Berikut ini adalah karakteristik sistem memori secara umum, kecuali? ",
        responses: [{ text: "Kualitas", correct: true }, { text: "Lokasi" }, { text: "Kapasitas" }, { text: "Satuan Transfer" }],
      },

      {
        text: "Karakteristik sistem memori berdasarkan kapasitas dinyatakan dalam bentuk",
        responses: [{ text: "Bit" }, { text: "Byte", correct: true }, { text: "Hz" }, { text: "Watt" }],
      },

      {
        text: "Karakteristik sistem memori berdasarkan satuan transfer dinyatakan dalam?",
        responses: [{ text: "Byte" }, { text: "Hz" }, { text: "Bit", correct: true }, { text: "Watt" }],
      },

      {
        text: "Berikut adalah komponen utama CPU, kecuali?",
        responses: [{ text: "Arithmetic and Logic Unit (ALU)" }, { text: "Memori Eksternal", correct: true }, { text: "Control Unit (CU)" }, { text: "CPU Interconnections" }],
      },
    ],
  },
  userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false,
  },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    },
  },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (typeof this.quiz.questions[i].responses[this.userResponses[i]] !== "undefined" && this.quiz.questions[i].responses[this.userResponses[i]].correct) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    },
  },
});
