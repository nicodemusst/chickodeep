class ChickoDeep {
    constructor(name) {
      this.name = name;
      this.isLearning = true;
      this.brainPower = 20;
    }
  
    learnNewTask(task) {
      if (this.isLearning && this.brainPower > 0) {
        console.log(`${this.name} is learning a new task: ${task}`);
        this.brainPower -= 10;
      } else {
        console.log(`${this.name} is too tired to learn. Rest and recharge its brain!`);
      }
    }
  
    demonstrateLearning() {
      if (this.isLearning && this.brainPower > 0) {
        console.log(`${this.name} demonstrates its deep learning capabilities.`);
        this.brainPower -= 20;
      } else {
        console.log(`${this.name} needs more brain power to demonstrate learning.`);
      }
    }
  
    rest() {
      console.log(`${this.name} takes a deep learning nap to recharge its brain.`);
      this.brainPower = 100;
    }
  }
  
  // Example usage:
  const chickoDeep = new ChickoDeep('NeuralNet');
  chickoDeep.learnNewTask('Recognizing images');
  chickoDeep.demonstrateLearning();
  chickoDeep.rest();
  