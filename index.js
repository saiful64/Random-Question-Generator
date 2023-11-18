class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    let remainingMarks = totalMarks;

    for (const [difficulty, percentage] of Object.entries(
      difficultyDistribution
    )) {
      const marksForDifficulty = Math.floor(totalMarks * (percentage / 100));
      const selectedQuestions = this.selectQuestions(
        difficulty,
        marksForDifficulty
      );
      questionPaper.push(...selectedQuestions);
      remainingMarks -= marksForDifficulty;
    }

    
    while (remainingMarks > 0) {
      const difficulty = this.getRandomDifficulty(difficultyDistribution);
      const selectedQuestions = this.selectQuestions(difficulty, 1);
      questionPaper.push(...selectedQuestions);
      remainingMarks -= 1;
    }

    return questionPaper;
  }
  selectQuestions(difficulty, marks) {
    const filteredQuestions = this.questionStore.filter(
      (q) => q.difficulty === difficulty
    );

    let selectedQuestions = [];
    let selectedMarks = 0;

    while (selectedMarks < marks && filteredQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      const selectedQuestion = filteredQuestions.splice(randomIndex, 1)[0];

      if (selectedMarks + selectedQuestion.marks <= marks) {
        selectedQuestions.push(selectedQuestion);
        selectedMarks += selectedQuestion.marks;
      }
    }

    return selectedQuestions;
  }

  getRandomDifficulty(difficultyDistribution) {
    const difficulties = Object.keys(difficultyDistribution);
    const randomDifficulty =
      difficulties[Math.floor(Math.random() * difficulties.length)];
    return randomDifficulty;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}


const questionStore = [
  {
    question: "What is the capital of Japan?",
    subject: "Geography",
    topic: "World Capitals",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    subject: "Literature",
    topic: "Classic Novels",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the chemical symbol for gold?",
    subject: "Chemistry",
    topic: "Elements",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "In which year did the Titanic sink?",
    subject: "History",
    topic: "20th Century",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the speed of light?",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who developed the theory of relativity?",
    subject: "Physics",
    topic: "Modern Physics",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the largest planet in our solar system?",
    subject: "Astronomy",
    topic: "Planets",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Who painted the Mona Lisa?",
    subject: "Art",
    topic: "Renaissance Art",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the main component of Earth's atmosphere?",
    subject: "Geography",
    topic: "Atmosphere",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who wrote 'Hamlet'?",
    subject: "Literature",
    topic: "Shakespeare",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the capital of Brazil?",
    subject: "Geography",
    topic: "World Capitals",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "How many continents are there in the world?",
    subject: "Geography",
    topic: "World Geography",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who was the first President of the United States?",
    subject: "History",
    topic: "U.S. Presidents",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the square root of 64?",
    subject: "Mathematics",
    topic: "Algebra",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Who painted 'Starry Night'?",
    subject: "Art",
    topic: "Impressionism",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the capital of Australia?",
    subject: "Geography",
    topic: "World Capitals",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who discovered penicillin?",
    subject: "Science",
    topic: "Medicine",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the largest ocean on Earth?",
    subject: "Geography",
    topic: "Oceans",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "Who composed 'Symphony No. 9'?",
    subject: "Music",
    topic: "Classical Music",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the currency of Japan?",
    subject: "Economics",
    topic: "Currencies",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who invented the telephone?",
    subject: "Inventions",
    topic: "Communication",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the formula for water?",
    subject: "Chemistry",
    topic: "Chemical Formulas",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    subject: "Literature",
    topic: "Modern Novels",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the largest mammal on Earth?",
    subject: "Biology",
    topic: "Mammals",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    subject: "Computer Science",
    topic: "Computer Pioneers",
    difficulty: "Medium",
    marks: 10,
  },
  {
    question: "What is the boiling point of water in Celsius?",
    subject: "Chemistry",
    topic: "States of Matter",
    difficulty: "Easy",
    marks: 5,
  },
  {
    question: "Who painted 'The Persistence of Memory'?",
    subject: "Art",
    topic: "Surrealism",
    difficulty: "Hard",
    marks: 15,
  },
  {
    question: "What is the smallest prime number?",
    subject: "Mathematics",
    topic: "Number Theory",
    difficulty: "Medium",
    marks: 10,
  },
];

const generator = new QuestionPaperGenerator(questionStore);

const totalMarks = 100;
const difficultyDistribution = { Easy: 20, Medium: 50, Hard: 30 };

const questionPaper = generator.generateQuestionPaper(
  totalMarks,
  difficultyDistribution
);

questionPaper.forEach((question) => {
  console.log(`Question: ${question.question}`);
  console.log(`Subject: ${question.subject}`);
  console.log(`Topic: ${question.topic}`);
  console.log(`Difficulty: ${question.difficulty}`);
  console.log(`Marks: ${question.marks}`);
  console.log("\n");
});
