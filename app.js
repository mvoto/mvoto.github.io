const app = Vue.createApp({
  data() {
    return {
      pageNumber: parseInt(localStorage.getItem('currentPage')) || 0,
      pagesData: [
        {
          videoPath: './public/video-1.mp4',
          title: '',
          question: 'Você conhece o Pinóquio?',
          answers: [],
          imageUrl: 'https://media1.tenor.com/images/45705162053cce4cf853d122b80a0899/tenor.gif?itemid=5227247',
          rightAnswer: null
        },
        {
          videoPath: './public/video-2.mp4',
          title: '',
          question: 'O que você gostaria de ganhar?',
          answers: [
            'Uma Boneca da Elsa',
            'Um Carrinho HotWeels',
            'Um PlayStation 5',
            'Uma passagem de avião'
          ],
          rightAnswer: null
        },
        {
          videoPath: './public/video-3.mp4',
          title: '',
          question: 'Mentira não é legal...',
          answers: [],
          imageUrl: 'https://i.pinimg.com/originals/6b/b2/80/6bb280ebfbfe472c209efb4a2bc7b011.gif',
          rightAnswer: null
        },
        {
          videoPath: './public/video-4.mp4',
          title: '',
          question: 'O casal mentiroso',
          answers: [],
          imageUrl: 'https://media0.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif',
          rightAnswer: null
        },
        {
          videoPath: './public/video-5.mp4',
          title: '',
          question: 'Mentirinhas mancham o coração',
          answers: [],
          imageUrl: 'https://i.pinimg.com/474x/ec/f1/e7/ecf1e7553873b711e24bd0a3406851db.jpg',
          rightAnswer: null
        },
        {
          videoPath: './public/video-7.mp4',
          title: '',
          question: null,
          answers: [],
          imageUrl: '',
          rightAnswer: null
        },
        {
          videoPath: './public/video-8.mp4',
          title: '',
          question: 'A bola virou melancia :)',
          answers: [],
          imageUrl: 'https://i.imgur.com/ORPMi1e.gif?noredirect',
          rightAnswer: null
        },
        {
          videoPath: './public/video-final-erro.mp4',
          title: '',
          question: 'Erro de gravação, kkkk. Até a próxima!',
          answers: [],
          imageUrl: 'https://i.gifer.com/5XEr.gif',
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
      if (video != undefined) {
        video.load();
      }
    },
    notLastPage() {
      return this.pageNumber < this.pagesData.length - 1;
    },
    notFirstPage() {
      return this.pageNumber > 0;
    },
    nextDisabled() {
      if (this.pageObj().rightAnswer === null) {
        return false;
      } else {
        return this.answeredCorrectly ? null : true;
      }
    }
  }
});

app.mount('#pages');
