const app = Vue.createApp({
  data() {
    return {
      pageNumber: parseInt(localStorage.getItem('currentPage')) || 0,
      pagesData: [
        {
          videoPath: './public/Hpee77I.gif.mp4',
          title: 'Intro',
          question: 'Qual é a cor do cavalo branco de Napoleão?',
          answers: [
            'Branco',
            'Preto',
            'Azul',
            'Marrom'
          ],
          rightAnswer: 'Branco'
        },
        {
          videoPath: './public/Hpee77I.gif.mp4',
          title: 'Pergunta 1',
          question: 'Qual o nome do país que moramos?',
          answers: [
            'Brasil',
            'EUA',
            'Canadá',
            'Itália'
          ],
          rightAnswer: 'Canadá'
        },
        {
          videoPath: './public/cappuccino.mp4',
          title: 'Pergunta 2',
          question: 'Quantos anos tem o Mauricio?',
          answers: [
            '12',
            '26',
            '56',
            '34'
          ],
          rightAnswer: '34'
        },
        {
          videoPath: './public/cappuccino.mp4',
          title: 'Fechamento',
          question: 'Você conhece o Pinóquio?',
          answers: [],
          rightAnswer: null
        }
      ],
      answeredCorrectly: false,
      currentAnswer: null,
      answerChecked: null
    };
  },
  methods: {
    pageObj() {
      return Object.assign({}, this.pagesData[this.pageNumber]);
    },
    checkAnswer(event) {
      const obj = Object.assign({}, this.pagesData[this.pageNumber]);
      this.currentAnswer = event.target.value;
      if (obj.rightAnswer === this.currentAnswer || obj.rightAnswer === null) {
        this.answeredCorrectly = true;
      } else {
        this.answeredCorrectly = false;
      };
    },
    goToPage(pageNumber) {
      this.pageNumber = pageNumber;
      localStorage.setItem('currentPage', this.pageNumber);

      this.resetState();
    },
    resetState() {
      // clears all radio inputs
      // this.answerChecked = false;
      document.querySelectorAll('#events input').forEach((item) => {
        item.checked = false;
      });

      this.answeredCorrectly = false;
      this.currentAnswer = null;

      // reloads video with updated src
      const video = document.querySelector("#events video");
      video.load();
    },
    notLastPage() {
      return this.pageNumber < this.pagesData.length - 1;
    },
    notFirstPage() {
      return this.pageNumber > 0;
    }
  }
});

app.mount('#pages');
